// Reality Reversal: safe arrivals for Stackable Planar Dimensions
// -----------------------------------------------------------------------------
// SPD changes dimensions when a player crosses a configured vertical boundary.
// It normally creates only one temporary block below the player. This script
// adds a small breathing space and landing area, but only after a genuine SPD
// boundary crossing. Ordinary Nether portals, End portals, commands, deaths,
// and modded portal travel are intentionally ignored.

const RR_LAST_DIMENSION = 'rr_spd_last_dimension'
const RR_LAST_Y = 'rr_spd_last_y'
const RR_ARRIVAL_PENDING = 'rr_spd_arrival_pending'

// Keep this top-to-bottom order and these local boundaries synchronized with
// config/stackable-planar-dimensions.json. Native dimensions intentionally use
// numerically overlapping ranges; dimensions are separate worlds, and SPD
// checks only the range belonging to the player's current dimension.
const RR_SPD_STACK = [
  { id: 'astral_dimension:astral_dimension', min: -65, max: 320 },
  { id: 'aether:the_aether', min: -1, max: 256 },
  { id: 'minecraft:the_end', min: -1, max: 256 },
  { id: 'minecraft:overworld', min: -65, max: 320 },
  { id: 'minecraft:the_nether', min: -1, max: 128 },
  { id: 'astral_dimension:setback', min: 511, max: 896 },
  { id: 'callfromthedepth_:depth', min: 255, max: 512 },
  { id: 'deeperdarker:otherside', min: 127, max: 253 },
  { id: 'undergarden:undergarden', min: -1, max: 128 },
  { id: 'valoria:the_valoria', min: -385, max: 0 },
  { id: 'infinite_abyss:first_layer', min: -513, max: -384 },
  { id: 'infinite_abyss:second_layer', min: -641, max: -512 },
  { id: 'infinite_abyss:fourth_layer', min: -769, max: -640 },
  { id: 'infinite_abyss:fifth_layer', min: -897, max: -768 },
  { id: 'infinite_abyss:sixth_layer', min: -1025, max: -896 },
  { id: 'infinite_abyss:seventh_layer', min: -1153, max: -1024 },
  { id: 'the_deep_void:deep_void', min: -1537, max: -1152 },
  { id: 'voidscape:void', min: -1793, max: -1536 }
]

// SPD uses a threshold of six blocks. A slightly larger margin accounts for
// the source position having been recorded on the preceding player tick.
const RR_SPD_BOUNDARY_MARGIN = 16

function rrDimensionId(player) {
  // In this KubeJS 6 / Forge 1.20.1 instance, LevelJS.dimension is already a
  // ResourceLocation. Calling .location() causes a TypeError every player tick.
  return String(player.level.dimension)
}

function rrStackIndex(dimension) {
  for (let index = 0; index < RR_SPD_STACK.length; index++) {
    if (RR_SPD_STACK[index].id === dimension) return index
  }
  return -1
}

function rrWasSpdBoundaryCrossing(oldIndex, newIndex, oldY) {
  if (oldIndex < 0 || newIndex < 0) return false
  if (Math.abs(oldIndex - newIndex) !== 1) return false

  const source = RR_SPD_STACK[oldIndex]
  if (newIndex === oldIndex + 1) {
    // Moving down the list: player crossed the source dimension's lower edge.
    return oldY <= source.min + RR_SPD_BOUNDARY_MARGIN
  }

  // Moving up the list: player crossed the source dimension's upper edge.
  return oldY >= source.max - RR_SPD_BOUNDARY_MARGIN
}

function rrPrepareGenericArrival(server, player, expectedDimension) {
  if (!player.alive || rrDimensionId(player) !== expectedDimension) return

  const x = Math.floor(player.x)
  const y = Math.floor(player.y)
  const z = Math.floor(player.z)
  const belowId = String(player.level.getBlock(x, y - 1, z).id)

  // Remove only the player's immediate 3x3x3 breathing space.
  server.runCommandSilent(
    `execute in ${expectedDimension} run fill ${x - 1} ${y} ${z - 1} ${x + 1} ${y + 2} ${z + 1} minecraft:air replace`
  )

  // If there is no floor, use SPD's temporary platform block. It remains while
  // an entity is nearby and removes itself after the player leaves.
  if (belowId === 'minecraft:air' || belowId === 'minecraft:cave_air' ||
      belowId === 'minecraft:void_air' || belowId === 'minecraft:water' ||
      belowId === 'minecraft:lava') {
    server.runCommandSilent(
      `execute in ${expectedDimension} run fill ${x - 1} ${y - 1} ${z - 1} ${x + 1} ${y - 1} ${z + 1} stackable_planar_dimensions:p_block replace`
    )
  }
}

PlayerEvents.loggedIn(event => {
  event.player.persistentData.putString(
    RR_LAST_DIMENSION,
    rrDimensionId(event.player)
  )
  event.player.persistentData.putDouble(RR_LAST_Y, event.player.y)
  event.player.persistentData.remove(RR_ARRIVAL_PENDING)
})

PlayerEvents.tick(event => {
  if (event.level.clientSide) return

  const player = event.player
  if (!player.alive || player.isSpectator()) return

  const currentDimension = rrDimensionId(player)
  const lastDimension = player.persistentData.getString(RR_LAST_DIMENSION)

  if (!lastDimension) {
    player.persistentData.putString(RR_LAST_DIMENSION, currentDimension)
    player.persistentData.putDouble(RR_LAST_Y, player.y)
    return
  }

  if (lastDimension === currentDimension) {
    player.persistentData.putDouble(RR_LAST_Y, player.y)
    return
  }

  const lastY = player.persistentData.getDouble(RR_LAST_Y)
  player.persistentData.putString(RR_LAST_DIMENSION, currentDimension)
  player.persistentData.putDouble(RR_LAST_Y, player.y)

  const oldStackIndex = rrStackIndex(lastDimension)
  const newStackIndex = rrStackIndex(currentDimension)
  if (!rrWasSpdBoundaryCrossing(oldStackIndex, newStackIndex, lastY)) return

  if (player.persistentData.getBoolean(RR_ARRIVAL_PENDING)) return
  player.persistentData.putBoolean(RR_ARRIVAL_PENDING, true)

  // Wait one tick for the destination chunk to finish loading.
  event.server.scheduleInTicks(1, () => {
    player.persistentData.remove(RR_ARRIVAL_PENDING)
    rrPrepareGenericArrival(event.server, player, currentDimension)
  })
})
