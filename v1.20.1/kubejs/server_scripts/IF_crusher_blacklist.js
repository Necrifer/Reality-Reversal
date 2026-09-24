// Block the Mob Crusher's direct-removal path for Chaos Guardian.
// Blacklisted mobs receive normal fake-player damage instead, respecting
// the Guardian's crystals, shields, attack phases and damage caps.
ServerEvents.tags('entity_type', function(event) {
  event.add('industrialforegoing:mob_crusher_blacklist', 'draconicevolution:draconic_guardian')
})
