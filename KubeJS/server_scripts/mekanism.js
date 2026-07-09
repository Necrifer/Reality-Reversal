ServerEvents.recipes(event => {

  const recipe = (id, body) => event.custom(body).id(id);
  const item = id => ({ count: 1, item: id });
  const tag = id => ({ count: 1, tag: id });
  const fluid = (id, amount) => ({ amount: amount, id: id });
  const fluidTag = (id, amount) => ({ amount: amount, tag: id });
  const chemical = (id, amount) => ({ amount: amount, chemical: id });
  const chemicalTag = (id, amount) => ({ amount: amount, tag: id });
  const chemicalOut = (id, amount) => ({ amount: amount, id: id });
  const stack = (id, count) => ({ count: count, id: id });

  event.recipes.mekanism.metallurgic_infusing("mekanism:basic_control_circuit", '#c:ingots/osmium', "mekanism:redstone", false);

  // Mekanism injecting recipes are supported by the installed KubeJS Mekanism schema.
  recipe('kubejs_modified_coal_coke', {
    type: 'mekanism:injecting',
    item_input: tag('c:coal'),
    chemical_input: chemical('mekanism:oxygen', 1),
    output: stack('immersiveengineering:coal_coke', 1),
    per_tick_usage: true
  });
  recipe('kubejs_coke_dust', {
    type: 'mekanism:crushing',
    input: item('immersiveengineering:coal_coke'),
    output: stack('immersiveengineering:dust_coke', 1)
  });
});
// event.recipes.mekanism.metallurgic_infusing(output, inputItem, infusionInput, infusion)
