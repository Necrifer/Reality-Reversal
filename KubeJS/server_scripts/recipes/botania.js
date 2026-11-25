// For some reason, 1.21 code was extremely reworked since the original port from 1.21 to 1.20
// Old scripts do not work anymore.
// This was coded after several hours of hammering.

ServerEvents.recipes(event => {
    // Use the original item when present; otherwise use its named placeholder.
    function itemId(original) {
        if (Item.exists(original)) return original;
        const fallback = global.rrBotaniaRecipePlaceholders[original];
        if (fallback && Item.exists(fallback.id)) return fallback.id;
        throw new Error('Missing Botania recipe dependency: ' + original);
    }
    function IdRemoval(remove){
        return event.remove({id:remove})
    }
    function ingredient(value) {
        if (typeof value !== 'string') return value;
        return value.startsWith('#') ? { tag: value.substring(1) } : { item: itemId(value) };
    }
    // Recipe outputs are JSON objects; recipe IDs must be strings.
    function output(id) { return { id: itemId(id), count: 1 }; }
    function add(recipe) {
        // Elven trades have an output list; the other recipes have one output.
        const result = Array.isArray(recipe.output) ? recipe.output[0] : recipe.output;
        // Example: botania:rune_air -> reality:botania/rune_air.
        const recipeId = 'reality:botania/' + result.id.split(':').pop();
        return event.custom(recipe).id(recipeId);
    }
    function runicAltar(result, inputs, mana) {
        return add( { type: 'botania:runic_altar', output: output(result), ingredients: inputs.map(ingredient), mana: mana });
    }
    function petalApothecary(result, inputs) {
        return add( {
            type: 'botania:petal_apothecary', output: output(result), ingredients: inputs.map(ingredient),
            reagent: { tag: 'botania:seed_apothecary_reagent' }
        });
    }
    function elvenTrade(results, inputs) {
        return add( { type: 'botania:elven_trade', output: results.map(output), ingredients: inputs.map(ingredient) });
    }

    // NBT tagging has changed for 1.21.
    const blazePrediction = {
        type: 'neoforge:components', items: 'hostilenetworks:prediction',
        components: { 'hostilenetworks:data_model': 'hostilenetworks:blaze' }, strict: false
    };
    const undamagedIceRing = {
        type: 'neoforge:components', items: 'aether:ice_ring',
        components: { 'minecraft:damage': 0 }, strict: false
    };
    function replace(result, oldInput, newInput){
    return event.replaceInput(result, oldInput, newInput)}
    replace('botania:glimmering_livingwood_log', 'glowstone', 'botania:terrasteel_nugget')
    replace('botania:glimmergin_livingwood', 'glowstone', 'botania:terrasteel_nugget')
    replace('botania:mana_pylon', 'gold_ingot', 'malum:hallowed_gold_ingot')
    IdRemoval('botania:runic_altar/deception')
    IdRemoval('botania:petal_apothecary/orechid_ignem')
    runicAltar('botania:rune_air', ['botania:ender_air_bottle', 'aether:golden_aercloud', 'enderio:cloud_seed_bucket', 'malum:aerial_spirit', 'aether:zanite_gemstone'], 5200);
    runicAltar('botania:rune_earth', ['mysticalagriculture:prosperity_seed_base', 'cyclic:soil', 'primalmagick:essence_shard_earth', 'mysticalagriculture:earth_agglomeratio', 'minecraft:sculk'], 5200);
    runicAltar('botania:rune_fire', [blazePrediction, 'ars_nouveau:red_archwood_log', 'twilightforest:fiery_block', 'malum:infernal_spirit', 'gtceu:blaze_bucket'], 5200);
    runicAltar('botania:rune_water', ['minecraft:water_bucket', 'divinerpg:aquatic_ingot', 'minecraft:heart_of_the_sea', 'primalmagick:essence_shard_sea', 'projecte:evertide_amulet'], 5200);
    runicAltar('botania:rune_winter', ['botania:rune_earth', 'botania:rune_water', 'divinerpg:frozen_stone', 'minecraft:blue_ice', undamagedIceRing], 8000);
    runicAltar('botania:rune_autumn', ['botania:rune_air', 'botania:rune_fire', 'malum:soulwood', 'malum:soulwood', 'malum:soulwood', 'spectrum:bottle_of_decay_away'], 10000);
    runicAltar('appliedas:astral_processor', ['appliedas:printed_astral_processor', 'appliedas:printed_astral_processor', 'ae2:logic_processor', 'astralsorcery:liquid_starlight_bucket', 'kubejs:sol_astral_ingot'], 20000)
    runicAltar('botania:rune_deception', ['botania:rune_greed', 'botania:rune_wrath', 'botania:rune_gluttony', 'botania:rune_sloth', 'botania:rune_lust', 'botania:rune_pride', 'botania:rune_envy'], 20000);

    petalApothecary('botania:orechid', ['draconicevolution:awakened_draconium_ingot', 'botania:rune_pride', 'botania:rune_greed', '#botania:petals/yellow', '#botania:petals/gray', '#botania:petals/green', '#botania:petals/red', 'kubejs:taint_ore']);
    petalApothecary('botania:orechid_ignem', ['botania:orechid', 'botania:rune_pride', 'botania:rune_greed', '#botania:petals/white', '#botania:petals/pink', '#botania:petals/red', 'spectrum:onyx_powder']);
    add({ type: 'botania:mana_infusion', output: output('undergarden:utherium_crystal'), input: ingredient('spectrum:topaz_shard'), mana: 200 });
    elvenTrade(['naturesaura:token_joy'], ['aether:ambrosium_shard']);
    elvenTrade(['naturesaura:token_fear'], ['aether:golden_oak_log']);
    elvenTrade(['spectrum:raw_azurite'], ['spectrum:pure_azurite']);
});
