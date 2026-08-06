  
ServerEvents.recipes(event => {
  const addRecipe = (id, recipe) => event.custom(recipe).id(id);
  const sizedItem = (item, count) => ({ item: item, count: count });
  const resultItem = (id, count) => ({ id: id, count: count });
  const spirit = (type, count) => ({ type: type, count: count });

 const removeRecipe = [
    'malum:spirit_infusion/soul_stained_steel_ingot'
  ]
  removeRecipe.forEach(removeRecipe =>{
    event.remove({id: removeRecipe})
  })

  addRecipe('kubejs:malum/soul_stained_steel_ingot', {
    type: 'malum:spirit_infusion',
    input: sizedItem('industrialforegoing:pink_slime_ingot', 4),
    result: resultItem('malum:soul_stained_steel_ingot', 4),
    spirits: [
      spirit('malum:wicked', 3),
      spirit('malum:arcane', 1),
      spirit('malum:earthen', 1)
    ],
    extraInputs: [
      sizedItem('malum:refined_soulstone', 4),
      sizedItem('minecraft:quartz', 2)
    ],
    carryOverComponentData: false
  });
  addRecipe('kubejs:malum/tertium_farmland', {
    type: 'malum:spirit_infusion',
    input: sizedItem('minecraft:dirt', 1),
    result: resultItem('mysticalagriculture:tertium_farmland', 1),
    spirits: [
      spirit('malum:sacred', 2),
      spirit('malum:aerial', 5),
      spirit('malum:earthen', 3),
      spirit('malum:aqueous', 3)
    ],
    extraInputs: [
      sizedItem('mysticalagriculture:tertium_essence', 4),
      sizedItem('minecraft:wither_skeleton_skull', 1)
    ],
    carryOverComponentData: false
  });
})