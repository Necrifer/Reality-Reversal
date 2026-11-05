// Tiny Mob Farm 1.5.2 has no mob blacklist; its Lasso only refuses mobs that can't use portals.
// Block the Lasso on any mob in #modpack:duplication_blacklist (filled by
// server_scripts/rr_mob_duplication_blacklist.js). The Lasso captures from Architectury's
// EntityInteract listener (priority HIGH, skips cancelled events), so cancelling at HIGHEST stops it.
// Lassos that already hold a blacklisted mob are not affected. Full restart required after edits.
(function () {
  if (!Platform.isLoaded('tinymobfarm')) return;

  var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
  var EntityInteract = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteract');
  var InteractionResult = Java.loadClass('net.minecraft.world.InteractionResult');
  var TagKey = Java.loadClass('net.minecraft.tags.TagKey');
  var Registries = Java.loadClass('net.minecraft.core.registries.Registries');
  var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
  var Component = Java.loadClass('net.minecraft.network.chat.Component');
  var LassoItem = Java.loadClass('com.daqem.tinymobfarm.item.LassoItem');

  var BLACKLIST = TagKey.create(Registries.ENTITY_TYPE, ResourceLocation.parse('modpack:duplication_blacklist'));
  var reported = false;

  NativeEvents.onEvent(EventPriority.HIGHEST, EntityInteract, function (event) {
    try {
      if (!(event.getItemStack().getItem() instanceof LassoItem)) return;
      if (!event.getTarget().getType().is(BLACKLIST)) return;
      event.setCanceled(true);
      event.setCancellationResult(InteractionResult.FAIL);
      if (!event.getLevel().isClientSide()) {
        event.getEntity().displayClientMessage(Component.literal('This creature slips out of the lasso.'), true);
      }
    } catch (error) {
      if (reported) return;
      reported = true;
      console.error('[RR Tiny Mob Farm Blacklist] Lasso check failed: ' + error);
    }
  });
})();
