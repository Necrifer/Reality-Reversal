// Deeper and Darker and Call from the Depths both shares the Reinforced Deepslate.
// This helps to reset the portal.

// Keep every variable local to this file. The pack has many server scripts, so
// this prevents a same-named global const in another file from blocking reload.
(() => {

const PORTAL_DISRUPTOR_ITEM = 'kubejs:portal_disruptor'

// The Reinforced Deepslate monument is much taller than an ordinary Nether
// portal. A player standing near its base can therefore be close visually while
// every active portal block is more than six blocks above their feet.
const PORTAL_RESET_HORIZONTAL_RADIUS = 12
const PORTAL_RESET_VERTICAL_RADIUS = 16

// This temporary marker cannot occur naturally in a completed Ancient City.
// It lets the script restore exactly the frame positions it changed without
// filling the portal's naturally empty interior with Reinforced Deepslate.
const PORTAL_RESET_FRAME_MARKER = 'minecraft:structure_void'

ItemEvents.rightClicked(event => {
  if (event.item.id !== PORTAL_DISRUPTOR_ITEM) return

  const player = event.player
  const level = player.level
  const centerX = Math.floor(player.x)
  const centerY = Math.floor(player.y)
  const centerZ = Math.floor(player.z)
  //math! I let AI do this because I suck at math.
  // Both mods validate their portal against a Reinforced Deepslate frame. Their
  // decompiled updateShape implementations turn the portal interior into air as
  // soon as that frame is invalid. Only their activation items recreate it.
  const minX = centerX - PORTAL_RESET_HORIZONTAL_RADIUS
  const minY = centerY - PORTAL_RESET_VERTICAL_RADIUS
  const minZ = centerZ - PORTAL_RESET_HORIZONTAL_RADIUS
  const maxX = centerX + PORTAL_RESET_HORIZONTAL_RADIUS
  const maxY = centerY + PORTAL_RESET_VERTICAL_RADIUS
  const maxZ = centerZ + PORTAL_RESET_HORIZONTAL_RADIUS
  // KubeJS exposes level.dimension as the final ID (for example,
  // "minecraft:overworld") in this runtime. It is not a ResourceKey and has
  // no location() function.
  const dimensionId = String(level.dimension)

  const area =
    minX + ' ' + minY + ' ' + minZ +
    ' ' + maxX + ' ' + maxY + ' ' + maxZ
  const commandPrefix = 'execute in ' + dimensionId + ' run fill ' + area + ' '
  let frameBlocksCycled = 0
  let frameBlocksRestored = 0

  // The first command invalidates the frame and synchronously sends neighbor
  // updates, collapsing either portal. The second command immediately restores
  // every changed frame position. try/finally ensures restoration is attempted
  // even if the first command's result conversion unexpectedly fails.
  try {
    frameBlocksCycled = Number(event.server.runCommandSilent(
      commandPrefix + PORTAL_RESET_FRAME_MARKER + ' replace minecraft:reinforced_deepslate'
    ))
  } finally {
    frameBlocksRestored = Number(event.server.runCommandSilent(
      commandPrefix + 'minecraft:reinforced_deepslate replace ' + PORTAL_RESET_FRAME_MARKER
    ))
  }

  console.info(
    '[Portal Disruptor] dimension=' + dimensionId +
    ' center=' + centerX + ',' + centerY + ',' + centerZ +
    ' frameCycled=' + frameBlocksCycled +
    ' frameRestored=' + frameBlocksRestored
  )

  if (frameBlocksCycled > 0 && frameBlocksRestored > 0) {
    player.tell(Text.of('Portal reset complete; the Reinforced Deepslate frame was preserved.').green())
  } else {
    player.tell(Text.of(
      'No Reinforced Deepslate portal frame was found within ' +
      PORTAL_RESET_HORIZONTAL_RADIUS + ' horizontal and ' +
      PORTAL_RESET_VERTICAL_RADIUS + ' vertical blocks.'
    ).gray())
  }
})

// The tool is reusable. Its recipe uses materials associated with the Deep
// Dark and dimensional travel without consuming either mod's portal key.
ServerEvents.recipes(event => {
  event.shaped(PORTAL_DISRUPTOR_ITEM, [
    'ECE',
    'CRC',
    'ECE'
  ], {
    E: 'minecraft:echo_shard',
    C: 'minecraft:crying_obsidian',
    R: 'minecraft:recovery_compass'
  }).id('kubejs:portal_disruptor')
})

})()
