// Yes. This is written by Codex.
// Modular Machinery Reborn test machines for Nature's Aura integration.
//
// Each completed recipe changes aura at the controller, then immediately
// evaluates the resulting value. The reactions are deliberately visible test
// effects and can be replaced independently of the aura-changing recipes.

(() => {

const AURA_DRAIN_MACHINE = 'modpack:aura_drain_test_rig'
const AURA_GENERATOR_MACHINE = 'modpack:aura_generator_test_rig'
const AURA_FUNCTION = 'modpack:modify_natures_aura'

const AURA_CHANGE_PER_RECIPE = 100000
const AURA_MEASUREMENT_RADIUS = 16
const RECIPE_TICKS = 100
const ENERGY_PER_TICK = 128

// Sample thresholds. Tune these after checking the logged area-aura values.
const LOW_AURA_TRIGGER = 500000
const LOW_AURA_RESET = 650000
const HIGH_AURA_TRIGGER = 2500000
const HIGH_AURA_RESET = 2350000
const REACTION_STATE_KEY = 'modpackAuraImmediateReactionState'

MMREvents.machines(event => {
  event.create(AURA_DRAIN_MACHINE)
    .name('Aura Drain Test Rig')
    .color(0x6b4f8a)
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'CCC',
            'CIC',
            'CCC'
          ],
          [
            'CCC',
            'OmE',
            'CCC'
          ]
        ])
        .keys({
          m: 'modular_machinery_reborn:controller',
          C: 'modular_machinery_reborn:casing_plain',
          I: 'modular_machinery_reborn:inputbus_normal',
          O: 'modular_machinery_reborn:outputbus_normal',
          E: 'modular_machinery_reborn:energyinputhatch_normal'
        })
    )

  event.create(AURA_GENERATOR_MACHINE)
    .name('Aura Generator Test Rig')
    .color(0x5fd38d)
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'CCC',
            'CIC',
            'CCC'
          ],
          [
            'CCC',
            'OmE',
            'CCC'
          ]
        ])
        .keys({
          m: 'modular_machinery_reborn:controller',
          C: 'modular_machinery_reborn:casing_circuitry',
          I: 'modular_machinery_reborn:inputbus_normal',
          O: 'modular_machinery_reborn:outputbus_normal',
          E: 'modular_machinery_reborn:energyinputhatch_normal'
        })
    )
})

ServerEvents.recipes(event => {
  //recipe of amethyst shard to quartz and removes aura.
  event.recipes.modular_machinery_reborn
    .machine_recipe(AURA_DRAIN_MACHINE, RECIPE_TICKS)
    .requireItem('minecraft:amethyst_shard')
    .requireEnergyPerTick(ENERGY_PER_TICK)
    .produceItem('minecraft:quartz')
    .requireFunctionOnEnd(
      AURA_FUNCTION,
      'drain',
      String(AURA_CHANGE_PER_RECIPE)
    )
    .id('modpack:aura_drain_test')

  //recipe of glowstone dust to amethyst shard and adds aura.
  event.recipes.modular_machinery_reborn
    .machine_recipe(AURA_GENERATOR_MACHINE, RECIPE_TICKS)
    .requireItem('minecraft:glowstone_dust')
    .requireEnergyPerTick(ENERGY_PER_TICK)
    .produceItem('minecraft:amethyst_shard')
    .requireFunctionOnEnd(
      AURA_FUNCTION,
      'store',
      String(AURA_CHANGE_PER_RECIPE)
    )
    .id('modpack:aura_generation_test')
})
// Fancy code here for permission acceleration.
function runAuraCommand(level, command) {
  const server = level.getServer()
  const source = server.createCommandSourceStack()
    .withLevel(level)
    .withPermission(4)
    .withSuppressedOutput()
  return server.getCommands().performPrefixedCommand(source, command)
}
// This is to check for positions around the controller for aura.
function findOpenPosition(level, center) {
  const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  const offsets = [
    [0, 2, 0], [2, 1, 0], [-2, 1, 0], [0, 1, 2], [0, 1, -2],
    [3, 1, 0], [-3, 1, 0], [0, 1, 3], [0, 1, -3]
  ]

  for (const offset of offsets) {
    const candidate = new BlockPos(
      center.getX() + offset[0],
      center.getY() + offset[1],
      center.getZ() + offset[2]
    )
    if (level.getBlockState(candidate).isAir() &&
        level.getBlockState(candidate.above()).isAir()) {
      return candidate
    }
  }
  return null
}
// This function checks for aura every recipe cycle and runs if passes.
function reactImmediatelyToAura(controller, aura) {
  const Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
  const level = controller.getLevel()
  const position = controller.getBlockPos()
  const stateData = controller.getPersistentData()
  const oldState = stateData.getInt(REACTION_STATE_KEY)
  let newState = oldState
// Summons a zombie with the name "Anomalous Aura" at low aura values.
  if (aura <= LOW_AURA_TRIGGER && oldState !== -1) {
    const spawnPos = findOpenPosition(level, position)
    if (spawnPos !== null) {
      const x = spawnPos.getX() + 0.5
      const y = spawnPos.getY()
      const z = spawnPos.getZ() + 0.5
      runAuraCommand(
        level,
        `summon minecraft:zombie ${x} ${y} ${z} ` +
        `{CustomName:'{"text":"Anomalous Aura","color":"dark_purple"}',` +
        `CustomNameVisible:1b,PersistenceRequired:1b,` +
        `Tags:["modpack_aura_reaction"]}`
      )
    }
// Applies weakness around the controller at low aura values.
    runAuraCommand(
      level,
      `effect give @a[x=${position.getX()},y=${position.getY()},` +
      `z=${position.getZ()},distance=..12] minecraft:weakness 15 1 true`
    )
    newState = -1
    console.info(`[Aura Test Rig] Immediate LOW reaction fired; aura=${aura}.`)
  } 
// Places a moss block at high aura values.
    else if (aura >= HIGH_AURA_TRIGGER && oldState !== 1) {
    const blockPos = findOpenPosition(level, position)
    if (blockPos !== null) {
      level.setBlockAndUpdate(blockPos, Blocks.MOSS_BLOCK.defaultBlockState())
    }
    newState = 1
    console.info(`[Aura Test Rig] Immediate HIGH reaction fired; aura=${aura}.`)
  }
// Reset the state if aura returns to normal.
  else if (oldState === -1 && aura >= LOW_AURA_RESET) {
    newState = 0
  } else if (oldState === 1 && aura <= HIGH_AURA_RESET) {
    newState = 0
  }

  if (newState !== oldState) {
    stateData.putInt(REACTION_STATE_KEY, newState)
    controller.setChanged()
  }
}

// I do not understand what it is doing here.
MMREvents.recipeFunction(AURA_FUNCTION, event => {
  const action = event.get(0)
  const amount = Number(event.get(1))
  const controller = event.getTile()
  const level = controller.getLevel()
  const position = controller.getBlockPos()
  const auraBefore = AuraChunk.getAuraInArea(
    level,
    position,
    AURA_MEASUREMENT_RADIUS
  )

  if (action === 'drain') {
    AuraChunk.drainAura(level, position, amount)
  } else {
    AuraChunk.storeAura(level, position, amount)
  }

  const auraAfter = AuraChunk.getAuraInArea(
    level,
    position,
    AURA_MEASUREMENT_RADIUS
  )

  // Immediate behavior: no polling delay after an MMR recipe completes.
  reactImmediatelyToAura(controller, auraAfter)
})

})()
