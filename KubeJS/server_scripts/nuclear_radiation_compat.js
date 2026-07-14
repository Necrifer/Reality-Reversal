// Nuclear Radiation already binds its profiles to the corresponding `c:` tags.
// Bridge legacy Forge tags into those canonical tags so equivalent items inherit
// the native tooltip, inventory exposure, decay, and other radiation behavior.
ServerEvents.tags('item', event => {
  const legacyTagBridges = [
    ['c:ingots/plutonium', 'forge:ingots/plutonium'],
    ['c:ingots/thorium', 'forge:ingots/thorium'],
    ['c:ingots/uranium', 'forge:ingots/uranium'],
    ['c:ores/uranium', 'forge:ores/uranium'],
    ['c:raw_materials/uranium', 'forge:raw_materials/uranium'],
    ['c:storage_blocks/uranium', 'forge:storage_blocks/uranium']
  ]

  legacyTagBridges.forEach(bridge => {
    event.add(bridge[0], `#${bridge[1]}`)
  })

  // CrystalCraft does not tag these blocks, but their item paths exactly match
  // radioactive NuclearCraft Neohaul items. Put them in the same canonical tags
  // instead of duplicating isotope quantities in this script.
  event.add('c:storage_blocks/raw_thorium',
    'crystalcraft_unlimited_java:raw_thorium_block')
  event.add('c:storage_blocks/raw_uranium',
    'crystalcraft_unlimited_java:raw_uranium_block')
  event.add('c:storage_blocks/thorium',
    'crystalcraft_unlimited_java:thorium_block')
  event.add('c:storage_blocks/uranium',
    'crystalcraft_unlimited_java:uranium_block')
})
