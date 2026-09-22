const steelcasing = 'mekanism:steel_casing'
const twilight = 'aoa3:ghastly_ingot'
const steel = '#forge:ingots/steel'
const darksteel = '#forge:ingots/dark_steel'
const iron = '#forge:ingots/iron'
const modular = 'kubejs:modular_ingot'
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
    const removalin = [
      'mysticalagriculture:soulium_seed_base'
    ]

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
    'forestry:sturdy_casing',
    'draconicevolution:components/draconium_core',
    'thermal:machine_smelter',
    'matc:crystals/tertium',
    'matc:crystal/tertium',
    'gtceu:shaped/hv_machine_hull',
    'nuclearcraft:chassis',
    'projectexpansion:matter_upgrader_1',
    'projectexpansion:matter_upgrader_2',
    'ae2:network/blocks/crystal_processing_charger',
    'voidminers:rubetine',
    'hostilenetworks:loot_fabricator',
    'divinerpg:shaped/arcana_portal_frame',
    'mysticalagriculture:machine_frame',
    'thermal:fire_charge/lumium_ingot_4',
    'aether:skyroot_beehive',
    'minecraft:beehive',
    'woot_revived:stygian_dust',
    'thermal:lumium_dust_4',
    'rftoolsbase:dimensionalshard',
    'tinymobfarm:wood_farm',
    'tinymobfarm:stone_farm',
    'tinymobfarm:iron_farm',
    'tinymobfarm:gold_farm',
    'tinymobfarm:diamond_farm',
    'tinymobfarm:emerald_farm',
    'tinymobfarm:inferno_farm',
    'alltheores:lumium_dust_from_alloy_blending',
    'bigreactors:reactor/reinforced/casing',
    'bigreactors:reactor/reinforced/casing_upgrade',
    'oritech:crafting/refinerymodulealt',
    'ad_astra:fuel_refinery',
    'mysticalagriculture:prudentium_farmland_till',
    'mysticalagriculture:prudentium_farmland',
    'mysticalagriculture:tertium_farmland_till',
    'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:imperium_farmland',
    'mysticalagriculture:imperium_farmland_till',
    'mysticalagriculture:supremium_farmland_till',
    'mysticalagriculture:supremium_farmland',
    'mysticalagriculture:seed/infusion/gaia_spirit',
    'oritech:crafting/fluidpipe',
    'theabyss:jungle_planks_rcp_2', //This one is due to the mod author's negligence
    'oritech:crafting/metalbeams',
    'nuclearcraft:coil_copper',
    'minecraft:creaking_heart',
    'nuclearcraft:plate_basic',
    'nuclearcraft:plate_basic2',
    'divinerpg:compat/projecte/conversions/anthracite_from_coal',
    'divinerpg:compat/projecte/conversions/anthracite_from_alchemical_coal',
    'divinerpg:compat/projecte/conversions/anthracite_from_charcoal',
    'divinerpg:shaped/blue_stone',
    'projecte:transmutation_table',
    'callfromthedepth_:stone',
    'mekanismgenerators:generator/bio',
    'nuclearcraft:plate_advanced',
    'extendedcrafting:crystaltine_ingot',
    'botania:petal_apothecary',
    'matc:crystals/supremium',
    'nuclearcraft:centrifuge/irradiated_lithium',
    'nuclearcraft:electrolyzer/heavy_water',
    'nuclearcraft:centrifuge/technical_water',
    'matc:crystals/imperium',
    'matc:crystals/master_infusion_crystal',
    'mekanism:energy_tablet',
    'astral_dimension:dustandsteelrecipe',
    'tconstruct:smeltery/casting/ender/eye',
    'ae2:network/blocks/controller',
    'crystalcraft_unlimited_java:crafting_fusion_11',
    'oritech:compat/immersiveengineering/alloying/adamant',
    'oritech:compat/immersiveengineering/arcalloying/adamant',
    'avaritia:neutron_compressor',
    'oritech:crafting/alloy/adamant',
    'minecraft:ender_eye',
    'productivebees/nests/beehive',
    'dog:cosmic_worm',
    'mysticalagriculture:infusion_pedestal',
    'mysticalagriculture:infusion_altar',
    'nuclearcraft:fission_reactor_casing',
    'thermal:fire_charge/enderium_ingot_2',
    'thermal:enderium_dust_2',
    'alltheores:enderium_dust_from_alloy_blending',
    'thermal:augments/upgrade_augment_1',
    'thermal:augments/upgrade_augment_2',
    'thermal:augments/upgrade_augment_3',
    'botania:runic_altar/air',
    'gtceu:shaped/hv_assembler',
    'ae2:materials/advancedcard',
    'gtceu:hv_assembler',
    'oritech:crafting/core2',
    'extendedcrafting:compressor',
    'projectexpansion:power_flower/basic',
    'astral_dimension:glowing_obsidian_recipe',
    'botania:apothecary_default',
    'mysticalagriculture:prosperity_seed_base',
    'oritech:crafting/core2alt',
    'draconicevolution:machines/basic_crafting_injector',
    'ad_astra:nasa_workbench',
    'tinymobfarm:ultimate_farm',
    'mysticalagriculture:soulium_seed_base',
    'oritech:crafting/biogen',
    'divinerpg:compat/projecte/conversions/oxdrite_ingot',
    'divinerpg:compat/projecte/conversions/shadow_bar_from_ingots',
    'divinerpg:shaped/snow_globe',
    'bswb:command_block',
    'draconicevolution:components/wyvern_core',
    'jei:/mekanismgenerators/rotary/deuterium',
    'gtceu:centrifuge/hydrogen_separation',
    'gtceu:centrifuge/ender_air_separation',
    'nuclearcraft:manufactory/ender_pearl',
    'productivebees:nests/beehive',
    'cataclysm:flame_eye',
    'toomanyrecipeviewers:/cataclysm/flame_eye'
  ]
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })
  event.replaceInput({
    mod: 'botanypots',
    type: 'minecraft:crafting_shaped',
  },
  'minecraft:flower_pot',
  'aoa3:ghastly_ingot'
)
//Todo: Split this whole chunky mess of removal recipes below and above into another script later.
  const replace = (result, oldInput, newInput) => {
    event.replaceInput ({output: result}, oldInput, Ingredient.of(newInput))
  }
    replace('extendedcrafting:basic_table', '#forge:storage_blocks/iron', '#forge:storage_blocks/dark_steel')
    replace('mna:runeforge', "minecraft:iron_ingot", twilight)
    replace('gtceu:hv_extractor', 'gtceu:tempered_glass', 'enderio:clear_glass')
    replace('gtceu:hv_extractor', 'gtceu:gold_single_cable', 'gtceu:gold_single_wire')
    replace('nuclearcraft:actuator', 'minecraft:copper_ingot', '#forge:plates/copper')
    replace('productivebees:bottler', iron, twilight)
    replace('productivebees:gene_indexer', iron, twilight)
    replace('productivebees:catcher', iron, twilight)
    replace('productivebees:catcher', 'minecraft:dispenser', 'actuallyadditions:dropper')
    replace('mekanism:laser','mekanism:alloy_reinforced', 'actuallyadditions:empowered_diamatine_crystal')
    replace('mna:reonating_lump', 'minecraft:glow_lichen', 'kubejs:stellarium_ingot')
    replace('gtceu:hv_electic_motor', 'gtceu:magnetic_steel_rod', '#forge:rods/steel')
    replace('projecte:condenser_mk1', '#forge:gems/diamond', '#forge:dusts/diamond')
    replace('gtceu:hv_circuit_assembler', '#gtceu:circuits/ev', '#gtceu:circuits/lv')
    replace('ad_astra:steel_tank', '#c:plates/steel', 'tconstruct:slimesteel_ingot')
    replace('ad_astra:steel_tank', '#c:steel_rods', '#forge:rods/netherite')
    replace('ad_astra:steel_engine', '#c:plates/steel', '#forge:plates/stainless_steel')
    replace('ad_astra:rocket_nose_cone', 'minecraft:lightning_rod', 'astral_dimension:astral_eye')
    replace('nuclearcraft:alloy_smelter', 'minecraft:redstone', '#forge:ingots/redstone_alloy')
    replace('expatternprovider:ex_molecular_assembler', 'ae2:engineering_processor', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:eden"}'))
    replace('projecte:condenser_mk1', 'minecraft:obsidian', 'enderio:reinforced_obsidian_block')
    replace('projectexpansion:basic_emc_link', 'projecte:condenser_mk1', 'projecte:condenser_mk2')
    replace('draconicevolution:crafting_core', 'minecraft:diamond', )
    replace('ae2:interface', iron, twilight)
    replace('minecraft:blast_furnace', iron, steel)
    replace('nuclearcraft:motor', 'minecraft:gold_nugget', 'malum:hallowed_gold_ingot')
    replace('nuclearcraft:motor', iron, darksteel)
    replace('productivebees:nest_locator', "minecraft:iron_bars", 'enderio:dark_steel_bars')
    replace('productivebees:nest_locator', 'minecraft:gold_nugget', 'malum:hallowed_gold_nugget')
    replace('productivebees:incubator', iron, twilight)
    replace('productivebees:incubator', "minecraft:hay_block", 'botania:pure_daisy')
    replace('productivebees:gene_indexer', 'minecraft:comparator', 'actuallyadditions:empowered_restonia_crystal')
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
    replace('draconicevolution:energy_core', 'draconicevolution:wyvern_core', 'mekanism:ultimate_energy_cube')
    replace('ae2:chest', iron, "#forge:ingots/dark_steel")
    replace('bigreactors:basic_reactorcasing', 'minecraft:iron_ingot', 'minecraft:barrier')
    replace('draconicevolution:particle_generator', 'minecraft:redstone_block', 'enderio:redstone_alloy_grinding_ball')
    replace('draconicevolution:energy_core_stabilizer', 'minecraft:diamond', 'botania:mana_diamond')
    replace('ae2:chest', 'minecraft:copper_ingot', 'enderio:dark_bimetal_gear')
    replace('ae2:basic_card', iron, twilight)
    replace('draconicevolution:energy_pylon', 'minecraft:emerald', 'mysticalagriculture:emerald_seeds')
    replace('draconicevolution:energy_pylon', 'minecraft:diamond', 'primalmagick:energized_diamond')
    replace('ae2:wireless_booster', iron, twilight)
    replace('actuallyadditions:atomic_reconstructor', 'minecraft:redstone', 'mekanism:enriched_redstone')
    replace('actuallyadditions:atomic_reconstructor', 'minecraft:iron_ingot', '#forge:ingots/steel')
    replace('enderio:fluid_tank', 'minecraft:iron_ingot', '#forge:ingots/steel')
    replace('enderio:pressurized_fluid_tank', 'enderio:dark_steel_ingot', twilight)
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
    replace('mekanism:basic_fluid_tank', iron, steel)
    replace('mekanism:advanced_fluid_tank', iron, darksteel)
    replace('thermal:machine_refinery', 'minecraft:copper_ingot', twilight)
    replace('thermal:machine_refinery', '#forge:glass', 'minecraft:ender_eye')
    replace('gtceu:hv_chemical_reactor', 'gtceu:gold_single_cable', 'gtceu:gold_single_wire')
    replace('extendedcrafting:crafing_core', 'extendedcrafting:black_iron_ingot', twilight)
    replace('gtceu:hv_chemical_reactor', '#gtceu:circuits/hv', 'mekanism:elite_control_circuit')
    replace('rftoolsbuilder:builder', 'minecraft:bricks', 'ae2:fluix_block')
    replace('gtceu:hv_chemical_reactor', 'gtceu:polyethylene_normal_fluid_pipe', 'mekanism:ultimate_mechanical_pipe')
    replace('gtceu:hv_centrifuge', 'gtceu:gold_single_cable', 'gtceu:gold_single_wire')
    replace('gtceu:hv_centrifuge', '#gtceu:circuits/hv', 'nuclearcraft:basic_electric_circuit')
    replace('gtceu:hv_centrifuge', 'gtceu:hv_electric_motor', 'nuclearcraft:motor')
    replace('gtceu:hv_macerator', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_electric_motor', 'gtceu:silver_double_cable', 'gtceu:silver_double_wire')
    replace('gtceu:hv_polarizer', 'gtceu:gold_single_cable', 'gtceu:gold_single_wire')
    replace('gtceu:hv_thermal_centrifuge', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_extractor', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:terminal', 'gtceu:wrought_iron_plate', '#c:plates/steel')
    replace('gtceu:hv_bender', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_cutter', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_lathe', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_laser_engraver', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:hv_distillery', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('primalmagick:quartz_nugget', 'minecraft:quartz', 'actuallyadditions:ethetic_green_block')
    replace('packagedauto:package_component', 'minecraft:gold_ingot', twilight)
    replace('mekanism:elite_fluid_tank', iron, '#forge:ingots/end_steel')
    replace('mekanism:ultimate_fluid_tank', iron, 'kubejs:stellarium_ingot')
    replace('thermal:machine_frame', iron, steel)
    replace('javd:portal_block', 'minecraft:ender_pearl', 'minecraft:ender_eye')
    replace('enderio:end_steel_ingot', 'minecraft:obsidian', 'mekanism:ingot_refined_obsidian')
    replace('industrialforegoing:machine_frame_pity', iron, 'enderio:end_steel_ingot')
    replace('industrialforegoing:machine_frame_pity', "minecraft:redstone_block", 'mekanism:steel_casing')
    replace('nuclearcraft:empty_heat_sink', 'minecraft:bucket', 'rftoolsbase:machine_frame')
    replace('industrialforegoing:fluid_extractor', iron, darksteel)
    replace('primalmagick:mundane_wand', '#forge:rods/wooden', 'malum:hallowed_gold_ingot')
    replace('refinedstorage:machine_casing', '#forge:stones', 'bigreactors:anglesite_crystal')
    replace('gtceu:hv_emitter', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('gtceu:vacuum_freezer', '#gtceu:circuits/ev', '#gtceu:circuits/lv')
    replace('gtceu:hv_robot_arm', '#gtceu:circuits/hv', '#gtceu:circuits/lv')
    replace('resourcestrees:water_essence', 'minecraft:clay_ball', 'botania:rune_water')
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
      id: 'modpack:wizard_wand_gem',
      output: 'primalmagick:wizard_wand_gem_item',
      inputs: ['#primalmagick:essences/terrestrial_crystals', 'minecraft:diamond']
    },
    {
      id: 'modpack:glass_tube',
      output: 'gtceu:glass_tube',
      inputs: ['enderio:clear_glass', 'enderio:clear_glass', 'enderio:clear_glass']
    },
    {
        id: 'twilightforest:fiery_tears',
        output: 'twilightforest:fiery_tears',
        inputs: ['minecraft:ghast_tear', 'twilightforest:carminite']
    },
    {
      id: 'modpack:glint_and_steel',
      output: Item.of('astral_dimension:astral_dimension', '{Damage:0}'),
      inputs: ['kubejs:seeneyes2', 'kubejs:modular_ingot']
    },
    {
      id: 'modpack:programmed_circuit',
      output: 'gtceu:programmed_circuit',
      inputs: ['gtceu:basic_electronic_circuit']
    },
    {
      id: 'modpack:primalmagick/earth_rune',
      output: 'primalmagick:rune_earth',
      inputs: ['botania:rune_earth']
    },
    {
      id: 'modpack:primalmagick/sea_rune',
      output: 'primalmagick:rune_sea',
      inputs: ['botania:rune_water']
    },
    {
      id: 'modpack:primalmagick/sun_rune',
      output: 'primalmagick:rune_sun',
      inputs: ['botania:rune_fire']
    },
    {
      id: 'modpack:primalmagick/sky_rune',
      output: 'primalmagick:rune_sky',
      inputs: ['botania:rune_air']
    },
    {
      id: 'modpack:primalmagick/moon_rune',
      output: 'primalmagick:rune_moon',
      inputs: ['spectrum:moonstone_shard']
    },
    {
      id: 'modpack:primalmagick/blood_rune',
      output: 'primalmagick:rune_blood',
      inputs: ['divinerpg:bloodgem']
    },
    {
      id: 'modpack:primalmagick/infernal_rune',
      output: 'primalmagick:rune_infernal',
      inputs: ['valoria:infernal_ingot']
    },
    {
      id: 'modpack:primalmagick/void_rune',
      output: 'primalmagick:rune_void',
      inputs: ['astral_dimension:void_gem']
    },
    {
      id: 'modpack:primalmagick/hallowed_rune',
      output: 'primalmagick:rune_hallowed',
      inputs: ['botania:quartz_sunny']
    },
    {
      id: 'modpack:primalmagick/absorb_rune',
      output: 'primalmagick:rune_absorb',
      inputs: ['botania:rune_gluttony']
    },
    {
      id: 'modpack:primalmagick/dispel_rune',
      output: 'primalmagick:rune_dispel',
      inputs: ['botania:rune_winter']
    },
    {
      id: 'modpack:primalmagick/project_rune',
      output: 'primalmagick:rune_project',
      inputs: ['botania:rune_summer']
    },
    {
      id: 'modpack:primalmagick/summon_rune',
      output: 'primalmagick:rune_summon',
      inputs: ['primalmagick:ritual_altar']
    },
    {
      id: 'modpack:primalmagick/area_rune',
      output: 'primalmagick:rune_area',
      inputs: ['malum:runewood_totem_base']
    },
    {
      id: 'modpack:primalmagick/creature_rune',
      output: 'primalmagick:rune_creature',
      inputs: ['minecraft:porkchop']
    },
    {
      id: 'modpack:primalmagick/item_rune',
      output: 'primalmagick:rune_item',
      inputs: ['minecraft:stone_slab']
    },
    {
      id: 'modpack:primalmagick/self_rune',
      output: 'primalmagick:rune_self',
      inputs: ['tconstruct:clear_glass']
    },
    {
      id: 'modpack:primalmagick/insight_rune',
      output: 'primalmagick:rune_insight',
      inputs: ['botania:rune_mana']
    },
    {
      id: 'modpack:primalmagick/power_rune',
      output: 'primalmagick:rune_power',
      inputs: ['aoa3:energy_rune']
    },
    {
      id: 'modpack:primalmagick/grace_rune',
      output: 'primalmagick:rune_grace',
      inputs: ['cyclic:peace_candle']
    },
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
    id: 'modpack:unattuned_rune',
    output: 'primalmagick:rune_unattuned',
    pattern: ['AAA', 'ABA', 'AAA'],
    keys: {
      A: 'primalmagick:marble_raw',
      B: 'twilightforest:castle_brick'
    }
  },
  {
    id: 'modpack:smoked_marble',
    output: 'primalmagick:marble_smoked',
    pattern: ['BBB', 'BAB', 'BBB'],
    keys: {
      A: 'immersiveengineering:coal_coke',
      B: 'primalmagick:marble_raw'
    }
  },
  {
    id: 'modpack:purpur_wand_core',
    output: 'primalmagick:purpur_wand_core_item',
    pattern: ['AB ', 'BA ', '   '],
    keys: {
      A: 'astraldimension:void_gem',
      B: 'minecraft:purpur_block'
    }
  },
  {
    id: 'modpack:obsidian_staff_core',
    output: 'primalmagick:obsidian_staff_core_item',
    pattern: [' AB', 'ABA', 'BA '],
    keys: {
      A: 'primalmagick:essence_shard_earth',
      B: 'cyclic:gem_obsidian'
    },
  },
  {
    id: 'modpack:beehive',
    output: 'minecraft:beehive',
    pattern: ['DCD', 'BAB', 'DCD'],
    keys: {
      A: 'malum:sacred_spirit',
      B: '#forge:honeycombs',
      C: '#minecraft:planks',
      D: 'nasturesaura:gold_powder'
    }
  },
  {
    id: 'modpack:master_crystal',
    output: 'mysticalagriculture:master_infusion_crystal',
    pattern: [' A ', 'BCD', ' E '],
    keys: {
      A: 'minecraft:oak_log',
      B: 'minecraft:cobblestone',
      C: Item.of('matc:supremium_crystal', '{Damage:0}'),
      D: 'minecraft:dirt',
      E: 'minecraft:stone'
    }
  },
  {
    id: 'modpack:alloy_smelter_hv',
    output: 'gtceu:hv_alloy_smelter',
    pattern: ['CBC', 'BAB', 'CBC'],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'gtceu:gold_single_wire',
      C: 'woot_revived:stygian_ingot'
    }
  },
  {
    id: "modpack:hv_assembler",
    output: 'gtceu:hv_assembler',
    pattern: ['DBD', 'EAE', 'CBC'],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'ae2:calculation_processor',
      C: 'gtceu:gold_single_wire',
      D: 'spectrum:neolith',
      E: 'mysticalagradditions:insanium_ingot'
    }
  },
  {
    id: 'modpack:energy_tablet',
    output: 'mekanism:energy_tablet',
    pattern: ['AAA', 'BCB', 'AAA'],
    keys: {
      A: '#forge:ingots/steel',
      B: 'mekanism:alloy_reinforced',
      C: 'mekanism:basic_control_circuit'
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
    id: 'modpack:dim_tear',
    output: 'gtceu:dim_tear',
    pattern: ['B  ', ' A ', '   '],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'modpack:forestry/sturdy_casing',
    output: 'forestry:sturdy_machine',
    pattern: ['BBB', 'BAB', 'BBB'],
    keys: {
      A: twilight,
      B: "#c:ingots/bronze"
    }
  },
  {
    id: 'modpack:radiation_cleanser',
    output: 'gtceu:radiation_cleanser',
    pattern: ['   ', ' AC', '  B'],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'nuclearcraft:uranium_238',
      C: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'modpack:taint_replicant',
    output: 'gtceu:taint_replicant',
    pattern: ['   ', ' A ', '  B'],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'modpack:fusion_core',
    output: 'draconicevolution:crafting_core',
    pattern: ['BCB', 'CAC', 'BCB'],
    keys: {
      A: 'draconicevolution:dragon_heart',
      B: 'draconicevolution:draconium_core',
      C: 'mysticalagradditions:dragon_scale'
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
    id: 'modpack:fuel_refinery',
    output: 'ad_astra:fuel_refinery',
    pattern: ['CCC', 'BAB', 'DDD'],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'mekanism:hdpe_sheet',
      C: 'kubejs:stellarium_ingot',
      D: '#forge:plates/stainless_steel'
    }
  },
  {
    id: 'modpack:advanced_card',
    output: 'ae2:advanced_card',
    pattern: [
        'AB ',
        'CDB',
        'AB '
    ],
    keys: {
        B: twilight,
        A: 'mekanism:enriched_diamond',
        D: 'ae2:calculation_processor',
        C: 'thermal:redstone_bucket'
    }
  },
  {
    id: 'modpack:smeltery_controller',
    output: 'tconstruct:smeltery_controller',
    pattern: ['ABA', 'BCB', 'ABA'],
    keys: {
      A: 'tconstruct:seared_brick',
      B: iron,
      C: 'minecraft:redstone_block'
    }
  },
  {
    id: 'modpack:hv_machine_hull',
    output: 'gtceu:hv_machine_hull',
    pattern: [
        'CBC',
        'BDB',
        'CAC'
    ],
    keys: {
        A: 'gtceu:hv_machine_casing',
        B: 'actuallyadditions:solidified_experience',
        D: 'hammerlib:test_machine',
        C: 'immersiveengineering:ingot_hop_graphite'
    }
  },
  {
    id: 'modpack:plate_du',
    output: 'nuclearcraft:plate_du',
    pattern: [
      'CBC',
      'DAD',
      'CBC'
    ],
    keys: {
      A: 'nuclearcraft:plate_advanced',
      B: 'nuclearcraft:uranium_238',
      C: 'ftbmaterials:iridium_plate',
      D: 'nuclearcraft:uranium_235'
    }
  },
  {
    id: 'modpack:hv_mixer',
    output: 'gtceu:hv_mixer',
    pattern: ['ABA', 'ACA', 'DED'],
    keys: {
      A: 'tconstruct:clear_glass',
      B: 'ad_astra:fan',
      C: 'nuclearcraft:motor',
      D: 'mekanism:ultimate_control_circuit',
      E: 'gtceu:hv_machine_hull'
    }
  },
  {
    id: 'gtceu:foundational_breaker',
    output: 'gtceu:foundational_breaker',
    pattern: ['   ', ' AB', '   '],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'kubejs:modular_ingot'
    }
  },
  {
    id: 'gtceu:soul_capturer',
    output: 'gtceu:soul_capturer',
    pattern: ['   ', ' A ', ' B '],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'kubejs:modular_ingot'
    }    
  },
  {
    id: 'gtceu:anomalous_condenser',
    output: 'gtceu:anomalous_condenser',
    pattern: [' B ', ' A ', '   '],
    keys: {
      A: 'gtceu:hv_machine_hull',
      B: 'kubejs:modular_ingot'
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

