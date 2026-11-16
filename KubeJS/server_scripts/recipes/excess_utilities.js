ServerEvents.recipes(event => {
    const result = (out, oldIn, newIn) => {
        event.replaceInput({output: out}, oldIn, Ingredient.of(newIn))
    }
    const idRemove = (id)=> {
        event.remove({id:id})
    }
    const solar = 'kubejs:sol_astral_ingot'
    const machineblock = 'excessive_utilities:machine_block'
    const stoneburnt = 'excessive_utilities:stoneburnt'
    const redstonecrystal = 'excessive_utilities:resonating_redstone_crystal'
    idRemove('excessive_utilities:resonator')
    idRemove('excessive_utilities:water_mill')
    idRemove('excessive_utilities:wind_mill')
    idRemove('excessive_utilities:fire_mill')
    idRemove('excessive_utilities:lava_mill')
    idRemove('excessive_utilities:dragon_egg_mill')
    idRemove('excessive_utilities:crusher')
    idRemove('excessive_utilities:division/semi_unstable_nugget')
    idRemove('excessive_utilities:division/unstable_ingot')
    idRemove('excessive_utilities:magmatic_generator')
    const replacein = (result, oldInput, newInput) => {
    event.replaceInput({output: Item.of(result)}, oldInput, newInput)
    }
    const replaceout = (oldOutput, newOutput) => {
        event.replaceOutput({output: Item.of(oldOutput)}, newOutput)
    }
    
    function resonator(gpcost, input, output) {
    const recipeId = 'modpack:excessive_utilities/' + output.split(':').pop();
        return event.custom ({
            type: 'excessive_utilities:resonator',
            gp_cost: gpcost,
            ingredient: { item: input },
            output: { count: 1, id: output },
        }).id(recipeId)
    }
    // output is an item ID string, e.g. 'excessive_utilities:resonator'.
    function shapedCraft (output, pattern, keys) {
        const recipeId = 'modpack:excessive_utilities/' + output.split(':').pop();
        return event.shaped(output, pattern, keys).id(recipeId)
    }
    function shapelessCraft (output, inputs) {
        const recipeId = 'modpack:excessive_utilities/' + output.split(':').pop();
        return event.shapeless(output, inputs).id(recipeId)
    }
    replacein('excessive_utilities:bedrockium_ingot', 'excessive_utilities:compressed_cobblestone_3', 'spectrum:bedrock_dust_block')
    replacein('excessive_utilities:bedrockium_ingot', 'diamond_block', 'gtceu:chaos_infused_block')
    // The Enchanter has no KubeJS schema, so replaceInput does nothing on it. Remove and rewrite instead.
    function evilInfused(output, input, fePerTick, ticks) {
        const name = output.split(':').pop()
        idRemove('excessive_utilities:enchanter/' + name)
        event.custom({
            type: 'excessive_utilities:enchanter',
            left: { count: 8, ingredient: { item: input } },
            right: { count: 1, ingredient: { item: 'minecraft:nether_star' } },
            output: { count: 8, id: output },
            fe_per_tick: fePerTick,
            ticks: ticks
        }).id('modpack:excessive_utilities/' + name)
    }
    function enchantingot(output, input, fePerTick, ticks) {
        const name = output.split(':').pop()
        idRemove('excessive_utilities:enchanter/' + name)
        event.custom({
            type: 'excessive_utilities:enchanter',
            left: { count: 8, ingredient: { item: input } },
            right: { count: 8, ingredient: { item: 'woot_revived:xp_shard' } },
            output: { count: 8, id: output },
            fe_per_tick: fePerTick,
            ticks: ticks
        }).id('modpack:excessive_utilities/' + name)
    }
    enchantingot('excessive_utilities:enchanted_ingot', 'gtceu:vanadium_steel_ingot', 500, 500)
    enchantingot('excessive_utilities:block_of_enchanted_metal', 'gtceu:vanadium_steel_block', 500, 500)
    resonator(50, 'kubejs:chaos_infused', 'gtceu:chaos_infused_dust')
    evilInfused('excessive_utilities:evil_infused_iron_ingot', 'gtceu:taint_ingot', 160, 400)
    evilInfused('excessive_utilities:block_of_evil_infused_iron', 'gtceu:taint_block', 40, 4800)
    // event.shaped can't read a neoforge:components ingredient, so this one recipe is raw JSON.
    event.custom({
        type: 'minecraft:crafting_shaped',
        pattern: ['ABA', 'CDC', 'EFE'],
        key: {
            A: { item: 'cataclysm:ignitium_ingot' },
            B: { item: 'minecraft:redstone_block' },
            C: { item: solar },
            D: { item: machineblock },
            E: { item: stoneburnt },
            F: { type: 'neoforge:components', items: 'hostilenetworks:prediction', components: { 'hostilenetworks:data_model': 'hostilenetworks:magma_cube' }, strict: false }
        },
        result: { id: 'excessive_utilities:magmatic_generator', count: 1 }
    }).id('modpack:excessive_utilities/magmatic_generator')
    shapedCraft('excessive_utilities:fire_mill', ['ABA', 'CDC', 'EFE'], {
        A: 'excessive_utilities:resonating_redstone_crystal',
        B: 'minecraft:redstone_block',
        C: solar,
        D: machineblock,
        E: stoneburnt,
        F: 'botania:rune_fire'
    })
    shapedCraft('excessive_utilities:lava_mill', ['ABA', 'CDC', 'EFE'], {
        A: 'excessive_utilities:resonating_redstone_crystal',
        B: 'minecraft:redstone_block',
        C: solar,
        D: machineblock,
        E: stoneburnt,
        F: 'oritech:still_sheol_fire_bucket'
    })
    shapedCraft('excessive_utilities:dragon_egg_mill', ['ABA', 'CDC', 'EFE'], {
        A: 'excessive_utilities:resonating_redstone_crystal',
        B: 'minecraft:redstone_block',
        C: solar,
        D: machineblock,
        E: stoneburnt,
        F: 'spectrum:dragonbone_chunk'
    })
    shapedCraft('excessive_utilities:water_mill', ['ABA', 'CDC', 'EFE'], {
        A: 'botania:rune_water',
        B: redstonecrystal,
        C: solar,
        D: machineblock,
        E: stoneburnt,
        F: 'nuclearcraft:technical_water_bucket'
    })
    shapedCraft('excessive_utilities:wind_mill', ['ABA', 'CDC', 'EFE'], {
        A: 'excessive_utilities:resonating_redstone_crystal',
        B: 'minecraft:redstone_block',
        C: solar,
        D: machineblock,
        E: stoneburnt,
        F: 'malum:wind_nucleus'
    })
    shapedCraft('excessive_utilities:resonator', ['ABA', 'ECE', 'DBD'], {
        A: 'excessive_utilities:resonating_redstone_crystal',
        B: 'spectrum:red_pigment',
        C: machineblock,
        D: solar,
        E: 'mekanism:enriched_redstone'
    })
})

// Demon Ingot/Nugget/Block come from gold dropped into Nether lava, set by a data map, not a recipe,
// so event.remove can't reach it. "replace": true with no values clears the mod's entries.
ServerEvents.generateData('after_mods', event => {
    event.json('excessive_utilities:data_maps/item/nether_lava_dunk_conversion.json', {
        replace: true,
        values: {}
    })
    // Division Sigil no longer appears in chests; the mod's loot modifiers now add these empty tables.
    const sigilLootTables = ['desert_temple', 'dungeon', 'mineshaft', 'stronghold_corridor', 'stronghold_crossing']
    sigilLootTables.forEach(name => {
        event.json('excessive_utilities:loot_table/structure/division_sigils/' + name + '.json', { type: 'minecraft:empty', pools: [] })
    })
})

// Pseudo-Inversion Sigil: the ritual only starts when a mob in this tag is killed, so an empty tag disables it.
ServerEvents.tags('entity_type', event => {
    event.removeAll('excessive_utilities:inversion_ritual_sacrifice')
})
