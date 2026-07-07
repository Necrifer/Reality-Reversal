// Codex sample: mass tag edits and loot-table changes.
const CODEX_ENABLE_TAG_SAMPLES = false;
const CODEX_ENABLE_LOOT_SAMPLES = false;

ServerEvents.tags('item', event => {
  if (!CODEX_ENABLE_TAG_SAMPLES) return;

  const additions = [
    {
      tag: 'c:ingots/example_alloy',
      values: ['#c:ingots/steel', '#c:ingots/dark_steel']
    },
    {
      tag: 'c:gems/example_crystal',
      values: ['minecraft:diamond', 'minecraft:emerald']
    }
  ];

  const removals = [
    {
      tag: 'twilightforest:portal/activator',
      values: ['#c:gems/diamond']
    }
  ];

  additions.forEach(entry => entry.values.forEach(value => event.add(entry.tag, value)));
  removals.forEach(entry => entry.values.forEach(value => event.remove(entry.tag, value)));
});

if (CODEX_ENABLE_LOOT_SAMPLES) {
  LootJS.modifiers(event => {
    const blockDrops = [
      {
        block: 'minecraft:deepslate',
        chance: 0.02,
        drop: 'minecraft:echo_shard'
      }
    ];

    const entityDrops = [
      {
        entity: 'minecraft:zombie',
        chance: 0.05,
        drop: 'minecraft:iron_nugget'
      }
    ];

    blockDrops.forEach(entry => {
      event.addBlockLootModifier(entry.block).randomChance(entry.chance).addLoot(entry.drop);
    });

    entityDrops.forEach(entry => {
      event.addEntityLootModifier(entry.entity).randomChance(entry.chance).addLoot(entry.drop);
    });
  });
}
