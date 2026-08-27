// Event Horizon Anchor 
//
// This is a test item to use for tp a player after entering a Black Hole
// Planned for tp into a restricted dimension without any methods of entry.

// No not implemented yet. Yes it will be coming later on.
StartupEvents.registry('item', event => {
  event.create('event_horizon_anchor')
    .displayName('Event Horizon Anchor')
    .tooltip('§5Tears open an escape route when an event horizon claims you.')
    .tooltip('§8Current destination: The End')
    .maxStackSize(1)
    .rarity('epic')
    .glow(true)
    // Reuses a vanilla texture so the item works without an additional PNG.
    // Replace this with "kubejs:item/your_texture_name" when custom art is ready.
    .texture('minecraft:item/ender_eye')
})

