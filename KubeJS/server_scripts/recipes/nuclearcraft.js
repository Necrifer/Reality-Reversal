ServerEvents.recipes(event => {
  event.remove({id: 'nuclearcraft:fluid_enricher/technical_water'})
  event.remove({id: 'nuclearcraft:crystallizer/salt'})
  const replace = (result, oldin, newin) => {event.replaceInput({output:Item.of(result)}, oldin, newin)}
  replace('nuclearcraft:heat_exchanger_controller', 'bucket', 'barrier' )
  //NuclearCraft reads tags as {tag, amount}.
  //Because why make things easy, right?
  function idRemoval(idremove) {return event.remove({id: idremove})}
  function nuclearfluid (id, vol) {return id.startsWith('#') ? {tag: id.slice(1), amount: vol} : {fluid: id, amount: vol}}
  function nuclearitem (id, count) {return id.startsWith('#') ? {tag: id.slice(1), count: count} : {item: id, count: count}}
  // Pass '' as an id to leave that fluid slot out. time is in ticks, rf is per tick.
  function chemreactor (in1, in1vol, in2, in2vol, out1, out1vol, out2, out2vol, time, rf) {
    const fluids = (pairs) => pairs.filter(pair => pair[0] !== '').map(pair => nuclearfluid(pair[0], pair[1]))
    return event.custom({
      type: 'nuclearcraft:chemical_reactor',
      fluid_inputs: fluids([[in1, in1vol], [in2, in2vol]]),
      fluid_outputs: fluids([[out1, out1vol], [out2, out2vol]]),
      process_time: time,
      energy_per_tick: rf
    })
  }
  function melter(itemin, countin, out1, vol1){
    return event.custom({
      type: 'nuclearcraft:melter',
      item_inputs: [nuclearitem(itemin, countin)],
      fluid_outputs: [nuclearfluid(out1, vol1)],
      process_time: 600,
      energy_per_tick: 200
    })
  }
  function fluidinfuse(fluidin, volin, itemin, countin, itemout, countout) {
    return event.custom({
      type: 'nuclearcraft:fluid_infuser',
      fluid_inputs: [nuclearfluid(fluidin, volin)],
      item_inputs: [nuclearitem(itemin, countin)],
      item_outputs: [nuclearitem(itemout,countout)],
      process_time: 600,
      energy_per_tick: 200
    })
  }
  function fluidenrich(fluidin, volin, itemin, countin, fluidout, volout) {
    return event.custom({
      type: 'nuclearcraft:fluid_enricher',
      fluid_inputs: [nuclearfluid(fluidin, volin)],
      item_inputs: [nuclearitem(itemin, countin)],
      fluid_outputs: [nuclearfluid(fluidout, volout)],
      process_time: 600,
      energy_per_tick: 200
    })
  }
  // Items are {item, count} or {tag, count} objects, like nuclearfluid. Ids may start with '#'.
  function pressuriser(input, count1, output, count2) {
    return event.custom({
      type: 'nuclearcraft:pressurizer',
      item_inputs: [nuclearitem(input, count1)],
      item_outputs: [nuclearitem(output, count2)],
      process_time: 200,
      energy_per_tick: 50
    })
  }
  function fusionreact(energy, reactant1,volin1,reactant2,volin2, temp, liq1,vol1,liq2,vol2,liq3,vol3,liq4,vol4, time){
    return event.custom({
      type: 'nuclearcraft:fusion_reactor',
      energy: energy,
      // input_a / input_b are single fluids (not lists); outputs is a list. Pass '' to leave an output out.
      input_a: nuclearfluid(reactant1, volin1),
      input_b: nuclearfluid(reactant2, volin2),
      optimal_temperature: temp,
      outputs: [[liq1, vol1], [liq2, vol2], [liq3, vol3], [liq4, vol4]]
        .filter(pair => pair[0] !== '').map(pair => nuclearfluid(pair[0], pair[1])),
      process_time: time
    })
  }
  fusionreact(15000000, '#c:tritium', 2500, 'nuclearcraft:molten_europium_155', 5, 1.6883E10, 'kubejs:instability', 2500, 'nuclearcraft:irradiated_boron', 1500, 'nuclearcraft:molten_polonium', 1500, 'nuclearcraft:helium_3', 2500, 2000)
  fusionreact(25000000, 'kubejs:eden_fluid', 500, '#c:hydrogen', 5000, 1.6883E10, 'kubejs:faint_arcane', 500, 'nuclearcraft:irradiated_lithium', 1500, 'nuclearcraft:molten_curium_243', 10, 'nuclearcraft:molten_curium_245', 5, 2000)
  idRemoval('nuclearcraft:fusion_reactor_casing')
  idRemoval('nuclearcraft:irradiator/platinum_to_neutronium')
  idRemoval('nuclearcraft:basic_rf_amplifier')
  idRemoval('nuclearcraft:basic_electromagnet')
  idRemoval('nuclearcraft:fusion_reactor_connector')
  chemreactor('nuclearcraft:sulfuric_acid', 1200, '#c:oxygen', 1000, 'nuclearcraft:sulfur_dioxide', 1000, '', 0, 350, 150)
  melter('auroral:aurora_shard', 9, 'kubejs:aurorial_call', 5)
  fluidenrich('kubejs:aurorial_call', 1000, 'twilightforest:aurora_block', 32, 'kubejs:aurorial_call', 1100)
  fluidinfuse('kubejs:aurorial_call', 1500, 'enderio:dark_steel_ingot', 5, 'auroral:shimmersteel_ingot', 1)
  fluidinfuse('kubejs:aurorial_call', 400, 'botania:black_lotus', 5, 'auroral:aurora_shard', 1)
  fluidinfuse('kubejs:aurorial_call', 400, 'auroral:woven_leather', 5, 'auroral:shimmerweave_fabric', 1)
  fluidinfuse('nuclearcraft:cryotheum', 144, '#c:stones', 1, 'divinerpg:frozen_stone', 1)
  fluidinfuse('kubejs:instability', 500, 'primalmagick:marble_hallowed', 8, 'primalmagick:mana_singularity', 1)
  pressuriser('oritech:plutonium_dust', 9, 'mekanism:pellet_plutonium', 1)
  pressuriser('gtceu:hematite_dust', 9, 'gaiadimension:hematite', 1)
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
