// Use the native fluid-container model so selected resource-pack fluid textures remain available.
ClientEvents.generateAssets('after_mods', function (event) {
  var resources = {
  "gtna:models/item/chronomatic_glass_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:chronomatic_glass"
  },
  "gtna:models/item/eternity_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:eternity"
  },
  "gtna:models/item/hypogen_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:hypogen"
  },
  "gtna:models/item/infinity_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:infinity"
  },
  "gtna:models/item/phonon_medium_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:phonon_medium"
  },
  "gtna:models/item/raw_star_matter_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:raw_star_matter"
  },
  "gtna:models/item/rhugnor_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:rhugnor"
  },
  "gtna:models/item/white_dwarf_matter_bucket.json": {
    "parent": "neoforge:item/bucket",
    "apply_tint": true,
    "flip_gas": false,
    "loader": "neoforge:fluid_container",
    "fluid": "gtna:white_dwarf_matter"
  }
};
  Object.keys(resources).forEach(function (id) {
    event.json(id, resources[id]);
  });
});
