// Re-Avaritia 1.4.2 tests conditions BEFORE reading enabled/recipeEnabled. Its
// tag_empty conditions can crash Create New World when tags are not loaded yet.
// Override the definitions before the reload listener runs; a recipe removal or
// AvaritiaEvents.singularity.removeAll() alone would run too late for that crash.
// This list covers all 27 definitions shipped by the installed Re-Avaritia 1.4.2.
// Recheck data/*/singularities when updating Avaritia or adding its integrations.

// Thankfully pack is using Extended Crafting type.

ServerEvents.highPriorityData(function (event) {
  var materials = [
    'aluminum', 'amethyst_shard', 'blue_ice', 'bronze', 'coal', 'copper',
    'diamond', 'electrum', 'emerald', 'glowstone', 'gold', 'invar', 'iron',
    'lapis_lazuli', 'lead', 'netherite', 'nickel', 'obsidian', 'osmium',
    'platinum', 'quartz', 'redstone', 'refined_obsidian', 'silver', 'steel',
    'tin', 'uranium'
  ]

  for (var i = 0; i < materials.length; i++) {
    event.addJson('avaritia:singularities/' + materials[i], {
      conditions: [{ type: 'forge:false' }]
    })
  }
  console.info('Removed ' + materials.length + ' unused Avaritia singularities before tag checks.')
})

ServerEvents.recipes(function (event) {
  event.remove({ id: 'avaritia:eternal_singularity' })
})
