// Solid material forms for Chaos Infused Metal.
// kubejs:chaos_infused remains the special Sulfur Cube block in custom_blocks.js.
// GT's storage block is a separate, ordinary material block.
// Follow taint_material.js: register forms without auto-generated processing recipes.
GTCEuStartupEvents.registry('gtceu:material', function(event) {
  event.create('gtceu:chaos_infused')
    .langValue('Chaos Infused Metal')
    .ingot()
    .color(0x148E64)
    .secondaryColor(0x063B2B)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_FOIL,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.GENERATE_SPRING,
      GTMaterialFlags.GENERATE_SPRING_SMALL,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_ROTOR,
      GTMaterialFlags.GENERATE_ROUND,
      GTMaterialFlags.GENERATE_FINE_WIRE,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.FORCE_GENERATE_BLOCK,
      GTMaterialFlags.DISABLE_MATERIAL_RECIPES
    )
});
