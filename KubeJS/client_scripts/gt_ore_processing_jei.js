// Rebuild GregTech's Ore Processing Diagram as a KubeJEI page.
// GT 8.1.0's own JEI page fails to register (NPE in TankWidget.getXEIIngredients via ldlib 1.0.35.a), so every
// material is skipped. This page reuses GT's own data class (GTOreByProduct), its slot coordinates and its
// textures, but registers plain JEI slots, so it never touches the failing ldlib path.
(function () {
  // Client scripts load while mods are still being constructed. Loading GT classes such as GTMachines here runs
  // their static initialisers before GT's registries exist, which breaks GT and crashes the game, so every GT/JEI
  // class is loaded on first use inside the KubeJEI events instead.
  var C = null;
  var loadClasses = function () {
    if (C != null) return C;
    var names = {
      Reflection: 'net.yxiao233.appliedjs.utils.ReflectionUtil',
      GTOreByProduct: 'com.gregtechceu.gtceu.integration.xei.widgets.GTOreByProduct',
      GTCEuAPI: 'com.gregtechceu.gtceu.api.GTCEuAPI',
      PropertyKey: 'com.gregtechceu.gtceu.api.material.material.properties.PropertyKey',
      MaterialFlags: 'com.gregtechceu.gtceu.api.material.material.info.MaterialFlags',
      ChemicalHelper: 'com.gregtechceu.gtceu.api.material.ChemicalHelper',
      TagPrefix: 'com.gregtechceu.gtceu.api.tag.TagPrefix',
      GTMaterials: 'com.gregtechceu.gtceu.data.material.GTMaterials',
      GTMachines: 'com.gregtechceu.gtceu.data.machine.GTMachines',
      GuiTextures: 'com.gregtechceu.gtceu.api.gui.GuiTextures',
      NeoForgeTypes: 'mezz.jei.api.neoforge.NeoForgeTypes',
      RecipeIngredientRole: 'mezz.jei.api.recipe.RecipeIngredientRole',
      AlmostUnified: 'com.almostreliable.unified.api.AlmostUnified',
      JList: 'java.util.List',
      ArrayList: 'java.util.ArrayList'
    };
    var loaded = {};
    for (var key in names) loaded[key] = Java.loadClass(names[key]);
    C = loaded;
    return C;
  };

  var CATEGORY = 'kubejs:gt_ore_processing';
  // Copied from GTOreByProductWidget (x, y pairs of the 18x18 slot widgets).
  var ITEM_IN = [3, 3, 23, 3, 3, 24, 23, 71, 50, 80, 24, 25, 97, 71, 70, 80, 114, 48, 133, 71, 3, 123, 41, 145, 102, 145, 24, 48, 155, 71, 101, 25];
  var ITEM_OUT = [46, 3, 3, 47, 3, 65, 23, 92, 23, 110, 50, 101, 50, 119, 64, 25, 82, 25, 97, 92, 97, 110, 70, 101, 70, 119, 137, 47, 155, 47, 133, 92, 133, 110, 3, 105, 3, 145, 23, 145, 63, 145, 84, 145, 124, 145, 64, 48, 82, 48, 155, 92, 155, 110, 155, 128, 119, 3, 137, 3, 155, 3, 119, 21, 137, 21, 155, 21];
  var FLUID = [42, 25, 42, 48];
  var FINAL_OUT = [0, 4, 8, 10, 12, 16, 20, 22, 24, 28, 30, 32, 40, 44, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66];

  var pages = {};   // recipe id -> {inputs, outputs, fluids, layers}
  var warned = {};
  var warnOnce = function (key, msg) {
    if (warned[key]) return;
    warned[key] = true;
    console.warn('[gt_ore_processing_jei] ' + msg);
  };

  var tooltipOf = function (byProduct, index) {
    var lines = new C.ArrayList();
    byProduct.getTooltip(index, lines);
    return lines;
  };

  // JEI hides a category with no visible catalyst and a page with any slot of only hidden items, without logging it.
  // gt_below_hv.js hides machines below HV and Almost Unified hides non-target items, so only visible items are used.
  // Items are compared by ID string: Rhino can't call equals() on Item, because only Object declares it.
  var LV = 1;
  var HV = 3;
  var swapped = 0;
  var machineSwaps = null;

  var oreMachines = function () {
    return [C.GTMachines.MACERATOR, C.GTMachines.ORE_WASHER, C.GTMachines.THERMAL_CENTRIFUGE, C.GTMachines.CENTRIFUGE,
      C.GTMachines.CHEMICAL_BATH, C.GTMachines.ELECTROMAGNETIC_SEPARATOR, C.GTMachines.SIFTER];
  };

  var hvMachineFor = function (item) {
    if (machineSwaps == null) {
      machineSwaps = {};
      oreMachines().forEach(function (tiers) {
        machineSwaps[String(tiers[LV].asStack().getItem())] = tiers[HV].asStack();
      });
    }
    return machineSwaps[String(item)] || null;
  };

  // Returns the item Almost Unified keeps visible, or null if this item stays as it is.
  var unifiedTarget = function (item) {
    try {
      var target = C.AlmostUnified.INSTANCE.getVariantItemTarget(item);
      return target == null || String(target) === String(item) ? null : target;
    } catch (err) {
      warnOnce('unified', 'Almost Unified lookup failed, some pages may stay hidden: ' + err);
      return null;
    }
  };

  var visibleStack = function (stack) {
    var item = stack.getItem();
    var machine = hvMachineFor(item);
    if (machine != null) {
      swapped++;
      return machine;
    }
    var target = unifiedTarget(item);
    if (target == null) return stack;
    swapped++;
    return target.getDefaultInstance().copyWithCount(stack.getCount());
  };

  var visibleStacks = function (stacks) {
    var result = new C.ArrayList();
    for (var i = 0; i < stacks.size(); i++) result.add(visibleStack(stacks.get(i)));
    return result;
  };

  // Reads one material into plain slot data; returns null when it has nothing to show.
  var buildPage = function (material) {
    var bp = new C.GTOreByProduct(material);
    var inputs = C.Reflection.getPrivateField('itemInputs', C.JList, bp, C.GTOreByProduct);
    var outputs = C.Reflection.getPrivateField('itemOutputs', C.JList, bp, C.GTOreByProduct);
    var fluids = C.Reflection.getPrivateField('fluidInputs', C.JList, bp, C.GTOreByProduct);
    var page = {inputs: [], outputs: [], fluids: [], layers: [C.GuiTextures.OREBY_BASE]};
    if (bp.hasDirectSmelt()) page.layers.push(C.GuiTextures.OREBY_SMELT);
    if (bp.hasChemBath()) page.layers.push(C.GuiTextures.OREBY_CHEM);
    if (bp.hasSeparator()) page.layers.push(C.GuiTextures.OREBY_SEP);
    if (bp.hasSifter()) page.layers.push(C.GuiTextures.OREBY_SIFT);

    for (var i = 0; i < ITEM_IN.length; i += 2) {
      var entry = inputs.get(i / 2);
      if (entry.isEmpty()) continue;
      page.inputs.push({x: ITEM_IN[i], y: ITEM_IN[i + 1], stacks: visibleStacks(entry.getStacks()), tooltip: tooltipOf(bp, i / 2)});
    }
    for (var j = 0; j < ITEM_OUT.length; j += 2) {
      var stack = outputs.get(j / 2);
      if (stack.isEmpty()) continue;
      var index = j / 2 + inputs.size();
      page.outputs.push({x: ITEM_OUT[j], y: ITEM_OUT[j + 1], stack: visibleStack(stack), tooltip: tooltipOf(bp, index),
        final: FINAL_OUT.indexOf(j) >= 0});
    }
    for (var k = 0; k < FLUID.length; k += 2) {
      var fluid = fluids.get(k / 2);
      if (fluid.isEmpty()) continue;
      page.fluids.push({x: FLUID[k], y: FLUID[k + 1], stacks: fluid.getStacks()});
    }
    return page.outputs.length > 0 ? page : null;
  };

  // JEI slot positions are the 16x16 ingredient area, one pixel inside GT's 18x18 widget.
  var fillLayout = function (layout, id) {
    var page = pages[id];
    page.inputs.forEach(function (s) {
      var slot = layout.addInput(s.x + 1, s.y + 1);
      slot.builder().addItemStacks(s.stacks);
      if (!s.tooltip.isEmpty()) slot.setTooltip(s.tooltip);
    });
    page.outputs.forEach(function (s) {
      var slot = layout.addOutput(s.x + 1, s.y + 1);
      slot.addItemStack(s.stack);
      if (!s.tooltip.isEmpty()) slot.setTooltip(s.tooltip);
      // GT marks intermediate products as both input and output, so they also show under "uses".
      if (!s.final) {
        var hidden = new C.ArrayList();
        hidden.add(s.stack);
        layout.builder().addInvisibleIngredients(C.RecipeIngredientRole.INPUT).addItemStacks(hidden);
      }
    });
    page.fluids.forEach(function (s) {
      try {
        var slot = layout.addInput(s.x + 1, s.y + 1);
        slot.builder().addIngredients(C.NeoForgeTypes.FLUID_STACK, s.stacks);
      } catch (err) {
        warnOnce('fluid:' + id, 'Skipped a fluid slot on ' + id + ': ' + err);
      }
    });
  };

  var oreMaterials = function () {
    var list = [];
    C.GTCEuAPI.materialManager.stream().toList().forEach(function (m) {
      if (m.hasProperty(C.PropertyKey.ORE) && !m.hasFlag(C.MaterialFlags.NO_ORE_PROCESSING_TAB)) list.push(m);
    });
    return list;
  };

  // Loads the classes on first use; disables the page (with one warning) if any are missing.
  var ready = function () {
    try {
      loadClasses();
      return true;
    } catch (err) {
      warnOnce('classes', 'Disabled, a required class is missing: ' + err);
      return false;
    }
  };

  KubeJEIEvents.categories(function (event) {
    if (!ready()) return;
    var category = event.create(CATEGORY)
      .setTitle(Text.translatable('gtceu.jei.ore_processing_diagram'))
      // The count is required: Rhino finds the 2-argument get ambiguous with get(MaterialEntry, int).
      .setIcon(C.ChemicalHelper.get(C.TagPrefix.rawOre, C.GTMaterials.Iron, 1))
      .setSize(176, 166);
    oreMachines().forEach(function (tiers) {
      category.addCatalyst(tiers[HV].asStack());
    });
    category.setDrawHandler(function (recipe, slotsView, graphics, mouseX, mouseY) {
      var page = pages[String(recipe.getId())];
      if (page == null) return;
      page.layers.forEach(function (tex) { tex.draw(graphics, 0, 0, 0, 0, 176, 166); });
      page.outputs.forEach(function (s) { C.GuiTextures.SLOT.draw(graphics, 0, 0, s.x, s.y, 18, 18); });
      page.fluids.forEach(function (s) { C.GuiTextures.FLUID_SLOT.draw(graphics, 0, 0, s.x, s.y, 18, 18); });
    });
  });

  KubeJEIEvents.recipes(function (event) {
    if (!ready()) return;
    pages = {};
    swapped = 0;
    var built = 0;
    event.modify(CATEGORY, function (wrapper) {
      oreMaterials().forEach(function (material) {
        var rl = material.getResourceLocation();
        var id = 'kubejs:gt_ore_processing/' + rl.getNamespace() + '/' + rl.getPath();
        try {
          var page = buildPage(material);
          if (page == null) return;
          pages[id] = page;
          wrapper.add(id, function (layout) { fillLayout(layout, id); });
          built++;
        } catch (err) {
          warnOnce('build:' + id, 'Skipped ' + id + ': ' + err);
        }
      });
    });
    console.info('[gt_ore_processing_jei] Registered ' + built + ' ore processing pages, swapped ' + swapped + ' hidden items');
  });
})();
