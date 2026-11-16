// Laputa Core Orb: Spectrum pedestal recipe, hidden until the player conquers a Laputa castle
// (advancement castle_in_the_sky:conquer_castle = entering the Laputa Core block).
// Layout: the Laputa Miniature in the centre, one of each Aether gem and Holystone around it.
ServerEvents.recipes(event => {
  event.custom({
    type: 'spectrum:pedestal',
    required_advancement: 'castle_in_the_sky:conquer_castle',
    tier: 'basic',
    time: 200,
    experience: 0,
    disable_yield_upgrades: true,
    colors: {
      'spectrum:cyan': 0,
      'spectrum:magenta': 0,
      'spectrum:yellow': 0,
      'spectrum:black': 0,
      'spectrum:white': 0
    },
    pattern: [
      ' G ',
      'AMZ',
      ' H '
    ],
    key: {
      M: { item: 'castle_in_the_sky:laputa_miniature' },
      G: { item: 'aether:enchanted_gravitite' },
      A: { item: 'aether:ambrosium_shard' },
      Z: { item: 'aether:zanite_gemstone' },
      H: { item: 'aether:holystone' }
    },
    result: { id: 'castle_in_the_sky:laputa_core_orb', count: 1 }
  }).id('modpack:spectrum/laputa_core_orb')
})
