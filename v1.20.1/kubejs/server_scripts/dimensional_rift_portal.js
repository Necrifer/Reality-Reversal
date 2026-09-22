// Dimensional Rift Constructor -> Sunken City. No per-player/global tick scan.
;(function () {
    var PORTAL = 'kubejs:dimensional_rift_portal';
    var CONTROLLER = 'gtceu:dim_tear';
    var ACCESS_ITEM = 'kubejs:containment_failure';
    var DESTINATION = 'sunken_city:template';
    var ARRIVAL_Y = 200; // Preserve the player's exact X/Z. No platform is built.
    var COOLDOWN_TICKS = 20;
    var COOLDOWN_KEY = 'rr_dimensional_rift_cooldown';

    var MetaMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.MetaMachine');
    var RelativeDirection = Java.loadClass('com.gregtechceu.gtceu.api.pattern.util.RelativeDirection');
    var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
    var RegistryInfo = Java.loadClass('dev.latvian.mods.kubejs.registry.RegistryInfo');
    var reported = {};

    function report(stage, error) {
        // Stop repeated tick errors flooding latest.log. A script reload resets this.
        if (reported[stage]) return;
        reported[stage] = true;
        console.error('[Dimensional Rift] ' + stage + ': ' + error);
    }

    function samePos(a, b) {
        return a.getX() === b.getX() && a.getY() === b.getY() && a.getZ() === b.getZ();
    }

    function intersection(machine) {
        // Current gt_multiblocks.js: S=(3,0,0), p=(3,5,3), in (column,row,aisle).
        // RIGHT/UP/BACK -> up=5, left=0, forward=-3 (three blocks behind S).
        // Keep this relative offset aligned if the S or p pattern cell is moved.
        return RelativeDirection.offsetPos(machine.getPos(), machine.getFrontFacing(),
            machine.getUpwardsFacing(), machine.isFlipped(), 5, 0, -3);
    }

    function blockAt(level, pos) {
        // Unique 3-int overload, avoiding BlockPos/BlockEntity wrapper ambiguity.
        return level.getBlock(pos.getX(), pos.getY(), pos.getZ());
    }

    function isOwnedBy(entity, controllerPos) {
        var data = entity.data;
        return data.getBoolean('rr_rift_owned')
            && data.getInt('rr_controller_x') === controllerPos.getX()
            && data.getInt('rr_controller_y') === controllerPos.getY()
            && data.getInt('rr_controller_z') === controllerPos.getZ();
    }

    function writeOwner(entity, pos) {
        entity.data.putBoolean('rr_rift_owned', true);
        entity.data.putInt('rr_controller_x', pos.getX());
        entity.data.putInt('rr_controller_y', pos.getY());
        entity.data.putInt('rr_controller_z', pos.getZ());
        entity.save(); // KubeJS BlockEntityJS persists its public data compound.
    }

    // Returns null for a broken/invalid link, or {unloaded:true} without loading it.
    function findOwner(entity) {
        var data = entity.data;
        if (!data.getBoolean('rr_rift_owned')) return null;
        var block = entity.getBlock();
        var level = block.getLevel();
        var pos = new BlockPos(data.getInt('rr_controller_x'), data.getInt('rr_controller_y'), data.getInt('rr_controller_z'));
        if (!level.hasChunkAt(pos)) return { unloaded: true };
        if (String(blockAt(level, pos).id) !== CONTROLLER) return null;
        var machine = MetaMachine.getMachine(level, pos);
        if (machine === null || machine.isInValid() || !machine.isFormed()
                || machine.getMultiblockState().hasError()) return null;
        if (String(machine.getDefinition().getId()) !== CONTROLLER
                || !samePos(intersection(machine), block.getPos())) return null;
        return { machine: machine };
    }

    global.rrDimensionalRiftMachineTick = function (machine) {
        try {
            if (machine.isRemote() || machine.isInValid()) return;
            var level = machine.getLevel();
            var pos = intersection(machine);
            if (!level.hasChunkAt(pos)) return;
            var block = blockAt(level, pos);
            var existing = String(block.id);
            if (!machine.isFormed() || machine.getMultiblockState().hasError()) {
                if (existing === PORTAL) {
                    var stale = block.getEntity();
                    if (stale !== null && isOwnedBy(stale, machine.getPos())) block.set('minecraft:air');
                }
                return;
            }
            // Never overwrite a player's block or liquid. The pattern reserves this cell.
            if (existing !== PORTAL && existing !== 'minecraft:air') return;
            if (existing !== PORTAL) block.set(PORTAL);
            var entity = block.getEntity();
            if (entity === null) throw new Error('Rift block entity was not created at ' + pos);
            if (!entity.data.getBoolean('rr_rift_owned')) writeOwner(entity, machine.getPos());
        } catch (error) {
            report('controller update', error);
        }
    };

    global.rrDimensionalRiftPortalTick = function (entity) {
        try {
            // Always use a fresh container: BlockEntityJS.getBlock() caches its block state.
            var savedBlock = entity.getBlock();
            var block = blockAt(savedBlock.getLevel(), savedBlock.getPos());
            if (String(block.id) !== PORTAL) return;
            var owner = findOwner(entity);
            if (owner === null) block.set('minecraft:air');
            // Leave saved portal data alone while its controller chunk is unloaded.
            // Entry is denied until the controller is loaded and formed again.
        } catch (error) {
            report('portal cleanup', error);
        }
    };

    function heldKey(event) {
        var stack = event.getItem();
        if (String(stack.id) === ACCESS_ITEM && !stack.isEmpty()) return stack;
        // Support either hand without double-firing or requiring an empty other hand.
        stack = event.player.getMainHandItem();
        if (String(stack.id) === ACCESS_ITEM && !stack.isEmpty()) return stack;
        stack = event.player.getOffhandItem();
        return String(stack.id) === ACCESS_ITEM && !stack.isEmpty() ? stack : null;
    }

    // Missing block IDs become null/unfiltered event selectors in KubeJS 6.
    // A server-script reload cannot register the startup block or its model.
    if (!RegistryInfo.BLOCK.hasValue(PORTAL)) {
        console.warn('[Dimensional Rift] Portal block is not registered. Fully restart Minecraft to load the startup block/model. Rift right-click handler disabled.');
        return;
    }

    BlockEvents.rightClicked(PORTAL, function (event) {
        // Keep this outside try/finally: unrelated blocks must never be cancelled.
        if (String(event.block.id) !== PORTAL) return;
        var player = event.player;
        try {
            var source = event.level;
            if (source.isClientSide() || player.isFake() || player.isSpectator()) return;
            // KubeJS LevelMixin exposes Minecraft's game time as getTime().
            var now = Number(source.getTime());
            var cooldown = Number(player.persistentData.getLong(COOLDOWN_KEY));
            if (cooldown > now && cooldown - now <= COOLDOWN_TICKS) return;
            var key = heldKey(event);
            if (key === null) {
                player.tell('Right Click the rift with a suitable item to visit a Dimension.');
                return;
            }
            if (String(source.dimension) === DESTINATION) {
                player.tell('You are already in Sunken City.');
                return;
            }
            if (player.isPassenger() || player.isVehicle()) {
                player.tell('Dismount and release passengers before entering the rift.');
                return;
            }
            var entity = event.block.getEntity();
            var owner = entity === null ? null : findOwner(entity);
            // Recheck the actual pattern on entry, not only its cached formed flag.
            if (owner === null || owner.unloaded || !owner.machine.checkPatternWithTryLock()) {
                player.tell('The Dimensional Rift Constructor must be loaded and fully formed.');
                return;
            }
            var destination = event.server.getLevel(DESTINATION);
            if (destination === null) throw new Error('Destination dimension is unavailable: ' + DESTINATION);
            if (ARRIVAL_Y < destination.getMinBuildHeight()
                    || ARRIVAL_Y + Number(player.getBbHeight()) >= destination.getMaxBuildHeight()) {
                throw new Error('Arrival Y is outside the destination build height: ' + ARRIVAL_Y);
            }
            var x = Number(player.x), z = Number(player.z);
            // Do not clear blocks or build platforms. Refuse an obstructed arrival.
            // Two-argument noCollision avoids the ambiguous Entity/AABB overloads.
            var arrivalBox = player.getBoundingBox().move(0, ARRIVAL_Y - Number(player.y), 0);
            if (!destination.noCollision(player, arrivalBox)) {
                player.tell('The arrival space at Y=' + ARRIVAL_Y + ' is obstructed. Your item was not consumed.');
                return;
            }
            player.persistentData.putLong(COOLDOWN_KEY, now + COOLDOWN_TICKS);
            player.teleportTo(DESTINATION, x, ARRIVAL_Y, z, Number(player.yaw), Number(player.pitch));
            if (String(player.level.dimension) !== DESTINATION) throw new Error('Dimension transfer did not complete');
            // Consume only after a successful transfer. This applies in Creative too.
            key.shrink(1);
            player.inventory.setChanged();
            player.setMotion(0, 0, 0);
            player.resetFallDistance();
        } catch (error) {
            report('entry', error);
            player.tell('The rift could not complete the transfer. See the KubeJS server log.');
        } finally {
            // KubeJS 6 cancel() throws EventExit and stops execution immediately.
            // Cancel after our work, outside the error handler, including early returns.
            event.cancel();
        }
    });
})();
