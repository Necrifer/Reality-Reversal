// Custom drops for breaking blocks.
//
// LootJS conditions apply to the complete modifier in which they appear.
// Consequently, the Silk Touch and non-Silk-Touch results are kept in
// separate modifiers so that the two drops are mutually exclusive.
LootJS.modifiers(event => {
  const fabric = 'dimdoors:unravelled_fabric'
  const reality = 'dimdoors:black_fabric'
  const darksand = 'dimdoors:dark_sand'

  // IMPORTANT: each result starts with a new addBlockLootModifier() call.
  // Conditions accumulate within one modifier, so chaining the inverse case
  // after the Silk Touch case would require both conditions at the same time.

  // Unravelled Fabric

  // Discard the native loot first.
  event
    .addBlockLootModifier(fabric)
    .removeLoot(Ingredient.all)

  // Enchantment level 0 has a 0% chance and level 1 has a 100% chance.
  // Therefore, a Silk Touch tool makes the block drop itself.
  event
    .addBlockLootModifier(fabric)
    .randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
    .addLoot(fabric)

  // This is the inverse: 100% without Silk Touch and 0% with Silk Touch.
  // Silk Touch only has one level, so these two entries cover every case.
  event
    .addBlockLootModifier(fabric)
    .randomChanceWithEnchantment('minecraft:silk_touch', [1, 0])
    .addLoot('dimdoors:frayed_filament')

  // Black Fabric
  event
    .addBlockLootModifier(reality)
    .removeLoot(Ingredient.all)

  event
    .addBlockLootModifier(reality)
    .randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
    .addLoot(reality)

  event
    .addBlockLootModifier(reality)
    .randomChanceWithEnchantment('minecraft:silk_touch', [1, 0])
    .addLoot('dimdoors:world_thread')

  // Dark Sand
    event
    .addBlockLootModifier(reality)
    .removeLoot(Ingredient.all)

  event
    .addBlockLootModifier(darksand)
    .randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
    .addLoot(darksand)

  event
    .addBlockLootModifier(darksand)
    .randomChanceWithEnchantment('minecraft:silk_touch', [1, 0])
    .addLoot('dimdoors:frayed_filament')  

})
