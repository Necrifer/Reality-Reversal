// Codex sample: Lychee in-world/event recipe templates for Minecraft 1.21.1 NeoForge.
// Keep disabled until each sample has been reviewed and adjusted for the pack.
const CODEX_ENABLE_LYCHEE_EVENT_RECIPE_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_LYCHEE_EVENT_RECIPE_TEMPLATES) return;

  const recipe = (id, body) => event.custom(body).id(id);
  const item = id => ({ item: id });
  const tag = id => ({ tag: id });
  const block = id => ({ blocks: id });
  const entity = id => ({ type: id });
  const stack = (id, count) => ({ id: id, count: count });
  const setBlock = id => ({ type: 'set_block', block: block(id) });
  const placeBlock = id => ({ type: 'place', block: block(id) });
  const dropItem = (id, count) => ({ type: 'drop_item', item: stack(id, count) });
  const dropXp = amount => ({ type: 'drop_xp', xp: amount });
  const preventDefault = () => ({ type: 'prevent_default' });
  const damageItem = amount => ({ type: 'damage_item', damage: amount });

  recipe('codex_inworldcrafting:block_clicking_template', {
    type: 'lychee:block_clicking',
    item_in: [item('minecraft:flint')],
    block_in: block('minecraft:stone'),
    post: [
      setBlock('minecraft:cobblestone'),
      damageItem(1)
    ],
    contextual: {
      is_sneaking: true
    },
    hide_in_viewer: false
  });

  recipe('codex_inworldcrafting:block_interacting_template', {
    type: 'lychee:block_interacting',
    item_in: [item('minecraft:glass_bottle')],
    block_in: block('minecraft:water_cauldron'),
    post: [
      { type: 'set_item', item: stack('minecraft:potion', 1) },
      preventDefault()
    ],
    contextual: {
      weather: 'rain'
    }
  });

  recipe('codex_inworldcrafting:item_inside_template', {
    type: 'lychee:item_inside',
    item_in: [item('minecraft:clay_ball')],
    block_in: block('minecraft:water'),
    post: [
      { type: 'set_item', item: stack('minecraft:prismarine_shard', 1) }
    ],
    contextual: {
      location: {
        can_see_sky: true
      }
    }
  });

  recipe('codex_inworldcrafting:item_burning_template', {
    type: 'lychee:item_burning',
    item_in: item('minecraft:stick'),
    post: [
      { type: 'set_item', item: stack('minecraft:torch', 1) }
    ]
  });

  recipe('codex_inworldcrafting:item_exploding_template', {
    type: 'lychee:item_exploding',
    item_in: [item('minecraft:coal')],
    post: [
      dropItem('minecraft:diamond', 1)
    ],
    contextual: {
      chance: 0.25
    }
  });

  recipe('codex_inworldcrafting:block_exploding_template', {
    type: 'lychee:block_exploding',
    block_in: block('minecraft:deepslate'),
    post: [
      setBlock('minecraft:cobbled_deepslate'),
      dropItem('minecraft:flint', 1)
    ]
  });

  recipe('codex_inworldcrafting:block_crushing_template', {
    type: 'lychee:block_crushing',
    falling_block: block('minecraft:anvil'),
    landing_block: block('minecraft:gravel'),
    item_in: [item('minecraft:iron_ingot')],
    post: [
      dropItem('minecraft:iron_nugget', 9),
      { type: 'anvil_damage_chance', chance: 0.15 }
    ]
  });

  recipe('codex_inworldcrafting:dripstone_dripping_template', {
    type: 'lychee:dripstone_dripping',
    source_block: block('minecraft:water'),
    target_block: block('minecraft:cauldron'),
    post: [
      setBlock('minecraft:water_cauldron')
    ]
  });

  recipe('codex_inworldcrafting:lightning_channeling_template', {
    type: 'lychee:lightning_channeling',
    item_in: [item('minecraft:copper_ingot')],
    post: [
      { type: 'set_item', item: stack('minecraft:lightning_rod', 1) },
      dropXp(3)
    ],
    contextual: {
      weather: 'thunder'
    }
  });

  recipe('codex_inworldcrafting:random_block_ticking_template', {
    type: 'lychee:random_block_ticking',
    block_in: block('minecraft:moss_block'),
    post: [
      placeBlock('minecraft:azalea')
    ],
    contextual: {
      chance: 0.05
    }
  });

  recipe('codex_inworldcrafting:anvil_crafting_template', {
    type: 'lychee:anvil_crafting',
    item_in: [
      item('minecraft:iron_sword'),
      item('minecraft:amethyst_shard')
    ],
    item_out: stack('minecraft:iron_sword', 1),
    level_cost: 3,
    material_cost: 1,
    post: [
      { type: 'add_item_cooldown', seconds: 2.0 }
    ]
  });

  recipe('codex_inworldcrafting:entity_ticking_template', {
    type: 'lychee:entity_ticking',
    entity: entity('minecraft:zombie'),
    interval: 100,
    post: [
      { type: 'execute', command: 'particle minecraft:happy_villager ~ ~1 ~ 0.2 0.4 0.2 0 4 force' }
    ],
    contextual: {
      location: {
        dimension: 'minecraft:overworld'
      }
    }
  });

  recipe('codex_inworldcrafting:oritech_particle_block_collision_template', {
    type: 'lychee:particle_block_collision',
    block_in: block('minecraft:amethyst_block'),
    item_in: item('oritech:fluxite'),
    post: [
      setBlock('minecraft:budding_amethyst')
    ],
    contextual: {
      chance: 0.5
    },
    ghost: false
  });

  recipe('codex_inworldcrafting:oritech_particle_entity_collision_template', {
    type: 'lychee:particle_entity_collision',
    entity: entity('minecraft:zombie'),
    item_in: tag('c:gems/amethyst'),
    post: [
      dropItem('oritech:fluxite', 1)
    ],
    contextual: {
      chance: 0.5
    }
  });

  recipe('codex_inworldcrafting:oritech_nuclear_explosion_destroy_block_template', {
    type: 'lychee:nuclear_explosion_destroy_block',
    block_in: block('minecraft:obsidian'),
    post: [
      setBlock('minecraft:crying_obsidian')
    ],
    contextual: {
      chance: 0.75
    }
  });

  recipe('codex_inworldcrafting:oritech_nuclear_explosion_damage_entity_template', {
    type: 'lychee:nuclear_explosion_damage_entity',
    entity: entity('minecraft:creeper'),
    post: [
      { type: 'execute', command: 'summon minecraft:firework_rocket ~ ~1 ~' }
    ],
    contextual: {
      chance: 0.75
    }
  });
});
