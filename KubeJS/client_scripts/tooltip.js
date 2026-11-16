// Item tooltips. The TEXT lives in kubejs/assets/realityreversal/lang/en_us.json:
//   tooltip.realityreversal.<namespace>.<item>.<line number>
//   e.g. 'dimdoors:reality_sponge' line 1 -> "tooltip.realityreversal.dimdoors.reality_sponge.1"
// This file only lists which items have tooltips and each line's style: one entry per line,
// colour and/or 'bold' separated by a space, '' for plain white. To add a tooltip, add the
// item here and its text key(s) to en_us.json.
;(function () {
  const PREFIX = 'tooltip.realityreversal.'
  // Builds the translated lines for one table entry.
  const lines = (prefix, id, styles) => styles.map((style, index) => {
    let text = Text.translate(prefix + id.replace(':', '.') + '.' + (index + 1))
    style.split(' ').forEach(word => {
      if (word === 'bold') text = text.bold(true)
      else if (word !== '') text = text[word]()
    })
    return text
  })

  const tooltips = {
    'dimdoors:tesselating_loom': ['red bold'],
    'oritech:foundry_block': ['green'],
    'excessive_utilities:rainbow_stone': ['lightPurple'],
    'extendedcrafting:basic_table': ['green'],
    'projecte:transmutation_table': ['blue'],
    'immersiveengineering:cokebrick': ['green'],
    'immersiveengineering:hammer': ['gray'],
    'dimdoors:reality_sponge': ['green'],
    'immersiveengineering:coal_coke': ['gold'],
    'immersiveengineering:ingot_hop_graphite': ['blue', 'gold'],
    'divinerpg:ice_stone': ['green'],
    'divinerpg:snow_globe': ['white'],
    'ae2:inscriber': ['green'],
    'aether:aether_portal_frame': ['green'],
    'castle_in_the_sky:laputa_core_orb': ['green', 'darkRed', 'gold'],
    'castle_in_the_sky:levitation_stone': ['green'],
    'divinerpg:arcana_portal_frame': ['green'],
    'kubejs:stellarium_ingot': ['gold'],
    'voidminersremastered:rubetine': ['darkPurple'],
    'voidminersremastered:rubetine_miner': ['darkRed', 'darkGreen'],
    'mbtool:mbtool': ['blue'],
    'malum:wicked_spirit': ['green', 'blue'],
    'aether:sentry_stone': ['gold'],
    'mysticalagriculture:master_infusion_crystal': ['gold'],
    'dimdoors:clod': ['green'],
    'dimdoors:amalgam_lump': ['green'],
    'extendedcompressor:extended_compressor': ['green'],
    'mmcr:anomalous_condenser_controller': [''],
    'naturesaura:bottle_two_the_rebottling': ['green', 'blue'],
    'primalmagick:grimoire_creative': ['green', 'darkRed'],
    'minecraft:smithing_table': ['green'],
    'astral_dimension:glowing_obsidian': ['green'],
    'astral_dimension:burning_shards': ['green'],
    'gtceu:hv_mixer': ['green', 'green'],
    'gtceu:gallium_dust': ['green', 'green'],
    'gtceu:aluminium_dust': ['gold'],
    'ad_astra:raw_desh': ['gold'],
    'mmcr:dim_tear_controller': ['blue'],
    'kubejs:containment_failure': ['blue', 'green'],
    'gtceu:kanthal_coil_block': ['green'],
    'kubejs:taint_ore': ['green', 'green'],
    'aether:golden_oak_log': ['gold', 'gold', 'gold'],
    'cataclysm:flame_eye': ['red', 'green'],
    'astral_dimension:astral_eye': ['blue', 'red'],
    'cataclysm:burning_ashes': [''],
    'cataclysm:ignitium_ingot': ['black', 'gold'],
    'bedrockminer:bedrock_chunk': ['green'],
    'dimdoors:leak_bucket': [''],
    'draconicevolution:dragon_heart': ['green'],
    'kubejs:chaos_infused': ['red'],
    'naturesaura:birth_spirit': [''],
    'gtceu:tin_alloy_dust': ['green'],
    'gtceu:rubber_plate': ['blue'],
    'kubejs:sol_astral_ingot': ['blue', 'gold'],
    'gaiadimension:glint_and_gold': ['blue', 'gold'],
    'gtceu:gtna_chronomatic_glass_ingot': ['green', 'green'],
    'spectrum:midnight_aberration': ['green', 'green'],
    'cataclysm:mech_eye': ['green', 'blue'],
    'mmcr:biomic_terraformer_controller': ['green', 'green'],
  }

  // Extended Crafting singularities, keyed by singularity ID (all share one item).
  // Keys: tooltip.realityreversal.singularity.<namespace>.<singularity>.<line number>
  const singularityTooltips = {
    'extendedcrafting:gold': ['green'],
  }

  // Inspect the hovered stack through Extended Crafting's component-aware API.
  // A plain item filter avoids client ingredient codecs that lack registry access.
  const SingularityUtils = Java.loadClass('com.blakebr0.extendedcrafting.singularity.SingularityUtils')

  ItemEvents.modifyTooltips(event => {
    Object.keys(tooltips).forEach(id => {
      if (Item.exists(id)) event.add(id, lines(PREFIX, id, tooltips[id]))
    })
    event.modify('extendedcrafting:singularity', tooltip => {
      tooltip.dynamic('rr_singularity_tooltips')
    })
  })

  ItemEvents.dynamicTooltips('rr_singularity_tooltips', event => {
    const singularity = SingularityUtils.getSingularity(event.item)
    if (singularity === null) return
    const id = String(singularity.getId())
    const styles = singularityTooltips[id]
    if (styles) lines(PREFIX + 'singularity.', id, styles).forEach(line => event.lines.add(line))
  })
})();
