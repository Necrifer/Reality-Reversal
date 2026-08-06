ServerEvents.recipes(event => {
    const { naturesaura } = event.recipes
// Tree Rituals(output, input, sapling type, time in ticks)
    naturesaura.tree_ritual('mysticalagriculture:supremium_farmland', ['dirt', 'mysticalagriculture:supremium_essence', 'twilightforest:wrought_iron_bar'], 'oak_sapling', 200)
})