
ServerEvents.recipes(event => {
function Lchemreactor (itemin, fluidin, itemout, fluidout, time, eu) {
  // itemout can be a string or a list; the recipe ID comes from the first output.
  const recipeId = 'modpack:gtceu/' + [].concat(itemout)[0].split(':').pop();
  event.recipes.gtceu.large_chemical_reactor(recipeId)
  .circuit(1)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .outputFluids(fluidout)
  .duration(time)
  .EUt(eu)
}
function implodecompressor (itemin, itemout, time, eu) {
  const recipeId = 'modpack:gtceu/' + itemout.split(':').pop();
  event.recipes.gtceu.implosion_compressor(recipeId)
  .itemInputs(itemin)
  .itemOutputs(itemout)
  .duration(time)
  .EUt(eu)
}
function distiltower(time, fluidin, fluidout, eu){
  const recipeId = 'modpack:gtceu/' + fluidin.split(':').pop();
  return event.recipes.gtceu.distillation_tower(recipeId)
  .duration(time)
  // .inputs()/.outputs() are GT's raw capability maps; fluids use inputFluids/outputFluids.
  .inputFluids(fluidin)
  .outputFluids(fluidout)
  .EUt(eu)
}
distiltower(2000, '5000x kubejs:instability', ['200x immersiveengineering:redstone_acid', '500x jaopca:molten.cloggrum', '1000x gtceu:charcoal_byproducts', '300x jaopca:molten.emberstone', '1500x gtceu:chloroform'], 2048)
  .chancedOutput('5x excessive_utilities:unstable_ingot', 8000,0)
  .chancedFluidOutput('30000x kubejs:faint_arcane', 3000, 0)
Lchemreactor(['gtceu:chaos_infused_dust', 'kubejs:eyes3'], '2000x dimdoors:leak', ['excessive_utilities:semi_unstable_nugget', '5x spectrum:downstone_fragments'], '2880x gtceu:chaos_infused', 200, 512)
Lchemreactor(['cataclysm:witherite_ingot', '3x excessive_utilities:moon_stone'], '2000x gaiadimension:mineral_water_still', ['kubejs:eyes1', 'gtceu:gtna_chronomatic_glass_ingot'], '500x gtceu:distilled_water', 2000, 512)
implodecompressor(['5x tnt', '8x enderio:end_steel_ingot', '2x mysticalagradditions:nether_star_crux'],'92x kubejs:stellarium_ingot', 200, 512)
implodecompressor(['gtceu:industrial_tnt', '6x gtceu:pyrite_dust', '2x gaiadimension:sweet_muckball'],'6x gaiadimension:pyrite', 200, 512)
});
