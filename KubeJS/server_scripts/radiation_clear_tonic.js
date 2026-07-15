// Consuming kubejs:radiation_clear_tonic runs `/nr clear <consumer>` from the
// server, allowing the item to work for players without command permission.

const NR_CLEAR_TONIC_ID = 'kubejs:radiation_clear_tonic'

ItemEvents.foodEaten(NR_CLEAR_TONIC_ID, event => {
  const player = event.player
  // KubeJS 2101.7.2 exposes runCommandSilent as a void method. The command
  // executes normally, but there is no numeric result value to test.
  player.server.runCommandSilent(
    `nr clear ${player.username}`
  )

  player.tell('§aYour personal radiation data has been cleared.')
  console.info(
    `[Radiation Clear Tonic] Ran /nr clear for ${player.username}.`
  )
})
