// Aether 1.5.10 Present: stop Recipe Tree for JEI (jeiexport) from spawning real TNT presents and XP orbs.
// aether:spawn_tnt / aether:spawn_xp are loot functions that add entities to the world at the loot origin. jeiexport rolls
// every block loot table many times at world spawn, so each export piled up primed TNT presents there (151 at once,
// with explosion handlers running for each blast).
// jeiexport's block sampling passes no breaking entity, while real breaks (player, fake player, explosion) always do.
// The two functions now require one. This overrides the loot table with the jar's own content; only the conditions on
// the two spawn functions are new. If Aether updates this loot table, re-copy it from the jar and keep REQUIRE_BREAKER.
ServerEvents.generateData('after_mods', function (event) {
  var REQUIRE_BREAKER = [{condition: 'minecraft:entity_properties', entity: 'this', predicate: {flags: {}}}];
  var SILK_TOUCH = {condition: 'minecraft:match_tool', predicate: {predicates: {'minecraft:enchantments': [
    {enchantments: 'minecraft:silk_touch', levels: {min: 1}}]}}};
  var spawnEntry = function (fn, weight) {
    return {type: 'minecraft:item', name: 'minecraft:air', weight: weight,
      functions: [{function: fn, conditions: REQUIRE_BREAKER}]};
  };

  event.json('aether:loot_table/blocks/present.json', {
    type: 'minecraft:block',
    pools: [
      {bonus_rolls: 0.0, rolls: 1.0, conditions: [{condition: 'minecraft:inverted', term: SILK_TOUCH}], entries: [
        spawnEntry('aether:spawn_tnt', 18),
        spawnEntry('aether:spawn_xp', 9),
        {type: 'minecraft:item', name: 'aether:gingerbread_man', weight: 8, functions: [
          {function: 'minecraft:set_count', add: false, count: {type: 'minecraft:uniform', min: 5.0, max: 6.0}},
          {function: 'minecraft:explosion_decay'}
        ]},
        {type: 'minecraft:item', name: 'aether:candy_cane_sword', functions: [{function: 'minecraft:explosion_decay'}]}
      ]},
      {bonus_rolls: 0.0, rolls: 1.0, conditions: [SILK_TOUCH],
        entries: [{type: 'minecraft:item', name: 'aether:present'}]}
    ],
    random_sequence: 'aether:blocks/present'
  });
});
