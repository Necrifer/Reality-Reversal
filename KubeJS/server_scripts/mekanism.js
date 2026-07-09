ServerEvents.recipes(event =>{

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

    //recipe code below is bugged! will fix later!
    recipe('kubejs_modified_coal_coke', {
    type: 'mekanism:injecting',
    item_input: tag('c:coal'),
    chemical_input: chemicalTag('mekanism:oxygen', 1),
    output: stack('c:coal_coke', 1),
    per_tick_usage: true
  });
})
// event.recipes.mekanism.metallurgic_infusing(output, inputItem, infusionInput, infusion)