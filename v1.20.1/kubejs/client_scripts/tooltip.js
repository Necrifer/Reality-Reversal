// All pack tooltips are handled by one advanced callback.
//
// Some client reload paths can leave an older callback registered. Before a
// line is added, addOnce() removes any existing copies with the same visible
// text. This makes the result idempotent: one callback or several callbacks
// still leave exactly one copy of every line.
ItemEvents.tooltip(event => {
  const tooltips = {
    'dimdoors:tesselating_loom': [
      Text.of('Mod Dev broke this hard, you have to manual this.').green(),
      Text.of('Reality Sponge should be your focus.').red().bold(true)
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
    'voidminers:rubetine': [
      Text.of('Expensive, best to ensure all your machines are working hard').darkPurple()
    ],
    'voidminers:rubetine_miner': [
      Text.of('Things do not come for free.').darkRed(),
      Text.of('You will get a cheaper recipe upon obtaining this first').darkGreen()
    ],
    'mbtool:mbtool': [
      Text.of('Keep one around! Autobuilds multiblocks for you.').blue()
    ],
    'malum:wicked_spirit': [
      Text.of('Killing any mobs with Crude Scythe drops different spirits.').green(),
      Text.of('JEI is your friend to check which mobs drops which spirits.').blue()
    ],
    'aether:sentry_stone': [
      Text.of('The boss fights are unpleasant. In exchange, this is the prize.').gold()
    ],
    'mysticalagriculture:master_infusion_crystal': [
      Text.of('Things always comes with a price.').gold()
    ],
    'extendedcrafting:singularity': [
      Text.of('Did you think because of EMC we will let you off?').red()
    ],
    'infinite_abyss:fourth_layer_deepstone':[
      Text.of('Use this to access the next layer. Bad labelling.').aqua()
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
    'aoa3:troll_idol': [
      Text.of('Do not use this until can make Eyes of Ender.').green(),
      Text.of('You have been warned.').darkRed(),
    ],
    'extrabotany:spirit_fuel': [
      Text.of('Usual method broke. Mod Dev again.').green(),
    ],
    'minecraft:anomalous_condenser': [
      Text.of('Similar to the other multiblock, only accept I/O through here!')
    ],
    'naturesaura:bottle_two_the_rebottling': [
      Text.of('Right clicking in different dimensions gives different air').green(),
      Text.of('You may want to grab as many as you can...').blue()
    ],
    'primalmagick:grimoire_creative': [
      Text.of('You may want to progress more before thinking about this...').green(),
      Text.of('No one hates broken symmetry right? Oh and costly recipes.').darkRed()
    ],
    'hammerlib:test_machine': [
      Text.of('This is the controller of the multiblock.').green(),
      Text.of('I/O only goes through the controller').green(),
      Text.of('Controller must face North to form correctly!').blue()
    ]
  }

  function addOnce(tooltip, line) {
    const message = line.getString()

    // Iterate backwards because entries are removed from the live Java list.
    for (let index = tooltip.size() - 1; index >= 0; index--) {
      if (tooltip.get(index).getString() === message) {
        tooltip.remove(index)
      }
    }

    tooltip.add(line)
  }

  event.addAdvancedToAll((item, advanced, tooltip) => {
    let lines = tooltips[item.id]

    // This tooltip applies only to the Nether-filled Aura Bottle. In 1.20.1
    // its captured aura type is stored in NBT rather than a data component.
    if (item.id === 'naturesaura:aura_bottle') {
      const nbt = item.nbt
      if (nbt && nbt.getString('stored_type') === 'kubejs:nihil') {
        lines = [Text.of('Obtained by right clicking bottle and cork in pocket Void Dimension').green()]
      }
    }

    if (!lines) return

    for (let index = 0; index < lines.length; index++) {
      addOnce(tooltip, lines[index])
    }
  })
})
