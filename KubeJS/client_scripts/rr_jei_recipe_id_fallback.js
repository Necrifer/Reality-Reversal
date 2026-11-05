// Show JEI's "Recipe ID" line for categories that don't supply one.
// JEI 19.70 only adds the line when IRecipeCategory.getRegistryName(recipe) is non-null; the default only handles
// RecipeHolder. Astral Sorcery 2.0.3.59 and NuclearCraft 1.3.7 register bare Recipe objects without an ID field, so
// this looks the hovered recipe up by identity in the client (and integrated server) recipe manager instead.
// Same conditions as JEI: output slots only, with advanced tooltips on or Shift held. Full client restart after edits.
(function () {
  var receipt = {phase: 'init', source_script: 'client_scripts:rr_jei_recipe_id_fallback.js'};
  // KubeJS's Rhino scopes `var` to the enclosing block, so the classes are declared before the try block.
  // java.lang.System is blocked by KubeJS's class filter; Date.now() and IdentityHashMap stand in for it.
  var EventPriority, GatherComponents, Either, Minecraft, Screen, Component, ChatFormatting, IdentityHashMap,
    RecipesGui;
  try {
    EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
    GatherComponents = Java.loadClass('net.neoforged.neoforge.client.event.RenderTooltipEvent$GatherComponents');
    Either = Java.loadClass('com.mojang.datafixers.util.Either');
    Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
    Screen = Java.loadClass('net.minecraft.client.gui.screens.Screen');
    Component = Java.loadClass('net.minecraft.network.chat.Component');
    ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting');
    IdentityHashMap = Java.loadClass('java.util.IdentityHashMap');
    RecipesGui = Java.loadClass('mezz.jei.gui.recipes.RecipesGui');
  } catch (err) {
    console.warn('[rr_jei_recipe_id_fallback] Disabled, a required class is missing: ' + err);
    return;
  }

  var warned = false;
  var DARK_GRAY = Number(ChatFormatting.DARK_GRAY.getColor());  // 0x555555, JEI's colour for this line
  var ids = new IdentityHashMap();   // Recipe object -> ResourceLocation
  var builtFor = new IdentityHashMap(); // recipe manager -> recipe count when the map was built
  var lastMissRebuild = 0;

  // Client level recipes (NuclearCraft reads these) plus the integrated server's, in case a plugin read those.
  var managers = function (mc) {
    var list = [];
    if (mc.level != null) list.push(mc.level.getRecipeManager());
    var server = mc.getSingleplayerServer();
    if (server != null) list.push(server.getRecipeManager());
    return list;
  };

  // True when the managers (by identity) or their recipe counts differ from the last build.
  var changed = function (list) {
    if (builtFor.size() !== list.length) return true;
    return list.some(function (m) {
      return !builtFor.containsKey(m) || builtFor.get(m) != m.getRecipes().size();
    });
  };

  var rebuild = function (list) {
    ids.clear();
    builtFor.clear();
    list.forEach(function (m) {
      var it = m.getRecipes().iterator();
      while (it.hasNext()) {
        var holder = it.next();
        ids.put(holder.value(), holder.id());
      }
      builtFor.put(m, m.getRecipes().size());
    });
  };

  var lookup = function (mc, recipe) {
    var list = managers(mc);
    if (changed(list)) rebuild(list);
    var id = ids.get(recipe);
    // A /reload can replace recipes without changing the counts; rebuild at most every 2 s on a miss.
    if (id == null && Date.now() - lastMissRebuild > 2000) {
      lastMissRebuild = Date.now();
      rebuild(list);
      id = ids.get(recipe);
    }
    return id;
  };

  NativeEvents.onEvent(EventPriority.LOW, GatherComponents, function (event) {
    var mc = Minecraft.getInstance();
    var screen = mc.screen;
    if (screen == null || !(screen instanceof RecipesGui)) return;
    if (!mc.options.advancedItemTooltips && !Screen.hasShiftDown()) return;
    try {
      var window = mc.getWindow();
      var mouseX = mc.mouseHandler.xpos() * window.getGuiScaledWidth() / window.getScreenWidth();
      var mouseY = mc.mouseHandler.ypos() * window.getGuiScaledHeight() / window.getScreenHeight();
      var layout = screen.getRecipeLayoutUnderMouse(mouseX, mouseY).orElse(null);
      if (layout == null) return;
      var drawable = layout.getRecipeLayout();
      var slot = drawable.getRecipeSlotUnderMouse(mouseX, mouseY).orElse(null);
      if (slot == null || String(slot.getRole().name()) !== 'OUTPUT') return;
      var recipe = drawable.getRecipe();
      // JEI already prints the line for these.
      if (drawable.getRecipeCategory().getRegistryName(recipe) != null) return;
      var id = lookup(mc, recipe);
      if (id == null) return;
      // withStyle(ChatFormatting) is ambiguous to Rhino (varargs overload), so set the same colour via withColor(int).
      event.getTooltipElements().add(Either.left(
        Component.translatable('jei.tooltip.recipe.id', Component.literal(String(id))).withColor(DARK_GRAY)));
    } catch (err) {
      if (!warned) {
        warned = true;
        console.warn('[rr_jei_recipe_id_fallback] Recipe ID lookup failed (further errors suppressed): ' + err);
      }
    }
  });
  receipt.phase = 'registered';
  console.info('[rr_jei_recipe_id_fallback] ' + JSON.stringify(receipt));
})();
