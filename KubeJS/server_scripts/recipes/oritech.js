ServerEvents.recipes(event => {

  const item = id => Ingredient.of(id).toJson();
  const stack = (id, count) => ({ id: id, count: count });
  const recipe = (id, body) => event.custom(body).id(id);
  const removeId = (idremove) => event.remove({id: idremove})
  const massremoval = [
    {
    machine: 'Centrifuge (item recipe)',
    type: 'oritech:centrifuge',
    ids: ['oritech:centrifuge/carbon']
    },
  ]
  massremoval.forEach(group => {
    group.ids.forEach(recipeID => {
      event.remove({id:recipeID})
    })
  })
  removeId('oritech:foundry/alloy/compat/enderio/darksteel')
//Side note: This script may need to be split later, as it covers all Oritech machines.
function pulverise(itemin, itemout, time){
  return event.recipes.oritech
  .pulverizer()
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .time(time)
}
function foundry(itemin, itemout, time){
  return event.recipes.oritech
  .foundry()
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .time(time)
}
function assemble(itemin, itemout, time){
  return event.recipes.oritech
  .assembler()
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .time(time)
}
function atomforge(itemin, itemout, time){
  return event.recipes.oritech
  .atomic_forge()
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .time(time)
}
pulverise('gaiadimension:salt', 'gtceu:salt_dust', 600)
foundry(['#c:ingots/steel', 'mekanism:enriched_refined_obsidian'], 'enderio:dark_steel_ingot', 600)
assemble(['#c:ingots/wrought_iron','#c:ingots/pulsating_alloy','minecraft:blaze_powder','#c:ender_pearls'], '2x ender_eye', 300)
assemble(['#c:ingots/constantan','#c:ingots/end_steel','#c:ingots/constantan','#c:ingots/end_steel'], 'nuclearcraft:coil_copper', 300)
assemble(['#c:ingots/steel', 'oritech:carbon_fibre_strands', '#c:ingots/steel', 'oritech:carbon_fibre_strands'], '6x oritech:metal_beam_block', 100)
assemble(['naturesaura:sky_ingot', 'gtceu:taint_ingot', 'botania:livingwood_log', 'extendedcrafting:flux_star_block'], '3x kubejs:star_remains', 1000)
atomforge(['wheat_seeds', 'spectrum:stratine_fragments', 'mysticalagriculture:prosperity_ingot'], 'mysticalagriculture:prosperity_seed_base', 10)
  // oritech:foundry_graphite_electrode is added in the generateData block at the end of this file.
});

// Outputs that KubeJS's Oritech schema rejects go in as raw recipe JSON, read by Oritech's own loader.
// IE's graphite electrode stacks to 16 and has durability, which KubeJS's strict item check refuses
// ("Item cannot be both damageable and stackable"); Oritech's loader uses the non-strict ItemStack codec.
ServerEvents.generateData('after_mods', event => {
  const rawRecipe = (id, body) => {
    const parts = id.split(':');
    event.json(parts[0] + ':recipe/' + parts[1] + '.json', body);
  };
  rawRecipe('oritech:foundry_graphite_electrode', {
    type: 'oritech:foundry',
    ingredients: [{ item: 'immersiveengineering:dust_hop_graphite' }, { tag: 'c:ingots/steel' }],
    results: [{ id: 'immersiveengineering:graphite_electrode', count: 1 }],
    time: 1200
  });
});
