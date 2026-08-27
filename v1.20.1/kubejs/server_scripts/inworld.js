ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:item_inside',
    item_in: [{ item: 'dimdoors:driftwood_log' }],
    block_in: { blocks: ['dimdoors:eternal_fluid'] },
    post: [{ type: 'set_item', item: 'minecraft:coal', count: 8 }]
  }).id('modpack:lychee/emc_coal_conversion')

  event.custom({
    type: 'lychee:item_inside',
    item_in: [{ item: 'projectexpansion:blue_matter' }],
    block_in: { blocks: ['dimdoors:eternal_fluid'] },
    post: [{ type: 'set_item', item: 'extendedcrafting:enhanced_ender_ingot_block', count: 3 }]
  }).id('modpack:lychee/expensive_ender_block')

  event.custom({
    type: 'lychee:item_exploding',
    item_in: [{ item: 'minecraft:nether_star' }, { item: 'enderio:end_steel_ingot' }],
    post: [{ type: 'drop_item', item: 'kubejs:stellarium_ingot', count: 32 }]
  }).id('modpack:lychee/stellarium_ingot_explode')
})
