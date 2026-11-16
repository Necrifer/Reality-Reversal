// Gaia Dimension 2.2.288 buckets use ScaynyxBucketItem (a BucketItem subclass). NeoForge 21.1
// only attaches its bucket fluid handler to items whose class is exactly BucketItem, so
// machines, tanks and pipes cannot fill from or empty these buckets. This gives them the
// standard FluidBucketWrapper. Emptying returns a vanilla bucket (accepted). Full restart required.
;(function () {
    var BUCKETS = ['mineral_water', 'liquid_aura', 'liquid_bismuth', 'superhot_magma', 'sweet_muck']
        .map(function (fluid) { return 'gaiadimension:' + fluid + '_bucket'; });

    var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
    var RegisterCapabilitiesEvent = Java.loadClass('net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent');

    NativeEvents.onEvent(EventPriority.NORMAL, RegisterCapabilitiesEvent, function (event) {
        var Capabilities = Java.loadClass('net.neoforged.neoforge.capabilities.Capabilities');
        var FluidBucketWrapper = Java.loadClass('net.neoforged.neoforge.fluids.capability.wrappers.FluidBucketWrapper');
        var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
        var Items = Java.loadClass('net.minecraft.world.item.Items');
        var added = 0;

        BUCKETS.forEach(function (id) {
            try {
                var item = BuiltInRegistries.ITEM.get(ResourceLocation.parse(id));
                if (item == null || item == Items.AIR) { console.warn('[gaia_bucket_fluid_handler] Missing item ' + id); return; }
                event.registerItem(Capabilities.FluidHandler.ITEM, function (stack, context) { return new FluidBucketWrapper(stack); }, [item]);
                added++;
            } catch (error) {
                console.error('[gaia_bucket_fluid_handler] Could not register ' + id + ': ' + error);
            }
        });
        console.info('[gaia_bucket_fluid_handler] Fluid handlers added to ' + added + ' Gaia buckets');
    });
})();
