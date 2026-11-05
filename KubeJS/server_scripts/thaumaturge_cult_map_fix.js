// Thaumaturge 1.0.10 Cultist Ranger Captain: bound the cult map's structure search.
// The map uses vanilla exploration_map with its defaults (search_radius 50, skip_existing_chunks true). Each map
// claims the obelisk it points at, so every later map searches further out and generates new chunks. Recipe Tree
// for JEI (jeiexport) rolls each mob's loot 600 times on the server thread, which froze the game.
// This overrides the loot table with the jar's own content, changing only the two map settings below.
// If Thaumaturge updates this loot table, re-copy it from the jar and keep these two fields and MAP_NEAR_KILLER.
// Filling the map also renders a 128x128 biome preview, which jeiexport repeated for every sampled roll. jeiexport's
// sample mob sits at 0,0,0 outside the world while the killer is the real player, so the map is only filled when the
// killing player is near the mob. Kills from further away drop a blank "Cult Map". During an export, stand above y=24.
ServerEvents.generateData('after_mods', function (event) {
  var MAP_SEARCH_RADIUS = 16;        // chunks; vanilla default 50. No obelisk within range -> blank map.
  var MAP_SKIP_EXISTING = false;     // false: repeat maps reuse the nearest obelisk instead of searching further
  var MAP_NEAR_KILLER = [{condition: 'minecraft:entity_properties', entity: 'attacking_player',
    predicate: {distance: {y: {max: 24.0}, horizontal: {max: 64.0}}}}];

  event.json('thaumaturge:loot_table/entities/cultist_ranger_captain.json', {
    type: 'minecraft:entity',
    pools: [
      {bonus_rolls: 0.0, rolls: 1.0, entries: [{type: 'minecraft:item', name: 'minecraft:gold_nugget', functions: [
        {function: 'minecraft:set_count', add: false, count: {type: 'minecraft:uniform', min: 0.0, max: 2.0}},
        {function: 'minecraft:enchanted_count_increase', enchantment: 'minecraft:looting',
          count: {type: 'minecraft:uniform', min: 0.0, max: 1.0}}
      ]}]},
      {bonus_rolls: 0.0, rolls: 1.0, conditions: [
        {condition: 'minecraft:killed_by_player'},
        {condition: 'minecraft:random_chance_with_enchanted_bonus', enchantment: 'minecraft:looting',
          unenchanted_chance: 0.1, enchanted_chance: {type: 'minecraft:linear', base: 0.11, per_level_above_first: 0.01}}
      ], entries: [{type: 'minecraft:item', name: 'thaumaturge:curio_rites'}]},
      {bonus_rolls: 0.0, rolls: 1.0, conditions: [{condition: 'minecraft:killed_by_player'}],
        entries: [{type: 'minecraft:item', name: 'minecraft:map', functions: [
          {function: 'minecraft:exploration_map', destination: 'thaumaturge:on_cult_maps', decoration: 'minecraft:red_x',
            search_radius: MAP_SEARCH_RADIUS, skip_existing_chunks: MAP_SKIP_EXISTING, conditions: MAP_NEAR_KILLER},
          {function: 'minecraft:set_name', target: 'item_name', name: {translate: 'filled_map.thaumaturge.cult'}}
        ]}]}
    ],
    random_sequence: 'thaumaturge:entities/cultist_ranger_captain'
  });
});
