// GTCEu 7.0.1 native vein data; current registry IDs and JSON codec.
// Generated before worldgen decoding, including client registry previews.
ServerEvents.generateData('after_mods', function (event) {
  var veins = {
  "gtceu:gtceu/ore_vein/end_bauxite.json": {
    "biomes": "#minecraft:is_end",
    "cluster_size": {
      "type": "minecraft:uniform",
      "max_inclusive": 40,
      "min_inclusive": 32
    },
    "density": 0.3,
    "dimension_filter": [
      "minecraft:the_end"
    ],
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
      "type": "gtceu:layer",
      "layer_patterns": [
        [
          {
            "max_size": 6,
            "min_size": 1,
            "targets": [
              [
                {
                  "state": {
                    "Name": "minecraft:end_stone"
                  },
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "c:end_stone_ore_replaceables"
                  }
                }
              ]
            ],
            "weight": 2
          },
          {
            "max_size": 2,
            "min_size": 1,
            "targets": [
              "gtceu:ilmenite"
            ],
            "weight": 1
          },
          {
            "max_size": 1,
            "min_size": 1,
            "targets": [
              "gtceu:aluminium"
            ],
            "weight": 1
          }
        ]
      ]
    },
    "height_range": {
      "height": {
        "type": "minecraft:uniform",
        "max_inclusive": {
          "absolute": 80
        },
        "min_inclusive": {
          "absolute": 10
        }
      }
    },
    "indicators": [],
    "layer": "endstone",
    "weight": 40
  },
  "gtceu:gtceu/ore_vein/mica.json": {
    "biomes": "#minecraft:is_overworld",
    "cluster_size": {
      "type": "minecraft:uniform",
      "max_inclusive": 40,
      "min_inclusive": 32
    },
    "density": 0.25,
    "dimension_filter": [
      "minecraft:overworld"
    ],
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
      "type": "gtceu:layer",
      "layer_patterns": [
        [
          {
            "max_size": 4,
            "min_size": 2,
            "targets": [
              "gtceu:kyanite"
            ],
            "weight": 3
          },
          {
            "max_size": 1,
            "min_size": 1,
            "targets": [
              "gtceu:mica"
            ],
            "weight": 2
          },
          {
            "max_size": 1,
            "min_size": 1,
            "targets": [
              "gtceu:pollucite"
            ],
            "weight": 1
          }
        ]
      ]
    },
    "height_range": {
      "height": {
        "type": "minecraft:uniform",
        "max_inclusive": {
          "absolute": -10
        },
        "min_inclusive": {
          "absolute": -40
        }
      }
    },
    "indicators": [
      {
        "type": "gtceu:surface",
        "block": "gtceu:mica",
        "density": 0.2,
        "placement": "surface",
        "radius": 3
      }
    ],
    "layer": "deepslate",
    "weight": 20
  },
  "gtceu:gtceu/ore_vein/sulfur.json": {
    "biomes": "#minecraft:is_nether",
    "cluster_size": {
      "type": "minecraft:uniform",
      "max_inclusive": 40,
      "min_inclusive": 32
    },
    "density": 0.2,
    "dimension_filter": [
      "minecraft:the_nether"
    ],
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
      "type": "gtceu:layer",
      "layer_patterns": [
        [
          {
            "max_size": 4,
            "min_size": 2,
            "targets": [
              "gtceu:sulfur"
            ],
            "weight": 3
          },
          {
            "max_size": 1,
            "min_size": 1,
            "targets": [
              "gtceu:pyrite"
            ],
            "weight": 2
          }
        ]
      ]
    },
    "height_range": {
      "height": {
        "type": "minecraft:uniform",
        "max_inclusive": {
          "absolute": 30
        },
        "min_inclusive": {
          "absolute": 10
        }
      }
    },
    "indicators": [
      {
        "type": "gtceu:surface",
        "block": "gtceu:sulfur",
        "density": 0.2,
        "placement": "above",
        "radius": 5
      }
    ],
    "layer": "netherrack",
    "weight": 100
  },
  "kubejs:gtceu/ore_vein/mars_bauxite_vein.json": {
    "cluster_size": 36,
    "density": 0.3,
    "dimension_filter": [
      "ad_astra:mars"
    ],
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
      "type": "gtceu:layer",
      "layer_patterns": [
        [
          {
            "weight": 1,
            "min_size": 1,
            "max_size": 4,
            "targets": [
              [
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "ad_astra:mars_stone_replaceables"
                  },
                  "state": {
                    "Name": "gtceu:bauxite_ore"
                  }
                }
              ]
            ]
          }
        ]
      ]
    },
    "height_range": {
      "height": {
        "type": "minecraft:uniform",
        "min_inclusive": {
          "absolute": -32
        },
        "max_inclusive": {
          "absolute": 48
        }
      }
    },
    "indicators": [],
    "layer": "rr_mars_ore_layer",
    "weight": 40
  },
  "kubejs:gtceu/ore_vein/moon_sphalerite_vein.json": {
    "cluster_size": 36,
    "density": 0.2,
    "dimension_filter": [
      "ad_astra:moon"
    ],
    "discard_chance_on_air_exposure": 0.0,
    "generator": {
      "type": "gtceu:layer",
      "layer_patterns": [
        [
          {
            "weight": 1,
            "min_size": 1,
            "max_size": 4,
            "targets": [
              [
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "ad_astra:moon_stone_replaceables"
                  },
                  "state": {
                    "Name": "gtceu:sphalerite_ore"
                  }
                }
              ]
            ]
          }
        ]
      ]
    },
    "height_range": {
      "height": {
        "type": "minecraft:uniform",
        "min_inclusive": {
          "absolute": -32
        },
        "max_inclusive": {
          "absolute": 48
        }
      }
    },
    "indicators": [],
    "layer": "rr_moon_ore_layer",
    "weight": 100
  }
};
  Object.keys(veins).forEach(function (path) { event.json(path, veins[path]); });
});
