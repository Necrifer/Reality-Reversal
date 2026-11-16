ServerEvents.tags('item', event => {
  event.remove('twilightforest:portal/activator', '#c:gems/diamond')
  event.add('c:gems/moonstone', 'excessive_utilities:moon_stone')
  event.add('c:gems/moonstone', 'gaiadimension:moonstone')
  event.add('c:sandstone/venus_sandstone', 'ad_astra:venus_sandstone')
  event.add('c:fluids/sulfuric_acid', 'mekanism:sulfuric_acid')
  event.add('c:fluids/sulfuric_acid', 'nuclearcraft:sulfuric_acid')
  event.add('c:ingots/cobalt', 'valoria:cobalt_ingot')
  event.add('c:ores/cobalt', 'valoria:cobalt_ore')
  event.add('c:ores/cobalt', 'valoria:deepslate_cobalt_ore')
  event.add('c:ingots/quicksilver', 'mna:transmuted_silver')
  event.add('c:ingots/law', 'kubejs:law_ingot')
  event.add('c:ingots/stellarium', 'kubejs:stellarium_ingot')
  event.add('c:ingots/sol_astral', 'kubejs:sol_astral_ingot')
  event.add('c:ingots/modular', 'kubejs:modular_ingot')
  // Compressor input in scripts/extendcrafting.zs: CraftTweaker <item:> inputs crash the compressor, tags work.
  event.add('c:ingots/enchanted', 'excessive_utilities:enchanted_ingot')
  event.add('c:singularity_materials/quicksilver', 'mna:transmuted_silver')
  event.add('c:singularity_materials/onyx', 'spectrum:onyx_shard')
  event.add('c:singularity_materials/moonstone', 'spectrum:moonstone_shard')
  event.add('c:singularity_materials/enderium', 'oritech:enderic_compound')
  event.add('c:singularity_materials/citrine', 'spectrum:citrine_shard')
  event.add('c:singularity_materials/azurite', 'spectrum:refined_azurite')
})
ServerEvents.tags('block', event => {
  
  event.add('minecraft:mineable/pickaxe', 'dimdoors:unravelled_fabric')

  const nullBlack = 'voidscape:null_black'
  const nullWhite = 'voidscape:null_white'
  event.add('minecraft:mineable/pickaxe', nullWhite)
  event.add('minecraft:needs_diamond_tool', nullWhite)
  event.add('minecraft:mineable/pickaxe', nullBlack)
  event.add('minecraft:needs_diamond_tool', nullBlack)
})
