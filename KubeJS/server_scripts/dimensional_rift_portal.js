// Dimensional Rift Constructor -> one destination per access item.
;(function () {
    var PORTAL = 'kubejs:dimensional_rift_portal';
    var CONTROLLER = 'mmcr:dim_tear_controller';
    // Access item -> destination. Arrival preserves the player's exact X/Z; no platform is built.
    // slowFallTicks > 0 grants Slow Falling on arrival, which cancels fall damage until landing.
    var ROUTES = {
        'kubejs:containment_failure': { dimension: 'sunken_city:template', name: 'Sunken City', arrivalY: 200, slowFallTicks: 0 },
        'kubejs:sol_astral_ingot': { dimension: 'divinerpg:eden', name: 'Eden', arrivalY: 200, slowFallTicks: 2400 },
        'gaiadimension:glint_and_gold': { dimension: 'gaiadimension:gaia_dimension', name: 'Gaia Dimension', arrivalY: 200, slowFallTicks: 2400 }
    };
    var COOLDOWN_TICKS = 20;
    var COOLDOWN_KEY = 'rr_dimensional_rift_cooldown';

    var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
    var MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance');
    var MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects');
    var ControllerBlock = Java.loadClass('cn.howxu.mmcr.internal.block.MachineControllerBlock');
    function formed(machine) { return machine.currentRuntimeSnapshot().structure().formed(); }
    function facing(machine) { return machine.getBlockState().getValue(ControllerBlock.FACING); }
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

    // Portal cell: 3 blocks behind the controller's facing, 5 up. BlockPos.relative/above are
    // overloaded with Vec3i bridges in 1.21 and Rhino rejects them as ambiguous; use plain ints.
    function intersection(machine) {
        var origin = machine.getBlockPos(), back = facing(machine).getOpposite();
        return new BlockPos(origin.getX() + back.getX() * 3, origin.getY() + 5, origin.getZ() + back.getZ() * 3);
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
        var machine = level.getBlockEntity(pos);
        if (machine === null || machine.isRemoved() || !formed(machine)) return null;
        if (String(machine.machineId()) !== 'realityreversal:dim_tear'
                || !samePos(intersection(machine), block.getPos())) return null;
        return { machine: machine };
    }

    global.rrServerHooks.rrDimensionalRiftMachineTick = function (machine) {
        try {
            if (machine.getLevel().isClientSide() || machine.isRemoved()) return;
            var level = machine.getLevel();
            var pos = intersection(machine);
            if (!level.hasChunkAt(pos)) return;
            var block = blockAt(level, pos);
            var existing = String(block.id);
            if (!formed(machine)) {
                if (existing === PORTAL) {
                    var stale = block.getEntity();
                    if (stale !== null && isOwnedBy(stale, machine.getBlockPos())) block.set('minecraft:air');
                }
                return;
            }
            // Never overwrite a player's block or liquid. The pattern reserves this cell.
            if (existing !== PORTAL && existing !== 'minecraft:air') return;
            if (existing !== PORTAL) block.set(PORTAL);
            var entity = block.getEntity();
            if (entity === null) throw new Error('Rift block entity was not created at ' + pos);
            if (!entity.data.getBoolean('rr_rift_owned')) writeOwner(entity, machine.getBlockPos());
        } catch (error) {
            report('controller update', error);
        }
    };

    global.rrServerHooks.rrDimensionalRiftPortalTick = function (entity) {
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

    function asKey(stack) {
        if (stack.isEmpty()) return null;
        var route = ROUTES[String(stack.id)];
        return route ? { stack: stack, route: route } : null;
    }

    function heldKey(event) {
        // The interacting hand wins; then either hand, without double-firing or requiring an empty other hand.
        return asKey(event.getItem()) || asKey(event.player.getMainHandItem()) || asKey(event.player.getOffhandItem());
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
            var route = key.route, DESTINATION = route.dimension, ARRIVAL_Y = route.arrivalY;
            if (String(source.dimension) === DESTINATION) {
                player.tell('You are already in ' + route.name + '.');
                return;
            }
            if (player.isPassenger() || player.isVehicle()) {
                player.tell('Dismount and release passengers before entering the rift.');
                return;
            }
            var entity = event.block.getEntity();
            var owner = entity === null ? null : findOwner(entity);
            // Use the controller formation state maintained by Modular Machinery.
            if (owner === null || owner.unloaded || !formed(owner.machine)) {
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
            key.stack.shrink(1);
            player.inventory.setChanged();
            player.setMotion(0, 0, 0);
            player.resetFallDistance();
            if (route.slowFallTicks > 0) {
                // Unique 6-arg constructor: (effect, duration, amplifier, ambient, particles, icon).
                player.addEffect(new MobEffectInstance(MobEffects.SLOW_FALLING, route.slowFallTicks, 0, false, false, true));
            }
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
