
//Crafting types: altar_crafting · focal_combine · focal_transmutation · lumen_generation · 
// lumen_crystallization · lightwell · infusion · liquid_starlight · liquid_interaction

//event.remove({ altar_tier: 'radiance', output: 'astralsorcery:dynamism_gem_sky' })
//event.remove({ lumen: ['caldor', 'hyle'], astral_type: 'lumen' })
//event.remove({ constellation: 'discidia' })

const starlight = 'astralsorcery:liquid_starlight'
const staringot = 'astralsorcery:starmetal_ingot'
const stardust = 'astralsorcery:stardust'
const shinygem = 'astralsorcery:resonating_gem'
AstralSorcery.recipes(event => {
    event.remove({id: 'astralsorcery:focal_combine/altar_illumination'})
    event.remove({id: 'astralsorcery:altar/astrolabe'})
    event.focal_combine('astralsorcery:altar_illumination', ['astralsorcery:marble_raw', 'astralsorcery:marble_raw', 'astralsorcery:marble_raw', 'crafting_table', 'kubejs:eyes3'])
        .duration(100)
    event.altar_crafting('kubejs:sol_astral_ingot', [' C ', 'BAB', ' C '], 
        {A: 'draconicevolution:small_chaos_frag', B: staringot, C: 'kubejs:containment_failure'})
        .relay([' fge ', 's m n', 'bo kc', 'a p u', ' liv '])
        .define('f', 'productivebees:configurable_honeycomb[productivebees:bee_type="productivebees:experience"]')
        .define('g', 'gtceu:blaze_bucket')
        .define('e', 'naturesaura:fortress_finder')
        .define('s', 'primalmagick:sunwood_sapling')
        .define('m', 'botania:rune_wrath')
        .define('n', 'voidscape:null_white')
        .define('b', 'twilightforest:fiery_block')
        .define('o', 'oritech:overcharged_crystal')
        .define('k', 'ars_nouveau:sky_block')
        .define('c', 'kubejs:void_sculk')
        .define('a', 'draconicevolution:awakened_core')
        .define('p', 'hostilenetworks:end_prediction')
        .define('u', 'voidscape:null_black')
        .define('l', 'divinerpg:legendary_ender_eye')
        .define('i', 'spectrum:midnight_solution_bucket')
        .define('v', 'astral_dimension:void_gem')
        .type('resonance')
        .duration(1200)
        .night()
        .additional('2x dog:draconic_soul_fragment')
        .fluid('astralsorcery:liquid_starlight', 2000)
        .id('modpack:altar/sol_astral_ingot')

    //event.altar_crafting('minecraft:elytra', ['FFF', 'FDF', 'FFF'], { F: 'minecraft:feather', D: 'minecraft:diamond' })
    //    .type('radiance')
    //    .constellation('vicio')
    //    .starlight('vicio')
    //    .lumen('prismatic', 200)
    //    .fluid('astralsorcery:liquid_starlight', 1000)
    //    .anyTime()

    //event.focal_transmutation('minecraft:cake[bites=0]', 'minecraft:pumpkin')
    //    .constellation('aevitas')
    //    .focused(true)

    //event.infusion('minecraft:glowstone', 'minecraft:redstone_block')
    //    .duration(100)
})

// You can make custom constellations too.
//AstralSorcery.registry('constellations', event => {
    //event.create('kubejs:lyra')
    //    .displayName('Lyra')
    //    .color('#7F5FFF')
    //    .major()
    //    .star(4, 5).star(12, 3).star(20, 9).star(26, 20).star(16, 27).star(6, 22)
    //    .chain(0, 1, 2, 3, 4, 5)
    //    .focalPoint()
    //    .rootPerk('vicio', -45, 20)
//})
// You can also make new Altars.
//AstralSorcery.altarTiers(event => {
    //event.create('stellar').base('radiance').block('kubejs:stellar_altar')
//})
// Of course, this must be moved to the startup_scripts folder, as it registers multiiblocks.
//StartupEvents.registry('block', event => {
    //event.create('kubejs:stellar_altar', 'astralsorcery:altar')
    //    .realTier('stellar')
    //    .structureLayer(-1, ['D   D', '     ', '  D  ', '     ', 'D   D'], { D: 'minecraft:diamond_block' })
//})
// Allows one to change the pages in the tomes.
AstralSorcery.research(event => {
    //event.create('kubejs:starry_diamond')
    //    .title('Starry Diamond')
    //    .tier('shimmer')
    //    .position(0, 3)
    //    .icon('minecraft:diamond')
    //    .text('A diamond shaped by the stars.')
    //    .recipe('mypack:altar/starry_diamond')
    //    .constellation('aevitas')
})