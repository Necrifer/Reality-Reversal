ServerEvents.recipes(event => {

  const recipe = (id, body) => event.custom(body).id(id);
  const itemInput = id => ({ ingredient: { item: id } });
  const tagInput = id => ({ ingredient: { tag: id } });
  const chemicalTag = (id, amount) => ({ amount: amount, tag: id });
  const gasInput = (id, amount) => ({ amount: amount, gas: id });
  const stack = (item, count) => ({ count: count, item: item });

  // KubeJS Mekanism has no Forge 1.20.1 build, so these use Mekanism's native
  // 10.4 datapack schema rather than addon-provided recipe builders.
  recipe('kubejs:mekanism/basic_control_circuit', {
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: chemicalTag('mekanism:redstone', 10),
    itemInput: tagInput('forge:ingots/osmium'),
    output: stack('mekanism:basic_control_circuit', 1)
  });

  recipe('kubejs_modified_coal_coke', {
    type: 'mekanism:injecting',
    itemInput: itemInput('minecraft:coal'),
    chemicalInput: gasInput('mekanism:oxygen', 1),
    output: stack('immersiveengineering:coal_coke', 1),
  });
  recipe('kubejs_coke_dust', {
    type: 'mekanism:crushing',
    input: itemInput('immersiveengineering:coal_coke'),
    output: stack('immersiveengineering:dust_coke', 1)
  });
});
