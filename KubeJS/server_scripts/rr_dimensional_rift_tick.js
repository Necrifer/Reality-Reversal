// KubeJS 2101.7.2 emits blockEntityTick for enabled block entities.
BlockEvents.blockEntityTick('kubejs:dimensional_rift_portal', function (event) {
  var entity = event.getBlock().getEntity();
  if (entity !== null && typeof global.rrServerHooks.rrDimensionalRiftPortalTick === 'function') {
    global.rrServerHooks.rrDimensionalRiftPortalTick(entity);
  }
});
