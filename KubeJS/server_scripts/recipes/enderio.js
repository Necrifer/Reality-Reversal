ServerEvents.recipes(event => {
      event.recipes.enderio
        .alloy_smelting(Item.of("8x enderio:end_steel_ingot"), [
            "2x end_stone",
            "5x enderio:dark_steel_ingot",
            "3x mekanism:enriched_refined_obsidian",
        ])
        .energy(10000)
        .experience(3)
      
      event.recipes.enderio
        .alloy_smelting(Item.of("5x woot_revived:stygian_ingot"), [
            "3x woot_revived:copper_shard",
            "8x kubejs:stellarium_ingot",
            "botania:corporea_spark_master",
        ])
        .energy(10000)
        .experience(3)
})
