// Nexus geometry through the installed GTCEu 8 native KubeJS builders.
// Original recipes, limits, special machine systems and block properties are omitted.
(function () {
  var data = JsonIO.read('config/reality_reversal/gtna_native_multiblocks.json');

  // JEI/EMI previews build a dense block grid (air included) per controller and cache it.
  // Previews stay off above this many grid positions; the Forge of the Gods family (~689k each) exceeds it.
  // Raise the limit or add IDs to forcePreview/forceNoPreview to adjust. Full restart required.
  var PREVIEW_VOLUME_LIMIT = 50000;
  var forcePreview = [];
  var forceNoPreview = [];
  function previewVolume(entry) {
    var total = 0;
    for (var index = 0; index < entry.aisles.length; index++) {
      var rows = entry.aisles[index];
      var width = 0;
      for (var y = 0; y < rows.length; y++) width = Math.max(width, String(rows[y]).length);
      total += rows.length * width * entry.repetitions[index][1];
    }
    return total;
  }
  function showsPreview(entry) {
    if (forceNoPreview.indexOf(entry.id) >= 0) return false;
    if (forcePreview.indexOf(entry.id) >= 0) return true;
    return previewVolume(entry) <= PREVIEW_VOLUME_LIMIT;
  }

  var predicates = {};
  function blockPredicate(id) {
    var Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var Resource = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var Predicates = Java.loadClass('com.gregtechceu.gtceu.api.multiblock.Predicates');
    var key = Resource.parse(String(id));
    if (!Registry.BLOCK.containsKey(key)) throw new Error('Missing Nexus structure block: ' + id);
    // Select the public Block overload explicitly; machine blocks also implement IMachineBlock.
    return Predicates['blocks(net.minecraft.world.level.block.Block[])'](Registry.BLOCK.get(key));
  }
  function predicate(value) {
    var key = JSON.stringify(value);
    if (predicates[key] != null) return predicates[key];
    var Predicates = Java.loadClass('com.gregtechceu.gtceu.api.multiblock.Predicates');
    var ids = typeof value === 'string' ? [value] : value.ingredient;
    if (ids == null || ids.length === 0) throw new Error('Empty Nexus structure predicate.');
    var result;
    if (ids.length === 1 && ids[0] === 'minecraft:air') result = Predicates.air();
    else {
      result = blockPredicate(ids[0]);
      for (var index = 1; index < ids.length; index++) result = result.or(blockPredicate(ids[index]));
    }
    predicates[key] = result;
    return result;
  }
  function pattern(entry, definition) {
    var Factory = Java.loadClass('com.gregtechceu.gtceu.api.multiblock.FactoryBlockPattern');
    var Direction = Java.loadClass('com.gregtechceu.gtceu.api.multiblock.util.RelativeDirection');
    var Predicates = Java.loadClass('com.gregtechceu.gtceu.api.multiblock.Predicates');
    var builder = Factory.start(Direction.valueOf(entry.directions[0]), Direction.valueOf(entry.directions[1]), Direction.valueOf(entry.directions[2]));
    for (var index = 0; index < entry.aisles.length; index++) {
      var rows = entry.aisles[index];
      var range = entry.repetitions[index];
      var nativeRows = [];
      for (var y = 0; y < rows.length; y++) nativeRows.push(String(rows[y]));
      builder.aisleRepeatable(range[0], range[1], nativeRows);
    }
    Object.keys(entry.keys).forEach(function (symbol) { builder.where(symbol, predicate(entry.keys[symbol])); });
    builder.where(' ', Predicates.any());
    builder.where('m', Predicates.controller(blockPredicate(String(definition.getId()))));
    return builder.build();
  }
  StartupEvents.registry('gtceu:machine', function (event) {
    var Resource = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var Rotation = Java.loadClass('com.gregtechceu.gtceu.api.machine.RotationState');
    var Component = Java.loadClass('net.minecraft.network.chat.Component');
    var RecipeTypes = Java.loadClass('com.gregtechceu.gtceu.data.recipe.GTRecipeTypes');
    var previewed = [];
    data.machines.forEach(function (entry) {
      var preview = showsPreview(entry);
      if (preview) previewed.push(entry.id);
      var builder = event.create(entry.id, 'multiblock')
        .langValue(entry.name)
        .rotationState(Rotation.NON_Y_AXIS)
        // First flag: in-world preview. Second flag: JEI/EMI preview page.
        .multiblockPreviewRenderer(true, preview)
        .recipeType(RecipeTypes.DUMMY_RECIPES)
        .noRecipeModifier()
        .pattern(function (definition) { return pattern(entry, definition); })
        .workableCasingModel(Resource.parse(entry.casing_texture), Resource.parse(entry.overlay_texture));
      entry.credits.forEach(function (line) { builder.tooltips(Component.literal(line)); });
    });
    console.info('[RR_GTNA_NATIVE_REGISTERED] ' + data.machines.length + ' native definitions; original sizes and repeatable families.');
    console.info('[RR_GTNA_XEI_PREVIEW] ' + previewed.length + '/' + data.machines.length + ' with recipe-viewer previews: ' + previewed.join(', '));
  });

  // GTCEu builds these machines with a Registrate whose default creative tab is the Search tab, which JEI ignores.
  // List them in the KubeJS tab (beside the GTNA blocks) as PARENT_TAB_ONLY, since Registrate already adds them to Search.
  StartupEvents.modifyCreativeTab('kubejs:tab', function (event) {
    var Visibility = Java.loadClass('net.minecraft.world.item.CreativeModeTab$TabVisibility');
    var stacks = data.machines.map(function (entry) { return Item.of(entry.id); });
    event.add(stacks, Visibility.PARENT_TAB_ONLY);
    console.info('[RR_GTNA_CREATIVE_TAB] Added ' + stacks.length + ' controllers to kubejs:tab (parent tab only).');
  });

})();
