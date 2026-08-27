ServerEvents.recipes(event => {
// Same problem as the vanilla crafting...
  const idRemoval = [
    'primalmagick:primalite_ingot'
  ];
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })

  const arcanecraftingShapeless = [({
    recipeId: 'primalmagick:primalite_ingot',
    group: 'primalite_ingot',
    ingredients: [
      { item: 'aether:ambrosium_shard' },
      { item: 'primalmagick:essence_dust_earth' },
      { item: 'primalmagick:essence_dust_sea' },
      { item: 'primalmagick:essence_dust_sky' },
      { item: 'primalmagick:essence_dust_sun' },
      { item: 'primalmagick:essence_dust_moon' }
    ],
    research: 'PRIMALITE',
    result: {
      count: 1,
      item: 'primalmagick:primalite_ingot'
    }
  })]
  arcanecraftingShapeless.forEach(recipe => {
    event.custom({
      type: 'primalmagick:arcane_crafting_shapeless',
      ingredients: recipe.ingredients,
      research: recipe.research,
      result: recipe.result,
    }).id(recipe.recipeId)
  })

  const arcaneCraftingShaped = [
  {
    recipeId: 'ars_nouveau:novice_spell_book',
    mana: {
      hallowed: 25,
      earth: 25,
      infernal: 25,
      sea: 25
    },
    pattern: [
      'ABC',
      'DEF',
      'GHI'
    ],
    key: {
      A: { item: 'primalmagick:essence_shard_infernal' },
      B: { item: 'malum:eldritch_spirit' },
      C: { item: 'primalmagick:essence_shard_earth'},
      D: { item: 'malum:arcane_spirit'},
      E: { item: 'minecraft:dirt'},
      F: { item: 'malum:wicked_spirit'},
      G: { item: 'primalmagick:essence_shard_hallowed'},
      H: { item: 'malum:sacred_spirit'},
      I: { item: 'primalmagick:essence_shard_sea'}
    },
    research: 'BASIC_SORCERY',
    result: {
      count: 1,
      item: 'mysticalagriculture:tertium_farmland'
    }
  }
]
  arcaneCraftingShaped.forEach(recipe => {
    event.custom({
      type: 'primalmagick:arcane_crafting_shaped',
      pattern: recipe.pattern,
      key: recipe.key,
      result: recipe.result,
      mana: recipe.mana,
      research: recipe.research
    }).id(recipe.recipeId)
  })
})
