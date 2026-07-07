// Codex sample: Mekanism recipe handler templates for Minecraft 1.21.1 NeoForge.
// Keep disabled until the example ids and inputs are reviewed for this pack.
const CODEX_ENABLE_MEKANISM_RECIPE_HANDLER_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_MEKANISM_RECIPE_HANDLER_TEMPLATES) return;

  const recipe = (id, body) => event.custom(body).id(id);
  const item = id => ({ count: 1, item: id });
  const tag = id => ({ count: 1, tag: id });
  const fluid = (id, amount) => ({ amount: amount, id: id });
  const fluidTag = (id, amount) => ({ amount: amount, tag: id });
  const chemical = (id, amount) => ({ amount: amount, chemical: id });
  const chemicalTag = (id, amount) => ({ amount: amount, tag: id });
  const chemicalOut = (id, amount) => ({ amount: amount, id: id });
  const stack = (id, count) => ({ count: count, id: id });

  recipe('codex_mekanism_templates:activating_template', {
    type: 'mekanism:activating',
    input: chemical('mekanism:nuclear_waste', 10),
    output: chemicalOut('mekanism:polonium', 1)
  });

  recipe('codex_mekanism_templates:bin_extract_template', {
    type: 'mekanism:bin_extract',
    category: 'misc'
  });

  recipe('codex_mekanism_templates:bin_insert_template', {
    type: 'mekanism:bin_insert',
    category: 'misc'
  });

  recipe('codex_mekanism_templates:centrifuging_template', {
    type: 'mekanism:centrifuging',
    input: chemical('mekanism:nuclear_waste', 10),
    output: chemicalOut('mekanism:plutonium', 1)
  });

  recipe('codex_mekanism_templates:chemical_conversion_template', {
    type: 'mekanism:chemical_conversion',
    input: item('minecraft:flint'),
    output: chemicalOut('mekanism:oxygen', 10)
  });

  recipe('codex_mekanism_templates:chemical_infusing_template', {
    type: 'mekanism:chemical_infusing',
    left_input: chemical('mekanism:hydrogen', 1),
    right_input: chemical('mekanism:chlorine', 1),
    output: chemicalOut('mekanism:hydrogen_chloride', 1)
  });

  recipe('codex_mekanism_templates:clear_configuration_template', {
    type: 'mekanism:clear_configuration',
    category: 'misc'
  });

  recipe('codex_mekanism_templates:combining_template', {
    type: 'mekanism:combining',
    main_input: item('minecraft:flint'),
    extra_input: tag('c:cobblestones/normal'),
    output: stack('minecraft:gravel', 1)
  });

  recipe('codex_mekanism_templates:compressing_template', {
    type: 'mekanism:compressing',
    item_input: tag('c:dusts/glowstone'),
    chemical_input: chemical('mekanism:osmium', 1),
    output: stack('mekanism:ingot_refined_glowstone', 1),
    per_tick_usage: true
  });

  recipe('codex_mekanism_templates:crushing_template', {
    type: 'mekanism:crushing',
    input: item('minecraft:cobblestone'),
    output: stack('minecraft:gravel', 1)
  });

  recipe('codex_mekanism_templates:crystallizing_template', {
    type: 'mekanism:crystallizing',
    input: chemical('mekanism:lithium', 100),
    output: stack('mekanism:dust_lithium', 1)
  });

  recipe('codex_mekanism_templates:dissolution_template', {
    type: 'mekanism:dissolution',
    item_input: tag('c:ores/copper'),
    chemical_input: chemical('mekanism:sulfuric_acid', 1),
    output: chemicalOut('mekanism:dirty_copper', 1000),
    per_tick_usage: true
  });

  recipe('codex_mekanism_templates:energy_conversion_template', {
    type: 'mekanism:energy_conversion',
    input: tag('c:dusts/redstone'),
    output: 10000
  });

  recipe('codex_mekanism_templates:enriching_template', {
    type: 'mekanism:enriching',
    input: item('minecraft:redstone'),
    output: stack('minecraft:redstone_block', 1)
  });

  recipe('codex_mekanism_templates:evaporating_template', {
    type: 'mekanism:evaporating',
    input: fluidTag('minecraft:water', 10),
    output: fluid('mekanism:brine', 1)
  });

  recipe('codex_mekanism_templates:injecting_template', {
    type: 'mekanism:injecting',
    item_input: tag('c:bricks/normal'),
    chemical_input: chemicalTag('mekanism:water_vapor', 1),
    output: stack('minecraft:clay_ball', 1),
    per_tick_usage: true
  });

  recipe('codex_mekanism_templates:mek_data_template', {
    type: 'mekanism:mek_data',
    category: 'equipment',
    pattern: ['AEA', 'A#A', ' I '],
    key: {
      '#': { tag: 'mekanism:alloys/atomic' },
      A: { tag: 'mekanism:alloys/infused' },
      E: { item: 'mekanism:energy_tablet' },
      I: { tag: 'c:ingots/refined_obsidian' }
    },
    result: stack('mekanism:atomic_disassembler', 1)
  });

  recipe('codex_mekanism_templates:metallurgic_infusing_template', {
    type: 'mekanism:metallurgic_infusing',
    item_input: item('minecraft:stone'),
    chemical_input: chemicalTag('mekanism:bio', 10),
    output: stack('minecraft:mossy_cobblestone', 1),
    per_tick_usage: false
  });

  recipe('codex_mekanism_templates:nucleosynthesizing_template', {
    type: 'mekanism:nucleosynthesizing',
    item_input: tag('minecraft:small_flowers'),
    chemical_input: chemical('mekanism:antimatter', 2),
    output: stack('minecraft:chorus_flower', 1),
    duration: 500,
    per_tick_usage: false
  });

  recipe('codex_mekanism_templates:oxidizing_template', {
    type: 'mekanism:oxidizing',
    input: tag('c:dusts/salt'),
    output: chemicalOut('mekanism:brine', 15)
  });

  recipe('codex_mekanism_templates:painting_template', {
    type: 'mekanism:painting',
    item_input: item('minecraft:white_wool'),
    chemical_input: chemical('mekanism:red', 256),
    output: stack('minecraft:red_wool', 1),
    per_tick_usage: false
  });

  recipe('codex_mekanism_templates:pigment_extracting_template', {
    type: 'mekanism:pigment_extracting',
    input: item('minecraft:poppy'),
    output: chemicalOut('mekanism:red', 768)
  });

  recipe('codex_mekanism_templates:pigment_mixing_template', {
    type: 'mekanism:pigment_mixing',
    left_input: chemical('mekanism:aqua', 1),
    right_input: chemical('mekanism:yellow', 1),
    output: chemicalOut('mekanism:lime', 2)
  });

  recipe('codex_mekanism_templates:purifying_template', {
    type: 'mekanism:purifying',
    item_input: tag('c:ores/copper'),
    chemical_input: chemical('mekanism:oxygen', 1),
    output: stack('mekanism:clump_copper', 3),
    per_tick_usage: true
  });

  recipe('codex_mekanism_templates:reaction_template', {
    type: 'mekanism:reaction',
    item_input: tag('c:dusts/fluorite'),
    fluid_input: fluidTag('minecraft:water', 1000),
    chemical_input: chemical('mekanism:plutonium', 1000),
    item_output: stack('mekanism:pellet_plutonium', 1),
    chemical_output: chemicalOut('mekanism:spent_nuclear_waste', 1000),
    duration: 100,
    energy_required: 0
  });

  recipe('codex_mekanism_templates:rotary_template', {
    type: 'mekanism:rotary',
    chemical_input: chemical('mekanism:brine', 1),
    chemical_output: chemicalOut('mekanism:brine', 1),
    fluid_input: fluidTag('c:brine', 1),
    fluid_output: fluid('mekanism:brine', 1)
  });

  recipe('codex_mekanism_templates:sawing_main_template', {
    type: 'mekanism:sawing',
    input: item('minecraft:oak_log'),
    main_output: stack('minecraft:oak_planks', 6),
    secondary_output: stack('minecraft:sawdust', 1),
    secondary_chance: 0.25
  });

  recipe('codex_mekanism_templates:sawing_secondary_only_template', {
    type: 'mekanism:sawing',
    input: item('minecraft:oak_planks'),
    secondary_output: stack('minecraft:sawdust', 1),
    secondary_chance: 0.5
  });

  recipe('codex_mekanism_templates:separating_template', {
    type: 'mekanism:separating',
    input: fluidTag('c:brine', 10),
    left_chemical_output: chemicalOut('mekanism:sodium', 1),
    right_chemical_output: chemicalOut('mekanism:chlorine', 1),
    energy_multiplier: 1
  });

  recipe('codex_mekanism_templates:washing_template', {
    type: 'mekanism:washing',
    fluid_input: fluidTag('minecraft:water', 5),
    chemical_input: chemical('mekanism:dirty_copper', 1),
    output: chemicalOut('mekanism:clean_copper', 1)
  });
});
