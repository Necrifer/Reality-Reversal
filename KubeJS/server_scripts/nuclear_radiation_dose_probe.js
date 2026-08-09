// Temporary, read-only Nuclear Radiation 1.0.8 dose-source probe.
// It is deliberately separate from the MMR cleanup callbacks: a probe error
// cannot stop either environmental decontaminator recipe.

const NR_DOSE_PROBE_ENABLED = false
var NR_DOSE_PROBE_TICK_COUNTER = 0

const NRProbeAttachments = Java.loadClass(
  'igentuman.nr.radiation.storage.NRAttachments'
)
const NRProbeConfig = Java.loadClass(
  'igentuman.nr.config.RadiationConfig'
)
const NRProbeBindings = Java.loadClass(
  'igentuman.nr.api.binding.Bindings'
)
const NRProbeInventoryCache = Java.loadClass(
  'igentuman.nr.radiation.simulation.inventory.InventoryRadCache'
)
const NRProbeWorldRegistry = Java.loadClass(
  'igentuman.nr.radiation.source.WorldSourceRegistry'
)
const NRProbeSimulator = Java.loadClass(
  'igentuman.nr.radiation.simulation.RadiationSimulator'
)
const NRProbeRegistries = Java.loadClass(
  'net.minecraft.core.registries.BuiltInRegistries'
)

PlayerEvents.tick(event => {
  if (!NR_DOSE_PROBE_ENABLED) {
    return
  }

  NR_DOSE_PROBE_TICK_COUNTER++
  if (NR_DOSE_PROBE_TICK_COUNTER % 20 !== 0) {
    return
  }

  // Use var in this temporary probe because the bundled Rhino interpreter can
  // incorrectly retain loop-local const bindings after a script reload.
  var player = event.player
  var level = player.serverLevel()
  var position = player.blockPosition()
  var radiationData = player.getData(
    NRProbeAttachments.ENTITY_RADIATION.get()
  )
  var lungData = player.getData(NRProbeAttachments.LUNG_POLLUTION.get())

  var dimensionLocation = String(level.dimension)
  var biomeId = 'unavailable'
  var backgroundUSvPerHour = 'unavailable'
  try {
    var biomeOptional = level.getBiome(position).unwrapKey()
    var biomeLocation = biomeOptional.isPresent() ?
      biomeOptional.get().location() : null
    biomeId = biomeLocation == null ? 'unknown' : biomeLocation.toString()
    backgroundUSvPerHour = NRProbeConfig.biomeBackgroundUSvPerHour(
      biomeLocation
    )
    if (backgroundUSvPerHour == null) {
      backgroundUSvPerHour =
        NRProbeConfig.DEFAULT_BACKGROUND_USV_PER_HOUR.get()
    }
  } catch (biomeError) {
    biomeId = `unavailable:${biomeError}`
  }

  var blockId = 'unavailable'
  var occupiedBlockBq = 'unavailable'
  try {
    var blockState = level.getBlockState(position)
    var blockLocation = NRProbeRegistries.BLOCK.getKey(
      blockState.getBlock()
    )
    blockId = blockLocation.toString()
    var blockBinding = NRProbeBindings.getBlock(blockLocation)
    occupiedBlockBq = blockBinding == null ? 0 :
      blockBinding.get().totalActivityBq()
  } catch (blockError) {
    blockId = `unavailable:${blockError}`
  }

  var inventoryBq = 'unavailable'
  try {
    var inventoryCache = NRProbeInventoryCache.get(player)
    inventoryCache.markDirty()
    inventoryCache.rescan(player, NR_DOSE_PROBE_TICK_COUNTER)
    inventoryBq = inventoryCache.bqXRay() +
      inventoryCache.bqAlpha() + inventoryCache.bqBeta() +
      inventoryCache.bqNeutron()
  } catch (inventoryError) {
    inventoryBq = `unavailable:${inventoryError}`
  }

  var chunkBq = 'unavailable'
  try {
    var chunk = level.getChunkAt(position)
    var chunkRadiation = chunk.getData(
      NRProbeAttachments.CHUNK_RADIATION.get()
    )
    chunkBq = chunkRadiation.totalActivityBq()
  } catch (chunkError) {
    chunkBq = `unavailable:${chunkError}`
  }

  var inGasCloud = 'unavailable'
  try {
    var registry = NRProbeWorldRegistry.get(level)
    inGasCloud = registry.inGasCloud(player.position())
  } catch (gasError) {
    inGasCloud = `unavailable:${gasError}`
  }

  var vectorMaxBq = 'unavailable'
  try {
    var vector = NRProbeSimulator.get().getChunkVector(
      level,
      player.chunkPosition(),
      position.getY() >> 4
    )
    vectorMaxBq = vector == null ? 0 : vector.maxBq
  } catch (vectorError) {
    vectorMaxBq = `unavailable:${vectorError}`
  }

  console.info(
    `[NR Dose Probe] player=${player.getName().getString()}, ` +
    `rate=${radiationData.svPerHour()} Sv/h, ` +
    `ambient=${radiationData.svPerHourAmbient()} Sv/h, ` +
    `career=${radiationData.svTotalCareer()} Sv, ` +
    `stage=${radiationData.lastDoseStage()}, ` +
    `dimension=${dimensionLocation}, biome=${biomeId}, ` +
    `background=${backgroundUSvPerHour} uSv/h, ` +
    `occupiedBlock=${blockId}, occupiedBlockBq=${occupiedBlockBq}, ` +
    `inventoryBq=${inventoryBq}, ` +
    `internalIsotopes=${radiationData.internalContamination().size()}, ` +
    `lungPollution=${lungData.pollution()}, inGasCloud=${inGasCloud}, ` +
    `localChunkBq=${chunkBq}, vectorMaxBq=${vectorMaxBq}`
  )
})
