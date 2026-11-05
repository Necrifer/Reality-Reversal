// The Depths: every Overworld ore type, visible on the cavern floor and ceiling.
// Writes its worldgen files under kubejs/data/modpack/ at game start. Do not edit those files by hand.
// ServerEvents.generateData runs after worldgen registries load, so it cannot add biome modifiers.
// New chunks only. Full restart required after edits. See migration/exu-depths-all-ores-20261104/.
(function () {
  if (!Platform.isLoaded('excessive_utilities')) return;

  // One attempt in this many chunks, per ore type and per surface. Lower = more ore on the walls.
  var RARITY = 3;
  var VEIN_SIZE = 7;
  // The cavern floor is at about Y 72-74 and the ceiling at about Y 122-123.
  var SURFACE_BANDS = [
    { name: 'floor', min: 68, max: 76 },
    { name: 'ceiling', min: 118, max: 127 }
  ];
  var DATA_DIR = 'kubejs/data/modpack/';

  var GREGTECH_MATERIALS = [
    'almandine', 'amethyst', 'apatite', 'asbestos', 'basaltic_mineral_sand', 'bauxite', 'bentonite', 'calcite',
    'cassiterite', 'cassiterite_sand', 'chalcopyrite', 'cinnabar', 'coal', 'cobaltite', 'copper', 'diamond',
    'diatomite', 'fullers_earth', 'galena', 'garnet_sand', 'garnierite', 'glauconite_sand', 'goethite', 'gold',
    'granitic_mineral_sand', 'graphite', 'green_sapphire', 'grossular', 'gypsum', 'hematite', 'iron', 'kyanite',
    'lapis', 'lazurite', 'lead', 'lepidolite', 'magnesite', 'magnetite', 'malachite', 'mica', 'nickel', 'oilsands',
    'olivine', 'opal', 'pentlandite', 'pollucite', 'pyrite', 'pyrochlore', 'pyrolusite', 'pyrope', 'realgar',
    'red_garnet', 'redstone', 'rock_salt', 'ruby', 'salt', 'sapphire', 'silver', 'soapstone', 'sodalite',
    'spessartine', 'spodumene', 'talc', 'tantalite', 'tin', 'tricalcium_phosphate', 'vanadium_magnetite',
    'yellow_garnet', 'yellow_limonite', 'zeolite'
  ];

  // Each entry is the block's stone form unless only another form exists. pickBlock prefers a deepslate form.
  var OTHER_ORES = {
    actuallyadditions: ['black_quartz_ore'],
    aoa3: ['jade_ore', 'limonite_ore', 'runium_ore'],
    astralsorcery: ['rock_crystal_ore'],
    bigreactors: ['yellorite_ore'],
    croptopia: ['salt_ore'],
    divinerpg: ['arlemite_ore', 'realmite_ore', 'rupee_ore'],
    draconicevolution: ['draconium_ore'],
    iceandfire: ['sapphire_ore', 'silver_ore'],
    immersiveengineering: ['ore_aluminum', 'ore_lead', 'ore_nickel', 'ore_silver', 'ore_uranium'],
    malum: ['cthonic_gold_ore', 'quartz_ore', 'soulstone_ore'],
    mekanism: ['fluorite_ore', 'lead_ore', 'osmium_ore', 'tin_ore', 'uranium_ore'],
    minecraft: ['coal_ore', 'copper_ore', 'diamond_ore', 'emerald_ore', 'gold_ore', 'iron_ore', 'lapis_ore', 'redstone_ore'],
    mysticalagriculture: ['inferium_ore', 'prosperity_ore'],
    nuclearcraft: ['boron_ore', 'cobalt_ore', 'lead_ore', 'lithium_ore', 'magnesium_ore', 'platinum_ore', 'silver_ore', 'thorium_ore', 'tin_ore', 'uranium_ore', 'zinc_ore'],
    oritech: ['nickel_ore', 'platinum_ore', 'uranium_ore'],
    primalmagick: ['quartz_ore', 'rock_salt_ore'],
    spectrum: ['amethyst_ore', 'azurite_ore', 'citrine_ore', 'shimmerstone_ore', 'topaz_ore'],
    thaumaturge: ['ore_amber', 'ore_cinnabar', 'ore_quartz'],
    theoreticalsciences: ['cherenkov_quartz_ore', 'pitchblende_ore']
  };

  // Ore can replace the cobbled layer, so it shows on the surface instead of only behind it.
  var REPLACEABLE = [
    { predicate_type: 'minecraft:block_match', block: 'minecraft:cobbled_deepslate' },
    { predicate_type: 'minecraft:tag_match', tag: 'minecraft:deepslate_ore_replaceables' },
    { predicate_type: 'minecraft:tag_match', tag: 'minecraft:stone_ore_replaceables' }
  ];

  var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

  function exists(id) {
    return BuiltInRegistries.BLOCK.containsKey(ResourceLocation.parse(id));
  }

  // Mods name deepslate forms differently, so try each spelling, then the stone form.
  function pickBlock(mod, name) {
    var forms = [
      'deepslate_' + name,
      name.replace('_ore', '_deepslate_ore'),
      name + '_deepslate',
      name.replace('ore_', 'deepslate_ore_'),
      name,
      'natural_' + name,
      'overworld_' + name
    ];
    for (var i = 0; i < forms.length; i++) {
      var id = mod + ':' + forms[i];
      if (exists(id)) return id;
    }
    return null;
  }

  function configuredOre(block) {
    return {
      type: 'minecraft:ore',
      config: {
        size: VEIN_SIZE,
        discard_chance_on_air_exposure: 0.0,
        targets: REPLACEABLE.map(function (target) {
          return { target: target, state: { Name: block } };
        })
      }
    };
  }

  function placedOre(configuredId, band) {
    return {
      feature: configuredId,
      placement: [
        { type: 'minecraft:rarity_filter', chance: RARITY },
        { type: 'minecraft:in_square' },
        {
          type: 'minecraft:height_range',
          height: { type: 'minecraft:uniform', min_inclusive: { absolute: band.min }, max_inclusive: { absolute: band.max } }
        },
        { type: 'minecraft:biome' }
      ]
    };
  }

  StartupEvents.postInit(function () {
    var wanted = GREGTECH_MATERIALS.map(function (material) {
      return ['gtceu', material + '_ore'];
    });
    Object.keys(OTHER_ORES).forEach(function (mod) {
      if (!Platform.isLoaded(mod) && mod !== 'minecraft') return;
      OTHER_ORES[mod].forEach(function (name) {
        wanted.push([mod, name]);
      });
    });

    var features = [];
    var missing = [];
    wanted.forEach(function (entry) {
      var block = pickBlock(entry[0], entry[1]);
      if (block === null) {
        missing.push(entry[0] + ':' + entry[1]);
        return;
      }
      var fileName = 'depths_ore/' + block.replace(':', '_');
      JsonIO.write(DATA_DIR + 'worldgen/configured_feature/' + fileName + '.json', configuredOre(block));
      SURFACE_BANDS.forEach(function (band) {
        var placedName = fileName + '_' + band.name;
        JsonIO.write(DATA_DIR + 'worldgen/placed_feature/' + placedName + '.json', placedOre('modpack:' + fileName, band));
        features.push('modpack:' + placedName);
      });
    });

    JsonIO.write(DATA_DIR + 'neoforge/biome_modifier/depths_all_ores.json', {
      type: 'neoforge:add_features',
      biomes: 'excessive_utilities:the_depths',
      features: features,
      step: 'underground_ores'
    });
    console.info('[RR Depths Ores] Wrote ' + (features.length / SURFACE_BANDS.length) + ' ore types.');
    if (missing.length > 0) console.warn('[RR Depths Ores] No block found for: ' + missing.join(', '));
  });
})();
