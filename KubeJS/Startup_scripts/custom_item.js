//Do not use any scripts here that is related to events!
//Scripts in this folder only reloads on game restart!
StartupEvents.registry('item', event => {
    event.create('eyes1')
    .tooltip("The First Eyes Stares.").color(0, 0xFA2800)
    .displayName("§4Eyes of The Fool").color(0, 0xFA2800)
    .glow(true)
    .tag('twilightforest:portal/activator')
})