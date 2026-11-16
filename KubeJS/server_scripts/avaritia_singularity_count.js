// Avaritia's 27 built-in material singularities, re-issued with a higher item cost.
// Avaritia has no config for this: the cost is the optional "count" field of each
// data/avaritia/singularities/<name>.json (default 1000), so the files are overridden here.
// JAOPCA's generated singularities use config/jaopca/modules/avaritia_singularity.toml (count) instead.
ServerEvents.generateData('after_mods', event => {
  const COUNT = 1000000

  // [name, ingredient (item ID or '#tag'), overlay colour, underlay colour] - colours copied from Avaritia.
  const singularities = [
    ['aluminum', '#c:ingots/aluminum', 13290714, 10132646],
    ['amethyst_shard', 'minecraft:amethyst_shard', 13607155, 9267916],
    ['blue_ice', 'minecraft:blue_ice', 9353470, 7052795],
    ['bronze', '#c:ingots/bronze', 14262083, 12282683],
    ['coal', 'minecraft:coal', 3553081, 2498084],
    ['copper', 'minecraft:copper_ingot', 16422780, 12342320],
    ['diamond', 'minecraft:diamond', 10943721, 1748136],
    ['electrum', '#c:ingots/electrum', 16118158, 10390846],
    ['emerald', 'minecraft:emerald', 8255660, 36378],
    ['glowstone', 'minecraft:glowstone_dust', 16765839, 10510645],
    ['gold', 'minecraft:gold_ingot', 16643423, 14257668],
    ['invar', '#c:ingots/invar', 12371387, 6125687],
    ['iron', 'minecraft:iron_ingot', 14803425, 7105644],
    ['lapis_lazuli', 'minecraft:lapis_lazuli', 6786538, 1790887],
    ['lead', '#c:ingots/lead', 7110034, 3290466],
    ['netherite', 'minecraft:netherite_ingot', 4471355, 1709590],
    ['nickel', '#c:ingots/nickel', 14800792, 11638636],
    ['obsidian', 'minecraft:obsidian', null, 1051676], // Avaritia sets no overlay colour for this one
    ['osmium', '#c:ingots/osmium', 15134455, 12633293],
    ['platinum', '#c:ingots/platinum', 7334639, 5748924],
    ['quartz', 'minecraft:quartz', 15394270, 11969678],
    ['redstone', 'minecraft:redstone', 16711680, 9046273],
    ['refined_obsidian', '#c:ingots/refined_obsidian', 11116984, 9271479],
    ['silver', '#c:ingots/silver', 12635602, 6254204],
    ['steel', '#c:ingots/steel', 5658198, 2302755],
    ['tin', '#c:ingots/tin', 10534589, 5404809],
    ['uranium', '#c:ingots/uranium', 13826513, 10929572]
  ]

  singularities.forEach(entry => {
    const name = entry[0], ingredient = entry[1], overlay = entry[2], underlay = entry[3]
    const isTag = ingredient.startsWith('#')
    const json = {
      name: 'avaritia:' + name,
      displayName: 'singularity.avaritia.' + name,
      ingredient: isTag ? { tag: ingredient.slice(1) } : { item: ingredient },
      count: COUNT,
      underlayColor: underlay
    }
    if (overlay !== null) json.overlayColor = overlay
    // Same rule as Avaritia: a tag-based singularity only exists while its tag has items.
    if (isTag) json['neoforge:conditions'] = [{ type: 'neoforge:not', value: { type: 'neoforge:tag_empty', tag: ingredient.slice(1) } }]
    event.json('avaritia:singularities/' + name + '.json', json)
  })
  console.info('Set ' + singularities.length + ' Avaritia singularities to ' + COUNT + ' items each.')
})
