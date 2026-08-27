// mods.recipestages.Recipes.addShaped(String stage, String recipeName, IItemStack output, IIngredient[][] ingredients, @Optional RecipeFunctionMatrix recipeFunction);

//mods.recipestages.Recipes.addShaped("one", "name_one", <item:minecraft:iron_leggings>,[[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>],[<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>],[<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]]);
mods.recipestages.Recipes.addShaped(
    "Rediscovery", 
    "laputa_orb", 
    <item:castle_in_the_sky:laputa_core_orb>,
    [[<item:minecraft:air>, <item:aether:ambrosium_shard>, <item:minecraft:air>],
    [<item:aether:zanite_gemstone>, <item:castle_in_the_sky:laputa_miniature>, <item:divinerpg:frozen_stone>],
    [<item:minecraft:air>, <item:divinerpg:oxdrite_ingot>, <item:minecraft:air>]]);