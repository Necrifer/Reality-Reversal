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
        tooltip.insert(2, Text.of('Reusable.').gold())
    })
    event.modify('castle_in_the_sky:levitation_stone', tooltip => {
    tooltip.insert(1, Text.of('Be prepared for a long journey... Follow the trail when ON').green())
    })
    event.modify('divinerpg:arcana_portal_frame', tooltip => {
    tooltip.insert(1, Text.of('Place the frames in 3x3 on the ground such that all blue dots faces you.').green())
    })
    event.modify('kubejs:stellarium_ingot', tooltip => {
    tooltip.insert(2, Text.of('Make sure you have some ways of passive Withers...').gold())
    })
    event.modify('oritech:refinery_block', tooltip => {
    tooltip.insert(1, Text.of('Have 2 extra Refinery Chamber Module for this!').green())
    tooltip.insert(2, Text.of('Yes these things need their own Machine Cores!').red())
    })
    event.modify('voidminersremastered:rubetine', tooltip => {
    tooltip.insert(1, Text.of('Expensive, best to ensure all your machines are working hard').darkPurple())
    })
    event.modify('voidminersremastered:rubetine_miner', tooltip => {
    tooltip.insert(1, Text.of('Things do not come for free.').darkRed())
    tooltip.insert(2, Text.of('You will get a cheaper recipe upon obtaining this first').darkGreen())
    })
    event.modify('mbtool:mbtool', tooltip => {
    tooltip.insert(1, Text.of('Keep one around! Autobuilds multiblocks for you.').blue())
    })
    event.modify('malum:wicked_spirit', tooltip => {
    tooltip.insert(1, Text.of('Killing any mobs with Crude Scythe drops different spirits.').green())
    tooltip.insert(2, Text.of('JEI is your friend to check which mobs drops which spirits.').blue())    
    })
    event.modify('aether:sentry_stone', tooltip => {
    tooltip.insert(1, Text.of('The boss fights are unpleasant. In exchange, this is the prize.').gold())
    })
    event.modify('angel_utilities:deep_dark', tooltip => {
    tooltip.insert(1, Text.of('Light up the cobblestone portal to enter Deep Dark.').green())
    })
    event.modify('angel_utilities:compressed_cobblestone', tooltip => {
    tooltip.insert(1, Text.of('Place it like Nether Portal.').gold())
    })
    event.modify('mysticalagriculture:master_infusion_crystal', tooltip => {
    tooltip.insert(1, Text.of('Things always comes with a price.').gold())
    })
    event.modify('oritech:atomic_forge_block', tooltip => {
    tooltip.insert(1, Text.of('Have a few running at all times.').red())
    })
    event.modify('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:iron"]', tooltip => {
    tooltip.insert(1, Text.of('Did you think because of EMC we will let you off?').red())
    })
    event.modify('naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', tooltip => {
    tooltip.insert(1, Text.of('Obtained by right clicking bottle and cork in Nether').green())
    })
    event.modify('naturesaura:bottle_two_the_rebottling', tooltip => {
    tooltip.insert(1, Text.of('Right clicking in different dimensions gives different air').green())
    tooltip.insert(2, Text.of('You may want to grab as many as you can...').blue())
    })
    event.modify('primalmagick:grimoire_creative', tooltip => {
    tooltip.insert(1, Text.of('You may want to progress more before thinking about this...').green())
    tooltip.insert(2, Text.of('No one hates broken symmetry right? Oh and costly recipes.').darkRed())
    })
})
