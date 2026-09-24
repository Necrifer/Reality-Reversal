// Blocks placement of Mob Crusher in all Cataclysm dimensions. No cheesing!

BlockEvents.placed('industrialforegoing:mob_crusher', function (event) {
  // Retain an exact check: an unresolved filtered ID can otherwise match all blocks.
  if (String(event.block.id) !== 'industrialforegoing:mob_crusher') return;
  if (String(event.level.dimension).indexOf('cataclysm_dimension:') !== 0) return;

  var player = event.player;
  if (player && !event.level.isClientSide()) {
    player.tell('Only with courage once can pass, no shortcuts allowed.');
  }
  // Cancel the placement itself; do not remove blocks or manually refund items.
  event.cancel();
});
