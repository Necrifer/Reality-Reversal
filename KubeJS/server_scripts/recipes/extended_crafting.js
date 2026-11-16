// Extended Crafting recipes (moved from scripts/extendcrafting.zs, CraftTweaker).
// Recipe IDs stay crafttweaker:<name> so anything that saved them (e.g. config/recipe-tree-plans.json) still matches.
//
// Ingredients: 'mod:item', '#tag', or one of the component helpers below.
// table(name, tier, output, pattern, key): tier 0 = any table, 1-4 = basic..ultimate (Expanded Plus adds bigger tables).
//   Rows may be shorter than the grid; a space is an empty slot.
// combination(name, output, core, pedestals, powerCost[, powerRate])
// compressor(name, output, input, inputCount, catalyst, powerCost[, powerRate]): the input must be a '#tag'.
// enderShaped(name, output, pattern, key) / enderShapeless(name, output, inputs)
ServerEvents.recipes(event => {
    const recipeId = name => 'crafttweaker:' + name

    // 'mod:item' or '#tag' -> JSON ingredient; objects (component ingredients) pass through.
    const ing = x => typeof x !== 'string' ? x : x.charAt(0) === '#' ? { tag: x.slice(1) } : { item: x }
    // '8x mod:item' -> { id, count }
    const out = s => {
        const m = /^(\d+)x\s+(.+)$/.exec(s)
        return m ? { id: m[2], count: Number(m[1]) } : { id: s, count: 1 }
    }
    const keyMap = key => {
        const r = {}
        Object.keys(key).forEach(k => { r[k] = ing(key[k]) })
        return r
    }
    // Rows padded to the widest row, the same way CraftTweaker filled short rows.
    const pad = pattern => {
        const width = Math.max.apply(null, pattern.map(r => r.length))
        return pattern.map(r => {
            while (r.length < width) r += ' '
            return r
        })
    }

    // Matches only the listed components; anything else on the stack is ignored.
    const withComponents = (item, components) => ({ type: 'neoforge:components', items: item, components: components, strict: false })
    const singularity = id => withComponents('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:' + id })
    const aspect = name => withComponents('thaumaturge:essentia_crystal', { 'thaumaturge:crystal_aspect': { aspect: 'thaumaturge:' + name } })
    const auraBottle = type => withComponents('naturesaura:aura_bottle', { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:' + type } })
    // Matched on the constellation only; the random crystal_attributes size/purity is ignored.
    const attunedCrystal = c => withComponents('astralsorcery:attuned_celestial_crystal', { 'astralsorcery:attuned_constellation': { constellation: 'astralsorcery:' + c } })
    // Dynamism Gems are plain item IDs: KubeJS ingredients ignore their rolled dynamic_modifiers.

    function table(name, tier, output, pattern, key) {
        return event.custom({ type: 'extendedcrafting:shaped_table', tier: tier, pattern: pad(pattern), key: keyMap(key), result: out(output) }).id(recipeId(name))
    }
    function tableShapeless(name, tier, output, inputs) {
        return event.custom({ type: 'extendedcrafting:shapeless_table', tier: tier, ingredients: inputs.map(ing), result: out(output) }).id(recipeId(name))
    }
    function combination(name, output, core, pedestals, powerCost, powerRate) {
        const json = { type: 'extendedcrafting:combination', input: ing(core), ingredients: pedestals.map(ing), result: out(output), power_cost: powerCost }
        if (powerRate !== undefined) json.power_rate = powerRate
        return event.custom(json).id(recipeId(name))
    }
    function compressor(name, output, input, inputCount, catalyst, powerCost, powerRate) {
        const ingredient = ing(input)
        ingredient.count = inputCount
        const json = { type: 'extendedcrafting:compressor', ingredient: ingredient, catalyst: ing(catalyst), result: out(output), power_cost: powerCost }
        if (powerRate !== undefined) json.power_rate = powerRate
        return event.custom(json).id(recipeId(name))
    }
    function enderShaped(name, output, pattern, key) {
        return event.custom({ type: 'extendedcrafting:shaped_ender_crafter', pattern: pad(pattern), key: keyMap(key), result: out(output) }).id(recipeId(name))
    }
    function enderShapeless(name, output, inputs) {
        return event.custom({ type: 'extendedcrafting:shapeless_ender_crafter', ingredients: inputs.map(ing), result: out(output) }).id(recipeId(name))
    }

    table('transmutation_table', 3, 'projecte:transmutation_table', [
        'ABBBBBA',
        'BC D CB',
        'B CDC B',
        'BEEFEEB',
        'B CDC B',
        'BC D CB',
        'ABBBBBA'
    ], {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'minecraft:obsidian',
        C: 'draconicevolution:draconium_ingot',
        D: 'mekanism:ingot_refined_glowstone',
        E: 'mekanism:alloy_reinforced',
        F: 'projecte:philosophers_stone'
    })

    table('philosophers_stone', 2, 'projecte:philosophers_stone', [
        'A B A',
        ' BCB ',
        'BCDCB',
        ' BCB ',
        'A B A'
    ], {
        A: 'minecraft:glowstone_dust',
        B: 'mekanism:alloy_infused',
        C: 'minecraft:quartz',
        D: 'mekanism:enriched_diamond'
    })

    table('eyes1', 0, 'kubejs:eyes1', [
        'AB  C  DE',
        ' AB C DE ',
        '  ABCDE  ',
        '  FGHIF  ',
        'JJJKLMJJJ',
        '  FIHGF  ',
        '  NOCPQ  ',
        ' NO C PQ ',
        'NO  C  PQ'
    ], {
        A: 'projecte:dark_matter',
        B: 'dimdoors:frayed_filament',
        C: 'dimdoors:amalgam_lump',
        D: 'dimdoors:driftwood_log',
        E: 'mekanism:ingot_refined_glowstone',
        F: 'extendedcrafting:black_iron_ingot',
        G: 'minecraft:nether_bricks',
        H: 'mekanism:advanced_control_circuit',
        I: 'minecraft:nether_wart_block',
        J: 'dimdoors:clod',
        K: 'divinerpg:torridite_ingot',
        L: 'dimdoors:leak_bucket',
        M: 'divinerpg:bloodgem',
        N: 'mekanism:alloy_atomic',
        O: 'mekanism:ingot_refined_obsidian',
        P: 'dimdoors:solid_static',
        Q: 'projecte:red_matter'
    })

    table('ghastly_ingot', 2, '2x aoa3:ghastly_ingot', [
        'AABCC',
        'DEFED',
        'GGBHH'
    ], {
        A: 'twilightforest:naga_scale',
        B: 'twilightforest:carminite',
        C: 'twilightforest:exanimate_essence',
        D: 'twilightforest:fiery_ingot',
        E: 'twilightforest:fiery_blood',
        F: 'enderio:dark_steel_ingot',
        G: 'twilightforest:steeleaf_ingot',
        H: 'twilightforest:knightmetal_ingot'
    })

    combination('snow_globe', 'divinerpg:snow_globe', 'divinerpg:ice_stone', [
        'divinerpg:shadow_stone',
        'enderio:clear_glass',
        'enderio:clear_glass',
        'enderio:clear_glass',
        'ae2:quartz_glass',
        'ae2:quartz_glass',
        'enderio:end_steel_ingot',
        'enderio:end_steel_ingot'
    ], 100000)

    table('aether_portal_frame', 3, 'aether:aether_portal_frame', [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCDCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA'
    ], {
        A: 'mekanism:ingot_refined_glowstone',
        B: 'minecraft:purpur_block',
        C: 'minecraft:chorus_fruit',
        D: 'minecraft:water_bucket'
    })

    table('laputan_orb', 4, 'castle_in_the_sky:laputa_miniature', [
        '    A    ',
        '   BAB   ',
        '  B C B  ',
        ' B D D B ',
        'AAC E CAA',
        ' B D D B ',
        '  B C B  ',
        '   BAB   ',
        '    A    '
    ], {
        A: 'extendedcrafting:enhanced_ender_ingot',
        B: 'mekanism:basic_control_circuit',
        C: 'enderio:energetic_alloy_ingot',
        D: 'aoa3:ghastly_ingot',
        E: 'extendedcrafting:ender_star'
    })

    table('nuclearcraft_basic_plating_easy', 1, 'nuclearcraft:plate_basic', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'aoa3:ghastly_ingot',
        B: 'divinerpg:arcanium',
        C: 'spectrum:citrine_shard'
    })

    table('ae2_charger', 1, 'ae2:charger', [
        'ABB',
        'C  ',
        'ABB'
    ], {
        A: 'mekanism:alloy_atomic',
        B: '#c:ingots/iridium',
        C: 'divinerpg:legendary_ender_eye'
    })

    table('harsh_voidminers_rubetine', 0, 'voidminersremastered:rubetine', [
        'ABCDEDCBA',
        'FGHIJIHGF',
        'KLMNONPQK',
        'RSTUVWTXY',
        'ZabcdcbaZ',
        'RXeWVUeSY',
        'fLMgOgPQf',
        'hijkJkjih',
        'lmnoEonml'
    ], {
        A: 'twilightforest:fiery_ingot',
        B: '#c:ingots/gold',
        C: 'enderio:energetic_alloy_ingot',
        D: 'draconicevolution:draconium_ingot',
        E: '#c:ingots/copper',
        F: 'extendedcrafting:ender_ingot',
        G: 'enderio:end_steel_ingot',
        H: 'twilightforest:knightmetal_ingot',
        I: '#c:ingots/tin',
        J: 'extendedcrafting:enhanced_ender_ingot',
        K: 'extendedcrafting:enhanced_redstone_ingot',
        L: 'oritech:enderic_compound',
        M: 'enderio:pulsating_alloy_ingot',
        N: '#c:ingots/constantan',
        O: '#c:ingots/nickel',
        P: 'enderio:redstone_alloy_ingot',
        Q: 'nuclearcraft:lithium_ingot',
        R: 'divinerpg:realmite_ingot',
        S: '#c:ingots/platinum',
        T: 'mekanism:ingot_refined_obsidian',
        U: 'divinerpg:hellstone_ingot',
        V: 'divinerpg:rupee_ingot',
        W: 'divinerpg:torridite_ingot',
        X: '#c:ingots/uranium',
        Y: 'divinerpg:aquatic_ingot',
        Z: '#c:ingots/iron',
        a: '#c:ingots/steel',
        b: 'enderio:dark_steel_ingot',
        c: 'divinerpg:arlemite_ingot',
        d: 'aoa3:ghastly_ingot',
        e: 'mekanism:ingot_refined_glowstone',
        f: 'extendedcrafting:redstone_ingot',
        g: '#c:ingots/lead',
        h: 'extendedcrafting:black_iron_ingot',
        i: 'enderio:soularium_ingot',
        j: 'mekanism:ingot_osmium',
        k: 'twilightforest:ironwood_ingot',
        l: '#c:ingots/stainless_steel',
        m: 'minecraft:netherite_ingot',
        n: 'enderio:vibrant_alloy_ingot',
        o: 'enderio:conductive_alloy_ingot'
    })

    table('law_ingot', 3, '12x kubejs:law_ingot', [
        'A  B  A',
        ' C   C ',
        ' DEBED ',
        'F GHG F',
        ' DEBED ',
        ' C   C ',
        'A  B  A'
    ], {
        A: 'minecraft:spider_eye',
        B: 'minecraft:rotten_flesh',
        C: 'minecraft:ender_pearl',
        D: 'minecraft:bone_block',
        E: 'minecraft:string',
        F: 'minecraft:blaze_rod',
        G: 'minecraft:dragon_egg',
        H: 'minecraft:magma_cream'
    })

    table('loot_fabricator', 1, 'hostilenetworks:loot_fabricator', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'divinerpg:oxdrite_ingot',
        B: 'bigreactors:anglesite_crystal',
        C: 'woot_revived:stygian_ingot'
    })

    table('stygian_dust', 2, '64x woot_revived:stygian_dust', [
        'ABCDA',
        'EFFFG',
        'CFHFC',
        'IFFFJ',
        'AKCLA'
    ], {
        A: 'aether:enchanted_gravitite',
        B: 'malum:aqueous_spirit',
        C: 'actuallyadditions:black_quartz',
        D: 'malum:earthen_spirit',
        E: 'malum:sacred_spirit',
        F: 'mysticalagriculture:inferium_essence',
        G: 'malum:wicked_spirit',
        H: 'kubejs:modular_ingot',
        I: 'malum:eldritch_spirit',
        J: 'malum:infernal_spirit',
        K: 'malum:arcane_spirit',
        L: 'malum:aerial_spirit'
    })

    table('infernium_crystal', 1, 'matc:inferium_crystal', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'malum:soul_stained_steel_ingot',
        B: 'mysticalagriculture:prosperity_shard',
        C: 'mysticalagriculture:inferium_gemstone'
    })

    table('prudentium_crystal', 2, 'matc:prudentium_crystal', [
        'ABCDE',
        'FGCGH',
        'FGIGH',
        'FGCGH',
        'JKCLM'
    ], {
        A: 'spectrum:lime_sapling',
        B: 'spectrum:yellow_sapling',
        C: 'voidminersremastered:rubetine',
        D: 'spectrum:orange_sapling',
        E: 'spectrum:light_blue_sapling',
        F: 'divinerpg:arcanite_stone',
        G: 'spectrum:vegetal',
        H: 'divinerpg:arcanite_sand',
        I: 'matc:inferium_crystal',
        J: 'spectrum:pink_sapling',
        K: 'spectrum:purple_sapling',
        L: 'spectrum:cyan_sapling',
        M: 'spectrum:blue_sapling'
    })

    enderShaped('onyx_ore', '2x spectrum:onyx_ore', [
        'A B',
        ' C ',
        'DEF'
    ], {
        A: 'spectrum:amethyst_powder',
        B: 'spectrum:topaz_powder',
        C: 'primalmagick:primalite_ingot',
        D: 'dimdoors:amalgam_block',
        E: 'spectrum:citrine_powder',
        F: 'dimdoors:clod_block'
    })

    table('tertium_crystal', 3, 'matc:tertium_crystal', [
        'AABBBCC',
        'ADEEEFC',
        'GHIJKLM',
        'GLNONHM',
        'GHIJKLM',
        'PQRRRST',
        'PPUUUTT'
    ], {
        A: 'actuallyadditions:empowered_diamatine_crystal_block',
        B: 'actuallyadditions:empowered_palis_crystal_block',
        C: 'actuallyadditions:empowered_emeradic_crystal_block',
        D: withComponents('mekanism:advanced_fluid_tank', { 'mekanism:fluids': { fluid_tanks: [{ id: 'mekanism:sulfuric_acid', amount: 64000 }] } }),
        E: 'industrialforegoing:plastic',
        F: withComponents('mekanism:advanced_fluid_tank', { 'mekanism:fluids': { fluid_tanks: [{ id: 'immersivepetroleum:naphtha', amount: 64000 }] } }),
        G: 'divinerpg:oxdrite_ingot',
        H: 'projecte:red_matter',
        I: 'ae2:calculation_processor',
        J: 'ae2:fluix_crystal',
        K: 'ae2:logic_processor',
        L: 'projecte:dark_matter',
        M: 'primalmagick:primalite_ingot',
        N: 'ae2:engineering_processor',
        O: 'matc:prudentium_crystal',
        P: 'actuallyadditions:empowered_enori_crystal_block',
        Q: withComponents('mekanism:advanced_fluid_tank', { 'mekanism:fluids': { fluid_tanks: [{ id: 'oritech:still_heavy_oil', amount: 64000 }] } }),
        R: 'spectrum:onyx_shard',
        S: withComponents('mekanism:advanced_fluid_tank', { 'mekanism:fluids': { fluid_tanks: [{ id: 'immersivepetroleum:diesel', amount: 64000 }] } }),
        T: 'actuallyadditions:empowered_restonia_crystal_block',
        U: 'actuallyadditions:empowered_void_crystal_block'
    })

    table('imperium_crystal', 4, 'matc:imperium_crystal', [
        'AAAABCCCD',
        'EFFFBGGGD',
        'EFHHBBBGD',
        'EFHHBBBGD',
        'IIIIJKKKK',
        'LMNNOPPQC',
        'LMNNOPPQC',
        'LMMMOQQQC',
        'LRRROSSSS'
    ], {
        A: 'botania:elementium_ingot',
        B: 'mekanism:ultimate_control_circuit',
        C: 'fluxnetworks:flux_block',
        D: 'mekanism:ingot_refined_obsidian',
        E: 'dimdoors:frayed_filament',
        F: 'twilightforest:castle_brick',
        G: 'enderio:pulsating_crystal',
        H: 'mekanism:alloy_infused',
        I: 'nuclearcraft:shibuichi_ingot',
        J: 'matc:tertium_crystal',
        K: 'nuclearcraft:stainless_steel_ingot',
        L: 'kubejs:law_ingot',
        M: 'projectexpansion:magenta_emc_link',
        N: 'mekanism:alloy_atomic',
        O: 'dimdoors:world_thread',
        P: 'mekanism:advanced_control_circuit',
        Q: 'mekanism:hdpe_stick',
        R: 'draconicevolution:draconium_ingot',
        S: 'bigreactors:cyanite_ingot'
    })

    table('supremium_crystal', 4, 'matc:supremium_crystal', [
        'AAAAAAAAA',
        'ABBBBBBBA',
        'ABCCCCCBA',
        'ABCDDDCBA',
        'ABCDEDCBA',
        'ABCDDDCBA',
        'ABCCCCCBA',
        'ABBBBBBBA',
        'AAAAAAAAA'
    ], {
        A: 'minecraft:end_stone',
        B: 'aether:icestone',
        C: 'divinerpg:arcanium_block',
        D: 'minecraft:dragon_egg',
        E: 'matc:imperium_crystal'
    })

    table('botania_petal_apothecary', 2, 'botania:apothecary_default', [
        'A   A',
        'AABAA',
        '  B  ',
        ' BBB ',
        'CCCCC'
    ], {
        A: 'enderio:dark_steel_ingot',
        B: 'minecraft:end_stone',
        C: 'aoa3:ghastly_ingot'
    })

    combination('modularium_simple', '8x kubejs:modular_ingot', 'malum:soul_stained_steel_ingot', [
        'nuclearcraft:tough_alloy_ingot',
        'extendedcrafting:crystaltine_block',
        'spectrum:liquid_crystal_bucket',
        auraBottle('overworld'),
        'botania:dragonstone',
        auraBottle('overworld'),
        'projectexpansion:magenta_matter',
        'botania:dreamwood',
        'kubejs:law_ingot',
        'malum:warp_flux',
        'botania:elementium_ingot',
        auraBottle('end'),
        'bigreactors:redfrigium_bucket',
        auraBottle('nether'),
        'divinerpg:hellstone_ingot',
        'nuclearcraft:chassis'
    ], 100000)

    enderShaped('modular_casing', '2x mmcr:basic_casing', [
        'ABC',
        'DEF',
        'GBA'
    ], {
        A: 'kubejs:modular_ingot',
        B: 'spectrum:midnight_chip',
        C: withComponents('hostilenetworks:prediction', { 'hostilenetworks:data_model': 'hostilenetworks:spider' }),
        D: 'enderio:pulsating_crystal',
        E: 'actuallyadditions:ender_casing',
        F: 'enderio:vibrant_crystal',
        G: withComponents('hostilenetworks:prediction', { 'hostilenetworks:data_model': 'hostilenetworks:enderman' })
    })

    table('creative_grimoire', 0, 'primalmagick:grimoire_creative', [
        'AAAAAAAAA',
        'BBBBCBBBB',
        'DEFGHIJKL',
        'DMNOPQJRL',
        'STNURVJWX',
        'YZabRcJNX',
        'dMefPgJNh',
        'dRijklJmh',
        'nnnnnnnnn'
    ], {
        A: 'woot_revived:stygian_ingot',
        B: 'draconicevolution:draconium_ingot',
        C: 'projectexpansion:fading_matter',
        D: 'ars_nouveau:source_gem',
        E: 'aether:zanite_gemstone',
        F: 'actuallyadditions:empowered_restonia_crystal_block',
        G: 'projecte:dark_matter',
        H: 'divinerpg:parasecta_statue',
        I: 'projectexpansion:violet_matter',
        J: 'dimdoors:enduring_fibers',
        K: 'actuallyadditions:empowered_enori_crystal_block',
        L: 'divinerpg:arcanium_rich_sand',
        M: 'mysticalagriculture:awakened_supremium_ingot_block',
        N: 'spectrum:bedrock_dust',
        O: 'projecte:red_matter',
        P: 'nuclearcraft:plate_basic',
        Q: 'projectexpansion:blue_matter',
        R: 'dimdoors:black_fabric',
        S: 'naturesaura:token_euphoria',
        T: 'aether:enchanted_gravitite',
        U: 'projectexpansion:magenta_matter',
        V: 'projectexpansion:cyan_matter',
        W: 'actuallyadditions:empowered_emeradic_crystal_block',
        X: 'malum:blighted_gunk',
        Y: 'naturesaura:token_grief',
        Z: 'aether:ambrosium_shard',
        a: 'actuallyadditions:empowered_void_crystal_block',
        b: 'projectexpansion:pink_matter',
        c: 'projectexpansion:green_matter',
        d: 'divinerpg:icy_stone',
        e: 'divinerpg:oxdrite_ingot',
        f: 'projectexpansion:purple_matter',
        g: 'projectexpansion:lime_matter',
        h: 'mysticalextendedtier:ouranium_ingot_block',
        i: 'actuallyadditions:empowered_palis_crystal_block',
        j: 'projectexpansion:white_matter',
        k: 'divinerpg:dramix_statue',
        l: 'projectexpansion:orange_matter',
        m: 'actuallyadditions:empowered_diamatine_crystal_block',
        n: 'kubejs:modular_ingot'
    })

    table('quantum_compressor', 2, 'extendedcrafting:compressor', [
        'ABCBA',
        'BDDDB',
        'CEFEC',
        'BGGGB',
        'ABCBA'
    ], {
        A: 'kubejs:modular_ingot',
        B: 'extendedcrafting:black_iron_ingot',
        C: 'extendedcrafting:elite_catalyst',
        D: 'bigreactors:reinforced_reactorglass',
        E: 'extendedcrafting:elite_component',
        F: 'extendedcrafting:frame',
        G: 'ae2:quartz_vibrant_glass'
    })

    table('me_controller', 2, 'ae2:controller', [
        'AA BB',
        'ACCCB',
        ' DDD ',
        ' CCC ',
        'E E E'
    ], {
        A: 'ae2:calculation_processor',
        B: 'ae2:logic_processor',
        C: 'ae2:fluix_crystal',
        D: 'aoa3:ghastly_ingot',
        E: 'ae2:engineering_processor'
    })

    table('hardened_component', 1, 'oritech:machine_core_3', [
        'AB ',
        'ACC',
        'AB '
    ], {
        A: 'oritech:steel_ingot',
        B: 'minecraft:blaze_rod',
        C: 'mekanism:enriched_redstone'
    })

    table('reinforced_component', 2, 'oritech:machine_core_5', [
        'AA   ',
        'BCA  ',
        'DEFGG',
        'HIA  ',
        'AA   '
    ], {
        A: 'oritech:electrum_ingot',
        B: 'malum:sacred_spirit',
        C: 'ae2:printed_calculation_processor',
        D: 'mekanism:ultimate_control_circuit',
        E: 'oritech:machine_core_4',
        F: 'malum:hallowed_gold_ingot',
        G: 'nuclearcraft:redstone_bucket',
        H: 'malum:wicked_spirit',
        I: 'ae2:printed_engineering_processor'
    })

    table('resonant_component', 3, 'oritech:machine_core_7', [
        'ABA    ',
        'CCCB   ',
        'DEFGA  ',
        'HHHGIJK',
        'LMNGA  ',
        'OOOB   ',
        'ABA    '
    ], {
        A: 'oritech:enderic_compound',
        B: 'oritech:heisenberg_compensator',
        C: 'botania:rune_water',
        D: 'actuallyadditions:empowered_restonia_crystal',
        E: 'actuallyadditions:empowered_palis_crystal',
        F: 'actuallyadditions:empowered_diamatine_crystal',
        G: 'botania:rune_earth',
        H: 'botania:rune_air',
        I: 'oritech:machine_core_5',
        J: 'mysticalagriculture:redstone_seeds',
        K: 'immersiveengineering:wirecoil_redstone',
        L: 'actuallyadditions:empowered_void_crystal',
        M: 'actuallyadditions:empowered_emeradic_crystal',
        N: 'actuallyadditions:empowered_enori_crystal',
        O: 'botania:rune_fire'
    })

    table('glowing_obsidian', 1, '10x astral_dimension:glowing_obsidian', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'kubejs:seeneyes2',
        B: 'draconicevolution:infused_obsidian'
    })

    table('draconium_core', 3, 'draconicevolution:draconium_core', [
        'A  B  A',
        'AABCBAA',
        ' BDEDB ',
        'BFGHGFB',
        ' BDEDB ',
        'AABCBAA',
        'A  B  A'
    ], {
        A: 'spectrum:bedrock_dust',
        B: 'draconicevolution:draconium_ingot',
        C: 'aoa3:jade',
        D: 'kubejs:stellarium_ingot',
        E: 'divinerpg:hellstone_ingot',
        F: 'divinerpg:torridite_ingot',
        G: 'divinerpg:shadow_bar',
        H: 'minecraft:netherite_ingot'
    })

    table('cheap_draconium_core', 3, '3x draconicevolution:draconium_core', [
        'A  B A ',
        'AABCBAA',
        ' BDEDB ',
        'BFGHGFB',
        ' BDEDB ',
        'AABCBAA',
        'A  B  A'
    ], {
        A: 'excessive_utilities:block_of_bedrockium',
        B: 'draconicevolution:draconium_ingot',
        C: 'aoa3:jade',
        D: 'kubejs:stellarium_ingot',
        E: 'divinerpg:hellstone_ingot',
        F: 'divinerpg:torridite_ingot',
        G: 'divinerpg:shadow_bar',
        H: 'kubejs:sol_astral_ingot'
    })

    combination('void_sculk_containment', 'kubejs:void_sculk', 'astral_dimension:amethyst_eye', [
        'deeperdarker:heart_of_the_deep',
        'minecraft:sculk_catalyst',
        'undergarden:cloggrum_ingot',
        'undergarden:froststeel_ingot',
        'minecraft:sculk',
        'undergarden:utherium_crystal',
        'undergarden:regalium_crystal',
        'kubejs:star_remains'
    ], 10000000)

    table('fission_reactor_casing', 4, '6x nuclearcraft:fission_reactor_casing', [
        'AAAAAAAAA',
        'BCCDDDCCE',
        'BFCGGGCHE',
        'IJKLLLKJI',
        'MKNLOLNKM',
        'IJKLLLKJI',
        'PHCQQQCFR',
        'PCCSSSCCR',
        'AAAAAAAAA'
    ], {
        A: 'nuclearcraft:plate_advanced',
        B: 'naturesaura:gold_powder',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'mekanism:ingot_refined_glowstone',
        E: 'voidminersremastered:citrinetine_block',
        F: 'enderio:void_chassis',
        G: 'immersiveengineering:component_steel',
        H: 'industrialforegoing:machine_frame_supreme',
        I: 'mysticalagradditions:insanium_essence',
        J: withComponents('immersiveengineering:graphite_electrode', { 'minecraft:damage': 0 }),
        K: 'woot_revived:stygian_plate',
        L: 'hostilenetworks:twilight_prediction',
        M: 'aether:zanite_gemstone',
        N: 'nuclearcraft:molten_uranium_bucket',
        O: 'kubejs:void_sculk',
        P: 'bigreactors:reinforced_reactorcasing',
        Q: 'immersiveengineering:component_iron',
        R: 'aether:enchanted_gravitite',
        S: 'mekanism:ingot_refined_obsidian'
    })

    table('nasa_workbench', 4, 'ad_astra:nasa_workbench', [
        'ABBBBBBBA',
        'AACDEDCAA',
        'FACGHICAF',
        'FJKHLHMJF',
        'FFNOPQNFF',
        'RSTTCTTSR',
        'RRUUCUURR',
        'VRWXCYZRV',
        'VVVVVVVVV'
    ], {
        A: 'gtceu:tin_alloy_dust',
        B: 'nuclearcraft:plate_du',
        C: 'undergarden:forgotten_ingot',
        D: 'draconicevolution:draconium_core',
        E: 'projectexpansion:magenta_matter',
        F: 'oritech:heisenberg_compensator',
        G: auraBottle('overworld'),
        H: 'kubejs:seeneyes2',
        I: auraBottle('nether'),
        J: 'kubejs:void_sculk',
        K: 'nuclearcraft:plutonium_239',
        L: auraBottle('end'),
        M: 'nuclearcraft:plutonium_242',
        N: 'mekanism:ultimate_tier_installer',
        O: 'nuclearcraft:americium_243',
        P: singularity('diamond'),
        Q: 'nuclearcraft:strontium_90_dust',
        R: 'gtceu:invar_rod',
        S: 'projectexpansion:dark_emc_link',
        T: 'botania:terrasteel_ingot',
        U: 'malum:ether',
        V: 'woot_revived:stygian_ingot',
        W: 'nuclearcraft:uranium_233',
        X: 'nuclearcraft:neptunium_236',
        Y: 'nuclearcraft:neptunium_237',
        Z: 'nuclearcraft:caesium_137_dust'
    })

    combination('maintenance_hatch', 'gtceu:maintenance_hatch', 'gtceu:hv_machine_hull', [
        'oritech:machine_frame_block',
        'kubejs:modular_ingot',
        'oritech:steel_block',
        'rftoolsbase:machine_frame',
        'botania:rune_mana'
    ], 100000)

    enderShapeless('taint_block', 'gtceu:taint_block', [
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot',
        'gtceu:taint_ingot'
    ])

    table('entry_draconium', 4, 'draconicevolution:awakened_draconium_block', [
        'ABCDADCBA',
        'EFGHFHGFI',
        'JGKLLLKGM',
        'NFOPQPOFR',
        'SGTUVWTGS',
        'XFOPYPOFX',
        'NGKLLLKGR',
        'JFGHFHGFZ',
        'AabDADbaA'
    ], {
        A: 'kubejs:void_sculk',
        B: 'primalmagick:essence_cluster_void',
        C: 'astral_dimension:astranite_ingot',
        D: 'astral_dimension:void_shards',
        E: 'botania:rune_pride',
        F: 'gtceu:blue_steel_ingot',
        G: 'gtceu:taint_block',
        H: 'spectrum:pure_azurite',
        I: 'botania:rune_greed',
        J: 'enderio:sentient_ender',
        K: 'kubejs:eyes1',
        L: 'gtceu:silicon_boule',
        M: 'immersiveengineering:component_steel',
        N: 'nuclearcraft:curium_243',
        O: 'gtceu:polyethylene_bucket',
        P: 'oritech:gold_gem',
        Q: singularity('gaia'),
        R: 'aether:ambrosium_shard',
        S: 'astral_dimension:void_block',
        T: 'kubejs:eyes2',
        U: singularity('crystaltine'),
        V: 'kubejs:containment_failure',
        W: singularity('law'),
        X: 'ad_astra:desh_block',
        Y: singularity('refined_glowstone'),
        Z: 'immersiveengineering:component_iron',
        a: 'nuclearcraft:curium_245',
        b: 'divinerpg:oxdrite_ingot'
    })

    table('wyvern_core', 3, '2x draconicevolution:wyvern_core', [
        'A  B  A',
        ' ABCBA ',
        ' BDEDB ',
        'BCEFECB',
        ' BDEDB ',
        ' ABCBA ',
        'A  B  A'
    ], {
        A: 'gtceu:taint_ingot',
        B: 'draconicevolution:draconium_core',
        C: 'minecraft:end_crystal',
        D: 'draconicevolution:draconium_block',
        E: 'dog:draconic_soul_fragment',
        F: 'draconicevolution:dragon_heart'
    })

    table('ultimate_farm', 1, 'tinymobfarm:ultimate_farm', [
        'ABC',
        'DED',
        'ABC'
    ], {
        A: withComponents('productivebees:configurable_honeycomb', { 'productivebees:bee_type': 'productivebees:magentite' }),
        B: 'draconicevolution:draconium_core',
        C: 'projectexpansion:white_fuel',
        D: 'kubejs:law_ingot',
        E: 'kubejs:modular_ingot'
    })

    table('fire_dragonheart', 1, 'iceandfire:fire_dragon_heart', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'iceandfire:dragonsteel_fire_ingot',
        B: 'draconicevolution:dragon_heart'
    })

    table('ice_dragonheart', 1, 'iceandfire:ice_dragon_heart', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'iceandfire:dragonsteel_ice_ingot',
        B: 'draconicevolution:dragon_heart'
    })

    table('lightning_dragonheart', 1, 'iceandfire:lightning_dragon_heart', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'iceandfire:dragonsteel_lightning_ingot',
        B: 'draconicevolution:dragon_heart'
    })

    table('awakened_core', 4, 'draconicevolution:awakened_core', [
        'A   B   A',
        ' AACACAA ',
        ' CADEDAC ',
        ' BFGHGFB ',
        'AAIJKLIAA',
        ' BFGMGFB ',
        ' CADEDAC ',
        ' AACACAA ',
        'A   B   A'
    ], {
        A: 'draconicevolution:awakened_draconium_block',
        B: 'ad_astra:desh_block',
        C: 'gtceu:taint_block',
        D: 'draconicevolution:wyvern_core',
        E: 'kubejs:breach',
        F: 'draconicevolution:draconium_core',
        G: 'ad_astra:ostrum_block',
        H: 'iceandfire:ice_dragon_heart',
        I: 'woot_revived:vitality_fuel_fluid_bucket',
        J: 'iceandfire:fire_dragon_heart',
        K: 'kubejs:void_sculk',
        L: 'draconicevolution:dragon_heart',
        M: 'iceandfire:lightning_dragon_heart'
    })

    table('chaotic_core', 4, '3x draconicevolution:chaotic_core', [
        'A   B   A',
        ' ACBDBCA ',
        ' CBEFEBC ',
        ' BGHEIGB ',
        'BGJKELMGB',
        ' BGNEOGB ',
        ' CBEEEBC ',
        ' ACBDBCA ',
        'A   B   A'
    ], {
        A: 'draconicevolution:large_chaos_frag',
        B: 'draconicevolution:small_chaos_frag',
        C: 'gtceu:blue_steel_ingot',
        D: 'draconicevolution:awakened_draconium_ingot',
        E: 'draconicevolution:medium_chaos_frag',
        F: 'projectexpansion:yellow_matter',
        G: 'draconicevolution:awakened_core',
        H: 'oritech:overcharged_crystal',
        I: 'enderio:prescient_crystal',
        J: 'ae2:singularity',
        K: 'oritech:adamant_dust',
        L: 'mekanism:ultimate_control_circuit',
        M: 'bigreactors:energycore',
        N: 'minecraft:blue_ice',
        O: 'nuclearcraft:fuel_curium_lecm_245'
    })

    table('eyes_of_high_priestess', 4, 'kubejs:eyes3', [
        'ABCDEFCGH',
        'I  JKL  M',
        'CNOPQPORC',
        'CSTUVWXYC',
        'Zabcdcefg',
        'ChTUVWXiC',
        'C jklkjmC',
        'no pqr  s',
        'tuCvwxCyz'
    ], {
        A: 'biomesoplenty:null_block',
        B: singularity('emerald'),
        C: 'gtceu:chaos_infused_ingot',
        D: 'productivebees:honey_treat',
        E: singularity('iron'),
        F: 'kubejs:modular_ingot',
        G: singularity('lapis'),
        H: 'biomesoplenty:anomaly',
        I: singularity('coal'),
        J: 'spectrum:polished_bone_ash',
        K: singularity('ghastly'),
        L: 'actuallyadditions:empowered_restonia_crystal_block',
        M: singularity('brick'),
        N: 'projectexpansion:green_matter',
        O: 'draconicevolution:awakened_core',
        P: 'gtceu:taint_rod',
        Q: withComponents('malum:twisted_iridescent_ether_brazier', { 'malum:secondary_dye_color': { rgb: 7238307 } }),
        R: 'bigreactors:energycore',
        S: 'actuallyadditions:empowered_void_crystal_block',
        T: 'draconicevolution:draconium_core',
        U: 'kubejs:eyes2',
        V: 'nuclearcraft:thermoconducting_ingot',
        W: 'kubejs:eyes1',
        X: 'draconicevolution:wyvern_core',
        Y: 'botania:gaia_pylon',
        Z: singularity('netherite'),
        a: singularity('fluix'),
        b: singularity('end_steel'),
        c: 'gtceu:polyethylene_ingot',
        d: 'kubejs:void_sculk',
        e: singularity('redstone_ingot'),
        f: singularity('awakened_supremium'),
        g: singularity('gold'),
        h: 'actuallyadditions:empowered_enori_crystal_block',
        i: 'primalmagick:mana_singularity',
        j: 'draconicevolution:chaotic_core',
        k: 'minecraft:resin_bricks',
        l: 'naturesaura:infused_iron',
        m: 'actuallyadditions:empowered_palis_crystal_block',
        n: singularity('prismarine'),
        o: 'aether:zanite_block',
        p: 'aether:enchanted_gravitite',
        q: singularity('stygian'),
        r: 'mekanism:reprocessed_fissile_fragment',
        s: singularity('amethyst'),
        t: 'biomesoplenty:null_end_stone',
        u: singularity('copper'),
        v: 'actuallyadditions:empowered_diamatine_crystal_block',
        w: singularity('diamond'),
        x: 'divinerpg:arcanium_block',
        y: singularity('quartz'),
        z: 'biomesoplenty:null_leaves'
    })

    table('eyes_of_the_empress', 4, 'kubejs:eyes4', [
        'A HDDDH A',
        ' HrB BrH ',
        'SOFB BFOS',
        'NBBUCWBBN',
        'N REdER N',
        'NBBUCWBBN',
        'TOFB BFOT',
        ' HHB  HH ',
        'A HDDDH A'
    ], {
        U: 'kubejs:eyes2',
        W: 'kubejs:eyes1',
        d: 'kubejs:void_sculk',
        r: withComponents('enderio:fluid_tank', { 'enderio:item_fluid_content':[{ amount:16000,id:"kubejs:faint_arcane"}]}),
        N: 'auroral:shimmersteel_ingot',
        D: 'gtceu:gtna_chronomatic_glass_ingot',
        C: 'kubejs:eyes3',
        E: 'kubejs:seeneyes2',
        A: 'botania:rune_deception',
        F: 'draconicevolution:chaotic_energy_core',
        H: 'nuclearcraft:fusion_reactor_connector',
        O: 'draconicevolution:chaotic_crafting_injector',
        R: 'enderio:weather_crystal',
        S: 'voidminersremastered:ultimate_frame',
        T: 'gtceu:chaos_infused_frame',
        B: 'excessive_utilities:unstable_ingot'
    })

    table('imbuement_chamber', 2, 'ars_nouveau:imbuement_chamber', [
        'AB BA',
        'CDEDC',
        'CDEDC',
        'A E A',
        'CCCCC'
    ], {
        A: 'enderio:dark_steel_ingot',
        B: 'divinerpg:anthracite',
        C: 'primalmagick:marble_hallowed',
        D: 'malum:runewood_planks',
        E: 'malum:sacred_spirit'
    })

    table('constellation_core', 2, '8x appliedas:constellation_core', [
        'ABCBD',
        'EFGFE',
        'CHIJC',
        'EFKFE',
        'LMCMN'
    ], {
        A: 'botania:rune_spring',
        B: 'ad_astra:desh_ingot',
        C: 'astralsorcery:liquid_starlight_bucket',
        D: 'botania:rune_summer',
        E: 'divinerpg:eden_fragments',
        F: 'gtceu:double_rose_gold_plate',
        G: attunedCrystal('discidia'),
        H: attunedCrystal('aevitas'),
        I: 'astralsorcery:stardust',
        J: attunedCrystal('evorsio'),
        K: attunedCrystal('armara'),
        L: 'botania:rune_winter',
        M: 'ad_astra:ostrum_ingot',
        N: 'botania:rune_autumn'
    })

    combination('machine_block', 'excessive_utilities:machine_block', 'nuclearcraft:fission_reactor_casing', [
        'oritech:machine_core_7',
        'mmcr:basic_casing',
        'gtceu:hv_machine_casing',
        'kubejs:sol_astral_ingot',
        'undergarden:froststeel_ingot',
        'undergarden:froststeel_ingot',
        'kubejs:sol_astral_ingot',
        'kubejs:sol_astral_ingot'
    ], 10000)

    combination('machine_core_4', 'oritech:machine_core_4', 'oritech:machine_core_3', [
        'kubejs:law_ingot',
        'enderio:clear_glass',
        'divinerpg:ender_stone',
        'enderio:end_steel_ingot'
    ], 10000)

    table('lumen_circuit_board', 1, 'appliedas:printed_lumen_processor', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'aoa3:ghostly_powder',
        B: withComponents('astralsorcery:lumen_crystal', { 'astralsorcery:lumen': 'astralsorcery:prismatic' }),
        C: 'gtceu:good_electronic_circuit',
        D: 'aoa3:warlock_gem'
    })

    combination('glint_and_gold', 'gaiadimension:glint_and_gold', 'gaiadimension:keystone_block', [
        'botania:gaia_ingot',
        'botania:gaia_ingot',
        'botania:gaia_ingot',
        'botania:gaia_ingot',
        'botania:life_essence',
        'botania:life_essence',
        'botania:life_essence',
        'botania:life_essence',
        'mysticalagradditions:gaia_spirit_crux'
    ], 10000)

    compressor('gaiadimension_labradorite', 'gaiadimension:labradorite', '#c:ingots/enchanted', 100000, 'mysticalagradditions:insanium_apple', 2000000, 500000)

    table('glacial_basin', 1, 'auroral:glacial_basin', [
        'A A',
        'ABA',
        'ACA'
    ], {
        A: 'aoa3:ghastly_ingot',
        B: 'gtceu:gtna_chronomatic_glass_ingot',
        C: 'auroral:shimmersteel_ingot'
    })

    table('fusion_reactor_casing', 4, '3x nuclearcraft:fusion_reactor_casing', [
        'ABCDADCBA',
        'EEFGHGFII',
        'JKLMHMLNJ',
        'OKPQRSTNO',
        'AUVWXYVUA',
        'OZPabcTdO',
        'eZfghgfde',
        'iijkhkjll',
        'ABmDADmBA'
    ], {
        A: 'nuclearcraft:fission_reactor_casing',
        B: 'auroral:shimmersteel_ingot',
        C: 'excessive_utilities:compressed_cobblestone_4',
        D: 'nuclearcraft:plate_du',
        E: 'gaiadimension:aura_block',
        F: 'nuclearcraft:curium_246',
        G: 'astralsorcery:resonating_gem',
        H: 'malum:block_of_grim_talc',
        I: 'actuallyadditions:empowered_emeradic_crystal',
        J: 'astralsorcery:dynamism_gem_night',
        K: 'primalmagick:hexium_ingot',
        L: 'nuclearcraft:fuel_berkelium_heb_248',
        M: 'gaiadimension:hot_dust',
        N: 'naturesaura:infused_iron',
        O: 'gtceu:gtna_chronomatic_glass_ingot',
        P: 'nuclearcraft:plutonium_239',
        Q: singularity('coal_coke'),
        R: singularity('ender'),
        S: singularity('terrasteel'),
        T: 'kubejs:seeneyes2',
        U: 'actuallyadditions:empowered_restonia_crystal',
        V: 'nuclearcraft:fuel_plutonium_hep_239',
        W: singularity('enderium'),
        X: 'excessive_utilities:machine_block',
        Y: singularity('graphite'),
        Z: 'gtceu:micro_processor_computer',
        a: singularity('eden'),
        b: singularity('desh'),
        c: singularity('bronze'),
        d: 'primalmagick:primalite_ingot',
        e: 'astralsorcery:dynamism_gem_day',
        f: 'nuclearcraft:fuel_curium_hecm_243',
        g: 'ars_nouveau:manipulation_essence',
        h: 'aether:zanite_block',
        i: 'auroral:aurora_shard',
        j: 'nuclearcraft:californium_251',
        k: 'spectrum:dragonbone_chunk',
        l: 'gaiadimension:goldstone_dust',
        m: 'actuallyadditions:empowered_enori_crystal'
    })

    table('fusion_reactor_core', 4, 'nuclearcraft:fusion_reactor_core', [
        'AAAAAAAAA',
        'ABCDEFGHA',
        'AIJKLKMNA',
        'OPJQQQMRO',
        'SSTTATTSS',
        'UVJWXYMZU',
        'AXJWaYMXA',
        'AbcdefghA',
        'AAAAAAAAA'
    ], {
        A: 'nuclearcraft:fusion_reactor_casing',
        B: attunedCrystal('armara'),
        C: attunedCrystal('aevitas'),
        D: 'industrialforegoing:fermented_ore_meat_bucket',
        E: singularity('ghastly'),
        F: 'industrialforegoing:biofuel_bucket',
        G: attunedCrystal('mineralis'),
        H: attunedCrystal('horologium'),
        I: singularity('end_steel'),
        J: 'excessive_utilities:bedrockium_ingot',
        K: 'gtceu:ender_pearl_plate',
        L: 'industrialforegoing:ether_gas_bucket',
        M: 'projectexpansion:magenta_matter',
        N: singularity('ender_crystal'),
        O: 'rftoolsbase:machine_frame',
        P: attunedCrystal('octans'),
        Q: 'excessive_utilities:evil_infused_iron_ingot',
        R: attunedCrystal('fornax'),
        S: 'gtceu:micro_processor_computer',
        T: 'gaiadimension:white_opal',
        U: 'mekanism:alloy_reinforced',
        V: attunedCrystal('bootes'),
        W: 'aoa3:runium_chunk',
        X: 'cataclysm:witherite_ingot',
        Y: 'aoa3:cooked_charger_shank',
        Z: attunedCrystal('pelotrio'),
        a: 'industrialforegoing:sludge_bucket',
        b: attunedCrystal('vicio'),
        c: attunedCrystal('discidia'),
        d: 'industrialforegoing:meat_bucket',
        e: singularity('refined_obsidian'),
        f: 'industrialforegoing:sewage_bucket',
        g: attunedCrystal('evorsio'),
        h: attunedCrystal('lucerna')
    })

    table('fusion_reactor_connector', 4, 'nuclearcraft:fusion_reactor_connector', [
        'AAABCBAAA',
        'ADDEFEDDA',
        'AGGHHHGGA',
        'IGJKKKJGI',
        'CFLKMKLFC',
        'IGJKKKJGI',
        'AGGHHHGGA',
        'ADDEFEDDA',
        'AAABCBAAA'
    ], {
        A: 'nuclearcraft:fusion_reactor_casing',
        B: aspect('aqua'),
        C: aspect('aer'),
        D: 'draconicevolution:basic_crafting_injector',
        E: aspect('perditio'),
        F: aspect('ordo'),
        G: 'jaopca:storage_blocks.crystal_binder',
        H: 'gtceu:taint_rod',
        I: aspect('ignis'),
        J: aspect('terra'),
        K: 'draconicevolution:wyvern_core',
        L: 'kubejs:molten_chaos_bucket',
        M: 'gtceu:chaos_infused_block'
    })

    table('basic_rf_amplifier', 2, 'nuclearcraft:basic_rf_amplifier', [
        'ABBBA',
        'BCDCB',
        'BDDDB',
        'BCDCB',
        'ABBBA'
    ], {
        A: 'nuclearcraft:coil_bscco',
        B: 'nuclearcraft:extreme_ingot',
        C: 'nuclearcraft:coil_copper',
        D: 'nuclearcraft:sic_sic_cmc_plate'
    })

    table('basic_electromagnet', 2, 'nuclearcraft:basic_electromagnet', [
        'ABCBA',
        'BDEDB',
        'CEFEC',
        'BDEDB',
        'ABCBA'
    ], {
        A: 'nuclearcraft:baratol_dust',
        B: 'auroral:shimmersteel_ingot',
        C: 'nuclearcraft:lithium_manganese_oxide_ingot',
        D: 'excessive_utilities:enchanted_ingot',
        E: 'nuclearcraft:plate_du',
        F: 'divinerpg:eden_heart'
    })

    combination('hallowed_marble', 'primalmagick:marble_hallowed', 'astralsorcery:marble_raw', [
        'primalmagick:hallowsteel_nugget',
        'primalmagick:hallowsteel_nugget',
        'primalmagick:hallowsteel_ingot',
        'primalmagick:hallowsteel_ingot',
        'primalmagick:hallowood_sapling',
        'primalmagick:hallowood_sapling',
        'primalmagick:rune_hallowed',
        'primalmagick:rune_hallowed',
        'primalmagick:essence_cluster_hallowed',
        'primalmagick:essence_cluster_hallowed'
    ], 100000)
})
