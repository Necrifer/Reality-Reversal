// EnderIO KubeJS sample recipes for Minecraft 1.21.1 NeoForge.
// Safe by default: change ENABLE_ENDERIO_SAMPLES to true before using.

const ENABLE_ENDERIO_SAMPLES = false;

ServerEvents.recipes(event => {
  if (!ENABLE_ENDERIO_SAMPLES) {
    return;
  }

  // Removal samples. Prefer id removals for exact changes, or type removals for bulk cleanup.
  [
    'enderio:alloy_smelting/pulsating_alloy_ingot',
    'enderio:enchanting/sweeping_edge',
    'enderio:fire_crafting/deepslate_infinity',
    'enderio:painting/painted_crafting_table',
    'enderio:powered_spawner',
    'enderio:sag_milling/soularium',
    'enderio:slicing/ender_resonator',
    'enderio:soulbinding/broken_spawner',
    'enderio:tank_empty/glass_bottle',
    'enderio:fermenting/fluid_hootch_still',
    'enderio:clear'
  ].forEach(id => event.remove({ id: id }));

  // Uncomment only when intentionally removing every recipe of a handler.
  // [
  //   'enderio:alloy_smelting',
  //   'enderio:enchanting',
  //   'enderio:fire_crafting',
  //   'enderio:painting',
  //   'enderio:shaped_entity_storage',
  //   'enderio:sag_milling',
  //   'enderio:slicing',
  //   'enderio:soul_binding',
  //   'enderio:tank',
  //   'enderio:vat_fermenting',
  //   'enderio:weather_change'
  // ].forEach(type => event.remove({ type: type }));

  event.custom({
    type: 'enderio:alloy_smelting',
    energy: 4800,
    experience: 0.3,
    inputs: [
      { count: 1, tag: 'c:ingots/iron' },
      { count: 1, item: 'minecraft:ender_pearl' }
    ],
    output: { count: 2, id: 'enderio:pulsating_alloy_ingot' }
  }).id('kubejs:enderio/alloy_smelting/sample_pulsating_alloy');

  event.custom({
    type: 'enderio:enchanting',
    cost_multiplier: 1,
    enchantment: 'minecraft:unbreaking',
    input: { count: 8, tag: 'c:ingots/dark_steel' }
  }).id('kubejs:enderio/enchanting/sample_unbreaking');

  event.custom({
    type: 'enderio:fire_crafting',
    base_blocks: ['minecraft:deepslate'],
    base_tags: ['minecraft:base_stone_overworld'],
    block_after_burning: 'minecraft:cobblestone',
    dimensions: ['minecraft:overworld'],
    results: [
      {
        chance: 0.4,
        min_count: 1,
        max_count: 1,
        result: { count: 1, id: 'enderio:grains_of_infinity' }
      }
    ]
  }).id('kubejs:enderio/fire_crafting/sample_grains_of_infinity');

  event.custom({
    type: 'enderio:painting',
    input: { item: 'minecraft:crafting_table' },
    output: { count: 1, id: 'enderio:painted_crafting_table' }
  }).id('kubejs:enderio/painting/sample_painted_crafting_table');

  event.custom({
    type: 'enderio:shaped_entity_storage',
    category: 'misc',
    pattern: [
      'IBI',
      'ICI',
      'VZV'
    ],
    key: {
      I: { tag: 'c:ingots/soularium' },
      B: { item: 'enderio:broken_spawner' },
      C: { item: 'enderio:ensouled_chassis' },
      V: { tag: 'c:gems/vibrant_crystal' },
      Z: { item: 'enderio:z_logic_controller' }
    },
    result: { count: 1, id: 'enderio:powered_spawner' }
  }).id('kubejs:enderio/shaped_entity_storage/sample_powered_spawner');

  event.custom({
    type: 'enderio:sag_milling',
    energy: 2400,
    input: { tag: 'c:ores/iron' },
    bonus: 'multiply_output',
    outputs: [
      { item: { count: 2, tag: 'c:raw_materials/iron' } },
      { chance: 0.33, item: { count: 1, tag: 'c:raw_materials/iron' } },
      { chance: 0.15, item: { count: 1, id: 'minecraft:cobblestone' } }
    ]
  }).id('kubejs:enderio/sag_milling/sample_iron_ore');

  event.custom({
    type: 'enderio:slicing',
    energy: 20000,
    inputs: [
      { tag: 'c:ingots/soularium' },
      { item: 'enderio:enderman_head' },
      { tag: 'c:ingots/soularium' },
      { tag: 'c:silicon' },
      { item: 'enderio:vibrant_alloy_ingot' },
      { tag: 'c:silicon' }
    ],
    output: { count: 1, id: 'enderio:ender_resonator' }
  }).id('kubejs:enderio/slicing/sample_ender_resonator');

  event.custom({
    type: 'enderio:soul_binding',
    energy: 288000,
    experience: 8,
    entity_type: 'minecraft:zombie',
    input: { item: 'minecraft:rotten_flesh' },
    output: { count: 1, id: 'minecraft:zombie_head' }
  }).id('kubejs:enderio/soul_binding/sample_zombie_head');

  event.custom({
    type: 'enderio:tank',
    mode: 'fill',
    fluid: { amount: 250, tag: 'c:experience' },
    input: { item: 'minecraft:glass_bottle' },
    output: { count: 1, id: 'minecraft:experience_bottle' }
  }).id('kubejs:enderio/tank/sample_fill_experience_bottle');

  event.custom({
    type: 'enderio:tank',
    mode: 'empty',
    fluid: { amount: 250, tag: 'c:experience' },
    input: { item: 'minecraft:experience_bottle' },
    output: { count: 1, id: 'minecraft:glass_bottle' }
  }).id('kubejs:enderio/tank/sample_empty_experience_bottle');

  event.custom({
    type: 'enderio:vat_fermenting',
    ticks: 600,
    input: { amount: 1000, fluid: 'minecraft:water' },
    left_reagent: 'enderio:plant_matter',
    right_reagent: 'enderio:powdered_coal',
    output: { amount: 1000, id: 'enderio:fluid_hootch_still' }
  }).id('kubejs:enderio/vat_fermenting/sample_hootch');

  event.custom({
    type: 'enderio:weather_change',
    mode: 'clear',
    fluid: { amount: 1000, id: 'enderio:fluid_liquid_sunshine_still' }
  }).id('kubejs:enderio/weather_change/sample_clear');
});
