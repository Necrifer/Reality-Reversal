// Native GT recipe resources avoid the incompatible empty-condition fluent constructor.
// Counts, components, chances, circuit and EBF temperature are retained.
(function () {
const recipes = [
  {
    "id": "modpack:implosion_compressor/gt_port/modpack/stellarium",
    "recipe": {
      "type": "gtceu:implosion_compressor",
      "duration": 200,
      "tickInputs": {
        "eu": [
          {
            "content": 256,
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ]
      },
      "inputs": {
        "item": [
          {
            "content": {
              "ingredient": {
                "item": "minecraft:tnt"
              },
              "count": 5
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          },
          {
            "content": {
              "ingredient": {
                "item": "enderio:end_steel_ingot"
              },
              "count": 8
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          },
          {
            "content": {
              "ingredient": {
                "item": "mysticalagradditions:nether_star_crux"
              },
              "count": 2
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ]
      },
      "outputs": {
        "item": [
          {
            "content": {
              "ingredient": {
                "item": "kubejs:stellarium_ingot"
              },
              "count": 92
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ]
      }
    }
  }
];
ServerEvents.generateData('after_mods', function (event) {
  recipes.forEach(function (entry) {
    if (entry.requiresFluid && !Fluid.exists(entry.requiresFluid)) return;
    var parts = entry.id.split(':');
    event.json(parts[0] + ':recipe/' + parts[1] + '.json', entry.recipe);
  });
});
})();
