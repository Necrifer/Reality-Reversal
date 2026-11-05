// Temporary Excessive Utilities 1.10.0 preview workaround. Full restart required.
// Its Heating Coil queries SERVER config before a world exists during GT fuel scans.
// Uses the installed Configured mod to load only EU's existing global settings.
// Normal world loading still selects the real global/world override configuration.
;(function () {
  if (!Platform.isLoaded('excessive_utilities') || !Platform.isClientEnvironment()) return;
  var ServerConfig = Java.loadClass('dev.aaronhowser.mods.excessive_utilities.config.ServerConfig');
  if (!Platform.isLoaded('configured')) throw new Error('RR Excessive Utilities preview fix requires the installed Configured mod.');
  var ConfigHelper = Java.loadClass('com.mrcrayfish.configured.util.NeoForgeConfigHelper');
  var KubeJSPaths = Java.loadClass('dev.latvian.mods.kubejs.KubeJSPaths');
  var ready = false;

  function preparePreviewConfig(reason) {
    if (!ready) return;
    var spec = ServerConfig.Companion.getCONFIG_SPEC();
    if (spec.isLoaded()) return;
    var config = ConfigHelper.getModConfig('excessive_utilities-server.toml');
    if (config == null) throw new Error('Excessive Utilities SERVER config was not registered.');
    // Existing Configured API: the same per-file loading path used by its editor.
    // No direct loader class access, custom reflection, or new addon.
    ConfigHelper.openConfig(config, KubeJSPaths.GAMEDIR.resolve('config'));
    console.info('[RR Excessive Utilities] Global preview config ready (' + reason + ').');
  }

  StartupEvents.postInit(function () {
    ready = true;
    preparePreviewConfig('load complete');
  });

  var Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
  function restoreOfflineDefaults() {
    var client = Minecraft.getInstance();
    if (client == null || !client.isRunning() || client.level != null
        || client.getConnection() != null || client.getCurrentServer() != null
        || client.getSingleplayerServer() != null) return;
    preparePreviewConfig('offline preview');
  }
  NativeEvents.onEvent(Java.loadClass('net.neoforged.neoforge.client.event.ClientTickEvent$Pre'), restoreOfflineDefaults);
  NativeEvents.onEvent(Java.loadClass('net.neoforged.neoforge.client.event.ScreenEvent$Opening'), restoreOfflineDefaults);
})();
