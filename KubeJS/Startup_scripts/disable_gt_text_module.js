// Do not touch this script!
// It disables an item that, when hovered over, will instantly crash your game!
// DO NOT ENABLE THIS ITEM
(function () {
  var disabled = ['gtceu:text_module'];
  ['gtceu:tool', 'gtceu:item'].forEach(function (tab) {
    StartupEvents.modifyCreativeTab(tab, function (event) {
      disabled.forEach(function (id) { event.remove(id); });
    });
  });
})();
