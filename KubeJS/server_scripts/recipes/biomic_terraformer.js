// Biomic Terraformer (MMCR) recipes. Numbers are placeholders.
// The world effects (biome change, aurora) are applied in server_scripts/biomic_terraformer_effects.js,
// keyed on these recipe IDs: keep 'terraform' and 'aurora' or update RECIPE_* there too.
ServerEvents.recipes(event => {
    const itemIn = (id, count) => ({ type: 'minecraft:item', io: 'input', item: id.startsWith('#') ? { tag: id.slice(1) } : { item: id }, count: count || 1 })
    const energyIn = feTick => ({ type: 'neoforge:energy', io: 'input', fe_per_tick: feTick })

    const terraformer = (name, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr:biomic_terraformer',
        tick_time: ticks,
        parallelized: false,
        requirements: requirements
    }).id('mmcr:biomic_terraformer/' + name)

    // Any recorded Biome Marker (the biome is read from the marker in the input hatch).
    terraformer('terraform', 2000, [
        itemIn('excessive_utilities:biome_marker', 1),
        energyIn(512000)
    ])
    // Starts an aurora. Refused (inputs kept) outside night, outside aurora_dimensions, or during an aurora.
    terraformer('aurora', 100, [
        itemIn('auroral:shimmersteel_ingot', 1),
        energyIn(100000)
    ])
})
