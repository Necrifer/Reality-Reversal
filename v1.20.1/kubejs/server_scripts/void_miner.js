const minerOutput = (value, weight, count) => {
  const stack = typeof value === 'string' ? Item.of(value, count || 1) : value.copy().withCount(count || 1)
  const output = { item: stack.id, weight: weight }
  if ((count || 1) > 1) output.count = count
  if (stack.nbt) output.nbt = stack.nbt
  return output
}

ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 1,
    output: minerOutput(value, weight, count)
  }).id(id)

  // Really want to simplify this mess but...
  addMinerRecipe('modpack:voidminers/netherite_scrap', 'minecraft:netherite_scrap', 0.25, 2)
  //event.remove({ id: 'voidminers:overworld/tier1_miner/diamond_ore' })
  addMinerRecipe('modpack:voidminers/diamond_ore', 'minecraft:diamond_ore', 2, 1)
  addMinerRecipe('modpack:voidminers/coal_ore', 'minecraft:coal_ore', 15, 1)
  addMinerRecipe('modpack:voidminers/iron_ore', 'minecraft:iron_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/copper_ore', 'minecraft:copper_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/black_quartz_ore', 'actuallyadditions:black_quartz_ore', 10, 1)
  addMinerRecipe('modpack:voidminers/redstone_ore', 'minecraft:redstone_ore', 11.5, 1)
  addMinerRecipe('modpack:voidminers/lapis_ore', 'minecraft:lapis_ore', 10, 1)
  addMinerRecipe('modpack:voidminers/gold_ore', 'minecraft:gold_ore', 12.6, 1)
  addMinerRecipe('modpack:voidminers/emerald_ore', 'minecraft:emerald_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/nether_quartz_ore', 'minecraft:nether_quartz_ore', 15, 1)
  addMinerRecipe('modpack:voidminers/ancient_debris', 'minecraft:ancient_debris', 1, 1)
  addMinerRecipe('modpack:voidminers/realmite_ore', 'divinerpg:realmite_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/bloodgem_ore', 'divinerpg:bloodgem_ore', 9, 1) 
  addMinerRecipe('modpack:voidminers/emberstone_ore', 'aoa3:emberstone_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/jade_ore', 'aoa3:jade_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/runium_ore', 'aoa3:runium_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/limonite_ore', 'aoa3:limonite_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/arlemite_ore', 'divinerpg:arlemite_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/rupee_ore', 'divinerpg:rupee_ore', 11.5, 1)
  addMinerRecipe('modpack:voidminers/draconium_ore', 'draconicevolution:overworld_draconium_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/anglesite_ore', 'bigreactors:anglesite_ore', 8, 1)
  addMinerRecipe('modpack:voidminers/benitoite_ore', 'bigreactors:benitoite_ore', 8, 1)
  addMinerRecipe('modpack:voidminers/tin_ore', 'mekanism:tin_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/osmium_ore', 'mekanism:osmium_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/uranium_ore', 'mekanism:uranium_ore', 3, 1)
  addMinerRecipe('modpack:voidminers/fluorite_ore', 'mekanism:fluorite_ore', 6, 1)
  addMinerRecipe('modpack:voidminers/peridot_ore', 'alltheores:peridot_ore', 6, 1)
  addMinerRecipe('modpack:voidminers/lead_ore', 'mekanism:lead_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/prosperity_ore', 'mysticalagriculture:prosperity_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/cinnabar_ore', 'thermal:cinnabar_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/ruby_ore', 'thermal:ruby_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/inferium_ore', 'mysticalagriculture:inferium_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/soulium_ore', 'mysticalagriculture:soulium_ore', 13, 1)
  addMinerRecipe('modpack:voidminers/nickel_ore', 'thermal:nickel_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/aluminium_ore', 'immersiveengineering:ore_aluminum', 13, 1)
  addMinerRecipe('modpack:voidminers/silver_ore', 'alltheores:silver_ore', 12.2, 1)
  addMinerRecipe('modpack:voidminers/zinc_ore', 'alltheores:zinc_ore', 6, 1)
  addMinerRecipe('modpack:voidminers/dimensionalshard_ore', 'rftoolsbase:dimensionalshard_overworld', 0.1, 1)
  addMinerRecipe('modpack:voidminers/platinum_ore', 'alltheores:platinum_ore', 8, 1)
  addMinerRecipe('modpack:voidminers/iridium_ore', 'alltheores:iridium_ore', 3.3, 1)
  addMinerRecipe('modpack:voidminers/sapphire_ore', 'alltheores:sapphire_ore', 8, 1)
  addMinerRecipe('modpack:voidminers/boron_ore', 'nuclearcraft:boron_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/lithium_ore', 'nuclearcraft:lithium_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/magnesium_ore', 'nuclearcraft:magnesium_ore', 11, 1)
  addMinerRecipe('modpack:voidminers/thorium_ore', 'nuclearcraft:thorium_ore', 10, 1)
  addMinerRecipe('modpack:voidminers/amber_ore', 'valoria:amber_ore', 8, 1)
  addMinerRecipe('modpack:voidminers/rubetine', 'voidminers:rubetine', 1, 1)
  addMinerRecipe('modpack:voidminers/aurantium', 'voidminers:aurantium', 1, 1)
})
ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 2,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/citrinetine', 'voidminers:citrinetine', 2, 1)
  addMinerRecipe('modpack:voidminers/apatite_ore', 'thermal:apatite_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/niter_ore', 'thermal:niter_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/anthracite_ore', 'divinerpg:anthracite_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/cobalt_ore', 'tconstruct:cobalt_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/oxdrite_ore', 'divinerpg:oxdrite_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/soulstone_ore', 'malum:soulstone_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/blazing_quartz_ore', 'malum:blazing_quartz_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/cthonic_gold_ore', 'malum:cthonic_gold_ore', 9, 1)
  addMinerRecipe('modpack:voidminers/antimony_stone_ore', 'ftbmaterials:antimony_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/salt_stone_ore', 'ftbmaterials:salt_stone_ore', 12, 1)
})

ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 3,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/titanium_stone_ore', 'ftbmaterials:titanium_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/tungsten_stone_ore', 'ftbmaterials:tungsten_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/bauxite_stone_ore', 'ftbmaterials:bauxite_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/monazite_stone_ore', 'ftbmaterials:monazite_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/sulfur_ore', 'thermal:sulfur_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/resonating_ore_stone_ore', 'ftbmaterials:resonating_ore_stone_ore', 12, 1)
  addMinerRecipe('modpack:voidminers/rock_salt_ore', 'primalmagick:rock_salt_ore', 5, 1)
  addMinerRecipe('modpack:voidminers/verdium', 'voidminers:verdium', 2, 1)
})

ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 4,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/azurine', 'voidminers:azurine', 2, 1)
})
ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 5,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/caerium', 'voidminers:caerium', 2, 1)
})
ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 6,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/amethystine', 'voidminers:amethystine', 2, 1)
})
ServerEvents.recipes(event => {
  const addMinerRecipe = (id, value, weight, count) => event.custom({
    type: 'voidminers:miner',
    dimension: 'javd:void',
    minTier: 7,
    output: minerOutput(value, weight, count)
  }).id(id)
  addMinerRecipe('modpack:voidminers/rosaium', 'voidminers:rosarium', 2, 1)
})
