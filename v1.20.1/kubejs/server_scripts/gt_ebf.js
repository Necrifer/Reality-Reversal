ServerEvents.recipes(function(event) {
//  event.remove({
//    type: 'gtceu:electric_blast_furnace',
//    output: 'gtceu:taint_ingot'
//  });
// event.remove({ id: 'namespace:exact_recipe_id' });

// GT energy systems requires 4x more V than last tier to work!
// modpack starts off at HV: 512 EU/t
// Overclock is present in the mod! Recipes requires <128 RF/t gets a 2x speed increase!

  event.recipes.gtceu.electric_blast_furnace('modpack:taint_ingot')
    .itemInputs('gtceu:taint_dust')
    .itemOutputs('gtceu:taint_ingot')
    .duration(200)           // 200 ticks = 10 seconds before modifiers
    .EUt(480)               // Base energy consumption per tick
    .blastFurnaceTemp(2200) // Required temperature in kelvin
    .inputFluids('#forge:deuterium 1200')
  //  .inputFluids(Fluid.of('kubejs:fluid_charged_fluix', 1200)) // Example fluid input, in mB
    .circuit(1);  // Require programmed circuit setting 1
});