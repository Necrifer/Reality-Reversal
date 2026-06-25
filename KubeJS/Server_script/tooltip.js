ItemEvents.modifyTooltips(event => {
    event.modify('dimdoors:tesselating_loom', tooltip => {
        tooltip.insert(1, Text.of('Hums with the whisper of Limbo.').green())
        tooltip.insert(2, Text.of('Reality Sponge should be your focus.').red().bold(true))
    })
    event.modify('extendedcrafting:basic_table', tooltip => {
        tooltip.insert(1, Text.of('Duplicable recipe is on purpose.').green())
    })
})
