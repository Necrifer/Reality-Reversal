// Reality Reversal: Primal Magick affinities for the Calcinator / Essence Furnace (1.21.1 rebuild, 2026-11-16).
// Replaces the 1.20 pack's global datapack primal_magick_generated_affinities.zip (28,055 generated files),
// which shipped empty in the 1.21 port, and the 36 calcinator tier overrides that were in this file.
//
// Part 1, generated affinities: every item Primal Magick does not define itself gets an affinity, so anything
// can be calcinated. Earth comes from the item's kind (metals/ores 6, plants 4, buckets/essences 3, otherwise a
// stable random 1/3/6). Name keywords add the matching source (ice/water -> sea, nether/fire -> infernal, ...).
// Items with no keyword get one random extra source half of the time. "Random" is a hash of the item ID, so
// values never change between reloads, servers or players. Every generated amount stays at or below 14,
// under the shard threshold (20), so generated items yield dust only.
//
// Part 2, tier items: one item per source for each essence tier (dust 5, shard 20, crystal 50, cluster 100;
// thresholds read from Primal Magick 6.0.7 EssenceType). They override Primal Magick's own file by reusing its
// resource ID: two files for the same item would depend on load order (AffinityManager keys by target item).
//
// If Primal Magick updates, re-check PM_DEFINED_MINECRAFT against data/minecraft/affinities/items in its jar.
ServerEvents.generateData('after_mods', function (event) {
  var CAP = 14

  // [resource ID, item, values]: same entries as the 1.20 pack, sources now namespaced as 1.21 data requires.
  var TIERS = [
    ['minecraft:affinities/items/cobblestone', 'minecraft:cobblestone', {earth: 5}], // earth dust
    ['minecraft:affinities/items/iron_ingot', 'minecraft:iron_ingot', {earth: 20}], // earth shard
    ['realityreversal:affinities/items/minecraft/iron_block', 'minecraft:iron_block', {earth: 50}], // earth crystal
    ['realityreversal:affinities/items/minecraft/lodestone', 'minecraft:lodestone', {earth: 100}], // earth cluster
    ['minecraft:affinities/items/kelp', 'minecraft:kelp', {earth: 5, sea: 5, sun: 5}], // sea dust
    ['minecraft:affinities/items/prismarine_shard', 'minecraft:prismarine_shard', {earth: 2, sea: 20}], // sea shard
    ['realityreversal:affinities/items/minecraft/prismarine', 'minecraft:prismarine', {earth: 1, sea: 50}], // sea crystal
    ['minecraft:affinities/items/sea_lantern', 'minecraft:sea_lantern', {earth: 24, sea: 100, sun: 15}], // sea cluster
    ['minecraft:affinities/items/string', 'minecraft:string', {sky: 5, blood: 2}], // sky dust
    ['minecraft:affinities/items/feather', 'minecraft:feather', {sky: 20, blood: 5}], // sky shard
    ['realityreversal:affinities/items/minecraft/bow', 'minecraft:bow', {earth: 1, sky: 50}], // sky crystal
    ['realityreversal:affinities/items/minecraft/dispenser', 'minecraft:dispenser', {earth: 1, sky: 100}], // sky cluster
    ['minecraft:affinities/items/charcoal', 'minecraft:charcoal', {earth: 5, infernal: 5, sun: 5}], // sun dust
    ['minecraft:affinities/items/torch', 'minecraft:torch', {earth: 2, sun: 20}], // sun shard
    ['realityreversal:affinities/items/minecraft/glowstone', 'minecraft:glowstone', {earth: 1, sun: 50}], // sun crystal
    ['realityreversal:affinities/items/minecraft/redstone_lamp', 'minecraft:redstone_lamp', {earth: 1, sun: 100}], // sun cluster
    ['minecraft:affinities/items/amethyst_shard', 'minecraft:amethyst_shard', {earth: 20, moon: 5}], // moon dust
    ['realityreversal:affinities/items/minecraft/tinted_glass', 'minecraft:tinted_glass', {earth: 1, moon: 20}], // moon shard
    ['realityreversal:affinities/items/minecraft/amethyst_block', 'minecraft:amethyst_block', {earth: 1, moon: 50}], // moon crystal
    ['realityreversal:affinities/items/minecraft/daylight_detector', 'minecraft:daylight_detector', {earth: 1, sun: 7, moon: 100}], // moon cluster
    ['minecraft:affinities/items/leather', 'minecraft:leather', {blood: 5}], // blood dust
    ['minecraft:affinities/items/bone', 'minecraft:bone', {moon: 5, blood: 20}], // blood shard
    ['minecraft:affinities/items/bone_block', 'minecraft:bone_block', {moon: 10, blood: 50}], // blood crystal
    ['realityreversal:affinities/items/minecraft/cake', 'minecraft:cake', {earth: 1, sun: 3, blood: 100}], // blood cluster
    ['minecraft:affinities/items/nether_brick', 'minecraft:nether_brick', {earth: 5, infernal: 5}], // infernal dust
    ['minecraft:affinities/items/blaze_rod', 'minecraft:blaze_rod', {infernal: 20}], // infernal shard
    ['realityreversal:affinities/items/minecraft/fire_charge', 'minecraft:fire_charge', {earth: 1, infernal: 50}], // infernal crystal
    ['minecraft:affinities/items/magma_block', 'minecraft:magma_block', {infernal: 100}], // infernal cluster
    ['realityreversal:affinities/items/minecraft/popped_chorus_fruit', 'minecraft:popped_chorus_fruit', {earth: 4, sun: 3, void: 5}], // void dust
    ['minecraft:affinities/items/ender_pearl', 'minecraft:ender_pearl', {void: 20}], // void shard
    ['realityreversal:affinities/items/minecraft/ender_eye', 'minecraft:ender_eye', {earth: 1, void: 50}], // void crystal
    ['realityreversal:affinities/items/minecraft/ender_chest', 'minecraft:ender_chest', {earth: 1, void: 100}], // void cluster
    ['realityreversal:affinities/items/minecraft/gold_nugget', 'minecraft:gold_nugget', {earth: 6, hallowed: 5}], // hallowed dust
    ['minecraft:affinities/items/gold_ingot', 'minecraft:gold_ingot', {earth: 10, hallowed: 20}], // hallowed shard
    ['realityreversal:affinities/items/minecraft/gold_block', 'minecraft:gold_block', {earth: 1, hallowed: 50}], // hallowed crystal
    ['minecraft:affinities/items/nether_star', 'minecraft:nether_star', {earth: 25, sea: 25, sky: 25, sun: 25, moon: 25, blood: 25, infernal: 25, void: 25, hallowed: 100}] // hallowed cluster
  ]

  // Vanilla items Primal Magick 6.0.7 already defines (682). All primalmagick: items are defined too.
  var PM_DEFINED_MINECRAFT = (
    'acacia_leaves acacia_log acacia_planks acacia_sapling acacia_slab acacia_wood allay_spawn_egg allium ' +
    'amethyst_cluster amethyst_shard ancient_debris andesite angler_pottery_sherd apple archer_pottery_sherd ' +
    'armadillo_scute armadillo_spawn_egg arms_up_pottery_sherd axolotl_bucket axolotl_spawn_egg azalea ' +
    'azalea_leaves azure_bluet bamboo bamboo_mosaic barrier basalt bat_spawn_egg bedrock bee_nest bee_spawn_egg ' +
    'beef beetroot beetroot_seeds bell big_dripleaf birch_leaves birch_log birch_planks birch_sapling birch_slab ' +
    'birch_wood black_bed black_candle black_concrete black_dye black_shulker_box black_wool blackstone ' +
    'blade_pottery_sherd blaze_rod blaze_spawn_egg blue_bed blue_candle blue_concrete blue_dye blue_orchid ' +
    'blue_shulker_box blue_wool bogged_spawn_egg bone bone_block bone_meal brain_coral brain_coral_block ' +
    'brain_coral_fan breeze_rod breeze_spawn_egg brewer_pottery_sherd brick brown_bed brown_candle brown_concrete ' +
    'brown_dye brown_mushroom brown_mushroom_block brown_shulker_box brown_wool bubble_coral bubble_coral_block ' +
    'bubble_coral_fan budding_amethyst burn_pottery_sherd cactus calcite camel_spawn_egg carrot carved_pumpkin ' +
    'cat_spawn_egg cave_spider_spawn_egg chain_command_block chainmail_boots chainmail_chestplate chainmail_helmet ' +
    'chainmail_leggings charcoal cherry_leaves cherry_log cherry_planks cherry_sapling cherry_slab cherry_wood ' +
    'chicken chicken_spawn_egg chipped_anvil chiseled_stone_bricks chorus_flower chorus_fruit chorus_plant ' +
    'clay_ball coal coal_ore coarse_dirt cobbled_deepslate cobblestone cobweb cocoa_beans cod cod_bucket ' +
    'cod_spawn_egg command_block command_block_minecart conduit copper_bulb copper_ingot copper_ore cornflower ' +
    'cow_spawn_egg cracked_stone_bricks creeper_head creeper_spawn_egg crimson_fungus crimson_hyphae ' +
    'crimson_nylium crimson_planks crimson_roots crimson_slab crimson_stem crying_obsidian cyan_bed cyan_candle ' +
    'cyan_concrete cyan_dye cyan_shulker_box cyan_wool damaged_anvil dandelion danger_pottery_sherd ' +
    'dark_oak_leaves dark_oak_log dark_oak_planks dark_oak_sapling dark_oak_slab dark_oak_wood dead_brain_coral ' +
    'dead_brain_coral_block dead_brain_coral_fan dead_bubble_coral dead_bubble_coral_block dead_bubble_coral_fan ' +
    'dead_bush dead_fire_coral dead_fire_coral_block dead_fire_coral_fan dead_horn_coral dead_horn_coral_block ' +
    'dead_horn_coral_fan dead_tube_coral dead_tube_coral_block dead_tube_coral_fan debug_stick deepslate ' +
    'deepslate_coal_ore deepslate_copper_ore deepslate_diamond_ore deepslate_emerald_ore deepslate_gold_ore ' +
    'deepslate_iron_ore deepslate_lapis_ore deepslate_redstone_ore diamond diamond_horse_armor diamond_ore diorite ' +
    'dirt dirt_path disc_fragment_5 dolphin_spawn_egg donkey_spawn_egg dragon_breath dragon_egg dragon_head ' +
    'dried_kelp dripstone_block drowned_spawn_egg echo_shard egg elder_guardian_spawn_egg elytra emerald ' +
    'emerald_ore enchanted_book enchanted_golden_apple end_portal_frame end_stone ender_dragon_spawn_egg ' +
    'ender_pearl enderman_spawn_egg endermite_spawn_egg evoker_spawn_egg experience_bottle explorer_pottery_sherd ' +
    'exposed_copper exposed_copper_bulb exposed_copper_door exposed_copper_trapdoor farmland feather fern ' +
    'filled_map fire_coral fire_coral_block fire_coral_fan firework_rocket firework_star flint flow_banner_pattern ' +
    'flow_pottery_sherd flower_pot flowering_azalea flowering_azalea_leaves fox_spawn_egg friend_pottery_sherd ' +
    'frog_spawn_egg frogspawn furnace ghast_spawn_egg ghast_tear gilded_blackstone globe_banner_pattern ' +
    'glow_berries glow_ink_sac glow_lichen glow_squid_spawn_egg glowstone_dust goat_horn goat_spawn_egg gold_ingot ' +
    'gold_ore golden_horse_armor granite grass_block gravel gray_bed gray_candle gray_concrete gray_dye ' +
    'gray_shulker_box gray_wool green_bed green_candle green_concrete green_dye green_shulker_box green_wool ' +
    'guardian_spawn_egg gunpowder guster_banner_pattern guster_pottery_sherd hanging_roots heart_of_the_sea ' +
    'heart_pottery_sherd heartbreak_pottery_sherd heavy_core hoglin_spawn_egg honey_bottle honeycomb horn_coral ' +
    'horn_coral_block horn_coral_fan horse_spawn_egg howl_pottery_sherd husk_spawn_egg ice ' +
    'infested_chiseled_stone_bricks infested_cobblestone infested_cracked_stone_bricks infested_deepslate ' +
    'infested_mossy_stone_bricks infested_stone infested_stone_bricks ink_sac iron_golem_spawn_egg ' +
    'iron_horse_armor iron_ingot iron_ore jigsaw jungle_leaves jungle_log jungle_planks jungle_sapling jungle_slab ' +
    'jungle_wood kelp knowledge_book lantern lapis_lazuli lapis_ore large_amethyst_bud large_fern lava_bucket ' +
    'leather light light_blue_bed light_blue_candle light_blue_concrete light_blue_dye light_blue_shulker_box ' +
    'light_blue_wool light_gray_bed light_gray_candle light_gray_concrete light_gray_dye light_gray_shulker_box ' +
    'light_gray_wool lilac lily_of_the_valley lily_pad lime_bed lime_candle lime_concrete lime_dye ' +
    'lime_shulker_box lime_wool lingering_potion llama_spawn_egg magenta_bed magenta_candle magenta_concrete ' +
    'magenta_dye magenta_shulker_box magenta_wool magma_block magma_cube_spawn_egg mangrove_leaves mangrove_log ' +
    'mangrove_planks mangrove_propagule mangrove_roots mangrove_wood map medium_amethyst_bud melon melon_seeds ' +
    'melon_slice milk_bucket miner_pottery_sherd mooshroom_spawn_egg moss_block mossy_cobblestone ' +
    'mossy_stone_bricks mourner_pottery_sherd mud mule_spawn_egg mushroom_stem music_disc_11 music_disc_13 ' +
    'music_disc_5 music_disc_blocks music_disc_cat music_disc_chirp music_disc_creator ' +
    'music_disc_creator_music_box music_disc_far music_disc_mall music_disc_mellohi music_disc_otherside ' +
    'music_disc_pigstep music_disc_precipice music_disc_relic music_disc_stal music_disc_strad music_disc_wait ' +
    'music_disc_ward mutton mycelium name_tag nautilus_shell nether_brick nether_gold_ore nether_quartz_ore ' +
    'nether_sprouts nether_star nether_wart netherite_axe netherite_boots netherite_chestplate netherite_helmet ' +
    'netherite_hoe netherite_leggings netherite_pickaxe netherite_scrap netherite_shovel netherite_sword ' +
    'netherrack oak_leaves oak_log oak_planks oak_sapling oak_slab oak_wood obsidian ocelot_spawn_egg ' +
    'ochre_froglight ominous_bottle ominous_trial_key orange_bed orange_candle orange_concrete orange_dye ' +
    'orange_shulker_box orange_tulip orange_wool oxeye_daisy oxidized_copper oxidized_copper_bulb ' +
    'oxidized_copper_door oxidized_copper_trapdoor panda_spawn_egg parrot_spawn_egg pearlescent_froglight peony ' +
    'petrified_oak_slab phantom_membrane phantom_spawn_egg pig_spawn_egg piglin_banner_pattern ' +
    'piglin_brute_spawn_egg piglin_head piglin_spawn_egg pillager_spawn_egg pink_bed pink_candle pink_concrete ' +
    'pink_dye pink_petals pink_shulker_box pink_tulip pink_wool pitcher_plant pitcher_pod player_head ' +
    'plenty_pottery_sherd podzol pointed_dripstone poisonous_potato polar_bear_spawn_egg polished_andesite ' +
    'polished_deepslate polished_diorite polished_granite poppy porkchop potato potion powder_snow_bucket ' +
    'prismarine_crystals prismarine_shard prize_pottery_sherd pufferfish pufferfish_bucket pufferfish_spawn_egg ' +
    'pumpkin pumpkin_seeds purple_bed purple_candle purple_concrete purple_dye purple_shulker_box purple_wool ' +
    'purpur_block quartz rabbit rabbit_foot rabbit_hide rabbit_spawn_egg ravager_spawn_egg raw_copper raw_gold ' +
    'raw_iron red_bed red_candle red_concrete red_dye red_mushroom red_mushroom_block red_sand red_sandstone ' +
    'red_shulker_box red_tulip red_wool redstone redstone_ore reinforced_deepslate repeating_command_block ' +
    'rooted_dirt rose_bush rotten_flesh saddle salmon salmon_bucket salmon_spawn_egg sand sandstone ' +
    'scrape_pottery_sherd sculk sculk_catalyst sculk_sensor sculk_shrieker sculk_vein sea_lantern sea_pickle ' +
    'seagrass sheaf_pottery_sherd sheep_spawn_egg shelter_pottery_sherd short_grass shroomlight shulker_shell ' +
    'shulker_spawn_egg silverfish_spawn_egg skeleton_horse_spawn_egg skeleton_skull skeleton_spawn_egg ' +
    'skull_pottery_sherd slime_ball slime_spawn_egg small_amethyst_bud small_dripleaf sniffer_egg ' +
    'sniffer_spawn_egg snort_pottery_sherd snow snow_block snow_golem_spawn_egg snowball soul_lantern soul_sand ' +
    'soul_soil soul_torch spawner spider_eye spider_spawn_egg splash_potion sponge spore_blossom spruce_leaves ' +
    'spruce_log spruce_planks spruce_sapling spruce_slab spruce_wood squid_spawn_egg stick stone stone_bricks ' +
    'stray_spawn_egg strider_spawn_egg string stripped_acacia_log stripped_acacia_wood stripped_bamboo_block ' +
    'stripped_birch_log stripped_birch_wood stripped_cherry_log stripped_cherry_wood stripped_crimson_hyphae ' +
    'stripped_crimson_stem stripped_dark_oak_log stripped_dark_oak_wood stripped_jungle_log stripped_jungle_wood ' +
    'stripped_mangrove_log stripped_mangrove_wood stripped_oak_log stripped_oak_wood stripped_spruce_log ' +
    'stripped_spruce_wood stripped_warped_hyphae stripped_warped_stem structure_block structure_void sugar_cane ' +
    'sunflower suspicious_gravel suspicious_sand suspicious_stew sweet_berries tadpole_bucket tadpole_spawn_egg ' +
    'tall_grass tipped_arrow torch torchflower torchflower_seeds totem_of_undying trader_llama_spawn_egg trial_key ' +
    'trial_spawner trident tropical_fish tropical_fish_bucket tropical_fish_spawn_egg tube_coral tube_coral_block ' +
    'tube_coral_fan tuff turtle_egg turtle_scute turtle_spawn_egg twisting_vines vault verdant_froglight ' +
    'vex_spawn_egg villager_spawn_egg vindicator_spawn_egg vine wandering_trader_spawn_egg warden_spawn_egg ' +
    'warped_fungus warped_hyphae warped_nylium warped_planks warped_roots warped_slab warped_stem ' +
    'warped_wart_block water_bucket waxed_copper_bulb waxed_exposed_copper_bulb waxed_exposed_copper_door ' +
    'waxed_exposed_copper_trapdoor waxed_oxidized_copper_bulb waxed_oxidized_copper_door ' +
    'waxed_oxidized_copper_trapdoor waxed_weathered_copper_bulb waxed_weathered_copper_door ' +
    'waxed_weathered_copper_trapdoor weathered_copper weathered_copper_bulb weathered_copper_door ' +
    'weathered_copper_trapdoor weeping_vines wet_sponge wheat wheat_seeds white_bed white_candle white_concrete ' +
    'white_dye white_shulker_box white_tulip white_wool witch_spawn_egg wither_rose wither_skeleton_skull ' +
    'wither_skeleton_spawn_egg wither_spawn_egg wolf_spawn_egg written_book yellow_bed yellow_candle ' +
    'yellow_concrete yellow_dye yellow_shulker_box yellow_wool zoglin_spawn_egg zombie_head zombie_horse_spawn_egg ' +
    'zombie_spawn_egg zombie_villager_spawn_egg zombified_piglin_spawn_egg '
  ).split(' ')

  // Earth by the item's last name token.
  var EARTH_BY_KIND = {}
  var kinds = [
    [6, 'ingot nugget dust plate ore gem crystal stone gear raw chunk shard sheet foil bolt screw ring spring cobblestone deepslate rock pebble sand gravel clay ingots nuggets dusts gems plates'],
    [4, 'log wood planks sapling leaves seeds seed grass flower crop'],
    [3, 'bucket essence']
  ]
  kinds.forEach(function (k) { k[1].split(' ').forEach(function (t) { EARTH_BY_KIND[t] = k[0] }) })

  // [source, amount, keywords]: a name token equal to a keyword (or starting with a * root) adds that source.
  var KEYWORDS = [
    ['sea', 7, 'ice water frozen frost* snow sea coral fish prismarine tide aqua aquatic bubble permafrost kelp ocean rain salmon cod squid glacier glacial'],
    ['sky', 7, 'sky lightning thunder storm cloud wind feather flight air aether breeze wing wings levitation skyroot'],
    ['sky', 2, 'component casing machine generator controller processor circuit frame reactor engine compressor cable'],
    ['sun', 3, 'log wood planks leaves sapling grass plant crop fruit apple stripped wooden vine moss mossy bamboo cactus berry berries'],
    ['sun', 5, 'seeds seed flower petal petals'],
    ['sun', 7, 'solar sun glowstone glow glowing light daylight radiant bright'],
    ['moon', 7, 'moon lunar* shadow dream night nightmare dark dusk star starlight astral'],
    ['blood', 6, 'bone blood* meat heart leather skull flesh chicken beef pork porkchop mutton rabbit hide fang claw tooth'],
    ['blood', 2, 'pie cake stew soup potato carrot bread cookie sandwich soul'],
    ['infernal', 8, 'nether* fire blaze infernal scorched hell* lava magma ember demon demonic flame brimstone inferno ash sulfur burning molten dragon*'],
    ['void', 8, 'void* ender* end portal eldritch dimensional abyssal abyss singularity warp rift chorus shulker obsidian null entropy cosmic'],
    ['void', 3, 'taint tainted'],
    ['hallowed', 8, 'holy* divine hallowed angelic angel heavenly sacred blessed celestial halo'],
    ['hallowed', 4, 'soul spirit']
  ]
  var EXACT = {}, ROOTS = []
  KEYWORDS.forEach(function (k) {
    k[2].split(' ').forEach(function (w) {
      if (w.charAt(w.length - 1) === '*') ROOTS.push([w.substring(0, w.length - 1), k[0], k[1]])
      else (EXACT[w] = EXACT[w] || []).push([k[0], k[1]])
    })
  })
  var EXTRA_SOURCES = ['sea', 'sky', 'sun', 'moon', 'blood', 'infernal', 'void', 'hallowed']

  // Stable 32-bit string hash (FNV-1a), the "random" source.
  function hash(str, salt) {
    var h = 2166136261 ^ salt
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) | 0 }
    return h >>> 0
  }

  function own(map, key) {
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined
  }

  function generate(id) {
    var path = id.substring(id.indexOf(':') + 1)
    var tokens = path.split(/[_\/.]/)
    var vals = {}
    var add = function (src, amt) { if (!vals[src] || vals[src] < amt) vals[src] = Math.min(amt, CAP) }

    // own() guards the lookups: a name token such as "constructor" would otherwise return Object's built-ins.
    var kind = own(EARTH_BY_KIND, tokens[tokens.length - 1])
    add('earth', kind ? kind : [1, 1, 1, 3, 6][hash(id, 1) % 5])

    var matched = false
    tokens.forEach(function (t) {
      (own(EXACT, t) || []).forEach(function (e) { add(e[0], e[1]); matched = true })
      ROOTS.forEach(function (r) { if (t.indexOf(r[0]) === 0) { add(r[1], r[2]); matched = true } })
    })
    if (!matched && hash(id, 2) % 2 === 0) add(EXTRA_SOURCES[hash(id, 3) % 8], 1 + hash(id, 4) % 3)

    var set = {}
    Object.keys(vals).forEach(function (s) { set['primalmagick:' + s] = vals[s] })
    return set
  }

  var skip = {}
  PM_DEFINED_MINECRAFT.forEach(function (p) { if (p) skip['minecraft:' + p] = true })
  TIERS.forEach(function (t) { skip[t[1]] = true })

  var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  var it = BuiltInRegistries.ITEM.keySet().iterator()
  var count = 0
  while (it.hasNext()) {
    var id = String(it.next())
    var ns = id.substring(0, id.indexOf(':'))
    if (id === 'minecraft:air' || ns === 'primalmagick' || skip[id]) continue
    var file = 'realityreversal:affinities/items/' + ns + '/' + id.substring(ns.length + 1) + '.json'
    event.json(file, { type: 'item', target: id, set: generate(id) })
    count++
  }

  TIERS.forEach(function (t) {
    var set = {}
    Object.keys(t[2]).forEach(function (s) { set['primalmagick:' + s] = t[2][s] })
    event.json(t[0] + '.json', { type: 'item', target: t[1], set: set })
  })

  console.info('[RR] Primal Magick affinities: ' + count + ' generated, ' + TIERS.length + ' calcinator tier items')
})
