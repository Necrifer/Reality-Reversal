// Use NuclearCraft's public registration API before NeoForge's registry events.
// This avoids the incompatible optional NuclearCraft KubeJS plugin/schema.
(function () {
  var FuelDef = Java.loadClass('igentuman.nc.content.fuel.FuelDef');
  var FissionFuel = Java.loadClass('igentuman.nc.setup.entries.FissionFuel');
  FissionFuel.register(new FuelDef('reality', 'rfe_1', 150, 160, 1, 691200, 100)
    .isotopes(298, 298));
})();
