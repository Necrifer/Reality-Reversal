// Industrial Foregoing 3.6.38 recipe samples for Minecraft 1.21.1 / NeoForge.
//
// Industrial Foregoing does not provide native KubeJS recipe builders for this
// version. KubeJS can still register all of its datapack recipe serializers
// through event.custom().
//
// These are active test recipes. Change or remove them after testing.
const enable_recipe = false;
ServerEvents.recipes(event => {
  if (!enable_recipe) {
    return;
  }
  // Dissolution Chamber
  // ItemStack output uses "id"; its fluid input is a SizedFluidIngredient and
  // therefore uses "fluid".
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:cobblestone' }
    ],
    inputFluid: {
      amount: 100,
      fluid: 'minecraft:water'
    },
    processingTime: 40,
    output: {
      count: 1,
      id: 'minecraft:stone'
    }
  }).id('modpack:industrial_foregoing_samples/dissolution_chamber')

  // Fluid Extractor
  // FluidStack output uses "id", not "fluid". The result is the block state
  // left in the world after an extraction succeeds.
  event.custom({
    type: 'industrialforegoing:fluid_extractor',
    input: {
      item: 'minecraft:melon'
    },
    result: {
      Name: 'minecraft:air'
    },
    breakChance: 0.05,
    output: {
      amount: 25,
      id: 'minecraft:water'
    },
    defaultRecipe: false
  }).id('modpack:industrial_foregoing_samples/fluid_extractor')

  // Material Stonework Factory: generator selection.
  // waterNeed/lavaNeed are tank requirements; *Consume is the amount used per
  // generated item.
  event.custom({
    type: 'industrialforegoing:stonework_generate',
    output: {
      count: 1,
      id: 'minecraft:basalt'
    },
    waterNeed: 1000,
    lavaNeed: 1000,
    waterConsume: 100,
    lavaConsume: 100
  }).id('modpack:industrial_foregoing_samples/stonework_generate')

  // Material Stonework Factory: pickaxe/crusher processing action.
  // This serializer uses Ingredients for both sides, so the output uses "item".
  event.custom({
    type: 'industrialforegoing:crusher',
    input: {
      item: 'minecraft:stone'
    },
    output: {
      item: 'minecraft:cobblestone'
    }
  }).id('modpack:industrial_foregoing_samples/crusher')

  // Ore Laser Base
  // The output is a SizedIngredient, hence "item" plus "count".
  // Empty filters make this sample valid in every biome and dimension type.
  event.custom({
    type: 'industrialforegoing:laser_drill_ore',
    catalyst: {
      item: 'industrialforegoing:white_laser_lens'
    },
    output: {
      count: 1,
      item: 'minecraft:amethyst_shard'
    },
    rarity: [
      {
        biome_filter: {
          whitelist: [],
          blacklist: []
        },
        dimension_filter: {
          whitelist: [],
          blacklist: []
        },
        depth_min: -64,
        depth_max: 320,
        weight: 10
      }
    ]
  }).id('modpack:industrial_foregoing_samples/laser_drill_ore')

  // Fluid Laser Base
  // The output is a SizedFluidIngredient, hence "fluid" plus "amount".
  event.custom({
    type: 'industrialforegoing:laser_drill_fluid',
    catalyst: {
      item: 'industrialforegoing:white_laser_lens'
    },
    output: {
      amount: 100,
      fluid: 'minecraft:water'
    },
    rarity: [
      {
        biome_filter: {
          whitelist: [],
          blacklist: []
        },
        dimension_filter: {
          whitelist: [],
          blacklist: []
        },
        depth_min: -64,
        depth_max: 320,
        weight: 10
      }
    ]
  }).id('modpack:industrial_foregoing_samples/laser_drill_fluid')

  // Removal examples:
  // event.remove({ id: 'industrialforegoing:dissolution_chamber/simple_machine_frame' })
  // event.remove({ type: 'industrialforegoing:laser_drill_ore' })
})
