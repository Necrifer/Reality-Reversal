// Codex sample: dump-backed biome and dimension tag controls.
// These do not create active worldgen JSON; they document safe KubeJS-side inputs.
const CODEX_ENABLE_DUMP_BACKED_WORLD_TAG_SAMPLES = false;
const CODEX_ENABLE_DUMP_BACKED_DIMENSION_BEHAVIOR_SAMPLES = false;

ServerEvents.tags('worldgen/biome', event => {
  if (!CODEX_ENABLE_DUMP_BACKED_WORLD_TAG_SAMPLES) return;

  const biomeTagAdditions = [
    {
      tag: 'codex_samples:is_hot',
      biomes: [
        'minecraft:desert',
        'minecraft:badlands',
        'aoa3:the_burning_pits',
        'biomesoplenty:erupting_inferno'
      ]
    },
    {
      tag: 'codex_samples:is_magic_forest',
      biomes: [
        'ars_nouveau:archwood_forest',
        'ars_elemental:flourishing_forest',
        'biomesoplenty:mystic_grove',
        'twilightforest:enchanted_forest'
      ]
    }
  ];

  biomeTagAdditions.forEach(group => {
    group.biomes.forEach(biome => event.add(group.tag, biome));
  });
});

ServerEvents.tags('dimension', event => {
  if (!CODEX_ENABLE_DUMP_BACKED_WORLD_TAG_SAMPLES) return;

  const dimensionTagAdditions = [
    {
      tag: 'codex_samples:space',
      dimensions: [
        'stellaris:moon',
        'stellaris:mars',
        'stellaris:venus',
        'stellaris:mercury'
      ]
    },
    {
      tag: 'codex_samples:dangerous_boss_realms',
      dimensions: [
        'cataclysm_dimension:cataclysm_abyssal_depths',
        'cataclysm_dimension:cataclysm_eternal_frosthold',
        'voidscape:void'
      ]
    }
  ];

  dimensionTagAdditions.forEach(group => {
    group.dimensions.forEach(dimension => event.add(group.tag, dimension));
  });
});

PlayerEvents.tick(event => {
  if (!CODEX_ENABLE_DUMP_BACKED_DIMENSION_BEHAVIOR_SAMPLES) return;
  if (event.player.age % 200 !== 0) return;

  const dimensionEffects = [
    {
      dimension: 'stellaris:moon',
      command: 'effect give @s minecraft:slow_falling 12 0 true'
    },
    {
      dimension: 'voidscape:void',
      command: 'effect give @s minecraft:darkness 12 0 true'
    }
  ];

  const playerDimension = String(event.player.level.dimension);
  dimensionEffects
    .filter(rule => playerDimension === rule.dimension)
    .forEach(rule => event.server.runCommandSilent(`execute as ${event.player.username} run ${rule.command}`));
});
