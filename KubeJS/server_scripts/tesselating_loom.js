ServerEvents.recipes(event => {
   const removeRecipe = []
    removeRecipe.forEach(removeRecipe =>{
    event.remove({id: removeRecipe})
  })
  const decayloom = [
    {
    type: 'dimdoors:shapeless_tesselating',
    inputs: ['dimdoors:world_thread', ''],
    result: [{
        count: 1,
        id: 'dimdoors:stable_fabric'
    }]
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