ServerEvents.recipes(event => {

  const item = id => Ingredient.of(id).toJson();
  const stack = (id, count) => ({ id: id, count: count });
  const recipe = (id, body) => event.custom(body).id(id);

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
//Side note: This script may need to be split later, as it covers all Oritech machines.
  recipe('oritech:assembler_mythicalfarmland1', {
    type: 'oritech:assembler',
    ingredients: [
      item('minecraft:dirt'),
      item('mysticalagriculture:inferium_essence'),
      item('bigreactors:blutonium_ingot'),
      item('#c:ingots/uranium')
    ],
    results: [stack('mysticalagriculture:inferium_farmland', 1)],
    time: 300
    });
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
  recipe('oritech:assembler_conductive_alloy_plate', {
    type: 'oritech:assembler',
    ingredients: [
      item('#c:ingots/conductive_alloy'),
      item('#c:ingots/conductive_alloy'),
      item('#c:ingots/conductive_alloy'),
      item('#c:ingots/conductive_alloy')
    ],
    results: [stack('kubejs:conductive_alloy_plate', 1)],
    time: 300
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
});
