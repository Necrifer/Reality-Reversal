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
        tooltip.insert(1, Text.of('Right click on Immersive Engineering multiblocks.').gray())
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
    event.modify('immersiveengineering:coal_coke', tooltip => {
        tooltip.insert(1, Text.of('You will eventually want to look into Mekanism for this.').gold())
        tooltip.insert(2, Text.of('Texture is bugged, you need it for the Blast Furnace.').darkBlue())
    })
    event.modify('immersiveengineering:ingot_hop_graphite', tooltip => {
        tooltip.insert(1, Text.of('Work with Immersive Engineering for a while.').blue())
        tooltip.insert(2, Text.of('Eventually Mystical Agriculture will do this for you.').gold())
    })
    event.modify('divinerpg:ice_stone', tooltip => {
        tooltip.insert(1, Text.of('Dropped by monsters in any icy biomes.').green())
    })
    event.modify('divinerpg:snow_globe', tooltip => {
        tooltip.insert(1, Text.of('Portal frame should be similar to Nether portal, but of snow blocks.').white())
    })
    event.modify('aether:aether_portal_frame', tooltip => {
        tooltip.insert(1, Text.of('Right click on any block to form the full Aether portal').green())
    })
    event.modify('castle_in_the_sky:laputa_core_orb', tooltip => {
        tooltip.insert(1, Text.of('The magic words, when repeated, will annihilate the castle.').green())
        tooltip.insert(2, Text.of('Very laggy. Has a recipe if you wish to avoid it.').darkRed())
    })
    event.modify('castle_in_the_sky:levitation_stone', tooltip => {
    tooltip.insert(1, Text.of('Be prepared for a long journey... Follow the trail when ON').green())
    })
})
