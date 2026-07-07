ItemEvents.modifyTooltips(event => {
    event.modify('dimdoors:tesselating_loom', tooltip => {
        tooltip.insert(1, Text.of('Hums with the whisper of Limbo.').green())
        tooltip.insert(2, Text.of('Reality Sponge should be your focus.').red().bold(true))
    })
    event.modify('extendedcrafting:basic_table', tooltip => {
        tooltip.insert(1, Text.of('Duplicable recipe is on purpose.').green())
    })
    event.modify('projecte:transmutation_table', tooltip => {
        tooltip.insert(1, Text.of('Draconium ores are revealed when you made the Philosopher stone').blue())
    })
    event.modify('immersiveengineering:cokebrick', tooltip => {
        tooltip.insert(1, Text.of('Place these in a 3x3x3 structure.').green())
    })
    event.modify('immersiveengineering:hammer', tooltip => {
        tooltip.insert(1, Text.of('Right click on Immersive multiblocks.').gray())
    })
    event.modify('dimdoors:reality_sponge', tooltip => {
        tooltip.insert(1, Text.of('Blocks and fluids placed beside decays similarly like in Limbo.').green())
    })
    event.modify('oritech:foundry_block', tooltip => {
        tooltip.insert(1, Text.of('One of these requires 3 Machine Core surrounding it. Right click to activate.').green())
    })
    event.modify('oritech:assembler_block', tooltip => {
        tooltip.insert(1, Text.of('Same as the Foundry. Right click to activate.').green())
    })
    event.modify('oritech:centrifuge_block', tooltip => {
        tooltip.insert(1, Text.of('Just require 1 Machine Core.').green())
    })
    event.modify('oritech:centrifuge_block', tooltip => {
        tooltip.insert(2, Text.of('Have you treaded the Trials of The Magician?').red())
    })
})
