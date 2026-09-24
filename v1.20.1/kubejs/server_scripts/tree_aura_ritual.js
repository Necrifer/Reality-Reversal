ServerEvents.recipes(event => {
    const {naturesaura} = event.recipes
// Tree Rituals(output, input, sapling type, time in ticks)
    naturesaura.tree_ritual('mysticalagriculture:supremium_farmland', ['dirt', 'mysticalagriculture:supremium_essence', 'aoa3:ghastly_ingot'], 'oak_sapling', 200)
    naturesaura.tree_ritual('mysticalagriculture:machine_frame', ['rftoolsbase:machine_frame', 'enderio:vibrant_gear', 'kubejs:law_ingot', 'mysticalagriculture:supremium_essence', 'bigreactors:blutonium_ingot', ], 'oak_sapling', 200)
    naturesaura.tree_ritual('minecraft:creaking_heart', ['minecraft:pale_oak_log', 'malum:soulwood_log', 'dog:draconic_soul_fragment', 'gtceu:taint_dust', 'nuclearcraft:polonium_dust', ], 'oak_sapling', 200)

// Altar of Birthing (entity，input，aura-optional，time-optional)
    naturesaura.animal_spawner('sulfur_cube', ['#c:dusts/sulfur', 'malum:sacred_spirit'])
})