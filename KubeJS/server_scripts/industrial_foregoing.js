ServerEvents.recipes(event => {
  // Dissolution Chamber
  // ItemStack output uses "id"; its fluid input is a SizedFluidIngredient and
  // therefore uses "fluid".
  const removeRecipe = [
    'industrialforegoing:dissolution_chamber/pink_slime_ingot'
  ]
  removeRecipe.forEach(removeRecipe =>{
    event.remove({id: removeRecipe})
  })
  const dischamberRecipes = [
    {
      input: [
        { item: 'ae2:charged_certus_quartz_crystal' }
      ],
      inputFluid: {
        amount: 1000,
        fluid: 'minecraft:water'
      },
      processingTime: 400,
      output: {
        count: 1,
        id: 'ae2:fluix_crystal'
      },
      outputFluid: {
        amount: 1000,
        id: 'kubejs:fluid_charged_fluix'
      },
      recipeId: 'modpack:industrialforegoing_custom_fluix'
    },
    {
      input: [
        { item: 'kubejs:stellarium_ingot'},
        { item: 'industrialforegoing:pink_slime'}, 
        { item: 'twilightforest:wrought_iron_bar'}
      ],
      inputFluid: {
        amount: 1000,
        fluid: 'industrialforegoing:pink_slime'
      },
      processingTime: 200,
      output: {
        count: 8,
        id: 'industrialforegoing:pink_slime_ingot'
      },
      recipeId: 'modpack:industrialforegoing_custom_pink_slime_ingot'
    }    
  ]
  dischamberRecipes.forEach(recipe => {
    event.custom({
      type: 'industrialforegoing:dissolution_chamber',
      input: recipe.input,
      inputFluid: recipe.inputFluid,
      processingTime: recipe.processingTime,
      output: recipe.output,
      outputFluid: recipe.outputFluid
    }).id(recipe.recipeId)
  })
})
