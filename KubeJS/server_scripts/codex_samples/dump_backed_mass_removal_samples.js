// Codex sample: dump-backed mass removal controls.
// Inputs are from the 2026-07-05 recipe manager and loot table dumps.
const CODEX_ENABLE_DUMP_BACKED_RECIPE_REMOVALS = false;
const CODEX_ENABLE_DUMP_BACKED_LOOT_REMOVALS = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_DUMP_BACKED_RECIPE_REMOVALS) return;

  const recipeTypeRemovals = [
    'minecraft:smelting',
    'minecraft:blasting',
    'mekanism:enriching',
    'mekanism:metallurgic_infusing',
    'oritech:foundry',
    'extendedcrafting:table'
  ];

  const recipeOutputRemovalsByType = [
    {
      type: 'minecraft:crafting',
      output: 'minecraft:hopper'
    },
    {
      type: 'mekanism:metallurgic_infusing',
      output: 'mekanism:basic_control_circuit'
    }
  ];

  const recipeIdRemovals = [
    'oritech:crafting/alloy/steel',
    'projecte:transmutation_table'
  ];

  recipeTypeRemovals.forEach(type => event.remove({ type: type }));
  recipeOutputRemovalsByType.forEach(rule => event.remove(rule));
  recipeIdRemovals.forEach(id => event.remove({ id: id }));
});

if (CODEX_ENABLE_DUMP_BACKED_LOOT_REMOVALS) {
  LootJS.modifiers(event => {
    const lootTableRemovals = [
      {
        table: 'minecraft:chests/simple_dungeon',
        item: 'minecraft:iron_ingot'
      },
      {
        table: 'twilightforest:entities/naga',
        item: 'twilightforest:naga_scale'
      }
    ];

    const lootTableAdditions = [
      {
        table: 'minecraft:chests/simple_dungeon',
        chance: 0.05,
        item: 'minecraft:diamond'
      },
      {
        table: 'minecraft:blocks/deepslate',
        chance: 0.02,
        item: 'minecraft:echo_shard'
      }
    ];

    lootTableRemovals.forEach(rule => {
      event.addTableModifier(rule.table).removeLoot(rule.item);
    });

    lootTableAdditions.forEach(rule => {
      event.addTableModifier(rule.table).randomChance(rule.chance).addLoot(rule.item);
    });
  });
}
