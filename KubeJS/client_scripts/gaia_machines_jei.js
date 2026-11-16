// Gaia Dimension 2.2.288 registers no JEI catalysts for its Restructurer and Purifier,
// so their pages show no machine. Neither KubeJS nor KubeJEI can add catalysts to another
// mod's category, so this appends them to JEI 19's built recipe manager during
// addInformation (JEI builds catalysts before recipes). Info notes explain the fuel rules.
;(function () {
    var CATALYSTS = {
        'gaiadimension:restructurer': ['gaiadimension:restructuring', 'gaiadimension:gold_fuel', 'gaiadimension:shine_fuel'],
        'gaiadimension:purifier': ['gaiadimension:purifying', 'gaiadimension:gold_fuel', 'gaiadimension:shine_fuel', 'gaiadimension:nulling_fuel']
    };
    var NOTES = {
        'gaiadimension:restructurer': [
            'Needs BOTH fuel slots filled to run: a Glittering fuel (left) and a Shining fuel (right).',
            'Each time it lights it uses 1 of each fuel, and burns for the AVERAGE of the two fuel values.',
            'Each recipe takes 200 ticks (10 s) and gives a main result plus a byproduct (bottom slots).',
            'It only lights when the input has a recipe and both output slots have room.',
            'The "Burns ~N items" figure on the fuel pages assumes both fuels are equal.'
        ],
        'gaiadimension:purifier': [
            'Needs ALL THREE fuel slots filled to run: Glittering (bottom left), Shining (bottom right) and Nulling (centre).',
            'Each time it lights it uses 1 of each fuel, and burns for the AVERAGE of the three fuel values.',
            'Each recipe takes 200 ticks (10 s) and gives a main result plus a byproduct (bottom slots).',
            'It only lights when the input has a recipe and both output slots have room.'
        ]
    };
    var warned = {};
    function warnOnce(key, message) {
        if (warned[key]) return;
        warned[key] = true;
        console.warn('[gaia_machines_jei] ' + message);
    }

    function addCatalysts(event) {
        var Reflection = Java.loadClass('net.yxiao233.appliedjs.utils.ReflectionUtil');
        var RecipeRegistrationApi = Java.loadClass('mezz.jei.api.registration.IRecipeRegistration');
        var RecipeRegistration = Java.loadClass('mezz.jei.library.load.registration.RecipeRegistration');
        var RecipeManager = Java.loadClass('mezz.jei.library.recipes.RecipeManagerInternal');
        var RecipeTypeDataMap = Java.loadClass('mezz.jei.library.recipes.collect.RecipeTypeDataMap');
        var RecipeTypeData = Java.loadClass('mezz.jei.library.recipes.collect.RecipeTypeData');
        var RecipeIngredientRole = Java.loadClass('mezz.jei.api.recipe.RecipeIngredientRole');
        var VanillaTypes = Java.loadClass('mezz.jei.api.constants.VanillaTypes');
        var EnumMap = Java.loadClass('java.util.EnumMap');
        var List = Java.loadClass('java.util.List');
        var ArrayList = Java.loadClass('java.util.ArrayList');
        var Collections = Java.loadClass('java.util.Collections');
        var Consumer = Java.loadClass('java.util.function.Consumer');
        var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
        var InformationEvent = Java.loadClass('dev.latvian.mods.kubejs.integration.jei.JEIAddInformationKubeEvent');

        var registration = Reflection.getPrivateField('registration', RecipeRegistrationApi, event, InformationEvent);
        var manager = Reflection.getPrivateField('recipeManager', RecipeManager, registration, RecipeRegistration);
        var dataMap = Reflection.getPrivateField('recipeTypeDataMap', RecipeTypeDataMap, manager, RecipeManager);
        var roleMaps = Reflection.getPrivateField('recipeMaps', EnumMap, manager, RecipeManager);
        if (manager == null || dataMap == null || roleMaps == null) throw new Error('JEI recipe manager is unavailable');
        var catalystMap = roleMaps.get(RecipeIngredientRole.CATALYST);
        var ingredients = registration.getIngredientManager();
        var added = 0;

        Object.keys(CATALYSTS).forEach(function (blockId) {
            var stack = Item.of(blockId);
            if (stack.isEmpty()) { warnOnce('item:' + blockId, 'Missing item ' + blockId); return; }
            // 3-argument overload: the 2-argument forms are ambiguous to Rhino.
            var typed = ingredients.createTypedIngredient(VanillaTypes.ITEM_STACK, stack, true).orElse(null);
            if (typed == null) { warnOnce('typed:' + blockId, 'JEI has no ingredient for ' + blockId); return; }
            var group = new JavaAdapter(Consumer, { accept: function (acceptor) { acceptor.addTypedIngredient(typed); } });

            CATALYSTS[blockId].forEach(function (typeId) {
                try {
                    var type = manager.getRecipeType(ResourceLocation.parse(typeId)).orElse(null);
                    if (type == null) { warnOnce('type:' + typeId, 'JEI category not found: ' + typeId); return; }
                    // Skip if already a catalyst (e.g. a future Gaia update adds it itself).
                    if (catalystMap.isCatalystForRecipeCategory(type, typed)) return;
                    var data = dataMap.get(type);
                    var list = new ArrayList(data.getRecipeCategoryCatalysts());
                    list.add(group);
                    // The catalyst row on the category page.
                    Reflection.setPrivateField('recipeCategoryCatalysts', List, data, RecipeTypeData, Collections.unmodifiableList(list));
                    // Lets "U" (uses) on the block open this category.
                    catalystMap.addCatalystForCategory(type, typed);
                    added++;
                } catch (error) {
                    warnOnce('add:' + blockId + typeId, 'Could not add ' + blockId + ' to ' + typeId + ': ' + error);
                }
            });
        });
        console.info('[gaia_machines_jei] Added ' + added + ' catalyst links');
    }

    RecipeViewerEvents.addInformation('item', function (event) {
        // This event also runs for EMI, which has no JEI recipe manager.
        var InformationEvent = Java.loadClass('dev.latvian.mods.kubejs.integration.jei.JEIAddInformationKubeEvent');
        if (event instanceof InformationEvent) {
            try {
                addCatalysts(event);
            } catch (error) {
                warnOnce('catalysts', 'Catalysts not added: ' + error);
            }
        }
        Object.keys(NOTES).forEach(function (blockId) {
            event.add(blockId, NOTES[blockId].map(function (line) { return Text.of(line); }));
        });
    });
})();
