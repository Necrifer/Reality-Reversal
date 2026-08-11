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
    },
    {
      result: "nuclearcraft:chassis",
      base: "nuclearcraft:plate_basic",
      modifiers: [
        "actuallyadditions:empowered_restonia_crystal",
        "actuallyadditions:empowered_palis_crystal",
        "actuallyadditions:empowered_diamatine_crystal",
        "actuallyadditions:empowered_void_crystal",
      ],
      energy: 2000,
      color: Color.RED.argb,
      time: 200
    }];
    empowerer.forEach(empowerer =>
        event.recipes.actuallyadditions.empowering(
            empowerer.result, empowerer.base, empowerer.modifiers)
            .energy(empowerer.energy)
            .color(empowerer.color)
            .time(empowerer.time)
        )
})