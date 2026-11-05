// Native GT recipe resources avoid the incompatible empty-condition fluent constructor.
// Counts, components, chances, circuit and EBF temperature are retained.
ServerEvents.recipes(event => {
  // GT's itemInputs turns a plain Item.of stack into an item-only ingredient and drops its components.
  // withComponents builds a NeoForge component ingredient (non-strict: only the listed components must match).
  const SizedIngredient = Java.loadClass('net.neoforged.neoforge.common.crafting.SizedIngredient')
  const DataComponentIngredient = Java.loadClass('net.neoforged.neoforge.common.crafting.DataComponentIngredient')
  const withComponents = (id, count, components) =>
    new SizedIngredient(DataComponentIngredient.of(false, Item.of(id, 1, components)), count)
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
