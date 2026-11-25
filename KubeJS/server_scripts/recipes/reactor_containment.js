// Reactor Containment Chamber (MMCR) recipes. All numbers and items are TEST placeholders.
// The containment logic is in server_scripts/rr_reactor_containment.js and applies to every
// recipe in this pool: a run only starts while the reactor inside is "beyond hope".
ServerEvents.recipes(event => {
    // Inputs use item + count; outputs use stack: { id, count } (MMCR reads outputs only from stack).
    const item = (io, id, count, chance) => {
        const r = io === 'output'
            ? { type: 'minecraft:item', io: io, stack: { id: id, count: count || 1 } }
            : { type: 'minecraft:item', io: io, item: id.startsWith('#') ? { tag: id.slice(1) } : { item: id }, count: count || 1 }
        if (chance !== undefined) r.chance = chance
        return r
    }
    const energyIn = feTick => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: feTick })

    const containment = (name, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr:reactor_containment',
        tick_time: ticks,
        parallelized: false,
        requirements: requirements
    }).id('mmcr:reactor_containment/' + name)

    // TEST: 400 ticks (20 s), shorter than Draconic Evolution's 60 s minimum meltdown delay.
    containment('test_meltdown', 400, [
        item('input', 'minecraft:obsidian', 16),
        item('input', 'minecraft:nether_star', 2),
        energyIn(200000),
        item('output', 'draconicevolution:chaos_shard', 1),
        item('output', 'draconicevolution:dragon_heart', 1, 0.25)
    ])

    // TEST controller recipe.
    event.shaped('mmcr:reactor_containment_controller', ['OAO', 'ACA', 'OAO'], {
        O: 'draconicevolution:infused_obsidian',
        A: 'draconicevolution:awakened_draconium_ingot',
        C: 'draconicevolution:awakened_core'
    }).id('modpack:reactor_containment')
})
