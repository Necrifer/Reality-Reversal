ServerEvents.recipes(event => {
  // Adds Netherite Scrap to the Overworld mining pool
  //
  // Arguments:
  // 1. Output item
  // 2. Dimension
  // 3. Minimum miner tier
  // 4. Selection weight
  // 5. Output per cycle
  // 6. Allow higher-tier miners
  // id is the recipeID, can be used by other KubeJS scripts

  event.recipes.voidminers.miner(
    'minecraft:netherite_scrap',
    'javd:void',
    1,
    0.25,
    2,
    true
  ).id('modpack:voidminers/netherite_scrap')
  // Take note that the weight here does not mean %chance, but relative % compared to others.

  // Remove the built-in T1 Overworld Diamond Ore entry.
  event.remove({
    id: 'voidminers:overworld/tier1_miner/diamond_ore'
  })
  // Re-add it at a lower weight and with two ore per operation.
  const ores = [
    {
      item: 'minecraft:diamond_ore',
      weight: 2.0,
      id: 'modpack:voidminers/diamond_ore'
    },
    {
      item: 'minecraft:coal_ore',
      weight: 15.0,
      id: 'modpack:voidminers/coal_ore'
    },
    {
      item: 'minecraft:iron_ore',
      weight: 13.0,
      id: 'modpack:voidminers/iron_ore'
    },
    {
      item: 'minecraft:copper_ore',
      weight: 13.0,
      id: 'modpack:voidminers/copper_ore'
    },
    {
      item: 'minecraft:redstone_ore',
      weight: 11.5,
      id: 'modpack:voidminers/redstone_ore'
    },
    {
      item: 'minecraft:lapis_ore',
      weight: 10.0,
      id: 'modpack:voidminers/lapis_ore'
    },
    {
      item: 'minecraft:gold_ore',
      weight: 12.6,
      id: 'modpack:voidminers/gold_ore'
    },
    {
      item: 'minecraft:iron_ore',
      weight: 13.0,
      id: 'modpack:voidminers/iron_ore'
    },
    {
      item: 'minecraft:emerald_ore',
      weight: 9.0,
      id: 'modpack:voidminers/emerald_ore'
    },
    {
      item: 'minecraft:nether_quartz_ore',
      weight: 15.0,
      id: 'modpack:voidminers/nether_quartz_ore'
    },
    {
      item: 'minecraft:ancient_debris',
      weight: 1.0,
      id: 'modpack:voidminers/ancient_debris'
    },
    {
      item: 'divinerpg:realmite_ore',
      weight: 9.0,
      id: 'modpack:voidminers/realmite_ore'
    },
    {
      item: 'divinerpg:arlemite_ore',
      weight: 11.0,
      id: 'modpack:voidminers/arlemite_ore'
    },
    {
      item: 'divinerpg:rupee_ore',
      weight: 11.5,
      id: 'modpack:voidminers/rupee_ore'
    },
    {
      item: 'draconicevolution:overworld_draconium_ore',
      weight: 13.0,
      id: 'modpack:voidminers/draconium_ore'
    },
    {
      item: 'minecraft:iron_ore',
      weight: 13.0,
      id: 'modpack:voidminers/iron_ore'
    },
    {
      item: 'bigreactors:anglesite_ore',
      weight: 8.0,
      id: 'modpack:voidminers/anglesite_ore'
    },   
    {
      item: 'bigreactors:benitoite_ore',
      weight: 8.0,
      id: 'modpack:voidminers/benitoite_ore'
    },
    {
      item: 'mekanism:tin_ore',
      weight: 13.0,
      id: 'modpack:voidminers/tin_ore'
    },
    {
      item: 'mekanism:osmium_ore',
      weight: 11.0,
      id: 'modpack:voidminers/osmium_ore'
    },
    {
      item: 'mekanism:uranium_ore',
      weight: 3.0,
      id: 'modpack:voidminers/uranium_ore'
    },
    {
      item: 'mekanism:fluorite_ore',
      weight: 6.0,
      id: 'modpack:voidminers/fluorite_ore'
    },
    {
      item: 'mekanism:lead_ore',
      weight: 11.0,
      id: 'modpack:voidminers/lead_ore'
    },
    {
      item: 'mysticalagriculture:prosperity_ore',
      weight: 13.0,
      id: 'modpack:voidminers/prosperity_ore'
    },
    {
      item: 'mysticalagriculture:inferium_ore',
      weight: 13.0,
      id: 'modpack:voidminers/inferium_ore'
    },
    {
      item: 'mysticalagriculture:soulium_ore',
      weight: 13.0,
      id: 'modpack:voidminers/soulium_ore'
    },
    {
      item: 'oritech:nickel_ore',
      weight: 13.0,
      id: 'modpack:voidminers/nickel_ore'
    },
    {
      item: 'oritech:deepslate_platinum_ore',
      weight: 5.0,
      id: 'modpack:voidminers/platinum_ore'
    },
    {
      item: 'stellaris:steel_ore',
      weight: 7.0,
      id: 'modpack:voidminers/steel_ore'
    },
    {
      item: 'immersiveengineering:ore_aluminum',
      weight: 13.0,
      id: 'modpack:voidminers/aluminium_ore'
    },
    {
      item: 'alltheores:silver_ore',
      weight: 12.2,
      id: 'modpack:voidminers/silver_ore'
    },
    {
      item: 'alltheores:zinc_ore',
      weight: 6.0,
      id: 'modpack:voidminers/zinc_ore'
    },
    {
      item: 'rftoolsbase:dimensionalshard_overworld',
      weight: 0.1,
      id: 'modpack:voidminers/dimensionalshard_ore'
    },
    {
      item: 'alltheores:iridium_ore',
      weight: 3.3,
      id: 'modpack:voidminers/iridium_ore'
    },
    {
      item: 'alltheores:sapphire_ore',
      weight: 8.0,
      id: 'modpack:voidminers/sapphire_ore'
    },
    {
      item: 'nuclearcraftneohaul:boron_ore',
      weight: 11.0,
      id: 'modpack:voidminers/boron_ore'
    },
    {
      item: 'nuclearcraftneohaul:lithium_ore',
      weight: 11.0,
      id: 'modpack:voidminers/lithium_ore'
    },
    {
      item: 'nuclearcraftneohaul:magnesium_ore',
      weight: 11.0,
      id: 'modpack:voidminers/magnesium_ore'
    },
    {
      item: 'nuclearcraftneohaul:thorium_ore',
      weight: 10.0,
      id: 'modpack:voidminers/thorium_ore'
    }
  ]

  ores.forEach(recipe => {
    event.recipes.voidminers.miner(
      recipe.item,
      'javd:void',
      1,
      recipe.weight,
      1,
      true
    ).id(recipe.id)
  })
})
