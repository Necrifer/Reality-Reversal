// Reality Reversal custom NuclearCraft solid-fission fuel.

// This is a STARTUP script: changing these values requires a complete game
// restart. 

// Design target (NuclearCraft 1.20.1-1.2.35, active pack config):
//   6,912 isolated cells * 150 FE/t = 1,036,800 FE/t at 100% reactivity
//   6,912 cells * 160 H/t  = 1,105,920 H/t
//   6,912 Cryotheum sinks * 160 H/t = 1,105,920 H/t cooling
// The supplied 26x26x26 checkerboard therefore has exactly zero net heat.

// NuclearCraft 1.20.1-1.2.35 defines this KubeJS event correctly, but its
// Registration.onConstruction method is not registered to either Forge event
// bus. As a result, NuclearCraft never calls registerRuntimeFuels() by itself.
// Keep a guard here because a later NuclearCraft release may restore that
// missing event-bus registration.
let realityFuelRegistered = false

NCKJSEvents.RegisterFissionFuel(event => {
  if (realityFuelRegistered) {
    console.warn('[Reality Fuel] Ignored a duplicate NuclearCraft fuel-registration event.')
    return
  }

  realityFuelRegistered = true

  // Explicit Java signature avoids Rhino choosing between NuclearCraft's two
  // registerFuel overloads (int-valued and double-valued metadata).
  event['registerFuel(java.lang.String,java.lang.String,int,double,int,int,int,int,int,double,double,double)'](
    'reality', // fuel group; becomes part of the registry path
    'rfe_1',   // fuel name; base item is nuclearcraft:fuel_reality_rfe_1
    150,       // base FE per tick, per isolated fuel cell
    160.0,     // base heat per tick, per isolated fuel cell
    1,         // criticality metadata (not used by the solid-reactor runtime)
    691200,    // base depletion seconds; ~100 s/item in the 6,912-cell design
    100,       // efficiency metadata (not used by the solid-reactor runtime)
    298,       // isotope metadata for NuclearCraft's fuel tooltip/model system
    298,
    1.0,       // recipe time modifier
    1.0,       // recipe power modifier
    1.0        // radiation modifier
  )

  console.info('[Reality Fuel] Added nuclearcraft:fuel_reality_rfe_1 to NuclearCraft\'s runtime fuel registry.')
})

// Work around the missing event-bus hook in NuclearCraft 1.2.35. This public
// method posts NCKJSEvents.RegisterFissionFuel and then creates the fuel,
// depleted-fuel and clad-fuel item registry entries from the event result.
//
// Remove this explicit call only after a NuclearCraft update is confirmed to
// print the duplicate-event warning above during a clean game restart.
const FissionFuel = Java.loadClass('igentuman.nc.setup.registration.FissionFuel')
FissionFuel.registerRuntimeFuels()
