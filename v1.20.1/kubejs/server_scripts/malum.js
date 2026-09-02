ServerEvents.recipes(event => {
  const addRecipe = (id, recipe) => event.custom(recipe).id(id)
  const sizedItem = (item, count) => ({ item: item, count: count })
  const sizedTag = (tag, count) => ({ tag: tag, count: count })
  const partialNbtItem = (item, count, nbt) => ({
    type: 'forge:partial_nbt',
    item: item,
    count: count,
    nbt: nbt
  })
  const resultItem = (item, count) => ({ item: item, count: count })
  const spirit = (type, count) => ({ type: type, count: count })

  const removeRecipe = [
    'malum:spirit_infusion/soul_stained_steel_ingot'
  ]

  removeRecipe.forEach(recipeId => {
    event.remove({ id: recipeId })
  })

  addRecipe('kubejs:malum/soul_stained_steel_ingot', {
    type: 'malum:spirit_infusion',
    input: sizedItem('industrialforegoing:pink_slime_ingot', 4),
    output: resultItem('malum:soul_stained_steel_ingot', 4),
    spirits: [
      spirit('wicked', 3),
      spirit('arcane', 1),
      spirit('earthen', 1)
    ],
    extra_items: [
      sizedItem('malum:processed_soulstone', 4),
      sizedItem('minecraft:quartz', 2)
    ]
  })

  addRecipe('kubejs:malum/tertium_farmland', {
    type: 'malum:spirit_infusion',
    input: sizedItem('minecraft:dirt', 1),
    output: resultItem('mysticalagriculture:tertium_farmland', 1),
    spirits: [
      spirit('sacred', 2),
      spirit('aerial', 5),
      spirit('earthen', 3),
      spirit('aqueous', 3)
    ],
    extra_items: [
      sizedItem('mysticalagriculture:tertium_essence', 4),
      sizedItem('minecraft:wither_skeleton_skull', 1)
    ]
  })

  addRecipe('kubejs:malum/plate_advanced', {
    type: 'malum:spirit_infusion',
    input: sizedItem('nuclearcraft:plate_basic', 1),
    output: resultItem('nuclearcraft:plate_advanced', 1),
    spirits: [
      spirit('infernal', 2),
      spirit('aerial', 2),
      spirit('earthen', 3),
      spirit('aqueous', 2)
    ],
    extra_items: [
      sizedItem('nuclearcraft:stainless_steel_ingot', 3),
      sizedItem('nuclearcraft:tough_alloy_ingot', 2)
    ]
  })

  addRecipe('kubejs:malum/lostsoulsand', {
    type: 'malum:spirit_infusion',

    // Malum's IngredientWithCount accepts a normal Forge ingredient plus a
    // top-level count. A tag must therefore use "tag", not an item ID that
    // begins with '#'.
    input: sizedTag('forge:sand', 32),
    output: resultItem('callfromthedepth_:lostsoulssand', 32),
    spirits: [
      spirit('wicked', 16),
      spirit('eldritch', 16)
    ],
    extra_items: [
      sizedItem('draconicevolution:draconium_core', 2),

      // A filled Soul Vial stores a full serialized entity, including its
      // position, UUID, attributes, and capabilities. Those values change for
      // every captured mob and must not be copied into a recipe.
      //
      // forge:partial_nbt recursively checks only the fields supplied below.
      // Consequently, any valid Soul Vial containing a Riper is accepted,
      // while all irrelevant per-entity data is safely ignored.
      partialNbtItem('enderio:filled_soul_vial', 1, {
        BlockEntityTag: {
          EntityStorage: {
            Entity: {
              id: 'callfromthedepth_:riper'
            }
          }
        }
      })
    ]
  })
})
