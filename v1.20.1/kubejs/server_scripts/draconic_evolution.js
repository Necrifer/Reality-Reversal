ServerEvents.recipes(event => {

const de = [
  {
  id: "draconicevolution:machines/wyvern_crafting_injector",
  catalyst: {item: "draconicevolution:basic_crafting_injector"},
  ingredients: [
    {"item": "draconicevolution:draconium_block"},
    {"item": "draconicevolution:draconium_core"},
    {"item": "draconicevolution:wyvern_core"},
    {"item": "draconicevolution:draconium_core"},
    {"item": "ad_astra:desh_ingot"},
    {"item": "ad_astra:desh_ingot"},
    {"item": "bigreactors:ludicrite_ingot"},
    {"item": "kubejs:stellarium_ingot"},
    {"item": "kubejs:stellarium_ingot"},
    {"item": "malum:hallowed_gold_ingot"}
  ],
  "result": {
    "item": "draconicevolution:wyvern_crafting_injector"
  },
  "tier": "DRACONIUM",
  "total_energy": 2000000
  },
  {
  id: "modpack:draconic_fusion/neutron_compressor",
  catalyst: {item: "gtceu:hv_machine_hull"},
  ingredients: [
    {"item": "draconicevolution:draconium_block"},
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis"}').strongNBT(),
    {"item": "draconicevolution:wyvern_core"},
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}').strongNBT(),
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}').strongNBT(),
    {"item": "extendedcrafting:compressor"},
    {"item": "extendedcompressor:extended_compressor"},
    {"item": "gtceu:taint_ingot"},
    {"item": "gtceu:taint_ingot"},
    {"item": "gtceu:hv_compressor"}
  ],
  "result": {
    "item": "avaritia:neutron_compressor"
  },
  "tier": "DRACONIUM",
  "total_energy": 1000000
  },
  {
  id: "modpack:draconic_fusion/dragonsteel_fire",
  catalyst: {item: "draconicevolution:awakened_draconium_block"},
  ingredients: [
    {"item": "draconicevolution:wyvern_core"},
    {"item": "malum:living_flesh"},
    {"item": "draconicevolution:wyvern_core"},
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:fire_dragonsteel"}}').strongNBT(),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:fire_dragonsteel"}}').strongNBT(),
    {"item": "gtceu:hot_silicon_ingot"},
    {"item": "botania:rune_fire"},
    {"item": "botania:rune_summer"},
  ],
  "result": {
    "item": "iceandfire:dragonsteel_fire_block",
    "amount": 5
  },
  "tier": "WYVERN",
  "total_energy": 3000000
  },
  {
  id: "modpack:draconic_fusion/dragonsteel_ice",
  catalyst: {item: "draconicevolution:awakened_draconium_block"},
  ingredients: [
    {"item": "draconicevolution:wyvern_core"},
    {"item": "divinerpg:frosted_allure"},
    {"item": "draconicevolution:wyvern_core"},
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:ice_dragonsteel"}}').strongNBT(),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:ice_dragonsteel"}}').strongNBT(),
    {"item": "simplyjetpacks:cryogenic_crystal"},
    {"item": "botania:rune_water"},
    {"item": "botania:rune_winter"},
  ],
  "result": {
    "item": "iceandfire:dragonsteel_ice_block",
    "amount": 5
  },
  "tier": "WYVERN",
  "total_energy": 3000000
  },
  {
  id: "modpack:draconic_fusion/dragonsteel_lightning",
  catalyst: {item: "draconicevolution:awakened_draconium_block"},
  ingredients: [
    {"item": "draconicevolution:wyvern_core"},
    {"item": "tinkers_advanced:activated_chromatic_steel"},
    {"item": "draconicevolution:wyvern_core"},
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:lightning_dragonsteel"}}').strongNBT(),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:lightning_dragonsteel"}}').strongNBT(),
    {"item": "simplyjetpacks:cryogenic_crystal"},
    {"item": "botania:rune_air"},
    {"item": "callfromthedepth_:energyinfernopowder"},
  ],
  "result": {
    "item": "iceandfire:dragonsteel_lightning_block",
    "amount": 5
  },
  "tier": "WYVERN",
  "total_energy": 3000000
  },
  {
  id: "modpack:dog/draconic_soul_fragment",
  catalyst: {item: "kubejs:void_sculk"},
  ingredients: [
    {"item": "malum:block_of_soul_stained_steel"},
    {"item": "tinkers_advanced:activated_chromatic_steel"},
    {"item": "draconicevolution:wyvern_core"},
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:soulsteel"}}').strongNBT(),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:soularium"}}').strongNBT(),
    {"item": "callfromthedepth_:transmutationstone"},
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:processed_soulstone"}').strongNBT(),
    {"item": "jaopca:storage_blocks.soulfire"},
    {"item": "gtceu:taint_block"},
  ],
  "result": {
    "item": "dog:draconic_soul_fragment",
    "amount": 8
  },
  "tier": "DRACONIC",
  "total_energy": 10000000
  },
  {
  id: "modpack:draconicevolution/awakened_fusion_injector",
  catalyst: {item: "draconicevolution:wyvern_crafting_injector"},
  ingredients: [
    {"item": "draconicevolution:awakened_core"},
    {"item": "draconicevolution:awakened_draconium_block"},
    {"item": "draconicevolution:awakened_core"},
    {"item": "draconicevolution:awakened_draconium_dust"},
    {"item": "draconicevolution:awakened_draconium_dust"},
    {"item": "kubejs:law_ingot"},
    {"item": "mysticalagriculture:dragon_egg_essence"},
    {"item": "mysticalagriculture:dragon_egg_essence"},
  ],
  "result": {
    "item": "draconicevolution:awakened_crafting_injector",
    "amount": 1
  },
  "tier": "WYVERN",
  "total_energy": 3000000
  },
  {
  id: "modpack:kubejs/chaos_infused",
  catalyst: {item: "minecraft:resin_bricks"},
  ingredients: [
    {"item": "draconicevolution:awakened_core"},
    {"item": "botania:black_hole_talisman"},
    {"item": "draconicevolution:awakened_core"},
    {"item": 'nuclearcraft:fuel_californium_lecf_249'},
    {"item": "draconicevolution:chaos_shard"},
    {"item": "iceandfire:dragonsteel_lightning_block"},
    {"item": "iceandfire:dragonsteel_ice_block"},
    {"item": "iceandfire:dragonsteel_fire_block"},
    {"item": "extrabotany:the_chaos"},
    {"item": "primalmagick:ambrosia_supreme_void"},
  ],
  "result": {
    "item": "kubejs:chaos_infused",
    "amount": 1
  },
  "tier": "DRACONIC",
  "total_energy": 10000000
  },
  {
  id: "modpack:kubejs/chaotic_core",
  catalyst: {item: "draconicevolution:large_chaos_frag"},
  ingredients: [
    {"item": "draconicevolution:awakened_core"},
    {"item": "botania:black_hole_talisman"},
    {"item": "draconicevolution:awakened_core"},
    {"item": 'nuclearcraft:fuel_californium_lecf_249'},
    {"item": "draconicevolution:chaos_shard"},
    {"item": "iceandfire:dragonsteel_lightning_block"},
    {"item": "iceandfire:dragonsteel_ice_block"},
    {"item": "iceandfire:dragonsteel_fire_block"},
    {"item": "extrabotany:the_chaos"},
    {"item": "primalmagick:ambrosia_supreme_void"},
  ],
  "result": {
    "item": "kubejs:chaos_infused",
    "amount": 1
  },
  "tier": "DRACONIC",
  "total_energy": 10000000
  },
  {
  id: "modpack:kubejs/chaos_bee",
  catalyst: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT(),
  ingredients: [
    {"item": "draconicevolution:awakened_core"},
    {"item": "draconicevolution:draconic_energy_core"},
    {"item": "draconicevolution:awakened_core"},
    {"item": 'draconicevolution:draconic_energy_core'},
    {"item": "draconicevolution:medium_chaos_frag"},
    {"item": "kubejs:seeneyes2"},
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:draconium"}').strongNBT(),
    Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT(),
    {"item": "mysticalagriculture:awakened_draconium_essence"},
    {"item": "gtceu:taint_ingot"},
  ],
  "result": Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:chaos"}}').strongNBT(),
  "tier": "DRACONIC",
  "total_energy": 10000000
  }
]
    de.forEach(recipe => {
        event.custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: recipe.catalyst,
        ingredients: recipe.ingredients,
        result: recipe.result,
        tier: recipe.tier,
        total_energy: recipe.total_energy
        }).id(recipe.id)
    })
})