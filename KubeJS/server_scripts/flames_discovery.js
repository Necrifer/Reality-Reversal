

BlockEvents.rightClicked('divinerpg:coalstone', event => {
  
  if (String(event.block.id) !== 'divinerpg:coalstone') return;
  if (String(event.item.id) !== 'astral_dimension:astral_eye') return;
  if (String(event.level.dimension) !== 'divinerpg:iceika') return;
  const player = event.player;
  if (!player || event.level.isClientSide() || player.isFake() || player.isSpectator()) return;
  if (!player.isAdvancementDone('modpack:flames')) {
    player.unlockAdvancement('modpack:flames');
  }
});
