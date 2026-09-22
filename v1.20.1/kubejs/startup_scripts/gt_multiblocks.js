// Custom multis using Gregtech framework.

// ToDo: Clean up this mess of a code.
(function () {
var CleanserMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine');
var CleanserRunnable = Java.loadClass('java.lang.Runnable');
var Registries=Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
var ResourceLocation=Java.loadClass('net.minecraft.resources.ResourceLocation');
var Direction=Java.loadClass('com.gregtechceu.gtceu.api.pattern.util.RelativeDirection');
var ProgressDirection=Java.loadClass('com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection');
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
event.create('anomalous_condenser_recipes').category('multiblock').setEUIO('in').setMaxIOSize(1,1,0,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:anomalous_condenser'); });

event.create('dim_tear_recipes').category('multiblock').setEUIO('in').setMaxIOSize(1,1,1,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:dim_tear'); });

event.create('foundational_breaker_recipes').category('multiblock').setEUIO('in').setMaxIOSize(4,4,1,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:foundational_breaker'); });

event.create('corruption_containment_recipes').category('multiblock').setEUIO('in').setMaxIOSize(3,2,1,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:corruption_containment'); });

event.create('soul_capturer_recipes').category('multiblock').setEUIO('in').setMaxIOSize(1,1,0,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:soul_capturer'); });

event.create('corruption_prototype_recipes').category('multiblock').setEUIO('in').setMaxIOSize(0,0,0,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:radiation_cleanser'); });

// Supports both sculk energy generation and Draconic Fusion processing.
// Max I/O: item inputs, item outputs, fluid inputs, fluid outputs.
event.create('taint_replicant_recipes').category('multiblock').setEUIO('in').setEUIO('out').setMaxIOSize(3,1,0,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:taint_replicant'); });

event.create('mm_test_machine_recipes').category('multiblock').setEUIO('in').setMaxIOSize(1,1,1,0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, ProgressDirection.LEFT_TO_RIGHT)
    .setIconSupplier(function () { return Item.of('gtceu:mm_test_machine'); });
});

// All HV for now.

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('anomalous_condenser','multiblock')
    .langValue("Anomalous Condenser")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('anomalous_condenser_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('dimdoors:black_fabric')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
        .aisle("iSo","eBB","CCC")
        .aisle("AAA","BEB","CCC")
        .aisle("AAA","BBB","CCC")
    .where('S',Predicates.controller(Predicates.blocks(definition.get())))
    .where('A',Predicates.blocks("dimdoors:black_fabric"))
    .where('B',Predicates.blocks("projecte:red_matter_block"))
    .where('C',Predicates.blocks("dimdoors:solid_static"))
    .where('E',Predicates.fluids(Registries.FLUID.get(new ResourceLocation("dimdoors:eternal_fluid"))))
    .where('i',Predicates.blocks("gtceu:hv_input_bus"))
    .where('o',Predicates.blocks("gtceu:hv_output_bus"))
    .where('e',Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .build() )
    .workableCasingModel('dimdoors:block/black_fabric','gtceu:block/multiblock/implosion_compressor');

    event.create('foundational_breaker','multiblock')
    .langValue("Foundational Breaker")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('foundational_breaker_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('mysticalagriculture:machine_frame')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("BBSBB","AGGGA","AGMGA","AGGGA","AAAAA","     ")
    .aisle("BEEEB","T   B","T   B","T   B","AHHHA","     ")
    .aisle("BEJEB","T L B","C N C","T P B","AHQHA","  R  ")
    .aisle("BEEEB","T   B","T   B","T   B","AHHHA","     ")
    .aisle("BeBeB","AFFFA","AFMFA","AFFFA","AAAAA","     ")
    .where('S',Predicates.controller(Predicates.blocks(definition.get())))
    .where('A',Predicates.blocks("mysticalagriculture:machine_frame"))
    .where('B',Predicates.blocks("mna:decoration/transmuted_silver_block")
        .or(Predicates.blocks("gtceu:hv_input_bus"))
        .or(Predicates.blocks("gtceu:hv_output_bus"))
        .or(Predicates.blocks("gtceu:hv_input_hatch"))
        .or(Predicates.blocks("gtceu:hv_output_hatch"))
    )
    .where('C',Predicates.blocks("biomesoplenty:null_end_stone"))
    .where(' ',Predicates.any())
    .where('E',Predicates.blocks("ftbmaterials:stainless_steel_block"))
    .where('F',Predicates.blocks("megacells:sky_steel_block"))
    .where('G',Predicates.blocks("botania:elementium_block"))
    .where('H',Predicates.blocks("mna:decoration/arcane_stone"))
    .where('J',Predicates.blocks("minecraft:sculk"))
    .where('L',Predicates.blocks("iceandfire:dragonsteel_lightning_block"))
    .where('M',Predicates.blocks("biomesoplenty:null_block"))
    .where('N',Predicates.blocks("primalmagick:primalite_block"))
    .where('P',Predicates.blocks("naturesaura:sky_ingot_block"))
    .where('Q',Predicates.blocks("extrabotany:aerialite_block"))
    .where('R',Predicates.blocks("mekanism:laser"))
    .where('T',Predicates.blocks("malum:block_of_hallowed_gold"))
    .where('e',Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .build()).
    workableCasingModel('mysticalagriculture:block/machine_frame','gtceu:block/multiblock/implosion_compressor');

    event.create('corruption_containment','multiblock')
    .langValue("Corruption Containment Unit")
    .tier(GTValues.HV).rotationState(RotationState.NON_Y_AXIS)
    .recipeType('corruption_containment_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('astral_dimension:void_mycelium')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("VVVSVVV","       ","       ","       ","       ","       ","       ","       ")
    .aisle("VAAAAAV"," CCCCC ","       ","       ","       ","       ","       "," DDDDD ")
    .aisle("VAAAAAV"," CCCCC ","  EEE  ","       ","       ","       ","  FFF  "," DDDDD ")
    .aisle("eAAGAAV"," CCJCC ","  EJE  ","   J   ","   J   ","   J   ","  FJF  "," DDGDD ")
    .aisle("VAAAAAV"," CCCCC ","  EEE  ","       ","       ","       ","  FFF  "," DDDDD ")
    .aisle("VAAAAAV"," CCCCC ","       ","       ","       ","       ","       "," DDDDD ")
    .aisle("VAAAAAV","       ","       ","       ","       ","       ","       ","       ")
    .where('S',Predicates.controller(Predicates.blocks(definition.get())))
    .where('V',Predicates.blocks("astral_dimension:void_mycelium")
        .or(Predicates.blocks("gtceu:hv_input_bus"))
        .or(Predicates.blocks("gtceu:hv_output_bus"))
        .or(Predicates.blocks("gtceu:hv_input_hatch")))
    .where('A',Predicates.blocks("astral_dimension:void_mycelium"))
    .where(' ',Predicates.any())
    .where('C',Predicates.blocks("astral_dimension:corrupted_astral_stone"))
    .where('D',Predicates.blocks("astral_dimension:void_magma_block"))
    .where('E',Predicates.blocks("deeperdarker:sculk_stone"))
    .where('F',Predicates.blocks("minecraft:sculk"))
    .where('G',Predicates.blocks("callfromthedepth_:deep_energylight_stone"))
    .where('J',Predicates.fluids(Registries.FLUID.get(new ResourceLocation("spectrum:midnight_solution")))
        .or(Predicates.fluids(Registries.FLUID.get(new ResourceLocation("spectrum:flowing_midnight_solution")))))
    .where('e',Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .build()).
    workableCasingModel('astral_dimension:block/void_mycelium','gtceu:block/multiblock/implosion_compressor');

    event.create('soul_capturer','multiblock')
    .langValue("Soul Capturer")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('soul_capturer_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('malum:runewood_planks')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("ADHDM","     ")
    .aisle("DFBFD"," G G ")
    .aisle("DBJBD","E S P")
    .aisle("DFBFD"," G G ")
    .aisle("CeKeN","     ")
    .where('S',Predicates.controller(Predicates.blocks(definition.get())))
    .where('A',Predicates.blocks("naturesaura:tainted_gold_block"))
    .where('B',Predicates.blocks("malum:runewood_planks"))
    .where('D',Predicates.blocks("malum:runewood_planks")
        .or(Predicates.blocks("gtceu:hv_input_bus"))
        .or(Predicates.blocks("gtceu:hv_output_bus"))
        .or(Predicates.blocks("gtceu:hv_input_hatch")))
    .where('C',Predicates.blocks("naturesaura:sky_ingot_block"))
    .where(' ',Predicates.any())
    .where('E',Predicates.blocks("malum:runewood_totem_base"))
    .where('F',Predicates.blocks("malum:block_of_cthonic_gold"))
    .where('G',Predicates.blocks("malum:runewood_item_pedestal"))
    .where('H',Predicates.blocks("malum:block_of_brilliance"))
    .where('J',Predicates.blocks("malum:block_of_soulstone"))
    .where('K',Predicates.blocks("malum:block_of_soul_stained_steel"))
    .where('M',Predicates.blocks("naturesaura:infused_iron_block"))
    .where('N',Predicates.blocks("naturesaura:depth_ingot_block"))
    .where('P',Predicates.blocks("malum:soulwood_totem_base"))
    .where('i',Predicates.blocks("gtceu:hv_input_bus"))
    .where('o',Predicates.blocks("gtceu:hv_output_bus"))
    .where('e',Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .build())
    .workableCasingModel('naturesaura:block/tainted_gold_block','gtceu:block/multiblock/implosion_compressor');
    
    // EV recipes only!
    // Will be reused for all future dimensions.
    event.create('dim_tear','multiblock')
    // Maintain the portal on the server thread, including idle/reloaded machines.
    // The existing recipe's output item is the per-entry cost; no extra EU cost.
    .machine(function (holder) {
        var subscription = null;
        var reported = false;
        return new JavaAdapter(CleanserMachine, {
            onLoad: function () {
                this.super$onLoad();
                if (this.isRemote()) return;
                var machine = this;
                if (subscription) subscription.unsubscribe();
                subscription = this.subscribeServerTick(new CleanserRunnable({run: function () {
                    try {
                        if (Number(machine.getOffsetTimer()) % 20 !== 0) return;
                        if (typeof global.rrDimensionalRiftMachineTick === 'function') {
                            global.rrDimensionalRiftMachineTick(machine);
                        }
                    } catch (error) {
                        if (!reported) { console.error('[Dimensional Rift] tick bridge: ' + error); reported = true; }
                    }
                }}));
            },
            onUnload: function () {
                if (subscription) { subscription.unsubscribe(); subscription = null; }
                this.super$onUnload();
            }
        }, holder, []);
    })
    .langValue("Dimensional Rift Constructor")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('dim_tear_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('gtceu:heatproof_machine_casing')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("aaaSaaa", "cccdccc", "eeefeee", "eeefeee", "eeedeee", "eeegeee", "eeeeeee", "eeeeeee", "eeeheee")
    .aisle("aaaaaaa", "ceeeeec", "eeeeeee", "eeeeeee", "eeeeeee", "eeeieee", "eeeeeee", "eeeeeee", "eeeheee")
    .aisle("aaaaaaa", "cejjjec", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeheee")
    .aisle("aaaaaaa", "dejejed", "feeeeef", "feeeeef", "deeeeed", "giepeig", "eeeeeee", "eeeieee", "hhhhhhh")
    .aisle("aaaaaaa", "cejjjec", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeeeee", "eeeheee")
    .aisle("aaaaaaa", "ceeeeec", "eeeeeee", "eeeeeee", "eeeeeee", "eeeieee", "eeeeeee", "eeeeeee", "eeeheee")
    .aisle("aHaaaHa", "cccdccc", "eeefeee", "eeefeee", "eeedeee", "eeegeee", "eeeeeee", "eeeeeee", "eeeheee")
    .where("S", Predicates.controller(Predicates.blocks(definition.get())))
    .where("a", Predicates.blocks("gtceu:heatproof_machine_casing")
        .or(Predicates.blocks("gtceu:hv_input_bus"))
        .or(Predicates.blocks("gtceu:hv_output_bus"))
        .or(Predicates.blocks("gtceu:hv_input_hatch"))
        .or(Predicates.blocks("gtceu:hv_output_hatch")))
    .where("H", Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .where("c", Predicates.blocks("nuclearcraft:fission_reactor_glass"))
    .where("d", Predicates.blocks("gtceu:stable_machine_casing"))
    .where("e", Predicates.blocks("minecraft:air"))
    .where("p", Predicates.blocks("minecraft:air")
      .or(Predicates.blocks("kubejs:dimensional_rift_portal")))
    .where("f", Predicates.blocks("gtceu:stainless_steel_frame"))
    .where("g", Predicates.blocks("gtceu:titanium_firebox_casing"))
    .where("h", Predicates.blocks("gtceu:stainless_steel_gearbox"))
    .where("i", Predicates.blocks("mekanism:laser"))
    .where("j", Predicates.blocks("gtceu:frostproof_machine_casing"))
    .build())
    .workableCasingModel('gtceu:block/casings/solid/machine_casing_heatproof','gtceu:block/multiblock/implosion_compressor');

// Final multiblock for Chapter 3
    event.create('taint_replicant','multiblock')
    .langValue("Taint Replicant")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('taint_replicant_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('gtceu:stable_machine_casing')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("noSqr", "ccscc", "ccscc", "ccecc")
    .aisle("afffa", "cghgc", "cghgc", "cgggc")
    .aisle("afffa", "ihjhk", "ihlhk", "egmge")
    .aisle("afffa", "cghgc", "cghgc", "cgggc")
    .aisle("ababa", "ccdcc", "ccdcc", "ccecc")
    .where("S", Predicates.controller(Predicates.blocks(definition.get())))
    .where("a", Predicates.blocks("nuclearcraft:fission_reactor_casing"))
    // Either energy position can import EU for crafting or export generated EU.
    .where("b", Predicates.blocks("gtceu:hv_energy_output_hatch").or(Predicates.blocks("gtceu:hv_energy_input_hatch")))
    .where("c", Predicates.blocks("gtceu:stable_machine_casing"))
    .where("d", Predicates.blocks("gtceu:steel_frame"))
    .where("e", Predicates.blocks("spectrum:ender_glass"))
    .where("f", Predicates.blocks("gtceu:taint_block"))
    .where("g", Predicates.blocks("minecraft:air"))
    .where("h", Predicates.blocks("voidminers:rubetine_frame"))
    .where("i", Predicates.blocks("gtceu:invar_frame"))
    .where("j", Predicates.blocks("kubejs:breach"))
    .where("k", Predicates.blocks("gtceu:stainless_steel_frame"))
    .where("l", Predicates.blocks("callfromthedepth_:poisonwater"))
    .where("m", Predicates.blocks("primalmagick:mana_nexus"))
    .where("n", Predicates.blocks("gtceu:hv_input_bus"))
    .where("o", Predicates.blocks("gtceu:hv_input_hatch"))
    .where("q", Predicates.blocks("gtceu:hv_output_hatch"))
    .where("r", Predicates.blocks("gtceu:hv_output_bus"))
    .where("s", Predicates.blocks("gtceu:black_steel_frame"))
    .build())
    .workableCasingModel('gtceu:block/casings/solid/stable_machine_casing','gtceu:block/multiblock/implosion_compressor');

    // Intended to clean up radiation!
    // Yes I don't know what is happening here.
    event.create('radiation_cleanser','multiblock')
    // Empty-input recipes cannot be found in GT's ingredient-indexed RecipeDB.
    // Supply candidates after load, preserving native RecipeLogic and energy I/O.
    .machine(function (holder) {
      var subscription = null;
      return new JavaAdapter(CleanserMachine, {
        onLoad: function () {
          this.super$onLoad();
          if (this.isRemote()) return;
          var cleanser = this;
          if (subscription) subscription.unsubscribe();
          subscription = this.subscribeServerTick(new CleanserRunnable({run: function () {
            if (Number(cleanser.getOffsetTimer()) % 20 !== 0 || !cleanser.isFormed()) return;
            var logic = cleanser.getRecipeLogic();
            if (!logic.isWorkingEnabled() || !logic.isIdle() || !cleanser.isRecipeLogicAvailable()) return;
              var type = cleanser.getRecipeType();
            var recipes = type.getRecipesInCategory(type.getCategory()).iterator();
            while (recipes.hasNext()) {
              var recipe = recipes.next();
              if (String(recipe.id) === 'modpack:corruption_prototype_recipes/radiation_cleanser/energy_cleanup') {
                logic.checkMatchedRecipeAvailable(recipe);
                logic.updateTickSubscription();
                break;
              }
            }
          }}));
        },
        onUnload: function () {
          if (subscription) { subscription.unsubscribe(); subscription = null; }
          this.super$onUnload();
        }
      }, holder, []);
    })
    .langValue("Radiation Cleanser Prototype")
    .tier(GTValues.HV)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('corruption_prototype_recipes')
    .appearanceBlock(function () { return Registries.BLOCK.get(new ResourceLocation('bigreactors:reinforced_turbinecasing')); })
    .pattern(definition => FactoryBlockPattern.start(Direction.RIGHT, Direction.UP, Direction.BACK)
    .aisle("ASA", "AAA")
    .aisle("AcA", "AdA")
    .aisle("AbA", "AAA")
    .where('S',Predicates.controller(Predicates.blocks(definition.get())))
    .where("A", Predicates.blocks("bigreactors:reinforced_turbinecasing"))
    .where('d',Predicates.fluids(Registries.FLUID.get(new ResourceLocation("biomesoplenty:liquid_null"))))
    .where('b',Predicates.blocks("gtceu:hv_energy_input_hatch"))
    .where("c", Predicates.blocks("biomesoplenty:anomaly"))
    .build()).workableCasingModel('bigreactors:block/turbine/reinforced/casing_single','gtceu:block/multiblock/implosion_compressor');
});
})();

