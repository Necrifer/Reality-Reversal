// Removes ProjectE EMC from every item of the listed mods, except glass / wood / stone blocks and their variants.
// Uses setEMCBefore(item, 0) (same as a 0 in config/ProjectE/custom_emc.json): the item has no EMC, and recipe
// outputs that need it as an ingredient get none either, unless they can be made another way.
// Plain event.setEMC() is setEMCAfter in KubeJS ProjectE 1.3.3 and does NOT carry over to crafted items.
// Removing an item from this list only takes effect after a full restart (the "before" map is not cleared on /reload).
ProjectEEvents.setEMC(function (event) {
  var Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');

  var NO_EMC_MODS = ['excessive_utilities', 'pamhc2foodextended', 'productivebees', 'rftoolsutility'];

  // An item is exempt when one of its ID words (split on '_') is a material word and none is a deny word.
  var MATERIAL_WORDS = ['planks', 'log', 'wood', 'stripped', 'stone', 'cobblestone', 'cobbled', 'deepslate', 'glass'];
  var DENY_WORDS = ['ore', 'cutter', 'sickle', 'spike', 'drum', 'nest', 'beehive', 'generator', 'panel', 'canvas', 'box', 'gear',
                    'compressed'];
  // Shape variants: '<material>_<variant>' is exempt when '<material>' + one of BASE_SUFFIXES is exempt.
  var VARIANTS = ['stairs', 'slab', 'wall', 'fence', 'fence_gate', 'door', 'trapdoor', 'button', 'pressure_plate',
                  'sign', 'hanging_sign', 'pane'];
  var BASE_SUFFIXES = ['', '_planks', '_log', '_wood', '_stone', '_glass'];

  // Manual overrides, applied after the rules.
  var EXTRA_EXEMPT = ['excessive_utilities:stoneburnt'];
  var EXTRA_REMOVE = [
    'excessive_utilities:moon_stone',     // gem material (has an ore), not a stone block
    'excessive_utilities:magical_wood',   // unique exception: magical wood line has no EMC
    'excessive_utilities:magical_planks'
  ];

  function hasAny(words, list) {
    for (var i = 0; i < words.length; i++) if (list.indexOf(words[i]) >= 0) return true;
    return false;
  }

  var ids = [], keys = {};
  var it = Registries.ITEM.keySet().iterator();
  while (it.hasNext()) {
    var key = it.next();
    if (NO_EMC_MODS.indexOf(String(key.getNamespace())) < 0) continue;
    ids.push(String(key));
    keys[String(key)] = key;
  }

  var exempt = {};
  ids.forEach(function (id) {
    var words = id.split(':')[1].split('_');
    if (hasAny(words, MATERIAL_WORDS) && !hasAny(words, DENY_WORDS)) exempt[id] = true;
  });
  ids.forEach(function (id) {
    VARIANTS.forEach(function (variant) {
      var suffix = '_' + variant;
      if (id.length <= suffix.length || id.slice(-suffix.length) !== suffix) return;
      var base = id.slice(0, -suffix.length);
      if (BASE_SUFFIXES.some(function (s) { return exempt[base + s]; })) exempt[id] = true;
    });
  });
  EXTRA_EXEMPT.forEach(function (id) { exempt[id] = true; });
  EXTRA_REMOVE.forEach(function (id) { delete exempt[id]; });

  var removed = [], kept = [];
  ids.forEach(function (id) {
    if (exempt[id]) { kept.push(id); return; }
    event.setEMCBefore(Registries.ITEM.get(keys[id]), 0);
    removed.push(id);
  });

  console.info('[emc_mod_removal] ' + removed.length + ' items set to 0 EMC, ' + kept.length + ' exempt, from ' +
    NO_EMC_MODS.join(', '));
  console.info('[emc_mod_removal] exempt: ' + kept.sort().join(', '));
});
