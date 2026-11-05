// Nuclear Radiation 1.0.18 API. Bq measures activity, not NuclearCraft RAD/dose.
// Initial balancing threshold. Processing time remains 1200 eligible ticks.
;(function () {
  var MIN_ACTIVITY_BQ = 5.0e9;
  var PROCESS_TICKS = 1200;
  var KEY = 'rr_sulfur_nr_v2_ticks';
  var Simulator = Java.loadClass('igentuman.nr.radiation.simulation.RadiationSimulator');
  var Attachments = Java.loadClass('igentuman.nr.radiation.storage.NRAttachments');
  var Registry = Java.loadClass('igentuman.nr.radiation.source.WorldSourceRegistry');
  var Config = Java.loadClass('igentuman.nr.config.RadiationConfig');
  var Ignore = Java.loadClass('igentuman.nr.radiation.simulation.entity.EntityIgnoreFilter');
  var ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos');
  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
  // Vanilla Backport 1.2 moved the class from entities.sulfurcube to entities.mob.monster.sulfur_cube.
  var Cube = Java.loadClass('com.blackgear.vanillabackport.common.level.entities.mob.monster.sulfur_cube.SulfurCube');
  var EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
  var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
  var Builtins = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var ticks = {}, errors = {};
  function report(level, error) {
    var dim = String(level.dimension), now = Number(level.getTime());
    if (errors[dim] === undefined || now - errors[dim] >= 1200) {
      errors[dim] = now; console.error('[RR Nuclear Radiation] ' + error);
    }
  }
  ServerEvents.loaded(function () {
    // Ignore radiation exposure and dose effects at their common filter.
    // DosePhaseKubeEvent in this installed release is not cancellable.
    var ArrayList = Java.loadClass('java.util.ArrayList');
    var list = new ArrayList(Config.IGNORED_ENTITIES.get());
    var id = 'minecraft:sulfur_cube';
    if (!list.contains(id)) { list.add(id); Config.IGNORED_ENTITIES.set(list); Ignore.invalidate(); }
  });
  LevelEvents.tick(function (event) {
    var level = event.level, dim = String(level.dimension);
    ticks[dim] = (ticks[dim] || 0) + 1;
    if (ticks[dim] % 20 !== 0) return;
    var entities = level.getEntities();
    for (var i = 0; i < entities.size(); i++) {
      var cube = entities.get(i);
      if (!(cube instanceof Cube) || !cube.isAlive() || cube.isBaby()) continue;
      try {
        var data = cube.getPersistentData(), held = cube.getContainedBlock();
        if (String(held.id) !== 'kubejs:chaos_infused' || Number(held.count) !== 1) { data.remove(KEY); continue; }
        var cp = new ChunkPos(cube.blockPosition());
        var chunk = level.getChunkSource().getChunkNow(cp.x, cp.z);
        if (chunk === null) continue;
        var amount = Number(chunk.getData(Attachments.CHUNK_RADIATION.get()).totalActivityBq());
        var vector = Simulator.get().getChunkVector(level, cp, Math.floor(Number(cube.y) / 16));
        if (vector !== null && !vector.isExpired(Number(level.getTime()))) amount = Math.max(amount, Number(vector.maxBq));
        if (!isFinite(amount) || amount < MIN_ACTIVITY_BQ) continue;
        var progress = Math.min(PROCESS_TICKS, Math.max(0, Number(data.getInt(KEY))) + 20);
        data.putInt(KEY, progress);
        if (progress < PROCESS_TICKS) continue;
        var output = Item.of('gtceu:chaos_infused_block');
        if (output.isEmpty()) throw new Error('Missing chaos-infused material block');
        var previous = held.copy(), spawned = false;
        cube.setItemSlot(EquipmentSlot.CHEST, Item.of('minecraft:air'));
        try { spawned = level.addFreshEntity(new ItemEntity(level, cube.x, cube.y + 0.5, cube.z, output)); }
        finally { if (!spawned) cube.setItemSlot(EquipmentSlot.CHEST, previous); }
        if (spawned) data.remove(KEY);
      } catch (error) { report(level, error); }
    }
  });
  // Paid cleanup removes deposited isotopes and residual clouds, not intact fuel.
  var LeftOverSource = Java.loadClass('igentuman.nr.radiation.source.LeftOverRadSource');
  var Sable = Java.loadClass('igentuman.nr.integration.sable.SableIntegration');
  var cleanupReports = {};
  global.rrServerHooks.rrMmcrRadiationCleanup = function (tile) {
    var level = tile.getLevel(), pos = tile.getBlockPos();
    var center = Sable.projectChunkPos(level, pos), cx = Number(center.x), cz = Number(center.z);
    var registry = Registry.get(level), now = Number(level.getTime());
    var chunkBefore = 0, chunkAfter = 0, loaded = 0, changed = 0;
    var residualBefore = 0, residualAfter = 0, residuals = 0, liveSources = 0;
    var floor = Math.max(Number(Config.ACTIVITY_FLOOR_BQ.get()), Number(Config.WORLD_SOURCE_MIN_BQ.get()));
    for (var dx = -8; dx <= 8; dx++) for (var dz = -8; dz <= 8; dz++) {
      var cp = new ChunkPos(cx + dx, cz + dz), chunk = level.getChunkSource().getChunkNow(cp.x, cp.z);
      if (chunk === null) continue;
      loaded++;
      var data = chunk.getData(Attachments.CHUNK_RADIATION.get());
      // Do not copy profiles or dirty save data for the many already-clean chunks.
      if (!data.isEmpty()) {
        var air = data.air().copy(now), water = data.water().copy(now), soil = data.soil().copy(now);
        chunkBefore += Number(data.totalActivityBq());
        // reduceAtoms divides by its argument: 1/0.9 leaves 90% of each isotope.
        air.reduceAtoms(1 / 0.9); water.reduceAtoms(1 / 0.9); soil.reduceAtoms(1 / 0.9);
        chunkAfter += Number(air.totalActivityBq()) + Number(water.totalActivityBq()) + Number(soil.totalActivityBq());
        // ChunkPos and BlockPos are both coercible in KubeJS; select the chunk overload explicitly.
        registry['setChunkRadiation(net.minecraft.world.level.ChunkPos,igentuman.nr.api.RadiationProfile,igentuman.nr.api.RadiationProfile,igentuman.nr.api.RadiationProfile)'](cp, air, water, soil);
        changed++;
      }
      if (typeof global.rrServerHooks.rrCleanAuraPollution === 'function') global.rrServerHooks.rrCleanAuraPollution(level, cp.x, cp.z);
    }
    // Picking up/despawning dropped fuel creates LeftOverRadSource objects.
    // These irradiate entities and redeposit contamination separately from chunk data.
    // all() returns a snapshot, so registry removal during this pass is safe.
    var sources = registry.all().iterator();
    while (sources.hasNext()) {
      var source = sources.next();
      if (!source.isActive()) continue;
      var sourceChunk = Sable.projectChunkPos(level, source.getPosition());
      if (Math.abs(Number(sourceChunk.x) - cx) > 8 || Math.abs(Number(sourceChunk.z) - cz) > 8) continue;
      if (level.getChunkSource().getChunkNow(sourceChunk.x, sourceChunk.z) === null) continue;
      if (!(source instanceof LeftOverSource)) { liveSources++; continue; }
      residuals++;
      residualBefore += Number(source.activityBq());
      source.getProfile().reduceAtoms(1 / 0.9);
      var remaining = Number(source.activityBq());
      // Match the mod's own world-source floor; refresh cached expiry after reduction.
      if (remaining <= 0 || remaining < floor) {
        source.markDead();
        registry.remove(source.getId());
      } else {
        source.recomputeExpiry();
        residualAfter += remaining;
      }
    }
    // Existing Nuclear Radiation level-save hooks persist the updated residual profiles.
    // Bound diagnostics to one line/minute/controller, even with a ten-tick recipe.
    var key = String(level.dimension) + '|' + pos.getX() + '|' + pos.getY() + '|' + pos.getZ();
    var report = cleanupReports[key];
    if (!report || now < report.tick) report = {tick: now - 1200, cycles: 0, chunks: 0, residuals: 0, chunkRemoved: 0, residualRemoved: 0};
    report.cycles++; report.chunks += changed; report.residuals += residuals;
    report.chunkRemoved += Math.max(0, chunkBefore - chunkAfter);
    report.residualRemoved += Math.max(0, residualBefore - residualAfter);
    if (now - report.tick >= 1200) {
      console.info('[RR Nuclear Radiation cleanup] ' + key + '; cycles=' + report.cycles +
        ', loaded chunks=' + loaded + ', chunk cleanup passes=' + report.chunks +
        ', deposited activity removed=' + report.chunkRemoved.toExponential(3) + ' Bq' +
        ', residual cleanup passes=' + report.residuals +
        ', residual activity removed=' + report.residualRemoved.toExponential(3) + ' Bq' +
        ', intact sources still emitting=' + liveSources);
      report = {tick: now, cycles: 0, chunks: 0, residuals: 0, chunkRemoved: 0, residualRemoved: 0};
    }
    cleanupReports[key] = report;
  };
})();
