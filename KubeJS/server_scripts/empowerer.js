ServerEvents.recipes(event => {
    event.recipes.actuallyadditions
        .empowering("mysticalagriculture:imperium_farmland", "minecraft:dirt", [
            "enderio:cloud_seed_bucket",
            "mysticalagriculture:imperium_essence",
            "ae2:fluix_pearl",
            "divinerpg:shadow_bar",
        ])
        .energy(2000)
        .color(Color.RED.argb)
        .time(200)
})