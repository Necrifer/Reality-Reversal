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

  function listCandidates(stacks) {
    var result = []
    for (var i = 0; i < stacks.size(); i++) {
      result.push(itemId(stacks.get(i)))
    }
    return result
  }

  function runKugelblitzExport(event) {
    try {
      var kbeServer = event.server
      var kbeLevel = kbeServer.overworld()
      var kbeWorldSeed = kbeLevel.getSeed()
      var kbeRecipeType = $KugelblitzRecipes.KUGELBLITZ_TYPE.get()
      var kbeHolders = kbeLevel.getRecipeManager().getAllRecipesFor(kbeRecipeType)

      // This reproduces ChamberTerminalBE.buildRandomPool(). Recipes whose
      // declared output equals their input are permuted by the world seed.
      var kbeRandomInputs = new $ArrayList()
      for (var kbePoolRecipeIndex = 0; kbePoolRecipeIndex < kbeHolders.size(); kbePoolRecipeIndex++) {
        var kbePoolRecipe = kbeHolders.get(kbePoolRecipeIndex).value()
        var kbePoolInput = kbePoolRecipe.getInputStack()
        var kbePoolOutput = kbePoolRecipe.getResultStack()
        if (kbePoolOutput.is(kbePoolInput.getItem())) {
          kbeRandomInputs.add(kbePoolInput.copy())
        }
      }

      var kbeOrderedOutputs = new $ArrayList(kbeRandomInputs)
      $Collections.shuffle(kbeOrderedOutputs, new $Random(kbeWorldSeed))

      var kbeExportedRecipes = []
      for (var kbeRecipeIndex = 0; kbeRecipeIndex < kbeHolders.size(); kbeRecipeIndex++) {
        var kbeHolder = kbeHolders.get(kbeRecipeIndex)
        var kbeRecipe = kbeHolder.value()
        var kbeInput = kbeRecipe.getInputStack()
        var kbeDeclaredOutput = kbeRecipe.getResultStack()
        var kbeActualOutput = kbeDeclaredOutput.copy()
        var kbeRandomized = false

        if (kbeDeclaredOutput.is(kbeInput.getItem())) {
          for (var kbePoolIndex = 0; kbePoolIndex < kbeRandomInputs.size(); kbePoolIndex++) {
            if (kbeRandomInputs.get(kbePoolIndex).is(kbeDeclaredOutput.getItem())) {
              kbeActualOutput = kbeOrderedOutputs.get(kbePoolIndex).copy()
              kbeRandomized = true
              break
            }
          }
        }

        // Keep the addition in Java long arithmetic. JavaScript numbers cannot
        // exactly represent a 64-bit Minecraft world seed.
        var kbeItemHash = kbeDeclaredOutput.getItem().toString().hashCode()
        var kbeFrequencySeed = $Long.sum(kbeWorldSeed, kbeItemHash)
        var kbeTargetFrequency = new $Random(kbeFrequencySeed).nextInt(15)

        kbeExportedRecipes.push({
          id: kbeHolder.id().toString(),
          frequency: kbeTargetFrequency,
          input: {
            count: kbeRecipe.input().count(),
            selected: itemId(kbeInput)
          },
          declared_output: {
            count: kbeRecipe.output().count(),
            selected: itemId(kbeDeclaredOutput),
            candidates: listCandidates(kbeRecipe.output().members())
          },
          actual_output: {
            item: itemId(kbeActualOutput),
            count: kbeActualOutput.getCount(),
            randomized: kbeRandomized
          },
          base_time_ticks: kbeRecipe.getBaseTime(),
          processing_fe_per_step: kbeRecipe.getEnergy()
        })
      }

      var kbeExportPath = 'kubejs/exported/nuclearcraft_kugelblitz_recipes.json'
      JsonIO.write(kbeExportPath, {
        nuclearcraft_version: '1.21.1-1.3.0-alpha3',
        world_seed: kbeWorldSeed.toString(),
        frequency_range: '0-14',
        recipe_count: kbeExportedRecipes.length,
        notes: [
          'Frequency is derived at runtime; it is not a recipe JSON field.',
          'actual_output reproduces the chamber world-seed shuffle for self-output recipes.',
          'Input selected is NuclearCraft’s resolved runtime input item.',
          'Tag outputs include their resolved candidate item IDs.'
        ],
        recipes: kbeExportedRecipes
      })

      event.respond('[Kugelblitz] Exported ' + kbeExportedRecipes.length + ' recipes to ' + kbeExportPath)
    } catch (error) {
      console.error('[Kugelblitz] Recipe export failed: ' + error)
      event.respond('[Kugelblitz] Export failed; see kubejs/server.log.')
    }
  }

  ServerEvents.basicCommand('nuclearcraft_kugelblitz_export', runKugelblitzExport)
})()
