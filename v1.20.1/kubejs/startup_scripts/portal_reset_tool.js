// Registers the reusable item used to reset the two Ancient City portals.
//
// This is a startup script because new item registry entries can only be added
// during game startup. A full client restart is required after installing it.
StartupEvents.registry('item', event => {
  event.create('portal_disruptor')
    .displayName('Portal Disruptor')
    .tooltip('§7Right-click near an activated Ancient City portal to reset it.')
    .tooltip('§8Preserves the Reinforced Deepslate frame.')
    .maxStackSize(1)
    .glow(true)
})
