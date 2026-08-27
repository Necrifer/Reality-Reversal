const steelcasing = 'mekanism:steel_casing'
const twilight = 'aoa3:ghastly_ingot'
const steel = '#forge:ingots/steel'
const darksteel = '#forge:ingots/dark_steel'
const iron = '#forge:ingots/iron'
ServerEvents.recipes(event => {
    const removalout = [
        'dimdoors:tesselating_loom',
        'projecte:philosophers_stone',
        'minecraft:hopper', 
        'minecraft:flint_and_steel',
        'minecraft:anvil',
        'ae2:network/parts/quartz_fiber_part',
        'mekanismgenerators:heat_generator',
        'projex:arcane_tablet',
      ]
    const removalin = []

  removalin.forEach(removalin => {
    event.remove({input: removalin})
  })
  removalout.forEach(removalout => {
    event.remove({output: removalout})
  })
  const idRemoval = [
    'ae2:network/blocks/inscribers',
    'botania:runic_altar/earth',
    'botania:runic_altar/fire',
    'botania:runic_altar/water',
    'botania:runic_altar/winter',
    'mysticalagriculture:inferium_farmland_till',
    'mysticalagriculture:inferium_farmland',
    'matc:crystals/prudentium',
    'matc:crystals/inferium',
    'thermal:machine_smelter',
    'matc:crystal/tertium',
    'nuclearcraft:chassis',
    'ae2:network/blocks/crystal_processing_charger',
    'voidminers:rubetine',
    'hostilenetworks:loot_fabricator',
    'divinerpg:shaped/arcana_portal_frame',
    'mysticalagriculture:machine_frame',
    'thermal:fire_charge/lumium_ingot_4',
    'woot_revived:stygian_dust',
    'thermal:lumium_dust_4',
    'alltheores:lumium_dust_from_alloy_blending',
    'bigreactors:reactor/reinforced/casing',
    'bigreactors:reactor/reinforced/casing_upgrade',
    'oritech:crafting/refinerymodulealt',
    'mysticalagriculture:prudentium_farmland_till',
    'mysticalagriculture:prudentium_farmland',
    'mysticalagriculture:tertium_farmland_till',
    'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:imperium_farmland',
    'mysticalagriculture:imperium_farmland_till',
    'mysticalagriculture:supremium_farmland_till',
    'mysticalagriculture:supremium_farmland',
    'oritech:crafting/fluidpipe',
    'oritech:crafting/metalbeams',
    'nuclearcraft:coil_copper',
    'nuclearcraft:plate_basic',
    'nuclearcraft:plate_basic2',
    'divinerpg:compat/projecte/conversions/anthracite_from_coal',
    'divinerpg:compat/projecte/conversions/anthracite_from_alchemical_coal',
    'divinerpg:compat/projecte/conversions/anthracite_from_charcoal',
    'divinerpg:shaped/blue_stone',
    'projecte:transmutation_table',
    'mekanismgenerators:generator/bio',
    'nuclearcraft:plate_advanced',
    'extendedcrafting:crystaltine_ingot',
    'botania:petal_apothecary',
    'matc:crystal/supremium',
    'matc:crystal/imperium',
    'mekanism:energy_tablet',
    'tconstruct:smeltery/casting/ender/eye',
    'ae2:network/blocks/controller',
    'crystalcraft_unlimited_java:crafting_fusion_11',
    'oritech:compat/immersiveengineering/alloying/adamant',
    'oritech:compat/immersiveengineering/arcalloying/adamant',
    'oritech:crafting/alloy/adamant',
    'minecraft:ender_eye',
    'botania:runic_altar/air',
    'ae2:materials/advancedcard',
    'oritech:crafting/core2',
    'extendedcrafting:compressor',
    'projectexpansion:power_flower/basic',
    'botania:apothecary_default',
    'mysticalagriculture:prosperity_seed_base',
    'oritech:crafting/core2alt',
    'mysticalagriculture:soulium_seed_base',
    'oritech:crafting/biogen',
    'divinerpg:compat/projecte/conversions/oxdrite_ingot',
    'divinerpg:compat/projecte/conversions/shadow_bar_from_ingots',
    'divinerpg:shaped/snow_globe',
    'nuclearcraft:manufactory/ender_pearl'
  ]
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })
//Todo: Split this whole chunky mess of removal recipes below and above into another script later.
  const replace = (result, oldInput, newInput) => {
    event.replaceInput ({output: result}, oldInput, Ingredient.of(newInput))
  }
    replace('extendedcrafting:basic_table', '#forge:storage_blocks/iron', '#forge:storage_blocks/dark_steel')
    replace('mna:runeforge', "minecraft:iron_ingot", "twilight")
    replace('mekanism:laser','mekanism:alloy_reinforced', 'actuallyadditions:empowered_diamatine_crystal')
    replace('mna:reonating_lump', 'minecraft:glow_lichen', 'kubejs:stellarium_ingot')
    replace('projecte:condenser_mk1', '#forge:gems/diamond', '#forge:dusts/diamond')
    replace('nuclearcraft:alloy_smelter', 'minecraft:redstone', '#forge:ingots/redstone_alloy')
    replace('expatternprovider:ex_molecular_assembler', 'ae2:engineering_processor', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:eden"}'))
    replace('projecte:condenser_mk1', 'minecraft:obsidian', 'enderio:reinforced_obsidian_block')
    replace('projectexpansion:basic_emc_link', 'projecte:condenser_mk1', 'projecte:condenser_mk2')
    replace('ae2:interface', iron, twilight)
    replace('minecraft:blast_furnace', iron, steel)
    replace('ae2:me_p2p_tunnel', iron, twilight)
    replace('mining_dimension:teleporter', '#minecraft:planks', 'cyclic:eye_redstone')
    replace('minecraft:crafter', iron, darksteel)
    replace('extendedcrafting:black_iron_ingot', '#forge:dyes/black', 'minecraft:basalt')
    replace('enderio:void_chassis', iron, darksteel)
    replace('immersiveengineering:blastbrick', 'minecraft:magma_block', 'minecraft:lava_bucket')
    replace('enderio:slice_and_splice', 'enderio:soularium_ingot', twilight)
    replace('mekanism:electrolytic_separator', iron, steel)
    replace('ae2:annihilation_plane', iron, twilight)
    replace('ae2:formation_plane', iron, twilight)
    replace('ae2:blank_pattern', iron, twilight)
    replace('ae2:quartz_glass', 'ae2:certus_quartz_dust', 'ae2:fluix_dust')
    replace('ae2:wireless_receiver', iron, twilight)
    replace('ae2:quantum_ring', iron, twilight)
    replace('thermal:dynamo_stirling', iron, '#forge:ingots/nickel')
    replace('ae2:pattern_provider', iron, twilight)
    replace('ae2:crafting_unit', iron, twilight)
    replace('ae2:chest', iron, "#forge:ingots/dark_steel")
    replace('ae2:chest', 'minecraft:copper_ingot', 'enderio:dark_bimetal_gear')
    replace('ae2:basic_card', iron, twilight)
    replace('ae2:wireless_booster', iron, twilight)
    replace('ae2:drive', iron, 'enderio:end_steel_ingot')
    replace('nuclearcraft:alloy_smelter', '#forge:bricks', 'industrialforegoing:pink_slime_ingot')
    replace('nuclearcraft:alloy_smelter', 'minecraft:blast_furnace', 'thermal:machine_smelter')
    replace('nuclearcraft:alloy_smelter', 'enderio:redstone_alloy_ingot', 'enderio:alloy_smelter')
    replace('ae2:basic_card', 'minecraft:gold_ingot', 'mekanism:enriched_gold')
    replace('ae2:blank_pattern', 'minecraft:glowstone_dust', 'mekanism:ingot_refined_glowstone')
    replace('advanced_ae:small_adv_pattern_provider', 'minecraft:redstone', 'mekanism:alloy_infused')
    replace('advanced_ae:small_adv_pattern_provider', 'minecraft:ender_pearl', 'enderio:ender_crystal_powder')
    replace('thermal:dynamo_stirling', '#forge:gears/iron', '#forge:gears/steel')
    replace('thermal:dynamo_stirling', '#forge:stone', "#forge:storage_blocks/copper")
    replace('mysticalagriculture:infusion_altar', 'minecraft:gold_ingot', 'valoria:nature_ingot'),
    replace('mysticalagriculture:infusion_altar', 'minecraft:red_wool', 'divinerpg:torridite_ingot')
    replace('mysticalagriculture:infusion_pedestal', 'minecraft:gold_ingot', 'divinerpg:aquatic_ingot')
    replace('mysticalagriculture:infusion_pedestal', 'minecraft:red_wool', 'voidminers:rubetine')
    replace('mekanism:basic_fluid_tank', iron, steel)
    replace('mekanism:advanced_fluid_tank', iron, darksteel)
    replace('thermal:machine_refinery', 'minecraft:copper_ingot', twilight)
    replace('thermal:machine_refinery', '#forge:glass', 'minecraft:ender_eye')
    replace('extendedcrafting:crafing_core', 'extendedcrafting:black_iron_ingot', twilight)
    replace('rftoolsbuilder:builder', 'minecraft:bricks', 'ae2:fluix_block')
    replace('packagedauto:package_component', 'minecraft:gold_ingot', twilight)
    replace('mekanism:elite_fluid_tank', iron, '#forge:ingots/end_steel')
    replace('mekanism:ultimate_fluid_tank', iron, 'kubejs:stellarium_ingot')
    replace('thermal:machine_frame', iron, steel)
    replace('javd:portal_block', 'minecraft:ender_pearl', 'minecraft:ender_eye')
    replace('enderio:end_steel_ingot', 'minecraft:obsidian', 'mekanism:ingot_refined_obsidian')
    replace('industrialforegoing:machine_frame_pity', iron, 'enderio:end_steel_ingot')
    replace('industrialforegoing:fluid_extractor', iron, darksteel)
    replace('primalmagick:mundane_wand', '#forge:rods/wooden', 'malum:hallowed_gold_ingot')
    replace('refinedstorage:machine_casing', '#forge:stones', 'bigreactors:anglesite_crystal')
    replace('thermal:dynamo_magmatic', iron, darksteel)
  event.shaped(
    Item.of('extendedcrafting:basic_table', 2),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'extendedcrafting:basic_component',
      B: 'extendedcrafting:basic_catalyst',
      C: '#forge:workbenches',
      D: 'extendedcrafting:basic_table',
      E: 'extendedcrafting:black_iron_slate'
    }
  )
const shapelessCrafting = [
    {
      id: 'minecraft:flint_and_steel',
      output: 'minecraft:flint_and_steel',
      inputs: ['minecraft:flint', darksteel]
    },
    {
        id: 'twilightforest:fiery_tears',
        output: 'twilightforest:fiery_tears',
        inputs: ['minecraft:ghast_tear', 'twilightforest:carminite']
    }
  ];
// Can't do any better to compact the ones below, no other options...
const shapedCrafting = [
  {
    id:'modpack:quartz_fiber',
    output: 'ae2:quartz_fiber',
    pattern: ['AAA', 'BCB', 'AAA'],
    keys: {
      A: 'enderio:clear_glass',
      B: 'ae2:certus_quartz_dust',
      C: 'dimdoors_clod'
    }
  },
  {
    id: 'modpack:foundational_breaker',
    output: 'minecraft:foundational_breaker',
    pattern: [' AB', '   ', '   '],
    keys: {
      A: 'hammerlib:test_machine',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'modpack:anomalous_condenser',
    output: 'minecraft:anomalous_condenser',
    pattern: ['BA ', '   ', '   '],
    keys: {
      A: 'hammerlib:test_machine',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'modpack:soul_capturer',
    output: 'minecraft:soul_capturer',
    pattern: [' B ', ' A ', '   '],
    keys: {
      A: 'hammerlib:test_machine',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'actuallyadditions:iron_casing',
    output: 'actuallyadditions:iron_casing',
    pattern: [
        'ABC',
        'BDB',
        'EBF'
    ],
    keys: {
        B: twilight,
        F: 'ae2:printed_engineering_processor',
        E: 'ae2:printed_logic_processor',
        A: 'ae2:printed_calculation_processor',
        D: 'actuallyadditions:black_quartz',
        C: 'ae2:printed_silicon'
    }
  },
  {
    id: "modpack:inscriber",
    output: 'ae2:inscriber',
    pattern: [
        "DDD",
        "BFB",
        "BFB"
    ],
    keys: {
        D: 'enderio:dark_steel_ingot',
        B: 'extendedcrafting:black_iron_ingot',
        F: 'ae2:fluix_crystal'
    }

  },
  {
    id: 'modpack:advanced_card',
    output: 'ae2:advanced_card',
    pattern: [
        'AB',
        'CDB',
        'AB'
    ],
    keys: {
        B: twilight,
        A: 'mekanism:enriched_diamond',
        D: 'ae2:calculation_processor',
        C: 'thermal:redstone_bucket'
    }
  },
  {
    id: 'hostilenetworks:sim_chamber',
    output: 'hostilenetworks:sim_chamber',
    pattern: 
      [
        "PIP",
        "LIL",
        "PIP"
    ],
    keys: {
        P: 'nuclearcraft:plate_basic',
        I: 'mekanism:ingot_uranium',
        L: 'kubejs:law_ingot'
    }
  },
  {
    id:'castle_in_the_sky:red_key',
    output: 'castle_in_the_sky:red_key',
    pattern: [
        "SRR",
        "SRR",
        "SRR"
    ],
    keys: {
        S: 'minecraft:stick',
        R: 'projecte:red_matter'
    }
  },
  {
    id:'castle_in_the_sky:blue_key',
    output: 'castle_in_the_sky:blue_key',
    pattern: [
        "SRR",
        "SRR",
        "SRR"
    ],
    keys: {
        S: 'minecraft:stick',
        R: 'minecraft:lapis_lazuli'
    }
  },
  {
    id:'castle_in_the_sky:yellow_key',
    output: 'castle_in_the_sky:yellow_key',
    pattern: [
        "SRR",
        "SRR",
        "SRR"
    ],
    keys: {
        S: 'minecraft:stick',
        R: 'minecraft:gold_ingot'
    }
  },
  {
    id:'kubejs:easy_rubetine', 
    output: 'voidminers:rubetine',
    pattern: [
        "RDM",
        "EEE",
        "MDR"
    ],
    keys:{
        R: 'projecte:red_matter',
        D: 'projecte:dark_matter',
        M: 'projectexpansion:magenta_matter',
        E: 'enderio:end_steel_ingot'
    }
  },
  {
    id:'rftoolsbase:machine_frame', 
    output: 'rftoolsbase:machine_frame',
    pattern:[
        "CWC",
        "DED",
        "CWC"
    ],
    keys: {
        C: 'ae2:certus_quartz_dust',
        W: twilight,
        D: 'enderio:dark_steel_bars',
        E: 'enderio:end_steel_block'
    }
  },
  {
    id:'enderio:alloy_smelter',
    output: 'enderio:alloy_smelter',
    pattern: [
        "III",
        "RVR",
        "ERE"
    ],
    keys: {
        I: 'immersiveengineering:ingot_hop_graphite',
        R: 'projecte:red_matter',
        V: 'enderio:void_chassis',
        E: 'mekanism:energized_smelter'
    }
  },
  {
    id:'projectexpansion:basic_power_flower', 
    output:'projectexpansion:basic_power_flower',
    pattern: [
        "BAB",
        "CDC",
        "CCC"
    ],
    keys: {
        B: 'projectexpansion:basic_compressed_collector',
        A: 'projectexpansion:basic_emc_link',
        C: 'projectexpansion:basic_relay',
        D: 'divinerpg:arcanium_block'
    }
  },
  {
    id:'divinerpg:aracana_portal_frame',
    output: 'divinerpg:arcana_portal_frame',
    count: 12,
    pattern: ["CRC","SAS","WEW"],
    keys: {
        C: 'dimdoors:clod',
        R: 'dimdoors:rift_pearl',
        S: 'divinerpg:soulfire_stone',
        A: 'kubejs:stellarium_ingot',
        W: 'dimdoors:world_thread',
        E: 'kubejs:eyes1'
    }
  },
  {
    id:'projecte:alchemical_chest',
    output: 'projecte:alchemical_chest',
    pattern: ['ABC', 'DED', 'FGH'],
    keys: {
      A: 'projecte:low_covalence_dust',
      B: 'projecte:medium_covalence_dust',
      C: 'projecte:high_covalence_dust',
      D: 'bigreactors:benitoite_crystal',
      E: 'mekanism:enriched_diamond',
      F: 'divinerpg:terran_shards',
      G: 'divinerpg:ender_shards',
      H: 'divinerpg:molten_shards'
    }
  },
  {
    id: 'kubejs:refined_obsidian_gear',
    output: 'kubejs:refined_obsidian_gear',
    pattern: [' A ', 'ABA', ' A '],
    keys: {
      A: 'mekanism:ingot_refined_obsidian',
      B: 'mekanism:alloy_atomic'
    }
  },
  {
    id: 'tiab:time_in_a_bottle',
    output: 'tiab:time_in_a_bottle',
    pattern: ['AAA', 'BCB', 'DED'],
    keys: {
      A: '#forge:ingots/soularium',
      B: twilight,
      C: '#forge:clocks',
      D: 'mekanism:enriched_diamond',
      E: 'minecraft:glass_bottle'
    }
  },
  {
    id: 'kubejs:energetic_alloy_gear',
    output: 'kubejs:energetic_alloy_gear',
    pattern: [' A ', 'ABA', ' A '],
    keys: {
      A: 'enderio:energetic_alloy_ingot',
      B: '#forge:nuggets/dark_steel'
    }
  },
  {
    id: 'projecte:transmutation_tablet',
    output: 'projecte:transmutation_tablet',
    pattern: ['ABA', 'BCB', 'ABA'],
    keys: {
      A: twilight,
      B: 'projecte:dark_matter_block',
      C: 'projecte:transmutation_table'}
  },
    {
        id: 'minecraft:anvil',
        output: 'minecraft:anvil',
        pattern: ['AAA', ' B ', 'BBB'],
        keys: {
            A: '#forge:storage_blocks/steel',
            B: darksteel
        }
    },
    {
        id: 'mekanism:crusher',
        output: 'mekanism:crusher',
        pattern: ['ABA', 'CDC', 'AEA'],
        keys: {
            A: 'mekanism:alloy_infused',
            B: 'minecraft:anvil',
            C: '#forge:circuits/basic',
            D: steelcasing,
            E: 'immersiveengineering:sawblade'
        }
    },
    {
        id:'mekanism:enrichment_chamber',
        output: 'mekanism:enrichment_chamber',
        pattern: ['ABA', 'CDC', 'ABA'],
        keys: {
            A: '#forge:rods/steel',
            B: '#forge:circuits/basic',
            C: 'mekanism:alloy_infused',
            D: steelcasing
        }
    },
    {
        id: 'mekanism:metallurgic_infuser',
        output: 'mekanism:metallurgic_infuser',
        pattern: ['ABA', 'BCB', 'ABA'],
        keys: {
            A: 'dimdoors:amalgam_lump',
            B: 'dimdoors:clod',
            C: steelcasing
        }
    },
    {
        id: 'thermal:induction_smelter',
        output: 'thermal:machine_smelter',
        pattern: ['AAA', 'CED', 'BAB'],
        keys: {
            A: '#forge:gears/steel',
            B: '#forge:ingots/electrum',
            C: 'dimdoors:amalgam_lump',
            D: 'dimdoors:clod',
            E: 'thermal:machine_frame'
        }
    },
    {
        id: 'minecraft:hopper',
        output: 'minecraft:hopper',
        pattern: ['ABA', 'ABA', ' A '],
        keys: {
            A: steel,
            B: '#minecraft:planks'
        }
    },
    {
        id: 'dimdoors:tesselating_loom',
        output: 'dimdoors:tesselating_loom',
        pattern: ['ADA', 'BCB', 'ADA'],
        keys: {
            A: 'dimdoors:infrangible_fiber',
            B: 'dimdoors:world_thread',
            C: 'dimdoors:eternal_fluid_bucket',
            D: 'dimdoors:black_fabric'
        }
    },
    {
      id: 'mekanismgenerators:heat_generator',
      output: 'mekanismgenerators:heat_generator',
      pattern: ['AAA', 'BCB', 'DED'],
      keys: {
        A: '#forge:ingots/osmium',
        B: '#forge:treated_wood',
        C: 'mekanism:steel_casing',
        D: darksteel,
        E: 'thermal:dynamo_stirling'
      }
    },
    {
        id: 'mekanism:steel_casing',
        output: steelcasing,
        pattern:['ABA','BCB','ABA'],
        keys:{
            A: steel,
            B: '#forge:ingots/osmium',
            C: '#forge:storage_blocks/iron'
        }
    },
    {
      id: 'mekanismgenerators:bio_generator',
      output: 'mekanismgenerators:bio_generator',
      pattern: ['ABA', 'CDC', 'ABA'],
      keys: {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:fuels/bio',
        D: 'mekanism:steel_casing'
      }
    }
  ];
    shapedCrafting.forEach(recipe => {
        event.shaped(
          Item.of(recipe.output, recipe.count || 1),
          recipe.pattern,
          recipe.keys
        ).id(recipe.id);
  });
    shapelessCrafting.forEach(recipe => {
    event.shapeless(Item.of(recipe.output), recipe.inputs).id(recipe.id);
  });
})

