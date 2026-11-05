// Converted from primal_magick.js for Minecraft 1.21.1 NeoForge.
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
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:primalite_ingot"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_sun_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_sun"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_sun",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:crystal_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_sun_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_earth_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_earth"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_earth",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:crystal_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_earth_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_sea_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_sea"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_sea",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:crystal_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_sea_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_sky_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_sky"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_sky",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:crystal_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_sky_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_moon_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_moon"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_moon",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:crystal_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_moon_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_blood_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_blood"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_blood",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:crystal_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_blood"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_blood_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_infernal_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_infernal"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_infernal",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:crystal_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_infernal"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_infernal_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_void_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_void"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_void",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:crystal_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_void"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_void_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_crystal_hallowed_from_shard"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_crystal",
        "key": {
          "#": {
            "item": "primalmagick:essence_shard_hallowed"
          },
          "Q": {
            "item": "botania:quartz_mana"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_crystal_hallowed",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:crystal_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_hallowed"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_crystal_hallowed_from_shard"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_sun_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_sun"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_sun",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:cluster_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_sun_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_earth_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_earth"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_earth",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:cluster_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_earth_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_sea_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_sea"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_sea",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:cluster_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_sea_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_sky_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_sky"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_sky",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:cluster_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_sky_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_moon_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_moon"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_moon",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:cluster_synthesis"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_moon_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_blood_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_blood"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_blood",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:cluster_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_blood"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_blood_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_infernal_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_infernal"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_infernal",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:cluster_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_infernal"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_infernal_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_void_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_void"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_void",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:cluster_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_void"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_void_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:essence_cluster_hallowed_from_crystal"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "group": "essence_cluster",
        "key": {
          "#": {
            "item": "primalmagick:essence_crystal_hallowed"
          },
          "Q": {
            "item": "actuallyadditions:ethetic_green_block"
          }
        },
        "pattern": [
          "###",
          "#Q#",
          "###"
        ],
        "result": {
          "id": "primalmagick:essence_cluster_hallowed",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:and",
          "subRequirements": [
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:cluster_synthesis"
              }
            },
            {
              "requirement_type": "primalmagick:research",
              "rootKey": {
                "key_type": "primalmagick:research_entry",
                "rootKey": "primalmagick:discover_hallowed"
              }
            }
          ]
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:essence_cluster_hallowed_from_crystal"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "file": "primal_magick.js",
    "kind": "remove",
    "args": [
      {
        "id": "primalmagick:magnifying_glass"
      }
    ],
    "steps": [],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "key": {
          "G": {
            "tag": "c:glass_panes/colorless"
          },
          "I": {
            "item": "aoa3:ghastly_ingot"
          },
          "S": {
            "tag": "c:rods/wooden"
          }
        },
        "pattern": [
          " I ",
          "IGI",
          "SI "
        ],
        "result": {
          "id": "primalmagick:magnifying_glass",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_stage",
            "rootKey": "primalmagick:first_steps",
            "stage": 2
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:magnifying_glass"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shapeless",
        "ingredients": [
          {
            "item": "aether:ambrosium_shard"
          },
          {
            "item": "primalmagick:essence_dust_earth"
          },
          {
            "item": "primalmagick:essence_dust_sea"
          },
          {
            "item": "primalmagick:essence_dust_sky"
          },
          {
            "item": "primalmagick:essence_dust_sun"
          },
          {
            "item": "primalmagick:essence_dust_moon"
          }
        ],
        "result": {
          "id": "primalmagick:primalite_ingot",
          "count": 1
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:primalite"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "primalmagick:primalite_ingot"
        ]
      ]
    ],
    "source": "primal_magick.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "primalmagick:arcane_crafting_shaped",
        "pattern": [
          "ABC",
          "DEF",
          "GHI"
        ],
        "key": {
          "A": {
            "item": "primalmagick:essence_shard_infernal"
          },
          "B": {
            "item": "malum:eldritch_spirit"
          },
          "C": {
            "item": "primalmagick:essence_shard_earth"
          },
          "D": {
            "item": "malum:arcane_spirit"
          },
          "E": {
            "item": "minecraft:dirt"
          },
          "F": {
            "item": "malum:wicked_spirit"
          },
          "G": {
            "item": "primalmagick:essence_shard_hallowed"
          },
          "H": {
            "item": "malum:sacred_spirit"
          },
          "I": {
            "item": "primalmagick:essence_shard_sea"
          }
        },
        "result": {
          "id": "mysticalagriculture:prudentium_farmland",
          "count": 1
        },
        "mana": {
          "sources": {
            "primalmagick:hallowed": 25,
            "primalmagick:earth": 25,
            "primalmagick:infernal": 25,
            "primalmagick:sea": 25
          }
        },
        "requirement": {
          "requirement_type": "primalmagick:research",
          "rootKey": {
            "key_type": "primalmagick:research_entry",
            "rootKey": "primalmagick:basic_sorcery"
          }
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "mysticalagriculture:prudentium_farmland"
        ]
      ]
    ],
    "source": "primal_magick.js"
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
