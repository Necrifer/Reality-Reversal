// Codex sample: Malum 1.8.2 recipe and entity spirit-data templates.
// Target: Minecraft 1.21.1 / NeoForge / KubeJS 2101.7.2.
//
// Both sections are disabled. Copy and edit entries, then enable only the
// section you have reviewed. Run /reload after changing this server script.
const CODEX_ENABLE_MALUM_RECIPE_TEMPLATES = false;
const CODEX_ENABLE_MALUM_SPIRIT_DATA_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_MALUM_RECIPE_TEMPLATES) return;

  const addRecipe = (id, recipe) => event.custom(recipe).id(id);
  const sizedItem = (item, count) => ({ item: item, count: count });
  const resultItem = (id, count) => ({ id: id, count: count });
  const spirit = (type, count) => ({ type: type, count: count });

  // 1. Runeworking / Runic Workbench
  addRecipe('kubejs:malum/template/runeworking', {
    type: 'malum:runeworking',
    input: sizedItem('minecraft:stone', 4),
    secondaryInput: sizedItem('malum:aqueous_spirit', 4),
    result: resultItem('minecraft:amethyst_shard', 1),
    soundType: 'malum:runic_workbench_shapes_tainted_rune'
  });

  // 2. Spirit Focusing / Spirit Crucible
  addRecipe('kubejs:malum/template/spirit_focusing', {
    type: 'malum:spirit_focusing',
    input: { item: 'malum:alchemical_impetus' },
    result: resultItem('minecraft:blaze_powder', 4),
    spirits: [
      spirit('malum:infernal', 2),
      spirit('malum:arcane', 2)
    ],
    time: 300,
    durabilityCost: 1
  });

  // 3. Spirit Infusion / Spirit Altar
  addRecipe('kubejs:malum/template/spirit_infusion', {
    type: 'malum:spirit_infusion',
    input: sizedItem('minecraft:iron_ingot', 4),
    result: resultItem('minecraft:gold_ingot', 1),
    spirits: [
      spirit('malum:infernal', 4),
      spirit('malum:earthen', 4)
    ],
    extraInputs: [
      sizedItem('minecraft:redstone', 2),
      sizedItem('minecraft:quartz', 2)
    ],
    carryOverComponentData: false
  });

  // 4. Spirit Repair. Use validItems, regex, or both to select repairable items.
  addRecipe('kubejs:malum/template/spirit_repair', {
    type: 'malum:spirit_repair',
    validItems: [
      'minecraft:iron_sword',
      'minecraft:iron_pickaxe'
    ],
    spirits: [
      spirit('malum:earthen', 4),
      spirit('malum:arcane', 2)
    ],
    repairMaterial: sizedItem('minecraft:iron_ingot', 2),
    durabilityPercentage: 0.5
  });

  // 5. Spirit Transmutation / Unchained Transmutation
  addRecipe('kubejs:malum/template/unchained_transmutation', {
    type: 'malum:unchained_transmutation',
    input: { item: 'minecraft:cobblestone' },
    result: resultItem('minecraft:stone', 1),
    group: 'kubejs_stone_transmutation'
  });

  // 6. Weeping Well. The internal recipe serializer is named void_favor.
  addRecipe('kubejs:malum/template/void_favor', {
    type: 'malum:void_favor',
    input: { tag: 'c:storage_blocks/iron' },
    result: resultItem('minecraft:diamond', 1)
  });
});

ServerEvents.generateData('after_mods', event => {
  if (!CODEX_ENABLE_MALUM_SPIRIT_DATA_TEMPLATES) return;

  // Malum reads JSON resources from data/<namespace>/spirit_data/entity/.
  // To replace a built-in assignment, use its exact resource id in the malum
  // namespace. A different namespace/path is suitable for a newly covered mob.
  const spiritAssignments = [
    {
      // Overrides data/malum/spirit_data/entity/zombie.json when enabled.
      resource: 'malum:spirit_data/entity/zombie.json',
      data: {
        registry_name: 'minecraft:zombie',
        primary_type: 'malum:wicked',
        spirits: [
          { spirit: 'malum:wicked', count: 2 },
          { spirit: 'malum:earthen', count: 1 }
        ]
      }
    }
  ];

  spiritAssignments.forEach(entry => event.json(entry.resource, entry.data));

  // For a newly covered mob, add another object to spiritAssignments using a
  // unique resource such as kubejs:spirit_data/entity/modid_mob_name.json and
  // set registry_name to that mob's real entity id.

  // To suppress spirits for an entity, generate a record shaped like this:
  // event.json('malum:spirit_data/entity/ender_dragon.json', {
  //   registry_name: 'minecraft:ender_dragon',
  //   no_spirits: true
  // });
  //
  // Optional spirit_item is an ingredient gate used by Malum's soul-harvest
  // logic; it is not an extra spirit output. Example:
  // spirit_item: { item: 'example_mod:soul_token', count: 1 }
});
