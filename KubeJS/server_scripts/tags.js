// Listen to item tag event
//ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  //event.add('forge:cobblestone', 'minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  //event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

  // Get #forge:ingots/copper tag and remove all entries from it
  //event.removeAll('forge:ingots/copper')

  // Required for FTB Quests to check item NBT
  //event.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')

  // You can create new tags the same way you add to existing, just give it a name
  //event.add('forge:completely_new_tag', 'minecraft:clay_ball')

  // It supports adding tags to tags as well. Just prefix the second tag with #
  //event.add('c:stones', '#forge:stone')

  // Removes all tags from this entry
  //event.removeAllTagsFrom('minecraft:stick')

  // Add all items from the forge:stone tag to the c:stone tag, unless the id contains diorite
  //const stones = event.get('forge:stone').getObjectIds()
  //const blacklist = Ingredient.of(/.*diorite.*/)
 // stones.forEach(stone => {
  //  if (!blacklist.test(stone)) event.add('c:stone', stone)
 // })
//})

// Listen to item tag event
//ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
//  event.add('forge:cobblestone', 'minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
//  event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

  // Get #forge:ingots/copper tag and remove all entries from it
//  event.removeAll('forge:ingots/copper')

  // Required for FTB Quests to check item NBT
//  event.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')

  // You can create new tags the same way you add to existing, just give it a name
//  event.add('forge:completely_new_tag', 'minecraft:clay_ball')

  // It supports adding tags to tags as well. Just prefix the second tag with #
//  event.add('c:stones', '#forge:stone')

  // Removes all tags from this entry
//  event.removeAllTagsFrom('minecraft:stick')

  // Add all items from the forge:stone tag to the c:stone tag, unless the id contains diorite
//  const stones = event.get('forge:stone').getObjectIds()
//  const blacklist = Ingredient.of(/.*diorite.*/)
//  stones.forEach(stone => {
//    if (!blacklist.test(stone)) event.add('c:stone', stone)
//  })
//})
priority: 5
ServerEvents.tags('item', event => {
    event.remove('twilightforest:portal/activator', '#c:gems/diamond')
})