// Biomic Terraformer (MMCR). Restart after editing this file.
// The recipe callbacks only forward to server hooks (kubejs/server_scripts/biomic_terraformer_effects.js),
// so the biome / aurora logic can be changed with /reload.
MMCREvents.startup(event => {
    const hook = (name, context) => {
        const fn = global.rrServerHooks[name]
        if (typeof fn === 'function') fn(context)
    }
    event
        .createMachine('mmcr:biomic_terraformer')
        .recipePool('mmcr:biomic_terraformer')
        .displayNameKey('machine.mmcr.biomic_terraformer')
        .appearance('excessive_utilities:terraformer')
        // No parallelism: one marker / one ingot per run.
        .recipeBehavior(behavior => {
            behavior.beforeStart(context => hook('rrTerraformerStart', context))
            behavior.beforeFinish(context => hook('rrTerraformerFinish', context))
        })
        .register()
})
