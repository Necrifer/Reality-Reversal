// Shared Spectrum block-placement helper for low-Aura consequences.
//
(() => {

function rrSpectrumAuraInt(value) {
  var parsed = parseInt(String(value), 10)
  if (isNaN(parsed)) {
    throw new Error('[Spectrum Aura] Invalid coordinate: ' + value)
  }
  return parsed
}

function rrSpectrumAuraCommand(level, command) {
  var server = level.getServer()
  var source = server.createCommandSourceStack()
    .withLevel(level)
    .withPermission(4)
    .withSuppressedOutput()
  return server.getCommands().performPrefixedCommand(source, command)
}

// Places several distinct consequences around, but never directly on, the
// supplied center. minimumRadius lets the MBD2 caller keep ordinary Dragonrot
// outside the formed machine while catastrophic Forfeiture starts closer.
global.rrPlaceSpectrumAuraBlocks = function(
  level,
  center,
  blockId,
  requestedCount,
  minimumRadius
) {
  if (!blockId || requestedCount <= 0) {
    return 'no Spectrum block placement configured'
  }

  var BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
  var centerX = rrSpectrumAuraInt(center.getX())
  var centerY = rrSpectrumAuraInt(center.getY())
  var centerZ = rrSpectrumAuraInt(center.getZ())
  var count = Math.max(0, Math.floor(Number(requestedCount)))
  var firstRadius = Math.max(1, Math.floor(Number(minimumRadius) || 1))
  var candidates = []
  var yOffsets = [0, 1, -1]

  // Build square rings from near to far. Starting at a rotating index keeps
  // repeated incidents from always selecting the same compass direction.
  for (var radius = firstRadius; radius <= firstRadius + 4; radius++) {
    for (var yIndex = 0; yIndex < yOffsets.length; yIndex++) {
      var yOffset = yOffsets[yIndex]
      for (var step = -radius; step <= radius; step++) {
        candidates.push([radius, yOffset, step])
        candidates.push([-radius, yOffset, step])
        if (step !== -radius && step !== radius) {
          candidates.push([step, yOffset, radius])
          candidates.push([step, yOffset, -radius])
        }
      }
    }
  }

  var placed = 0
  var start = Math.floor(Math.random() * candidates.length)
  for (var index = 0; index < candidates.length && placed < count; index++) {
    var offset = candidates[(start + index) % candidates.length]
    var x = centerX + offset[0]
    var y = centerY + offset[1]
    var z = centerZ + offset[2]
    var target = new BlockPos(x, y, z)

    if (!level.isLoaded(target)) {
      continue
    }

    var changed = rrSpectrumAuraCommand(
      level,
      'setblock ' + x + ' ' + y + ' ' + z + ' ' + blockId + ' replace'
    )
    if (changed > 0) {
      placed++
    }
  }

  return 'placed ' + placed + '/' + count + ' x ' + blockId
}

console.info('[Spectrum Aura] Shared Dragonrot/Forfeiture helper loaded.')

})()
