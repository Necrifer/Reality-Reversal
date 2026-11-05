// Productive Bees 13.14.0 recipe overrides.
// Formats copied from the jar: data/productivebees/recipe/centrifuge/** and bee_produce/**.
// The jar recipe id is NOT always named after the bee (skeletal -> centrifuge/honeycomb_bone);
// look up the id in JEI (hover the recipe with advanced tooltips on) or in the jar before editing.
ServerEvents.recipes(event => {
  // A configurable honeycomb of one bee type, e.g. comb('productivebees:skeletal').
  const comb = bee => ({
    type: 'productivebees:component',
    components: { 'productivebees:bee_type': bee },
    items: 'productivebees:configurable_honeycomb'
  })
 const removeIds = [
    // 'productivebees:centrifuge/honeycomb_withered'
  ]
  removeIds.forEach(id => event.remove({ id: id }))
  // One output entry. id: an item id, or '#tag' for a tag.
  // opts (all optional): chance 0-1 (default 1 = always), min / max for a random count.
  const out = (id, opts) => Object.assign(
    { item: id.startsWith('#') ? { tag: id.slice(1) } : { item: id } },
    opts || {}
  )

  // ---------------------------------------------------------------------------
  // Centrifuge: what a honeycomb gives when spun.
  // [recipe path after 'productivebees:centrifuge/', bee type, outputs, fluid [id, mB] or null, processing ticks or null]
  // Re-using the jar's path replaces that recipe; a new path adds an extra recipe.
  // ---------------------------------------------------------------------------
  const centrifuge = [
    // Jar id is centrifuge/draconicevolution/honeycomb_chaos. Fluids go in the 4th slot, not in outputs.
    ['draconicevolution/honeycomb_chaos', 'productivebees:chaos', [
      out('draconicevolution:small_chaos_frag'),
      out('productivebees:wax')
    ], ['kubejs:molten_chaos', 50], null]
//    ['honeycomb_bone', 'productivebees:skeletal', [
//      out('minecraft:bone_meal', { chance: 0.9, min: 1, max: 3 }),
//      out('minecraft:bone', { chance: 0.25 }),
//      out('productivebees:wax')
//    ], null, null],
//    ['raw_materials/honeycomb_iron', 'productivebees:iron', [
//      out('#c:raw_materials/iron', { chance: 0.5 }),
//      out('productivebees:wax')
//    ], ['productivebees:honey', 100], null],
//    ['raw_materials/honeycomb_gold', 'productivebees:gold', [
//      out('minecraft:raw_gold', { chance: 0.5 }),
//      out('#c:nuggets/gold', { min: 1, max: 3 }),
//      out('productivebees:wax')
//    ], null, 100]
  ]

  // Index access instead of ([a, b]) => destructuring, which Rhino may not support.
  centrifuge.forEach(r => {
    const id = 'productivebees:centrifuge/' + r[0]
    const json = { type: 'productivebees:centrifuge', ingredient: comb(r[1]), outputs: r[2] }
    if (r[3]) json.fluid = { fluid: r[3][0], amount: r[3][1] }
    if (r[4]) json.processingTime = r[4]
    event.remove({ id: id })
    event.custom(json).id(id)
  })

  // ---------------------------------------------------------------------------
  // Beehive produce: what a bee drops into an advanced hive.
  // [recipe path after 'productivebees:bee_produce/', bee type, outputs]
  // The bee's own comb is usually the first output; keep it unless you want a comb-less bee.
  // ---------------------------------------------------------------------------
  const produce = [
//    ['skeletal_bee', 'productivebees:skeletal', [
//      { item: comb('productivebees:skeletal') },
//      out('minecraft:bone', { chance: 0.2 }),
//      out('#c:pollens', { chance: 0.05 })
//    ]]
  ]

  produce.forEach(r => {
    const id = 'productivebees:bee_produce/' + r[0]
    event.remove({ id: id })
    event.custom({ type: 'productivebees:advanced_beehive', ingredient: r[1], results: r[2] }).id(id)
  })
})
