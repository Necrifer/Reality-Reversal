// Powered custom and native GT multiblocks pollute Nature's Aura, using saved counters.
;(function () {
  var Aura = Java.loadClass('de.ellpeck.naturesaura.api.aura.chunk.IAuraChunk');
  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
  var Tag = Java.loadClass('net.minecraft.nbt.CompoundTag');
  var PREFIX = 'gt_pollution_v1|', ticks = {};
  global.rrServerHooks.rrCleanAuraPollution = function (level, x, z) {
    var data = level.getPersistentData(), key = PREFIX + x + '|' + z;
    if (!data.contains(key)) return;
    var entry = data.getCompound(key), amount = Math.floor(Number(entry.getDouble('amount')) * 0.9);
    if (amount <= 0) data.remove(key);
    else { entry.putDouble('amount', amount); data.put(key, entry); }
  };
  function emitPollution(level, pos) {
    var key = PREFIX + Math.floor(Number(pos.getX()) / 16) + '|' + Math.floor(Number(pos.getZ()) / 16);
    var data = level.getPersistentData(), entry = data.contains(key) ? data.getCompound(key) : new Tag();
    entry.putDouble('amount', Math.min(10000, Number(entry.getDouble('amount')) + 1));
    entry.putInt('y', Number(pos.getY())); data.put(key, entry);
  }
  global.rrServerHooks.rrMmcrAuraPollution = function (tile) {
    emitPollution(tile.getLevel(), tile.getBlockPos());
  };
  global.rrServerHooks.rrGTWorking = function (machine) {
    var meta = machine.self(), level = meta.getLevel();
    if (level && !meta.isRemote()) emitPollution(level, meta.getPos());
    return true;
  };
  var GT = Java.loadClass('com.gregtechceu.gtceu.api.registry.GTRegistries');
  var Multi = Java.loadClass('com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition');
  var Predicate = Java.loadClass('java.util.function.Predicate');
  var HashMap = Java.loadClass('java.util.HashMap');
  if (!global.rrServerHooks.rrGTOriginalWorking) global.rrServerHooks.rrGTOriginalWorking = new HashMap();
  var definitions = GT.MACHINES.iterator();
  while (definitions.hasNext()) {
    var def = definitions.next(); if (!(def instanceof Multi)) continue;
    (function (definition) {
      if (!global.rrServerHooks.rrGTOriginalWorking.containsKey(definition)) global.rrServerHooks.rrGTOriginalWorking.put(definition, definition.getOnWorking());
      var original = global.rrServerHooks.rrGTOriginalWorking.get(definition);
      definition.setOnWorking(new Predicate({test: function (machine) {
        return original.test(machine) && global.rrServerHooks.rrGTWorking(machine);
      }}));
    })(def);
  }
  LevelEvents.tick(function (event) {
    var level = event.level, dim = String(level.dimension);
    ticks[dim] = (ticks[dim] || 0) + 1;
    if (ticks[dim] % 20 !== 0) return;
    var data = level.getPersistentData(), keys = data.getAllKeys().iterator(), remove = [];
    while (keys.hasNext()) {
      var key = String(keys.next()); if (key.indexOf(PREFIX) !== 0) continue;
      var parts = key.substring(PREFIX.length).split('|'), entry = data.getCompound(key);
      var pos = new BlockPos(Number(parts[0]) * 16 + 8, Number(entry.getInt('y')), Number(parts[1]) * 16 + 8);
      if (!level.hasChunkAt(pos)) continue;
      var amount = Number(entry.getDouble('amount'));
      if (amount <= 0) { remove.push(key); continue; }
      var aura = Aura.getAuraChunk(level, pos); if (aura !== null) aura.drainAura(pos, Math.ceil(amount * 10));
      amount = Math.max(0, amount - 1);
      if (amount === 0) remove.push(key); else { entry.putDouble('amount', amount); data.put(key, entry); }
    }
    remove.forEach(function (key) { data.remove(key); });
  });
})();
