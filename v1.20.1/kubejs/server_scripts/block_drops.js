// Replace these blocks' complete loot tables instead of stacking LootJS modifiers.
// match_tool reads the harvesting tool from the loot context (also for automation).
ServerEvents.blockLootTables(event => {
  function silkOrMaterial(block, material, fortune) {
    const ordinaryDrop = {
      type: 'minecraft:item',
      name: material
    }

    // Apply Fortune only to the non-Silk material, never to the block itself.
    if (fortune) {
      ordinaryDrop.functions = [{
        function: 'minecraft:apply_bonus',
        enchantment: 'minecraft:fortune',
        formula: 'minecraft:ore_drops'
      }]
    }

    // addJson adds the blocks/ directory automatically in this event.
    event.addJson(block, {
      type: 'minecraft:block',
      pools: [{
        rolls: 1,
        entries: [{
          type: 'minecraft:alternatives',
          children: [{
            type: 'minecraft:item',
            name: block,
            conditions: [{
              condition: 'minecraft:match_tool',
              predicate: {
                enchantments: [{
                  enchantment: 'minecraft:silk_touch',
                  levels: { min: 1 }
                }]
              }
            }]
          }, ordinaryDrop]
        }],
        functions: [{ function: 'minecraft:explosion_decay' }]
      }]
    })
  }

  silkOrMaterial('dimdoors:unravelled_fabric', 'dimdoors:infrangible_fiber', false)
  silkOrMaterial('dimdoors:black_fabric', 'dimdoors:world_thread', false)
  silkOrMaterial('dimdoors:dark_sand', 'dimdoors:frayed_filament', false)
  silkOrMaterial('kubejs:taint_ore', 'gtceu:taint_dust', true)

  // Voidscape null blocks retain their separate JSON tables and startup fix in
  // custom_modded_block_property.js. Do not add duplicate drops here.
})
