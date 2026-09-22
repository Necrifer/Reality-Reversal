
(function(){
var groups=[
  {
    "type": "anomalous_condenser_recipes",
    "recipes": [
      {
        "id": "minecraft:reality",
        "duration": 1000,
        "inputs": [
          {
            "item": "minecraft:lava_bucket",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:eternal_fluid_bucket",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/reality",
        "EUt": 480
      },
      {
        "id": "minecraft:worldthread",
        "duration": 1000,
        "inputs": [
          {
            "item": "minecraft:string",
            "count": 3
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:world_thread",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/worldthread",
        "EUt": 480
      },
      {
        "id": "minecraft:solid_static",
        "duration": 1000,
        "inputs": [
          {
            "tag": "forge:sand",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:solid_static",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/solid_static",
        "EUt": 480
      },
      {
        "id": "minecraft:clod_block",
        "duration": 1000,
        "inputs": [
          {
            "tag": "forge:storage_blocks/coal",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:clod_block",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/clod_block",
        "EUt": 480
      },
      {
        "id": "minecraft:amalgam_block",
        "duration": 1000,
        "inputs": [
          {
            "tag": "forge:storage_blocks/gold",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:amalgam_block",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/amalgam_block",
        "EUt": 480
      },
      {
        "id": "minecraft:reality_fabric",
        "duration": 1000,
        "inputs": [
          {
            "tag": "forge:stone",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:black_fabric",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/reality_fabric",
        "EUt": 480
      },
      {
        "id": "minecraft:leak",
        "duration": 1000,
        "inputs": [
          {
            "item": "minecraft:water_bucket",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "dimdoors:leak_bucket",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/leak",
        "EUt": 480
      }
    ]
  },
  {
    "type": "dim_tear_recipes",
    "recipes": [
      {
        "id": "modpack:sunken_city_portal",
        "duration": 240,
        "inputs": [
          {
            "item": "kubejs:breach",
            "count": 1
          }],
          "inputFluids": [
            {
              "fluid": "#forge:deuterium",
              "amount": 32000
            }],
          "outputs": [{
            "item": "kubejs:containment_failure"
          }],
          "gtId": "modpack:containment_failure",
          "EUt": 896
        }
      ] 
    },
  {
    "type": "foundational_breaker_recipes",
    "recipes": [
      {
        "id": "modpack:spellcloth",
        "duration": 10,
        "inputs": [
          {
            "item": "#primalmagick:essences/terrestrial_dusts",
            "count": 25
          },
          {
            "item": "#c:strings",
            "count": 3
          },
          {
            "item": "#minecraft:wool",
            "count": 3
          }
        ],
        "outputs": [
          {
            "item": "primalmagick:spellcloth",
            "count": 5
          }
        ],
        "gtId": "modpack:primal_gregtech/spellcloth",
        "EUt": 256
      },
      {
        "id": "modpack:hexweave",
        "duration": 10,
        "inputs": [
          {
            "item": "#primalmagick:essences/forbidden_shards",
            "count": 10
          },
          {
            "item": "primalmagick:spellcloth",
            "count": 3
          },
          {
            "item": "botania:mana_string",
            "count": 4
          }
        ],
        "outputs": [
          {
            "item": "primalmagick:hexweave",
            "count": 2
          }
        ],
        "gtId": "modpack:primal_gregtech/hexweave",
        "EUt": 256
      },
      {
        "id": "modpack:saintswool",
        "duration": 10,
        "inputs": [
          {
            "item": "primalmagick:essence_crystal_hallowed",
            "count": 10
          },
          {
            "item": "primalmagick:hexweave",
            "count": 3
          },
          {
            "item": "botania:mana_string",
            "count": 4
          }
        ],
        "outputs": [
          {
            "item": "primalmagick:saintswool",
            "count": 2
          }
        ],
        "gtId": "modpack:primal_gregtech/saintswool",
        "EUt": 256
      },
      {
        "id": "modpack:easier_botania",
        "duration": 100,
        "inputs": [
          {
            "item": "divinerpg:fury_fire",
            "count": 16
          },
          {
            "item": "aoa3:archaic_token",
            "count": 5
          },
          {
            "item": "minecraft:dragon_egg",
            "count": 2
          }
        ],
        "inputFluids": [
          {
            "fluid": "nuclearcraft:oxygen",
            "amount": 2000
          }
        ],
        "outputs": [
          {
            "item": "botania:terrasteel_ingot",
            "count": 8
          },
          {
            "item": "botania:life_essence",
            "count": 5
          },
          {
            "item": "naturesaura:gold_leaf",
            "count": 16
          }
        ],
        "gtId": "modpack:gt_port/modpack/easier_botania",
        "EUt": 1920
      },
      {
        "id": "minecraft:foundation",
        "duration": 100,
        "inputs": [
          {
            "item": "actuallyadditions:empowered_canola_seed",
            "count": 7
          },
          {
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:iron\"}"
          },
          {
            "item": "kubejs:eyes1",
            "count": 5
          },
          {
            "item": "nuclearcraft:fuel_uranium_heu_235",
            "count": 5
          }
        ],
        "inputFluids": [
          {
            "fluid": "kubejs:fluid_charged_fluix",
            "amount": 10000
          }
        ],
        "outputs": [
          {
            "item": "kubejs:eyes2",
            "count": 1
          }
        ],
        "gtId": "modpack:gt_port/minecraft/foundation",
        "EUt": 1920
      },
      {
        "id": "modpack:error_recipe",
        "duration": 100,
        "inputs": [
          {
            "item": "biomesoplenty:null_block",
            "count": 1
          },
          {
            "item": "kubejs:stellarium_ingot",
            "count": 16
          },
          {
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:gold\"}"
          }
        ],
        "inputFluids": [
          {
            "fluid": "nuclearcraft:hydrogen",
            "amount": 1500
          }
        ],
        "outputs": [
          {
            "item": "biomesoplenty:null_block",
            "count": 4
          },
          {
            "item": "biomesoplenty:null_end_stone",
            "count": 4
          },
          {
            "item": "biomesoplenty:null_leaves",
            "count": 4
          },
          {
            "item": "biomesoplenty:anomaly",
            "count": 4
          }
        ],
        "gtId": "modpack:gt_port/modpack/error_recipe",
        "EUt": 1920
      },
      {
        "id": "modpack:aether_recall",
        "duration": 100,
        "inputs": [
          {
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:gold\"}"
          },
          {
            "item": "naturesaura:token_joy",
            "count": 3
          },
          {
            "item": "kubejs:law_ingot",
            "count": 8
          },
          {
            "item": "naturesaura:aura_bottle",
            "count": 5,
            "nbt": "{stored_type:\"naturesaura:overworld\"}"
          }
        ],
        "outputs": [
          {
            "item": "aether:ambrosium_shard",
            "count": 16
          },
          {
            "item": "aether:enchanted_gravitite",
            "count": 16
          },
          {
            "item": "aether:zanite_gemstone",
            "count": 16
          },
          {
            "item": "mna:vinteum_ore",
            "count": 16
          }
        ],
        "gtId": "modpack:gt_port/modpack/aether_recall",
        "EUt": 1920
      }
    ]
  },
  {
    "type": "implosion_compressor",
    "recipes": [
      {
        "id": "modpack:stellarium_bulk",
        "duration": 200,
        "inputs": [
          {
            "item": "minecraft:tnt",
            "count": 5
          },
          {
            "item": "enderio:end_steel_ingot",
            "count": 8
          },
          {
            "item": "mysticalagradditions:nether_star_crux",
            "count": 2
          }
        ],
        "outputs": [
          {
            "item": "kubejs:stellarium_ingot",
            "count": 92
          }
        ],
        "inputEU": 2000,
        "gtId": "modpack:gt_port/modpack/stellarium",
        "EUt": 256
      }
    ]
  },
  {
    "type": "taint_replicant_recipes",
    "recipes": [
      {
        "id": "modpack:energy_from_sculk",
        "duration": 36000,
        "inputs": [
          {
            "item": "kubejs:void_sculk",
            "count": 1
          }
        ],
        "EUt": -2048,
        "gtId": "modpack:gt_port/modpack/energy_from_sculk" 
      },
      {
        "id": "modpack:draconic_fusion",
        "duration": 600,
        "inputs": [
          {
            "item": "draconicevolution:awakened_draconium_block",
            "count": 1
          },
          {
            "item": "draconicevolution:draconium_core",
            "count": 4
          },
          {
            "item": "iceandfire:dragonsteel_lightning_ingot",
            "count": 3
          }],
          "outputs": [{
            "item": "draconicevolution:basic_crafting_injector",
          "count": 12
          }
        ],
          "inputEU": 2000,
          "gtId": "modpack:gt_port/modpack/draconic_fusion",
          "EUt": 4
      },
    ]
  },
  {
    "type": "corruption_containment_recipes",
    "recipes": [
      {
        "id": "minecraft:void_recontainment",
        "duration": 1000,
        "inputs": [
          {
            "item": "primalmagick:essence_cluster_void",
            "count": 1
          },
          {
            "item": "botania:rune_mana",
            "count": 3
          },
          {
            "item": "callfromthedepth_:sculkhearth",
            "count": 1
          }
        ],
        "inputFluids": [
          {
            "fluid": "dimdoors:leak",
            "amount": 500
          }
        ],
        "inputFE": 200000,
        "outputs": [
          {
            "item": "kubejs:void_sculk",
            "count": 2
          }
        ],
        "gtId": "modpack:gt_port/minecraft/void_recontainment",
        "EUt": 50
      },
      {
        "id": "minecraft:void_explorer",
        "duration": 100,
        "inputs": [
          {
            "item": "callfromthedepth_:immemorialingot",
            "count": 3
          },
          {
            "item": "callfromthedepth_:soulingot",
            "count": 3
          }
        ],
        "outputs": [
          {
            "item": "astral_dimension:void_gem",
            "count": 5
          },
          {
            "item": "astral_dimension:void_shards",
            "count": 8
          }
        ],
        "gtId": "modpack:gt_port/minecraft/void_explorer",
        "EUt": 480
      }
    ]
  },
  {
    "type": "soul_capturer_recipes",
    "recipes": [
      {
        "id": "minecraft:innocent_spirit",
        "duration": 100,
        "inputs": [
          {
            "item": "naturesaura:sky_ingot",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:aerial_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/innocent_spirit",
        "EUt": 480
      },
      {
        "id": "minecraft:infernal_soul",
        "duration": 100,
        "inputs": [
          {
            "item": "botania:rune_fire",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:infernal_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/infernal_soul",
        "EUt": 480
      },
      {
        "id": "minecraft:sacred_soul",
        "duration": 100,
        "inputs": [
          {
            "item": "naturesaura:pet_reviver",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:sacred_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/sacred_soul",
        "EUt": 480
      },
      {
        "id": "minecraft:wicked_soul",
        "duration": 100,
        "inputs": [
          {
            "item": "primalmagick:essence_crystal_void",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:wicked_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/wicked_soul",
        "EUt": 480
      },
      {
        "id": "minecraft:eldritch_soul",
        "duration": 100,
        "inputs": [
          {
            "item": "naturesaura:depth_ingot",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:eldritch_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/eldritch_soul",
        "EUt": 480
      },
      {
        "id": "minecraft:malicious_spirit",
        "duration": 100,
        "inputs": [
          {
            "item": "primalmagick:rune_earth",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:earthen_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/malicious_spirit",
        "EUt": 480
      },
      {
        "id": "minecraft:arcane_spirit",
        "duration": 100,
        "inputs": [
          {
            "item": "botania:rune_mana",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:arcane_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/arcane_spirit",
        "EUt": 480
      },
      {
        "id": "minecraft:water_soul",
        "duration": 100,
        "inputs": [
          {
            "item": "botania:rune_water",
            "count": 1
          }
        ],
        "outputs": [
          {
            "item": "malum:aqueous_spirit",
            "count": 3
          }
        ],
        "gtId": "modpack:gt_port/minecraft/water_soul",
        "EUt": 480
      }
    ]
  },
];
ServerEvents.recipes(function(event){
 // Register custom types in startup_scripts and fully restart after adding them.
 // Missing namespace members otherwise produce Rhino's misleading default-value error.
 groups.forEach(function(group){
  if (typeof event.recipes.gtceu[group.type] !== 'function') {
   throw new Error('[GT recipes] Missing recipe type gtceu:' + group.type + '. Check the exact built-in recipe type ID first. For a custom type, register it in GTCEuStartupEvents.registry("gtceu:recipe_type") and fully restart Minecraft.');
  }
 });
 groups.forEach(function(group){ group.recipes.forEach(function(r){
  var b=event.recipes.gtceu[group.type](r.gtId).duration(r.duration);
  if (r.outputEU != null) {
   // One completion payout, not EU/t. 50,000 EU = 200,000 FE at the pack's 4:1 ratio.
   b.perTick(false).outputEU(r.outputEU, 1);
  } else {
   b.EUt(r.EUt);
  }
  (r.inputs||[]).forEach(function(i){b.itemInputs(i.nbt?Item.of(i.item,i.nbt).withCount(i.count||1).strongNBT():((i.count||1)+'x '+(i.tag?'#'+i.tag:i.item)));});
  (r.outputs||[]).forEach(function(i){b.itemOutputs((i.count||1)+'x '+i.item);});
  // Tags describe alternatives; Fluid.of only constructs a specific fluid stack.
  (r.inputFluids||[]).forEach(function(f){b.inputFluids(f.fluid.charAt(0)==='#' ? f.fluid+' '+f.amount : Fluid.of(f.fluid,f.amount));});
  (r.outputFluids||[]).forEach(function(f){b.outputFluids(Fluid.of(f.fluid,f.amount));});
 }); });
});
})();
