// Lychee 6.5 (1.21): item actions take the stack inline as id/count/components, not item: "...".
ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:item_inside',
    item_in: [{ item: 'dimdoors:driftwood_log' }],
    block_in: { blocks: ['dimdoors:eternal_fluid'] },
    post: [{ type: 'set_item', id: 'minecraft:coal', count: 8 }]
  }).id('modpack:lychee/emc_coal_conversion')

  event.custom({
    type: 'lychee:item_inside',
    item_in: [{ item: 'projectexpansion:blue_matter' }],
    block_in: { blocks: ['dimdoors:eternal_fluid'] },
    post: [{ type: 'set_item', id: 'extendedcrafting:enhanced_ender_ingot_block', count: 3 }]
  }).id('modpack:lychee/expensive_ender_block')

  event.custom({
    type: 'lychee:item_inside',
    item_in: [{ item: 'ad_astra:ice_shard' }],
    block_in: { blocks: ['minecraft:water'] },
    // Lychee places a block state, not a fluid-registry entry.
    post: [{ type: 'place', block: 'nuclearcraft:technical_water_block' }]
  }).id('modpack:lychee/technical_water')

  event.custom({
    type: 'lychee:item_exploding',
    item_in: [{ item: 'minecraft:nether_star' }, { item: 'enderio:end_steel_ingot' }],
    post: [{ type: 'drop_item', id: 'kubejs:stellarium_ingot', count: 32 }]
  }).id('modpack:lychee/stellarium_ingot_explode')
})
