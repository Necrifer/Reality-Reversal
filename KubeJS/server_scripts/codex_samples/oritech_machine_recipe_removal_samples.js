// Codex sample: remove Oritech 1.2.9 machine recipes with KubeJS 7.2.
//
// The recipe types and example IDs below were read from:
//   oritech-neoforge-1.21.1-1.2.9.jar
//
// Keep this false until the example IDs have been replaced with the recipes
// that the pack should actually remove.
const CODEX_ENABLE_ORITECH_MACHINE_RECIPE_REMOVAL_SAMPLES = false

// false: remove only the IDs listed in each `ids` array.
// true:  remove every recipe belonging to every machine type below.
// WARNING: enabling both switches with this set to true disables all listed
// Oritech machine and generator recipes.
const CODEX_ORITECH_REMOVE_ALL_RECIPES_BY_MACHINE_TYPE = false

// `oritech:augment_data` is intentionally absent. It stores augment metadata
// and is not a processing-machine recipe type.
const CODEX_ORITECH_MACHINE_RECIPE_REMOVALS = [
  {
    machine: 'Assembler',
    type: 'oritech:assembler',
    ids: ['oritech:assembler/amethystbud']
  },
  {
    machine: 'Atomic Forge',
    type: 'oritech:atomic_forge',
    ids: ['oritech:atomicforge/advcomputer']
  },
  {
    machine: 'Bio Generator',
    type: 'oritech:bio_generator',
    ids: ['oritech:biogen/biomass']
  },
  {
    machine: 'Centrifuge (item recipe)',
    type: 'oritech:centrifuge',
    ids: ['oritech:centrifuge/carbon']
  },
  {
    machine: 'Centrifuge (fluid recipe)',
    type: 'oritech:centrifuge_fluid',
    ids: ['oritech:centrifuge/fluid/batteryacid']
  },
  {
    machine: 'Cooler',
    type: 'oritech:cooler',
    ids: ['oritech:cooler/ice']
  },
  {
    machine: 'Deep Drill',
    type: 'oritech:deep_drill',
    ids: ['oritech:deepdrill/coal']
  },
  {
    machine: 'Foundry',
    type: 'oritech:foundry',
    ids: ['oritech:foundry/alloy/adamant']
  },
  {
    machine: 'Fuel Generator',
    type: 'oritech:fuel_generator',
    ids: ['oritech:fuelgen/crude']
  },
  {
    machine: 'Grinder',
    type: 'oritech:grinder',
    ids: ['oritech:grinder/blaze']
  },
  {
    machine: 'Laser',
    type: 'oritech:laser',
    ids: ['oritech:laser/fluxite']
  },
  {
    machine: 'Lava Generator',
    type: 'oritech:lava_generator',
    ids: ['oritech:lavagen/lava']
  },
  {
    machine: 'Particle Accelerator',
    type: 'oritech:particle_collision',
    ids: ['oritech:particle/diamond']
  },
  {
    machine: 'Pulverizer',
    type: 'oritech:pulverizer',
    ids: ['oritech:pulverizer/bone']
  },
  {
    machine: 'Reactor',
    type: 'oritech:reactor',
    ids: ['oritech:reactorgen/pellet']
  },
  {
    machine: 'Refinery',
    type: 'oritech:refinery',
    ids: ['oritech:refinery/biodiesel']
  },
  {
    machine: 'Steam Engine',
    type: 'oritech:steam_engine',
    ids: ['oritech:steamgen/steameng']
  }
]

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_ORITECH_MACHINE_RECIPE_REMOVAL_SAMPLES) return

  CODEX_ORITECH_MACHINE_RECIPE_REMOVALS.forEach(group => {
    if (CODEX_ORITECH_REMOVE_ALL_RECIPES_BY_MACHINE_TYPE) {
      // Type filters are useful when the entire machine recipe category should
      // be disabled, including recipes added by other data packs or scripts.
      event.remove({ type: group.type })
      console.info(
        `[Oritech Recipe Removal] Removed all ${group.machine} recipes ` +
        `of type ${group.type}.`
      )
      return
    }

    // ID filters are preferred for targeted balancing changes because they do
    // not affect unrelated recipes handled by the same machine.
    group.ids.forEach(recipeId => {
      event.remove({ id: recipeId })
      console.info(
        `[Oritech Recipe Removal] Removed ${recipeId} from ${group.machine}.`
      )
    })
  })
})
