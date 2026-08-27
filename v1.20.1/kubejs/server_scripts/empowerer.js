ServerEvents.recipes(event => {
  const empowerer = [
    {
      id: "imperium_farmland",
      result: "mysticalagriculture:imperium_farmland",
      base: "minecraft:dirt",
      modifiers: [
        "enderio:cloud_seed_bucket",
        "mysticalagriculture:imperium_essence",
        "ae2:fluix_pearl",
        "divinerpg:shadow_bar",
      ],
      energy: 2000,
      // Actually Additions expects a 24-bit RGB integer, not a KubeJS Color object.
      // And things like ^ is what make my work harder.
      color: 0xFF0000,
      time: 200
    },
    {
      id: "nuclearcraft_chassis",
      result: "nuclearcraft:chassis",
      base: "nuclearcraft:plate_basic",
      modifiers: [
        "actuallyadditions:empowered_restonia_crystal",
        "actuallyadditions:empowered_palis_crystal",
        "actuallyadditions:empowered_diamatine_crystal",
        "actuallyadditions:empowered_void_crystal",
      ],
      energy: 2000,
      color: 0xFF0000,
      time: 200
    }];
    empowerer.forEach(recipe => {
        event.custom( {
          type: "actuallyadditions:empowering",
          // This serializer requires vanilla Ingredient/ItemStack JSON objects.
          // Bare item ID strings are valid JavaScript but are rejected by the mod.
          // And yes, this too!
          base: { item: recipe.base },
          modifiers: recipe.modifiers.map(item => ({ item: item })),
          result: { item: recipe.result },
          energy: recipe.energy,
          color: recipe.color,
          time: recipe.time
        }).id(`modpack:actuallyadditions/empowering/${recipe.id}`)
    })
});
