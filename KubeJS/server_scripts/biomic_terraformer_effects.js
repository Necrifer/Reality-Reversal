// Biomic Terraformer effects, called from the MMCR machine in startup_scripts/mmcr multis/biomic_terraformer.js.
//  terraform: a Biome Marker (excessive_utilities:biome component) turns the 3x3 chunks around the controller
//             into the marker's biome (full height), then resends the biomes to players.
//  aurora:    a Shimmersteel Ingot starts an Auroral aurora (night only, aurora_dimensions only).
// Checks run in beforeStart, before MMCR consumes inputs, so a refused run keeps its items.
;(function () {
    var RECIPE_TERRAFORM = 'mmcr:biomic_terraformer/terraform'
    var RECIPE_AURORA = 'mmcr:biomic_terraformer/aurora'
    var KEY_BIOME = 'rr_terraformer_biome'
    var KEY_DONE = 'rr_terraformer_done' // MMCR may retry beforeFinish; apply effects once.
    var MARKER = 'excessive_utilities:biome_marker'
    var RADIUS = 1 // chunks around the controller chunk: 1 = 3x3

    var RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
    var Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    var ArrayList = Java.loadClass('java.util.ArrayList')
    var AuroraEvents = Java.loadClass('com.breakinblocks.auroral.events.AuroraEventHandler')
    var AuroraHelper = Java.loadClass('com.breakinblocks.auroral.util.AuroraHelper')
    var BiomeHelper = Java.loadClass('com.breakinblocks.auroral.util.BiomeHelper')
    var BIOME_COMPONENT = BuiltInRegistries.DATA_COMPONENT_TYPE.get(RL.parse('excessive_utilities:biome'))

    function log(message) { console.info('[biomic_terraformer] ' + message) }

    // Distinct biome IDs recorded on the markers currently in the input hatches.
    function markerBiomes(ioView) {
        var found = []
        ioView.itemInputs().forEach(function (entry) {
            var stack = entry.resource()
            if (String(BuiltInRegistries.ITEM.getKey(stack.getItem())) !== MARKER) return
            var holder = BIOME_COMPONENT == null ? null : stack.get(BIOME_COMPONENT)
            if (holder == null) return
            var id = String(holder.getRegisteredName())
            if (found.indexOf(id) < 0) found.push(id)
        })
        return found
    }

    function auroraBlocker(level) {
        if (!BiomeHelper.dimensionSupportsAurora(level)) return 'dimension is not in aurora_dimensions'
        if (!AuroraHelper.isNightTime(level)) return 'not night'
        if (AuroraHelper.isAuroraActive(level)) return 'an aurora is already active'
        return null
    }

    function fillBiome(level, centre, biomeId) {
        var biomeKey = ResourceKey.create(Registries.BIOME, RL.parse(biomeId))
        // getHolder is overloaded (ResourceLocation / ResourceKey) and Rhino can't pick one; getHolderOrThrow isn't.
        var holder
        try { holder = level.registryAccess().registryOrThrow(Registries.BIOME).getHolderOrThrow(biomeKey) }
        catch (e) { log('Unknown biome ' + biomeId); return false }
        var source = level.getChunkSource()
        var sampler = source.randomState().sampler()
        var cx = centre.getX() >> 4, cz = centre.getZ() >> 4
        var chunks = new ArrayList()
        for (var dx = -RADIUS; dx <= RADIUS; dx++) {
            for (var dz = -RADIUS; dz <= RADIUS; dz++) {
                var chunk = level.getChunk(cx + dx, cz + dz)
                // Same calls as vanilla /fillbiome, without its 32768-block volume limit.
                chunk.fillBiomesFromNoise(function (x, y, z, s) { return holder }, sampler)
                chunk.setUnsaved(true)
                chunks.add(chunk)
            }
        }
        source.chunkMap.resendBiomesForChunks(chunks)
        return true
    }

    global.rrServerHooks.rrTerraformerStart = function (context) {
        var machine = context.machineContext()
        var data = machine.controller().getPersistentData()
        var recipe = String(context.recipeId())
        data.remove(KEY_DONE)
        if (recipe === RECIPE_TERRAFORM) {
            var biomes = markerBiomes(machine.ioView())
            // No recorded marker, or markers for different biomes (which one MMCR takes is not defined).
            if (biomes.length !== 1) { context.cancel(); return }
            data.putString(KEY_BIOME, biomes[0])
        } else if (recipe === RECIPE_AURORA) {
            if (auroraBlocker(machine.level()) != null) context.cancel()
        }
    }

    global.rrServerHooks.rrTerraformerFinish = function (context) {
        var machine = context.machineContext()
        var tile = machine.controller()
        var level = machine.level()
        var data = tile.getPersistentData()
        var recipe = String(context.recipeId())
        if (data.getBoolean(KEY_DONE)) return
        data.putBoolean(KEY_DONE, true)
        try {
            if (recipe === RECIPE_TERRAFORM) {
                var biome = String(data.getString(KEY_BIOME))
                data.remove(KEY_BIOME)
                if (biome === '') log('No stored biome at ' + tile.getBlockPos() + '; nothing changed')
                else if (fillBiome(level, tile.getBlockPos(), biome)) log('Set 3x3 chunks at ' + tile.getBlockPos() + ' to ' + biome)
            } else if (recipe === RECIPE_AURORA) {
                // Night may have ended while the recipe ran; Auroral would end the aurora at once.
                var blocker = auroraBlocker(level)
                if (blocker != null) log('Aurora not started at ' + tile.getBlockPos() + ': ' + blocker)
                else { AuroraEvents.forceStartAurora(level); log('Aurora started in ' + level.getDimension()) } // KubeJS turns level.dimension into a property
            }
        } catch (error) {
            console.error('[biomic_terraformer] ' + recipe + ' failed: ' + error)
        }
        tile.setChanged()
    }
})()
