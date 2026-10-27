ServerEvents.recipes(event => {

  event.remove({id:"malum:spirit_infusion/soul_stained_steel_ingot"})
const records = [
  {
        "input": {
          "item": "industrialforegoing:pink_slime_ingot",
          "count": 4
        },
        "spirits": [
          {
            "type": "malum:wicked",
            "count": 3
          },
          {
            "type": "malum:arcane",
            "count": 1
          },
          {
            "type": "malum:earthen",
            "count": 1
          }
        ],
        "result": {
          "id": "malum:soul_stained_steel_ingot",
          "count": 4
        },
        "extraInputs": [
          {
            "item": "malum:refined_soulstone",
            "count": 4
          },
          {
            "item": "minecraft:quartz",
            "count": 2
          }
        ]
  },
  {
        "input": {
          "item": "minecraft:dirt",
          "count": 1
        },
        "spirits": [
          {
            "type": "malum:sacred",
            "count": 2
          },
          {
            "type": "malum:aerial",
            "count": 5
          },
          {
            "type": "malum:earthen",
            "count": 3
          },
          {
            "type": "malum:aqueous",
            "count": 3
          }
        ],
        "result": {
          "id": "mysticalagriculture:tertium_farmland",
          "count": 1
        },
        "extraInputs": [
          {
            "item": "mysticalagriculture:tertium_essence",
            "count": 4
          },
          {
            "item": "minecraft:wither_skeleton_skull",
            "count": 1
          }
        ]
  },
  {
        "input": {
          "item": "nuclearcraft:plate_basic",
          "count": 1
        },
        "spirits": [
          {
            "type": "malum:infernal",
            "count": 2
          },
          {
            "type": "malum:aerial",
            "count": 2
          },
          {
            "type": "malum:earthen",
            "count": 3
          },
          {
            "type": "malum:aqueous",
            "count": 2
          }
        ],
        "result": {"id": "nuclearcraft:plate_advanced","count": 1},
        "extraInputs": [
          {
            "item": "malum:soul_stained_steel_ingot",
            "count": 3
          },
          {
            "item": "nuclearcraft:tough_alloy_ingot",
            "count": 2
          }
        ]
  },
  {
        "input": {
          "item": "malum:refined_soulstone",
          "count": 1
        },
        "spirits": [
          {
            "type": "malum:eldritch",
            "count": 8
          },
          {
            "type": "malum:wicked",
            "count": 9
          },
          {
            "type": "malum:aerial",
            "count": 12
          }
        ],
        "result": {"id": "dog:draconic_soul_fragment","count": 1},
        "extraInputs": [
        {
          "item": "gtceu:taint_ingot",
          "count": 3
        },
      {
        "item": "deeperdarker:heart_of_the_deep",
        "count": 2
      }
    ]
  }
];
records.forEach(recipe => {
  event.custom({
    type: "malum:spirit_infusion",
    input: recipe.input,
    spirits: recipe.spirits,
    result: recipe.result,
    extraInputs: recipe.extraInputs
  })
})
})
