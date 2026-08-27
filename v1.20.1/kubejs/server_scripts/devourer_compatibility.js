// Devourer of Gods compatibility safeguards
//
// The DoG mod normally watches the vanilla Ender Dragon for up to 140 ticks
// after LivingDeathEvent, then starts its one-time cameo. In a heavily modded
// End fight the dragon can be removed, replaced, or have a mismatched fight UUID
// before that watch completes. DoG then never marks WitnessedFirstDragonKill, so
// no cutscene is played.
//
// This fallback waits longer than DoG's own watcher. If the native cutscene has
// already spawned a Devourer head near the death position, nothing is done. If
// no head exists, it calls DoG's own /dog devour play command at that position.

const DOG_CUTSCENE_SEEN_KEY = 'kubejs_dog_first_dragon_cutscene_seen'
const DOG_CUTSCENE_FALLBACK_DELAY = 165
const DOG_CUTSCENE_HEAD_CHECK_RADIUS = 256

EntityEvents.death('minecraft:ender_dragon', event => {
  const dragon = event.entity
  const level = dragon.level

  // Match DoG's native rule: only the vanilla dragon in The End qualifies.
  const dimensionId = String(level.dimension.location())
  if (dimensionId !== 'minecraft:the_end') return

  const server = event.server
  const saved = server.persistentData

  // This is intentionally independent from DoG's internal SavedData. It lets
  // the fallback remain one-time even when DoG loses its watched dragon early.
  if (saved.getBoolean(DOG_CUTSCENE_SEEN_KEY)) return
  saved.putBoolean(DOG_CUTSCENE_SEEN_KEY, true)

  // Capture the death position now; the dragon entity may be gone by callback.
  const x = dragon.x
  const y = dragon.y
  const z = dragon.z

  server.scheduleInTicks(DOG_CUTSCENE_FALLBACK_DELAY, () => {
    // DoG's native watcher has a 140-tick timeout. Waiting 165 ticks gives it
    // priority and prevents two cutscenes when its normal handler succeeds.
    // The command only runs if no native cameo head is present nearby.
    const command =
      `execute in minecraft:the_end positioned ${x} ${y} ${z} ` +
      `unless entity @e[type=dog:devourer_head,distance=..${DOG_CUTSCENE_HEAD_CHECK_RADIUS}] ` +
      'run dog devour play true'

    server.runCommandSilent(command)
    console.info('[DoG compatibility] Checked the first-dragon cutscene fallback.')
  })
})

// Recovery/testing notes:
//   /dog devour play true  - plays the cameo immediately at the command source.
//   /dog devour reset      - resets DoG's own first-kill flag.
// For repeated testing, change DOG_CUTSCENE_SEEN_KEY above to a new key. This
// does not affect normal gameplay; a released pack should keep one stable key.
