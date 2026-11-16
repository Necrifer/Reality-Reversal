// Crafting table recipes with a reusable (non-consumed) ingredient, moved from scripts/craftingtable.zs (CraftTweaker).
// .keepIngredient(x) returns x to the grid after crafting, like CraftTweaker's .reuse().
// Recipe IDs stay crafttweaker:<name>.
ServerEvents.recipes(event => {
    const recipeId = name => 'crafttweaker:' + name

    // 8 of one item around a Lamp of Cinders, which is kept.
    const LAMP = 'twilightforest:lamp_of_cinders'
    const lampRecipes = [
        ['armor_shard_cluster', 'twilightforest:armor_shard_cluster', '#c:ingots/steel'],
        ['lich_tower', 'twilightforest:lich_tower_miniature_structure', 'minecraft:bone'],
        ['naga_scale', 'twilightforest:naga_scale', 'minecraft:rotten_flesh'],
        ['aurora_block', 'twilightforest:aurora_block', 'minecraft:blue_ice'],
        ['carminite', 'twilightforest:carminite', 'minecraft:ghast_tear'],
        ['castle_brick', 'twilightforest:castle_brick', '#minecraft:stone_bricks'],
        ['liveroot', 'twilightforest:liveroot', 'minecraft:stick'],
        ['steeleaf', 'twilightforest:steeleaf_ingot', '#minecraft:leaves'],
        ['arctic_fur', 'twilightforest:arctic_fur', '#c:leathers']
    ]
    lampRecipes.forEach(r => {
        event.shaped('8x ' + r[1], ['AAA', 'ALA', 'AAA'], { A: r[2], L: LAMP })
            .keepIngredient(LAMP)
            .id(recipeId(r[0]))
    })

    event.shaped('bigreactors:reinforced_reactorcasing', ['ABA', 'BCB', 'ABA'], {
        A: 'divinerpg:oxdrite_ingot',
        B: 'nuclearcraft:plate_basic',
        C: 'castle_in_the_sky:laputa_core_orb'
    }).keepIngredient('castle_in_the_sky:laputa_core_orb').id(recipeId('reinforced_reactor_casing'))

    event.shapeless('3x gaiadimension:pink_essence', ['industrialforegoing:pink_slime', 'gaiadimension:active_rock'])
        .keepIngredient('gaiadimension:active_rock')
        .id(recipeId('pink_essence'))

    // Needs a Gold Singularity (a component ingredient), which event.shapeless can't read, so this is raw JSON.
    // kubejs:shapeless is the recipe type event.shapeless makes; the keep action returns the singularity.
    event.custom({
        type: 'kubejs:shapeless',
        category: 'misc',
        ingredients: [
            { item: 'twilightforest:steeleaf_block' },
            { type: 'neoforge:components', items: 'extendedcrafting:singularity', components: { 'extendedcrafting:singularity_id': 'extendedcrafting:gold' }, strict: false }
        ],
        result: { id: 'naturesaura:gold_powder', count: 1 },
        'kubejs:ingredient_actions': [
            { action: { type: 'kubejs:keep' }, filter: { item: { item: 'extendedcrafting:singularity' } } }
        ]
    }).id(recipeId('gold_powder'))
})
