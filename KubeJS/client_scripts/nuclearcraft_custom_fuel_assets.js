// Reuse installed NuclearCraft molten-fuel model/state templates for the preserved custom fuel.
ClientEvents.generateAssets('after_mods', function (event) {
  var resources = {
  "nuclearcraft:models/item/molten_fuel_reality_rfe_1_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_fuel_reality_rfe_1",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_fuel_reality_rfe_1_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_fuel_reality_rfe_1_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_fuel_reality_rfe_1_ni_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_fuel_reality_rfe_1_ni",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_fuel_reality_rfe_1_ni_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_fuel_reality_rfe_1_ni_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ni_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_fuel_reality_rfe_1_ox_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_fuel_reality_rfe_1_ox",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_fuel_reality_rfe_1_ox_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_fuel_reality_rfe_1_ox_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_ox_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_fuel_reality_rfe_1_za_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_fuel_reality_rfe_1_za",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_fuel_reality_rfe_1_za_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_fuel_reality_rfe_1_za_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_fuel_reality_rfe_1_za_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_depleted_fuel_reality_rfe_1_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_depleted_fuel_reality_rfe_1",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_depleted_fuel_reality_rfe_1_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_depleted_fuel_reality_rfe_1_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_depleted_fuel_reality_rfe_1_ni_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_depleted_fuel_reality_rfe_1_ni",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_depleted_fuel_reality_rfe_1_ni_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_depleted_fuel_reality_rfe_1_ni_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ni_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_depleted_fuel_reality_rfe_1_ox_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_depleted_fuel_reality_rfe_1_ox",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_depleted_fuel_reality_rfe_1_ox_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_depleted_fuel_reality_rfe_1_ox_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_ox_block"
      }
    }
  },
  "nuclearcraft:models/item/molten_depleted_fuel_reality_rfe_1_za_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "fluid": "nuclearcraft:molten_depleted_fuel_reality_rfe_1_za",
    "loader": "neoforge:fluid_container"
  },
  "nuclearcraft:models/block/molten_depleted_fuel_reality_rfe_1_za_block.json": {
    "textures": {
      "particle": "nuclearcraft:block/fluid/molten_still"
    }
  },
  "nuclearcraft:blockstates/molten_depleted_fuel_reality_rfe_1_za_block.json": {
    "variants": {
      "level=0": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=1": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=10": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=11": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=12": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=13": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=14": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=15": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=2": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=3": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=4": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=5": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=6": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=7": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=8": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      },
      "level=9": {
        "model": "nuclearcraft:block/molten_depleted_fuel_reality_rfe_1_za_block"
      }
    }
  }
};
  Object.keys(resources).forEach(function (id) {
    event.json(id, resources[id]);
  });
});
