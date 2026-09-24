// Reality Reversal: renewable Heavenly Calcinator inputs, 2026-09-12.
// Each entry yields one of the designated essence tier; other affinities remain.
// Override the SAME resource ID as its original definition: a second resource
// targeting the same item would depend on AffinityManager iteration order.
// High-priority data also survives regeneration of the low-priority global pack.
// Plain JSON and the established highPriorityData API avoid Rhino Java overloads.
ServerEvents.highPriorityData(function (event) {
  var entries = [
  {
    "resource": "minecraft:affinities/items/cobblestone",
    "item": "minecraft:cobblestone",
    "source": "earth",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 5
    },
    "values": {
      "earth": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/iron_ingot",
    "item": "minecraft:iron_ingot",
    "source": "earth",
    "tier": "shard",
    "amount": 20,
    "before": {
      "earth": 10
    },
    "values": {
      "earth": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/iron_block",
    "item": "minecraft:iron_block",
    "source": "earth",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/lodestone",
    "item": "minecraft:lodestone",
    "source": "earth",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 100
    }
  },
  {
    "resource": "minecraft:affinities/items/kelp",
    "item": "minecraft:kelp",
    "source": "sea",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 5,
      "sea": 5,
      "sun": 5
    },
    "values": {
      "earth": 5,
      "sea": 5,
      "sun": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/prismarine_shard",
    "item": "minecraft:prismarine_shard",
    "source": "sea",
    "tier": "shard",
    "amount": 20,
    "before": {
      "earth": 2,
      "sea": 10
    },
    "values": {
      "earth": 2,
      "sea": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/prismarine",
    "item": "minecraft:prismarine",
    "source": "sea",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1,
      "sea": 7
    },
    "values": {
      "earth": 1,
      "sea": 50
    }
  },
  {
    "resource": "minecraft:affinities/items/sea_lantern",
    "item": "minecraft:sea_lantern",
    "source": "sea",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 24,
      "sea": 52,
      "sun": 15
    },
    "values": {
      "earth": 24,
      "sea": 100,
      "sun": 15
    }
  },
  {
    "resource": "minecraft:affinities/items/string",
    "item": "minecraft:string",
    "source": "sky",
    "tier": "dust",
    "amount": 5,
    "before": {
      "sky": 5,
      "blood": 2
    },
    "values": {
      "sky": 5,
      "blood": 2
    }
  },
  {
    "resource": "minecraft:affinities/items/feather",
    "item": "minecraft:feather",
    "source": "sky",
    "tier": "shard",
    "amount": 20,
    "before": {
      "sky": 20,
      "blood": 5
    },
    "values": {
      "sky": 20,
      "blood": 5
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/bow",
    "item": "minecraft:bow",
    "source": "sky",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "sky": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/dispenser",
    "item": "minecraft:dispenser",
    "source": "sky",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "sky": 100
    }
  },
  {
    "resource": "minecraft:affinities/items/charcoal",
    "item": "minecraft:charcoal",
    "source": "sun",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 5,
      "infernal": 5
    },
    "values": {
      "earth": 5,
      "infernal": 5,
      "sun": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/torch",
    "item": "minecraft:torch",
    "source": "sun",
    "tier": "shard",
    "amount": 20,
    "before": {
      "earth": 2,
      "sun": 10
    },
    "values": {
      "earth": 2,
      "sun": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/glowstone",
    "item": "minecraft:glowstone",
    "source": "sun",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1,
      "sun": 7
    },
    "values": {
      "earth": 1,
      "sun": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/redstone_lamp",
    "item": "minecraft:redstone_lamp",
    "source": "sun",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "sun": 100
    }
  },
  {
    "resource": "minecraft:affinities/items/amethyst_shard",
    "item": "minecraft:amethyst_shard",
    "source": "moon",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 20
    },
    "values": {
      "earth": 20,
      "moon": 5
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/tinted_glass",
    "item": "minecraft:tinted_glass",
    "source": "moon",
    "tier": "shard",
    "amount": 20,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "moon": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/amethyst_block",
    "item": "minecraft:amethyst_block",
    "source": "moon",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "moon": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/daylight_detector",
    "item": "minecraft:daylight_detector",
    "source": "moon",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1,
      "sun": 7
    },
    "values": {
      "earth": 1,
      "sun": 7,
      "moon": 100
    }
  },
  {
    "resource": "minecraft:affinities/items/leather",
    "item": "minecraft:leather",
    "source": "blood",
    "tier": "dust",
    "amount": 5,
    "before": {
      "blood": 5
    },
    "values": {
      "blood": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/bone",
    "item": "minecraft:bone",
    "source": "blood",
    "tier": "shard",
    "amount": 20,
    "before": {
      "moon": 5,
      "blood": 10
    },
    "values": {
      "moon": 5,
      "blood": 20
    }
  },
  {
    "resource": "minecraft:affinities/items/bone_block",
    "item": "minecraft:bone_block",
    "source": "blood",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "moon": 10,
      "blood": 20
    },
    "values": {
      "moon": 10,
      "blood": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/cake",
    "item": "minecraft:cake",
    "source": "blood",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1,
      "sun": 3,
      "blood": 2
    },
    "values": {
      "earth": 1,
      "sun": 3,
      "blood": 100
    }
  },
  {
    "resource": "minecraft:affinities/items/nether_brick",
    "item": "minecraft:nether_brick",
    "source": "infernal",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 5,
      "infernal": 5
    },
    "values": {
      "earth": 5,
      "infernal": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/blaze_rod",
    "item": "minecraft:blaze_rod",
    "source": "infernal",
    "tier": "shard",
    "amount": 20,
    "before": {
      "infernal": 20
    },
    "values": {
      "infernal": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/fire_charge",
    "item": "minecraft:fire_charge",
    "source": "infernal",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1,
      "infernal": 8
    },
    "values": {
      "earth": 1,
      "infernal": 50
    }
  },
  {
    "resource": "minecraft:affinities/items/magma_block",
    "item": "minecraft:magma_block",
    "source": "infernal",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "infernal": 10
    },
    "values": {
      "infernal": 100
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/popped_chorus_fruit",
    "item": "minecraft:popped_chorus_fruit",
    "source": "void",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 4,
      "sun": 3
    },
    "values": {
      "earth": 4,
      "sun": 3,
      "void": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/ender_pearl",
    "item": "minecraft:ender_pearl",
    "source": "void",
    "tier": "shard",
    "amount": 20,
    "before": {
      "void": 20
    },
    "values": {
      "void": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/ender_eye",
    "item": "minecraft:ender_eye",
    "source": "void",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1,
      "void": 8
    },
    "values": {
      "earth": 1,
      "void": 50
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/ender_chest",
    "item": "minecraft:ender_chest",
    "source": "void",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 1,
      "void": 8
    },
    "values": {
      "earth": 1,
      "void": 100
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/gold_nugget",
    "item": "minecraft:gold_nugget",
    "source": "hallowed",
    "tier": "dust",
    "amount": 5,
    "before": {
      "earth": 6
    },
    "values": {
      "earth": 6,
      "hallowed": 5
    }
  },
  {
    "resource": "minecraft:affinities/items/gold_ingot",
    "item": "minecraft:gold_ingot",
    "source": "hallowed",
    "tier": "shard",
    "amount": 20,
    "before": {
      "earth": 10
    },
    "values": {
      "earth": 10,
      "hallowed": 20
    }
  },
  {
    "resource": "realityreversal:affinities/items/minecraft/gold_block",
    "item": "minecraft:gold_block",
    "source": "hallowed",
    "tier": "crystal",
    "amount": 50,
    "before": {
      "earth": 1
    },
    "values": {
      "earth": 1,
      "hallowed": 50
    }
  },
  {
    "resource": "minecraft:affinities/items/nether_star",
    "item": "minecraft:nether_star",
    "source": "hallowed",
    "tier": "cluster",
    "amount": 100,
    "before": {
      "earth": 25,
      "sea": 25,
      "sky": 25,
      "sun": 25,
      "moon": 25,
      "blood": 25,
      "infernal": 25,
      "void": 25,
      "hallowed": 25
    },
    "values": {
      "earth": 25,
      "sea": 25,
      "sky": 25,
      "sun": 25,
      "moon": 25,
      "blood": 25,
      "infernal": 25,
      "void": 25,
      "hallowed": 100
    }
  }
];
  entries.forEach(function (entry) {
    event.addJson(entry.resource, {
      type: 'item', target: entry.item, set: entry.values
    });
  });
});
