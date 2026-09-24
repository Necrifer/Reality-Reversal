ServerEvents.recipes(event => {

  const recipe = (id, body) => event.custom(body).id(id);
  const itemInput = id => ({ ingredient: { item: id } });
  const tagInput = id => ({ ingredient: { tag: id } });
  const chemicalTag = (id, amount) => ({ amount: amount, tag: id });
  const gasInput = (id, amount) => ({ amount: amount, gas: id });
  const stack = (item, count) => ({ count: count, item: item });

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
  recipe('spectrum_amethyst_powder', {
    type: 'mekanism:crushing',
    input: itemInput('minecraft:amethyst_block'),
    output: stack('spectrum:amethyst_powder', 1)
  });
  recipe('spectrum_topaz_powder', {
    type: 'mekanism:crushing',
    input: itemInput('spectrum:topaz_block'),
    output: stack('spectrum:topaz_powder', 1)
  });
  recipe('spectrum_citrine_powder', {
    type: 'mekanism:crushing',
    input: itemInput('spectrum:citrine_block'),
    output: stack('spectrum:citrine_powder', 1)
  });
  recipe('spectrum_onyx_powder', {
    type: 'mekanism:crushing',
    input: itemInput('spectrum:onyx_block'),
    output: stack('spectrum:onyx_powder', 1)
  });
  recipe('spectrum_moonstone_powder', {
    type: 'mekanism:crushing',
    input: itemInput('spectrum:moonstone_block'),
    output: stack('spectrum:moonstone_powder', 1)
  });
});
