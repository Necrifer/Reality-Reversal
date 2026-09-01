ServerEvents.recipes(event => {
    event.remove({ id: "enderio:alloy_smelting/end_steel_ingot" });

    event.recipes.enderio
        .alloy_smelting(Item.of("enderio:end_steel_ingot", 8), [
            // CountedIngredient is the input type expected by this Ender IO
            // integration. Multiplying an item ID string by 2 yields NaN in
            // JavaScript, so apply the count to the Ingredient instead.

            // Basically more of why make work easier for others?
            Ingredient.of("minecraft:end_stone").withCount(2),
            Ingredient.of("enderio:dark_steel_ingot").withCount(5),
            Ingredient.of("mekanism:enriched_refined_obsidian").withCount(3),
        ])
        .energy(10000)
        .experience(3)
        .id("kubejs:enderio/alloy_smelting/end_steel_ingot")

    event.recipes.enderio
        .alloy_smelting(Item.of("woot_revived:stygian_ingot", 5), [
            // These must be exact registered item IDs. Unknown IDs become
            // empty ingredients without necessarily rejecting the recipe.
            Ingredient.of("woot_revived:diamond_shard").withCount(3),
            Ingredient.of("kubejs:stellarium_ingot").withCount(8),
            Ingredient.of("botania:corporea_spark_master"),
        ])
        .energy(50000)
        .experience(1)
        .id("kubejs:enderio/alloy_smelting/stygian_ingot")
    // removes all slicing recipes
    // event.remove({ type: "enderio:slicing" })

    // adds a recipe that slices 2 apples, a bone, 2 rotten flesh, and an egg into a stick
    // uses the default value for energy
    //event.recipes.enderio.slicing("stick", [
    //    "apple",
    //    "bone",
    //    "apple",
    //    "rotten_flesh",
    //    "egg",
    //    "rotten_flesh",
    //])

    // adds a recipe that slices any 3 glass, a stick, any ingot, 15 granite, any 3 iron ingots, and
    //  an apple into 15 stone
    // energy usage of 5000
    // uses the chaining function for energy
//    event.recipes.enderio
//        .slicing(Item.of("stone", 15), [
//            "#c:glass_blocks",
//            "stick",
 //           Ingredient.of("#c:ingots"),
//            Item.of("granite"),
//            "#c:ingots/iron",
//            "apple",
//        ])
//        .energy(5000)
    event.recipes.enderio
        .slicing("minecraft:ender_eye", [
            "minecraft:blaze_powder",
            "minecraft:ender_pearl",
            "aoa3:ghastly_ingot",
            "projecte:dark_matter",
            "minecraft:blaze_powder",
            "#forge:ingots/dark_steel",
        ])
        .energy(50000)
        .id("kubejs:enderio/slicing/ender_eye")
})
