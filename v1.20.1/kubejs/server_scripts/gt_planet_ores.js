// GTCEu 7.5.3: relocate only Bauxite/Sphalerite; keep companion ores in place.
// Existing generated blocks are not removed. Test in fresh chunks after restart.
GTCEuServerEvents.oreVeins(function (event) {
  var ArrayList = Java.loadClass('java.util.ArrayList');
  // GT's baked lists and DFU Either subclasses may be non-public Java classes.
  // Rhino cannot safely inspect them. Rebuild the three known 7.5.3 patterns
  // through public builders, retaining every companion layer's original values.
  function companionPattern(veinId, definitions) {
    event.modify(veinId, function (vein) {
      vein.layeredVeinGenerator(function (generator) {
        generator.buildLayerPattern(function (pattern) {
          definitions.forEach(function (definition) {
            pattern.layer(function (l) {
              l.weight(definition.weight).size(definition.min, definition.max);
              if (definition.block) l.block(function () { return Block.getBlock(definition.block); });
              else l.mat(definition.material);
            });
          });
        });
      });
      if (veinId === 'gtceu:bauxite_vein_end') vein.indicatorGenerators(new ArrayList());
    });
  }

  // Bauxite occurs in TWO vanilla-dimension veins; remove both occurrences.
  companionPattern('gtceu:bauxite_vein_end', [
    { block: 'minecraft:end_stone', weight: 2, min: 1, max: 6 },
    { material: GTMaterials.Ilmenite, weight: 1, min: 1, max: 2 },
    { material: GTMaterials.Aluminium, weight: 1, min: 1, max: 1 }
  ]);
  companionPattern('gtceu:mica_vein', [
    { material: GTMaterials.Kyanite, weight: 3, min: 2, max: 4 },
    { material: GTMaterials.Mica, weight: 2, min: 1, max: 1 },
    { material: GTMaterials.Pollucite, weight: 1, min: 1, max: 1 }
  ]);
  companionPattern('gtceu:sulfur_vein', [
    { material: GTMaterials.Sulfur, weight: 3, min: 2, max: 4 },
    { material: GTMaterials.Pyrite, weight: 2, min: 1, max: 1 }
  ]);

  function planetVein(id, layer, dimension, ore, density, weight) {
    event.add(id, function (vein) {
      vein.layer(layer);
      vein.dimensions(dimension);
      // Select the primitive overload explicitly (Rhino / IntProvider overload).
      vein['clusterSize(int)'](36);
      vein.density(density);
      vein.weight(weight);
      vein.heightRangeUniform(-32, 48);
      // Explicit block targets use the layer's planet-rock replacement rule.
      // .mat(...) would require a GT ore-prefix mapping for Ad Astra's stone.
      // A supplier also selects the unambiguous Layer.Builder.block method.
      vein.layeredVeinGenerator(function (generator) {
        generator.buildLayerPattern(function (pattern) {
          pattern.layer(function (l) {
            l.weight(1).block(function () { return Block.getBlock(ore); }).size(1, 4);
          });
        });
      });
    });
  }
  planetVein('kubejs:mars_bauxite_vein', 'rr_mars_ore_layer', 'ad_astra:mars', 'gtceu:bauxite_ore', 0.30, 40);
  planetVein('kubejs:moon_sphalerite_vein', 'rr_moon_ore_layer', 'ad_astra:moon', 'gtceu:sphalerite_ore', 0.20, 100);
  console.info('[RR planet ores] Removed Bauxite from End/Mica veins and Sphalerite from Sulfur vein; added Mars Bauxite and Moon Sphalerite.');
});
