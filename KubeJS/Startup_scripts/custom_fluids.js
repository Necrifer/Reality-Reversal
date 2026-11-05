// KubeJS 2101.7.2: textures/tint belong to fluid; temperature to fluid type.
StartupEvents.registry('fluid', function (event) {
  event.create('fluid_charged_fluix')
    .displayName('Fluid Charged Fluix')
    .stillTexture('kubejs:block/thin_fluid_still')
    .flowingTexture('kubejs:block/thin_fluid_flow')
    .tint(0x87E8FF)
    .translucent();

  event.create('molten_chaos')
    .displayName('Molten Chaos')
    .stillTexture('kubejs:block/thin_fluid_still')
    .flowingTexture('kubejs:block/thin_fluid_flow')
    .tint(0x080201)
    .translucent()
    .type(function (type) { type.temperature(6000); });

  event.create('eden_fluid')
    .displayName('Light of Dawn')
    .stillTexture('kubejs:block/thin_fluid_still')
    .flowingTexture('kubejs:block/thin_fluid_flow')
    .tint(0xF5A700)
    .type(function (type) { type.temperature(280000); })
});
