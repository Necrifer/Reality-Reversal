ServerEvents.recipes(event => {

  event.remove({id:"malum:spirit_infusion/soul_stained_steel_ingot"})
  function itemStack(pair) { return { item: pair[0], count: pair[1] } }
  function spiritStack(pair) { return { type: pair[0], count: pair[1] } }
  // 8 spirits exist
  const sacred = 'malum:sacred'
  const wicked = 'malum:wicked'
  const arcane = 'malum:arcane'
  const aerial = 'malum:aerial'
  const infernal = 'malum:infernal'
  const eldritch = 'malum:eldritch'
  const earthen = 'malum:earthen'
  const aqueous = 'malum:aqueous'
  function spiritInfusion(ing, soul, result, extra) {
    const recipeId = 'modpack:malum/' + result[0].split(':').pop();
    return event.custom({
      type: 'malum:spirit_infusion',
      input: itemStack(ing),
      spirits: soul.map(spiritStack),
      result: { id: result[0], count: result[1] },
      extraInputs: extra.map(itemStack)
    }).id(recipeId)
  }
  spiritInfusion(['iceandfire:dragonbone', 4], [[wicked, 3], [arcane, 1], [earthen, 1]], ['spectrum:cracked_dragonbone', 1], [['naturesaura:sky_ingot', 4], ['primalmagick:ambrosia_basic_earth', 2]])
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
