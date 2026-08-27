// Dimensional Doors 5.4.4 includes an REI decay category, but no JEI one.
// This generated client script mirrors the block decay patterns that the 1.20
// runtime loader actually indexes. It changes display information only.
// Source: data/dimdoors/decay_patterns/*.json in the installed DimDoors jar.

// And once again this makes my work 10x harder!!
const dimdoorsDecayRecipes = [
  {
    "id": "air",
    "inputs": [
      "minecraft:cobweb",
      "dimdoors:driftwood_leaves",
      "dimdoors:driftwood_sapling",
      "minecraft:glass_pane",
      "minecraft:moss_carpet",
      "dimdoors:driftwood_trapdoor",
      "minecraft:rail",
      "dimdoors:rust",
      "dimdoors:unraveled_spike",
      "minecraft:wither_rose"
    ],
    "output": "minecraft:air",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "amalgam",
    "inputs": [
      "minecraft:iron_block",
      "minecraft:copper_block",
      "minecraft:cut_copper",
      "minecraft:gold_block"
    ],
    "output": "dimdoors:amalgam_block",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "amalgam_ore",
    "inputs": [
      "minecraft:raw_copper_block",
      "minecraft:copper_ore",
      "minecraft:deepslate_copper_ore",
      "minecraft:raw_iron_block",
      "minecraft:deepslate_iron_ore",
      "minecraft:iron_ore",
      "minecraft:raw_gold_block",
      "minecraft:gold_ore",
      "minecraft:nether_gold_ore",
      "minecraft:deepslate_gold_ore"
    ],
    "output": "dimdoors:amalgam_ore",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "black_ancient_fabric",
    "inputs": [
      "minecraft:bedrock"
    ],
    "output": "dimdoors:black_ancient_fabric",
    "dimension": "dimdoors:limbo",
    "outsideDimension": true
  },
  {
    "id": "clay",
    "inputs": [
      "dimdoors:amalgam_block",
      "minecraft:mud",
      "minecraft:terracotta",
      "minecraft:bricks"
    ],
    "output": "minecraft:clay",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "clay_fence",
    "inputs": [
      "dimdoors:clay_fence",
      "dimdoors:mud_fence"
    ],
    "output": "dimdoors:clay_fence",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "clay_stairs",
    "inputs": [
      "minecraft:brick_stairs",
      "dimdoors:mud_stairs",
      "dimdoors:amalgam_stairs"
    ],
    "output": "dimdoors:clay_stairs",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "clod_ore",
    "inputs": [
      "minecraft:coal_ore",
      "minecraft:deepslate_coal_ore",
      "minecraft:emerald_ore",
      "minecraft:deepslate_emerald_ore",
      "minecraft:lapis_ore",
      "minecraft:deepslate_lapis_ore",
      "minecraft:nether_quartz_ore"
    ],
    "output": "dimdoors:clod_ore",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "cobblestone",
    "inputs": [
      "minecraft:andesite",
      "minecraft:basalt",
      "minecraft:blackstone",
      "minecraft:calcite",
      "minecraft:deepslate",
      "minecraft:diorite",
      "minecraft:dripstone_block",
      "minecraft:end_stone",
      "minecraft:furnace",
      "minecraft:granite",
      "minecraft:netherrack",
      "minecraft:prismarine",
      "minecraft:stone",
      "minecraft:tuff"
    ],
    "output": "minecraft:cobblestone",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "cobblestone_slab",
    "inputs": [
      "minecraft:stone_slab",
      "minecraft:stonecutter"
    ],
    "output": "minecraft:cobblestone_slab",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "cobweb",
    "inputs": [
      "minecraft:white_wool",
      "minecraft:orange_wool",
      "minecraft:magenta_wool",
      "minecraft:light_blue_wool",
      "minecraft:yellow_wool",
      "minecraft:lime_wool",
      "minecraft:pink_wool",
      "minecraft:gray_wool",
      "minecraft:light_gray_wool",
      "minecraft:cyan_wool",
      "minecraft:purple_wool",
      "minecraft:blue_wool",
      "minecraft:brown_wool",
      "minecraft:green_wool",
      "minecraft:red_wool",
      "minecraft:black_wool"
    ],
    "output": "minecraft:cobweb",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "dark_sand",
    "inputs": [
      "minecraft:amethyst_block",
      "minecraft:glass",
      "minecraft:gravel",
      "minecraft:red_sand",
      "minecraft:sand",
      "minecraft:soul_sand"
    ],
    "output": "dimdoors:dark_sand",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "driftwood_leaves",
    "inputs": [
      "minecraft:jungle_leaves",
      "minecraft:oak_leaves",
      "minecraft:spruce_leaves",
      "minecraft:dark_oak_leaves",
      "minecraft:acacia_leaves",
      "minecraft:birch_leaves",
      "minecraft:azalea_leaves",
      "minecraft:flowering_azalea_leaves",
      "minecraft:mangrove_leaves",
      "minecraft:cherry_leaves"
    ],
    "output": "dimdoors:driftwood_leaves",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "driftwood_plank",
    "inputs": [
      "minecraft:oak_planks",
      "minecraft:spruce_planks",
      "minecraft:birch_planks",
      "minecraft:jungle_planks",
      "minecraft:acacia_planks",
      "minecraft:dark_oak_planks",
      "minecraft:crimson_planks",
      "minecraft:warped_planks",
      "minecraft:mangrove_planks",
      "minecraft:bamboo_planks",
      "minecraft:cherry_planks"
    ],
    "output": "dimdoors:driftwood_planks",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "driftwood_sapling",
    "inputs": [
      "minecraft:oak_sapling",
      "minecraft:spruce_sapling",
      "minecraft:birch_sapling",
      "minecraft:jungle_sapling",
      "minecraft:acacia_sapling",
      "minecraft:dark_oak_sapling",
      "minecraft:azalea",
      "minecraft:flowering_azalea",
      "minecraft:mangrove_propagule",
      "minecraft:cherry_sapling"
    ],
    "output": "dimdoors:driftwood_sapling",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "driftwood_trapdoor",
    "inputs": [
      "minecraft:acacia_trapdoor",
      "minecraft:birch_trapdoor",
      "minecraft:dark_oak_trapdoor",
      "minecraft:jungle_trapdoor",
      "minecraft:oak_trapdoor",
      "minecraft:spruce_trapdoor",
      "minecraft:crimson_trapdoor",
      "minecraft:warped_trapdoor",
      "minecraft:mangrove_trapdoor",
      "minecraft:bamboo_trapdoor",
      "minecraft:cherry_trapdoor"
    ],
    "output": "dimdoors:driftwood_trapdoor",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "glass",
    "inputs": [
      "minecraft:tinted_glass",
      "minecraft:redstone_block",
      "minecraft:gray_stained_glass",
      "minecraft:black_stained_glass",
      "minecraft:orange_stained_glass",
      "minecraft:blue_stained_glass",
      "minecraft:brown_stained_glass",
      "minecraft:cyan_stained_glass",
      "minecraft:green_stained_glass",
      "minecraft:light_blue_stained_glass",
      "minecraft:light_gray_stained_glass",
      "minecraft:lime_stained_glass",
      "minecraft:magenta_stained_glass",
      "minecraft:pink_stained_glass",
      "minecraft:purple_stained_glass",
      "minecraft:red_stained_glass",
      "minecraft:white_stained_glass",
      "minecraft:yellow_stained_glass"
    ],
    "output": "minecraft:glass",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "glass_pane",
    "inputs": [
      "minecraft:gray_stained_glass_pane",
      "minecraft:black_stained_glass_pane",
      "minecraft:orange_stained_glass_pane",
      "minecraft:blue_stained_glass_pane",
      "minecraft:brown_stained_glass_pane",
      "minecraft:cyan_stained_glass_pane",
      "minecraft:green_stained_glass_pane",
      "minecraft:light_blue_stained_glass_pane",
      "minecraft:light_gray_stained_glass_pane",
      "minecraft:lime_stained_glass_pane",
      "minecraft:magenta_stained_glass_pane",
      "minecraft:pink_stained_glass_pane",
      "minecraft:purple_stained_glass_pane",
      "minecraft:red_stained_glass_pane",
      "minecraft:white_stained_glass_pane",
      "minecraft:yellow_stained_glass_pane"
    ],
    "output": "minecraft:glass_pane",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "gravel",
    "inputs": [
      "dimdoors:amalgam_block",
      "dimdoors:clod_ore",
      "minecraft:cobblestone"
    ],
    "output": "minecraft:gravel",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "gritty_stone",
    "inputs": [
      "minecraft:infested_stone",
      "minecraft:infested_cobblestone",
      "minecraft:infested_stone_bricks",
      "minecraft:infested_mossy_stone_bricks",
      "minecraft:infested_cracked_stone_bricks",
      "minecraft:infested_chiseled_stone_bricks"
    ],
    "output": "dimdoors:gritty_stone",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "moss_carpet",
    "inputs": [
      "minecraft:white_carpet",
      "minecraft:orange_carpet",
      "minecraft:magenta_carpet",
      "minecraft:light_blue_carpet",
      "minecraft:yellow_carpet",
      "minecraft:lime_carpet",
      "minecraft:pink_carpet",
      "minecraft:gray_carpet",
      "minecraft:light_gray_carpet",
      "minecraft:cyan_carpet",
      "minecraft:purple_carpet",
      "minecraft:blue_carpet",
      "minecraft:brown_carpet",
      "minecraft:green_carpet",
      "minecraft:red_carpet",
      "minecraft:black_carpet"
    ],
    "output": "minecraft:moss_carpet",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "mud",
    "inputs": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:podzol",
      "minecraft:mycelium",
      "dimdoors:driftwood_planks",
      "minecraft:coal_block",
      "minecraft:composter",
      "minecraft:chest",
      "minecraft:bone_block",
      "minecraft:skeleton_skull",
      "minecraft:skeleton_wall_skull",
      "minecraft:wither_skeleton_skull",
      "minecraft:wither_skeleton_wall_skull",
      "minecraft:dragon_head",
      "minecraft:dragon_wall_head",
      "minecraft:cactus",
      "minecraft:cocoa",
      "minecraft:pumpkin",
      "minecraft:melon",
      "minecraft:hay_block",
      "minecraft:moss_block",
      "minecraft:slime_block",
      "minecraft:honeycomb_block",
      "minecraft:lectern",
      "minecraft:purpur_block",
      "minecraft:dried_kelp_block",
      "minecraft:nether_wart_block",
      "minecraft:packed_mud"
    ],
    "output": "minecraft:mud",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "netherwart_block",
    "inputs": [
      "minecraft:brown_mushroom_block",
      "minecraft:red_mushroom_block"
    ],
    "output": "minecraft:nether_wart_block",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "rail",
    "inputs": [
      "minecraft:activator_rail",
      "minecraft:detector_rail",
      "minecraft:powered_rail"
    ],
    "output": "minecraft:rail",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "rust",
    "inputs": [
      "minecraft:lightning_rod",
      "minecraft:lantern",
      "minecraft:iron_bars",
      "minecraft:hopper",
      "minecraft:chain",
      "minecraft:cauldron",
      "minecraft:bell"
    ],
    "output": "dimdoors:rust",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "solid_static",
    "inputs": [
      "minecraft:bedrock",
      "minecraft:end_portal_frame",
      "minecraft:command_block",
      "minecraft:chain_command_block",
      "minecraft:repeating_command_block"
    ],
    "output": "dimdoors:solid_static",
    "dimension": "dimdoors:limbo",
    "outsideDimension": false
  },
  {
    "id": "stone",
    "inputs": [
      "dimdoors:clod_block",
      "minecraft:cracked_stone_bricks",
      "minecraft:glowstone",
      "minecraft:obsidian",
      "minecraft:redstone_block"
    ],
    "output": "minecraft:stone",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_button",
    "inputs": [
      "dimdoors:clay_button",
      "dimdoors:dark_sand_button"
    ],
    "output": "dimdoors:unraveled_button",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_fabric",
    "inputs": [
      "dimdoors:dark_sand",
      "minecraft:clay"
    ],
    "output": "dimdoors:unravelled_fabric",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_fence",
    "inputs": [
      "dimdoors:clay_fence",
      "dimdoors:dark_sand_fence"
    ],
    "output": "dimdoors:unraveled_fence",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_slab",
    "inputs": [
      "dimdoors:clay_slab",
      "dimdoors:dark_sand_slab"
    ],
    "output": "dimdoors:unraveled_slab",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_spike",
    "inputs": [
      "minecraft:end_rod",
      "minecraft:pointed_dripstone",
      "minecraft:flower_pot",
      "minecraft:potted_poppy",
      "minecraft:potted_blue_orchid",
      "minecraft:potted_allium",
      "minecraft:potted_azure_bluet",
      "minecraft:potted_red_tulip",
      "minecraft:potted_orange_tulip",
      "minecraft:potted_white_tulip",
      "minecraft:potted_pink_tulip",
      "minecraft:potted_oxeye_daisy",
      "minecraft:potted_dandelion",
      "minecraft:potted_oak_sapling",
      "minecraft:potted_spruce_sapling",
      "minecraft:potted_birch_sapling",
      "minecraft:potted_jungle_sapling",
      "minecraft:potted_acacia_sapling",
      "minecraft:potted_dark_oak_sapling",
      "minecraft:potted_red_mushroom",
      "minecraft:potted_brown_mushroom",
      "minecraft:potted_dead_bush",
      "minecraft:potted_fern",
      "minecraft:potted_cactus",
      "minecraft:potted_cornflower",
      "minecraft:potted_lily_of_the_valley",
      "minecraft:potted_wither_rose",
      "minecraft:potted_bamboo",
      "minecraft:potted_crimson_fungus",
      "minecraft:potted_warped_fungus",
      "minecraft:potted_crimson_roots",
      "minecraft:potted_warped_roots",
      "minecraft:potted_azalea_bush",
      "minecraft:potted_flowering_azalea_bush",
      "minecraft:potted_mangrove_propagule",
      "minecraft:potted_cherry_sapling",
      "minecraft:potted_torchflower",
      "minecraft:candle",
      "minecraft:white_candle",
      "minecraft:orange_candle",
      "minecraft:magenta_candle",
      "minecraft:light_blue_candle",
      "minecraft:yellow_candle",
      "minecraft:lime_candle",
      "minecraft:pink_candle",
      "minecraft:gray_candle",
      "minecraft:light_gray_candle",
      "minecraft:cyan_candle",
      "minecraft:purple_candle",
      "minecraft:blue_candle",
      "minecraft:brown_candle",
      "minecraft:green_candle",
      "minecraft:red_candle",
      "minecraft:black_candle"
    ],
    "output": "dimdoors:unraveled_spike",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "unraveled_stairs",
    "inputs": [
      "dimdoors:clay_stairs",
      "dimdoors:dark_sand_stairs"
    ],
    "output": "dimdoors:unraveled_stairs",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "wither_rose",
    "inputs": [
      "minecraft:dandelion",
      "minecraft:poppy",
      "minecraft:blue_orchid",
      "minecraft:allium",
      "minecraft:azure_bluet",
      "minecraft:red_tulip",
      "minecraft:orange_tulip",
      "minecraft:white_tulip",
      "minecraft:pink_tulip",
      "minecraft:oxeye_daisy",
      "minecraft:cornflower",
      "minecraft:lily_of_the_valley",
      "minecraft:wither_rose",
      "minecraft:torchflower",
      "minecraft:sunflower",
      "minecraft:lilac",
      "minecraft:peony",
      "minecraft:rose_bush",
      "minecraft:pitcher_plant"
    ],
    "output": "minecraft:wither_rose",
    "dimension": null,
    "outsideDimension": false
  },
  {
    "id": "wool_bed",
    "inputs": [
      "minecraft:red_bed",
      "minecraft:black_bed",
      "minecraft:blue_bed",
      "minecraft:brown_bed",
      "minecraft:cyan_bed",
      "minecraft:gray_bed",
      "minecraft:green_bed",
      "minecraft:light_blue_bed",
      "minecraft:light_gray_bed",
      "minecraft:lime_bed",
      "minecraft:magenta_bed",
      "minecraft:orange_bed",
      "minecraft:pink_bed",
      "minecraft:purple_bed",
      "minecraft:white_bed",
      "minecraft:yellow_bed"
    ],
    "output": "minecraft:white_wool",
    "dimension": null,
    "outsideDimension": false
  }
]
const dimdoorsDecayType = 'kubejs:dimdoors_decay'

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper
  event.custom(dimdoorsDecayType, category => {
    category.title('World Decay')
      .background(guiHelper.createBlankDrawable(134, 54))
      // KubeJS Additions does not derive these values from the background.
      .setWidth(134)
      .setHeight(54)
      .icon(guiHelper.createDrawableItemStack(Item.of('dimdoors:unravelled_fabric')))
      // Return a strict boolean rather than the output item ID string.
      // Rhino cannot automatically convert that string for this Java callback.
      .isRecipeHandled(recipe => !!(recipe && recipe.data && recipe.data.inputs && recipe.data.output))
      .handleLookup((builder, recipe, focuses) => {
        const input = builder.addSlot('INPUT', 19, 19)
        // Tag-derived rules cycle through every accepted block item.
        input.addItemStacks(recipe.data.inputs.map(item => Item.of(item)))

        builder.addSlot('OUTPUT', 95, 19).addItemStack(Item.of(recipe.data.output))
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  // A single list builder ensures JEI receives each pattern as its own recipe.
  event.custom(dimdoorsDecayType).addAll(dimdoorsDecayRecipes)
})

JEIAddedEvents.registerRecipeCatalysts(event => {
  const type = event.getCustomRecipeType(dimdoorsDecayType)
  // Unravelled Fabric is the catalyst used by DimDoors' native 1.21 JEI page.
  event.data.addRecipeCatalyst(Item.of('dimdoors:unravelled_fabric'), type)
  // Reality Sponge can initiate/propagate the same decay rules in-world.
  event.data.addRecipeCatalyst(Item.of('dimdoors:reality_sponge'), type)
})
