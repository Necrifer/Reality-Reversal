// Gives immunity to Rad poisoning for all Sulfur Cubes.

(function () {
  var NCRadiationDamageSource = Java.loadClass('igentuman.nc.content.NCRadiationDamageSource');
  EntityEvents.hurt('minecraft:sulfur_cube', function (event) {
    if (event.source.is(NCRadiationDamageSource.RADIATION_TYPE)) {
      event.cancel();
    }
  });
})();
