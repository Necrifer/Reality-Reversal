// This is what happens when devs suck at coding.
// AI becomes necessary to understand what on earth they are doing.

// Reality Reversal: Draconium ore progression gating
// -----------------------------------------------------------------------------
// AStages 2.5.2 does NOT accept block ID strings for the final two arguments
// of addRestrictionForOre(). It requires actual Minecraft BlockState objects.
// Keep the IDs below as readable configuration, then resolve them through the
// block registry before registering each restriction.

//This could have been unnecessary and just used blockID but nope, must be complicated
const RR_ORE_GATE_REGISTRIES = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const RR_ORE_GATE_RESOURCE_LOCATION = Java.loadClass('net.minecraft.resources.ResourceLocation')

/**
 * Resolve a namespaced block ID to its default BlockState.
 *
 * The explicit registry-key check is important: Minecraft registries normally
 * return their default entry for a missing ID. Without this check, a typo could
 * silently turn a gated ore into air instead of reporting the bad block ID.
 */
function rrOreGateBlockState(blockId) {
  const location = new RR_ORE_GATE_RESOURCE_LOCATION(blockId)
  const block = RR_ORE_GATE_REGISTRIES.BLOCK.get(location)
  const resolvedId = String(RR_ORE_GATE_REGISTRIES.BLOCK.getKey(block))

  if (resolvedId !== blockId) {
    throw new Error(`Unknown block ID in ore_gamestage.js: ${blockId}`)
  }

  return block.defaultBlockState()
}

const RR_ORE_GATES = [
  {
    id: 'deepslate_draconic_replacement',
    stage: 'FlawedStone',
    original: 'draconicevolution:deepslate_draconium_ore',
    replacement: 'minecraft:deepslate'
  },
  {
    id: 'end_draconic_replacement',
    stage: 'FlawedStone',
    original: 'draconicevolution:end_draconium_ore',
    replacement: 'minecraft:end_stone'
  },
  {
    id: 'nether_draconic_replacement',
    stage: 'FlawedStone',
    original: 'draconicevolution:nether_draconium_ore',
    replacement: 'minecraft:netherrack'
  },
  {
    id: 'overworld_draconic_replacement',
    stage: 'FlawedStone',
    original: 'draconicevolution:overworld_draconium_ore',
    replacement: 'minecraft:stone'
  }
]

RR_ORE_GATES.forEach(gate => {
  AStages.addRestrictionForOre(
    gate.id,
    gate.stage,
    rrOreGateBlockState(gate.original),
    rrOreGateBlockState(gate.replacement)
  )
})
