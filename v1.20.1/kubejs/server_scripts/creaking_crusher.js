// This is specifically for dealing with Creaking, or else that automation won't work!

ServerEvents.tags('entity_type', event => {
  event.add('industrialforegoing:mob_crusher_blacklist', 'minecraft:creaking')
})
