// Hide the automatically registered but deliberately unsupported chemical
// variants. Their fission recipes are removed server-side as a safety measure.
RecipeViewerEvents.removeEntries('item', event => {
  ;['ox', 'ni', 'za', 'tr'].forEach(variant => {
    event.remove(`nuclearcraft:fuel_reality_rfe_1_${variant}`)
    event.remove(`nuclearcraft:depleted_fuel_reality_rfe_1_${variant}`)
  })
})

ClientEvents.lang('en_us', event => {
  event.renameItem('nuclearcraft:fuel_reality_rfe_1', 'Reality Fission Energy Core (RFE-1)')
  event.renameItem('nuclearcraft:depleted_fuel_reality_rfe_1', 'Depleted Reality Fission Energy Core')
})
