// Codex sample: universal recipe-handler operations for Minecraft 1.21.1.
//
// This file is intentionally disabled. Modded serializers do not share one
// constructor signature, so additions and full edits use their native recipe
// JSON through event.custom(). See the generated recipe_handler_catalog.json
// for one installed example per discovered recipe type.
const CODEX_ENABLE_UNIVERSAL_RECIPE_HANDLER_TEMPLATES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_UNIVERSAL_RECIPE_HANDLER_TEMPLATES) return;

  // ADD: Copy a sample JSON object from the catalog and edit every placeholder.
  const additions = [
    {
      enabled: false,
      id: 'kubejs:recipe_handler_examples/example_addition',
      recipe: {
        type: 'example_mod:example_recipe_type',
        input: { item: 'minecraft:stone' },
        result: { id: 'minecraft:diamond', count: 1 }
      }
    }
  ];

  additions
    .filter(entry => entry.enabled)
    .forEach(entry => event.custom(entry.recipe).id(entry.id));

  // REMOVE: Any valid KubeJS recipe filter can be placed here. Combine filter
  // fields to narrow broad operations, especially type and mod removals.
  const removals = [
    { enabled: false, filter: { id: 'example_mod:recipe_id' } },
    { enabled: false, filter: { type: 'example_mod:recipe_type' } },
    { enabled: false, filter: { type: 'example_mod:recipe_type', output: 'minecraft:diamond' } },
    { enabled: false, filter: { input: 'minecraft:stone' } },
    { enabled: false, filter: { output: 'minecraft:diamond' } },
    { enabled: false, filter: { mod: 'example_mod' } }
  ];

  removals
    .filter(entry => entry.enabled)
    .forEach(entry => event.remove(entry.filter));

  // EDIT (universal): Replace the complete recipe JSON under its existing ID.
  // This works for serializers that do not support replaceInput/replaceOutput.
  const fullReplacements = [
    {
      enabled: false,
      id: 'example_mod:existing_recipe_id',
      recipe: {
        type: 'example_mod:example_recipe_type',
        input: { item: 'minecraft:stone' },
        result: { id: 'minecraft:emerald', count: 2 }
      }
    }
  ];

  fullReplacements
    .filter(entry => entry.enabled)
    .forEach(entry => {
      event.remove({ id: entry.id });
      event.custom(entry.recipe).id(entry.id);
    });

  // EDIT (supported item-based serializers): Bulk input/output replacement.
  // Some unusual serializers do not expose conventional item components; use
  // fullReplacements for those recipes instead.
  const inputReplacements = [
    {
      enabled: false,
      filter: { type: 'example_mod:recipe_type', input: 'minecraft:iron_ingot' },
      from: 'minecraft:iron_ingot',
      to: '#c:ingots/steel'
    }
  ];

  inputReplacements
    .filter(entry => entry.enabled)
    .forEach(entry => event.replaceInput(entry.filter, entry.from, Ingredient.of(entry.to)));

  const outputReplacements = [
    {
      enabled: false,
      filter: { type: 'example_mod:recipe_type', output: 'minecraft:iron_ingot' },
      from: 'minecraft:iron_ingot',
      to: 'minecraft:gold_ingot'
    }
  ];

  outputReplacements
    .filter(entry => entry.enabled)
    .forEach(entry => event.replaceOutput(entry.filter, entry.from, entry.to));
});

