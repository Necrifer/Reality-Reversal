// Existing ore remains kubejs:taint_ore (custom_blocks.js).
// GT supplies the item models, tinted textures, names and material tags.
GTCEuStartupEvents.registry('gtceu:material', function(event) {
  event.create('gtceu:taint')
    .langValue('Taint')
    .ingot()
    .color(0x19DEEA)
    .secondaryColor(0x0077DC)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.DISABLE_MATERIAL_RECIPES
    )
});
