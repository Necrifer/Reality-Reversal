// Seven MMR machines migrated to installed MMCR 0.1.0; restart after editing startup definitions.
;(function () {
  var machines = JsonIO.read('config/reality_reversal/mmcr_port_machines.json').machines;
  if (machines == null || machines.length !== 7) throw new Error('Incomplete MMCR machine catalogue');
  global.rrMmcrMachines = machines;
  global.rrMmcrMissingBlocks = function (machineId) {
    var Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries').BLOCK;
    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var machine = machines.filter(function (m) { return m.id === machineId; })[0], missing = [];
    Object.keys(machine.keys).forEach(function (symbol) {
      machine.keys[symbol].forEach(function (id) {
        if (id.charAt(0) !== '@' && !Registry.containsKey(RL.parse(id)) && missing.indexOf(id) < 0) missing.push(id);
      });
    });
    return missing;
  };
  MMCREvents.startup(function (event) {
    machines.forEach(function (m) {
      var builder = event.createMachine(m.id).recipePool(m.id)
        .appearance(m.appearanceBlock)
        .displayNameKey('machine.' + m.id.replace(':', '.'))
        .recipeBehavior(function (behavior) {
          behavior.beforeStart(function (context) {
            context.machineContext().controller().getPersistentData().remove('rr_mmcr_finish_effect_done');
          });
          behavior.recipeTick(function (context) {
            var hook = global.rrServerHooks.rrMmcrRecipeTick;
            if (typeof hook === 'function') hook(m.id, context);
          });
          behavior.beforeFinish(function (context) {
            var hook = global.rrServerHooks.rrMmcrRecipeFinish;
            if (typeof hook === 'function') hook(m.id, context);
          });
        });
      if (m.id === 'realityreversal:dim_tear') builder.postServerTick(function (context) {
        var hook = global.rrServerHooks.rrDimensionalRiftMachineTick;
        if (typeof hook === 'function') hook(context.controller());
      });
      builder.register();
    });
    console.info('[RR_MMCR_STARTUP] registered ' + machines.length + ' migrated machines');
  });
})();
