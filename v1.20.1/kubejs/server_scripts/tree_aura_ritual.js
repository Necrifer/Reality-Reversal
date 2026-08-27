ServerEvents.recipes(event => {
    const {naturesaura} = event.recipes
// Tree Rituals(output, input, sapling type, time in ticks)
    naturesaura.tree_ritual('mysticalagriculture:supremium_farmland', ['dirt', 'mysticalagriculture:supremium_essence', 'aoa3:ghastly_ingot'], 'oak_sapling', 200)
    naturesaura.tree_ritual('mysticalagriculture:machine_frame', ['rftoolsbase:machine_frame', 'enderio:vibrant_gear', 'kubejs:law_ingot', 'mysticalagriculture:supremium_essence', 'bigreactors:blutonium_ingot', ], 'oak_sapling', 200)
})