// Converted from void_miner.js for Minecraft 1.21.1 NeoForge.
(function () {

function materialize(v) {
  if (Array.isArray(v)) return v.map(materialize);
  if (!v || typeof v !== 'object') return v;
  if (v._stack) return Item.of(v.id, v.count || 1, v.components || {});
  if (v._ingredient) return Ingredient.of(v.json).withCount(v.count || 1);
  if (v._fluid) return Fluid.of(v.id, v.amount);
  var o = {}; Object.keys(v).forEach(function (k) { o[k] = materialize(v[k]); }); return o;
}

const records = [
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:netherite_scrap",
          "count": 2
        },
        "count": 2,
        "weight": 0.25
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/netherite_scrap"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:diamond_ore",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/diamond_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:coal_ore",
          "count": 1
        },
        "count": 1,
        "weight": 15
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/coal_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:iron_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/iron_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:copper_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/copper_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "actuallyadditions:black_quartz_ore",
          "count": 1
        },
        "count": 1,
        "weight": 10
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/black_quartz_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:redstone_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11.5
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/redstone_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:lapis_ore",
          "count": 1
        },
        "count": 1,
        "weight": 10
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/lapis_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:gold_ore",
          "count": 1
        },
        "count": 1,
        "weight": 12.6
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/gold_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:emerald_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/emerald_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:nether_quartz_ore",
          "count": 1
        },
        "count": 1,
        "weight": 15
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/nether_quartz_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "minecraft:ancient_debris",
          "count": 1
        },
        "count": 1,
        "weight": 1
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/ancient_debris"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "divinerpg:realmite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/realmite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "divinerpg:bloodgem_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/bloodgem_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "aoa3:emberstone_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/emberstone_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "aoa3:jade_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/jade_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "aoa3:runium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/runium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "aoa3:limonite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/limonite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "divinerpg:arlemite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/arlemite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "divinerpg:rupee_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11.5
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/rupee_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "draconicevolution:overworld_draconium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/draconium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "bigreactors:anglesite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 8
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/anglesite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "bigreactors:benitoite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 8
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/benitoite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mekanism:tin_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/tin_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mekanism:osmium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/osmium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "aether:ambrosium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/ambrosium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mekanism:uranium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 3
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/uranium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mekanism:fluorite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 6
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/fluorite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mekanism:lead_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/lead_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mysticalagriculture:prosperity_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/prosperity_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mysticalagriculture:inferium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/inferium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "mysticalagriculture:soulium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/soulium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "oritech:nickel_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/nickel_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "immersiveengineering:ore_aluminum",
          "count": 1
        },
        "count": 1,
        "weight": 13
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/aluminium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "rftoolsbase:dimensionalshard_overworld",
          "count": 1
        },
        "count": 1,
        "weight": 0.1
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/dimensionalshard_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "nuclearcraft:boron_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/boron_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "nuclearcraft:lithium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/lithium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "nuclearcraft:magnesium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/magnesium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "nuclearcraft:thorium_ore",
          "count": 1
        },
        "count": 1,
        "weight": 10
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/thorium_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "voidminersremastered:rubetine",
          "count": 1
        },
        "count": 1,
        "weight": 1
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/rubetine"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 1,
        "item": {
          "id": "voidminersremastered:aurantium",
          "count": 1
        },
        "count": 1,
        "weight": 1
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/aurantium"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "voidminersremastered:citrinetine",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/citrinetine"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "aether:zanite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/zanite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "aether:gravitite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 11
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/gravitite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "divinerpg:anthracite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/anthracite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "divinerpg:oxdrite_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/oxdrite_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "malum:soulstone_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/soulstone_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "malum:blazing_quartz_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/blazing_quartz_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 2,
        "item": {
          "id": "malum:cthonic_gold_ore",
          "count": 1
        },
        "count": 1,
        "weight": 9
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/cthonic_gold_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 3,
        "item": {
          "id": "primalmagick:rock_salt_ore",
          "count": 1
        },
        "count": 1,
        "weight": 5
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/rock_salt_ore"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 3,
        "item": {
          "id": "voidminersremastered:verdium",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/verdium"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 4,
        "item": {
          "id": "voidminersremastered:azurine",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/azurine"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 5,
        "item": {
          "id": "voidminersremastered:caerium",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/caerium"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 6,
        "item": {
          "id": "voidminersremastered:amethystine",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/amethystine"
        ]
      ]
    ],
    "source": "void_miner.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "voidminersremastered:miner",
        "dimension": "javd:void",
        "minTier": 7,
        "item": {
          "id": "voidminersremastered:rosarium",
          "count": 1
        },
        "count": 1,
        "weight": 2
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:voidminers/rosaium"
        ]
      ]
    ],
    "source": "void_miner.js"
  }
];

ServerEvents.recipes(function (event) {
  records.forEach(function (r) {
    try {
      var a = r.kind === 'custom' ? r.args : materialize(r.args);
      var b;
      if (r.kind === 'custom') b = event.custom(a[0]);
      else if (r.kind === 'remove') { event.remove(a[0]); return; }
      else if (r.kind === 'replaceInput') { event.replaceInput(a[0], a[1], a[2]); return; }
      else if (r.kind === 'replaceOutput') { event.replaceOutput(a[0], a[1], a[2]); return; }
      else {
        var p = r.kind.split(':');
        var fn = p[0] === 'minecraft' ? event[p[1]] : event.recipes[p[0]][p[1]];
        if (typeof fn !== 'function') throw new Error('Missing target builder ' + r.kind);
        b = Function.prototype.apply.call(fn, p[0] === 'minecraft' ? event : event.recipes[p[0]], a);
      }
      (r.steps || []).forEach(function (step) {
        if (step[0] === 'id' || step[0] !== 'perTick') b = Function.prototype.apply.call(b[step[0]], b, materialize(step[1]));
        else b = Function.prototype.apply.call(b.perTick, b, step[1]);
      });
    } catch (error) { console.error('[1.21.1 port] ' + r.source + ' / ' + r.kind + ': ' + error); }
  });
});
})();
