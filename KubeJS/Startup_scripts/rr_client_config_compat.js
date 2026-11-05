// Requires KubeJS to construct after bedrockminer and projectexpansion in fml.toml.
// Select original public callbacks through NeoForge's native event bus.
(function () {
  if (!Platform.isClientEnvironment()) return;
  var NeoForge = Java.loadClass('net.neoforged.neoforge.common.NeoForge');
  var Priority = Java.loadClass('net.neoforged.bus.api.EventPriority');
  var bus = NeoForge.EVENT_BUS;
  if (Platform.isLoaded('bedrockminer') && !global.rrBedrockMinerEventsInstalled) {
    var Bedrock = Java.loadClass('xxrexraptorxx.bedrockminer.world.Events');
    var BedrockConfig = Java.loadClass('xxrexraptorxx.bedrockminer.utils.Config');
    var PreTick = Java.loadClass('net.neoforged.neoforge.client.event.ClientTickEvent$Pre');
    var Login = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent');
    var Trades = Java.loadClass('net.neoforged.neoforge.event.village.WandererTradesEvent');
    var LeftClick = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock');
    bus.unregister(Bedrock);
    bus.addListener(Priority.NORMAL, false, PreTick, function (event) {
      if (BedrockConfig.CLIENT_CONFIG === null || !BedrockConfig.CLIENT_CONFIG.isLoaded()) return;
      Bedrock.onClientTick(event);
    });
    bus.addListener(Priority.NORMAL, false, Login, function (event) { Bedrock.SupporterRewards(event); });
    bus.addListener(Priority.NORMAL, false, Trades, function (event) { Bedrock.addCustomWanderingTrades(event); });
    bus.addListener(Priority.NORMAL, false, LeftClick, function (event) { Bedrock.ReplaceBedrock(event); });
    global.rrBedrockMinerEventsInstalled = true;
  }
  if (Platform.isLoaded('projectexpansion') && !global.rrProjectExpansionEventsInstalled) {
    var Display = Java.loadClass('cool.furry.mc.neoforge.projectexpansion.gui.EMCDisplay');
    var DisplayConfig = Java.loadClass('cool.furry.mc.neoforge.projectexpansion.config.Config');
    var PostTick = Java.loadClass('net.neoforged.neoforge.client.event.ClientTickEvent$Post');
    var Logout = Java.loadClass('net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent$LoggingOut');
    var Unload = Java.loadClass('net.neoforged.neoforge.event.level.LevelEvent$Unload');
    var pendingCleanup = false;
    bus.unregister(Display);
    bus.addListener(Priority.NORMAL, false, PostTick, function (event) {
      if (pendingCleanup && DisplayConfig.client.Spec.isLoaded()) {
        // This original public callback does not dereference its event argument.
        Display.clientDisconnect(null);
        pendingCleanup = false;
      }
      Display.onTick(event);
    });
    bus.addListener(Priority.NORMAL, false, Logout, function (event) {
      if (!DisplayConfig.client.Spec.isLoaded()) { pendingCleanup = true; return; }
      Display.clientDisconnect(event);
      pendingCleanup = false;
    });
    bus.addListener(Priority.NORMAL, false, Unload, function (event) {
      if (!DisplayConfig.client.Spec.isLoaded()) { pendingCleanup = true; return; }
      Display.onWorldUnload(event);
      pendingCleanup = false;
    });
    global.rrProjectExpansionEventsInstalled = true;
  }
})();
