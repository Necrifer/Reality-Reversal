// Repeating energy-only operation; cleanup uses successful powered ticks.


ServerEvents.recipes(function (event) {
  event.remove({type: 'gtceu:corruption_prototype_recipes'});
  event.recipes.gtceu.corruption_prototype_recipes('modpack:radiation_cleanser/energy_cleanup')
    .duration(2000).EUt(480);
});
