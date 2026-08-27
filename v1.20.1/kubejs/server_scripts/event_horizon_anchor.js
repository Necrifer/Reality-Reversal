// Event Horizon Anchor - black-hole rescue and lethal-death behaviour
//
// REQUIRED SOUL'S BLACK HOLES SETTING:
//   config/soulsholes-common.toml -> [physics] killPlayers = false
//
// That setting makes the mod apply event-horizon damage down to 1 HP instead of
// immediately calling Player.kill(). KubeJS can then cancel that damage for an
// Anchor holder. A player without an Anchor receives the mod's real lethal
// event_horizon damage source below; no potion effect or debuff is used.

// Soul's Black Holes exposes this public helper for constructing its own damage
// source. Using it preserves the mod's event-horizon damage properties and death
// message rather than substituting generic /kill damage.
const SoulHolesDamageTypes = Java.loadClass('com.soul.soulsholes.registry.ModDamageTypes')
const SoulHolesBlackHoleEntity = Java.loadClass('com.soul.soulsholes.entity.BlackHoleEntity')

// -----------------------------------------------------------------------------
// EASY-TO-TWEAK SETTINGS
// -----------------------------------------------------------------------------

const EVENT_HORIZON_ANCHOR_ITEM = 'kubejs:event_horizon_anchor'

// Set to false if the Anchor should be permanent/reusable.
const EVENT_HORIZON_ANCHOR_CONSUMED = true

// Temporary destination requested for this implementation. Change these values
// when the pack's custom destination is ready. (100, 50, 0) is the normal End
// arrival-platform area; the half-block offsets place the player near its centre.
const EVENT_HORIZON_TARGET_DIMENSION = 'minecraft:the_end'
const EVENT_HORIZON_TARGET_X = 100.5
const EVENT_HORIZON_TARGET_Y = 50.0
const EVENT_HORIZON_TARGET_Z = 0.5

// Deliberately far above any normal health total. The Soul's Black Holes damage
// type bypasses armor, resistance, enchantment protection and invulnerability.
const EVENT_HORIZON_LETHAL_DAMAGE = 1000000.0

// Must cover the mod's configured maxGravitationalRange. This is only used to
// find nearby black holes; the exact distance tests below still decide whether
// the player is in the damaging zone or has crossed the event horizon.
const EVENT_HORIZON_SEARCH_RADIUS = 64.0

// Internal per-player flags. These prevent multiple black-hole ticks from queuing
// several deaths and prevent our own lethal hit from recursively handling itself.
const EVENT_HORIZON_PENDING_KEY = 'kubejs_event_horizon_death_pending'
const EVENT_HORIZON_LETHAL_KEY = 'kubejs_event_horizon_applying_lethal_damage'

// -----------------------------------------------------------------------------
// SMALL HELPERS
// -----------------------------------------------------------------------------

/**
 * Returns the inventory slot containing an Anchor, or -1 if none exists.
 * Player inventory includes the hotbar, main inventory and offhand slot, so the
 * item only needs to be carried; it does not need to be held.
 */
function findEventHorizonAnchor(player) {
  return player.inventory.find(Item.of(EVENT_HORIZON_ANCHOR_ITEM))
}

/**
 * Reproduces the distance calculations used by BlackHoleEntity itself.
 *
 * Why this is necessary: Soul's Black Holes uses vanilla out_of_world damage in
 * the wider tidal zone (inside 5 Schwarzschild radii), and only uses its custom
 * event_horizon damage after actual contact. The wider damage can otherwise kill
 * an injured player before the old event_horizon-only handler ever sees them.
 */
function getBlackHoleContact(player) {
  const searchBox = player.getBoundingBox().inflate(EVENT_HORIZON_SEARCH_RADIUS)
  const blackHoles = player.level.getEntitiesOfClass(SoulHolesBlackHoleEntity, searchBox)

  let inTidalDamageZone = false

  for (let i = 0; i < blackHoles.size(); i++) {
    const blackHole = blackHoles.get(i)
    const dx = blackHole.x - player.x
    const dy = blackHole.y - (player.y + player.getBbHeight() * 0.5)
    const dz = blackHole.z - player.z
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
    const schwarzschildRadius = blackHole.getSchwarzschildRadius()

    // Exact consume-distance formula from BlackHoleEntity.tickGravitationalPull.
    const playerReach = Math.max(player.getBbWidth(), player.getBbHeight()) * 0.5
    const eventHorizonDistance = Math.max(schwarzschildRadius + playerReach, 0.75)

    if (distance < eventHorizonDistance) {
      return { crossedEventHorizon: true, inTidalDamageZone: true }
    }

    // Exact outer boundary from BlackHoleEntity.applyEntityZoneEffects.
    if (distance / schwarzschildRadius < 5.0) inTidalDamageZone = true
  }

  return { crossedEventHorizon: false, inTidalDamageZone: inTidalDamageZone }
}

/** Consumes one Anchor when the one-use option above is enabled. */
function consumeEventHorizonAnchor(player, slot) {
  if (!EVENT_HORIZON_ANCHOR_CONSUMED) return

  player.inventory.extractItem(slot, 1, false)
  player.inventory.setChanged()
}

/**
 * Cancels the black hole's pull momentum and sends the player to the configured
 * dimension. Inventory is untouched apart from the optional Anchor consumption.
 */
function rescueFromEventHorizon(player, anchorSlot) {
  consumeEventHorizonAnchor(player, anchorSlot)

  // Clear any queued lethal hit before changing dimensions.
  player.persistentData.remove(EVENT_HORIZON_PENDING_KEY)
  player.persistentData.remove(EVENT_HORIZON_LETHAL_KEY)

  player.setMotion(0, 0, 0)
  player.resetFallDistance()
  player.teleportTo(
    EVENT_HORIZON_TARGET_DIMENSION,
    EVENT_HORIZON_TARGET_X,
    EVENT_HORIZON_TARGET_Y,
    EVENT_HORIZON_TARGET_Z,
    player.yaw,
    player.pitch
  )

  // These are effects applied by Soul's Black Holes itself. Removing them after
  // the teleport prevents the old black hole from leaving pull/damage state on
  // the rescued player in the destination dimension.
  player.removeEffect('soulsholes:gravity_pulled')
  player.removeEffect('soulsholes:spaghettification')

  player.tell(Text.of('The Event Horizon Anchor tears open a path to The End.').lightPurple())
}

/** Applies the genuine Soul's Black Holes lethal source, without any debuff. */
function applyEventHorizonDeath(player) {
  if (!player.alive) return

  player.persistentData.putBoolean(EVENT_HORIZON_LETHAL_KEY, true)
  try {
    const lethalSource = SoulHolesDamageTypes.eventHorizon(player.level)
    player.hurt(lethalSource, EVENT_HORIZON_LETHAL_DAMAGE)

    // Mirrors the mod's own fail-safe if a totem/death-protection system fires.
    if (player.alive) player.kill()
  } finally {
    player.persistentData.remove(EVENT_HORIZON_LETHAL_KEY)
  }
}

/** Queues at most one lethal hit, avoiding a nested hurt event. */
function scheduleEventHorizonDeath(server, player) {
  if (player.persistentData.getBoolean(EVENT_HORIZON_PENDING_KEY)) return
  player.persistentData.putBoolean(EVENT_HORIZON_PENDING_KEY, true)

  server.scheduleInTicks(1, () => {
    player.persistentData.remove(EVENT_HORIZON_PENDING_KEY)
    applyEventHorizonDeath(player)
  })
}

// Direct distance detection fixes the 1-HP edge case in the mod: with
// killPlayers=false, consumeEntity applies no damage at all when health is already
// exactly 1, so no Forge/KubeJS hurt event exists for an event-only script to see.
PlayerEvents.tick(event => {
  if (event.level.clientSide) return

  const player = event.player
  if (!player.alive || player.isSpectator()) return

  const contact = getBlackHoleContact(player)
  if (!contact.crossedEventHorizon) return

  const anchorSlot = findEventHorizonAnchor(player)
  if (anchorSlot >= 0) {
    rescueFromEventHorizon(player, anchorSlot)
  } else {
    // This is called outside a hurt callback, so direct damage is safe here.
    applyEventHorizonDeath(player)
  }
})

// -----------------------------------------------------------------------------
// EVENT-HORIZON INTERCEPTION
// -----------------------------------------------------------------------------

EntityEvents.hurt('minecraft:player', event => {
  const player = event.entity

  // DamageSource.type is the damage type's message ID. The current mod reports
  // "event_horizon"; the namespaced comparison is retained for compatibility
  // with versions/integrations that expose the full registry ID instead.
  const damageType = String(event.source.type)
  const isEventHorizonDamage = damageType === 'event_horizon' || damageType === 'soulsholes:event_horizon'

  // The mod's repeating 2.5-heart-style tidal damage is vanilla out_of_world
  // damage, not event_horizon damage. Only treat it as black-hole damage when an
  // actual nearby BlackHoleEntity places this player inside its <5Rs zone; this
  // avoids hijacking ordinary deaths from falling into the void.
  const isOutOfWorldDamage = damageType === 'out_of_world' || damageType === 'minecraft:out_of_world'
  const contact = isOutOfWorldDamage ? getBlackHoleContact(player) : null
  const isBlackHoleTidalDamage = isOutOfWorldDamage && contact.inTidalDamageZone

  if (!isEventHorizonDamage && !isBlackHoleTidalDamage) return

  // Our deliberately lethal second hit must pass through untouched.
  if (player.persistentData.getBoolean(EVENT_HORIZON_LETHAL_KEY)) return

  // Ordinary tidal-zone hits are allowed. We intervene only when the next hit
  // would be lethal, preserving the black hole's intended approach hazard while
  // ensuring an Anchor can actually perform its death-rescue function.
  const effectiveHealth = player.health + player.absorptionAmount
  if (isBlackHoleTidalDamage && event.damage < effectiveHealth) return

  const anchorSlot = findEventHorizonAnchor(player)
  if (anchorSlot >= 0) {
    event.cancel()
    rescueFromEventHorizon(player, anchorSlot)
    return
  }

  // Do not queue one lethal hit per tick while the player remains in the horizon.
  // Cancel lethal tidal damage so the scheduled hit uses the correct special
  // event_horizon source and death message. The mod's horizon hit is nonlethal
  // with killPlayers=false, so cancelling it is unnecessary but harmless.
  event.cancel()
  scheduleEventHorizonDeath(event.server, player)
})
