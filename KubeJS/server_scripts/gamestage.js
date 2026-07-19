AStages.addRestrictionForDimension("netherlock", "nether", "minecraft:the_nether")
AStages.addRestrictionForRecipe("laputan", "laputan_found", "minecraft:crafting", "cits:laputa_orb")
AStages.addRestrictionForRecipe("void_miner_obtained", "void_miner", "minecraft:crafting", "kubejs:easy_rubetine")
PlayerEvents.advancement('modpack:void_miner', event => {
    AStages.addStageToPlayer('void_miner', event.player)
})
PlayerEvents.advancement('castle_in_the_sky:conquer_castle', event => {
    AStages.addStageToPlayer('laputan_found', event.player)
})