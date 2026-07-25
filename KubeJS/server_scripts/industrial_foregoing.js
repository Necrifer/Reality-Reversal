ServerEvents.recipes(event => {

  // Dissolution Chamber
  // ItemStack output uses "id"; its fluid input is a SizedFluidIngredient and
  // therefore uses "fluid".
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
