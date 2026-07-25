// NuclearCraft: Neoteric 1.21.1-1.3.0-alpha3
// Runtime Kugelblitz recipe/frequency exporter.
//
// Run /nuclearcraft_kugelblitz_export after entering a world. The frequency
// and randomized output mapping depend on that world's seed, so a static
// datapack-only export cannot be correct for every world.

(() => {
  const $KugelblitzRecipes = Java.loadClass('igentuman.nc.recipe.kugelblitz.KugelblitzRecipes')
  const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  const $ArrayList = Java.loadClass('java.util.ArrayList')
  const $Collections = Java.loadClass('java.util.Collections')
  const $Random = Java.loadClass('java.util.Random')
  const $Long = Java.loadClass('java.lang.Long')

  function itemId(stack) {
    if (stack == null || stack.isEmpty()) {
      return 'minecraft:air'
    }
    return $BuiltInRegistries.ITEM.getKey(stack.getItem()).toString()
  }

  function stackCandidates(stacks) {
    const result = []
    for (let i = 0; i < stacks.length; i++) {
      result.push(itemId(stacks[i]))
    }
    return result
  }

  function listCandidates(stacks) {
    const result = []
    for (let i = 0; i < stacks.size(); i++) {
      result.push(itemId(stacks.get(i)))
    }
    return result
  }

  ServerEvents.basicCommand('nuclearcraft_kugelblitz_export', event => {
    try {
      const server = event.server
      const level = server.overworld()
      const worldSeed = level.getSeed()
      const recipeType = $KugelblitzRecipes.KUGELBLITZ_TYPE.get()
      const holders = level.getRecipeManager().getAllRecipesFor(recipeType)

      // This reproduces ChamberTerminalBE.buildRandomPool(). Recipes whose
      // declared output equals their input are permuted by the world seed.
      const randomInputs = new $ArrayList()
      for (let i = 0; i < holders.size(); i++) {
        const recipe = holders.get(i).value()
        const input = recipe.getInputStack()
        const output = recipe.getResultStack()
        if (output.is(input.getItem())) {
          randomInputs.add(input.copy())
        }
      }

      const orderedOutputs = new $ArrayList(randomInputs)
      $Collections.shuffle(orderedOutputs, new $Random(worldSeed))

      const exportedRecipes = []
      for (let i = 0; i < holders.size(); i++) {
        const holder = holders.get(i)
        const recipe = holder.value()
        const input = recipe.getInputStack()
        const declaredOutput = recipe.getResultStack()
        let actualOutput = declaredOutput.copy()
        let randomized = false

        if (declaredOutput.is(input.getItem())) {
          for (let j = 0; j < randomInputs.size(); j++) {
            if (randomInputs.get(j).is(declaredOutput.getItem())) {
              actualOutput = orderedOutputs.get(j).copy()
              randomized = true
              break
            }
          }
        }

        // Keep the addition in Java long arithmetic. JavaScript numbers cannot
        // exactly represent a 64-bit Minecraft world seed.
        const itemHash = declaredOutput.getItem().toString().hashCode()
        const frequencySeed = $Long.sum(worldSeed, itemHash)
        const targetFrequency = new $Random(frequencySeed).nextInt(15)

        exportedRecipes.push({
          id: holder.id().toString(),
          frequency: targetFrequency,
          input: {
            count: recipe.input().count(),
            selected: itemId(input),
            candidates: stackCandidates(recipe.input().ingredient().getItems())
          },
          declared_output: {
            count: recipe.output().count(),
            selected: itemId(declaredOutput),
            candidates: listCandidates(recipe.output().members())
          },
          actual_output: {
            item: itemId(actualOutput),
            count: actualOutput.getCount(),
            randomized: randomized
          },
          base_time_ticks: recipe.getBaseTime(),
          processing_fe_per_step: recipe.getEnergy()
        })
      }

      const exportPath = 'kubejs/exported/nuclearcraft_kugelblitz_recipes.json'
      JsonIO.write(exportPath, {
        nuclearcraft_version: '1.21.1-1.3.0-alpha3',
        world_seed: worldSeed.toString(),
        frequency_range: '0-14',
        recipe_count: exportedRecipes.length,
        notes: [
          'Frequency is derived at runtime; it is not a recipe JSON field.',
          'actual_output reproduces the chamber world-seed shuffle for self-output recipes.',
          'Tag inputs and outputs include their resolved candidate item IDs.'
        ],
        recipes: exportedRecipes
      })

      event.respond('[Kugelblitz] Exported ' + exportedRecipes.length + ' recipes to ' + exportPath)
    } catch (error) {
      console.error('[Kugelblitz] Recipe export failed: ' + error)
      event.respond('[Kugelblitz] Export failed; see kubejs/server.log.')
    }
  })
})()
