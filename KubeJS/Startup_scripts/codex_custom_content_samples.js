// Codex sample: custom registry content.
// Keep disabled until textures, models, and ids are final.
const CODEX_ENABLE_CUSTOM_CONTENT_SAMPLES = false;

if (CODEX_ENABLE_CUSTOM_CONTENT_SAMPLES) {
  StartupEvents.registry('item', event => {
    const items = [
      {
        id: 'sample_circuit',
        displayName: 'Sample Circuit',
        tooltip: 'Sample item registered by KubeJS.',
        color: 0x3AA6FF,
        maxStackSize: 64
      }
    ];

    items.forEach(item => {
      event.create(item.id)
        .displayName(item.displayName)
        .tooltip(item.tooltip)
        .color(0, item.color)
        .maxStackSize(item.maxStackSize);
    });
  });

  StartupEvents.registry('block', event => {
    const blocks = [
      {
        id: 'sample_machine_casing',
        displayName: 'Sample Machine Casing',
        hardness: 4.0,
        resistance: 8.0,
        material: 'metal'
      }
    ];

    blocks.forEach(block => {
      event.create(block.id)
        .displayName(block.displayName)
        .soundType('metal')
        .hardness(block.hardness)
        .resistance(block.resistance)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
    });
  });

  StartupEvents.registry('fluid', event => {
    const fluids = [
      {
        id: 'molten_sample_alloy',
        displayName: 'Molten Sample Alloy',
        textureColor: 0xFFAA33,
        bucketColor: 0xFFAA33
      }
    ];

    fluids.forEach(fluid => {
      event.create(fluid.id)
        .displayName(fluid.displayName)
        .thickTexture(fluid.textureColor)
        .bucketColor(fluid.bucketColor);
    });
  });
}
