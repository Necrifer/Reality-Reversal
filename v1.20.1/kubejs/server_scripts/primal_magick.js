ServerEvents.recipes(event => {
// Same problem as the vanilla crafting...
  const idRemoval = [
    'primalmagick:primalite_ingot'
  ];
  idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })

  // Primal Magick's custom recipe serializers are not reliably mutated by
  // KubeJS replaceInput(). Remove and recreate these recipes explicitly so
  // their research gates and recipe IDs remain intact.

  //This is on me. I didn't realise the replaceInput class doesn't work directly.
  //PrimalMagick has the research gating properties that I forgot.
  // Also this looks chunky but I rather use this then 9 repeating lines.
  // Can be reused for other stuff too.
  const essenceCrystalSources = [
    'sun',
    'earth',
    'sea',
    'sky',
    'moon',
    'blood',
    'infernal',
    'void',
    'hallowed'
  ]
  const forbiddenCrystalResearch = {
    blood: 't_discover_blood',
    infernal: 't_discover_infernal',
    void: 't_discover_void',
    hallowed: 't_discover_hallowed'
  }

  essenceCrystalSources.forEach(source => {
    const recipeId = `primalmagick:essence_crystal_${source}_from_shard`
    const discovery = forbiddenCrystalResearch[source]

    event.remove({ id: recipeId })
    event.custom({
      type: 'primalmagick:arcane_crafting_shaped',
      group: 'essence_crystal',
      key: {
        '#': { item: `primalmagick:essence_shard_${source}` },
        Q: { item: 'botania:quartz_mana' }
      },
      pattern: [
        '###',
        '#Q#',
        '###'
      ],
      research: discovery
        ? `CRYSTAL_SYNTHESIS&&${discovery}`
        : 'CRYSTAL_SYNTHESIS',
      result: {
        item: `primalmagick:essence_crystal_${source}`
      }
    }).id(recipeId)
  })

  // Replace the Quartz Block at the center of each cluster recipe.
  // event.custom() returns the recipe object on which .id() is available;
  // event.customFilter() only creates a filter predicate and cannot add a recipe.
  essenceCrystalSources.forEach(source => {
    const recipeId = `primalmagick:essence_cluster_${source}_from_crystal`
    const discovery = forbiddenCrystalResearch[source]

    event.remove({ id: recipeId })
    event.custom({
      type: 'primalmagick:arcane_crafting_shaped',
      group: 'essence_cluster',
      key: {
        '#': { item: `primalmagick:essence_crystal_${source}` },
        Q: { item: 'actuallyadditions:ethetic_green_block' }
      },
      pattern: [
        '###',
        '#Q#',
        '###'
      ],
      research: discovery
        ? `CLUSTER_SYNTHESIS&&${discovery}`
        : 'CLUSTER_SYNTHESIS',
      result: {
        item: `primalmagick:essence_cluster_${source}`
      }
    }).id(recipeId)
  })

  event.remove({ id: 'primalmagick:magnifying_glass' })
  event.custom({
    type: 'primalmagick:arcane_crafting_shaped',
    key: {
      G: { tag: 'forge:glass_panes/colorless' },
      I: { item: 'aoa3:ghastly_ingot' },
      S: { tag: 'forge:rods/wooden' }
    },
    pattern: [
      ' I ',
      'IGI',
      'SI '
    ],
    research: 'FIRST_STEPS@2',
    result: {
      item: 'primalmagick:magnifying_glass'
    }
  }).id('primalmagick:magnifying_glass')

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
      item: 'mysticalagriculture:prudentium_farmland'
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
