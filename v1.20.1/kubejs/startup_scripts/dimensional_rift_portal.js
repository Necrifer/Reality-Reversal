// This is the custom block used in the Dimensional Rift multi
// Don't touch this!
StartupEvents.registry('block', function (event) {
    event.create('dimensional_rift_portal')
        .displayName('Dimensional Rift')
        .textureAll('minecraft:block/nether_portal')
        .renderType('translucent')
        .lightLevel(0.8)
        .hardness(-1)
        .resistance(3600000)
        .noCollision()
        .notSolid()
        .noDrops()
        .noItem()
        .blockEntity(function (info) {
            info.serverTick(20, 0, function (entity) {
                if (typeof global.rrDimensionalRiftPortalTick === 'function') {
                    global.rrDimensionalRiftPortalTick(entity);
                }
            });
        });
});
