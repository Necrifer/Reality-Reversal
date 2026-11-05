// Preserve the one source inventory texture distinct from its structural block.
// This native after_mods asset pack overrides the default BlockBuilder item model.
ClientEvents.generateAssets('after_mods', function (event) {
  event.itemModel("gtna:borosilicate_glass", function (model) {
    model.parent("minecraft:block/cube_all");
    model.textures({"all":"gtna:block/casings/borosilicate_glass_inventory"});
  });
});
