ServerEvents.recipes(event => {
  // Spirit Infusion uses Primal Magick's custom arcane crafting serializer.
  // Recreate the recipe so its research requirement remains intact.
  const idRemoval = [
    'primalmagick:primalite_ingot'
  ];
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })

  event.custom({
    type: 'primalmagick:arcane_crafting_shapeless',
    group: 'primalite_ingot',
    ingredients: [
      { item: 'aether:ambrosium_shard' },
      { item: 'primalmagick:essence_dust_earth' },
      { item: 'primalmagick:essence_dust_sea' },
      { item: 'primalmagick:essence_dust_sky' },
      { item: 'primalmagick:essence_dust_sun' },
      { item: 'primalmagick:essence_dust_moon' }
    ],
    requirement: {
      requirement_type: 'primalmagick:research',
      rootKey: {
        key_type: 'primalmagick:research_entry',
        rootKey: 'primalmagick:primalite'
      }
    },
    result: {
      count: 1,
      id: 'primalmagick:primalite_ingot'
    }
  }).id('primalmagick:primalite_ingot')
})
