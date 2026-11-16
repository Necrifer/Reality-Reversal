WootStartupEvents.registerFactoryMob("minecraft:ender_dragon", event => {
  // This sets the tier required for the mob
  event.factoryMobPatcher()
    .tier("tier_5")
    .setImportItems("botania:dragonstone")
    
    .patch();
  // 1.21: setItemDrops takes ItemStacks; build them with Item.of (the 1.20 {item, count} form throws in the Factory Heart tick).
  event.registerDropsModifier(properties => {
    let itemDrops = Array.from(properties.getItemDrops());
    itemDrops.push(Item.of("draconicevolution:dragon_heart", 1));
    itemDrops.push(Item.of("mysticalagradditions:dragon_scale", 1));
    itemDrops.push(Item.of("iceandfire:dragonsteel_ice_ingot", 1));
    itemDrops.push(Item.of("iceandfire:dragonsteel_fire_ingot", 1));
    itemDrops.push(Item.of("iceandfire:dragonsteel_lightning_ingot", 1));
    properties.setItemDrops(itemDrops);
  })
// This modifiers the loot table of the mob
// The example below give stone based on Looting level.
//    let looting = properties.getEnchantmentLevel("looting"); // or minecraft:looting
//    let itemDrops = Array.from(properties.getItemDrops());
//    itemDrops.push(Item.of("minecraft:stone", looting));
//    properties.setItemDrops(itemDrops);
});
WootStartupEvents.registerFactoryMob("draconicevolution:draconic_guardian", event => event.blacklistMob());
WootStartupEvents.registerFactoryMob("theoreticalsciences:black_swan", event => event.blacklistMob());
