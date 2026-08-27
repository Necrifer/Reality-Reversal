// This kind of nonsense coding behaviour, is why people resort to AI.

// KubeJS evaluates every server script in one shared global scope. Wrapping this
// file in an IIFE keeps these helper constants/functions private and prevents a
// redeclaration collision with ore_gamestage.js.
(() => {
  const registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

  /** Resolve and validate a modded block ID as an actual Block object. */
  function resolveBlock(blockId) {
    const location = new ResourceLocation(blockId)
    const block = registries.BLOCK.get(location)
    const resolvedId = String(registries.BLOCK.getKey(block))

    if (resolvedId !== blockId) {
      throw new Error(`Unknown block ID in block_drop_gating.js: ${blockId}`)
    }

    return block
  }

  /** Resolve and validate a modded item ID as an actual Item object. */
  function resolveItem(itemId) {
    const location = new ResourceLocation(itemId)
    const item = registries.ITEM.get(location)
    const resolvedId = String(registries.ITEM.getKey(item))

    if (resolvedId !== itemId) {
      throw new Error(`Unknown item ID in block_drop_gating.js: ${itemId}`)
    }

    return item
  }

  AStages.addRestrictionForLoot('draconium_ore_loot', 'Flawed Stone')
    // restrictBlocks() requires Block objects. The vanilla Blocks class cannot
    // expose fields for blocks registered by Draconic Evolution.
    .restrictBlocks(
      resolveBlock('draconicevolution:overworld_draconium_ore'),
      resolveBlock('draconicevolution:deepslate_draconium_ore'),
      resolveBlock('draconicevolution:nether_draconium_ore'),
      resolveBlock('draconicevolution:end_draconium_ore')
    )
    // restrictItems() also declares Java Item varargs in AStages 2.5.2, so
    // resolve every possible normal/Silk Touch result before passing it in.
    .restrictItems(
      resolveItem('draconicevolution:draconium_dust'),
      resolveItem('draconicevolution:overworld_draconium_ore'),
      resolveItem('draconicevolution:deepslate_draconium_ore'),
      resolveItem('draconicevolution:nether_draconium_ore'),
      resolveItem('draconicevolution:end_draconium_ore')
    )
    .applyEverywhere()
})()
