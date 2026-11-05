// Requires config/fml.toml dependencyOverrides.mmcr = ["-botania", "+kubejs"].
// Preserve both mods while selecting MMCR's own unavailable Botania integration.
(function () {
  if (!Platform.isLoaded('mmcr') || !Platform.isLoaded('botania')) return;
  var Bootstrap = Java.loadClass('cn.howxu.mmcr.compat.botania.BotaniaBridgeBootstrap');
  Bootstrap.installForTesting(Bootstrap.selectForTesting(false));
})();
