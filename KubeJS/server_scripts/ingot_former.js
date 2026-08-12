ServerEvents.recipes(event => {
   const removeRecipe = []
    removeRecipe.forEach(removeRecipe =>{
    event.remove({id: removeRecipe})
  })
  const ingotformer = [
    {
      energy_per_tick: 50,
      fluid_inputs: [{
        amount: 144,
        fluid: 'bigreactors:magentite'
      }],
      item_outputs: [{
        item: 'bigreactors:magentite_ingot'
      }],
      process_time: 200
    }]
    ingotformer.forEach(recipe=> {
        event.custom({
            type: 'nuclearcraft:ingot_former',
            energy_per_tick: recipe.energy_per_tick,
            fluid_inputs: recipe.fluid_inputs,
            item_outputs: recipe.item_outputs,
            process_time: recipe.process_time
        })
    })
})