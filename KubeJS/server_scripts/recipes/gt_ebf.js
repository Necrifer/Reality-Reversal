// Native GT recipe resources avoid the incompatible empty-condition fluent constructor.
// Counts, components, chances, circuit and EBF temperature are retained.
ServerEvents.recipes(event =>{
  function itemtag() {event.recipes.gtceu.tag()}
function ebf(circuit,itemin, fluidin, itemout, fluidout, time, eu, temp) {
  const id = 'modpack:gtceu/' + itemout.split(':').pop();
  const recipe = event.recipes.gtceu.electric_blast_furnace(id)
  .circuit(circuit)
  .itemInputs(itemin)
  .inputFluids(fluidin)
  .itemOutputs(itemout)
  .duration(time)
  .EUt(eu)
  .blastFurnaceTemp(temp)
  // Fluids are 'AMOUNTx id' or 'AMOUNTx #tag'; '' means no output fluid.
  if (fluidout) recipe.outputFluids(fluidout)
  return recipe
}
ebf(1,'gtceu:taint_dust', '1200x #c:deuterium', 'gtceu:taint_ingot', '', 200, 480, 2200)
ebf(1, 'gtceu:chaos_infused_dust', '1200x kubejs:molten_chaos', 'gtceu:chaos_infused_ingot', '', 200, 480, 1200)
})
