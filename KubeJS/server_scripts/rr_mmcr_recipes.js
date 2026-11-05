// MMCR generates its own recipe display; no hand-positioned MMR GUI coordinates.
;(function () {
  var recipes = JsonIO.read('config/reality_reversal/mmcr_port_recipes.json').recipes;
  ServerEvents.recipes(function (event) {
    recipes.forEach(function (r) { event.custom(r.json).id(r.id); });
    console.info('[RR_MMCR_RECIPES] registered ' + recipes.length + ' migrated recipes');
  });
  global.rrServerHooks.rrMmcrRecipeTick = function (machineId, context) {
    if (machineId !== 'realityreversal:radiation_cleanser') global.rrServerHooks.rrMmcrAuraPollution(context.machineContext().controller());
  };
  global.rrServerHooks.rrMmcrRecipeFinish = function (machineId, context) {
    var tile = context.machineContext().controller();
    var data = tile.getPersistentData();
    // MMCR retries beforeFinish when output space is blocked. Apply world effects once.
    if (data.getBoolean('rr_mmcr_finish_effect_done')) return;
    if (machineId === 'realityreversal:radiation_cleanser' || String(context.recipeId()) === 'modpack:gt_port/minecraft/void_recontainment') global.rrServerHooks.rrMmcrRadiationCleanup(tile);
    if (machineId === 'realityreversal:dim_tear') global.rrServerHooks.rrDimensionalRiftMachineTick(tile);
    data.putBoolean('rr_mmcr_finish_effect_done', true);
  };
})();
