// Exact item/fluid counts, NBT and durations from live scripts.
// Provisional 480 EU/t for formerly unpowered recipes. Existing FE totals /4/duration.
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
    "type": "foundational_breaker_recipes",
    "recipes": [
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
 groups.forEach(function(group){ group.recipes.forEach(function(r){
  var b=event.recipes.gtceu[group.type](r.gtId).duration(r.duration).EUt(r.EUt);
  (r.inputs||[]).forEach(function(i){b.itemInputs(i.nbt?Item.of(i.item,i.nbt).withCount(i.count||1).strongNBT():((i.count||1)+'x '+(i.tag?'#'+i.tag:i.item)));});
  (r.outputs||[]).forEach(function(i){b.itemOutputs((i.count||1)+'x '+i.item);});
  (r.inputFluids||[]).forEach(function(f){b.inputFluids(Fluid.of(f.fluid,f.amount));});
  (r.outputFluids||[]).forEach(function(f){b.outputFluids(Fluid.of(f.fluid,f.amount));});
 }); });
});
})();
