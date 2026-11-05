// Major change to code due to 1.21

ItemEvents.modifyTooltips(event => {
  const tooltips = {
    'dimdoors:tesselating_loom': [
      Text.of('Reality Sponge should be your focus.').red().bold(true)
    ],
    'oritech:foundry_block': [
      Text.of('Requires 3 Machine Cores to work!').green()
    ],
    'excessive_utilities:rainbow_stone': [
      Text.of('Resonator only finishes this while your Rainbow Generator is running.').lightPurple()
    ],
    'extendedcrafting:basic_table': [
      Text.of('Duplicable recipe is on purpose.').green()
    ],
    'projecte:transmutation_table': [
      Text.of('Draconium ores are revealed when you made the Philosopher stone').blue()
    ],
    'immersiveengineering:cokebrick': [
      Text.of('Place these in a 3x3x3 structure.').green()
    ],
    'immersiveengineering:hammer': [
      Text.of('Right click on Immersive Engineering multiblocks.').gray()
    ],
    'dimdoors:reality_sponge': [
      Text.of('Blocks and fluids placed beside decays similarly like in Limbo.').green()
    ],
    'immersiveengineering:coal_coke': [
      Text.of('You will eventually want to look into Mekanism for this.').gold()
    ],
    'immersiveengineering:ingot_hop_graphite': [
      Text.of('Work with Immersive Engineering for a while.').blue(),
      Text.of('Eventually Mystical Agriculture will do this for you.').gold()
    ],
    'divinerpg:ice_stone': [
      Text.of('Dropped by monsters in any icy biomes.').green()
    ],
    'divinerpg:snow_globe': [
      Text.of('Portal frame should be similar to Nether portal, but of snow blocks.').white()
    ],
    'ae2:inscriber': [
      Text.of('Look closely at the ingots by the way.').green()
    ],
    'aether:aether_portal_frame': [
      Text.of('Right click on any block to form the full Aether portal').green()
    ],
    'castle_in_the_sky:laputa_core_orb': [
      Text.of('The magic words, when repeated, will annihilate the castle.').green(),
      Text.of('Very laggy. Has a recipe if you wish to avoid it.').darkRed(),
      Text.of('Reusable.').gold()
    ],
    'castle_in_the_sky:levitation_stone': [
      Text.of('Be prepared for a long journey... Follow the trail when ON').green()
    ],
    'divinerpg:arcana_portal_frame': [
      Text.of('Place the frames in 3x3 on the ground such that all blue dots faces you.').green()
    ],
    'kubejs:stellarium_ingot': [
      Text.of('Make sure you have some ways of passive Withers...').gold()
    ],
    'voidminersremastered:rubetine': [
      Text.of('Expensive, best to ensure all your machines are working hard').darkPurple()
    ],
    'voidminersremastered:rubetine_miner': [
      Text.of('Things do not come for free.').darkRed(),
      Text.of('You will get a cheaper recipe upon obtaining this first').darkGreen()
    ],
    'mbtool:mbtool': [
      Text.of('Keep one around! Autobuilds multiblocks for you.').blue()
    ],
    'malum:wicked_spirit': [
      Text.of('Killing any mobs with Crude Scythe drops different spirits.').green(),
      Text.of('It may be wise to keep notes on which mobs drop which spirits.').blue()
    ],
    'aether:sentry_stone': [
      Text.of('The boss fights are unpleasant. In exchange, this is the prize.').gold()
    ],
    'mysticalagriculture:master_infusion_crystal': [
      Text.of('Things always comes with a price.').gold()
    ],
    'dimdoors:clod':[
      Text.of('Obtained by breaking its ore.').green()
    ],
    'dimdoors:amalgam_lump':[
      Text.of('Obtained by breaking its ore.').green()
    ],
    'extendedcompressor:extended_compressor': [
      Text.of('Use this. The normal version is too slow').green()
    ],
    'gtceu:rr_anomalous_condenser': [
      Text.of('Use the Modular Machinery item buses and fluid/energy hatches.')
    ],
    'valoria:elemental_manipulator': [
      Text.of('Requires Charging from the 4 Cores of power').green()
    ],
    'naturesaura:bottle_two_the_rebottling': [
      Text.of('Right clicking in different dimensions gives different air').green(),
      Text.of('You may want to grab as many as you can...').blue()
    ],
    'primalmagick:grimoire_creative': [
      Text.of('You may want to progress more before thinking about this...').green(),
      Text.of('No one hates broken symmetry right? Oh and costly recipes.').darkRed()
    ],
    'minecraft:smithing_table': [
      Text.of('Many of the trims were hidden due to lag. They still exist in game.').green()
    ],
    'astral_dimension:glowing_obsidian': [
      Text.of('Build it similar to a Nether Portal.').green()
    ],
    'astral_dimension:burning_shards': [
      Text.of('Locate mushrooms in Fiery forest to get these.').green()
    ],
    'valoria:alchemy_station_tier_1': [
      Text.of('Needs to be upgraded before use').green()
    ],
    'gtceu:hv_mixer': [
      Text.of('More and more of Gregtech will start appearing in recipes...').green(),
      Text.of('You are encouraged to start making the machines as you go along').green()
    ],
    'gtceu:gallium_dust': [
      Text.of('The 2 ores for this dust have been moved!').green(),
      Text.of('Find them on Mars and Moon, and yes you will need both types!').green()
    ],    
    'gtceu:aluminium_dust': [
      Text.of('Hint: 2 Macerators is all you need to start').gold(),
    ],
    'ad_astra:raw_desh': [
      Text.of('Ask around, some of the enemies should have what you need...').gold(),
    ],
    'gtceu:dim_tear': [
      Text.of('Right click the Dimensional Rift with the relevant items to bring you to the intended destination.').blue(),
    ],
    'kubejs:containment_failure': [
      Text.of('Right click on the Dimensional Rift to enter Sunken City.').blue(),
      Text.of('Consumed on use.').green(),
    ],
    'gtceu:kanthal_coil': [
      Text.of('Find the first set in Sunken City').green()
    ],
    'kubejs:taint_ore': [
      Text.of('The madness reached the Heavens first, to ensure God does not interfere').green(),
      Text.of('The Golden Trees should tell you a story.').green()
    ],
    'aether:golden_oak_log': [
      Text.of('God used to plant us around as saplings').gold(),
      Text.of('However, when madness came, God became only a husk of the grandness.').gold(),
      Text.of('Why not pay hell a visit? The Fallen Ones may give you more in their fortress.').gold()
    ],
    'cataclysm:flame_eye': [
      Text.of('Boss fight. Make sure to prepare a way out too.').red(),
      Text.of('Structure is randomly scattered, look around a bit.').green()
    ],
    'astral_dimension:astral_eye': [
      Text.of('Have you tried clicking?').blue(),
      Text.of('Clicking what? Something to fuel the flames?').red()
    ],
    'cataclysm:burning_ashes': [
      Text.of('Right click the Altar of Fire to summon the boss')
    ],
    'cataclysm:ignitium_ingot': [
      Text.of('I long to see them again.').black(),
      Text.of('Please, return me with others, and with the failures, we can rise again...').gold()
    ],
    'bedrockminer:bedrock_chunk': [
      Text.of('Get bedrock through Neutronium Compressor').green()
    ],
    'dimdoors:leak_bucket': [
      Text.of ('Water converts to leak when near Reality Sponge')
    ],
    'draconicevolution:dragon_heart': [
      Text.of ('Woot is your solution').green()
    ],
    'kubejs:chaos_infused': [
      Text.of ('This is unbreakable if placed, read the quest carefully on what to do!').red()
    ],
    'naturesaura:birth_spirit': [
      Text.of('Obtained when breeding animals in areas with high aura')
    ],
    'gtceu:tin_alloy_dust': [
      Text.of('Mixer should be your first machine').green()
    ],
    'gtceu:rubber_plate': [
      Text.of('This is not a mistake, a recipe exists without being circular.').blue()
    ],
    'kubejs:sol_astral_ingot': [
      Text.of('Right click on the Dimensional Rift to enter Eden').blue(),
      Text.of('Consumed on use').gold()
    ]
  }

  Object.keys(tooltips).forEach(function (id) {
    if (Item.exists(id)) event.add(id, tooltips[id]);
  });

});


// Inspect the hovered stack through Extended Crafting's component-aware API.
// A plain item filter avoids client ingredient codecs that lack registry access.
;(function () {
  const SingularityUtils = Java.loadClass('com.blakebr0.extendedcrafting.singularity.SingularityUtils')
  const singularityTooltips = {
    'extendedcrafting:gold': [
      Text.of('The Singularity is reusable for the gold powder').green()
    ]
  }
  ItemEvents.modifyTooltips(event => {
    event.modify('extendedcrafting:singularity', tooltip => {
      tooltip.dynamic('rr_singularity_tooltips')
    })
  })
  ItemEvents.dynamicTooltips('rr_singularity_tooltips', event => {
    const singularity = SingularityUtils.getSingularity(event.item)
    if (singularity === null) return
    const lines = singularityTooltips[String(singularity.getId())]
    if (lines) lines.forEach(line => event.lines.add(line))
  })
})();
