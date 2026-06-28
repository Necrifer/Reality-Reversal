/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
//ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

//  event.remove({output: 'crystalcraft_unlimited_java:fusion_template'})
//})
// A blank condition removes all recipes (obviously not recommended):
//event.remove({})

// Remove all recipes where output is stone pickaxe:
//event.remove({ output: 'minecraft:stone_pickaxe' })

// Remove all recipes where output has the Wool tag:
//event.remove({ output: '#minecraft:wool' })

// Remove all recipes where any input has the Redstone Dust tag:
//event.remove({ input: '#forge:dusts/redstone' })

// Remove all recipes from Farmer's Delight:
//event.remove({ mod: 'farmersdelight' })

// Remove all campfire cooking recipes:
//event.remove({ type: 'minecraft:campfire_cooking' })

// Remove all recipes that grant stone EXCEPT smelting recipes:
//event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })

// Remove recipes that output cooked chicken AND are cooked on a campfire:
//event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

// Remove any blasting OR smelting recipes that output minecraft:iron_ingot:
//event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])

// Remove a recipe by ID. in this case, data/minecraft/recipes/glowstone.json:
// Note: Recipe ID and output are usually different!
//event.remove({ id: 'minecraft:glowstone' })

//shapeless recipes
//event.shapeless(
//  Item.of('minecraft:dandelion', 3), // arg 1: output
//  [
//    'minecraft:bone_meal',
//    'minecraft:yellow_dye', 	       // arg 2: the array of inputs
//    '3x minecraft:ender_pearl'
//  ]
//)
ServerEvents.recipes(event => {
  const removal = [
    'dimdoors:tesselating_loom',
    'projecte:philosophers_stone',
    'minecraft:hopper', 
    'oritech:foundry_block', 
    'minecraft:flint_and_steel',
    'minecraft:anvil',
    'mekanismgenerators:heat_generator']
  removal.forEach(removal => {
    event.remove({output: removal})
  })
  const idRemoval = [
    'oritech:foundry/alloy/compat/mekanism/infused_alloy',
    'oritech:crafting/alloy/steel',
    'ultimatefoods:acero',
    'projecte:transmutation_table',
    'mekanismgenerators:generator/bio'
  ]
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })
  const replace = (result, oldInput, newInput) => {
    event.replaceInput ({output: result}, oldInput, Ingredient.of(newInput))
  }
  replace('extendedcrafting:basic_table', '#c:storage_blocks/iron', '#c:storage_blocks/dark_steel')
  replace('extendedcrafting:black_iron_ingot', '#c:dyes/black', 'minecraft:basalt')
  replace('enderio:void_chassis', '#c:ingots/iron', '#c:ingots/dark_steel')
  replace('immersiveengineering:blastbrick', 'minecraft:magma_block', 'minecraft:lava_bucket')
  event.shaped(
    Item.of('mekanismgenerators:heat_generator'),
    [
      'AAA',
      'BCB',
      'DED'
    ],
    {
      A: '#c:ingots/osmium',
      B: '#immersiveengineering:treated_wood',
      C: steelcasing,
      D: '#c:ingots/dark_steel',
      E: 'oritech:basic_generator_block'
    }
  )
  event.shaped(
    Item.of('mekanismgenerators:bio_generator'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'mekanism:alloy_infused',
      B: 'mekanism:basic_control_circuit',
      C: '#c:fuels/bio',
      D: 'mekanism:steel_casing'
    }
  )
  event.shaped(
    Item.of('minecraft:anvil'),
    [
      'AAA',
      ' B ',
      'BBB'
    ],
    {
      A: '#c:storage_blocks/steel',
      B: '#c:ingots/dark_steel'
    }
  )
  event.shaped(
    Item.of('mekanism:enrichment_chamber'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: '#c:rods/steel',
      B: '#c:circuits/basic',
      C: 'mekanism:alloy_infused',
      D: 'mekanism:steel_casing'
    }
  )
  event.shaped(
    Item.of('extendedcrafting:basic_table', 2),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'extendedcrafting:basic_component',
      B: 'extendedcrafting:basic_catalyst',
      C: '#c:player_workstations/crafting_tables',
      D: 'extendedcrafting:basic_table',
      E: 'extendedcrafting:black_iron_slate'
    }
  )
  event.shapeless(
    Item.of('minecraft:flint_and_steel'),
    [
      '#c:ingots/dark_steel',
      'minecraft:flint'
    ]
  )
  event.shaped(
    Item.of('mekanism:metallurgic_infuser'),
      [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'dimdoors:amalgam_lump',
        B: 'dimdoors:clod',
        C: 'mekanism:steel_casing'
      }
  )
  event.shaped(
    Item.of('oritech:foundry_block'),
    ['AAA',
     'CED',
     'BAB'
    ],
    {
      A: '#c:ingots/copper',
      B: '#c:ingots/electrum',
      C: 'dimdoors:amalgam_lump',
      D: 'dimdoors:clod',
      E: 'oritech:motor'
    }
  )
  event.shaped(
    Item.of('minecraft:hopper'),
    [
      'ABA',
      'ABA',
      ' A '
    ],
    {
      A: '#c:ingots/steel',
      B: '#c:planks'
    }
  )
  event.shaped(
      Item.of('dimdoors:tesselating_loom'),
      [
        'ADA',
        'BCB',
        'ADA'
      ],
      {
        A: 'dimdoors:infrangible_fiber',
        B: 'dimdoors:world_thread',
        C: 'dimdoors:eternal_fluid_bucket',
        D: 'dimdoors:black_fabric'
      }
    )
  event.shaped(
    Item.of('mekanism:steel_casing'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#c:ingots/steel',
      B: '#c:ingots/osmium',
      C: '#c:storage_blocks/iron'
    }
  )
})
