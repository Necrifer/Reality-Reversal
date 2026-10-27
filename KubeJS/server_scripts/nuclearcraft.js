ServerEvents.recipes(event => {
  event.remove({id: 'nuclearcraft:fluid_enricher/0'})
  event.remove({output: 'nuclearcraft:technical_water'})
const records = [
  {
    type: "nuclearcraft:alloy_smelter",
    item_inputs: [
      {
        item: "ae2:charged_certus_quartz_crystal",
        count: 4
      },
      {
        item: "botania:terrasteel_ingot",
        count: 2
      }
      ],
      item_outputs: [
        {
          item: "extendedcrafting:crystaltine_ingot",
          count: 4
        }],
        process_time: 200,
        energy_per_tick: 50
      },
  {
    type: "nuclearcraft:extractor",
    item_inputs: [
      {
        item: "ad_astra:moon_stone"
      }],
    fluid_outputs: [
      {
        fluid: "nuclearcraft:deuterium",
        amount: 1200
      }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
  type: "nuclearcraft:extractor",
  item_inputs: [
  {
    item: "ad_astra:moon_sand"
    }],
    fluid_outputs: [
      {
        fluid: "nuclearcraft:deuterium",
        amount: 1200
        }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:fluid_infuser",
    item_inputs: [
      {
        tag: "c:ingots/copper",
        count: 1
      }],
    item_outputs: [
      {
        item: "gtceu:annealed_copper_ingot",
        count: 1
      }],
    fluid_inputs: [
      {
        tag: "c:oxygen",
        amount: 1200
      }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:fluid_infuser",
    item_inputs: [
      {
        item: "gtceu:chaos_infused_block",
        count: 1
      }],
    item_outputs: [
      {
        item: "gtceu:chaos_infused_ingot",
        count: 9
      }],
    fluid_inputs: [
      {
        fluid: "nuclearcraft:technical_water",
        amount: 200
      }
    ],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:pressurizer",
    item_inputs: [
      {
        item: "gtceu:chaos_infused_ingot",
        count: 1
      }
    ],
    item_outputs: [
      {
        item: "gtceu:chaos_infused_plate",
        count: 1
      }
    ],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:assembler",
    item_inputs: [
      {
        item: "gtceu:hv_machine_hull",
        count: 1
      },
      {
        item: "enderio:fluid_tank",
        count: 1
      }],
    item_outputs: [
      {
        item: "gtceu:hv_output_hatch",
        count: 1
      }],
    process_time: 200,
    energy_per_tick: 50
    },
  {
    type: "nuclearcraft:assembler",
    item_inputs: [
      {
        item: "gtceu:hv_machine_hull",
        count: 1
      },
      {
        item: "ae2:chest",
        count: 1
      }
    ],
    item_outputs: [
      {
        item: "gtceu:hv_input_bus",
        count: 1        
      }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:assembler",
    item_inputs: [
      {
        item: "gtceu:hv_machine_hull",
        count: 1
      },
      {
        item: "mekanism:ultimate_universal_cable",
        count: 5
      },
      {
        item: "kubejs:stellarium_ingot",
        count: 3
      }],
    item_outputs: [
      {
        item: "gtceu:hv_energy_input_hatch",
        count: 1
      }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:assembler",
    item_inputs: [
      {
        item: "gtceu:hv_machine_hull",
        count: 1
      },
      {
        item: "nuclearcraft:pipe",
        count: 5
      },
      {
        item: "kubejs:stellarium_ingot",
        count: 3
      }
    ],
    item_outputs: [
      {
        item: "gtceu:hv_energy_output_hatch",
        count: 1
      }
    ],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:assembler",
    item_inputs: [
      {
        item: "gtceu:hv_machine_hull",
        count: 1
      },
      {
        item: "mekanism:personal_chest",
        count: 1
      }],
    item_outputs: [
      {
        item: "gtceu:hv_output_bus",
        count: 1
      }],
    process_time: 200,
    energy_per_tick: 50
  },
  {
    type: "nuclearcraft:manufactory",
    item_inputs: [
      {
        item: "kubejs:eyes2",
        count: 1
      }],
    item_outputs: [
      {
        item: "kubejs:seeneyes2",
        count: 4
      }],
    process_time: 200,
    energy_per_tick: 50
    },
  {
    type: "nuclearcraft:melter",
    item_inputs: [
      {
        item: "divinerpg:frosted_allure",
        count: 1
      }],
    fluid_outputs: [
      {
        fluid: "nuclearcraft:cryotheum",
        amount: 2000
      }],
    process_time: 1000,
    energy_per_tick: 50
    },
    {
    type: "nuclearcraft:fluid_infuser",
    item_inputs: [{item: "ad_astra:mars_stone",count: 1}],
    fluid_inputs: [{fluid: "nuclearcraft:cryotheum",amount: 1200}],
    item_outputs: [{item: "ad_astra:mars_ice_shard_ore", count: 1}],
    process_time: 1000,
    energy_per_tick: 50
    },
  {
    type: "nuclearcraft:fluid_infuser",
    item_inputs: [{item: "botania:bifrost_dirt",count: 1}],
    fluid_inputs: [{fluid: "nuclearcraft:cryotheum",amount: 1200}],
    item_outputs: [{item: "undergarden:froststeel_ingot", count: 1}],
    process_time: 1000,
    energy_per_tick: 50
  },

  {
    type: "nuclearcraft:fluid_enricher",
    item_inputs: [{item: "astralsorcery:resonating_gem",count: 1}],
    fluid_inputs: [{fluid: "water",amount: 1200}],
    fluid_outputs: [{fluid: "nuclearcraft:technical_water", amount: 200}],
    process_time: 1000,
    energy_per_tick: 50
  },
  ];

  // Copy only the fields a record defines: undefined values become JsonNull and break event.custom.
  const FIELDS = ['type', 'item_inputs', 'fluid_inputs', 'item_outputs', 'fluid_outputs', 'process_time', 'energy_per_tick'];
  records.forEach((recipe, index) => {
    const json = {};
    //Combines all the fields used into a singular array, then map recipes type to the arrays.
    // This prevent issues where some machines doesn't have certain inputs, which if usual method used will be rejected by NC.
    FIELDS.forEach(key => { if (recipe[key] !== undefined && recipe[key] !== null) json[key] = recipe[key]; });
    if (!json.type) {
      console.error(`[nuclearcraft.js] Record #${index} has no "type"; skipped.`);
      return;
    }
    try {
      event.custom(json);
    } catch (error) {
      console.error(`[nuclearcraft.js] Record #${index} (${json.type}) failed: ${error}`);
    }
  })
})
