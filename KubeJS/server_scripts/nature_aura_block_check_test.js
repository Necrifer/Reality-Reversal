// Independent, low-aura-only Nature's Aura anchor monitor.
//
// Anchors register when placed or right-clicked. Every minute, each loaded
// chunk containing a registered anchor is checked once. Existing anchors only
// need to be right-clicked once after installing/reloading this script.

(() => {

// ---------------------------------------------------------------------------
// MONITOR SETTINGS
// ---------------------------------------------------------------------------

const ANCHOR_IDS = {
  'naturesaura:nature_altar': true,
  'naturesaura:offering_table': true,
  'naturesaura:animal_spawner': true,
  'naturesaura:wood_stand': true
}

const CHECK_INTERVAL_TICKS = 20 * 60 // 1,200 ticks = about one minute.
const AURA_MEASUREMENT_RADIUS = 16

// ---------------------------------------------------------------------------
// LOW-AURA BACKFIRE TIERS -- THIS IS THE MAIN CUSTOMIZATION SECTION
// ---------------------------------------------------------------------------
//
// Tiers must remain ordered from least severe to most severe.
//
// threshold:        This tier is entered at or below this aura value.
// resetAt:          Aura must recover to this value before the tier rearms.
// entityId/count:   Mob and number summoned when the tier is entered.
// entityNbt:        Everything after the entity coordinates in /summon.
// effects:          Nearby player effects. amplifier 0 means level I.
// placementId:      Any BLOCK id, including fluid blocks such as water/lava.
// placementCount:   Number of positions forcibly replaced.
// replaceCenter:    true permits replacing the crafting anchor itself.
//
// Placement uses `setblock ... replace` and intentionally does NOT check for
// air. Anchors, pedestals, terrain, or other multiblock parts can be destroyed.
const LOW_AURA_TIERS = [
  {
    name: 'unstable',
    threshold: 1500000,
    resetAt: 1650000,
    entityId: 'minecraft:skeleton',
    entityCount: 3,
    entityNbt: `{CustomName:'{"text":"Anchor Sentinel","color":"aqua"}',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["modpack_anchor_unstable"]}`,
    effects: [
      { id: 'minecraft:slowness', durationSeconds: 20, amplifier: 0 }
    ],
    placementId: 'minecraft:cobweb',
    placementCount: 4,
    replaceCenter: false
  },
  {
    name: 'critical',
    threshold: 750000,
    resetAt: 900000,
    entityId: 'minecraft:drowned',
    entityCount: 6,
    entityNbt: `{CustomName:'{"text":"Drowned Aura","color":"dark_aqua"}',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["modpack_anchor_critical"]}`,
    effects: [
      { id: 'minecraft:mining_fatigue', durationSeconds: 25, amplifier: 1 },
      { id: 'minecraft:weakness', durationSeconds: 25, amplifier: 1 }
    ],
    // Water is a block-form fluid id and will flow after placement.
    placementId: 'minecraft:water',
    placementCount: 8,
    replaceCenter: false
  },
  {
    name: 'catastrophic',
    threshold: 250000,
    resetAt: 400000,
    entityId: 'minecraft:blaze',
    entityCount: 10,
    entityNbt: `{CustomName:'{"text":"Aura Backfire","color":"red"}',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["modpack_anchor_catastrophic"]}`,
    effects: [
      { id: 'minecraft:wither', durationSeconds: 12, amplifier: 1 },
      { id: 'minecraft:blindness', durationSeconds: 12, amplifier: 0 }
    ],
    // Change this to another registered block-form fluid id if desired.
    placementId: 'minecraft:lava',
    placementCount: 13,
    // The first replacement position is the anchor itself.
    replaceCenter: true
  }
]

const ANCHOR_KEY_PREFIX = 'modpackAuraAnchor|'
const STATE_KEY_PREFIX = 'modpackAuraLowTierStateV2|'
const levelTickCounters = {}

// Relative forced-replacement positions around an anchor.
const REPLACEMENT_OFFSETS = [
  [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1],
  [1, 1, 0], [-1, 1, 0], [0, 1, 1], [0, 1, -1],
  [2, 0, 0], [-2, 0, 0], [0, 0, 2], [0, 0, -2],
  [1, 0, 1], [1, 0, -1], [-1, 0, 1], [-1, 0, -1]
]

const ENTITY_OFFSETS = [
  [2, 1, 0], [-2, 1, 0], [0, 1, 2], [0, 1, -2],
  [2, 1, 2], [2, 1, -2], [-2, 1, 2], [-2, 1, -2],
  [3, 1, 0], [-3, 1, 0], [0, 1, 3], [0, 1, -3]
]

function anchorKey(position) {
  return ANCHOR_KEY_PREFIX + position.getX() + '|' +
    position.getY() + '|' + position.getZ()
}

function stateKey(chunkX, chunkZ) {
  return STATE_KEY_PREFIX + chunkX + '|' + chunkZ
}

function isAnchor(block) {
  return ANCHOR_IDS[String(block.id)] === true
}

function registerAnchor(event) {
  if (!isAnchor(event.block)) {
    return
  }

  const data = event.level.getPersistentData()
  const key = anchorKey(event.block.pos)
  if (!data.getBoolean(key)) {
    data.putBoolean(key, true)
    console.info(
      `[Aura Anchor Monitor] Registered ${event.block.id} at ` +
      `${event.block.pos.toShortString()}.`
    )
  }
}

BlockEvents.placed(event => registerAnchor(event))
BlockEvents.rightClicked(event => registerAnchor(event))

BlockEvents.broken(event => {
  if (isAnchor(event.block)) {
    event.level.getPersistentData().remove(anchorKey(event.block.pos))
  }
})

// Runs a Minecraft command in the anchor's dimension with silent admin access.
function runAuraCommand(level, command) {
  const server = level.getServer()
  const source = server.createCommandSourceStack()
    .withLevel(level)
    .withPermission(4)
    .withSuppressedOutput()
  return server.getCommands().performPrefixedCommand(source, command)
}

function tierNumberForAura(aura) {
  for (let index = LOW_AURA_TIERS.length - 1; index >= 0; index--) {
    if (aura <= LOW_AURA_TIERS[index].threshold) {
      return index + 1
    }
  }
  return 0
}

function summonTierEntities(level, center, tier) {
  for (let index = 0; index < tier.entityCount; index++) {
    const offset = ENTITY_OFFSETS[index % ENTITY_OFFSETS.length]
    const ring = Math.floor(index / ENTITY_OFFSETS.length) * 2
    const x = center.getX() + offset[0] + ring + 0.5
    const y = center.getY() + offset[1]
    const z = center.getZ() + offset[2] + ring + 0.5
    runAuraCommand(
      level,
      `summon ${tier.entityId} ${x} ${y} ${z} ${tier.entityNbt}`
    )
  }
}

function applyTierEffects(level, center, tier) {
  for (const effect of tier.effects) {
    runAuraCommand(
      level,
      `effect give @a[x=${center.getX()},y=${center.getY()},` +
      `z=${center.getZ()},distance=..12] ${effect.id} ` +
      `${effect.durationSeconds} ${effect.amplifier} true`
    )
  }
}

function placeTierReplacements(level, center, tier) {
  const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  const offsets = tier.replaceCenter
    ? [[0, 0, 0]].concat(REPLACEMENT_OFFSETS)
    : REPLACEMENT_OFFSETS
  const count = Math.min(tier.placementCount, offsets.length)

  for (let index = 0; index < count; index++) {
    const offset = offsets[index]
    const target = new BlockPos(
      center.getX() + offset[0],
      center.getY() + offset[1],
      center.getZ() + offset[2]
    )
    // `replace` is intentional: the target does not need to be air.
    runAuraCommand(
      level,
      `setblock ${target.getX()} ${target.getY()} ${target.getZ()} ` +
      `${tier.placementId} replace`
    )
  }
}

function fireTierBackfire(level, center, tier, tierNumber, aura) {
  summonTierEntities(level, center, tier)
  applyTierEffects(level, center, tier)
  placeTierReplacements(level, center, tier)
  console.info(
    `[Aura Anchor Monitor] LOW tier ${tierNumber} (${tier.name}) fired at ` +
    `${center.toShortString()}; aura=${aura}; entities=${tier.entityCount}; ` +
    `replacements=${tier.placementCount} x ${tier.placementId}.`
  )
}

function evaluateAnchorChunk(level, center, chunkX, chunkZ, data) {
  const aura = AuraChunk.getAuraInArea(
    level,
    center,
    AURA_MEASUREMENT_RADIUS
  )
  const key = stateKey(chunkX, chunkZ)
  let oldTierNumber = data.getInt(key)

  if (oldTierNumber < 0 || oldTierNumber > LOW_AURA_TIERS.length) {
    oldTierNumber = 0
  }

  const detectedTierNumber = tierNumberForAura(aura)
  let newTierNumber = oldTierNumber

  // Only downward aura movement into a more severe tier causes a backfire.
  if (detectedTierNumber > oldTierNumber) {
    newTierNumber = detectedTierNumber
    data.putInt(key, newTierNumber)
    fireTierBackfire(
      level,
      center,
      LOW_AURA_TIERS[newTierNumber - 1],
      newTierNumber,
      aura
    )
  } else if (detectedTierNumber < oldTierNumber) {
    // Recovery only rearms tiers; it never fires an event by itself.
    const oldTier = LOW_AURA_TIERS[oldTierNumber - 1]
    if (aura >= oldTier.resetAt) {
      newTierNumber = detectedTierNumber
      data.putInt(key, newTierNumber)
    }
  }

  console.info(
    `[Aura Anchor Monitor] Checked chunk ${chunkX},${chunkZ}; ` +
    `aura=${aura}; low-aura tier=${newTierNumber}.`
  )
}

// Reads persistent anchor coordinates, removes stale entries, and reduces all
// anchors in the same chunk to one aura check/reaction per monitoring pass.
function pollRegisteredAnchorChunks(level) {
  const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  const BuiltInRegistries = Java.loadClass(
    'net.minecraft.core.registries.BuiltInRegistries'
  )
  const data = level.getPersistentData()
  const iterator = data.getAllKeys().iterator()
  const chunks = {}
  const staleKeys = []

  while (iterator.hasNext()) {
    const key = String(iterator.next())
    if (!key.startsWith(ANCHOR_KEY_PREFIX)) {
      continue
    }

    const parts = key.substring(ANCHOR_KEY_PREFIX.length).split('|')
    if (parts.length !== 3) {
      staleKeys.push(key)
      continue
    }

    const position = new BlockPos(
      Number(parts[0]),
      Number(parts[1]),
      Number(parts[2])
    )
    if (!level.isLoaded(position)) {
      continue
    }

    const currentId = String(
      BuiltInRegistries.BLOCK.getKey(
        level.getBlockState(position).getBlock()
      )
    )
    if (ANCHOR_IDS[currentId] !== true) {
      staleKeys.push(key)
      continue
    }

    const chunkX = Math.floor(position.getX() / 16)
    const chunkZ = Math.floor(position.getZ() / 16)
    const chunkKey = chunkX + '|' + chunkZ
    if (chunks[chunkKey] === undefined) {
      chunks[chunkKey] = {
        position: position,
        chunkX: chunkX,
        chunkZ: chunkZ
      }
    }
  }

  for (const staleKey of staleKeys) {
    data.remove(staleKey)
  }

  for (const chunkKey of Object.keys(chunks)) {
    const chunk = chunks[chunkKey]
    evaluateAnchorChunk(
      level,
      chunk.position,
      chunk.chunkX,
      chunk.chunkZ,
      data
    )
  }
}

LevelEvents.tick(event => {
  const level = event.level
  // KubeJS exposes dimension as a ResourceKey property, not a function.
  const levelKey = String(level.dimension)
  const ticks = (levelTickCounters[levelKey] || 0) + 1

  if (ticks >= CHECK_INTERVAL_TICKS) {
    levelTickCounters[levelKey] = 0
    pollRegisteredAnchorChunks(level)
  } else {
    levelTickCounters[levelKey] = ticks
  }
})

})()
