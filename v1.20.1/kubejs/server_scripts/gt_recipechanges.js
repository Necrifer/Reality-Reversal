ServerEvents.recipes(function(event) {
//  event.remove({
//    type: 'gtceu:electric_blast_furnace',
//    output: 'gtceu:taint_ingot'
//  });
// event.remove({ id: 'namespace:exact_recipe_id' });

// GT energy systems requires 4x more V than last tier to work!
// modpack starts off at HV: 512 EU/t
// Overclock is present in the mod! Recipes requires <128 RF/t gets a 2x speed increase!
  event.recipes.gtceu.arc_furnace('modpack:annealed_copper_ingot')
    .itemInputs('#forge:ingots/copper')
    .itemOutputs('gtceu:annealed_copper_ingot')
    .duration(200)           // 200 ticks = 10 seconds before modifiers
    .EUt(480)               // Base energy consumption per tick
    .inputFluids('#c:oxygen 600') // Any fluid in this fluid tag; 600 mB. Fluid.of() requires a concrete ID.
    // .circuit(1);   Require programmed circuit setting 
  event.recipes.gtceu.centrifuge('modpack:helium_gas_ender')
    .inputFluids('gtceu:ender_air 10000')
    .outputFluids(['gtceu:nitrogen_dioxide 3900', 'gtceu:helium 1000']) // Helium gas is registered as gtceu:helium.
    .duration(1600)
    .EUt(480)
  event.recipes.gtceu.assembler('modpack:dimension_breach')
    .inputFluids('nuclearcraft:technical_water 12000')
    .itemInputs([
      {item: 'ad_astra:ostrum_factory_block', amount: 5}, 
      {item: 'ad_astra:desh_factory_block', amount: 5},
      // Plain Item.of loses NBT when converted to an ingredient.
      // Because why not make coding 10 billion times worse than it already is?
      Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lunar"}').strongNBT(),
      'kubejs:eyes1', 'kubejs:eyes2'
    ])
    .itemOutputs('kubejs:breach')
    .duration(120)
    .EUt(480)
  event.recipes.gtceu.chemical_reactor('modpack:pyrotheum')
    .inputFluids(['tconstruct:blazing_blood 1250', 'thermal:refined_fuel 1000', '#forge:creosote 750'])
    .outputFluids('tinkers_advanced:pyrotheum 500')
    .duration(200)
    .EUt(480);
  
  event.recipes.gtceu.chemical_reactor('modpack:more_taint_dust')
    .inputFluids(['dimdoors:eternal_fluid 100'])
    .itemInputs(['kubejs:taint_ore'])
    .itemOutputs([
      {item: 'gtceu:taint_dust', amount: 32}
    ])
    .duration(200)
    .EUt(480);
  event.recipes.gtceu.centrifuge('modpack:taint_dust/centrifuge')
    .itemInputs([
      {item: 'gtceu:taint_dust', amount: 32}])
    .itemOutputs([
      {item: 'jaopca:dusts.ostrum', amount: 8},
      {item: 'jaopca:dusts.desh', amount: 8},
      {item: 'kubejs:seeneyes2', amount: 2}
    ])
    // Independent 33.33% rolls; no additional chance from higher tiers.
    .chancedOutput(Item.of('gtceu:sphalerite_dust', 2), 3333, 0)
    .chancedOutput(Item.of('gtceu:grossular_dust', 2), 3333, 0)
    .chancedOutput(Item.of('gtceu:bismuth_dust', 5), 3333, 0)
    .duration(300)
    .EUt(500);
  event.recipes.gtceu.chemical_reactor('modpack:industrialforegoing/ignitium_ingot')
    .itemInputs([
      {item: 'cataclysm:ignitium_ingot', amount: 1},
      Item.of('enderio:filled_soul_vial', {
      BlockEntityTag: { EntityStorage: { Entity: { id: 'cataclysm:ignited_revenant' } } }
    }).weakNBT()])
    .inputFluids(Fluid.of('tinkers_advanced:pyrotheum', 1000))
    .itemOutputs('8x cataclysm:ignitium_ingot')
    .duration(400) // 20 seconds before overclocking
    .EUt(480);    // HV baseline for this pack
    
  event.recipes.gtceu.assembler('modpack:stable_fabric')
    .itemInputs([
      {item:'dimdoors:world_thread', amount: 4}
    ])
    .itemOutputs('dimdoors:stable_fabric')
    .duration(200)
    .EUt(256)
    event.recipes.gtceu.assembler('modpack:liminal_lint')
    .itemInputs([
      {item:'dimdoors:frayed_filament', amount: 4}
    ])
    .itemOutputs('dimdoors:liminal_lint')
    .duration(200)
    .EUt(256)
  event.recipes.gtceu.assembler('modpack:enduring_fibers')
    .itemInputs([
      {item:'dimdoors:infrangible_fiber', amount: 4}
    ])
    .itemOutputs('dimdoors:enduring_fibers')
    .duration(200)
    .EUt(256)
  event.recipes.gtceu.assembler('modpack:fabric_of_finality')
    .itemInputs([
      {item:'dimdoors:enduring_fibers', amount: 4},
      {item:'minecraft:dragon_breath', amount: 1}
    ])
    .itemOutputs('dimdoors:fabric_of_finality')
    .duration(200)
    .EUt(256)
  event.recipes.gtceu.assembler('modpack:fuzzy_fireball')
    .itemInputs([
      {item:'dimdoors:liminal_lint', amount: 2},
      {item:'minecraft:fire_charge', amount: 1}
    ])
    .itemOutputs('dimdoors:fuzzy_fireball')
    .duration(200)
    .EUt(256)
  event.recipes.gtceu.assembler('modpack:rift_pearl')
    .itemInputs([
      {item:'dimdoors:stable_fabric', amount: 2},
      {item:'minecraft:ender_pearl', amount: 1}
    ])
    .itemOutputs('dimdoors:rift_pearl')
    .duration(200)
    .EUt(256)
})