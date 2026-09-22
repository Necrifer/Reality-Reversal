// Keep these entities in the biome's MONSTER list: water_creature bypasses their cap.
// This changes spawning and breathing, not their original land-based movement/AI.
;(function () {
    const DIMENSION = 'sunken_city:template';
    const IDS = [
        'witherstormmod:sickened_creeper',
        'witherstormmod:sickened_zombie',
        'witherstormmod:sickened_skeleton',
        'witherstormmod:sickened_spider'
    ];
    const Placement = Java.loadClass('net.minecraft.world.entity.SpawnPlacements$Type');
    const SpawnPlacements = Java.loadClass('net.minecraft.world.entity.SpawnPlacements');
    const RegistryInfo = Java.loadClass('dev.latvian.mods.kubejs.registry.RegistryInfo');
    const SpawnType = Java.loadClass('net.minecraft.world.entity.MobSpawnType');
    const NaturalSpawner = Java.loadClass('net.minecraft.world.level.NaturalSpawner');
    const Monster = Java.loadClass('net.minecraft.world.entity.monster.Monster');
    const Difficulty = Java.loadClass('net.minecraft.world.Difficulty');
    const Fluids = Java.loadClass('net.minecraft.world.level.material.Fluids');
    const Result = Java.loadClass('net.minecraftforge.eventbus.api.Event$Result');
    const Effect = Java.loadClass('net.minecraft.world.effect.MobEffectInstance');
    const Effects = Java.loadClass('net.minecraft.world.effect.MobEffects');
    let placementsReady = false;
    let restoreOriginalPlacements = null;
    let runtimeFailureLogged = false;

    function disableUnderwaterSpawns(stage, error) {
        placementsReady = false;
        if (runtimeFailureLogged) return;
        runtimeFailureLogged = true;
        var message = '[Sunken City] Underwater spawning disabled after ' + stage + ': ' + error;
        try {
            if (restoreOriginalPlacements !== null) restoreOriginalPlacements();
            message += '. Original spawn placements restored; restart after correcting the script.';
        } catch (restoreError) {
            message += '. Placement restoration also failed: ' + restoreError;
        }
        // One report per launch: never let a script callback crash world ticking or
        // emit an error on every natural-spawn attempt.
        console.error(message);
    }

    function isSubmergedHere(level, pos) {
        // KubeJS exposes dimension as the final ID property, not dimension().
        return String(level.getLevel().dimension) === DIMENSION
            // FluidState.is(TagKey)/is(Fluid) is ambiguous with KubeJS wrappers.
            // Fluid.isSame has one signature; vanilla water treats both source
            // and flowing water as the same fluid. This dimension uses vanilla water.
            && level.getFluidState(pos).getType().isSame(Fluids.WATER)
            && level.getFluidState(pos.above()).getType().isSame(Fluids.WATER);
    }

    function isTargetSpawn(event) {
        if (!placementsReady || event.getSpawnType() !== SpawnType.NATURAL) return false;
        const mob = event.getEntity();
        // KubeJS Entity.type is already the registry ID string.
        return IDS.indexOf(String(mob.type)) !== -1
            && isSubmergedHere(event.getLevel(), mob.blockPosition());
    }

    function spawnPredicate(type, level, reason, pos, random) {
        if (!placementsReady) return false;
        try {
            if (reason === SpawnType.NATURAL && isSubmergedHere(level, pos)) {
                return level.getDifficulty() !== Difficulty.PEACEFUL
                    && NaturalSpawner.isSpawnPositionOk(Placement.IN_WATER, level, pos, type)
                    && Monster.isDarkEnoughToSpawn(level, pos, random);
            }
            return NaturalSpawner.isSpawnPositionOk(Placement.ON_GROUND, level, pos, type)
                && Monster.checkMonsterSpawnRules(type, level, reason, pos, random);
        } catch (error) {
            disableUnderwaterSpawns('placement check', error);
            return false;
        }
    }

    // Do NOT use EntityJSEvents.spawnPlacement here. Mod buses run in mod order:
    // EntityJS can run first even at LOWEST priority. Pre-creating the entries
    // crashes Wither Storm 4.2.1's later OR registration with non-null geometry.
    // Queue once after mod loading, on the main thread, before any world exists.
    ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent', event => {
        event['enqueueWork(java.lang.Runnable)'](() => {
            var entries = null;
            var originals = [];
            var mutationStarted = false;
            try {
                // Version-pinned 1.20.1 SRG field. Only read its HashMap reference;
                // never replace the field/change finality or use FML reflection helpers.
                // Forge exposes register(), but provides no public replacement API
                // after SpawnPlacementRegisterEvent has completed.
                // Use var inside this deferred try block: this Rhino version can
                // retain const declarations across repeated Java callback entry.
                var placementMapField = SpawnPlacements.__javaObject__.getDeclaredField('f_21750_');
                placementMapField.setAccessible(true);
                entries = placementMapField.get(null);
                // Preflight all four before touching anything. Private Data objects
                // are kept opaque: invoke only public HashMap/SpawnPlacements methods.
                IDS.forEach(id => {
                    var type = RegistryInfo.ENTITY_TYPE.getValue(id);
                    if (type === null || !entries.containsKey(type)
                        || SpawnPlacements.getPlacementType(type) !== Placement.ON_GROUND) {
                        throw new Error('Unexpected or missing original spawn placement: ' + id);
                    }
                    originals.push({type: type, data: entries.get(type), heightmap: SpawnPlacements.getHeightmapType(type)});
                });
                restoreOriginalPlacements = () => {
                    originals.forEach(original => entries.put(original.type, original.data));
                };
                mutationStarted = true;
                originals.forEach(original => {
                    // register() rejects duplicates; remove only this verified entry.
                    entries.remove(original.type);
                    SpawnPlacements.register(original.type, Placement.NO_RESTRICTIONS, original.heightmap, spawnPredicate);
                });
                placementsReady = true;
                console.info('[Sunken City] Installed 4 underwater Sickened spawn placements after mod loading.');
            } catch (error) {
                if (mutationStarted) {
                    originals.forEach(original => entries.put(original.type, original.data));
                }
                // An upstream layout/API change must leave normal spawning intact,
                // not break game launch or enable only half of the underwater checks.
                placementsReady = false;
                console.error('[Sunken City] Underwater spawning disabled; original placements retained: ' + error);
            }
        });
    });

    // Vanilla Mob.checkSpawnObstruction rejects liquid even after placement succeeds.
    // Use PositionCheck, NOT KubeJS EntityEvents.checkSpawn (Forge FinalizeSpawn).
    ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobSpawnEvent$PositionCheck', event => {
        try {
            if (event.getResult() === Result.DENY || !isTargetSpawn(event)) return;
            var mob = event.getEntity();
            var level = event.getLevel();
            // noCollision also has an AABB overload with a KubeJS type wrapper.
            // Retain collisions and prior denials; normal distance/caps still apply.
            event.setResult(level.noCollision(mob, mob.getBoundingBox())
                && level.isUnobstructed(mob) ? Result.ALLOW : Result.DENY);
        } catch (error) {
            disableUnderwaterSpawns('obstruction check', error);
            event.setResult(Result.DENY);
        }
    });

    ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn', event => {
        try {
            if (event.isSpawnCancelled() || !isTargetSpawn(event)) return;
            // -1 is infinite in 1.20.1. Hide particles/icon; no per-tick script.
            // The effect is saved only on natural underwater spawns created here.
            event.getEntity().addEffect(new Effect(Effects.WATER_BREATHING, -1, 0, false, false));
        } catch (error) {
            disableUnderwaterSpawns('spawn finalization', error);
            event.setSpawnCancelled(true);
        }
    });
})();
