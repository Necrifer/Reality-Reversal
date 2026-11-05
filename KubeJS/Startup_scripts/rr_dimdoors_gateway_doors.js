// DimDoors 6.2.2 gateways generate a dimensional_portal that any mob, item or arrow turns into a
// detached rift (DimensionalPortalBlock.onCollision ignores the teleport result). Replace each loaded
// portal with a closed Iron Dimensional Door, which only opens for players, as in older DimDoors.
// The rift link moves with the block: DimDoors' LevelChunkMixin copies RiftBlockEntity data into
// the new door (RiftProvider.attemptTransfer), the same path as placing a door on a rift.
// See migration/dimdoors-rift-conversion-20261030/REPORT.md. Full restart required after edits.
(function () {
  var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
  var ChunkLoad = Java.loadClass('net.neoforged.neoforge.event.level.ChunkEvent$Load');
  var ServerTickPost = Java.loadClass('net.neoforged.neoforge.event.tick.ServerTickEvent$Post');
  var ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
  var ArrayList = Java.loadClass('java.util.ArrayList');
  var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
  var DoorBlock = Java.loadClass('net.minecraft.world.level.block.DoorBlock');
  var DoubleBlockHalf = Java.loadClass('net.minecraft.world.level.block.state.properties.DoubleBlockHalf');
  var FACING = Java.loadClass('net.minecraft.world.level.block.HorizontalDirectionalBlock').FACING;
  var WATERLOGGED = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties').WATERLOGGED;

  var PORTAL_ID = 'dimdoors:dimensional_portal';
  var DOOR_ID = 'dimdoors:block_ag_dim_minecraft_iron_door';
  var MAX_PER_TICK = 256;           // block-entity positions examined per server tick
  var queue = new ConcurrentLinkedQueue();
  var blocks = null, reported = {};

  function report(key, message) {
    // Log each distinct problem once per game session.
    if (reported[key]) return;
    reported[key] = true;
    console.error('[RR DimDoors Gateways] ' + message);
  }

  // KubeJS may expose Level#dimension as a property; support both forms.
  function where(level, pos) {
    var dim = level.dimension;
    var key = typeof dim === 'function' ? level.dimension() : dim;
    return pos + ' in ' + (key.location ? key.location() : key);
  }

  // Blocks register after startup scripts run; resolve them on first server use.
  function resolveBlocks() {
    if (blocks !== null) return blocks;
    var portalId = ResourceLocation.parse(PORTAL_ID);
    var doorId = ResourceLocation.parse(DOOR_ID);
    // A missing ID would resolve to air; disable rather than placing air.
    // Rhino hides Object#equals on Block, so check the registry keys instead.
    if (!BuiltInRegistries.BLOCK.containsKey(portalId) || !BuiltInRegistries.BLOCK.containsKey(doorId)) {
      report('missing', 'Missing ' + PORTAL_ID + ' or ' + DOOR_ID + '; gateway replacement disabled.');
      blocks = false;
    } else {
      blocks = { portal: BuiltInRegistries.BLOCK.get(portalId), door: BuiltInRegistries.BLOCK.get(doorId) };
    }
    return blocks;
  }

  // Off-thread safe: only copy the chunk's block-entity positions; all reads and writes happen on tick.
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

  function replace(level, pos, b) {
    if (!level.isLoaded(pos)) return;
    var portal = level.getBlockState(pos);
    // BlockState.is(Block) is ambiguous in Rhino (is(HolderSet) also matches), so compare the block directly.
    if (portal.getBlock() != b.portal) return;
    if (!portal.hasProperty(FACING)) return;
    var abovePos = new BlockPos(pos.getX(), pos.getY() + 1, pos.getZ());
    var above = level.getBlockState(abovePos);
    // Never overwrite a block or fluid above the gateway.
    if (!above.isAir() && !(above.canBeReplaced() && above.getFluidState().isEmpty())) {
      report('blocked ' + pos, 'Portal at ' + where(level, pos) + ' kept: no room for the upper door half.');
      return;
    }
    // Default door state is closed, left hinge, unpowered, lower half.
    var lower = b.door.defaultBlockState().setValue(FACING, portal.getValue(FACING));
    if (portal.hasProperty(WATERLOGGED) && lower.hasProperty(WATERLOGGED)
        && portal.getValue(WATERLOGGED) != lower.getValue(WATERLOGGED)) {
      lower = lower.cycle(WATERLOGGED);
    }
    // An unsupported lower half would collapse straight into a detached rift.
    if (!lower.canSurvive(level, pos)) {
      report('support ' + pos, 'Portal at ' + where(level, pos) + ' kept: door has no support below.');
      return;
    }
    var upper = lower.setValue(DoorBlock.HALF, DoubleBlockHalf.UPPER);
    if (upper.hasProperty(WATERLOGGED) && upper.getValue(WATERLOGGED)) upper = upper.cycle(WATERLOGGED);
    level.setBlock(pos, lower, 3);
    level.setBlock(abovePos, upper, 3);
    console.info('[RR DimDoors Gateways] Replaced portal with Iron Dimensional Door at ' + where(level, pos));
  }

  NativeEvents.onEvent(EventPriority.NORMAL, ServerTickPost, function () {
    if (blocks === false || queue.isEmpty()) return;
    // An uncaught script error here crashes the server tick loop; disable instead.
    try {
      var b = resolveBlocks();
      if (b === false) { queue.clear(); return; }
      var budget = MAX_PER_TICK;
      while (budget > 0 && !queue.isEmpty()) {
        var entry = queue.peek();
        // Index walk: ArrayList.remove(int/Object) is ambiguous to Rhino.
        while (budget > 0 && entry.next < entry.positions.size()) {
          budget--;
          var pos = entry.positions.get(entry.next++);
          try {
            replace(entry.level, pos, b);
          } catch (error) {
            report('replace ' + pos, 'Replacing portal at ' + pos + ' failed: ' + error);
          }
        }
        if (entry.next >= entry.positions.size()) queue.poll();
      }
    } catch (error) {
      report('tick', 'Gateway replacement disabled after error: ' + error);
      blocks = false;
      queue.clear();
    }
  });
})();
