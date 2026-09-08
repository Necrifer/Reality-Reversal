// Aura-only pollution. These are initial balancing values, not GT radiation units.
// No GT environmental hazards, radiation emissions, Aura rewards or backfires.

//Do not even ask me what is going on in this script. This is too complicated!
(function () {
  var Aura = Java.loadClass('de.ellpeck.naturesaura.api.aura.chunk.IAuraChunk');
  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
  var CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');
  var RadiationManager = Java.loadClass('igentuman.nc.radiation.data.RadiationManager');
  var PREFIX = 'gt_pollution_v1|';
  var EMISSION_PER_WORK_TICK = 1;
  var MAX_POLLUTION_PER_CHUNK = 10000;
  var POLLUTION_DECAY_PER_SECOND = 1;
  var AURA_DRAIN_PER_POLLUTION_SECOND = 10;
  var CLEAN_RADIUS_CHUNKS = 8;
  var CLEAN_FRACTION_PER_SECOND = 0.10;
  var CLEAN_RECIPE = 'modpack:gt_port/minecraft/void_recontainment';
  var lastError = {};
  // KubeJS remaps Level methods; use its proven per-dimension tick-event pattern.
  // Only scheduling resets on reload. Pollution remains in saved level NBT.
  var levelTicks = {};
  function report(key, error, time) {
    if (lastError[key] === undefined || time - lastError[key] >= 1200) {
      console.error('[GT environment] ' + key + ': ' + error);
      lastError[key] = time;
    }
  }

  function clean(level, pos, cleanPollution) {
    var data = level.getPersistentData();
    var manager = RadiationManager.get(level);
    var radiation = manager.getWorldRadiation();
    var cx = Math.floor(Number(pos.getX()) / 16);
    var cz = Math.floor(Number(pos.getZ()) / 16);
    for (var dx = -CLEAN_RADIUS_CHUNKS; dx <= CLEAN_RADIUS_CHUNKS; dx++) {
      for (var dz = -CLEAN_RADIUS_CHUNKS; dz <= CLEAN_RADIUS_CHUNKS; dz++) {
        var x = cx + dx, z = cz + dz;
        if (cleanPollution) {
          var pollutionKey = PREFIX + x + '|' + z;
          if (data.contains(pollutionKey)) {
            var pollution = data.getCompound(pollutionKey);
            var amount = Number(pollution.getDouble('amount'));
            var remaining = Math.max(0, amount - Math.ceil(amount * CLEAN_FRACTION_PER_SECOND));
            if (remaining <= 0) data.remove(pollutionKey);
            else { pollution.putDouble('amount', remaining); data.put(pollutionKey, pollution); }
          }
        }
        // This getter excludes natural background, unlike getChunkRadiation.
        var stored = Number(radiation.chunkRadiation(x, z));
        if (stored > 0) {
          manager.setChunkRadiation(new BlockPos(x * 16 + 8, Number(pos.getY()), z * 16 + 8),
            Math.max(0, stored - Math.ceil(stored * CLEAN_FRACTION_PER_SECOND)));
        }
      }
    }
  }

  global.rrGTWorking = function (machine) {
    var meta = machine.self();
    var level = meta.getLevel();
    if (!level || meta.isRemote()) return true;
    var time = levelTicks[String(level.dimension)] || 0;
    try {
      var pos = meta.getPos();
      // RecipeLogic invokes onWorking only after successful per-tick energy I/O.
      // The cleanser consumes energy but must not create pollution of its own.
      if (String(meta.getDefinition().getId()) === 'gtceu:radiation_cleanser') {
        var activeRecipe = machine.getRecipeLogic().getLastRecipe();
        if (activeRecipe && String(activeRecipe.id) === 'modpack:corruption_prototype_recipes/radiation_cleanser/energy_cleanup') {
          var cleanserData = meta.getHolder().self().getPersistentData();
          var poweredTicks = Number(cleanserData.getInt('cleanup_work_ticks')) + 1;
          if (poweredTicks >= 20) { clean(level, pos, true); poweredTicks = 0; }
          cleanserData.putInt('cleanup_work_ticks', poweredTicks);
          meta.getHolder().self().setChanged();
        }
        return true;
      }
      var cx = Math.floor(Number(pos.getX()) / 16);
      var cz = Math.floor(Number(pos.getZ()) / 16);
      var key = PREFIX + cx + '|' + cz;
      var data = level.getPersistentData();
      var entry = data.contains(key) ? data.getCompound(key) : new CompoundTag();
      entry.putDouble('amount', Math.min(MAX_POLLUTION_PER_CHUNK,
        Number(entry.getDouble('amount')) + EMISSION_PER_WORK_TICK));
      entry.putInt('y', Number(pos.getY()));
      data.put(key, entry);
      // Count successful powered processing ticks, not wall time or afterWorking.
      // Partial processing cleans proportionately; waiting/unpowered machines do not.
      var logic = machine.getRecipeLogic();
      var recipe = logic.getLastRecipe();
      if (String(meta.getDefinition().getId()) === 'gtceu:corruption_containment' &&
          recipe && String(recipe.id) === CLEAN_RECIPE) {
        var holderData = meta.getHolder().self().getPersistentData();
        var ticks = Number(holderData.getInt('cleanup_work_ticks')) + 1;
        if (ticks >= 20) { clean(level, pos); ticks = 0; }
        holderData.putInt('cleanup_work_ticks', ticks);
        meta.getHolder().self().setChanged();
      }
      return true;
    } catch (error) {
      report('working', error, time);
      // Stop this recipe rather than silently permit production without pollution.
      return false;
    }
  };
  // Include existing GT multiblocks and the earlier sample. Preserve their
  // original callbacks and avoid stacking wrappers when server scripts reload.
  var GTRegistries = Java.loadClass('com.gregtechceu.gtceu.api.registry.GTRegistries');
  var MultiDefinition = Java.loadClass('com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition');
  var Predicate = Java.loadClass('java.util.function.Predicate');
  var HashMap = Java.loadClass('java.util.HashMap');
  if (!global.rrGTOriginalWorking) global.rrGTOriginalWorking = new HashMap();
  // Current startup definitions have no direct onWorking callbacks.
  var directlyWired = [];
  var definitions = GTRegistries.MACHINES.values().iterator();
  while (definitions.hasNext()) {
    var definition = definitions.next();
    if (!(definition instanceof MultiDefinition)) continue;
    if (directlyWired.indexOf(String(definition.getId()).replace('gtceu:', '')) >= 0) continue;
    (function (def) {
      if (!global.rrGTOriginalWorking.containsKey(def)) {
        global.rrGTOriginalWorking.put(def, def.getOnWorking());
      }
      var original = global.rrGTOriginalWorking.get(def);
      def.setOnWorking(new Predicate({test: function (machine) {
        if (!original.test(machine)) return false;
        return global.rrGTWorking(machine);
      }}));
    })(definition);
  }

  LevelEvents.tick(function (event) {
    var level = event.level;
    var dimension = String(level.dimension);
    var time = (levelTicks[dimension] || 0) + 1;
    levelTicks[dimension] = time;
    if (time % 20 !== 0) return;
    var data = level.getPersistentData();
    var it = data.getAllKeys().iterator();
    var remove = [];
    while (it.hasNext()) {
      var key = String(it.next());
      if (key.indexOf(PREFIX) !== 0) continue;
      var parts = key.substring(PREFIX.length).split('|');
      if (parts.length !== 2) continue;
      var entry = data.getCompound(key);
      var pos = new BlockPos(Number(parts[0]) * 16 + 8,
        Number(entry.getInt('y')), Number(parts[1]) * 16 + 8);
      // Never force chunks to load. Pollution and Aura drain pause while unloaded.
      if (!level.hasChunkAt(pos)) continue;
      try {
        var amount = Number(entry.getDouble('amount'));
        if (amount <= 0) { remove.push(key); continue; }
        var auraChunk = Aura.getAuraChunk(level, pos);
        if (auraChunk) auraChunk.drainAura(pos, Math.ceil(amount * AURA_DRAIN_PER_POLLUTION_SECOND));
        amount = Math.max(0, amount - POLLUTION_DECAY_PER_SECOND);
        if (amount === 0) remove.push(key);
        else entry.putDouble('amount', amount);
      } catch (error) {
        report('drain', error, time);
      }
    }
    remove.forEach(function (key) { data.remove(key); });
  });
})();

