// Chunk Pregenerator 4.5.4 registers Plugins after Carbon Config loads/saves base.cfg.
// The initial save drops that not-yet-registered section from disk, even though
// journey=false still applies in memory for that launch. Save the registered
// config after mod initialization so the next launch retains the same setting.
// Ship this script together with config/pregen/base.cfg containing:
// [Plugins]
//   B:journey=false
// This does not change the in-memory plugin state or enable any integration.

// So tell me, why is AI needed? This is why.
StartupEvents.postInit(function (event) {
  if (!Platform.isLoaded('chunkpregen') || !Platform.isLoaded('journeymap')) return

  try {
    var pregenConfig = Java.loadClass('pregenerator.PregenConfig').INSTANCE
    var handler = pregenConfig.getHandler()
    if (handler == null || !handler.isLoaded()) {
      console.error('[RR Pregen compatibility] Config is not initialized; could not preserve the JourneyMap setting.')
      return
    }

    handler.saveQuietly()
    console.info('[RR Pregen compatibility] Saved the registered plugin settings for the next launch.')
  } catch (error) {
    console.error('[RR Pregen compatibility] Could not persist plugin settings: ' + error)
  }
})
