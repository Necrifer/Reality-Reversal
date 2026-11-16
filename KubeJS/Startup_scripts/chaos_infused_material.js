// Solid material forms for Chaos Infused Metal.
// kubejs:chaos_infused remains the special Sulfur Cube block in custom_blocks.js.

//look at gregtech_materials.js script for the function
;(function () {
  global.gregMaterials.register('gtceu:chaos_infused', function (material) {
    material
    .ingot()
    .color(0x148E64)
    .secondaryColor(0x063B2B)
    .liquid()
    .block()
    .gas()
    .ore()
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
      GTMaterialFlags.NO_SMELTING
    )
});
  global.gregMaterials.register('gtceu:taint', function (material) {
    material
    .ingot()
    .color(0x19DEEA)
    .secondaryColor(0x0077DC)
    .plasma()
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
    )
});
})();
