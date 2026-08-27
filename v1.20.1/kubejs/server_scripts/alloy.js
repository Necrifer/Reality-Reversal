ServerEvents.recipes(event => {
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
})
