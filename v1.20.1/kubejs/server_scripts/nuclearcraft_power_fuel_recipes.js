// Recipes and safety restrictions for the Reality Fission Energy Core.
ServerEvents.recipes(event => {
  const fuelId = 'nuclearcraft:fuel_reality_rfe_1'

  // Do not let a failed startup registration cascade into an invalid shaped
  // recipe whose output is an empty ItemStack. The startup log will contain
  // the useful root-cause message instead.
  if (!Item.exists(fuelId)) {
    console.error(`[Reality Fuel] ${fuelId} is absent. The NuclearCraft startup bridge did not register the custom fuel; restart the client and inspect logs/kubejs/startup.log.`)
    return
  }

  // NuclearCraft automatically creates hotter oxide, nitride and zirconium-
  // alloy versions of every KubeJS custom fuel. The supplied reactor is tuned
  // only for the 160 H/t base form, so remove those reactor recipes rather
  // than exposing variants which can overheat this exact design.
  ;['ox', 'ni', 'za'].forEach(variant => {
    event.remove({
      id: `nuclearcraft:fission_reactor_controller/reality_rfe_1_${variant}`
    })
  })

  // Progression recipe. This block is intentionally isolated so the pack's
  // eventual quest/progression ingredients can be changed without touching
  // any of the calibrated NuclearCraft numbers above.
  event.shaped(fuelId, [
    'XXX',
    'XMX',
    'XXX'
  ], {
    X: 'nuclearcraft:fuel_xenorium_xen_298',
    M: 'kubejs:modular_ingot'
  }).id('kubejs:reality_fission_energy_core')
})
