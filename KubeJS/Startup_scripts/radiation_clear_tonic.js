// Registers a consumable that invokes Nuclear Radiation's player clear command.
// Startup scripts require a full game restart when registry content changes.

StartupEvents.registry('item', event => {
  event.create('radiation_clear_tonic')
    .displayName('Radiation Clear Tonic')
    .tooltip('Clears your Nuclear Radiation player data when consumed.')
    .tooltip('Does not remove radiation sources from the environment.')
    .texture('minecraft:item/honey_bottle')
    .useAnimation('drink')
    .food(food => {
      food
        .nutrition(0)
        .saturation(0)
        .alwaysEdible()
        .fastToEat()
    })
})
