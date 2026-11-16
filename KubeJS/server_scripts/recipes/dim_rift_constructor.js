ServerEvents.recipes(event => {
    const ref = (key, id) => { if (typeof id !== 'string') return id; const o = {}; if (id.startsWith('#')) o.tag = id.slice(1); else o[key] = id; return o }
    const itemIn = (id, count) => ({ type: 'minecraft:item', io: 'input', item: ref('item', id), count: count || 1 })
    const fluidIn = (id, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: ref('fluid', id), amount: amount })
    const itemOut = (id, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: id, count: count || 1 } })
    const fluidOut = (id, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: id, amount: amount } })

    const viewer = (name, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'realityreversal:dim_tear',
        tick_time: ticks,
        parallelized: true,
        requirements: requirements
    }).id('realityreversal:dim_tear/' + name)
    viewer('keystone_block', 600, [
        itemIn('excessive_utilities:unstable_ingot', 1),
        itemIn('astralsorcery:illumination_powder', 16),
        itemIn('excessive_utilities:red_coal', 3),
        fluidIn('nuclearcraft:cryotheum', 2000),
        itemOut('gaiadimension:keystone_block', 1)
    ])
})