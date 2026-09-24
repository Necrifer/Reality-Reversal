WootStartupEvents.registerFactoryMob("minecraft:ender_dragon", event => {
  // This sets the tier required for the mob
  event.factoryMobPatcher()
    .tier("tier_5")
    .setImportItems("botania:dragonstone")
    
    .patch();
  event.registerDropsModifier(properties => {
    let itemDrops = Array.from(properties.getItemDrops());
    itemDrops.push({ item: "draconicevolution:dragon_heart", count: 1 });
    itemDrops.push({ item: "mysticalagradditions:dragon_scale", count: 1 });
    itemDrops.push({ item: "iceandfire:dragonsteel_ice_ingot", count: 1 });
    itemDrops.push({ item: "iceandfire:dragonsteel_fire_ingot", count: 1 });
    itemDrops.push({ item: "iceandfire:dragonsteel_lightning_ingot", count: 1 });
  })
// This modifiers the loot table of the mob
// The example below give stone based on Looting level.
//    let looting = properties.getEnchantmentLevel("looting"); // or minecraft:looting
//    let itemDrops = Array.from(properties.getItemDrops());
//    itemDrops.push({ item: "minecraft:stone", count: looting });
//    properties.setItemDrops(itemDrops);
});
WootStartupEvents.registerFactoryMob("draconicevolution:draconic_guardian", event => event.blacklistMob());