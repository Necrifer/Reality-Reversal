ServerEvents.recipes(event => {

  function idremoval(removedid){
    return event.remove({id: removedid})
  }
  function alloysmelter(ioutput, iinput, rft, xpamt){
    return event.recipes.enderio.alloy_smelting(ioutput, iinput)
    .energy(rft)
    .experience(xpamt)
  }
  const pinkingot = 'enderio_evolution:crystalline_pink_slime_ingot'
  const crystalingot = 'enderio_evolution:crystalline_alloy_ingot'
  event.remove({id: 'enderio_evolution:alloy_smelter/crystalline_pink_slime_ingot_synthetic'})
  event.remove({id:'enderio_evolution:alloy_smelter/crystalline_pink_slime_ingot'})
  idremoval('enderio:alloy_smelting/end_steel_ingot')
  idremoval('divinerpg:compat/enderio/alloy_smelting/end_steel_from_shadow_alloy_base')
  idremoval('enderio_evolution:alloy_smelter/crystalline_alloy_ingot_from_vibrant')
  alloysmelter('enderio:end_steel_ingot', ['2x end_stone', '3x divinerpg:shadow_bar', '3x mekanism:enriched_refined_obsidian'], 13000, 60)
  alloysmelter(pinkingot, [crystalingot, 'industrialforegoing:pink_slime', 'industrialforegoing:pink_slime_ingot'], 15000, 50)
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
