// To adjust ore gen of Gregtech
GTCEuStartupEvents.registry('gtceu:world_gen_layer', function (event) {
  event.create('rr_mars_ore_layer')
    .targets('#ad_astra:mars_stone_replaceables')
    .dimensions('ad_astra:mars');
  event.create('rr_moon_ore_layer')
    .targets('#ad_astra:moon_stone_replaceables')
    .dimensions('ad_astra:moon');
});
