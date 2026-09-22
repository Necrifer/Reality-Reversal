// Industrial Foregoing's blacklist disables direct removal, not targeting.
// Ordinary fake-player damage lets a heart-linked Creaking handle the hit
// without losing health, and allows its heart's normal resin response.
// Heartless Creakings still take ordinary damage; this is not blanket immunity.
ServerEvents.tags('entity_type', event => {
  event.add('industrialforegoing:mob_crusher_blacklist', 'minecraft:creaking')
})
