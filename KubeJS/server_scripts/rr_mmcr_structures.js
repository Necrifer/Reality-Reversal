// Catalogue uses MMCR [Z][Y][X], rotated 180 degrees around Y from the MMR export.
// MMCR starts at SOUTH: the machine body must extend behind the controller face.
// Omitted spaces keep MMR's ANY behavior; explicit minecraft:air remains required air.
;(function () {
  MMCREvents.server(function (event) {
    var api = event.getAPI();
    function predicate(id) {
      switch (id) {
        case '@item_input': return api.anyOfItemInput();
        case '@item_output': return api.anyOfItemOutput();
        case '@fluid_input': return api.anyOfFluidInput();
        case '@fluid_output': return api.anyOfFluidOutput();
        case '@energy_input': return api.anyOfEnergyInput();
        case '@energy_output': return api.anyOfEnergyOutput();
        default: return api.block(id);
      }
    }
    global.rrMmcrMachines.forEach(function (m) {
      var missing = global.rrMmcrMissingBlocks(m.id);
      if (missing.length) throw new Error('MMCR ' + m.id + ' needs blocks: ' + missing.join(', '));
      var structure = event.createStructure(m.id).patternAll(m.pattern);
      Object.keys(m.keys).forEach(function (symbol) {
        // Old definitions include unused legacy port symbols; MMCR rejects absent symbols.
        var used = m.pattern.some(function (slice) { return slice.some(function (row) { return row.indexOf(symbol) >= 0; }); });
        if (!used) return;
        var alternatives = m.keys[symbol], value = predicate(alternatives[0]);
        for (var n = 1; n < alternatives.length; n++) value = api.anyOf(value, predicate(alternatives[n]));
        structure.set(symbol, value);
      });
      structure.controller('m').build();
    });
    console.info('[RR_MMCR_STRUCTURES] registered 7 migrated structures');
  });
})();
