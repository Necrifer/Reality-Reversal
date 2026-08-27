// Server Script Folder -> file.js (arbitrary file name).
//AStages.addRestrictionForItem("astages/item1", "stage_item", Items.OAK_LOG, "chest")
//AStages.addRestrictionForTag("astages/item2", "stage_item", "forge:ingots/iron")
//AStages.addRestrictionForMod("astages/item3", "stage_item", "minecraft")
//AStages.addRestrictionForArmor("astages/item4", "stage_item", "diamond_helmet", "diamond_chestplate")

//AModels.createPredicateModel("astages:rarity", stack => stack.rarity == $Rarity.EPIC) // ONLY this line MUST be copied in a client script file!
//AStages.addRestrictionForPredicate("astages/item5", "stage_item", "astages:rarity")

//These are used for tooltips for everywhere
//  .globalHiddenMessage(stack =>
//    Component.literal('Unknown Matter').withStyle('dark_purple')
//  )
//While to show names for everywhere
//  .globalShowName(stack =>
//    Component.literal('Unidentification').withStyle('bold')  
//  )
//These below are for custom message in different cases
//  .tooltipMessage(stack => Component.literal('Unknown Matter'))
//  .actionBarMessage(stack => Component.literal('An unfamiliar object'))
//  .recipeViewerMessage(stack => Component.literal('Undiscovered Material'))
//  .jadeItemMessage(stack => Component.literal('Unknown Matter'))
//  .jadeBlockMessage(stack => Component.literal('Unknown Block'))

// Gates all items from Wither Storm mod, planned for lategame implmentation.
AStages.addRestrictionForMod("witherstormmod_gate", "witherStorm", "witherstormmod")

//For Dimensional Doors stuff
AStages.addRestrictionForItem("dimdoors_clod", "Limbo", "dimdoors:clod")
  .globalHiddenMessage(stack =>
    Component.literal('Unknown Matter').withStyle('dark_purple')
  )
AStages.addRestrictionForItem("dimdoors_amalgam", "Limbo", "dimdoors:amalgam_lump")
  .globalHiddenMessage(stack =>
    Component.literal('Unknown Matter').withStyle('obfuscated')
  )
//Draconic, locked behind Philosopher's Stone
AStages.addRestrictionForItem("draconium_gate", "FlawedStone", "draconicevolution:draconium_ingot")
  .globalHiddenMessage(stack =>
    Component.literal('Where do I get these?').withStyle('red')
  )
AStages.addRestrictionForItem("draconiumpowder_gate", "FlawedStone", "draconicevolution:draconium_dust")
  .globalHiddenMessage(stack =>
    Component.literal('Dust?').withStyle('red')
  )
AStages.addRestrictionForItem("forbidden_seeds", "blacklist", "mysticalagriculture:soulium_seed_base")
  .globalHiddenMessage(stack =>
    Component.literal('This does not exist.').withStyle('dark_red')
  )