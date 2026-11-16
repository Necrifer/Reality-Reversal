// Lychee 6.5 (1.21): item actions take the stack inline as id/count/components, not item: "...".
ServerEvents.recipes(event => {
  let post = PostBuilder.create()
  let contextual = ContextualBuilder.create()
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
    type: 'lychee:item_inside',
    item_in: [{ item: 'kubejs:sol_astral_ingot' }],
    block_in: { blocks: ['spectrum:dragonrot'] },
    post: [{ type: 'set_item', id: 'excessive_utilities:demon_ingot', count: 1 }]
  }).id('modpack:lychee/demon_ingot')

  // Mech Eye puzzle, step 2: a stable Midnight Aberration dropped into Light of Dawn in the Green Agate Jungle.
  // hide_in_viewer keeps it out of JEI/EMI. Step 1 is server_scripts/rr_mech_eye_puzzle.js.
  event.custom({
    type: 'lychee:item_inside',
    hide_in_viewer: true,
    item_in: [{
      type: 'neoforge:components',
      items: 'spectrum:midnight_aberration',
      components: { 'spectrum:stable': {} },
      strict: false
    }],
    block_in: { blocks: ['kubejs:eden_fluid'] },
    contextual: [{ type: 'location', predicate: { biomes: 'gaiadimension:green_agate_jungle' } }],
    post: [{ type: 'set_item', id: 'aoa3:observing_eye', count: 1 }]
  }).id('modpack:lychee/observing_eye_dawn')

  event.custom({
    type: 'lychee:item_exploding',
    item_in: [{ item: 'minecraft:nether_star' }, { item: 'enderio:end_steel_ingot' }],
    post: [{ type: 'drop_item', id: 'kubejs:stellarium_ingot', count: 32 }]
  }).id('modpack:lychee/stellarium_ingot_explode')
})
