ServerEvents.recipes(event => {
  // Spirit Infusion uses Primal Magick's custom arcane crafting serializer.
  // Recreate the recipe so its research requirement remains intact.
  const idRemoval = [
    'primalmagick:primalite_ingot'
  ];
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })

  const arcanecraftingShapeless = [({
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
  })]
  arcanecraftingShapeless.forEach(recipe => {
    event.custom({
      type: 'primalmagick:arcane_crafting_shapeless',
      ingredients: recipe.ingredients,
      result: recipe.result,
      outputFluid: recipe.outputFluid
    }).id(recipe.recipeId)
  })

  const arcaneCraftingShaped = [
  {
    mana: {
      sources: {
        'primalmagick:hallow': 25000,
        'primalmagick:earth': 25000,
        'primalmagick:infernal': 25000,
        'primalmagick:sea': 25000
      }
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
      E: { item: 'primalmagick:spell_scroll_blank'},
      F: { item: 'malum:wicked_spirit'},
      G: { item: 'primalmagick:essence_shard_hallowed'},
      H: { item: 'malum:sacred_spirit'},
      I: { item: 'primalmagick:essence_shard_sea'}
    },
    requirement: {
      requirement_type: 'primalmagick:research',  
    rootKey: {
        key_type: 'primalmagick:research_entry',
        rootKey: 'primalmagick:basic_sorcery'
      }
    },
    result: {
      count: 1,
      id: 'ars_nouveau:novice_spell_book'
    }
  }]
  arcaneCraftingShaped.forEach(recipe => {
    event.custom({
      type: 'primalmagick:arcane_crafting_shaped',
      pattern: recipe.pattern,
      key: recipe.key,
      result: recipe.result,
      mana: recipe.mana,
      requirement: recipe.requirement
    }).id(recipe.recipeId)
  })
})
