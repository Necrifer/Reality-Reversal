ServerEvents.recipes(event => {
   const reciperemove = []
    removeRecipe.forEach(removeRecipe =>{
    event.remove({id: removeRecipe})
  })
  const ingotformer = [
    {
      energyPerTick = 50,
      fluidInputs = [{
        amount = 144,
        fluid = '#c:magentite'
      }],
      itemOutputs = 'bigreactors:magentite_ingot',
      processTime: 200
    }]
    ingotformer.forEach(recipe=> {
        event.custom({
            type = 'nuclearcraft:ingot_former',
            energyPerTick = recipe.energyPerTick,
            fluidInputs = recipe.fluidInputs,
            itemOutputs = recipe.itemOutputs,
            processTime = recipe.processTime
        })
    })
})