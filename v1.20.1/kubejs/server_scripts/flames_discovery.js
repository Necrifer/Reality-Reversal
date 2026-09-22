// A plain Astral Eye has no successful useOn action to fire the vanilla critera
// Grant discovery for the intended click without consuming anything or cancelling it.
BlockEvents.rightClicked('divinerpg:coalstone', event => {
  // Keep an explicit block check even when registering a filtered listener.
  if (String(event.block.id) !== 'divinerpg:coalstone') return;
  if (String(event.item.id) !== 'astral_dimension:astral_eye') return;
  if (String(event.level.dimension) !== 'divinerpg:iceika') return;
  const player = event.player;
  if (!player || event.level.isClientSide() || player.isFake() || player.isSpectator()) return;
  if (!player.isAdvancementDone('modpack:flames')) {
    player.unlockAdvancement('modpack:flames');
  }
});
