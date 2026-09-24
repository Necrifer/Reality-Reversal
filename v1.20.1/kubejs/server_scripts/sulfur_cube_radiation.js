// NuclearCraft contamination -> Sulfur Cube processing. Server script.
// Uses the same total chunk reading as NuclearCraft's Geiger Counter (RAD).

//I do not understand what on earth is happening here.
//Basically this script is used for Chp3 automation, changing item inside Sulfur Cube to a drop
//after 1 minute of sufficient Rad value in chunk.
(function () {
  var REQUIRED_RADIATION = 75000; // 75 mRAD; NuclearCraft API uses micro-RAD.
  var PROCESS_TICKS = 1200;
  var KEY = 'rr_sulfur_radiation_v1_ticks';
  var RadiationManager = Java.loadClass('igentuman.nc.radiation.data.RadiationManager');
  var EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
  var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
  var SulfurCube = Java.loadClass('com.blackgear.vanillabackport.common.level.entities.sulfurcube.SulfurCube');
  var ticks = {};
  var errors = {};

  LevelEvents.tick(function (event) {
    if (REQUIRED_RADIATION === null || REQUIRED_RADIATION <= 0) return;
    var level = event.level;
    var dim = String(level.dimension);
    ticks[dim] = (ticks[dim] || 0) + 1;
    if (ticks[dim] % 20 !== 0) return;
    var radiation = RadiationManager.get(level).getWorldRadiation();
    var entities = level.getEntities(); // Loaded entities only; never load chunks.
    for (var i = 0; i < entities.size(); i++) {
      var cube = entities.get(i);
      // Avoid Rhino's ambiguous entity "type" field/bean exposure.
      if (!(cube instanceof SulfurCube)) continue;
      try {
        if (!cube.isAlive() || cube.isBaby()) continue;
        var data = cube.getPersistentData();
        var held = cube.getContainedBlock();
        if (String(held.id) !== 'kubejs:chaos_infused' || Number(held.count) !== 1) {
          data.remove(KEY);
          continue;
        }
        var amount = Number(radiation.getChunkRadiation(Math.floor(cube.x / 16), Math.floor(cube.z / 16)));
        if (!isFinite(amount) || amount < REQUIRED_RADIATION) continue;
        var progress = Math.min(PROCESS_TICKS, Math.max(0, Number(data.getInt(KEY))) + 20);
        data.putInt(KEY, progress);
        if (progress < PROCESS_TICKS) continue;
        var output = Item.of('gtceu:chaos_infused_block');
        if (output.isEmpty()) throw new Error('Missing gtceu:chaos_infused_block');
        var drop = new ItemEntity(level, cube.x, cube.y + 0.5, cube.z, output);
        var previous = held.copy();
        // Clear first, then restore if the item could not enter the world.
        cube.setItemSlot(EquipmentSlot.CHEST, Item.of('minecraft:air'));
        var spawned = false;
        try {
          spawned = level.addFreshEntity(drop);
        } finally {
          if (!spawned) cube.setItemSlot(EquipmentSlot.CHEST, previous);
        }
        if (spawned) data.remove(KEY);
      } catch (error) {
        if (!errors[dim] || ticks[dim] - errors[dim] >= 1200) {
          errors[dim] = ticks[dim];
          console.error('[Sulfur Cube radiation] ' + error);
        }
      }
    }
  });
})();
