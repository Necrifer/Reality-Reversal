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