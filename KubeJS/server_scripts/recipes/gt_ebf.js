// Native GT recipe resources avoid the incompatible empty-condition fluent constructor.
// Counts, components, chances, circuit and EBF temperature are retained.
(function () {
const recipes = [
  {
    "id": "modpack:electric_blast_furnace/taint_ingot",
    "recipe": {
      "type": "gtceu:electric_blast_furnace",
      "duration": 200,
      "inputs": {
        "item": [
          {
            "content": {
              "ingredient": {
                "item": "gtceu:taint_dust"
              },
              "count": 1
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          },
          {
            "content": {
              "ingredient": {
                "type": "gtceu:circuit",
                "configuration": 1
              },
              "count": 1
            },
            "chance": 0,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ],
        "fluid": [
          {
            "content": {
              "ingredient": {
                "tag": "c:deuterium"
              },
              "amount": 1200
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
                "item": "gtceu:taint_ingot"
              },
              "count": 1
            },
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ]
      },
      "tickInputs": {
        "eu": [
          {
            "content": 480,
            "chance": 10000,
            "maxChance": 10000,
            "tierChanceBoost": 0
          }
        ]
      },
      "data": {
        "ebf_temp": 2200
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
