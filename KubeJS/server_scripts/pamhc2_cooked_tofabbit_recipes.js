// Pam's Food Extended 1.0.0 ships an extra closing brace in these three recipes.
// Preserve the native cooking payload; override only the malformed resources.
ServerEvents.generateData('after_mods', function (event) {
  [
    ['campfire', 'minecraft:campfire_cooking', 600],
    ['forge', 'minecraft:smelting', 200],
    ['smoker', 'minecraft:smoking', 100]
  ].forEach(function (entry) {
    event.json('pamhc2foodextended:recipe/cookedtofabbititem_' + entry[0] + '.json', {
      type: entry[1],
      ingredient: { item: 'pamhc2foodextended:rawtofabbititem' },
      result: { id: 'pamhc2foodextended:cookedtofabbititem' },
      experience: 0.35,
      cookingtime: entry[2]
    });
  });
});
