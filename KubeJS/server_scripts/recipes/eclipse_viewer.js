// Eclipse Viewer (MMCR) recipes. Inputs are ingredient objects ({item}/{tag}, {fluid}/{tag});
// item and fluid outputs use a stack object ({id, count} / {id, amount}). Prefix an input ID with '#' to use a tag;
// pass a full ingredient object (e.g. neoforge:components) instead of an ID for component-specific inputs.

// Now why on earth will fluid output use this instead of fluid like every other mod out there... 
ServerEvents.recipes(event => {
    // Plain object building: Rhino may not support computed keys such as { [key]: id }.
    const ref = (key, id) => { if (typeof id !== 'string') return id; const o = {}; if (id.startsWith('#')) o.tag = id.slice(1); else o[key] = id; return o }
    const itemIn = (id, count) => ({ type: 'minecraft:item', io: 'input', item: ref('item', id), count: count || 1 })
    const fluidIn = (id, amount) => ({ type: 'minecraft:fluid', io: 'input', fluid: ref('fluid', id), amount: amount })
    const itemOut = (id, count) => ({ type: 'minecraft:item', io: 'output', stack: { id: id, count: count || 1 } })
    const fluidOut = (id, amount) => ({ type: 'minecraft:fluid', io: 'output', stack: { id: id, amount: amount } })

    const viewer = (name, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr:eclipse_viewer',
        tick_time: ticks,
        parallelized: true,
        requirements: requirements
    }).id('mmcr:eclipse_viewer/' + name)

    viewer('printed_astral_processor', 100, [
        itemIn('appliedas:astral_fluix_block', 1),
        itemIn('gtceu:good_electronic_circuit', 5),
        fluidIn('astralsorcery:liquid_starlight', 5000),
        fluidIn('kubejs:fluid_charged_fluix', 3000),
        itemOut('appliedas:printed_astral_processor', 5)
    ])
    viewer('eden_fluid', 200, [
        itemIn('divinerpg:eden_chunk', 5),
        itemIn('divinerpg:eden_heart', 1),
        fluidIn('jaopca:molten.starmetal', 3000), // JAOPCA IDs are form.material
        fluidOut('kubejs:eden_fluid', 10)
    ])
    viewer('aberrant_crystal', 300, [
        itemIn('ae2:fluix_crystal', 16),
        fluidIn('kubejs:fluid_charged_fluix', 8000),
        fluidIn('#c:sulfuric_acid', 1500),
        itemOut('appliedas:astral_fluix_crystal', 1)
    ])
    viewer('sol_astral_ingot_easy', 600, [
        itemIn('appliedas:constellation_core'),
        fluidIn('kubejs:eden_fluid', 1000),
        itemIn('draconicevolution:medium_chaos_frag', 3),
        itemOut('kubejs:sol_astral_ingot', 1)
    ])
    viewer('starmetal_seed', 1200, [
        itemIn({ type: 'neoforge:components', items: 'astralsorcery:lumen_crystal',
            components: { 'astralsorcery:lumen': 'astralsorcery:prismatic' }, strict: false }, 4),
        itemIn('mysticalagriculture:marble_essence', 12),
        itemIn('mysticalagriculture:prosperity_seed_base', 1),
        fluidIn('enderio:fluid_liquid_darkness_still', 12000),
        fluidIn('ad_astra:hydrogen', 4000),
        itemOut('mysticalagriculture:starmetal_seeds', 1)
    ])
})
