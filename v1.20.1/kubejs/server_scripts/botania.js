ServerEvents.recipes(event => {
    //event.remove({ output: "botania:livingrock" })

    //event.recipes.botania.mana_infusion(output, intput, mana)
   
    //event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond")
    //event.recipes.botania.elven_trade(["minecraft:acacia_boat", "minecraft:acacia_button"], ["minecraft:diamond_block", "minecraft:gold_ingot"])
   
    //event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:acacia_leaves")
    //event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone", 1)

    //event.recipes.botania.brew("kubejs:torrent", ["minecraft:acacia_boat"])

    //event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"])

    //event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000)

    //event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000)

    //event.recipes.botania.orechid("minecraft:acacia_button", "minecraft:acacia_fence", 1)

    //event.recipes.botania.orechid_ignem("minecraft:acacia_leaves", "minecraft:acacia_fence_gate", 1)

    //event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10)
    event.recipes.botania.elven_trade(['extrabotany:nightmare_fuel'], 'extrabotany:spirit_fuel')
    event.recipes.botania.runic_altar("botania:rune_air", ["botania:ender_air_bottle", 'aether:golden_aercloud', 'enderio:cloud_seed_bucket', 'malum:aerial_spirit', 'aether:zanite_gemstone'], 5200)
    event.recipes.botania.runic_altar("botania:rune_earth", ["mysticalagriculture:prosperity_seed_base", 'cyclic:soil', 'primalmagick:essence_shard_earth', 'tconstruct:earth_slime_crystal', 'minecraft:sculk'], 5200)
    // Item.of(..., NBT) alone loses NBT when converted to a recipe ingredient.
    // weakNBT() requires the Blaze model ID, but permits unrelated extra NBT
    // (such as a custom name). It also preserves the Blaze prediction in JEI.
    event.recipes.botania.runic_altar("botania:rune_fire", [Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT(), 'tconstruct:blazewood', 'twilightforest:fiery_block', 'malum:infernal_spirit', 'tconstruct:blazing_blood_bucket'], 5200)
    event.recipes.botania.runic_altar("botania:rune_water", ['minecraft:water_bucket', 'divinerpg:aquatic_ingot', 'minecraft:heart_of_the_sea', 'primalmagick:essence_shard_sea', 'projecte:evertide_amulet'], 5200)
    event.recipes.botania.runic_altar("botania:rune_winter", ['botania:rune_earth', 'botania:rune_water', 'divinerpg:frozen_stone', 'minecraft:blue_ice', Item.of('aether:ice_ring', '{Damage:0}')], 8000)
    // 1.20 Botania recipe order: output, input, mana, optional catalyst.
    // This recipe has no catalyst, so only the first three arguments are used.
    event.recipes.botania.mana_infusion('callfromthedepth_:energypowder', 'minecraft:blaze_powder', 200)
})
