// Required GTNA fluids: names/colors only, with native KubeJS defaults.
// Existing native gtceu:americium_plasma is intentionally not registered again.
(function () {
  var fluids = [
  {
    "id": "gtceu:lead_plasma",
    "name": "Lead Plasma",
    "color": 8286082,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtceu:plutonium_241_plasma",
    "name": "Plutonium 241 Plasma",
    "color": 16731212,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtceu:sulfur_plasma",
    "name": "Sulfur Plasma",
    "color": 16645937,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtceu:thorium_plasma",
    "name": "Thorium Plasma",
    "color": 2441499,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:advanced_nitinol",
    "name": "Advanced Nitinol",
    "color": 13808780,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:black_dwarf_matter",
    "name": "Black Dwarf Matter",
    "color": 1446942,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:celestial_tungsten",
    "name": "Celestial Tungsten",
    "color": 3289650,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:chronomatic_glass",
    "name": "Chronomatic Glass",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.chronomatic_glass",
    "flowing_texture": "gtna:block/fluids/fluid.chronomatic_glass"
  },
  {
    "id": "gtna:creon",
    "name": "Creon",
    "color": 4587590,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:dimensionally_shifted_superfluid",
    "name": "Dimensionally Shifted Superfluid",
    "color": 2760015,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:eternity",
    "name": "Eternity",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.eternity",
    "flowing_texture": "gtna:block/fluids/fluid.eternity"
  },
  {
    "id": "gtna:excited_dtec",
    "name": "Excited Dtec",
    "color": 15790121,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:excited_dtrc",
    "name": "Excited Dtrc",
    "color": 2495544,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:fall_king",
    "name": "Fall King",
    "color": 16764779,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:hypogen",
    "name": "Hypogen",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.hypogen",
    "flowing_texture": "gtna:block/fluids/fluid.hypogen"
  },
  {
    "id": "gtna:indalloy_140",
    "name": "Indalloy 140",
    "color": 6970061,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:infinity",
    "name": "Infinity",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.infinity",
    "flowing_texture": "gtna:block/fluids/fluid.infinity"
  },
  {
    "id": "gtna:mar_m_200_steel",
    "name": "Mar M 200 Steel",
    "color": 5329233,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:mutated_living_solder",
    "name": "Mutated Living Solder",
    "color": 9661851,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:phonon_medium",
    "name": "Phonon Medium",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.phonon_medium",
    "flowing_texture": "gtna:block/fluids/fluid.phonon_medium"
  },
  {
    "id": "gtna:quantum",
    "name": "Quantum",
    "color": 7260360,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:raw_star_matter",
    "name": "Raw Star Matter",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.raw_star_matter",
    "flowing_texture": "gtna:block/fluids/fluid.raw_star_matter"
  },
  {
    "id": "gtna:rhugnor",
    "name": "Rhugnor",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.rhugnor",
    "flowing_texture": "gtna:block/fluids/fluid.rhugnor"
  },
  {
    "id": "gtna:superconductor_uiv_base",
    "name": "Superconductor Uiv Base",
    "color": 15030449,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:tanmolyium",
    "name": "Tanmolyium",
    "color": 9905306,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:transcendent_metal",
    "name": "Transcendent Metal",
    "color": 3289650,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:trinaquadalloy",
    "name": "Trinaquadalloy",
    "color": 2627634,
    "still_texture": "kubejs:block/thin_fluid_still",
    "flowing_texture": "kubejs:block/thin_fluid_flow"
  },
  {
    "id": "gtna:white_dwarf_matter",
    "name": "White Dwarf Matter",
    "color": 16777215,
    "still_texture": "gtna:block/fluids/fluid.white_dwarf_matter",
    "flowing_texture": "gtna:block/fluids/fluid.white_dwarf_matter"
  }
];
  StartupEvents.registry('fluid', function (event) {
    fluids.forEach(function (fluid) {
      event.create(fluid.id)
        .displayName(fluid.name)
        .stillTexture(fluid.still_texture)
        .flowingTexture(fluid.flowing_texture)
        .tint(fluid.color)
        .translucent();
    });
  });
})();
