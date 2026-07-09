ServerEvents.recipes(event => {

  const item = id => Ingredient.of(id).toJson();
  const stack = (id, count) => ({ id: id, count: count });
  const recipe = (id, body) => event.custom(body).id(id);

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
});
