AStages.addRestrictionForDimension("netherlock", "nether", "minecraft:the_nether")
AStages.addRestrictionForRecipe("laputan", "laputan_found", "minecraft:crafting", "cits:laputa_orb")
PlayerEvents.advancement('castle_in_the_sky:conquer_castle', event => {
    AStages.addStageToPlayer('laputan_found', event.player)
})