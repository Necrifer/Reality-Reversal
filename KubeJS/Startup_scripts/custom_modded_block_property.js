;(function () {
  var Key = Java.loadClass('net.minecraft.resources.ResourceKey');
  var Registries = Java.loadClass('net.minecraft.core.registries.Registries');
  var RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
  BlockEvents.modification(function (event) {
    ['null_black', 'null_white'].forEach(function (id) {
      event.modify('voidscape:' + id, function (block) {
        block.block().setDrops(Key.create(Registries.LOOT_TABLE, RL.parse('voidscape:blocks/' + id)));
        block.destroySpeed = 5; block.explosionResistance = 6; block.requiresTool = true;
      });
    });
  });
})();
