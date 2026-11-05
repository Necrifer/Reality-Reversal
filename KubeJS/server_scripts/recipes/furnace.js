ServerEvents.recipes(event => {

const furnaceLike = [
    {
      type: 'minecraft:smelting',
      id: 'kubejs:fiery_blood_smelting',
      input: 'twilightforest:fiery_tears',
      output: 'twilightforest:fiery_blood',
      experience: 0.7,
      cookingtime: 100
    },
    {
      type: 'minecraft:smelting',
      id: 'kubejs:hop_ingot',
      input: 'immersiveengineering:dust_hop_graphite',
      output: 'immersiveengineering:ingot_hop_graphite',
      experience: 0.7,
      cookingtime: 50
    },
    {
      type: 'minecraft:smelting',
      id: 'kubejs:pure_azurite',
      input: 'spectrum:raw_azurite',
      output: 'spectrum:pure_azurite',
      experience: 0.7,
      cookingtime: 50
    }
    ]
  furnaceLike.forEach(recipe => {
    event.custom({
      type: recipe.type,
      ingredient: Ingredient.of(recipe.input).toJson(),
      result: { id: recipe.output },
      experience: recipe.experience,
      cookingtime: recipe.cookingtime
    }).id(recipe.id);
  });
});