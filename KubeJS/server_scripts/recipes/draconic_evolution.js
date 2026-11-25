// Draconic Evolution fusion crafting through the KubeJS DE addon (kubejsde 1.1.0).
// The addon schema takes positional args: (catalyst, ingredients, result, techLevel, totalEnergy).
// Ingredients:
//   'mod:item'          consumed
//   ['mod:item', false] kept (not consumed)
//   exactFusion({...})  consumed, matched with an ingredient JSON (component/NBT matching)
// Plain item strings are looked up in the item registry by the addon; a mistyped id silently
// becomes an empty slot, so check new recipes in JEI after a /reload.
ServerEvents.recipes(event => {
  const JsonOps = Java.loadClass('com.mojang.serialization.JsonOps')
  const JsonParser = Java.loadClass('com.google.gson.JsonParser')
  const Ingredient = Java.loadClass('net.minecraft.world.item.crafting.Ingredient')
  const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
  const FusionIngredient = Java.loadClass('com.brandon3055.draconicevolution.api.crafting.FusionRecipe$FusionIngredient')
  const RegistryOps = Java.loadClass('net.minecraft.resources.RegistryOps')
  // Registry-aware JSON ops: item fields ("items", "id") need registry lookup to decode.
  const JSON_OPS = RegistryOps.create(JsonOps.INSTANCE, event.registries.access())

  // Parse ingredient/item JSON with Minecraft's own codecs, so component matching
  // (neoforge:components, productivebees:component) and result components are kept exactly.
  function parseWith(codec, json) {
    return codec.parse(JSON_OPS, JsonParser.parseString(JSON.stringify(json))).getOrThrow()
  }
  function exact(json) { return parseWith(Ingredient.CODEC, json) }
  function exactFusion(json, consume) { return new FusionIngredient(exact(json), consume !== false) }
  function stack(json) { return parseWith(ItemStack.CODEC, json) }
  // Common component ingredients
  function singularity(id) {
    return exactFusion({type: 'neoforge:components', items: 'extendedcrafting:singularity',
      components: {'extendedcrafting:singularity_id': id}, strict: true})
  }
  function beeEgg(beeType) {
    return {type: 'productivebees:component', items: 'productivebees:spawn_egg_configurable_bee',
      components: {'minecraft:entity_data': {type: beeType, id: 'productivebees:configurable_bee'}}}
  }
// JSON metadata are, eternally, the worst things to code for.
// What even is happening above, I don't even know anymore.
  function dragon(catalyst, inputs, output, tier, energy) {
    return event.recipes.draconicevolution.fusion_crafting(catalyst, inputs, output, tier, energy)
  }

  event.remove({id: 'draconicevolution:machines/awakened_crafting_injector'})
  event.remove({id: 'draconicevolution:machines/wyvern_crafting_injector'})

  // Wyvern Crafting Injector
  dragon('draconicevolution:basic_crafting_injector', [
    'draconicevolution:draconium_block', 'draconicevolution:draconium_core', 'draconicevolution:wyvern_core',
    'draconicevolution:draconium_core', 'ad_astra:desh_ingot', 'ad_astra:desh_ingot', 'bigreactors:ludicrite_ingot',
    'kubejs:stellarium_ingot', 'kubejs:stellarium_ingot', 'malum:hallowed_gold_ingot'
  ], 'draconicevolution:wyvern_crafting_injector', 'draconium', 2000000)

  // Neutron Compressor
  dragon('gtceu:hv_machine_hull', [
    'draconicevolution:draconium_block', singularity('extendedcrafting:lapis'), 'draconicevolution:wyvern_core',
    singularity('extendedcrafting:emerald'), singularity('extendedcrafting:copper'), 'extendedcrafting:compressor',
    'extendedcompressor:extended_compressor', 'gtceu:taint_ingot', 'gtceu:taint_ingot', 'gtceu:hv_compressor'
  ], 'avaritia:neutron_compressor', 'draconium', 1000000)

  // Fire Dragonsteel Block x5
  var fireDragonsteelComb = exactFusion({type: 'neoforge:components', items: 'productivebees:configurable_comb',
    components: {'productivebees:bee_type': 'productivebees:fire_dragonsteel'}, strict: true})
  dragon('draconicevolution:awakened_draconium_block', [
    'draconicevolution:wyvern_core', 'malum:living_flesh', 'draconicevolution:wyvern_core',
    fireDragonsteelComb, fireDragonsteelComb, 'gtceu:hot_silicon_ingot', 'botania:rune_fire', 'botania:rune_summer'
  ], Item.of('iceandfire:dragonsteel_fire_block', 5), 'wyvern', 3000000)

  // Awakened Crafting Injector
  dragon('draconicevolution:wyvern_crafting_injector', [
    'draconicevolution:awakened_core', 'draconicevolution:awakened_draconium_block', 'draconicevolution:awakened_core',
    'draconicevolution:awakened_draconium_dust', 'draconicevolution:awakened_draconium_dust', 'kubejs:law_ingot',
    'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence'
  ], 'draconicevolution:awakened_crafting_injector', 'wyvern', 3000000)

  // Awakened bee egg -> Chaos bee egg
  dragon(exact(beeEgg('productivebees:awakened')), [
    'draconicevolution:awakened_core', 'draconicevolution:draconic_energy_core', 'draconicevolution:awakened_core',
    'draconicevolution:draconic_energy_core', 'draconicevolution:medium_chaos_frag', 'kubejs:seeneyes2',
    singularity('extendedcrafting:draconium'),
    exactFusion({type: 'productivebees:component', items: 'productivebees:configurable_honeycomb',
      components: {'productivebees:bee_type': 'productivebees:awakened'}}),
    'mysticalagriculture:awakened_draconium_essence', 'gtceu:taint_ingot'
  ], stack({id: 'productivebees:spawn_egg_configurable_bee', count: 1,
    components: {'minecraft:entity_data': {type: 'productivebees:chaos', id: 'productivebees:configurable_bee'}}}),
  'draconic', 10000000)

  // Witherite Block x6
  dragon('cataclysm:witherite_block', [
    'minecraft:wither_rose', 'aoa3:wither_rune', 'minecraft:wither_rose', 'aoa3:wither_rune', 'kubejs:seeneyes2',
    'gtceu:chaos_infused_ingot', 'gtceu:chaos_infused_ingot', 'astralsorcery:vivid_powder', 'astralsorcery:vivid_powder',
    'gtceu:nether_star_lens', 'gtceu:nether_star_lens', 'kubejs:seeneyes2', 'kubejs:seeneyes2'
  ], Item.of('cataclysm:witherite_block', 6), 'draconic', 10000000)

  // Chaos Infused block
  dragon('draconicevolution:large_chaos_frag', [
    'draconicevolution:awakened_core', 'botania:black_hole_talisman', 'nuclearcraft:fuel_californium_lecf_249',
    'draconicevolution:chaos_shard', 'iceandfire:dragonsteel_lightning_block', 'iceandfire:dragonsteel_ice_block',
    'iceandfire:dragonsteel_fire_block', 'projecte:black_hole_band', 'primalmagick:ambrosia_supreme_void'
  ], 'kubejs:chaos_infused', 'draconic', 10000000)

  // Disabled: Chaos bee egg -> Fire Dragonsteel bee egg (kept from the original file, not registered)
  // dragon(exact(beeEgg('productivebees:chaos')), [
  //   'draconicevolution:awakened_core', 'botania:black_hole_talisman', 'draconicevolution:awakened_core',
  //   'nuclearcraft:fuel_californium_lecf_249', 'draconicevolution:chaos_shard', 'iceandfire:dragonsteel_lightning_block',
  //   'iceandfire:dragonsteel_ice_block', 'iceandfire:dragonsteel_fire_block', 'projecte:black_hole_band',
  //   'primalmagick:ambrosia_supreme_void'
  // ], stack({id: 'productivebees:spawn_egg_configurable_bee', count: 1,
  //   components: {'minecraft:entity_data': {type: 'productivebees:fire_dragonsteel', id: 'productivebees:configurable_bee'}}}),
  // 'draconic', 10000000)
})
