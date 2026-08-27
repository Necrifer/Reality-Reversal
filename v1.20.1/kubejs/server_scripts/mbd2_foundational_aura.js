// I'm too stupid to write something this impressive. Yes this is AI written.
// Yes I modified it myself to make consequences worse for you. You are welcome.


// Nature's Aura consequences for the Multiblocked2 Foundational Breaker.
//
// Place this file in: kubejs/server_scripts/
// A successful recipe completion drains Aura, measures the remaining Aura,
// and may trigger one of the low-Aura backfire tiers below.
//
// IMPORTANT: this is a completion-time cost. Do not also add an MBD2
// `natures_aura` recipe input unless that recipe is intentionally meant to
// consume Aura twice.

(() => {

// ---------------------------------------------------------------------------
// MACHINE AND AURA SETTINGS
// ---------------------------------------------------------------------------

// This is the registry ID of the current Multiblocked2 controller.
var RR_AURA_MACHINE = 'mbd2:foundational'

// Every completed recipe not overridden below drains this much Aura.
// Set this to 0 if only recipes listed in RR_AURA_DRAIN_BY_RECIPE should drain.
var RR_DEFAULT_AURA_DRAIN = 100000

// Aura is measured in this radius around the controller after the drain.
var RR_AURA_MEASUREMENT_RADIUS = 16

// Optional per-recipe overrides. A value of 0 disables the drain for that
// recipe. The built-in recipe currently has the ID minecraft:foundation.
var RR_AURA_DRAIN_BY_RECIPE = {
  // 'minecraft:foundation': 100000,
  // 'kubejs:especially_dangerous_recipe': 250000,
  // 'kubejs:aura_safe_recipe': 0
}

// ---------------------------------------------------------------------------
// LOW-AURA BACKFIRE TIERS -- MAIN BALANCING / CUSTOMIZATION SECTION
// ---------------------------------------------------------------------------
//
// Keep these ordered from least severe to most severe.
//
// threshold:      Enter this tier at or below this Aura value.
// resetAt:        Aura must recover to this value before the tier rearms.
// entityId/count: Entities summoned at random positions in this chunk.
// entityNbt:      Optional SNBT appended to the summon command.
// effects:        Effects given to players near the controller.
// placementId:    Block/fluid placed into random AIR positions in the chunk.
// placementCount: Number of successful placements requested.
//
// All defaults below are vanilla IDs because the original 1.21 hazards came
// from mods that are missing in this backport. They can safely be replaced by
// any registered 1.20.1 entity, block, fluid-block, or effect ID.
var RR_LOW_AURA_TIERS = [
  {
    name: 'unstable',
    threshold: 1500000,
    resetAt: 1650000,
    entityId: 'minecraft:enderman',
    entityCount: 3,
    entityNbt: '{PersistenceRequired:1b,Tags:["rr_aura_unstable"]}',
    effects: [
      { id: 'minecraft:weakness', durationSeconds: 15, amplifier: 0 }
    ],
    placementId: 'minecraft:sculk',
    placementCount: 4
  },
  {
    name: 'critical',
    threshold: 750000,
    resetAt: 900000,
    entityId: 'minecraft:wither_skeleton',
    entityCount: 5,
    entityNbt: '{PersistenceRequired:1b,Tags:["rr_aura_critical"]}',
    effects: [
      { id: 'minecraft:slowness', durationSeconds: 20, amplifier: 1 },
      { id: 'minecraft:weakness', durationSeconds: 20, amplifier: 1 }
    ],
    placementId: 'minecraft:soul_sand',
    placementCount: 8
  },
  {
    name: 'catastrophic',
    threshold: 250000,
    resetAt: 400000,
    entityId: 'minecraft:wither',
    entityCount: 1,
    entityNbt: '{PersistenceRequired:1b,Tags:["rr_aura_catastrophic"]}',
    effects: [
      { id: 'minecraft:wither', durationSeconds: 12, amplifier: 1 },
      { id: 'minecraft:blindness', durationSeconds: 12, amplifier: 0 }
    ],
    placementId: 'minecraft:lava',
    placementCount: 5
  }
]

// State is stored on each individual MBD2 controller. This makes a tier fire
// once when Aura crosses downward into it instead of on every completed recipe.
var RR_REACTION_STATE_KEY = 'realityReversalAuraLowTierV1'

// Random hazards use the controller's current 16x16 chunk. Y is relative to
// the controller so this remains usable in dimensions with unusual heights.
var RR_PLACEMENT_MIN_Y_OFFSET = -4
var RR_PLACEMENT_MAX_Y_OFFSET = 4
var RR_ENTITY_MIN_Y_OFFSET = 1
var RR_ENTITY_MAX_Y_OFFSET = 4
var RR_PLAYER_EFFECT_RADIUS = 12
var RR_PLACEMENT_ATTEMPTS_PER_BLOCK = 20

// ---------------------------------------------------------------------------
// SMALL HELPERS
// ---------------------------------------------------------------------------

function rrJavaInt(value) {
  // Parsing through text avoids Rhino converting some wrapped Java integers
  // incorrectly when Number(value) is used directly.
  var parsed = parseInt(String(value), 10)
  if (isNaN(parsed)) {
    throw new Error('[Foundational Aura] Invalid Java coordinate: ' + value)
  }
  return parsed
}

function rrRandomIntInclusive(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

function rrRandomChunkPosition(center, minimumYOffset, maximumYOffset) {
  var centerX = rrJavaInt(center.getX())
  var centerY = rrJavaInt(center.getY())
  var centerZ = rrJavaInt(center.getZ())
  var chunkMinimumX = Math.floor(centerX / 16) * 16
  var chunkMinimumZ = Math.floor(centerZ / 16) * 16

  return {
    x: rrRandomIntInclusive(chunkMinimumX, chunkMinimumX + 15),
    y: centerY + rrRandomIntInclusive(minimumYOffset, maximumYOffset),
    z: rrRandomIntInclusive(chunkMinimumZ, chunkMinimumZ + 15)
  }
}

// Executes in the controller's dimension with silent permission level 4.
function rrRunCommand(level, command) {
  var server = level.getServer()
  var source = server.createCommandSourceStack()
    .withLevel(level)
    .withPermission(4)
    .withSuppressedOutput()
  return server.getCommands().performPrefixedCommand(source, command)
}

function rrRecipeId(recipe) {
  if (recipe === null || recipe === undefined) {
    return 'unknown:unknown'
  }

  // MBDRecipe#getId is present in this MBD2 branch. The fallback makes the
  // diagnostic survive a future minor MBD2 mapping change.
  try {
    return String(recipe.getId())
  } catch (ignored) {
    return String(recipe.id)
  }
}

function rrDrainForRecipe(recipeId) {
  if (Object.prototype.hasOwnProperty.call(RR_AURA_DRAIN_BY_RECIPE, recipeId)) {
    return Math.max(0, Math.floor(Number(RR_AURA_DRAIN_BY_RECIPE[recipeId])))
  }
  return Math.max(0, Math.floor(Number(RR_DEFAULT_AURA_DRAIN)))
}

function rrTierNumberForAura(aura) {
  for (var index = RR_LOW_AURA_TIERS.length - 1; index >= 0; index--) {
    if (aura <= RR_LOW_AURA_TIERS[index].threshold) {
      return index + 1
    }
  }
  return 0
}

// ---------------------------------------------------------------------------
// BACKFIRE EFFECTS
// ---------------------------------------------------------------------------

function rrSummonTierEntities(level, center, tier) {
  for (var index = 0; index < tier.entityCount; index++) {
    var target = rrRandomChunkPosition(
      center,
      RR_ENTITY_MIN_Y_OFFSET,
      RR_ENTITY_MAX_Y_OFFSET
    )
    var nbt = tier.entityNbt ? ' ' + tier.entityNbt : ''
    rrRunCommand(
      level,
      'summon ' + tier.entityId + ' ' + (target.x + 0.5) + ' ' + target.y +
      ' ' + (target.z + 0.5) + nbt
    )
  }
}

function rrApplyTierEffects(level, center, tier) {
  var centerX = rrJavaInt(center.getX())
  var centerY = rrJavaInt(center.getY())
  var centerZ = rrJavaInt(center.getZ())

  for (var index = 0; index < tier.effects.length; index++) {
    var effect = tier.effects[index]
    rrRunCommand(
      level,
      'effect give @a[x=' + centerX + ',y=' + centerY + ',z=' + centerZ +
      ',distance=..' + RR_PLAYER_EFFECT_RADIUS + '] ' + effect.id + ' ' +
      effect.durationSeconds + ' ' + effect.amplifier + ' true'
    )
  }
}

function rrPlaceTierBlocks(level, center, tier) {
  var requested = Math.max(0, Math.floor(Number(tier.placementCount)))
  var maximumAttempts = Math.max(64, requested * RR_PLACEMENT_ATTEMPTS_PER_BLOCK)
  var attempted = {}
  var placed = 0

  for (var attempt = 0; attempt < maximumAttempts && placed < requested; attempt++) {
    var target = rrRandomChunkPosition(
      center,
      RR_PLACEMENT_MIN_Y_OFFSET,
      RR_PLACEMENT_MAX_Y_OFFSET
    )
    var key = target.x + ',' + target.y + ',' + target.z
    if (attempted[key] === true) {
      continue
    }
    attempted[key] = true

    // Only replace air. This prevents a backfire from silently deleting the
    // controller, a multiblock component, storage, wiring, or terrain.
    var result = rrRunCommand(
      level,
      'execute if block ' + target.x + ' ' + target.y + ' ' + target.z +
      ' minecraft:air run setblock ' + target.x + ' ' + target.y + ' ' +
      target.z + ' ' + tier.placementId
    )
    if (result > 0) {
      placed++
    }
  }

  if (placed < requested) {
    console.warn(
      '[Foundational Aura] ' + tier.name + ' requested ' + requested +
      ' placements but found only ' + placed + ' valid air positions.'
    )
  }
  return placed
}

function rrFireTierBackfire(machine, tier, tierNumber, aura, recipeId) {
  // A destructive effect scheduled from recipe completion may run after the
  // controller was broken. Abort cleanly if the machine is no longer valid.
  if (machine === null || machine.getLevel() === null || machine.isInvalid()) {
    return
  }

  var level = machine.getLevel()
  var center = machine.getPos()
  rrSummonTierEntities(level, center, tier)
  rrApplyTierEffects(level, center, tier)
  var placementsMade = rrPlaceTierBlocks(level, center, tier)

  console.info(
    '[Foundational Aura] LOW tier ' + tierNumber + ' (' + tier.name +
    ') fired for ' + recipeId + ' at ' + center.toShortString() +
    '; aura=' + aura + '; entities=' + tier.entityCount +
    '; placements=' + placementsMade + '/' + tier.placementCount + ' x ' +
    tier.placementId + '.'
  )
}

// ---------------------------------------------------------------------------
// THRESHOLD STATE / HYSTERESIS
// ---------------------------------------------------------------------------

function rrSaveTierState(machine, tierNumber) {
  var data = machine.getCustomData().copy()
  data.putInt(RR_REACTION_STATE_KEY, tierNumber)
  machine.setCustomData(data)
  machine.markAsDirty()
}

function rrReactToAura(machine, aura, recipeId) {
  var data = machine.getCustomData()
  var oldTierNumber = data.getInt(RR_REACTION_STATE_KEY)
  if (oldTierNumber < 0 || oldTierNumber > RR_LOW_AURA_TIERS.length) {
    oldTierNumber = 0
  }

  var detectedTierNumber = rrTierNumberForAura(aura)

  if (detectedTierNumber > oldTierNumber) {
    // Persist first because the scheduled effect may include a boss or fluid.
    rrSaveTierState(machine, detectedTierNumber)

    // Wait one tick so MBD2 has fully exited its recipe completion loop before
    // any commands change blocks/entities around the formed multiblock.
    machine.getLevel().getServer().scheduleInTicks(1, scheduledEvent => {
      rrFireTierBackfire(
        machine,
        RR_LOW_AURA_TIERS[detectedTierNumber - 1],
        detectedTierNumber,
        aura,
        recipeId
      )
    })
    return
  }

  // Recovery only rearms tiers; it never causes a backfire itself. resetAt is
  // deliberately higher than threshold to prevent rapid boundary oscillation.
  if (detectedTierNumber < oldTierNumber) {
    var oldTier = RR_LOW_AURA_TIERS[oldTierNumber - 1]
    if (aura >= oldTier.resetAt) {
      rrSaveTierState(machine, detectedTierNumber)
    }
  }
}

// ---------------------------------------------------------------------------
// MBD2 COMPLETION HOOK
// ---------------------------------------------------------------------------

MBDMachineEvents.onRecipeFinish(RR_AURA_MACHINE, wrapper => {
  var mbdEvent = wrapper.event
  var machine = mbdEvent.machine
  var recipeId = rrRecipeId(mbdEvent.recipe)
  var drainAmount = rrDrainForRecipe(recipeId)

  if (drainAmount <= 0) {
    return
  }

  var level = machine.getLevel()
  var center = machine.getPos()
  var auraBefore = AuraChunk.getAuraInArea(
    level,
    center,
    RR_AURA_MEASUREMENT_RADIUS
  )

  AuraChunk.drainAura(level, center, drainAmount)

  var auraAfter = AuraChunk.getAuraInArea(
    level,
    center,
    RR_AURA_MEASUREMENT_RADIUS
  )

  console.info(
    '[Foundational Aura] Recipe ' + recipeId + ' completed at ' +
    center.toShortString() + '; drained=' + drainAmount +
    '; aura before=' + auraBefore + '; after=' + auraAfter + '.'
  )

  rrReactToAura(machine, auraAfter, recipeId)
})

})()
