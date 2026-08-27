ServerEvents.tags('item', event => {
  event.remove('twilightforest:portal/activator', '#forge:gems/diamond')

  // Ad Astra 1.15.20 ships a Mekanism recipe that references this tag but
  // does not provide the tag itself.
  event.add('forge:sandstone/venus_sandstone', 'ad_astra:venus_sandstone')
  event.add('forge:fluids/sulfuric_acid', 'mekanism:sulfuric_acid')
  event.add('forge:fluids/sulfuric_acid', 'nuclearcraft:sulfuric_acid')

})
