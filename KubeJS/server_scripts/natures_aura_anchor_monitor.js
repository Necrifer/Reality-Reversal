






(() => {





var RR_NA_ANCHOR_IDS = {
  'naturesaura:nature_altar': true,
  'naturesaura:offering_table': true,
  'naturesaura:animal_spawner': true,
  'naturesaura:wood_stand': true
}


var RR_NA_CHECK_INTERVAL_TICKS = 20 * 60
var RR_NA_AURA_MEASUREMENT_RADIUS = 16
var RR_NA_PLAYER_EFFECT_RADIUS = 12



var RR_NA_LOG_EVERY_CHECK = false


















var RR_NA_LOW_AURA_TIERS = [
  {
    name: 'unstable',
    threshold: 1000000,
    resetAt: 900000,
    entityId: 'minecraft:creeper',
    entityCount: 6,
    entityNbt: '{CustomName:\'{"text":"Void","color":"aqua"}\',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["rr_na_anchor_unstable"]}',
    effects: [
      { id: 'minecraft:slowness', durationSeconds: 20, amplifier: 0 }
    ],
    placementId: 'spectrum:dragonrot',
    placementCount: 4,
    minimumRadius: 2
  },
  {
    name: 'critical',
    threshold: 750000,
    resetAt: 800000,
    entityId: 'minecraft:wither',
    entityCount: 2,
    entityNbt: '{CustomName:\'{"text":"Wrath","color":"dark_aqua"}\',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["rr_na_anchor_critical"]}',
    effects: [
      { id: 'minecraft:mining_fatigue', durationSeconds: 25, amplifier: 1 },
      { id: 'minecraft:weakness', durationSeconds: 25, amplifier: 1 }
    ],
    placementId: 'nuclearcraft:corium_fluid_block',
    placementCount: 8,
    minimumRadius: 2
  },
  {
    name: 'catastrophic',
    threshold: 250000,
    resetAt: 400000,
    entityId: 'aoa3:elite_nethengeic_wither',
    entityCount: 1,
    entityNbt: '{CustomName:\'{"text":"Vacuum","color":"red"}\',CustomNameVisible:1b,PersistenceRequired:1b,Tags:["rr_na_anchor_catastrophic"]}',
    effects: [
      { id: 'minecraft:wither', durationSeconds: 12, amplifier: 1 },
      { id: 'minecraft:blindness', durationSeconds: 12, amplifier: 0 }
    ],
    placementId: 'spectrum:forfeiture',
    placementCount: 3,
    minimumRadius: 1
  }
]

var RR_NA_ANCHOR_KEY_PREFIX = 'realityReversalAuraAnchorV1|'
var RR_NA_STATE_KEY_PREFIX = 'realityReversalAuraAnchorTierV1|'
var rrNaLevelTickCounters = {}

var RR_NA_ENTITY_OFFSETS = [
  [2, 1, 0], [-2, 1, 0], [0, 1, 2], [0, 1, -2],
  [2, 1, 2], [2, 1, -2], [-2, 1, 2], [-2, 1, -2],
  [3, 1, 0], [-3, 1, 0], [0, 1, 3], [0, 1, -3]
]





function rrNaJavaInt(value) {
  
  
  var parsed = parseInt(String(value), 10)
  if (isNaN(parsed)) {
    throw new Error('[Aura Anchor Monitor] Invalid Java coordinate: ' + value)
  }
  return parsed
}

function rrNaAnchorKey(position) {
  return RR_NA_ANCHOR_KEY_PREFIX + rrNaJavaInt(position.getX()) + '|' +
    rrNaJavaInt(position.getY()) + '|' + rrNaJavaInt(position.getZ())
}

function rrNaStateKey(chunkX, chunkZ) {
  return RR_NA_STATE_KEY_PREFIX + chunkX + '|' + chunkZ
}

function rrNaIsAnchor(block) {
  return RR_NA_ANCHOR_IDS[String(block.id)] === true
}

function rrNaRegisterAnchor(event) {
  if (!rrNaIsAnchor(event.block)) {
    return
  }

  var data = event.level.getPersistentData()
  var key = rrNaAnchorKey(event.block.pos)
  if (!data.getBoolean(key)) {
    data.putBoolean(key, true)
    console.info(
      '[Aura Anchor Monitor] Registered ' + event.block.id + ' at ' +
      event.block.pos.toShortString() + '.'
    )
  }
}

BlockEvents.placed(function(event) {
  rrNaRegisterAnchor(event)
})

BlockEvents.rightClicked(function(event) {
  rrNaRegisterAnchor(event)
})

BlockEvents.broken(function(event) {
  if (rrNaIsAnchor(event.block)) {
    event.level.getPersistentData().remove(rrNaAnchorKey(event.block.pos))
  }
})





function rrNaRunCommand(level, command) {
  var server = level.getServer()
  var source = server.createCommandSourceStack()
    .withLevel(level)
    .withPermission(4)
    .withSuppressedOutput()
  return server.getCommands().performPrefixedCommand(source, command)
}

function rrNaTierNumberForAura(aura) {
  for (var index = RR_NA_LOW_AURA_TIERS.length - 1; index >= 0; index--) {
    if (aura <= RR_NA_LOW_AURA_TIERS[index].threshold) {
      return index + 1
    }
  }
  return 0
}

function rrNaSummonTierEntities(level, center, tier) {
  var centerX = rrNaJavaInt(center.getX())
  var centerY = rrNaJavaInt(center.getY())
  var centerZ = rrNaJavaInt(center.getZ())

  for (var index = 0; index < tier.entityCount; index++) {
    var offset = RR_NA_ENTITY_OFFSETS[index % RR_NA_ENTITY_OFFSETS.length]
    var ring = Math.floor(index / RR_NA_ENTITY_OFFSETS.length) * 2
    var x = centerX + offset[0] + ring + 0.5
    var y = centerY + offset[1]
    var z = centerZ + offset[2] + ring + 0.5
    var nbt = tier.entityNbt ? ' ' + tier.entityNbt : ''
    rrNaRunCommand(level, 'summon ' + tier.entityId + ' ' + x + ' ' + y +
      ' ' + z + nbt)
  }
}

function rrNaApplyTierEffects(level, center, tier) {
  var centerX = rrNaJavaInt(center.getX())
  var centerY = rrNaJavaInt(center.getY())
  var centerZ = rrNaJavaInt(center.getZ())

  for (var index = 0; index < tier.effects.length; index++) {
    var effect = tier.effects[index]
    rrNaRunCommand(
      level,
      'effect give @a[x=' + centerX + ',y=' + centerY + ',z=' + centerZ +
      ',distance=..' + RR_NA_PLAYER_EFFECT_RADIUS + '] ' + effect.id + ' ' +
      effect.durationSeconds + ' ' + effect.amplifier + ' true'
    )
  }
}

function rrNaFireTierBackfire(level, center, tier, tierNumber, aura) {
  if (!level.isLoaded(center)) {
    return
  }

  rrNaSummonTierEntities(level, center, tier)
  rrNaApplyTierEffects(level, center, tier)
  var placementResult = 'Spectrum placement helper unavailable'
  if (typeof global.rrServerHooks.rrPlaceSpectrumAuraBlocks === 'function') {
    placementResult = global.rrServerHooks.rrPlaceSpectrumAuraBlocks(
      level,
      center,
      tier.placementId,
      tier.placementCount,
      tier.minimumRadius
    )
  } else {
    console.error(
      '[Aura Anchor Monitor] Spectrum Aura helper did not load.'
    )
  }
  console.info(
    '[Aura Anchor Monitor] LOW tier ' + tierNumber + ' (' + tier.name +
    ') fired at ' + center.toShortString() + '; aura=' + aura +
    '; entities=' + tier.entityCount + '; ' + placementResult + '.'
  )
}





function rrNaEvaluateAnchorChunk(level, center, chunkX, chunkZ, data) {
  var aura = AuraChunk.getAuraInArea(
    level,
    center,
    RR_NA_AURA_MEASUREMENT_RADIUS
  )
  var key = rrNaStateKey(chunkX, chunkZ)
  var oldTierNumber = data.getInt(key)

  if (oldTierNumber < 0 || oldTierNumber > RR_NA_LOW_AURA_TIERS.length) {
    oldTierNumber = 0
  }

  var detectedTierNumber = rrNaTierNumberForAura(aura)
  var newTierNumber = oldTierNumber

  
  if (detectedTierNumber > oldTierNumber) {
    newTierNumber = detectedTierNumber
    data.putInt(key, newTierNumber)

    
    level.getServer().scheduleInTicks(1, function() {
      rrNaFireTierBackfire(
        level,
        center,
        RR_NA_LOW_AURA_TIERS[newTierNumber - 1],
        newTierNumber,
        aura
      )
    })
  } else if (detectedTierNumber < oldTierNumber) {
    
    var oldTier = RR_NA_LOW_AURA_TIERS[oldTierNumber - 1]
    if (aura >= oldTier.resetAt) {
      newTierNumber = detectedTierNumber
      data.putInt(key, newTierNumber)
    }
  }

  if (RR_NA_LOG_EVERY_CHECK) {
    console.info(
      '[Aura Anchor Monitor] Checked chunk ' + chunkX + ',' + chunkZ +
      '; aura=' + aura + '; low-aura tier=' + newTierNumber + '.'
    )
  }
}



function rrNaPollRegisteredAnchorChunks(level) {
  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  var BuiltInRegistries = Java.loadClass(
    'net.minecraft.core.registries.BuiltInRegistries'
  )
  var data = level.getPersistentData()
  var iterator = data.getAllKeys().iterator()
  var chunks = {}
  var staleKeys = []

  while (iterator.hasNext()) {
    var key = String(iterator.next())
    if (!key.startsWith(RR_NA_ANCHOR_KEY_PREFIX)) {
      continue
    }

    var parts = key.substring(RR_NA_ANCHOR_KEY_PREFIX.length).split('|')
    if (parts.length !== 3) {
      staleKeys.push(key)
      continue
    }

    var position = new BlockPos(
      parseInt(parts[0], 10),
      parseInt(parts[1], 10),
      parseInt(parts[2], 10)
    )
    if (!level.isLoaded(position)) {
      continue
    }

    var currentId = String(
      BuiltInRegistries.BLOCK.getKey(level.getBlockState(position).getBlock())
    )
    if (RR_NA_ANCHOR_IDS[currentId] !== true) {
      staleKeys.push(key)
      continue
    }

    var chunkX = Math.floor(rrNaJavaInt(position.getX()) / 16)
    var chunkZ = Math.floor(rrNaJavaInt(position.getZ()) / 16)
    var chunkKey = chunkX + '|' + chunkZ
    if (chunks[chunkKey] === undefined) {
      chunks[chunkKey] = {
        position: position,
        chunkX: chunkX,
        chunkZ: chunkZ
      }
    }
  }

  for (var staleIndex = 0; staleIndex < staleKeys.length; staleIndex++) {
    data.remove(staleKeys[staleIndex])
  }

  var chunkKeys = Object.keys(chunks)
  for (var chunkIndex = 0; chunkIndex < chunkKeys.length; chunkIndex++) {
    var chunk = chunks[chunkKeys[chunkIndex]]
    rrNaEvaluateAnchorChunk(
      level,
      chunk.position,
      chunk.chunkX,
      chunk.chunkZ,
      data
    )
  }
}

LevelEvents.tick(function(event) {
  var level = event.level

  
  var levelKey = String(level.dimension)
  var ticks = (rrNaLevelTickCounters[levelKey] || 0) + 1

  if (ticks < RR_NA_CHECK_INTERVAL_TICKS) {
    rrNaLevelTickCounters[levelKey] = ticks
    return
  }

  rrNaLevelTickCounters[levelKey] = 0
  try {
    rrNaPollRegisteredAnchorChunks(level)
  } catch (error) {
    console.error('[Aura Anchor Monitor] Poll failed: ' + error)
  }
})

console.info(
  '[Aura Anchor Monitor] Loaded for ' +
  Object.keys(RR_NA_ANCHOR_IDS).length + ' Nature\'s Aura crafting blocks.'
)

})()
