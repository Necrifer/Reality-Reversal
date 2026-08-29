// Dedicated JEI documentation for every Gravital Singularity recipe. The
// executable MMR recipes are hidden because their bulk ingredients are drawn
// from the embedded ME Interface rather than a conventional MMR input bus.

const GRAVITAL_JEI_CATEGORY = 'modpack:gravital_singularity_me_processing'
const GRAVITAL_JEI_BULK_AMOUNT = 5000000
const GRAVITAL_JEI_TRIGGER_ITEM = 'minecraft:ender_eye'

// Keep this material list aligned with server_scripts/gravital_singularity.js
// and config/extendedcrafting/singularities.
const GRAVITAL_JEI_SINGULARITY_IDS = `
actinium adamant aluminum amethyst ancient_metal antimony apatite aquatic arcane arlemite astranite awakened_supremium baratol barium baronyte beryllium biosteel bismuth black_iron black_quartz black_steel blazegold blazium bloodstone blutonium boron boron_arsenide boron_nitride brass bronze cadmium calcium carbon_manganese carminite carobbiite cerium certus_quartz cesium chromium cinnabar coal coal_coke cobalt compressor conductive_alloy constantan copper corronium crystal_matrix crystallite crystaltine cursium cyanite dark_steel depth desh diamond dimensional_shard draconium draconium_awakened dragonsteel_fire dragonsteel_ice dragonsteel_lightning duratium dysprosium eclipsealloy elecanium electrum emberstone emerald end_steel ender_crystal ender_ingot enderite enderium energetic_alloy energite enhanced_ender_ingot enhanced_redstone_ingot enticing_crystal entro erbium europium extreme ferricore ferroboron fiery firmament_alloy fluix fluorite fluxite francium gadolinium gallium gemenyte ghastly ghost ghoulish glowstone gold graphite hafnium hallowed_gold hallowsteel hard_carbon heavy_metal hellstone hexium holmium hop_graphite hsla_steel ignitium imperium inanite indium inferium infinity infused_entro infused_iron insanite insanium invar iridium iron ironwood jade jewelyte knightmetal lanthanum lapis lapis_lazuli law lead lead_platinum lightium limonite lithium lithium_manganese_dioxide lucid ludicrite lumium lunar lutetium lyon magentite magnesium magnesium_diboride malignant_pewter manganese manganese_dioxide manganese_oxide meteorite mithril molybdenum mystite nadienite neodymium neon_meteorite neptunium netherite netherite_scrap neutron_star_fragment nichrome nickel niobium niobium_tin niobium_titanium niter olivine ornamyte ornium osmiridium osmium ouranium oxdrite palladium peridot pink_slime platinum plutonium polonium potassium praseodymium prescient_crystal primalite prismarine prometheum prosperity protactinium prudentium pulsar_fragment pulsating_alloy pulsating_crystal pyrium pyrolitic_carbon quartz radium realmite redstone redstone_alloy redstone_ingot refined_glowstone refined_obsidian resonating_ore rhenium rhodium rhodochrosite ridiculite rubidium ruby rupee ruthenium salt samarium sapphire scandium shibuichi shyregem shyrestone sic_sic_cmc signalum silicon silicon_carbide silver skeletal sky sky_bronze sky_osmium sky_steel sodium soul_stained_steel soularium soulium source stainless_steel steel steeleaf stellarium strontium stygian sulfur super_alloy supremium tainted_gold tantalum terbium tertium thallium tharsite the_ultimate thermoconducting thorium thulium tin tin_silver titanium tornium torridite tough_alloy tungsten tungsten_carbide uranium vanadium varsium vibrant_alloy vibrant_crystal villiaumite weather_crystal white_dwarf_fragment witherite wrought_iron yellorium ytterbium yttrium zinc zircaloy zirconium zirconium_molybdenum
`.trim().split(/\s+/)

const GRAVITAL_JEI_GEM_IDS = new Set(`
amethyst apatite black_quartz bloodstone boron_arsenide boron_nitride carminite carobbiite certus_quartz cinnabar crystallite diamond dimensional_shard emerald ender_crystal enticing_crystal entro fluix fluorite fluxite gemenyte jade jewelyte lapis niter olivine ornamyte peridot prescient_crystal prismarine pulsating_crystal quartz resonating_ore rhodochrosite ruby salt sapphire shyregem source sulfur vibrant_crystal villiaumite weather_crystal
`.trim().split(/\s+/))

const GRAVITAL_JEI_INGREDIENT_OVERRIDES = {
  coal: 'minecraft:coal',
  coal_coke: '#c:coal_coke',
  compressor: 'extendedcrafting:compressor',
  glowstone: 'minecraft:glowstone_dust',
  lapis_lazuli: 'minecraft:lapis_lazuli',
  redstone: 'minecraft:redstone'
}

function getGravitalJeiIngredient(singularityId) {
  if (GRAVITAL_JEI_INGREDIENT_OVERRIDES[singularityId] !== undefined) {
    return GRAVITAL_JEI_INGREDIENT_OVERRIDES[singularityId]
  }

  const materialType = GRAVITAL_JEI_GEM_IDS.has(singularityId) ? 'gems' : 'ingots'
  return `#c:${materialType}/${singularityId}`
}

function gravitalJeiRecipeHandled(recipe) {
  return recipe != null &&
    recipe.data != null &&
    recipe.data.type === 'gravital_singularity_me_processing'
}

function gravitalJeiBuildLayout(builder, recipe) {
  builder
    .addSlot('INPUT', 8, 19)
    .addItemStack(Item.of(GRAVITAL_JEI_TRIGGER_ITEM))
    .setSlotName('trigger')
    .addRichTooltipCallback((slot, tooltip) => {
      tooltip.add(Text.of('Insert this into the input bus.').gold())
      tooltip.add(Text.of('Once detected, the machine checks the connected ME network for input.').aqua())
    })

  const bulkInputSlot = builder
    .addSlot('INPUT', 52, 19)
    .setSlotName('me_bulk_input')
    .addRichTooltipCallback((slot, tooltip) => {
      tooltip.add(Text.of('Auto-detected from attached ME network. 5,000,000 required.').gold())
      tooltip.add(Text.of('Do not insert this through the MMR input bus.').red())
      tooltip.add(Text.of('100,000 Total RF, 10,000 RF/t required for this recipe.').aqua())
    })

  // A tag-backed ingredient cycles through every valid modded variant in JEI.
  Ingredient.of(recipe.data.ingredient).displayStacks.forEach(stack => {
    bulkInputSlot.addItemStack(stack)
  })

  builder
    .addSlot('OUTPUT', 158, 19)
    .addItemStack(Item.of(`extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:${recipe.data.singularityId}"]`))
    .setSlotName('output')
    .addRichTooltipCallback((slot, tooltip) => {
      tooltip.add(Text.of('Outputs as per normal in output bus.').gold())
    })
}

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(GRAVITAL_JEI_CATEGORY, category => {
    category
      .title('Gravital Singularity')
      .background(guiHelper.createBlankDrawable(192, 72))
      .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:nether_star')))
      .isRecipeHandled(recipe => gravitalJeiRecipeHandled(recipe))
      .handleLookup((builder, recipe, focuses) => {
        gravitalJeiBuildLayout(builder, recipe)
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  GRAVITAL_JEI_SINGULARITY_IDS.forEach(singularityId => {
    event.custom(GRAVITAL_JEI_CATEGORY).add({
      type: 'gravital_singularity_me_processing',
      singularityId: singularityId,
      ingredient: getGravitalJeiIngredient(singularityId),
      amount: GRAVITAL_JEI_BULK_AMOUNT
    })
  })
})
