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
recipe('oritech:pulveriser_salt', {
  type: 'oritech:pulverizer',
  ingredients: [item('gaiadimension:salt')],
  results: [stack('gtceu:salt_dust', 1)],
  time: 600
})
  recipe('oritech:foundry_dark_steel', {
    type: 'oritech:foundry',
    ingredients: [item('#c:ingots/steel'),item('mekanism:enriched_refined_obsidian')],
    results: [stack('enderio:dark_steel_ingot')],
    time: 600
  })
  // oritech:foundry_graphite_electrode is added in the generateData block at the end of this file.
  recipe('oritech:assembler_ender_eye', {
    type: 'oritech:assembler',
    ingredients: [
      item('#c:ingots/wrought_iron'),
      item('#c:ingots/pulsating_alloy'),
      item('minecraft:blaze_powder'),
      item('#c:ender_pearls')
    ],
    results: [stack('minecraft:ender_eye', 2)],
    time: 300
    });
  recipe('oritech:assembler_copper_coil', {
    type: 'oritech:assembler',
    ingredients: [
      item('#c:ingots/constantan'),
      item('#c:ingots/end_steel'),
      item('#c:ingots/constantan'),
      item('#c:ingots/end_steel')
    ],
    results: [stack('nuclearcraft:coil_copper', 1)],
    time: 300
    });
  recipe('oritech:atomic_forge_mythical_seed', {
    type: 'oritech:atomic_forge',
    ingredients: [
      item('minecraft:wheat_seeds'),
      item('spectrum:stratine_fragments'),
      item('mysticalagriculture:prosperity_ingot'),
    ],
    results: [stack('mysticalagriculture:prosperity_seed_base', 1)],
    time: 10
  });
    recipe('oritech:assembler_industrial_support_beam',{
      type: 'oritech:assembler',
      ingredients: [
        item('#c:ingots/steel'),
        item('oritech:carbon_fibre_strands'),
        item('#c:ingots/steel'),
        item('oritech:carbon_fibre_strands')
      ],
      results: [stack('oritech:metal_beam_block', 6)],
      time: 100
    })
  recipe('oritech:kubejs/star_remains',{
  type: 'oritech:assembler',
  ingredients: [
    item('naturesaura:sky_ingot'),
    item('gtceu:taint_ingot'),
    item('botania:livingwood_log'),
    item('extendedcrafting:flux_star_block')
  ],
  results: [stack('kubejs:star_remains', 3)],
  time: 1000
  })
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
