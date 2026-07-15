// Modular Machinery Reborn environmental decontaminators.
//
// Nuclear Radiation 1.0.2 does not expose a supported KubeJS cleanup API.
// This integration uses its public Java methods directly; see the matching
// warning JSON in config/codex_warnings before updating Nuclear Radiation.

const NR_TEST_MACHINE = 'modpack:environmental_decontaminator_test'
const NR_PERCENT_MACHINE = 'modpack:environmental_decontaminator'
const NR_TEST_FUNCTION = 'modpack:clear_nuclear_radiation_loaded_area'
const NR_PERCENT_FUNCTION = 'modpack:reduce_nuclear_radiation_loaded_area'

// Radius 1 means the controller chunk plus its eight neighbours (a 3x3 area).
// Unloaded chunks are skipped so that running the machine does not load terrain.
const NR_CLEANUP_RADIUS_CHUNKS = 1

// Production machine removal per completed recipe. Use a value above 0 and at
// or below 1: 0.25 = 25%, 0.5 = 50%, and 1 = a complete cleanup.
const NR_PERCENT_REMOVAL = 0.25

// Broad section range for cached radiation vectors. This covers Y -256 through
// Y 511 without relying on mapped Level height methods that Rhino may hide.
const NR_MIN_CACHE_SECTION = -16
const NR_MAX_CACHE_SECTION = 31

MMREvents.machines(event => {
  event.create(NR_TEST_MACHINE)
    .name('Radiation Cleanup Test Rig')
    .color(0xff6644)
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'CCC',
            'CEC',
            'CCC'
          ],
          [
            'CCC',
            'CmC',
            'CCC'
          ]
        ])
        .keys({
          m: 'modular_machinery_reborn:controller',
          C: 'modular_machinery_reborn:casing_plain',
          E: 'modular_machinery_reborn:energyinputhatch_normal'
        })
    )

  event.create(NR_PERCENT_MACHINE)
    .name('Percentage Environmental Decontaminator')
    .color(0x55ffaa)
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'CCC',
            'CEC',
            'CCC'
          ],
          [
            'CCC',
            'CmC',
            'CCC'
          ]
        ])
        .keys({
          m: 'modular_machinery_reborn:controller',
          C: 'modular_machinery_reborn:casing_reinforced',
          E: 'modular_machinery_reborn:energyinputhatch_normal'
        })
    )
})

ServerEvents.recipes(event => {
  // Fast, inexpensive recipe intended for controlled testing. It removes all
  // stored air, water, and soil contamination from every loaded target chunk.
  event.recipes.modular_machinery_reborn
    .machine_recipe(NR_TEST_MACHINE, 40)
    .requireEnergyPerTick(256)
    .requireFunctionOnEnd(NR_TEST_FUNCTION)
    .id('modpack:environmental_decontamination_test')

  // 600 ticks at 4,096 FE/t = 2,457,600 FE per completed cleanup operation.
  event.recipes.modular_machinery_reborn
    .machine_recipe(NR_PERCENT_MACHINE, 600)
    .requireEnergyPerTick(4096)
    .requireFunctionOnEnd(NR_PERCENT_FUNCTION)
    .id('modpack:environmental_decontamination')
})

function nrProcessLoadedArea(event, removalFraction) {
  const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  const RadiationProfile = Java.loadClass('igentuman.nr.api.RadiationProfile')
  const LeftOverRadSource = Java.loadClass(
    'igentuman.nr.util.tracking.LeftOverRadSource'
  )
  const WorldSourceRegistry = Java.loadClass(
    'igentuman.nr.util.tracking.WorldSourceRegistry'
  )
  const RadiationSimulator = Java.loadClass(
    'igentuman.nr.simulation.RadiationSimulator'
  )
  const NRAttachments = Java.loadClass(
    'igentuman.nr.util.persistence.NRAttachments'
  )

  const controller = event.getTile()
  const level = controller.getLevel()
  const centerChunkPos = level.getChunkAt(controller.getBlockPos()).getPos()
  const sideLength = NR_CLEANUP_RADIUS_CHUNKS * 2 + 1
  const scannedChunks = sideLength * sideLength
  let loadedChunks = 0
  let contaminatedChunks = 0
  let activityBeforeBq = 0
  let activityAfterBq = 0
  let leftoverSources = 0
  let orphanedSimulatorSources = 0
  let leftoverActivityRemovedBq = 0
  const processedChunkPositions = []
  const processedSourceIds = {}

  for (let offsetX = -NR_CLEANUP_RADIUS_CHUNKS;
    offsetX <= NR_CLEANUP_RADIUS_CHUNKS;
    offsetX++) {
    for (let offsetZ = -NR_CLEANUP_RADIUS_CHUNKS;
      offsetZ <= NR_CLEANUP_RADIUS_CHUNKS;
      offsetZ++) {
      // A BlockPos inside the target chunk is enough for isLoaded/getChunkAt.
      // Constructing it directly avoids Rhino selecting an offset overload.
      const targetPos = new BlockPos(
        (centerChunkPos.x + offsetX) * 16,
        0,
        (centerChunkPos.z + offsetZ) * 16
      )

      if (!level.isLoaded(targetPos)) {
        continue
      }

      loadedChunks++
      const chunk = level.getChunkAt(targetPos)
      processedChunkPositions.push(chunk.getPos())
      const radiationData = chunk.getData(
        NRAttachments.CHUNK_RADIATION.get()
      )
      const beforeBq = radiationData.totalActivityBq()

      if (beforeBq > 0) {
        contaminatedChunks++
      }

      activityBeforeBq += beforeBq

      if (removalFraction >= 1) {
        radiationData.setAir(RadiationProfile.empty())
        radiationData.setWater(RadiationProfile.empty())
        radiationData.setSoil(RadiationProfile.empty())
      } else {
        // reduceAtoms divides the isotope atom counts by its argument. Dividing
        // by 1 / (1 - fraction) leaves exactly the requested remainder.
        const reductionDivisor = 1 / (1 - removalFraction)
        radiationData.air().reduceAtoms(reductionDivisor)
        radiationData.water().reduceAtoms(reductionDivisor)
        radiationData.soil().reduceAtoms(reductionDivisor)
      }

      activityAfterBq += radiationData.totalActivityBq()
      chunk.setUnsaved(true)
    }
  }

  // When a radioactive dropped item leaves the level, Nuclear Radiation does
  // not merely contaminate ChunkRadiationData. It deliberately creates a
  // persistent LeftOverRadSource at the item's final block position. This
  // point source is what the live radiation simulator and Geiger reading see.
  const registry = WorldSourceRegistry.get(level)
  const sources = registry.all().toArray()

  for (let index = 0; index < sources.length; index++) {
    const source = sources[index]

    // Do not delete real, currently present block/fluid/item/creative sources.
    if (!(source instanceof LeftOverRadSource)) {
      continue
    }

    const sourcePos = source.getPosition()
    const sourceChunkX = sourcePos.getX() >> 4
    const sourceChunkZ = sourcePos.getZ() >> 4

    if (Math.abs(sourceChunkX - centerChunkPos.x) >
      NR_CLEANUP_RADIUS_CHUNKS ||
      Math.abs(sourceChunkZ - centerChunkPos.z) >
      NR_CLEANUP_RADIUS_CHUNKS) {
      continue
    }

    const sourceActivityBeforeBq = source.activityBq()
    const sourceId = source.getId()
    processedSourceIds[sourceId.toString()] = true
    leftoverSources++

    if (removalFraction >= 1) {
      // Registry removal also removes the source from the simulator index.
      registry.remove(sourceId)
      leftoverActivityRemovedBq += sourceActivityBeforeBq
    } else {
      const reductionDivisor = 1 / (1 - removalFraction)
      source.getProfile().reduceAtoms(reductionDivisor)
      source.recomputeExpiry()
      leftoverActivityRemovedBq +=
        sourceActivityBeforeBq - source.activityBq()
    }
  }

  const simulator = RadiationSimulator.get()
  const indexedSources = simulator.indexFor(level).all().toArray()

  // Defensive second pass: a simulator source can outlive its registry entry
  // if removal and an asynchronous field job cross in the same tick.
  for (let index = 0; index < indexedSources.length; index++) {
    const source = indexedSources[index]

    if (!(source instanceof LeftOverRadSource)) {
      continue
    }

    const sourceId = source.getId()
    if (processedSourceIds[sourceId.toString()]) {
      continue
    }

    const sourcePos = source.getPosition()
    const sourceChunkX = sourcePos.getX() >> 4
    const sourceChunkZ = sourcePos.getZ() >> 4

    if (Math.abs(sourceChunkX - centerChunkPos.x) >
      NR_CLEANUP_RADIUS_CHUNKS ||
      Math.abs(sourceChunkZ - centerChunkPos.z) >
      NR_CLEANUP_RADIUS_CHUNKS) {
      continue
    }

    const sourceActivityBeforeBq = source.activityBq()
    orphanedSimulatorSources++

    if (removalFraction >= 1) {
      simulator.removeSource(level, sourceId)
      leftoverActivityRemovedBq += sourceActivityBeforeBq
    } else {
      const reductionDivisor = 1 / (1 - removalFraction)
      source.getProfile().reduceAtoms(reductionDivisor)
      source.recomputeExpiry()
      leftoverActivityRemovedBq +=
        sourceActivityBeforeBq - source.activityBq()
    }
  }

  // SubChunkRadVector is the cache actually sampled for external dose. The mod
  // does not expose an invalidation method, and getChunkVector does not reject
  // an expired entry. Adjust the loaded target vectors in place so an already
  // removed source cannot leave a phantom Geiger reading.
  const remainingFraction = 1 - removalFraction
  let cachedVectors = 0
  let cachedVectorActivityRemovedBq = 0

  for (let chunkIndex = 0;
    chunkIndex < processedChunkPositions.length;
    chunkIndex++) {
    const chunkPos = processedChunkPositions[chunkIndex]

    for (let sectionY = NR_MIN_CACHE_SECTION;
      sectionY <= NR_MAX_CACHE_SECTION;
      sectionY++) {
      const vector = simulator.getChunkVector(level, chunkPos, sectionY)

      if (vector == null || vector.isEmpty()) {
        continue
      }

      cachedVectors++
      const xRayBq = vector.xRayBq
      const neutronBq = vector.neutronBq

      for (let direction = 0; direction < 6; direction++) {
        const xRayBeforeBq = xRayBq[direction]
        const neutronBeforeBq = neutronBq[direction]
        xRayBq[direction] = xRayBeforeBq * remainingFraction
        neutronBq[direction] = neutronBeforeBq * remainingFraction
        cachedVectorActivityRemovedBq +=
          xRayBeforeBq - xRayBq[direction] +
          neutronBeforeBq - neutronBq[direction]
      }

      vector.maxBq = vector.maxBq * remainingFraction
    }
  }

  // Persist the changed leftover-source list and request a fresh spatial field
  // calculation after invalidating the affected cached vectors.
  registry.saveToLevel()
  simulator.tickWorld(level)

  return {
    scannedChunks: scannedChunks,
    loadedChunks: loadedChunks,
    contaminatedChunks: contaminatedChunks,
    leftoverSources: leftoverSources,
    orphanedSimulatorSources: orphanedSimulatorSources,
    cachedVectors: cachedVectors,
    cachedVectorActivityRemovedBq: cachedVectorActivityRemovedBq,
    chunkActivityRemovedBq: activityBeforeBq - activityAfterBq,
    leftoverActivityRemovedBq: leftoverActivityRemovedBq,
    removedBq:
      activityBeforeBq - activityAfterBq + leftoverActivityRemovedBq
  }
}

MMREvents.recipeFunction(NR_TEST_FUNCTION, event => {
  const result = nrProcessLoadedArea(event, 1)

  console.info(
    `[Radiation Cleanup Test Rig] Removed ${result.removedBq} Bq from ` +
    `${result.contaminatedChunks} contaminated chunk(s); processed ` +
    `${result.loadedChunks}/${result.scannedChunks} loaded chunks and ` +
    `${result.leftoverSources} registry source(s), ` +
    `${result.orphanedSimulatorSources} orphaned simulator source(s), and ` +
    `${result.cachedVectors} cached vector(s) containing ` +
    `${result.cachedVectorActivityRemovedBq} Bq.`
  )
})

MMREvents.recipeFunction(NR_PERCENT_FUNCTION, event => {
  const result = nrProcessLoadedArea(event, NR_PERCENT_REMOVAL)
  const configuredPercent = NR_PERCENT_REMOVAL * 100

  console.info(
    `[Percentage Environmental Decontaminator] Removed ` +
    `${result.removedBq} Bq (${configuredPercent}% configured) from ` +
    `${result.contaminatedChunks} contaminated chunk(s); processed ` +
    `${result.loadedChunks}/${result.scannedChunks} loaded chunks and ` +
    `${result.leftoverSources} registry source(s), ` +
    `${result.orphanedSimulatorSources} orphaned simulator source(s), and ` +
    `${result.cachedVectors} cached vector(s) containing ` +
    `${result.cachedVectorActivityRemovedBq} Bq.`
  )
})

// Active radioactive blocks, fluids, containers, and dropped items remain real
// sources and can contaminate cleaned chunks again after either recipe ends.
