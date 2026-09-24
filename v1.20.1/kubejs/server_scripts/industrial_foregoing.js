ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:dissolution_chamber/pink_slime_ingot' })
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ item: 'ae2:charged_certus_quartz_crystal' }],
    inputFluid: '{Amount:1000,FluidName:"minecraft:water"}',
    output: { count: 1, item: 'ae2:fluix_crystal' },
    outputFluid: '{Amount:1000,FluidName:"kubejs:fluid_charged_fluix"}',
    processingTime: 400
  }).id('modpack:industrialforegoing/custom_fluix')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'kubejs:stellarium_ingot' },
      { item: 'industrialforegoing:pink_slime' },
      { item: 'aoa3:ghastly_ingot' }
    ], 
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
    output: { count: 8, item: 'industrialforegoing:pink_slime_ingot' },
    processingTime: 200
  }).id('modpack:industrialforegoing/custom_pink_slime_ingot')
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'mysticalagriculture:inferium_essence' },
      { item: 'minecraft:dirt' },
      { item: 'aoa3:ghastly_ingot' },
      { item: 'botania:manasteel_ingot'}
    ], 
    inputFluid: '{Amount:1000,FluidName:"kubejs:fluid_charged_fluix"}',
    output: { count: 1, item: 'mysticalagriculture:inferium_farmland' },
    processingTime: 200
  }).id('modpack:industrialforegoing/inferium_farmland')
// An attempt was made earlier to use EnderIO Soul Vials.
// Industrial Foregoing does not accept NBT tagged items. 
// Use Gregtech for anything NBT related from now on.
})
