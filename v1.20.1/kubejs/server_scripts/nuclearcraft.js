ServerEvents.recipes(event => {

  // The Glowing Mushroom belongs to the Fluid Enricher recipe that produces
  // RadAway fluid. Filtering by the RadAway item targets the later Fluid
  // Infuser recipe instead, whose item input is Bioplastic, so nothing matches.
  event.replaceInput(
    { id: 'nuclearcraft:fluid_enricher/glowing_mushroom-ethanol' },
    'nuclearcraft:glowing_mushroom',
    '#forge:mushrooms'
  )
  event.replaceInput(
    { id: 'nuclearcraft:fluid_enricher/glowing_mushroom-redstone_ethanol' },
    'nuclearcraft:glowing_mushroom',
    '#forge:mushrooms'
  )
  event.custom({
    type: 'nuclearcraft:alloy_smelter',
    input: [
      { item: 'ae2:charged_certus_quartz_crystal', count: 4 },
      { item: 'botania:terrasteel_ingot', count: 2 }
    ],
    output: [{ item: 'extendedcrafting:crystaltine_ingot', count: 4 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('modpack:nuclearcraft/alloy_smelter/crystaltine')

  event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      { item: 'kubejs:eyes2', count: 1 },
    ],
    output: [{ item: 'kubejs:seeneyes2', count: 4 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('modpack:nuclearcraft/manufactory/eyes2_dust')
})
