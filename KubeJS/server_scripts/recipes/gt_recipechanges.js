// Native GT recipe resources avoid the incompatible empty-condition fluent constructor.
// Counts, components, chances, circuit and EBF temperature are retained.
ServerEvents.recipes(event => {
  // GT's itemInputs turns a plain Item.of stack into an item-only ingredient and drops its components.
  // withComponents builds a NeoForge component ingredient (non-strict: only the listed components must match).
  const SizedIngredient = Java.loadClass('net.neoforged.neoforge.common.crafting.SizedIngredient')
  const DataComponentIngredient = Java.loadClass('net.neoforged.neoforge.common.crafting.DataComponentIngredient')
  const withComponents = (id, count, components) =>
    new SizedIngredient(DataComponentIngredient.of(false, Item.of(id, 1, components)), count) 
function chancedfluid (id, amount, chance) {event.recipes.gtceu.chancedFluidOutput(Fluid.of(id, amount), chance)}
function cutter(itemin, fluidin, itemout, time, eu) {
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.cutter(recipeId)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .duration(time)
  .EUt(eu)
}
function circuit(itemin, fluidin, itemout, time, eu) {
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.circuit_assembler(recipeId)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .duration(time)
  .EUt(eu)
}
function macerator(itemin, itemout, time, eu) {
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.macerator(recipeId)
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .duration(time)
  .EUt(eu)
}// Returns the recipe so chanced outputs can be chained on. Fluids are 'AMOUNTx id'.
function electrolyser (itemin, fluidin, itemout, fluidout, time, eu) {
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.electrolyzer(recipeId)
  .circuit(1)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .outputFluids(fluidout)
  .duration(time)
  .EUt(eu)
}
function chemreactor(itemin, fluidin, itemout, fluidout, time, eu){
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.chemical_reactor(recipeId)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .outputFluids(fluidout)
  .duration(time)
  .EUt(eu)
}
function centrifuge(itemin, fluidin, itemout, fluidout, time, eu) {
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  return event.recipes.gtceu.centrifuge(recipeId)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .outputFluids(fluidout)
  .duration(time)
  .EUt(eu)
}
function idRemove(idRemoval){return event.remove({id: idRemoval})}
chemreactor(['3x gtceu:taint_dust', 'resin_brick'], '500x kubejs:instability', ['5x gtceu:gallium_arsenide_dust', '3x nuclearcraft:berkelium_247'],
  '200x kubejs:faint_arcane', 150, 512)
cutter('gtceu:exquisite_opal_gem', '3x gaiadimension:mineral_water_still', '2x gaiadimension:white_opal', 10000, 64)
electrolyser('excessive_utilities:block_of_demon_metal', '144x gtceu:chaos_infused', ['gtceu:chaos_infused_dust', 'gaiadimension:hot_dust', 'jaopca:dusts.cherenkov_quartz'], '200x voidscape:voidic_source', 2500, 128)
  .chancedOutput(Item.of('nuclear_radiation:fallout_dust', 2), 1, 0) // 1 in 10000 = 0.01%, no tier boost.
chemreactor('5x aoa3:ice_crystal', ['400x nuclearcraft:cryotheum', '800x kubejs:aurorial_call'], 'auroral:shimmering_ice', 'gtceu:ice', 120, 512)
circuit(['2x gtceu:plastic_printed_circuit_board', '3x gtceu:micro_processor_assembly', '2x #gtceu:diodes', '6x gtceu:ram_chip', 'auroral:aurora_shard', 'cataclysm:ignitium_ingot'], '250x kubejs:aurorial_call', 'gtceu:micro_processor_computer', 200, 512)
idRemove('gtceu:circuit_assembler/workstation_ev_soldering_alloy')
idRemove('gtceu:circuit_assembler/workstation_ev')
idRemove('gtceu:shaped/block_compress_chaos_infused')
  event.recipes.gtceu.arc_furnace('modpack:annealed_copper_ingot')
    .itemInputs('#c:ingots/copper')
    .itemOutputs('gtceu:annealed_copper_ingot')
    .duration(200)           // 200 ticks = 10 seconds before modifiers
    .EUt(480)               // Base energy consumption per tick
    // KubeJS 2101 fluid strings are 'AMOUNTx id' (or 'AMOUNTx #tag'). 'id AMOUNT' silently becomes 1000 mB.
    .inputFluids('600x #c:oxygen') // Any fluid in this fluid tag; 600 mB. Fluid.of() requires a concrete ID.
    // .circuit(1);   Require programmed circuit setting 
  event.recipes.gtceu.extractor('modpack:molten_starmetal')
    .itemInputs('astralsorcery:starmetal_ingot')
    .outputFluids(['144x jaopca:molten.starmetal'])
    .duration(200)
    .EUt(480)
  event.recipes.gtceu.centrifuge('modpack:helium_gas_ender')
    .inputFluids('10000x gtceu:ender_air')
    .outputFluids(['3900x gtceu:nitrogen_dioxide', '1000x gtceu:helium']) // Helium gas is registered as gtceu:helium.
    .duration(1600)
    .EUt(480)
  event.recipes.gtceu.assembler('modpack:dimension_breach')
    .inputFluids('12000x nuclearcraft:technical_water')
    .itemInputs([
      {item: 'ad_astra:ostrum_factory_block', amount: 5}, 
      {item: 'ad_astra:desh_factory_block', amount: 5},
      // 1.21 uses data components, not NBT. strongNBT()/weakNBT() no longer exist.
      withComponents('extendedcrafting:singularity', 1, {'extendedcrafting:singularity_id': 'extendedcrafting:lunar'}),
      'kubejs:eyes1', 'kubejs:eyes2'
    ])
    .itemOutputs('kubejs:breach')
    .duration(120)
    .EUt(480)
  event.recipes.gtceu.chemical_reactor('modpack:more_taint_dust')
    .inputFluids(['100x dimdoors:eternal_fluid'])
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
      // Soul vials store the mob's full NBT (health etc.), so no ingredient can match them by mob type.
      // A full Mystical Agriculture soul jar is exact: {type, souls}. The soul type is defined in
      // config/mysticalcustomization/mobsoultypes/ignited_revenant.json; souls must equal its 'souls' value.
      withComponents('enderio:filled_soul_vial', 1, {'enderio:soul': {entity_type: 'cataclysm:ignited_revenant', entity_tag: {}}})
    ])
    .inputFluids(Fluid.of('gtceu:blaze', 1000))
    .itemOutputs('8x cataclysm:ignitium_ingot')
    .duration(400) // 20 seconds before overclocking
    .EUt(480);    // HV baseline for this pack
  event.recipes.gtceu.lathe('modpack:taint_rod/lathe')
    .itemInputs([
      {item:'gtceu:taint_ingot', amount: 1},
    ])
    .itemOutputs([{item:'gtceu:taint_rod', amount: 2}])
    .duration(100)
    .EUt(256)
})
