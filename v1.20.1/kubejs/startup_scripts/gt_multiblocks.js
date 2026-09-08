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
    .build()).
    workableCasingModel('naturesaura:block/tainted_gold_block','gtceu:block/multiblock/implosion_compressor');


    // Intended to clean up radiation!
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
