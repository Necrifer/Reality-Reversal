MMCREvents.startup(event => {
    const builder = event
        .createMachine("mmcr:eclipse_viewer") // Global machine identifier.
        .recipePool("mmcr:eclipse_viewer") // Bind the recipe pool.
        .displayNameKey("machine.mmcr.eclipse_viewer") // Translation key for the display name... Supposedly
        .appearance("divinerpg:twilight_stone") // Controller skin: textured like this block.
    builder
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(3)
    builder.register()
})