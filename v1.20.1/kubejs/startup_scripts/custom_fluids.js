StartupEvents.registry('fluid', event => {
  event.create('fluid_charged_fluix')
    .displayName('Fluid Charged Fluix')
    .thinTexture(0x87E8FF)
    .bucketColor(0x87E8FF)

  event.create('molten_chaos')
    .displayName('Molten Chaos')
    .thinTexture(0x080201)
    .bucketColor(0x080201)
    .temperature(6000)
    
})
