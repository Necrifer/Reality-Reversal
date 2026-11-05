// GTCEu ore layers for Ad Astra Moon and Mars.
// KubeJS 2101.7.2 BlockStatePredicate.wrapRuleTest only accepts a RuleTest, a BlockStatePredicate or an NBT
// compound; a '#tag' string is parsed as SNBT and fails ("Expected '{'") when chunks generate. Use the
// vanilla tag_match rule test in compound form (tag ID without '#').
GTCEuStartupEvents.worldGenLayers(function (event) {
  event.create('rr_mars_ore_layer', function (layer) {
    layer.targets({ predicate_type: 'minecraft:tag_match', tag: 'ad_astra:mars_stone_replaceables' }).dimensions(['ad_astra:mars']);
  });
  event.create('rr_moon_ore_layer', function (layer) {
    layer.targets({ predicate_type: 'minecraft:tag_match', tag: 'ad_astra:moon_stone_replaceables' }).dimensions(['ad_astra:moon']);
  });
});
