

BlockEvents.placed('industrialforegoing:mob_crusher', function (event) {
  
  if (String(event.block.id) !== 'industrialforegoing:mob_crusher') return;
  if (String(event.level.dimension).indexOf('cataclysm_dimension:') !== 0) return;

  var player = event.player;
  if (player && !event.level.isClientSide()) {
    player.tell('Only with courage once can pass, no shortcuts allowed.');
  }
  
  event.cancel();
});
