// The editor files still define each recipe type and its JEI/EMI layout. This
// script removes their embedded recipe copies and recreates them through
// KubeJS, so quantities and ingredients can be edited in one text file.
//
// Item entry formats used below:
//   { item: 'mod:item', count: 4 }
//   { tag: 'forge:tag', count: 4 }
//   { item: 'mod:item', count: 1, nbt: '{key:"value"}' }
//
// Fluid entry format:
//   { fluid: 'mod:fluid', amount: 1000 } // amount is in mB

(() => {
  var recipeGroups = [
    {
      // Registered recipe type from anomalous.rt.
      type: 'minecraft:anomalous_condenser',
      recipes: [
        {
          id: 'minecraft:reality',
          duration: 1000,
          inputs: [{ item: 'minecraft:lava_bucket', count: 1 }],
          outputs: [{ item: 'dimdoors:eternal_fluid_bucket', count: 1 }]
        },
        {
          id: 'minecraft:worldthread',
          duration: 1000,
          inputs: [{ item: 'minecraft:string', count: 3 }],
          outputs: [{ item: 'dimdoors:world_thread', count: 1 }]
        },
        {
          id: 'minecraft:solid_static',
          duration: 1000,
          inputs: [{ tag: 'forge:sand', count: 1 }],
          outputs: [{ item: 'dimdoors:solid_static', count: 1 }]
        },
        {
          id: 'minecraft:reality_fabric',
          duration: 1000,
          inputs: [{ tag: 'forge:stone', count: 1 }],
          outputs: [{ item: 'dimdoors:black_fabric', count: 1 }]
        },
        {
          id: 'minecraft:leak',
          duration: 1000,
          inputs: [{ item: 'minecraft:water_bucket', count: 1 }],
          outputs: [{ item: 'dimdoors:leak_bucket', count: 1 }]
        }
      ]
    },
    {
      // Registered recipe type and controller used by the Foundational Breaker.
      type: 'mbd2:foundational',
      recipes: [
        {
          id: 'modpack:easier_botania',
          duration: 100,
          inputs: [
            { item: 'divinerpg:fury_fire', count: 16 },
            { item: 'aoa3:archaic_token', count: 5 },
            { item: 'minecraft:dragon_egg', count: 2 }
          ],
          inputFluids: [
            { fluid: 'nuclearcraft:oxygen', amount: 2000 }
          ],
          outputs: [
            { item: 'botania:terrasteel_ingot', count: 8 },
            { item: 'botania:life_essence', count: 5 },
            { item: 'naturesaura:gold_leaf', count: 16}
          ]
        },
        {
          id: 'minecraft:foundation',
          duration: 100,
          inputs: [
            { item: 'actuallyadditions:empowered_canola_seed', count: 7 },
            {
              item: 'extendedcrafting:singularity',
              count: 1,
              nbt: '{Id:"extendedcrafting:iron"}'
            },
            { item: 'kubejs:eyes1', count: 5 },
            { item: 'nuclearcraft:fuel_uranium_heu_235', count: 5 }
          ],
          inputFluids: [
            { fluid: 'kubejs:fluid_charged_fluix', amount: 10000 }
          ],
          outputs: [{ item: 'kubejs:eyes2', count: 1 }]
        },
        {
          id: 'modpack:error_recipe',
          duration: 100,
          inputs: [
            { item: 'biomesoplenty:null_block', count: 1 },
            { item: 'kubejs:stellarium_ingot', count: 16 },
            {
              item: 'extendedcrafting:singularity',
              count: 1,
              nbt: '{Id:"extendedcrafting:gold"}'
            }
          ],
          inputFluids: [
            { fluid: 'nuclearcraft:hydrogen', amount: 1500 }
          ],
          outputs: [
            { item: 'biomesoplenty:null_block', count: 4 },
            { item: 'biomesoplenty:null_end_stone', count: 4 },
            { item: 'biomesoplenty:null_leaves', count: 4 },
            { item: 'biomesoplenty:anomaly', count: 4 }
          ]
        },
        {
          id: 'modpack:aether_recall',
          duration: 100,
          inputs: [
            {
              item: 'extendedcrafting:singularity',
              count: 1,
              nbt: '{Id:"extendedcrafting:gold"}'
            },
            { item: 'naturesaura:token_joy', count: 3 },
            { item: 'kubejs:law_ingot', count: 8 },
            {
              item: 'naturesaura:aura_bottle',
              count: 5,
              // Nature's Aura owns the aura-type ID. Minecraft's dimension ID
              // is not a valid substitute and makes the bottle unrenderable.
              nbt: '{stored_type:"naturesaura:overworld"}'
            }
          ],
          outputs: [
            { item: 'aether:ambrosium_shard', count: 16 },
            { item: 'aether:enchanted_gravitite', count: 16 },
            { item: 'aether:zanite_gemstone', count: 16 },
            { item: 'mna:vinteum_ore', count: 16 }
          ]
        }
      ]
    },
    {
      // Registered recipe type from spiritharvest.rt.
      type: 'minecraft:spirit_harvester',
      recipes: [
        {
          id: 'minecraft:innocent_spirit',
          duration: 100,
          inputs: [{ item: 'naturesaura:sky_ingot', count: 1 }],
          outputs: [{ item: 'malum:aerial_spirit', count: 3 }]
        },
        {
          id: 'minecraft:infernal_soul',
          duration: 100,
          inputs: [{ item: 'botania:rune_fire', count: 1 }],
          outputs: [{ item: 'malum:infernal_spirit', count: 3 }]
        },
        {
          id: 'minecraft:sacred_soul',
          duration: 100,
          inputs: [{ item: 'naturesaura:pet_reviver', count: 1 }],
          outputs: [{ item: 'malum:sacred_spirit', count: 3 }]
        },
        {
          id: 'minecraft:wicked_soul',
          duration: 100,
          inputs: [{ item: 'primalmagick:essence_crystal_void', count: 1 }],
          outputs: [{ item: 'malum:wicked_spirit', count: 3 }]
        },
        {
          id: 'minecraft:eldritch_soul',
          duration: 100,
          inputs: [{ item: 'naturesaura:depth_ingot', count: 1 }],
          outputs: [{ item: 'malum:eldritch_spirit', count: 3 }]
        },
        {
          id: 'minecraft:malicious_spirit',
          duration: 100,
          inputs: [{ item: 'primalmagick:rune_earth', count: 1 }],
          outputs: [{ item: 'malum:earthen_spirit', count: 3 }]
        },
        {
          id: 'minecraft:arcane_spirit',
          duration: 100,
          inputs: [{ item: 'botania:rune_mana', count: 1 }],
          outputs: [{ item: 'malum:arcane_spirit', count: 3 }]
        },
        {
          id: 'minecraft:water_soul',
          duration: 100,
          inputs: [{ item: 'botania:rune_water', count: 1 }],
          outputs: [{ item: 'malum:aqueous_spirit', count: 3 }]
        }
      ]
    }
  ]

  // Convert a compact entry above into a KubeJS InputItem.
  function asInputItem(entry) {
    var count = entry.count || 1

    if (entry.nbt) {
      // strongNBT reproduces the original forge:nbt ingredient behavior.
      return Item.of(entry.item, entry.nbt).withCount(count).strongNBT()
    }

    if (entry.tag) {
      return (count > 1 ? count + 'x ' : '') + '#' + entry.tag
    }

    return (count > 1 ? count + 'x ' : '') + entry.item
  }

  function asOutputItem(entry) {
    return (entry.count > 1 ? entry.count + 'x ' : '') + entry.item
  }

  function asFluid(entry) {
    // MBD2 1.20.1 uses the documented "fluid amount" syntax.
    return entry.fluid + ' ' + entry.amount
  }

  function createRecipeBuilder(event, recipeType) {
    var split = recipeType.split(':')
    return event.recipes[split[0]][split[1]]()
  }

  ServerEvents.recipes(event => {
    recipeGroups.forEach(group => {
      group.recipes.forEach(recipe => {
        // Remove the editor-embedded recipe before recreating the same ID.
        event.remove({ id: recipe.id })

        var builder = createRecipeBuilder(event, group.type)
          .id(recipe.id)
          .duration(recipe.duration)
          .priority(recipe.priority || 0)

        if (recipe.inputs && recipe.inputs.length > 0) {
          // Rhino in KubeJS 1.20.1 rejects spread syntax in Java-backed
          // method calls. Add each ingredient separately instead.
          recipe.inputs.forEach(input => {
            builder.inputItems(asInputItem(input))
          })
        }

        if (recipe.inputFluids && recipe.inputFluids.length > 0) {
          recipe.inputFluids.forEach(fluid => {
            builder.inputFluids(asFluid(fluid))
          })
        }

        if (recipe.outputs && recipe.outputs.length > 0) {
          recipe.outputs.forEach(output => {
            builder.outputItems(asOutputItem(output))
          })
        }

        if (recipe.outputFluids && recipe.outputFluids.length > 0) {
          recipe.outputFluids.forEach(fluid => {
            builder.outputFluids(asFluid(fluid))
          })
        }
      })
    })
  })
})()
