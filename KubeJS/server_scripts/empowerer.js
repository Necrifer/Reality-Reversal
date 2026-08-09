ServerEvents.recipes(event => {
    const empowerer = [
        {
          result: "mysticalagriculture:imperium_farmland",
          base: "minecraft:dirt",
          modifiers: [
            "enderio:cloud_seed_bucket",
            "mysticalagriculture:imperium_essence",
            "ae2:fluix_pearl",
            "divinerpg:shadow_bar",
          ],
          energy: 2000,
          color: Color.RED.argb,
          time: 200
        }
    ];
    empowerer.forEach(empowerer =>
        event.recipes.actuallyadditions.empowering(
            empowerer.result, empowerer.base, empowerer.modifiers)
            .energy(empowerer.energy)
            .color(empowerer.color)
            .time(empowerer.time)
        )
})