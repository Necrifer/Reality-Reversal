// Restore GregTech recipe-slot tooltips in JEI 19.49+.
// GT 8.1.0 embeds ldlib 1.0.35.a, whose JEI slot renderer (ModularUIRecipeCategory$2) only implements the
// 3-argument getTooltip(builder, ingredient, flag). JEI 19.49+ calls the newer 5-argument overload, whose default
// falls back to the legacy list method that ldlib returns empty, so only JEI's mod-name line was shown.
// This copies the slot's own tooltip (name, chances, fluid info) back in while the JEI recipe screen draws it.
(function () {
  var receipt = {phase: 'init', source_script: 'client_scripts:gt_jei_tooltip_fix.js'};
  // KubeJS's Rhino scopes `var` to the enclosing block, so the classes are declared before the try block.
  var EventPriority, GatherComponents, Either, Minecraft, Reflection, RecipesGui, RecipeSlot, RendererOverrides,
    LdlibRenderer, LdlibSlot;
  try {
    EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
    GatherComponents = Java.loadClass('net.neoforged.neoforge.client.event.RenderTooltipEvent$GatherComponents');
    Either = Java.loadClass('com.mojang.datafixers.util.Either');
    Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
    Reflection = Java.loadClass('net.yxiao233.appliedjs.utils.ReflectionUtil');
    RecipesGui = Java.loadClass('mezz.jei.gui.recipes.RecipesGui');
    RecipeSlot = Java.loadClass('mezz.jei.library.gui.ingredients.RecipeSlot');
    RendererOverrides = Java.loadClass('mezz.jei.library.gui.ingredients.RendererOverrides');
    LdlibRenderer = Java.loadClass('com.lowdragmc.lowdraglib.jei.ModularUIRecipeCategory$2');
    LdlibSlot = Java.loadClass('com.lowdragmc.lowdraglib.gui.ingredient.IRecipeIngredientSlot');
  } catch (err) {
    console.warn('[gt_jei_tooltip_fix] Disabled, a required class is missing: ' + err);
    return;
  }

  var warned = false;

  // Returns the ldlib slot widget behind the JEI recipe slot under the mouse, or null.
  var ldlibSlotUnderMouse = function (screen, mc) {
    var window = mc.getWindow();
    var mouseX = mc.mouseHandler.xpos() * window.getGuiScaledWidth() / window.getScreenWidth();
    var mouseY = mc.mouseHandler.ypos() * window.getGuiScaledHeight() / window.getScreenHeight();
    var layout = screen.getRecipeLayoutUnderMouse(mouseX, mouseY).orElse(null);
    if (layout == null) return null;
    var slot = layout.getRecipeLayout().getRecipeSlotUnderMouse(mouseX, mouseY).orElse(null);
    if (slot == null || !(slot instanceof RecipeSlot)) return null;
    var displayed = slot.getDisplayedIngredient().orElse(null);
    if (displayed == null) return null;
    var overrides = Reflection.getPrivateField('rendererOverrides', RendererOverrides, slot, RecipeSlot);
    if (overrides == null) return null;
    var renderer = overrides.getIngredientRenderer(displayed.getType()).orElse(null);
    if (renderer == null || !(renderer instanceof LdlibRenderer)) return null;
    return Reflection.getPrivateField('val$slot', LdlibSlot, renderer, LdlibRenderer);
  };

  NativeEvents.onEvent(EventPriority.HIGH, GatherComponents, function (event) {
    var mc = Minecraft.getInstance();
    var screen = mc.screen;
    if (screen == null || !(screen instanceof RecipesGui)) return;
    try {
      var widget = ldlibSlotUnderMouse(screen, mc);
      if (widget == null) return;
      var lines = widget.getFullTooltipTexts();
      if (lines == null || lines.isEmpty()) return;
      var elements = event.getTooltipElements();
      // Skip if JEI or ldlib already supplied the lines (e.g. after a future GT/JEI fix).
      var first = String(lines.get(0).getString());
      for (var i = 0; i < elements.size(); i++) {
        var text = elements.get(i).left().orElse(null);
        if (text != null && String(text.getString()) === first) return;
      }
      for (var j = lines.size() - 1; j >= 0; j--) {
        elements.add(0, Either.left(lines.get(j)));
      }
    } catch (err) {
      if (!warned) {
        warned = true;
        console.warn('[gt_jei_tooltip_fix] Tooltip restore failed (further errors suppressed): ' + err);
      }
    }
  });
  receipt.phase = 'registered';
  console.info('[gt_jei_tooltip_fix] ' + JSON.stringify(receipt));
})();
