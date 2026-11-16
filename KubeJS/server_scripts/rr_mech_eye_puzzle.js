// Mech Eye puzzle, step 1 (hidden: no recipe viewer page exists for a script).
// Right-clicking a withering Eden Cadillion with a Shimmersteel Ingot executes it; it drops a stable Midnight Aberration.
// Step 2 (Light of Dawn conversion) is the Lychee recipe in recipes/inworld.js.
// Step 3 (pedestal) is global_packs/required_data/spectrum_recipes/.../mech_eye.json, gated by modpack:mech_eye.
(function () {
  var TARGET = 'divinerpg:eden_cadillion';
  var EFFECT = 'minecraft:wither';
  var DROP = 'spectrum:midnight_aberration[spectrum:stable={}]';
  // Set to true to use up one ingot per execution.
  var CONSUME_INGOT = false;

  ItemEvents.entityInteracted('auroral:shimmersteel_ingot', function (event) {
    var target = event.getTarget();
    var player = event.getPlayer();
    if (!target || !player) return;
    // KubeJS replaces Entity.getType() with the ID string.
    if (String(target.getType()) !== TARGET) return;
    // Server scripts only run server side. (player.level is a property in KubeJS, not a method.)
    if (player.isFake() || player.isSpectator()) return;
    if (!target.isAlive() || !target.isLiving() || !target.hasEffect(EFFECT)) return;

    var block = target.block;
    target.kill();
    block.popItem(Item.of(DROP));
    if (CONSUME_INGOT && !player.isCreative()) event.getItem().shrink(1);
    player.swing(event.getHand(), true);
    event.cancel();
  });
})();
