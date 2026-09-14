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
    type: 'nuclearcraft:extractor',
    input: [
      {item: 'ad_astra:moon_stone'}
    ],
    output: [{fluid: 'nuclearcraft:deuterium'}],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0    
  }).id('modpack:nuclearcraft/extractor/deuterium')
  // NuclearCraft raw JSON uses tag keys without '#', and separate fluid arrays.
  // Item + fluid -> item is Fluid Infuser; Fluid Enricher produces a fluid.
  event.custom({
    type: 'nuclearcraft:fluid_infuser',
    input: [{ tag: 'forge:ingots/copper', count: 1 }],
    inputFluids: [{ tag: 'c:oxygen', amount: 1200 }],
    output: [{ item: 'gtceu:annealed_copper_ingot', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('modpack:nuclearcraft/fluid_infused/annealed_copper_ingot')

const assembler = [
    {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'industrialforegoing:common_black_hole_tank', count: 1}
    ],
    output: [{ item: 'gtceu:hv_input_hatch', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_input_hatch'
  },
  {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'enderio:fluid_tank', count: 1}
    ],
    output: [{ item: 'gtceu:hv_output_hatch', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_output_hatch'
  },
  {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'industrialforegoing:common_black_hole_unit', count: 1}
    ],
    output: [{ item: 'gtceu:hv_input_bus', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_input_bus'
  },
  {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'mekanism:ultimate_universal_cable', count: 5},
      {item: 'kubejs:stellarium_ingot', count: 3}
    ],
    output: [{ item: 'gtceu:hv_energy_input_hatch', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_energy_input_hatch'
  },
  {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'nuclearcraft:pipe', count: 5},
      {item: 'kubejs:stellarium_ingot', count: 3}
    ],
    output: [{ item: 'gtceu:hv_energy_output_hatch', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_energy_output_hatch'
  },
  {
    input: [
      {item: 'gtceu:hv_machine_hull', count: 1},
      {item: 'ae2:chest', count: 1}
    ],
    output: [{ item: 'gtceu:hv_output_bus', count: 1 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'hv_output_bus'
  }
]
assembler.forEach(recipe=> {
  event.custom({
    type: 'nuclearcraft:assembler',
    input: recipe.input,
    output: recipe.output,
    powerModifier: recipe.powerModifier,
    radiation: recipe.radiation,
    timeModifier: recipe.timeModifier
  }).id('modpack:nuclearcraft/assembler/' + recipe.outputID)
})
const manufactor = [
  {
    input: [
      { item: 'kubejs:eyes2', count: 1 },
    ],
    output: [{ item: 'kubejs:seeneyes2', count: 4 }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0,
    outputID: 'seeneyes2'
}
]

manufactor.forEach(recipe=> {
  event.custom({
    type: 'nuclearcraft:manufactory',
    input: recipe.input,
    output: recipe.output,
    powerModifier: recipe.powerModifier,
    radiation: recipe.radiation,
    timeModifier: recipe.timeModifier
  }).id('modpack:nuclearcraft/manufactory/' + recipe.outputID)
})

})
