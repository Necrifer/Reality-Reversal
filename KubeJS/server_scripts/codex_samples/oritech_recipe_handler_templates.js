// Codex sample: Oritech recipe handler templates.
// Keep disabled until the example ids and ingredient choices are reviewed.
const CODEX_ENABLE_ORITECH_RECIPE_HANDLER_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_ORITECH_RECIPE_HANDLER_TEMPLATES) return;

  const item = id => Ingredient.of(id).toJson();
  const stack = (id, count) => ({ id: id, count: count });
  const recipe = (id, body) => event.custom(body).id(id);

  recipe('codex_oritech_templates:assembler_template', {
    type: 'oritech:assembler',
    ingredients: [
      item('#c:gems/amethyst'),
      item('#c:gems/amethyst'),
      item('oritech:enderic_compound'),
      item('oritech:overcharged_crystal')
    ],
    results: [stack('minecraft:budding_amethyst', 1)],
    time: 160
  });

  recipe('codex_oritech_templates:atomic_forge_template', {
    type: 'oritech:atomic_forge',
    ingredients: [
      item('oritech:processing_unit'),
      item('oritech:silicon_wafer'),
      item('oritech:silicon_wafer')
    ],
    results: [stack('oritech:advanced_computing_engine', 1)],
    time: 5
  });

  recipe('codex_oritech_templates:bio_generator_template', {
    type: 'oritech:bio_generator',
    ingredients: [item('#c:fuels/bio')],
    results: [],
    time: 500
  });

  recipe('codex_oritech_templates:centrifuge_template', {
    type: 'oritech:centrifuge',
    ingredients: [item('#c:dusts/coal')],
    results: [stack('oritech:carbon_fibre_strands', 1)],
    time: 50
  });

  recipe('codex_oritech_templates:centrifuge_fluid_template', {
    type: 'oritech:centrifuge_fluid',
    fluidInput: { fluid: '#c:sulfuric_acid' },
    ingredients: [item('oritech:dubios_container')],
    results: [stack('oritech:advanced_battery', 8)],
    time: 200
  });

  recipe('codex_oritech_templates:cooler_template', {
    type: 'oritech:cooler',
    fluidInput: { fluid: 'minecraft:water' },
    ingredients: [],
    results: [stack('minecraft:ice', 3)],
    time: 200
  });

  recipe('codex_oritech_templates:deep_drill_template', {
    type: 'oritech:deep_drill',
    ingredients: [item('oritech:resource_node_coal')],
    results: [stack('minecraft:coal', 1)],
    time: 1
  });

  recipe('codex_oritech_templates:foundry_template', {
    type: 'oritech:foundry',
    ingredients: [
      item('#c:gems/diamond'),
      item('#c:ingots/nickel')
    ],
    results: [stack('oritech:adamant_ingot', 1)],
    time: 80
  });

  recipe('codex_oritech_templates:fuel_generator_template', {
    type: 'oritech:fuel_generator',
    fluidInput: { amount: 100, fluid: '#c:oil' },
    ingredients: [],
    results: [],
    time: 20
  });

  recipe('codex_oritech_templates:grinder_template', {
    type: 'oritech:grinder',
    ingredients: [item('oritech:adamant_ingot')],
    results: [stack('oritech:adamant_dust', 1)],
    time: 40
  });

  recipe('codex_oritech_templates:laser_template', {
    type: 'oritech:laser',
    ingredients: [item('minecraft:amethyst_cluster')],
    results: [stack('oritech:fluxite', 1)],
    time: 1
  });

  recipe('codex_oritech_templates:lava_generator_template', {
    type: 'oritech:lava_generator',
    fluidInput: { amount: 100, fluid: 'minecraft:lava' },
    ingredients: [],
    results: [],
    time: 120
  });

  recipe('codex_oritech_templates:particle_collision_template', {
    type: 'oritech:particle_collision',
    ingredients: [
      item('#c:dusts/coal'),
      item('#c:dusts/coal')
    ],
    results: [stack('minecraft:diamond', 1)],
    time: 500
  });

  recipe('codex_oritech_templates:pulverizer_template', {
    type: 'oritech:pulverizer',
    ingredients: [item('oritech:adamant_ingot')],
    results: [stack('oritech:adamant_dust', 1)],
    time: 100
  });

  recipe('codex_oritech_templates:reactor_template', {
    type: 'oritech:reactor',
    ingredients: [item('oritech:uranium_pellet')],
    results: [],
    time: 4000
  });

  recipe('codex_oritech_templates:refinery_template', {
    type: 'oritech:refinery',
    fluidInput: { fluid: '#c:biofuel' },
    fluidOutputs: [
      { amount: 500, fluid: 'oritech:still_diesel' },
      { amount: 200, fluid: 'oritech:still_naphtha' }
    ],
    ingredients: [item('oritech:clay_catalyst_beads')],
    results: [],
    time: 80
  });

  recipe('codex_oritech_templates:steam_engine_template', {
    type: 'oritech:steam_engine',
    fluidInput: { amount: 32, fluid: '#c:steam' },
    ingredients: [],
    results: [],
    time: 1
  });
});
