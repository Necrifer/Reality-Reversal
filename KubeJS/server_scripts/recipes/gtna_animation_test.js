// TEMPORARY: lets the GTNA multiblocks run a recipe so their animation can be tested. Delete this file when done.
// Every machine in gtna_native_multiblocks.json uses the dummy recipe type, so this works on all of them.
// No EUt: these structures have no energy hatch.
ServerEvents.recipes(event => {
  event.recipes.gtceu.dummy('modpack:gtna_animation_test')
    .itemInputs('minecraft:cobblestone')
    .duration(200)
})
