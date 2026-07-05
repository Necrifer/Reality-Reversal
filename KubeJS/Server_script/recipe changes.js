
const steelcasing = 'mekanism:steel_casing'
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
    'mekanismgenerators:generator/bio',
    'mekanism:energy_tablet'
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
const shapelessCrafting = [
    {
      id: 'minecraft:flint_and_steel',
      output: 'minecraft:flint_and_steel',
      inputs: ['minecraft:flint', '#c:ingots/dark_steel']
    },
    {
        id: 'twilightforest:fiery_tears',
        output: 'twilightforest:fiery_tears',
        inputs: ['minecraft:ghast_tear', 'twilightforest:carminite']
    }
  ];
const shapedCrafting = [
    {
        id: 'minecraft:anvil',
        output: 'minecraft:anvil',
        pattern: ['AAA', ' B ', 'BBB'],
        keys: {
            A: '#c:storage_blocks/steel',
            B: '#c:ingots/dark_steel'
        }
    },
    {
        id: 'mekanism:crusher',
        output: 'mekanism:crusher',
        pattern: ['ABA', 'CDC', 'AEA'],
        keys: {
            A: 'mekanism:alloy_infused',
            B: 'minecraft:anvil',
            C: '#c:circuits/basic',
            D: steelcasing,
            E: 'immersiveengineering:sawblade'
        }
    },
    {
        id:'mekanism:enrichment_chamber',
        output: 'mekanism:enrichment_chamber',
        pattern: ['ABA', 'CDC', 'ABA'],
        keys: {
            A: '#c:rods/steel',
            B: '#c:circuits/basic',
            C: 'mekanism:alloy_infused',
            D: steelcasing
        }
    },
    {
        id: 'mekanism:metallurgic_infuser',
        output: 'mekanism:metallurgic_infuser',
        pattern: ['ABA', 'BCB', 'ABA'],
        keys: {
            A: 'dimdoors:amalgam_lump',
            B: 'dimdoors:clod',
            C: steelcasing
        }
    },
    {
        id: 'oritech:foundry_block',
        output: 'oritech:foundry_block',
        pattern: ['AAA', 'CED', 'BAB'],
        keys: {
            A: '#c:ingots/copper',
            B: '#c:ingots/electrum',
            C: 'dimdoors:amalgam_lump',
            D: 'dimdoors:clod',
            E: 'oritech:motor'
        }
    },
    {
        id: 'minecraft:hopper',
        output: 'minecraft:hopper',
        pattern: ['ABA', 'ABA', ' A '],
        keys: {
            A: '#c:ingots/steel',
            B: '#c:planks'
        }
    },
    {
        id: 'dimdoors:tesselating_loom',
        output: 'dimdoors:tesselating_loom',
        pattern: ['ADA', 'BCB', 'ADA'],
        keys: {
            A: 'dimdoors:infrangible_fiber',
            B: 'dimdoors:world_thread',
            C: 'dimdoors:eternal_fluid_bucket',
            D: 'dimdoors:black_fabric'
        }
    },
    {
      id: 'mekanismgenerators:heat_generator',
      output: 'mekanismgenerators:heat_generator',
      pattern: ['AAA', 'BCB', 'DED'],
      keys: {
        A: '#c:ingots/osmium',
        B: '#immersiveengineering:treated_wood',
        C: 'mekanism:steel_casing',
        D: '#c:ingots/dark_steel',
        E: 'oritech:basic_generator_block'
      }
    },
    {
        id: 'mekanism:steel_casing',
        output: steelcasing,
        pattern:['ABA','BCB','ABA'],
        keys:{
            A: '#c:ingots/steel',
            B: '#c:ingots/osmium',
            C: '#c:storage_blocks/iron'
        }
    },
    {
      id: 'mekanismgenerators:bio_generator',
      output: 'mekanismgenerators:bio_generator',
      pattern: ['ABA', 'CDC', 'ABA'],
      keys: {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: '#c:fuels/bio',
        D: 'mekanism:steel_casing'
      }
    }
  ];
    shapedCrafting.forEach(recipe => {
        event.shaped(Item.of(recipe.output), recipe.pattern, recipe.keys).id(recipe.id);
  });
    shapelessCrafting.forEach(recipe => {
    event.shapeless(Item.of(recipe.output), recipe.inputs).id(recipe.id);
  });
})