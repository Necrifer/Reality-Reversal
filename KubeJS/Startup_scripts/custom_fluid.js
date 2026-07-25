const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
  event.create('fluid_charged_fluix')
    .displayName('Fluid Charged Fluix')
    .tint(0x87E8FF)
    .type(type => type
      .renderType(0)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0)
      .density(1)
    )
})