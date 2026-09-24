// These boss rewards are created by Java event/AI code instead of ordinary Minecraft entity loot tables. 
// JEI/JER therefore cannot discover their source automatically. 
// This script adds informational JEI pages only.

JEIEvents.information(event => {
  // Draconic Evolution listens for the Ender Dragon's death and spawns one
  // Dragon Heart above the End exit portal. Because that happens through a
  // LivingDropsEvent handler, it is absent from the dragon's vanilla loot table.
  event.addItem('draconicevolution:dragon_heart', [
    Text.gold('Boss Drop: Ender Dragon'),
    Text.gray('One Dragon Heart hovers at End exit portal after the dragon dies.')
  ])

  // The Wither Storm spawns this item directly from its completed death
  // sequence rather than returning it from an entity loot table.
  event.addItem('witherstormmod:withered_nether_star', [
    Text.darkPurple('Boss Drop: Wither Storm'),
    Text.gray('Fully defeat the Wither Storm. One Withered Nether Star is spawned at the fight\'s final drop location when its death sequence completes.')
  ])
})
