// Codex sample: dump-backed mob behavior controls.
// These are event-driven behavior samples, not private Java goal rewrites.
const CODEX_ENABLE_MOB_SPAWN_RULE_SAMPLES = false;
const CODEX_ENABLE_MOB_SPAWN_BUFF_SAMPLES = false;
const CODEX_ENABLE_MOB_DAMAGE_RULE_SAMPLES = false;
const CODEX_ENABLE_MOB_TICK_BEHAVIOR_SAMPLES = false;

if (CODEX_ENABLE_MOB_SPAWN_RULE_SAMPLES) {
  const spawnRules = [
    {
      entity: 'minecraft:zombie',
      blockedDimensions: ['minecraft:the_end']
    },
    {
      entity: 'twilightforest:naga',
      allowedDimensions: ['twilightforest:twilight_forest']
    },
    {
      entity: 'cataclysm:ender_golem',
      blockedDimensions: ['minecraft:overworld']
    }
  ];

  spawnRules.forEach(rule => {
    EntityEvents.checkSpawn(rule.entity, event => {
      const dimension = String(event.level.dimension);

      if (rule.blockedDimensions && rule.blockedDimensions.includes(dimension)) {
        event.cancel();
      }

      if (rule.allowedDimensions && !rule.allowedDimensions.includes(dimension)) {
        event.cancel();
      }
    });
  });
}

if (CODEX_ENABLE_MOB_SPAWN_BUFF_SAMPLES) {
  const spawnBuffs = [
    {
      entity: 'minecraft:zombie',
      effect: 'minecraft:speed',
      seconds: 45,
      amplifier: 0
    },
    {
      entity: 'twilightforest:minoshroom',
      effect: 'minecraft:strength',
      seconds: 60,
      amplifier: 1
    },
    {
      entity: 'iceandfire:fire_dragon',
      effect: 'minecraft:resistance',
      seconds: 90,
      amplifier: 1
    }
  ];

  spawnBuffs.forEach(rule => {
    EntityEvents.spawned(rule.entity, event => {
      event.server.runCommandSilent(
        `effect give @e[type=${rule.entity},x=${event.entity.x},y=${event.entity.y},z=${event.entity.z},distance=..2,limit=1] ${rule.effect} ${rule.seconds} ${rule.amplifier} true`
      );
    });
  });
}

if (CODEX_ENABLE_MOB_DAMAGE_RULE_SAMPLES) {
  const damageRules = [
    {
      entity: 'minecraft:skeleton',
      dimension: 'minecraft:the_nether',
      multiplier: 1.5
    },
    {
      entity: 'cataclysm:the_harbinger',
      dimension: 'cataclysm_dimension:cataclysm_forge_of_aeons',
      multiplier: 0.75
    }
  ];

  damageRules.forEach(rule => {
    EntityEvents.beforeHurt(rule.entity, event => {
      if (String(event.level.dimension) !== rule.dimension) return;
      event.setDamage(event.getDamage() * rule.multiplier);
    });
  });

  EntityEvents.death('minecraft:zombie', event => {
    if (String(event.level.dimension) !== 'minecraft:overworld') return;
    if (Math.random() > 0.05) return;

    event.server.runCommandSilent(
      `execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run summon minecraft:zombie ~ ~ ~ {Tags:["codex_sample_reinforcement"]}`
    );
  });
}

if (CODEX_ENABLE_MOB_TICK_BEHAVIOR_SAMPLES) {
  const tickingBehaviors = [
    {
      entity: 'aoa3:ancient_golem',
      interval: 100,
      command: 'effect give @e[type=!minecraft:player,distance=..8] minecraft:resistance 6 0 true'
    },
    {
      entity: 'voidscape:voidling',
      interval: 80,
      command: 'effect give @a[distance=..12] minecraft:darkness 6 0 true'
    }
  ];

  tickingBehaviors.forEach(rule => {
    MEJSEvents.entityTick(rule.entity, event => {
      if (event.entity.age % rule.interval !== 0) return;

      event.server.runCommandSilent(
        `execute at @e[type=${rule.entity},x=${event.entity.x},y=${event.entity.y},z=${event.entity.z},distance=..2,limit=1] run ${rule.command}`
      );
    });
  });
}
