// Codex sample: mass recipe changes, separated by recipe class.
// Enable only after replacing the example ids with ids from this pack.
const CODEX_ENABLE_MASS_RECIPE_SAMPLES = false;

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_MASS_RECIPE_SAMPLES) return;

  const removeByOutput = [
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe'
  ];

  const removeById = [
    'minecraft:iron_ingot_from_blasting_raw_iron',
    'minecraft:iron_ingot_from_smelting_raw_iron'
  ];

  removeByOutput.forEach(output => event.remove({ output: output }));
  removeById.forEach(id => event.remove({ id: id }));

  const shapedCrafting = [
    {
      id: 'codex_samples:steel_hopper',
      output: 'minecraft:hopper',
      pattern: ['A A', 'ABA', ' A '],
      keys: {
        A: '#c:ingots/steel',
        B: '#c:chests/wooden'
      }
    },
    {
      id: 'codex_samples:reinforced_anvil',
      output: 'minecraft:anvil',
      pattern: ['AAA', ' B ', 'BBB'],
      keys: {
        A: '#c:storage_blocks/steel',
        B: '#c:ingots/dark_steel'
      }
    }
  ];

  const shapelessCrafting = [
    {
      id: 'codex_samples:flint_and_dark_steel',
      output: 'minecraft:flint_and_steel',
      inputs: ['minecraft:flint', '#c:ingots/dark_steel']
    }
  ];

  const furnaceLike = [
    {
      type: 'minecraft:smelting',
      id: 'codex_samples:smelt_raw_osmium',
      input: '#c:raw_materials/osmium',
      output: 'mekanism:ingot_osmium',
      experience: 0.7,
      cookingtime: 200
    },
    {
      type: 'minecraft:blasting',
      id: 'codex_samples:blast_raw_osmium',
      input: '#c:raw_materials/osmium',
      output: 'mekanism:ingot_osmium',
      experience: 0.7,
      cookingtime: 100
    },
    {
      type: 'minecraft:smoking',
      id: 'codex_samples:smoke_rotten_flesh',
      input: 'minecraft:rotten_flesh',
      output: 'minecraft:leather',
      experience: 0.35,
      cookingtime: 100
    },
    {
      type: 'minecraft:campfire_cooking',
      id: 'codex_samples:campfire_rotten_flesh',
      input: 'minecraft:rotten_flesh',
      output: 'minecraft:leather',
      experience: 0.35,
      cookingtime: 600
    }
  ];

  const stonecutting = [
    {
      id: 'codex_samples:cut_dark_prismarine',
      input: '#c:storage_blocks/prismarine',
      output: 'minecraft:dark_prismarine',
      count: 1
    }
  ];

  const replaceInputs = [
    {
      output: 'extendedcrafting:basic_table',
      from: '#c:storage_blocks/iron',
      to: '#c:storage_blocks/dark_steel'
    },
    {
      output: 'minecraft:hopper',
      from: '#c:ingots/iron',
      to: '#c:ingots/steel'
    }
  ];

  shapedCrafting.forEach(recipe => {
    event.shaped(Item.of(recipe.output), recipe.pattern, recipe.keys).id(recipe.id);
  });

  shapelessCrafting.forEach(recipe => {
    event.shapeless(Item.of(recipe.output), recipe.inputs).id(recipe.id);
  });

  furnaceLike.forEach(recipe => {
    event.custom({
      type: recipe.type,
      ingredient: Ingredient.of(recipe.input).toJson(),
      result: { id: recipe.output },
      experience: recipe.experience,
      cookingtime: recipe.cookingtime
    }).id(recipe.id);
  });

  stonecutting.forEach(recipe => {
    event.stonecutting(Item.of(recipe.output, recipe.count), recipe.input).id(recipe.id);
  });

  replaceInputs.forEach(recipe => {
    event.replaceInput({ output: recipe.output }, recipe.from, Ingredient.of(recipe.to));
  });
});
