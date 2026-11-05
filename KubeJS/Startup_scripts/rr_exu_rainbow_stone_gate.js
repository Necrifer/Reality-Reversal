// Excessive Utilities makes Rainbow Stone in any Resonator. Restore the Extra Utilities 2 rule:
// a Resonator only finishes Rainbow Stone while its owner's Rainbow Generator is running.
// The Resonator restarts from its saved Progress, and progress rises by 1 + speed upgrades per tick
// (craft at 200), so resetting Progress to 0 after every server tick means the craft never completes.
// See migration/exu-rainbow-stone-gate-20261103/. Full restart required after edits.
(function () {
  if (!Platform.isLoaded('excessive_utilities')) return;

  var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
  var ChunkLoad = Java.loadClass('net.neoforged.neoforge.event.level.ChunkEvent$Load');
  var BlockPlace = Java.loadClass('net.neoforged.neoforge.event.level.BlockEvent$EntityPlaceEvent');
  var ServerTickPost = Java.loadClass('net.neoforged.neoforge.event.tick.ServerTickEvent$Post');
  var ServerStopped = Java.loadClass('net.neoforged.neoforge.event.server.ServerStoppedEvent');
  var ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
  var ArrayList = Java.loadClass('java.util.ArrayList');
  var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
  var Resonator = Java.loadClass('dev.aaronhowser.mods.excessive_utilities.block_entity.ResonatorBlockEntity');
  var RainbowHandler = Java.loadClass('dev.aaronhowser.mods.excessive_utilities.handler.rainbow_generator.RainbowGeneratorHandler');
  var GeneratorType = Java.loadClass('dev.aaronhowser.mods.excessive_utilities.block_entity.base.generator.GeneratorType');

  var GATED_OUTPUT = 'excessive_utilities:rainbow_stone';
  // true: the Rainbow Generator itself must be producing FE (it needs somewhere to send its power,
  //       or its 1,000,000,000 FE buffer fills and it stops counting as running).
  // false: only the 16 other generator types must be running.
  var REQUIRE_RAINBOW_OUTPUT = true;
  var MAX_PER_TICK = 256;           // queued block-entity positions examined per server tick
  var queue = new ConcurrentLinkedQueue();
  var tracked = {};                 // 'dimension|packed pos' -> { level, pos }
  var gatedItem = null, reported = {};

  function report(key, message) {
    // Log each distinct problem once per game session.
    if (reported[key]) return;
    reported[key] = true;
    console.error('[RR Rainbow Stone Gate] ' + message);
  }

  // KubeJS may expose Level#dimension as a property; support both forms.
  function trackKey(level, pos) {
    var dim = level.dimension;
    var key = typeof dim === 'function' ? level.dimension() : dim;
    return (key.location ? key.location() : key) + '|' + pos.asLong();
  }

  // Items register after startup scripts run; resolve on first server use.
  function resolveItem() {
    if (gatedItem !== null) return gatedItem;
    var id = ResourceLocation.parse(GATED_OUTPUT);
    if (!BuiltInRegistries.ITEM.containsKey(id)) {
      report('missing', 'Missing ' + GATED_OUTPUT + '; Rainbow Stone gate disabled.');
      gatedItem = false;
    } else {
      gatedItem = BuiltInRegistries.ITEM.get(id);
    }
    return gatedItem;
  }

  // Off-thread safe: only copy positions here; block entities are read on the server tick.
  NativeEvents.onEvent(EventPriority.LOW, ChunkLoad, function (event) {
    try {
      var level = event.getLevel();
      if (level === null || level.isClientSide()) return;
      var positions = event.getChunk().getBlockEntitiesPos();
      if (positions.isEmpty()) return;
      queue.add({ level: level, positions: new ArrayList(positions), next: 0 });
    } catch (error) {
      report('load', 'Chunk scan failed: ' + error);
    }
  });

  NativeEvents.onEvent(EventPriority.LOW, BlockPlace, function (event) {
    try {
      var level = event.getLevel();
      if (level === null || level.isClientSide()) return;
      var positions = new ArrayList();
      positions.add(event.getPos().immutable());
      queue.add({ level: level, positions: positions, next: 0 });
    } catch (error) {
      report('place', 'Placement check failed: ' + error);
    }
  });

  // Tracked levels belong to one server; drop them when a singleplayer world closes.
  NativeEvents.onEvent(ServerStopped, function () {
    queue.clear();
    tracked = {};
  });

  function drainQueue() {
    var budget = MAX_PER_TICK;
    while (budget > 0 && !queue.isEmpty()) {
      var job = queue.peek();
      while (budget > 0 && job.next < job.positions.size()) {
        var pos = job.positions.get(job.next++);
        budget--;
        if (!job.level.isLoaded(pos)) continue;
        if (job.level.getBlockEntity(pos) instanceof Resonator) tracked[trackKey(job.level, pos)] = { level: job.level, pos: pos };
      }
      if (job.next >= job.positions.size()) queue.poll();
    }
  }

  // Per tick, per owner: is that player's Rainbow Generator (or full generator set) running?
  function ownerRunning(level, owner, cache) {
    var id = String(owner);
    if (cache[id] === undefined) {
      var network = RainbowHandler.Companion.get(level).getGeneratorNetwork(owner);
      cache[id] = REQUIRE_RAINBOW_OUTPUT
        ? network.getActiveGeneratorTypes().contains(GeneratorType.RAINBOW)
        : network.allTypesActive();
    }
    return cache[id];
  }

  function gate(entry, item, cache) {
    var level = entry.level, be = level.getBlockEntity(entry.pos);
    var recipe = be.getRecipe(level);
    if (recipe === null) return;
    var registries = level.registryAccess();
    if (recipe.getResultItem(registries).getItem() != item) return;
    var owner = be.getOwnerUuid();
    if (owner !== null && ownerRunning(level, owner, cache)) return;
    var tag = be.saveWithoutMetadata(registries);
    if (tag.getInt('Progress') <= 0) return;
    tag.putInt('Progress', 0);
    be.loadWithComponents(tag, registries);
    be.setChanged();
  }

  NativeEvents.onEvent(ServerTickPost, function () {
    var item = resolveItem();
    if (item === false) return;
    try {
      drainQueue();
    } catch (error) {
      report('queue', 'Resonator scan failed: ' + error);
    }
    var cache = {};
    Object.keys(tracked).forEach(function (key) {
      var entry = tracked[key];
      try {
        // Unloaded chunks drop out; they are re-queued when they load again.
        if (!entry.level.isLoaded(entry.pos) || !(entry.level.getBlockEntity(entry.pos) instanceof Resonator)) {
          delete tracked[key];
          return;
        }
        gate(entry, item, cache);
      } catch (error) {
        report('gate ' + key, 'Resonator at ' + key + ' not gated: ' + error);
      }
    });
  });
})();
