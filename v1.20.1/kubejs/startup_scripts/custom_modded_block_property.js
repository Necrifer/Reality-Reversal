BlockEvents.modification(event => {
  // Voidscape registers these with noLootTable(), bypassing LootJS entirely.
  // GTCEu 7.5.3's BlockBehaviourAccessor supplies public setDrops(ResourceLocation).
  // Point at the self-drop JSON files in kubejs/data/voidscape/loot_tables/blocks.

  const NullBlockLootId = Java.loadClass('net.minecraft.resources.ResourceLocation')
  event.modify('voidscape:null_black', block => {
    block.setDrops(new NullBlockLootId('voidscape', 'blocks/null_black'))
    block.destroySpeed = 5.0       // Hardness; use -1 for unbreakable
    block.explosionResistance = 6.0
    block.requiresTool = true     // Correct tool required for drops
  })
  event.modify('voidscape:null_white', block => {
    block.setDrops(new NullBlockLootId('voidscape', 'blocks/null_white'))
    block.destroySpeed = 5.0       // Hardness; use -1 for unbreakable
    block.explosionResistance = 6.0
    block.requiresTool = true     // Correct tool required for drops
  })
})