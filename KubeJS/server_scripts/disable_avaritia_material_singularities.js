








ServerEvents.generateData('after_mods', function (event) {
  function rrAddJson(path, data) { event.json(path.endsWith('.json') ? path : path + '.json', data); }
  var materials = [
    'aluminum', 'amethyst_shard', 'blue_ice', 'bronze', 'coal', 'copper',
    'diamond', 'electrum', 'emerald', 'glowstone', 'gold', 'invar', 'iron',
    'lapis_lazuli', 'lead', 'netherite', 'nickel', 'obsidian', 'osmium',
    'platinum', 'quartz', 'redstone', 'refined_obsidian', 'silver', 'steel',
    'tin', 'uranium'
  ]

  for (var i = 0; i < materials.length; i++) {
    rrAddJson('avaritia:singularities/' + materials[i], {
      conditions: [{ type: 'neoforge:false' }]
    })
  }
  console.info('Removed ' + materials.length + ' unused Avaritia singularities before tag checks.')
})


