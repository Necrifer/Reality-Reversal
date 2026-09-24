ServerEvents.tags('item', event => {
  event.remove('twilightforest:portal/activator', '#forge:gems/diamond')

  // Ad Astra 1.15.20 ships a Mekanism recipe that references this tag but
  // does not provide the tag itself.
  event.add('forge:sandstone/venus_sandstone', 'ad_astra:venus_sandstone')
  event.add('forge:fluids/sulfuric_acid', 'mekanism:sulfuric_acid')
  event.add('forge:fluids/sulfuric_acid', 'nuclearcraft:sulfuric_acid')
  event.add('forge:ingots/cobalt', 'valoria:cobalt_ingot')
  event.add('forge:ores/cobalt', 'valoria:cobalt_ore')
  event.add('forge:ores/cobalt', 'valoria:deepslate_cobalt_ore')
  event.add('forge:ingots/quicksilver', 'mna:transmuted_silver')
  event.add('forge:singularity_materials/quicksilver', 'mna:transmuted_silver')
  event.add('forge:singularity_materials/onyx', 'spectrum:onyx_shard')
  event.add('forge:singularity_materials/moonstone', 'spectrum:moonstone_shard')
  event.add('forge:singularity_materials/enderium', 'thermal:enderium_ingot')
  event.add('forge:singularity_materials/citrine', 'spectrum:citrine_shard')
  event.add('forge:singularity_materials/azurite', 'spectrum:refined_azurite')
})
ServerEvents.tags('block', event => {
  // DimDoors omits this fabric from its harvest tags; allow pickaxes to drop loot.
  event.add('minecraft:mineable/pickaxe', 'dimdoors:unravelled_fabric')

  const nullBlack = 'voidscape:null_black'
  const nullWhite = 'voidscape:null_white'
  event.add('minecraft:mineable/pickaxe', nullWhite)
  event.add('minecraft:needs_diamond_tool', nullWhite)
  event.add('minecraft:mineable/pickaxe', nullBlack)
  event.add('minecraft:needs_diamond_tool', nullBlack)
})