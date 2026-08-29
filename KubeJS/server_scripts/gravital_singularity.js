// The starting is handwritten, but after this event.create section...
MMREvents.machines(event => {
  event.create("gravital_singularity")
       .name("Gravital Singularity")
       .color(0x6919A6)
       .structure(
        MMRStructureBuilder.create()
        .pattern(
        [[
        "aamaa","abbba","cbbba","abbba","aaaaa"],
        ["ddddd","dbbbd","dbebd","dbbbd","ddddd"],
        ["     "," bbb "," bgb "," bbb ","     "],
        ["     "," khl "," hjh "," hih ","     "],
        ["     ","     ","  j  ","     ","     "],
        ["     ","     ","  n  ","     ","     "],
        ["     ","     ","  j  ","     ","     "],
        ["  o  "," ooo ","ooooo"," ooo ","  o  "],
        ["     ","     ","  p  ","     ","     "]])
        .keys(
        {
          "a": "modular_machinery_reborn:casing_plain",
          "b": "extendedcrafting:black_iron_block",
          "c": [
            "extendedae:ex_interface",
            'ae2:interface',
            'extendedae:oversize_interface',
            'ae2lt:overloaded_interface',
            'megacells:mega_interface'
          ],
          "d": "dimdoors:unravelled_fabric",
          "e": "extendedcrafting:compressor[facing\u003dnorth]",
          "g": "oritech:machine_core_6[core_used\u003dfalse]",
          "h": "modular_machinery_reborn:casing_reinforced",
          "i": "#modular_machinery_reborn:energyinputhatch",
          "j": "mekanism:block_refined_obsidian",
          "k": "#modular_machinery_reborn:inputbus",
          "l": "#modular_machinery_reborn:outputbus",
          "n": "extendedcrafting:frame",
          "o": "extendedcrafting:crystaltine_block",
          "p": "oritech:adamant_block"
        }
        ))
    })

// Recipe-only AE2 bridge for bulk inputs. MMR treats the Interface in the
// structure as an ordinary block, so these functions access its ME grid
// directly instead of routing millions of items through an MMR input bus.
const $GravitalAEItemKey = Java.loadClass('appeng.api.stacks.AEItemKey')
const $GravitalActionable = Java.loadClass('appeng.api.config.Actionable')
const $GravitalIActionSource = Java.loadClass('appeng.api.networking.security.IActionSource')
const $GravitalBuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $GravitalRegistries = Java.loadClass('net.minecraft.core.registries.Registries')
const $GravitalBlockPos = Java.loadClass('net.minecraft.core.BlockPos')
const $GravitalResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $GravitalTagKey = Java.loadClass('net.minecraft.tags.TagKey')

const GRAVITAL_ME_INTERFACE_BLOCKS = [
  'ae2:interface',
  'extendedae:ex_interface',
  'ae2lt:overloaded_interface',
  'extendedae:oversize_interface',
  'megacells:mega_interface'
]

const cost = 5000000
const duration = 20
const energy = 100000
const energyPerTick = 10000
const igniter = 'minecraft:ender_eye'

// This list mirrors config/extendedcrafting/singularities. Most definitions
// use #c:ingots/<id>; gem IDs and the handful of special definitions below
// preserve their configured ingredients exactly.
const singularityID = `
actinium adamant aluminum amethyst ancient_metal antimony apatite aquatic arcane arlemite astranite awakened_supremium baratol barium baronyte beryllium biosteel bismuth black_iron black_quartz black_steel blazegold blazium bloodstone blutonium boron boron_arsenide boron_nitride brass bronze cadmium calcium carbon_manganese carminite carobbiite cerium certus_quartz cesium chromium cinnabar coal coal_coke cobalt compressor conductive_alloy constantan copper corronium crystal_matrix crystallite crystaltine cursium cyanite dark_steel depth desh diamond dimensional_shard draconium draconium_awakened dragonsteel_fire dragonsteel_ice dragonsteel_lightning duratium dysprosium eclipsealloy elecanium electrum emberstone emerald end_steel ender_crystal ender_ingot enderite enderium energetic_alloy energite enhanced_ender_ingot enhanced_redstone_ingot enticing_crystal entro erbium europium extreme ferricore ferroboron fiery firmament_alloy fluix fluorite fluxite francium gadolinium gallium gemenyte ghastly ghost ghoulish glowstone gold graphite hafnium hallowed_gold hallowsteel hard_carbon heavy_metal hellstone hexium holmium hop_graphite hsla_steel ignitium imperium inanite indium inferium infinity infused_entro infused_iron insanite insanium invar iridium iron ironwood jade jewelyte knightmetal lanthanum lapis lapis_lazuli law lead lead_platinum lightium limonite lithium lithium_manganese_dioxide lucid ludicrite lumium lunar lutetium lyon magentite magnesium magnesium_diboride malignant_pewter manganese manganese_dioxide manganese_oxide meteorite mithril molybdenum mystite nadienite neodymium neon_meteorite neptunium netherite netherite_scrap neutron_star_fragment nichrome nickel niobium niobium_tin niobium_titanium niter olivine ornamyte ornium osmiridium osmium ouranium oxdrite palladium peridot pink_slime platinum plutonium polonium potassium praseodymium prescient_crystal primalite prismarine prometheum prosperity protactinium prudentium pulsar_fragment pulsating_alloy pulsating_crystal pyrium pyrolitic_carbon quartz radium realmite redstone redstone_alloy redstone_ingot refined_glowstone refined_obsidian resonating_ore rhenium rhodium rhodochrosite ridiculite rubidium ruby rupee ruthenium salt samarium sapphire scandium shibuichi shyregem shyrestone sic_sic_cmc signalum silicon silicon_carbide silver skeletal sky sky_bronze sky_osmium sky_steel sodium soul_stained_steel soularium soulium source stainless_steel steel steeleaf stellarium strontium stygian sulfur super_alloy supremium tainted_gold tantalum terbium tertium thallium tharsite the_ultimate thermoconducting thorium thulium tin tin_silver titanium tornium torridite tough_alloy tungsten tungsten_carbide uranium vanadium varsium vibrant_alloy vibrant_crystal villiaumite weather_crystal white_dwarf_fragment witherite wrought_iron yellorium ytterbium yttrium zinc zircaloy zirconium zirconium_molybdenum
`.trim().split(/\s+/)

const gemID = new Set(`
amethyst apatite black_quartz bloodstone boron_arsenide boron_nitride carminite carobbiite certus_quartz cinnabar crystallite diamond dimensional_shard emerald ender_crystal enticing_crystal entro fluix fluorite fluxite gemenyte jade jewelyte lapis niter olivine ornamyte peridot prescient_crystal prismarine pulsating_crystal quartz resonating_ore rhodochrosite ruby salt sapphire shyregem source sulfur vibrant_crystal villiaumite weather_crystal
`.trim().split(/\s+/))

const exception = {
  coal: 'minecraft:coal',
  coal_coke: '#c:coal_coke',
  compressor: 'extendedcrafting:compressor',
  glowstone: 'minecraft:glowstone_dust',
  lapis_lazuli: 'minecraft:lapis_lazuli',
  redstone: 'minecraft:redstone'
}

function getGravitalIngredient(singularityId) {
  if (exception[singularityId] !== undefined) {
    return exception[singularityId]
  }

  const materialType = gemID.has(singularityId) ? 'gems' : 'ingots'
  return `#c:${materialType}/${singularityId}`
}

// Recipe eligibility can be checked every tick. Limit diagnostics to one
// message per controller every five seconds unless a recipe actually starts.
const GRAVITAL_DEBUG_INTERVAL_MS = 5000
const GRAVITAL_DEBUG_LAST_TIME = {}

function logGravitalMeDebug(event, message, force) {
  const controller = event.getTile()
  const controllerPos = controller.getBlockPos()
  const controllerKey = controllerPos.asLong().toString()
  const currentTime = Date.now()
  const lastLog = GRAVITAL_DEBUG_LAST_TIME[controllerKey]

  if (!force && lastLog !== undefined && currentTime - lastLog < GRAVITAL_DEBUG_INTERVAL_MS) {
    return
  }

  GRAVITAL_DEBUG_LAST_TIME[controllerKey] = currentTime
  console.info(`[Gravital ME Debug] controller=${controllerPos.toString()} ${message}`)
}

function getGravitalMeInventory(event) {
  const controller = event.getTile()
  const level = controller.getLevel()
  const controllerPos = controller.getBlockPos()
  const controllerFacing = String(controller.getFacing())

  // In the unrotated pattern, c (the Extended Interface) is at (-2, 0, 2)
  // relative to m (the controller). Apply the same horizontal rotations used
  // by MMR's Pattern class, then construct the absolute position directly.
  let interfaceOffsetX = -2
  let interfaceOffsetZ = 2
  if (controllerFacing === 'east') {
    interfaceOffsetX = -2
    interfaceOffsetZ = -2
  } else if (controllerFacing === 'south') {
    interfaceOffsetX = 2
    interfaceOffsetZ = -2
  } else if (controllerFacing === 'west') {
    interfaceOffsetX = 2
    interfaceOffsetZ = 2
  }

  const worldPos = new $GravitalBlockPos(
    controllerPos.getX() + interfaceOffsetX,
    controllerPos.getY(),
    controllerPos.getZ() + interfaceOffsetZ
  )
  const blockId = String($GravitalBuiltInRegistries.BLOCK
    .getKey(level.getBlockState(worldPos).getBlock()))

  if (GRAVITAL_ME_INTERFACE_BLOCKS.indexOf(blockId) === -1) {
    return {
      inventory: null,
      source: null,
      status: `expected an AE2 Interface at ${worldPos.toString()} for facing=${controllerFacing}, but found ${blockId}`
    }
  }

  const interfaceTile = level.getBlockEntity(worldPos)
  if (interfaceTile == null) {
    return {
      inventory: null,
      source: null,
      status: `${blockId} at ${worldPos.toString()} has no block entity`
    }
  }

  const mainNode = interfaceTile.getMainNode()
  if (mainNode == null) {
    return {
      inventory: null,
      source: null,
      status: `${blockId} at ${worldPos.toString()} has no AE2 main node`
    }
  }

  const grid = mainNode.getGrid()
  if (grid == null) {
    return {
      inventory: null,
      source: null,
      status: `${blockId} at ${worldPos.toString()} is present but its AE2 grid is offline`
    }
  }

  return {
    inventory: grid.getStorageService().getInventory(),
    source: $GravitalIActionSource.ofMachine(interfaceTile),
    status: `${blockId} at ${worldPos.toString()} is connected to an online AE2 grid`
  }
}

function forEachGravitalIngredientItem(ingredientSpec, consumer) {
  if (!ingredientSpec.startsWith('#')) {
    consumer(Item.of(ingredientSpec).getItem())
    return
  }

  const tagLocation = $GravitalResourceLocation.parse(ingredientSpec.substring(1))
  const tagKey = $GravitalTagKey.create($GravitalRegistries.ITEM, tagLocation)
  const tag = $GravitalBuiltInRegistries.ITEM.getTag(tagKey)

  if (!tag.isPresent()) {
    return
  }

  const iterator = tag.get().iterator()
  while (iterator.hasNext()) {
    consumer(iterator.next().value())
  }
}

function getGravitalAEItemKey(item) {
  // ItemStack also implements ItemLike in this Minecraft version, so changing
  // the argument alone cannot resolve AE2's two overloads. Rhino's explicit
  // Java signature syntax selects of(ItemLike) without runtime guessing.
  return $GravitalAEItemKey[
    'of(net.minecraft.world.level.ItemLike)'
  ](item)
}

function getGravitalMeIngredientAmount(me, ingredientSpec, amount) {
  let available = 0

  forEachGravitalIngredientItem(ingredientSpec, item => {
    if (available >= amount) return

    const itemKey = getGravitalAEItemKey(item)
    available += Number(me.inventory.extract(
      itemKey,
      amount - available,
      $GravitalActionable.SIMULATE,
      me.source
    ))
  })

  return available
}

function consumeGravitalMeIngredient(me, ingredientSpec, amount) {
  let extractedTotal = 0
  const extractedEntries = []

  forEachGravitalIngredientItem(ingredientSpec, item => {
    if (extractedTotal >= amount) return

    const itemKey = getGravitalAEItemKey(item)
    const extracted = Number(me.inventory.extract(
      itemKey,
      amount - extractedTotal,
      $GravitalActionable.MODULATE,
      me.source
    ))

    if (extracted > 0) {
      extractedEntries.push({ key: itemKey, amount: extracted })
      extractedTotal += extracted
    }
  })

  if (extractedTotal !== amount) {
    extractedEntries.forEach(entry => {
      me.inventory.insert(
        entry.key,
        entry.amount,
        $GravitalActionable.MODULATE,
        me.source
      )
    })
  }

  return extractedTotal
}

function checkGravitalMeBulkItem(event) {
  const ingredientSpec = event.get(0)
  const amount = parseInt(event.get(1), 10)
  const me = getGravitalMeInventory(event)

  if (me.inventory == null) {
    logGravitalMeDebug(event, `eligibility failed: ${me.status}`, false)
    event.error('No online ME Interface was found in the formed structure')
    return
  }

  const available = getGravitalMeIngredientAmount(me, ingredientSpec, amount)

  logGravitalMeDebug(
    event,
    `eligibility reached; ${me.status}; ingredient=${ingredientSpec}; available=${available}; required=${amount}`,
    false
  )

  if (available < amount) {
    event.error(`ME network requires ${amount} items matching ${ingredientSpec}; only ${available} are available`)
  }
}

function consumeGravitalMeBulkItem(event) {
  const ingredientSpec = event.get(0)
  const amount = parseInt(event.get(1), 10)
  const me = getGravitalMeInventory(event)

  if (me.inventory == null) {
    logGravitalMeDebug(event, `recipe start failed: ${me.status}`, true)
    event.error('The ME Interface went offline before the recipe could start')
    return
  }

  const available = getGravitalMeIngredientAmount(me, ingredientSpec, amount)

  if (available < amount) {
    logGravitalMeDebug(
      event,
      `recipe start failed; ${me.status}; ingredient=${ingredientSpec}; available=${available}; required=${amount}`,
      true
    )
    event.error(`ME network requires ${amount} items matching ${ingredientSpec}; only ${available} are available`)
    return
  }

  const extracted = consumeGravitalMeIngredient(me, ingredientSpec, amount)

  if (extracted !== amount) {
    logGravitalMeDebug(
      event,
      `recipe start extraction mismatch; ingredient=${ingredientSpec}; expected=${amount}; extracted=${extracted}; partial extraction refunded`,
      true
    )
    event.error(`ME extraction changed during recipe start: expected ${amount}, extracted ${extracted}`)
    return
  }

  logGravitalMeDebug(
    event,
    `recipe started; ${me.status}; ingredient=${ingredientSpec}; extracted=${extracted}`,
    true
  )
}

MMREvents.recipeFunction('gravital_me_has_bulk_item', event => {
  try {
    checkGravitalMeBulkItem(event)
  } catch (error) {
    logGravitalMeDebug(event, `eligibility check failed closed: ${error}`, false)
    event.error('The Gravital ME eligibility check failed; recipe blocked to prevent an incorrect output')
  }
})

MMREvents.recipeFunction('gravital_me_consume_bulk_item', event => {
  try {
    consumeGravitalMeBulkItem(event)
  } catch (error) {
    logGravitalMeDebug(event, `recipe start failed closed: ${error}`, true)
    event.error('The Gravital ME extraction check failed; recipe blocked to prevent an incorrect output')
  }
})

// Every configured Extended Crafting singularity is produced from five million
// of its configured material, consumed directly from the connected ME network.
ServerEvents.recipes(event => {
  singularityID.forEach(singularityId => {
    const ingredientSpec = getGravitalIngredient(singularityId)

    event.recipes.modular_machinery_reborn
      .machine_recipe('minecraft:gravital_singularity', duration)
      .requireEnergy(energy)
      .requireEnergyPerTick(energyPerTick)
      .requireItem(igniter)
      .requireFunctionToStart(
        'gravital_me_has_bulk_item',
        ingredientSpec,
        String(cost)
      )
      .requireFunctionOnStart(
        'gravital_me_consume_bulk_item',
        ingredientSpec,
        String(cost)
      )
      .produceItem(`extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:${singularityId}"]`)
      // The executable recipe remains available to the machine, but its generic
      // MMR JEI entry is replaced by client_scripts/gravital_singularity_jei.js.
      .hide()
      .id(`modpack:gravital_singularity/${singularityId}`)
  })
})
