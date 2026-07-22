// NuclearCraft: Neoteric 1.21.1-1.3.0-alpha2
// Multiblock recipe samples recovered from the mod's bundled serializers/JSON.
//
// NuclearCraft does not register its special multiblock recipe types with its
// universal KubeJS recipe schema. KubeJS can still add them safely by emitting
// their native datapack JSON through event.custom(...).

ServerEvents.recipes(event => {
  // Fission Reactor fuel recipe
  // power: FE/t produced, heat: heat/t produced, process_time: ticks per item.
  event.custom({
    type: 'nuclearcraft:fission_reactor',
    input: {
      item: 'minecraft:coal'
    },
    output: {
      item: 'minecraft:charcoal'
    },
    power: 80,
    heat: 40,
    process_time: 200
  }).id('modpack:nuclearcraft_samples/fission_reactor_coal')

  // Fission Reactor boiling conversion
  // heat_required is the heat consumed for the stated fluid conversion.
  event.custom({
    type: 'nuclearcraft:fission_boiling',
    input_fluid: {
      fluid: 'minecraft:lava',
      amount: 100
    },
    output_fluid: {
      fluid: 'nuclearcraft:high_pressure_steam',
      amount: 100
    },
    heat_required: 100
  }).id('modpack:nuclearcraft_samples/fission_boiling_lava')

  // Fusion Reactor reaction
  // energy is the recipe's energy value and optimal_temperature is measured K.
  event.custom({
    type: 'nuclearcraft:fusion_reactor',
    input_a: {
      fluid: 'minecraft:water',
      amount: 1000
    },
    input_b: {
      fluid: 'minecraft:lava',
      amount: 1000
    },
    outputs: [
      {
        fluid: 'nuclearcraft:steam',
        amount: 500
      },
      {
        fluid: 'nuclearcraft:steam',
        amount: 500
      }
    ],
    energy: 100000,
    optimal_temperature: 100000000,
    process_time: 200
  }).id('modpack:nuclearcraft_samples/fusion_water_lava')

  // Fusion Reactor coolant conversion
  event.custom({
    type: 'nuclearcraft:fusion_coolant',
    input_fluid: {
      fluid: 'minecraft:water',
      amount: 100
    },
    output_fluid: {
      fluid: 'nuclearcraft:steam',
      amount: 100
    },
    cooling_rate: 500
  }).id('modpack:nuclearcraft_samples/fusion_coolant_water')

  // Turbine conversion
  // power_modifier scales the turbine's generated power for this fluid.
  event.custom({
    type: 'nuclearcraft:turbine',
    input_fluid: {
      fluid: 'nuclearcraft:exhaust_steam',
      amount: 10
    },
    output_fluid: {
      fluid: 'minecraft:water',
      amount: 10
    },
    power_modifier: 0.25
  }).id('modpack:nuclearcraft_samples/turbine_exhaust_steam')

  // Kugelblitz Chamber item conversion
  event.custom({
    type: 'nuclearcraft:kugelblitz_chamber',
    input: {
      item: 'minecraft:cobblestone',
      count: 1
    },
    output: {
      item: 'minecraft:obsidian',
      count: 1
    }
  }).id('modpack:nuclearcraft_samples/kugelblitz_cobblestone')

  // Existing recipes can be removed before replacement, for example:
  // event.remove({ id: 'nuclearcraft:turbine/steam' })
})
