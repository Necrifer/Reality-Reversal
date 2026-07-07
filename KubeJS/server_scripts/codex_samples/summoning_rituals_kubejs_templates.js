// Codex sample: Summoning Rituals KubeJS recipe templates for Minecraft 1.21.1 NeoForge.
// Keep disabled until the example ids, items, entities, and conditions are reviewed.
const CODEX_ENABLE_SUMMONING_RITUALS_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_SUMMONING_RITUALS_TEMPLATES) return;

  event.recipes.summoningrituals
    .altar(
      'minecraft:diamond',
      [
        SummoningItem.of('minecraft:emerald', 1),
        SummoningItem.of('minecraft:amethyst_shard', 4)
      ],
      'minecraft:nether_star'
    )
    .id('codex_summoning_rituals:item_output_template')
    .ticks(200)
    .displayOutputs(['minecraft:nether_star'])
    .conditions(builder => builder
      .dimension('minecraft:overworld')
      .setOpenSky(true)
      .moonPhase(SummoningMoonPhase.FULL_MOON)
      .time(SummoningTime.NIGHT)
    );

  event.recipes.summoningrituals
    .altar(
      'minecraft:bone',
      [
        SummoningItem.of('minecraft:rotten_flesh', 4),
        SummoningItem.of('minecraft:gunpowder', 2)
      ]
    )
    .id('codex_summoning_rituals:entity_output_template')
    .ticks(300)
    .entityOutputs([
      SummoningEntity.output('minecraft:zombie', 2),
      SummoningEntity.output('minecraft:skeleton', 1)
    ])
    .commands([
      'particle minecraft:soul ~ ~1 ~ 0.5 0.5 0.5 0.01 20 force'
    ])
    .conditions(builder => builder
      .weather(weather => weather.setRaining(true))
      .minLightLevel(0)
      .maxLightLevel(7)
    );

  event.recipes.summoningrituals
    .altar(
      'minecraft:ender_pearl',
      [
        SummoningItem.of('minecraft:blaze_powder', 2),
        SummoningItem.of('minecraft:crying_obsidian', 4)
      ],
      [
        SummoningItem.of('minecraft:ender_eye', 1).offset([0, 1, 0])
      ]
    )
    .id('codex_summoning_rituals:block_pattern_template')
    .ticks(400)
    .blockPattern(pattern => pattern
      .block([1, 0, 0], 'minecraft:crying_obsidian')
      .block([-1, 0, 0], 'minecraft:crying_obsidian')
      .block([0, 0, 1], 'minecraft:crying_obsidian')
      .block([0, 0, -1], 'minecraft:crying_obsidian')
      .queryableTag([0, -1, 0], '#minecraft:base_stone_overworld', 'floor')
    )
    .conditions(builder => builder
      .height(20, 120)
      .facing('north')
    );

  event.recipes.summoningrituals
    .altar(
      'minecraft:golden_apple',
      [
        SummoningItem.of('minecraft:gold_ingot', 8)
      ]
    )
    .id('codex_summoning_rituals:entity_input_template')
    .ticks(240)
    .entityInputs([
      SummoningEntity.input('minecraft:cow', 1)
    ])
    .itemOutputs([
      SummoningItem.of('minecraft:enchanted_golden_apple', 1)
    ])
    .commands(
      ['playsound minecraft:entity.evoker.prepare_summon master @a ~ ~ ~ 1 1'],
      ['Runs a sound at the altar when the ritual completes.'],
      false
    );

  event.recipes.summoningrituals
    .altar('minecraft:echo_shard')
    .id('codex_summoning_rituals:raw_schema_template')
    .itemInputs([
      { ingredient: { item: 'minecraft:sculk' }, count: 4 },
      { ingredient: { item: 'minecraft:amethyst_shard' }, count: 2 }
    ])
    .fakeEntityInputs([
      SummoningEntity.fakeInput('minecraft:warden_spawn_egg', 1, entity => entity.type === 'minecraft:warden')
    ])
    .itemOutputs([
      SummoningItem.of('minecraft:recovery_compass', 1)
    ])
    .commands([
      'say A sample Summoning Rituals KubeJS ritual completed'
    ])
    .ticks(600)
    .zone([0, 1, 0]);
});

SummoningRituals.start(event => {
  if (!CODEX_ENABLE_SUMMONING_RITUALS_TEMPLATES) return;

  const floorPositions = event.queryBlockPattern('floor');
  if (floorPositions.length > 0) {
    event.highlightOffsets(floorPositions);
  }
});

SummoningRituals.complete(event => {
  if (!CODEX_ENABLE_SUMMONING_RITUALS_TEMPLATES) return;

  const recipeId = event.recipeInfo.recipe.id;
  if (`${recipeId}`.startsWith('codex_summoning_rituals:')) {
    event.level.runCommandSilent(`say Completed ${recipeId}`);
  }
});
