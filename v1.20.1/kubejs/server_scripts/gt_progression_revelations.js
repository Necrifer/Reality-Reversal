// GregTech 7.5.3 / Revelationary 1.3.9. Recomputed on each data reload.
// Blacklist wins over void_contain when a hazardous ore is also GT-exclusive.
ServerEvents.highPriorityData(function (event) {
  var Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var API = Java.loadClass('com.gregtechceu.gtceu.api.GTCEuAPI');
  var Chemical = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper');
  var Keys = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
  var Prefixes = Java.loadClass('com.gregtechceu.gtceu.api.data.tag.TagPrefix');
  var Hazard = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty');
  var BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem');
  var Config = Java.loadClass('com.gregtechceu.gtceu.config.ConfigHolder');
  var external = {
  "acetylsalicylic_acid": [
    "chemlib:acetylsalicylic_acid_dust"
  ],
  "actinium": [
    "chemlib:actinium_dust",
    "chemlib:actinium_ingot"
  ],
  "aerialite": [
    "extrabotany:aerialite_ingot"
  ],
  "aeternium": [
    "betterend:aeternium_ingot"
  ],
  "alugentum": [
    "nuclearcraft:alugentum_dust"
  ],
  "aluminium": [
    "neoecoae:aluminum_dust",
    "nuclearcraft:aluminum_dust",
    "nuclearcraft:aluminum_ingot",
    "chemlib:aluminum_dust",
    "chemlib:aluminum_ingot",
    "ftbmaterials:aluminum_dust",
    "ftbmaterials:aluminum_ingot",
    "immersiveengineering:dust_aluminum",
    "immersiveengineering:ingot_aluminum",
    "neoecoae:aluminum_dust",
    "neoecoae:aluminum_ingot",
    "nuclearcraft:aluminum_dust",
    "nuclearcraft:aluminum_ingot"
  ],
  "aluminum": [
    "chemlib:aluminum_dust",
    "chemlib:aluminum_ingot",
    "ftbmaterials:aluminum_dust",
    "ftbmaterials:aluminum_ingot",
    "immersiveengineering:dust_aluminum",
    "immersiveengineering:ingot_aluminum",
    "neoecoae:aluminum_dust",
    "neoecoae:aluminum_ingot",
    "nuclearcraft:aluminum_dust",
    "nuclearcraft:aluminum_ingot"
  ],
  "aluminum_alloy": [
    "neoecoae:aluminum_alloy_dust",
    "neoecoae:aluminum_alloy_ingot"
  ],
  "aluminum_hydroxide": [
    "chemlib:aluminum_hydroxide_dust"
  ],
  "aluminum_nitrate": [
    "chemlib:aluminum_nitrate_dust"
  ],
  "aluminum_oxide": [
    "chemlib:aluminum_oxide_dust"
  ],
  "amber": [
    "valoria:amber_gem"
  ],
  "amethyst": [
    "minecraft:amethyst_shard",
    "valoria:amethyst_gem"
  ],
  "amethyst_bronze": [
    "tconstruct:amethyst_bronze_ingot"
  ],
  "amide": [
    "chemlib:amide_dust"
  ],
  "ammonium_chloride": [
    "chemlib:ammonium_chloride_dust"
  ],
  "ancient": [
    "valoria:ancient_ingot"
  ],
  "ancient_metal": [
    "cataclysm:ancient_metal_ingot"
  ],
  "antimony": [
    "chemlib:antimony_dust",
    "ftbmaterials:antimony_dust",
    "ftbmaterials:antimony_ingot",
    "tinkers_advanced:antimony_ingot"
  ],
  "antimony_trioxide": [
    "chemlib:antimony_trioxide_dust"
  ],
  "antimony_trisulfide": [
    "chemlib:antimony_trisulfide_dust"
  ],
  "apalachia": [
    "divinerpg:apalachia_dust",
    "divinerpg:apalachia_gem"
  ],
  "apatite": [
    "ftbmaterials:apatite",
    "ftbmaterials:apatite_dust"
  ],
  "aquarius": [
    "valoria:aquarius_ingot"
  ],
  "aquatic": [
    "divinerpg:aquatic_ingot"
  ],
  "arcanium": [
    "divinerpg:arcanium"
  ],
  "arlemite": [
    "divinerpg:arlemite_ingot"
  ],
  "arsenic": [
    "chemlib:arsenic_dust",
    "nuclearcraft:arsenic_dust"
  ],
  "ash": [
    "supplementaries:ash"
  ],
  "ashes": [
    "spectrum:ash_flakes"
  ],
  "astatine": [
    "chemlib:astatine_dust"
  ],
  "awakened_supremium": [
    "mysticalagriculture:awakened_supremium_gemstone",
    "mysticalagriculture:awakened_supremium_ingot"
  ],
  "baratol": [
    "nuclearcraft:baratol_dust",
    "nuclearcraft:baratol_ingot"
  ],
  "barium": [
    "chemlib:barium_dust",
    "chemlib:barium_ingot",
    "nuclearcraft:barium_dust"
  ],
  "barium_carbonate": [
    "chemlib:barium_carbonate_dust"
  ],
  "barium_chloride": [
    "chemlib:barium_chloride_dust"
  ],
  "barium_hydroxide": [
    "chemlib:barium_hydroxide_dust"
  ],
  "barium_nitrate": [
    "chemlib:barium_nitrate_dust",
    "nuclearcraft:barium_nitrate_dust"
  ],
  "barium_oxide": [
    "chemlib:barium_oxide_dust"
  ],
  "barium_sulfide": [
    "chemlib:barium_sulfide_dust"
  ],
  "baronyte": [
    "aoa3:baronyte_ingot"
  ],
  "bauxite": [
    "ftbmaterials:bauxite_dust"
  ],
  "beryl": [
    "chemlib:beryl_dust"
  ],
  "beryllium": [
    "chemlib:beryllium_dust",
    "chemlib:beryllium_ingot",
    "nuclearcraft:beryllium_dust",
    "nuclearcraft:beryllium_ingot"
  ],
  "beryllium_carbonate": [
    "chemlib:beryllium_carbonate_dust"
  ],
  "beryllium_chloride": [
    "chemlib:beryllium_chloride_dust"
  ],
  "beryllium_hydroxide": [
    "chemlib:beryllium_hydroxide_dust"
  ],
  "beryllium_nitrate": [
    "chemlib:beryllium_nitrate_dust"
  ],
  "beryllium_oxide": [
    "chemlib:beryllium_oxide_dust"
  ],
  "beryllium_sulfate": [
    "chemlib:beryllium_sulfate_dust"
  ],
  "beta_carotene": [
    "chemlib:beta_carotene_dust"
  ],
  "bismuth": [
    "chemlib:bismuth_dust",
    "chemlib:bismuth_ingot",
    "nuclearcraft:bismuth_dust",
    "tinkers_advanced:bismuth_ingot"
  ],
  "black_gold": [
    "valoria:black_gold_ingot"
  ],
  "black_iron": [
    "extendedcrafting:black_iron_ingot"
  ],
  "black_quartz": [
    "actuallyadditions:black_quartz"
  ],
  "black_steel": [
    "cataclysm:black_steel_ingot"
  ],
  "black_tungsten_alloy": [
    "neoecoae:black_tungsten_alloy_dust",
    "neoecoae:black_tungsten_alloy_ingot"
  ],
  "blazing_quartz": [
    "malum:blazing_quartz"
  ],
  "blazium": [
    "aoa3:blazium_ingot"
  ],
  "bloodgem": [
    "divinerpg:bloodgem"
  ],
  "bloodstone": [
    "aoa3:bloodstone"
  ],
  "blutonium": [
    "bigreactors:blutonium_dust",
    "bigreactors:blutonium_ingot"
  ],
  "borax": [
    "nuclearcraft:borax_dust"
  ],
  "boron": [
    "chemlib:boron_dust",
    "nuclearcraft:boron_dust",
    "nuclearcraft:boron_ingot"
  ],
  "boron_arsenide": [
    "nuclearcraft:boron_arsenide_dust",
    "nuclearcraft:boron_arsenide_gem"
  ],
  "boron_nitride": [
    "nuclearcraft:boron_nitride_dust",
    "nuclearcraft:boron_nitride_gem"
  ],
  "brass": [
    "ftbmaterials:brass",
    "ftbmaterials:brass_dust",
    "ftbmaterials:brass_ingot"
  ],
  "brick": [
    "minecraft:brick",
    "supplementaries:ash_brick"
  ],
  "bronze": [
    "ftbmaterials:bronze_dust",
    "ftbmaterials:bronze_ingot",
    "mekanism:dust_bronze",
    "mekanism:ingot_bronze",
    "nuclearcraft:bronze_dust",
    "nuclearcraft:bronze_ingot",
    "thermal:bronze_dust",
    "thermal:bronze_ingot",
    "valoria:bronze_ingot"
  ],
  "bscco": [
    "nuclearcraft:bscco_dust"
  ],
  "c_mn_blend": [
    "nuclearcraft:c_mn_blend_dust"
  ],
  "cadmium": [
    "chemlib:cadmium_dust",
    "chemlib:cadmium_ingot"
  ],
  "cadmium_carbonate": [
    "chemlib:cadmium_carbonate_dust"
  ],
  "cadmium_hydroxide": [
    "chemlib:cadmium_hydroxide_dust"
  ],
  "cadmium_nitrate": [
    "chemlib:cadmium_nitrate_dust"
  ],
  "cadmium_sulfate": [
    "chemlib:cadmium_sulfate_dust"
  ],
  "cadmium_sulfide": [
    "chemlib:cadmium_sulfide_dust"
  ],
  "caesium_137": [
    "nuclearcraft:caesium_137_dust"
  ],
  "caffeine": [
    "chemlib:caffeine_dust"
  ],
  "calcium": [
    "chemlib:calcium_dust",
    "chemlib:calcium_ingot",
    "nuclearcraft:calcium_dust",
    "nuclearcraft:calcium_ingot"
  ],
  "calcium_carbonate": [
    "chemlib:calcium_carbonate_dust"
  ],
  "calcium_chloride": [
    "chemlib:calcium_chloride_dust"
  ],
  "calcium_hydroxide": [
    "chemlib:calcium_hydroxide_dust"
  ],
  "calcium_nitrate": [
    "chemlib:calcium_nitrate_dust"
  ],
  "calcium_oxide": [
    "chemlib:calcium_oxide_dust"
  ],
  "calcium_sulfate": [
    "chemlib:calcium_sulfate_dust",
    "nuclearcraft:calcium_sulfate_dust"
  ],
  "calorite": [
    "ad_astra:calorite_ingot"
  ],
  "carbon": [
    "chemlib:carbon_dust"
  ],
  "carbon_manganese": [
    "nuclearcraft:carbon_manganese_dust",
    "nuclearcraft:carbon_manganese_ingot"
  ],
  "carbonate": [
    "chemlib:carbonate_dust"
  ],
  "carminite": [
    "twilightforest:carminite"
  ],
  "carobbiite": [
    "nuclearcraft:carobbiite_dust",
    "nuclearcraft:carobbiite_gem"
  ],
  "cellulose": [
    "chemlib:cellulose_dust"
  ],
  "cerium": [
    "chemlib:cerium_dust",
    "chemlib:cerium_ingot"
  ],
  "certus_quartz": [
    "ae2:certus_quartz_crystal",
    "ae2:certus_quartz_dust",
    "ae2:charged_certus_quartz_crystal"
  ],
  "cesium": [
    "chemlib:cesium_dust",
    "chemlib:cesium_ingot"
  ],
  "cesium_carbonate": [
    "chemlib:cesium_carbonate_dust"
  ],
  "cesium_chloride": [
    "chemlib:cesium_chloride_dust"
  ],
  "cesium_hydroxide": [
    "chemlib:cesium_hydroxide_dust"
  ],
  "cesium_nitrate": [
    "chemlib:cesium_nitrate_dust"
  ],
  "cesium_sulfate": [
    "chemlib:cesium_sulfate_dust"
  ],
  "charcoal": [
    "ftbmaterials:charcoal_dust",
    "mekanism:dust_charcoal",
    "nuclearcraft:charcoal_dust"
  ],
  "chitin": [
    "chemlib:chitin_dust"
  ],
  "chromium": [
    "chemlib:chromium_dust",
    "chemlib:chromium_ingot",
    "ftbmaterials:chromium",
    "ftbmaterials:chromium_dust",
    "ftbmaterials:chromium_ingot",
    "nuclearcraft:chromium_dust",
    "nuclearcraft:chromium_ingot"
  ],
  "chromium_oxide": [
    "chemlib:chromium_oxide_dust"
  ],
  "cincinnasite": [
    "betternether:cincinnasite_ingot"
  ],
  "cinderslime": [
    "tconstruct:cinderslime_ingot"
  ],
  "cinnabar": [
    "chemlib:mercury_sulfide_dust",
    "ftbmaterials:cinnabar",
    "ftbmaterials:cinnabar_dust"
  ],
  "cloggrum": [
    "undergarden:cloggrum_ingot"
  ],
  "coal": [
    "enderio:powdered_coal",
    "ftbmaterials:coal_dust",
    "mekanism:dust_coal",
    "nuclearcraft:coal_dust"
  ],
  "coal_coke": [
    "ftbmaterials:coal_coke",
    "ftbmaterials:coal_coke_dust",
    "immersiveengineering:dust_coke"
  ],
  "coal_petcoke": [
    "immersivepetroleum:petcoke_dust"
  ],
  "cobalt": [
    "chemlib:cobalt_dust",
    "chemlib:cobalt_ingot",
    "enderio:powdered_cobalt",
    "nuclearcraft:cobalt_dust",
    "nuclearcraft:cobalt_ingot",
    "tconstruct:cobalt_ingot",
    "valoria:cobalt_ingot"
  ],
  "cobalt_aluminate": [
    "chemlib:cobalt_aluminate_dust"
  ],
  "cobalt_carbonate": [
    "chemlib:cobalt_carbonate_dust"
  ],
  "cobalt_nitrate": [
    "chemlib:cobalt_nitrate_dust"
  ],
  "cobalt_sulfate": [
    "chemlib:cobalt_sulfate_dust"
  ],
  "conductive_alloy": [
    "enderio:conductive_alloy_ingot"
  ],
  "constantan": [
    "ftbmaterials:constantan_dust",
    "ftbmaterials:constantan_ingot",
    "immersiveengineering:dust_constantan",
    "immersiveengineering:ingot_constantan",
    "thermal:constantan_dust",
    "thermal:constantan_ingot"
  ],
  "copper": [
    "chemlib:copper_dust",
    "enderio:powdered_copper",
    "ftbmaterials:copper_dust",
    "immersiveengineering:dust_copper",
    "mekanism:dust_copper",
    "minecraft:copper_ingot",
    "nuclearcraft:copper_dust",
    "primalmagick:copper_grit"
  ],
  "copper_alloy": [
    "enderio:copper_alloy_ingot"
  ],
  "copper_carbonate": [
    "chemlib:copper_carbonate_dust"
  ],
  "copper_i_oxide": [
    "chemlib:copper_i_oxide_dust"
  ],
  "copper_i_sulfide": [
    "chemlib:copper_i_sulfide_dust"
  ],
  "copper_ii_hydroxide": [
    "chemlib:copper_ii_hydroxide_dust"
  ],
  "copper_ii_sulfate": [
    "chemlib:copper_ii_sulfate_dust"
  ],
  "copper_nitrate": [
    "chemlib:copper_nitrate_dust"
  ],
  "corrupted": [
    "divinerpg:corrupted_stone"
  ],
  "crimtane": [
    "valoria:crimtane_ingot"
  ],
  "crystal_binder": [
    "nuclearcraft:crystal_binder_dust"
  ],
  "crystal_matrix": [
    "avaritia:crystal_matrix_ingot"
  ],
  "crystallite": [
    "aoa3:crystallite"
  ],
  "crystaltine": [
    "extendedcrafting:crystaltine_ingot"
  ],
  "cthonic_gold": [
    "malum:cthonic_gold"
  ],
  "cucurbitacin": [
    "chemlib:cucurbitacin_dust"
  ],
  "cursium": [
    "cataclysm:cursium_ingot"
  ],
  "cyanite": [
    "bigreactors:cyanite_dust",
    "bigreactors:cyanite_ingot"
  ],
  "dark_steel": [
    "enderio:dark_steel_ingot"
  ],
  "desh": [
    "ad_astra:desh_ingot"
  ],
  "diammonium_phosphate": [
    "chemlib:diammonium_phosphate_dust"
  ],
  "diamond": [
    "ftbmaterials:diamond_dust",
    "mekanism:dust_diamond",
    "minecraft:diamond",
    "nuclearcraft:diamond_dust"
  ],
  "dimensional_blend": [
    "nuclearcraft:dimensional_blend_dust"
  ],
  "dimensional_shard": [
    "ftbmaterials:dimensional_shard"
  ],
  "divine": [
    "divinerpg:divine_stone"
  ],
  "draconium": [
    "draconicevolution:draconium_dust",
    "draconicevolution:draconium_ingot"
  ],
  "draconium_awakened": [
    "draconicevolution:awakened_draconium_dust",
    "draconicevolution:awakened_draconium_ingot"
  ],
  "draculite": [
    "tcompat:draculite_ingot"
  ],
  "dragonstone": [
    "botania:dragonstone"
  ],
  "dysprosium": [
    "chemlib:dysprosium_dust",
    "chemlib:dysprosium_ingot"
  ],
  "eden": [
    "divinerpg:eden_dust",
    "divinerpg:eden_gem"
  ],
  "elecanium": [
    "aoa3:elecanium_ingot"
  ],
  "electrum": [
    "ftbmaterials:electrum",
    "ftbmaterials:electrum_dust",
    "ftbmaterials:electrum_ingot",
    "immersiveengineering:dust_electrum",
    "immersiveengineering:ingot_electrum",
    "nuclearcraft:electrum_dust",
    "nuclearcraft:electrum_ingot",
    "thermal:electrum_dust",
    "thermal:electrum_ingot"
  ],
  "elementium": [
    "botania:elementium_ingot"
  ],
  "emberstone": [
    "aoa3:emberstone_ingot"
  ],
  "emerald": [
    "ftbmaterials:emerald_dust",
    "mekanism:dust_emerald",
    "minecraft:emerald",
    "nuclearcraft:emerald_dust"
  ],
  "end_steel": [
    "enderio:end_steel_ingot"
  ],
  "end_stone": [
    "nuclearcraft:end_stone_dust"
  ],
  "ender": [
    "divinerpg:ender_stone"
  ],
  "ender_crystal": [
    "enderio:ender_crystal"
  ],
  "ender_ingot": [
    "extendedcrafting:ender_ingot"
  ],
  "ender_pearl": [
    "ae2:ender_dust",
    "enderio:powdered_ender_pearl"
  ],
  "enderium": [
    "nuclearcraft:enderium_dust"
  ],
  "energetic_alloy": [
    "enderio:energetic_alloy_ingot"
  ],
  "energetic_blend": [
    "nuclearcraft:energetic_blend_dust"
  ],
  "energized_crystal": [
    "neoecoae:energized_crystal",
    "neoecoae:energized_crystal_dust"
  ],
  "energized_fluix_crystal": [
    "neoecoae:energized_fluix_crystal",
    "neoecoae:energized_fluix_crystal_dust"
  ],
  "enhanced_ender_ingot": [
    "extendedcrafting:enhanced_ender_ingot"
  ],
  "enhanced_redstone_ingot": [
    "extendedcrafting:enhanced_redstone_ingot"
  ],
  "enticing_crystal": [
    "enderio:enticing_crystal"
  ],
  "erbium": [
    "chemlib:erbium_dust",
    "chemlib:erbium_ingot",
    "nuclearcraft:erbium_dust"
  ],
  "europium": [
    "chemlib:europium_dust",
    "chemlib:europium_ingot"
  ],
  "europium_155": [
    "nuclearcraft:europium_155_dust"
  ],
  "extreme": [
    "nuclearcraft:extreme_dust",
    "nuclearcraft:extreme_ingot"
  ],
  "ferroboron": [
    "nuclearcraft:ferroboron_dust",
    "nuclearcraft:ferroboron_ingot"
  ],
  "fiery": [
    "twilightforest:fiery_ingot"
  ],
  "fire_dragonsteel": [
    "iceandfire:dragonsteel_fire_ingot"
  ],
  "fluix": [
    "ae2:fluix_crystal",
    "ae2:fluix_dust"
  ],
  "fluorite": [
    "ftbmaterials:fluorite",
    "ftbmaterials:fluorite_dust",
    "mekanism:dust_fluorite",
    "mekanism:fluorite_gem",
    "nuclearcraft:fluorite_dust",
    "nuclearcraft:fluorite_gem"
  ],
  "forgotten_metal": [
    "undergarden:forgotten_ingot"
  ],
  "francium": [
    "chemlib:francium_dust",
    "chemlib:francium_ingot"
  ],
  "froststeel": [
    "undergarden:froststeel_ingot"
  ],
  "gadolinium": [
    "chemlib:gadolinium_dust",
    "chemlib:gadolinium_ingot",
    "nuclearcraft:gadolinium_dust"
  ],
  "gallium": [
    "chemlib:gallium_dust",
    "chemlib:gallium_ingot"
  ],
  "gemenyte": [
    "aoa3:gemenyte"
  ],
  "germanium": [
    "chemlib:germanium_dust",
    "nuclearcraft:germanium_dust"
  ],
  "ghastly": [
    "aoa3:ghastly_ingot"
  ],
  "ghoulish": [
    "aoa3:ghoulish_ingot"
  ],
  "glowstone": [
    "minecraft:glowstone_dust"
  ],
  "gold": [
    "chemlib:gold_dust",
    "enderio:powdered_gold",
    "ftbmaterials:gold",
    "ftbmaterials:gold_dust",
    "immersiveengineering:dust_gold",
    "mekanism:dust_gold",
    "minecraft:gold_ingot",
    "nuclearcraft:gold_dust",
    "primalmagick:gold_grit"
  ],
  "grains_of_infinity": [
    "enderio:grains_of_infinity"
  ],
  "grains_of_pizeallity": [
    "enderio:pulsating_powder"
  ],
  "grains_of_prescience": [
    "enderio:prescient_powder"
  ],
  "grains_of_the_end": [
    "enderio:ender_crystal_powder"
  ],
  "grains_of_vibrancy": [
    "enderio:vibrant_powder"
  ],
  "graphite": [
    "bigreactors:graphite_dust",
    "bigreactors:graphite_ingot",
    "chemlib:graphite_dust",
    "ftbmaterials:graphite_dust",
    "ftbmaterials:graphite_ingot",
    "nuclearcraft:graphite_dust",
    "nuclearcraft:graphite_ingot"
  ],
  "gravitite": [
    "aether_redux:gravitite_ingot"
  ],
  "hafnium": [
    "chemlib:hafnium_dust",
    "chemlib:hafnium_ingot",
    "nuclearcraft:hafnium_dust",
    "nuclearcraft:hafnium_ingot"
  ],
  "hallowed_gold": [
    "malum:hallowed_gold_ingot"
  ],
  "hard_carbon": [
    "nuclearcraft:hard_carbon_dust",
    "nuclearcraft:hard_carbon_ingot"
  ],
  "hellstone": [
    "divinerpg:hellstone_ingot"
  ],
  "hepatizon": [
    "tconstruct:hepatizon_ingot"
  ],
  "holmium": [
    "chemlib:holmium_dust",
    "chemlib:holmium_ingot"
  ],
  "hop_graphite": [
    "immersiveengineering:dust_hop_graphite",
    "immersiveengineering:ingot_hop_graphite"
  ],
  "hsla_steel": [
    "nuclearcraft:hsla_steel_dust",
    "nuclearcraft:hsla_steel_ingot"
  ],
  "hydroxide": [
    "chemlib:hydroxide_dust"
  ],
  "ice": [
    "divinerpg:ice_stone"
  ],
  "ice_dragonsteel": [
    "iceandfire:dragonsteel_ice_ingot"
  ],
  "ignitium": [
    "cataclysm:ignitium_ingot"
  ],
  "imperium": [
    "mysticalagriculture:imperium_gemstone",
    "mysticalagriculture:imperium_ingot"
  ],
  "inanite": [
    "bigreactors:inanite_dust",
    "bigreactors:inanite_ingot"
  ],
  "indium": [
    "chemlib:indium_dust",
    "chemlib:indium_ingot"
  ],
  "inferium": [
    "mysticalagriculture:inferium_gemstone",
    "mysticalagriculture:inferium_ingot"
  ],
  "infernal": [
    "valoria:infernal_ingot"
  ],
  "infinity": [
    "avaritia:infinity_ingot"
  ],
  "insanite": [
    "bigreactors:insanite_dust",
    "bigreactors:insanite_ingot"
  ],
  "insanium": [
    "mysticalagradditions:insanium_gemstone",
    "mysticalagradditions:insanium_ingot"
  ],
  "invar": [
    "ftbmaterials:invar_dust",
    "ftbmaterials:invar_ingot",
    "thermal:invar_dust",
    "thermal:invar_ingot"
  ],
  "iodine": [
    "chemlib:iodine_dust",
    "nuclearcraft:iodine_dust"
  ],
  "iridium": [
    "chemlib:iridium_dust",
    "chemlib:iridium_ingot",
    "ftbmaterials:iridium_dust",
    "ftbmaterials:iridium_ingot",
    "nuclearcraft:iridium_dust",
    "nuclearcraft:iridium_ingot"
  ],
  "iron": [
    "chemlib:iron_dust",
    "enderio:powdered_iron",
    "ftbmaterials:iron_dust",
    "immersiveengineering:dust_iron",
    "mekanism:dust_iron",
    "minecraft:iron_ingot",
    "neoecoae:iron_dust",
    "nuclearcraft:iron_dust",
    "primalmagick:iron_grit"
  ],
  "iron_carbonate": [
    "chemlib:iron_carbonate_dust"
  ],
  "iron_disulfide": [
    "chemlib:iron_disulfide_dust"
  ],
  "iron_ii_oxide": [
    "chemlib:iron_ii_oxide_dust"
  ],
  "iron_ii_sulfate": [
    "chemlib:iron_ii_sulfate_dust"
  ],
  "iron_iii_nitrate": [
    "chemlib:iron_iii_nitrate_dust"
  ],
  "iron_oxide": [
    "chemlib:iron_oxide_dust"
  ],
  "ironwood": [
    "twilightforest:ironwood_ingot"
  ],
  "irradiated_borax": [
    "nuclearcraft:irradiated_borax_dust"
  ],
  "jade": [
    "aoa3:jade"
  ],
  "jewelyte": [
    "aoa3:jewelyte"
  ],
  "jungle": [
    "divinerpg:jungle_stone"
  ],
  "keratin": [
    "chemlib:keratin_dust"
  ],
  "knightmetal": [
    "tconstruct:knightmetal_ingot",
    "twilightforest:knightmetal_ingot"
  ],
  "knightslime": [
    "tconstruct:knightslime_ingot"
  ],
  "lacrima": [
    "cataclysm:lacrima"
  ],
  "lanthanum": [
    "chemlib:lanthanum_dust",
    "chemlib:lanthanum_ingot"
  ],
  "lapis": [
    "enderio:powdered_lapis_lazuli",
    "mekanism:dust_lapis_lazuli",
    "minecraft:lapis_lazuli",
    "nuclearcraft:lapis_dust"
  ],
  "lapis_lazuli": [
    "ftbmaterials:lapis_lazuli_dust"
  ],
  "lead": [
    "chemlib:lead_dust",
    "chemlib:lead_ingot",
    "ftbmaterials:lead_dust",
    "ftbmaterials:lead_ingot",
    "immersiveengineering:dust_lead",
    "immersiveengineering:ingot_lead",
    "mekanism:dust_lead",
    "mekanism:ingot_lead",
    "nuclearcraft:lead_dust",
    "nuclearcraft:lead_ingot",
    "thermal:lead_dust",
    "thermal:lead_ingot"
  ],
  "lead_carbonate": [
    "chemlib:lead_carbonate_dust"
  ],
  "lead_nitrate": [
    "chemlib:lead_nitrate_dust"
  ],
  "lead_oxide": [
    "chemlib:lead_oxide_dust"
  ],
  "lead_platinum": [
    "nuclearcraft:lead_platinum_dust",
    "nuclearcraft:lead_platinum_ingot"
  ],
  "lead_sulfate": [
    "chemlib:lead_sulfate_dust"
  ],
  "lead_sulfide": [
    "chemlib:lead_sulfide_dust"
  ],
  "lightium": [
    "mystical_extended_tier:lightium_gemstone",
    "mystical_extended_tier:lightium_ingot"
  ],
  "lightning_dragonsteel": [
    "iceandfire:dragonsteel_lightning_ingot"
  ],
  "lightnum": [
    "tcompat:lightnum_ingot"
  ],
  "limonite": [
    "aoa3:limonite_ingot"
  ],
  "lithium": [
    "chemlib:lithium_dust",
    "chemlib:lithium_ingot",
    "ftbmaterials:lithium_dust",
    "mekanism:dust_lithium",
    "nuclearcraft:lithium_dust",
    "nuclearcraft:lithium_ingot"
  ],
  "lithium_carbonate": [
    "chemlib:lithium_carbonate_dust"
  ],
  "lithium_chloride": [
    "chemlib:lithium_chloride_dust"
  ],
  "lithium_hydroxide": [
    "chemlib:lithium_hydroxide_dust"
  ],
  "lithium_manganese_dioxide": [
    "nuclearcraft:lithium_manganese_dioxide_dust",
    "nuclearcraft:lithium_manganese_dioxide_ingot"
  ],
  "lithium_nitrate": [
    "chemlib:lithium_nitrate_dust"
  ],
  "lithium_oxide": [
    "chemlib:lithium_oxide_dust"
  ],
  "lithium_sulfate": [
    "chemlib:lithium_sulfate_dust"
  ],
  "ludicrite": [
    "bigreactors:ludicrite_dust",
    "bigreactors:ludicrite_ingot"
  ],
  "lumium": [
    "ftbmaterials:lumium_dust",
    "ftbmaterials:lumium_ingot"
  ],
  "lunar": [
    "aoa3:lunar_ingot"
  ],
  "lutetium": [
    "chemlib:lutetium_dust",
    "chemlib:lutetium_ingot"
  ],
  "lyon": [
    "aoa3:lyon_ingot"
  ],
  "magentite": [
    "bigreactors:magentite_dust",
    "bigreactors:magentite_ingot"
  ],
  "magnesium": [
    "chemlib:magnesium_dust",
    "chemlib:magnesium_ingot",
    "nuclearcraft:magnesium_dust",
    "nuclearcraft:magnesium_ingot"
  ],
  "magnesium_carbonate": [
    "chemlib:magnesium_carbonate_dust"
  ],
  "magnesium_chloride": [
    "chemlib:magnesium_chloride_dust"
  ],
  "magnesium_diboride": [
    "nuclearcraft:magnesium_diboride_ingot"
  ],
  "magnesium_hydroxide": [
    "chemlib:magnesium_hydroxide_dust"
  ],
  "magnesium_nitrate": [
    "chemlib:magnesium_nitrate_dust"
  ],
  "magnesium_oxide": [
    "chemlib:magnesium_oxide_dust"
  ],
  "malignant_lead": [
    "malum:malignant_lead"
  ],
  "malignant_pewter": [
    "malum:malignant_pewter_ingot"
  ],
  "mana": [
    "botania:mana_powder"
  ],
  "mana_diamond": [
    "botania:mana_diamond"
  ],
  "manasteel": [
    "botania:manasteel_ingot"
  ],
  "manganese": [
    "chemlib:manganese_dust",
    "chemlib:manganese_ingot",
    "nuclearcraft:manganese_dust",
    "nuclearcraft:manganese_ingot"
  ],
  "manganese_carbonate": [
    "chemlib:manganese_carbonate_dust"
  ],
  "manganese_dioxide": [
    "nuclearcraft:manganese_dioxide_dust",
    "nuclearcraft:manganese_dioxide_ingot"
  ],
  "manganese_hydroxide": [
    "chemlib:manganese_hydroxide_dust"
  ],
  "manganese_nitrate": [
    "chemlib:manganese_nitrate_dust"
  ],
  "manganese_oxide": [
    "chemlib:manganese_oxide_dust",
    "nuclearcraft:manganese_oxide_dust",
    "nuclearcraft:manganese_oxide_ingot"
  ],
  "manganese_sulfate": [
    "chemlib:manganese_sulfate_dust"
  ],
  "manyullyn": [
    "tconstruct:manyullyn_ingot"
  ],
  "mercury_sulfide": [
    "chemlib:mercury_sulfide_dust"
  ],
  "molten": [
    "divinerpg:molten_stone"
  ],
  "molybdenum": [
    "chemlib:molybdenum_dust",
    "chemlib:molybdenum_ingot",
    "nuclearcraft:molybdenum_dust"
  ],
  "monazite": [
    "ftbmaterials:monazite_dust"
  ],
  "mortum": [
    "divinerpg:mortum_dust",
    "divinerpg:mortum_gem"
  ],
  "mullite": [
    "chemlib:mullite_dust"
  ],
  "mystite": [
    "aoa3:mystite_ingot"
  ],
  "nature": [
    "valoria:nature_ingot"
  ],
  "neodymium": [
    "chemlib:neodymium_dust",
    "chemlib:neodymium_ingot",
    "nuclearcraft:neodymium_dust"
  ],
  "neptunium": [
    "aquaculture:neptunium_ingot"
  ],
  "nether_brick": [
    "minecraft:nether_brick"
  ],
  "nether_ruby": [
    "betternether:nether_ruby"
  ],
  "netherite": [
    "ftbmaterials:netherite_dust",
    "mekanism:dust_netherite",
    "minecraft:netherite_ingot",
    "nuclearcraft:netherite_dust"
  ],
  "netherite_scrap": [
    "minecraft:netherite_scrap"
  ],
  "neutron": [
    "avaritia:neutron_ingot"
  ],
  "neutronium": [
    "avaritia:neutron_ingot",
    "nuclearcraft:neutronium_ingot"
  ],
  "nichrome": [
    "nuclearcraft:nichrome_ingot"
  ],
  "nickel": [
    "chemlib:nickel_dust",
    "chemlib:nickel_ingot",
    "ftbmaterials:nickel_dust",
    "ftbmaterials:nickel_ingot",
    "immersiveengineering:dust_nickel",
    "immersiveengineering:ingot_nickel",
    "thermal:nickel_dust",
    "thermal:nickel_ingot"
  ],
  "nickel_carbonate": [
    "chemlib:nickel_carbonate_dust"
  ],
  "nickel_chloride": [
    "chemlib:nickel_chloride_dust"
  ],
  "nickel_nitrate": [
    "chemlib:nickel_nitrate_dust"
  ],
  "nickel_oxide": [
    "chemlib:nickel_oxide_dust"
  ],
  "nickel_sulfate": [
    "chemlib:nickel_sulfate_dust"
  ],
  "nickel_sulfide": [
    "chemlib:nickel_sulfide_dust"
  ],
  "niobium": [
    "chemlib:niobium_dust",
    "chemlib:niobium_ingot",
    "nuclearcraft:niobium_dust",
    "nuclearcraft:niobium_ingot"
  ],
  "niobium_tin": [
    "nuclearcraft:niobium_tin_ingot"
  ],
  "niobium_titanium": [
    "nuclearcraft:niobium_titanium_ingot"
  ],
  "niter": [
    "chemlib:potassium_nitrate_dust",
    "ftbmaterials:niter",
    "ftbmaterials:niter_dust"
  ],
  "nitrate": [
    "chemlib:nitrate_dust"
  ],
  "obsidian": [
    "enderio:powdered_obsidian",
    "ftbmaterials:obsidian_dust",
    "mekanism:dust_obsidian",
    "nuclearcraft:obsidian_dust"
  ],
  "olivine": [
    "divinerpg:olivine"
  ],
  "orichalcos": [
    "extrabotany:orichalcos_ingot"
  ],
  "ornamyte": [
    "aoa3:ornamyte"
  ],
  "ornium": [
    "mystical_extended_tier:ornium_gemstone",
    "mystical_extended_tier:ornium_ingot"
  ],
  "osmiridium": [
    "nuclearcraft:osmiridium_ingot"
  ],
  "osmium": [
    "chemlib:osmium_dust",
    "chemlib:osmium_ingot",
    "ftbmaterials:osmium_dust",
    "ftbmaterials:osmium_ingot",
    "mekanism:dust_osmium",
    "mekanism:ingot_osmium",
    "nuclearcraft:osmium_dust",
    "nuclearcraft:osmium_ingot"
  ],
  "ostrum": [
    "ad_astra:ostrum_ingot"
  ],
  "ouranium": [
    "mystical_extended_tier:ouranium_gemstone",
    "mystical_extended_tier:ouranium_ingot"
  ],
  "oxdrite": [
    "divinerpg:oxdrite_ingot"
  ],
  "palladium": [
    "chemlib:palladium_dust",
    "chemlib:palladium_ingot",
    "nuclearcraft:palladium_dust",
    "nuclearcraft:palladium_ingot"
  ],
  "pearlium": [
    "valoria:pearlium_ingot"
  ],
  "phosphate": [
    "chemlib:phosphate_dust"
  ],
  "phosphoric_acid": [
    "chemlib:phosphoric_acid_dust"
  ],
  "phosphorus": [
    "chemlib:phosphorus_dust"
  ],
  "photonium": [
    "extrabotany:photonium_ingot"
  ],
  "pig_iron": [
    "tconstruct:pig_iron_ingot"
  ],
  "platinum": [
    "chemlib:platinum_dust",
    "chemlib:platinum_ingot",
    "ftbmaterials:platinum_dust",
    "ftbmaterials:platinum_ingot",
    "nuclearcraft:platinum_dust",
    "nuclearcraft:platinum_ingot"
  ],
  "plutonium": [
    "bigreactors:blutonium_dust",
    "bigreactors:blutonium_ingot",
    "ftbmaterials:plutonium",
    "ftbmaterials:plutonium_dust",
    "ftbmaterials:plutonium_ingot"
  ],
  "polonium": [
    "chemlib:polonium_dust",
    "chemlib:polonium_ingot",
    "nuclearcraft:polonium_dust"
  ],
  "polyvinyl_chloride": [
    "chemlib:polyvinyl_chloride_dust"
  ],
  "potassium": [
    "chemlib:potassium_dust",
    "chemlib:potassium_ingot",
    "nuclearcraft:potassium_dust",
    "nuclearcraft:potassium_ingot"
  ],
  "potassium_carbonate": [
    "chemlib:potassium_carbonate_dust"
  ],
  "potassium_chloride": [
    "chemlib:potassium_chloride_dust"
  ],
  "potassium_cyanide": [
    "chemlib:potassium_cyanide_dust"
  ],
  "potassium_ethyl_xanthate": [
    "chemlib:potassium_ethyl_xanthate_dust"
  ],
  "potassium_fluoride": [
    "nuclearcraft:potassium_fluoride_dust"
  ],
  "potassium_hydroxide": [
    "chemlib:potassium_hydroxide_dust",
    "nuclearcraft:potassium_hydroxide_dust"
  ],
  "potassium_iodide": [
    "nuclearcraft:potassium_iodide_dust"
  ],
  "potassium_nitrate": [
    "chemlib:potassium_nitrate_dust"
  ],
  "potassium_oxide": [
    "chemlib:potassium_oxide_dust"
  ],
  "potassium_sulfate": [
    "chemlib:potassium_sulfate_dust"
  ],
  "praseodymium": [
    "chemlib:praseodymium_dust",
    "chemlib:praseodymium_ingot"
  ],
  "prescient_crystal": [
    "enderio:prescient_crystal"
  ],
  "prismarine": [
    "minecraft:prismarine_crystals",
    "minecraft:prismarine_shard"
  ],
  "promethium_147": [
    "nuclearcraft:promethium_147_dust"
  ],
  "prosperity": [
    "mysticalagriculture:prosperity_gemstone",
    "mysticalagriculture:prosperity_ingot"
  ],
  "protactinium": [
    "chemlib:protactinium_dust",
    "chemlib:protactinium_ingot"
  ],
  "protactinium_231": [
    "nuclearcraft:protactinium_231_dust"
  ],
  "protactinium_233": [
    "nuclearcraft:protactinium_233_dust"
  ],
  "prudentium": [
    "mysticalagriculture:prudentium_gemstone",
    "mysticalagriculture:prudentium_ingot"
  ],
  "pulsating_alloy": [
    "enderio:pulsating_alloy_ingot"
  ],
  "pulsating_crystal": [
    "enderio:pulsating_crystal"
  ],
  "purpur": [
    "nuclearcraft:purpur_dust"
  ],
  "pyral": [
    "aether_treasure_reforging:pyral_ingot"
  ],
  "pyrolitic_carbon": [
    "nuclearcraft:pyrolitic_carbon_dust",
    "nuclearcraft:pyrolitic_carbon_ingot"
  ],
  "quartz": [
    "enderio:powdered_quartz",
    "extrabotany:elementium_quartz",
    "extrabotany:gaia_quartz",
    "ftbmaterials:quartz_dust",
    "malum:natural_quartz",
    "mekanism:dust_quartz",
    "minecraft:quartz",
    "nuclearcraft:quartz_dust"
  ],
  "queens_slime": [
    "tconstruct:queens_slime_ingot"
  ],
  "radium": [
    "chemlib:radium_dust",
    "chemlib:radium_ingot",
    "nuclearcraft:radium_dust"
  ],
  "realmite": [
    "divinerpg:realmite_ingot"
  ],
  "redstone": [
    "minecraft:redstone"
  ],
  "redstone_alloy": [
    "enderio:redstone_alloy_ingot"
  ],
  "redstone_ingot": [
    "extendedcrafting:redstone_ingot"
  ],
  "refined_glowstone": [
    "ftbmaterials:refined_glowstone_dust",
    "ftbmaterials:refined_glowstone_ingot",
    "mekanism:ingot_refined_glowstone"
  ],
  "refined_obsidian": [
    "ftbmaterials:refined_obsidian_dust",
    "ftbmaterials:refined_obsidian_ingot",
    "mekanism:dust_refined_obsidian",
    "mekanism:ingot_refined_obsidian"
  ],
  "refined_sentrite": [
    "aether_redux:refined_sentrite"
  ],
  "regalium": [
    "undergarden:regalium_crystal"
  ],
  "resonating_ore": [
    "ftbmaterials:resonating_ore"
  ],
  "rhenium": [
    "chemlib:rhenium_dust",
    "chemlib:rhenium_ingot"
  ],
  "rhodium": [
    "chemlib:rhodium_dust",
    "chemlib:rhodium_ingot"
  ],
  "rhodochrosite": [
    "nuclearcraft:rhodochrosite_dust",
    "nuclearcraft:rhodochrosite_gem"
  ],
  "ridiculite": [
    "bigreactors:ridiculite_dust",
    "bigreactors:ridiculite_ingot"
  ],
  "rose_gold": [
    "tconstruct:rose_gold_ingot"
  ],
  "rubidium": [
    "chemlib:rubidium_dust",
    "chemlib:rubidium_ingot"
  ],
  "rubidium_carbonate": [
    "chemlib:rubidium_carbonate_dust"
  ],
  "rubidium_chloride": [
    "chemlib:rubidium_chloride_dust"
  ],
  "rubidium_hydroxide": [
    "chemlib:rubidium_hydroxide_dust"
  ],
  "rubidium_nitrate": [
    "chemlib:rubidium_nitrate_dust"
  ],
  "rubidium_oxide": [
    "chemlib:rubidium_oxide_dust"
  ],
  "rubidium_sulfate": [
    "chemlib:rubidium_sulfate_dust"
  ],
  "ruby": [
    "ftbmaterials:ruby",
    "ftbmaterials:ruby_dust",
    "thermal:ruby",
    "thermal:ruby_dust",
    "valoria:ruby_gem"
  ],
  "rupee": [
    "divinerpg:rupee_ingot"
  ],
  "ruthenium": [
    "chemlib:ruthenium_dust",
    "chemlib:ruthenium_ingot"
  ],
  "ruthenium_106": [
    "nuclearcraft:ruthenium_106_dust"
  ],
  "salt": [
    "ftbmaterials:salt",
    "ftbmaterials:salt_dust",
    "mekanism:salt",
    "nuclearcraft:salt"
  ],
  "saltpeter": [
    "immersiveengineering:dust_saltpeter"
  ],
  "samarium": [
    "chemlib:samarium_dust",
    "chemlib:samarium_ingot",
    "nuclearcraft:samarium_dust"
  ],
  "sapphire": [
    "ftbmaterials:sapphire",
    "ftbmaterials:sapphire_dust",
    "iceandfire:sapphire_gem",
    "thermal:sapphire",
    "thermal:sapphire_dust",
    "valoria:sapphire_gem"
  ],
  "saw": [
    "ftbmaterials:saw_dust"
  ],
  "scandium": [
    "chemlib:scandium_dust",
    "chemlib:scandium_ingot"
  ],
  "selenium": [
    "chemlib:selenium_dust"
  ],
  "shadow": [
    "divinerpg:shadow_bar",
    "divinerpg:shadow_stone"
  ],
  "shadowium": [
    "extrabotany:shadowium_ingot"
  ],
  "shattered_singularity": [
    "advanced_ae:quantum_infused_dust"
  ],
  "shibuichi": [
    "nuclearcraft:shibuichi_dust",
    "nuclearcraft:shibuichi_ingot"
  ],
  "shyregem": [
    "aoa3:shyregem"
  ],
  "shyrestone": [
    "aoa3:shyrestone_ingot"
  ],
  "sic_sic_cmc": [
    "nuclearcraft:sic_sic_cmc_dust",
    "nuclearcraft:sic_sic_cmc_ingot"
  ],
  "silicon": [
    "ae2:silicon",
    "chemlib:silicon_dust",
    "ftbmaterials:silicon",
    "ftbmaterials:silicon_dust",
    "ftbmaterials:silicon_ingot",
    "nuclearcraft:silicon_gem"
  ],
  "silicon_carbide": [
    "nuclearcraft:silicon_carbide_dust",
    "nuclearcraft:silicon_carbide_ingot"
  ],
  "silver": [
    "chemlib:silver_dust",
    "chemlib:silver_ingot",
    "ftbmaterials:silver",
    "ftbmaterials:silver_dust",
    "ftbmaterials:silver_ingot",
    "iceandfire:silver_ingot",
    "immersiveengineering:dust_silver",
    "immersiveengineering:ingot_silver",
    "infinite_abyss:deepsilver_plate",
    "nuclearcraft:silver_dust",
    "nuclearcraft:silver_ingot",
    "thermal:silver_dust",
    "thermal:silver_ingot"
  ],
  "skeletal": [
    "aoa3:skeletal_ingot"
  ],
  "sky_steel": [
    "megacells:sky_steel_ingot"
  ],
  "skyjade": [
    "deep_aether:skyjade"
  ],
  "skythern": [
    "divinerpg:skythern_dust",
    "divinerpg:skythern_gem"
  ],
  "slimesteel": [
    "tconstruct:slimesteel_ingot"
  ],
  "sodium": [
    "chemlib:sodium_dust",
    "chemlib:sodium_ingot",
    "nuclearcraft:sodium_dust",
    "nuclearcraft:sodium_ingot"
  ],
  "sodium_bisulfate": [
    "chemlib:sodium_bisulfate_dust"
  ],
  "sodium_carbonate": [
    "chemlib:sodium_carbonate_dust"
  ],
  "sodium_chloride": [
    "chemlib:sodium_chloride_dust",
    "nuclearcraft:salt"
  ],
  "sodium_fluoride": [
    "nuclearcraft:sodium_fluoride_dust"
  ],
  "sodium_hydroxide": [
    "chemlib:sodium_hydroxide_dust",
    "nuclearcraft:sodium_hydroxide_dust"
  ],
  "sodium_nitrate": [
    "chemlib:sodium_nitrate_dust"
  ],
  "sodium_oxide": [
    "chemlib:sodium_oxide_dust"
  ],
  "sodium_sulfate": [
    "chemlib:sodium_sulfate_dust"
  ],
  "soul_stained_steel": [
    "malum:soul_stained_steel_ingot"
  ],
  "soularium": [
    "enderio:soularium_ingot"
  ],
  "soulfire": [
    "divinerpg:soulfire_stone"
  ],
  "soulium": [
    "mysticalagriculture:soulium_gemstone",
    "mysticalagriculture:soulium_ingot"
  ],
  "soulsteel": [
    "tconstruct:soulsteel_ingot"
  ],
  "stainless_steel": [
    "ftbmaterials:stainless_steel_dust",
    "ftbmaterials:stainless_steel_ingot",
    "nuclearcraft:stainless_steel_ingot"
  ],
  "starch": [
    "chemlib:starch_dust"
  ],
  "steel": [
    "ad_astra:steel_ingot",
    "ftbmaterials:steel_dust",
    "ftbmaterials:steel_ingot",
    "immersiveengineering:dust_steel",
    "immersiveengineering:ingot_steel",
    "mekanism:dust_steel",
    "mekanism:ingot_steel",
    "nuclearcraft:steel_dust",
    "nuclearcraft:steel_ingot",
    "tconstruct:steel_ingot"
  ],
  "steeleaf": [
    "twilightforest:steeleaf_ingot"
  ],
  "stormforged_steel": [
    "tcompat:stormforged_steel_ingot"
  ],
  "stratus": [
    "deep_aether:stratus_ingot"
  ],
  "strontium": [
    "chemlib:strontium_dust",
    "chemlib:strontium_ingot",
    "nuclearcraft:strontium_dust",
    "nuclearcraft:strontium_ingot"
  ],
  "strontium_90": [
    "nuclearcraft:strontium_90_dust"
  ],
  "strontium_carbonate": [
    "chemlib:strontium_carbonate_dust"
  ],
  "strontium_chloride": [
    "chemlib:strontium_chloride_dust"
  ],
  "strontium_hydroxide": [
    "chemlib:strontium_hydroxide_dust"
  ],
  "strontium_nitrate": [
    "chemlib:strontium_nitrate_dust"
  ],
  "strontium_oxide": [
    "chemlib:strontium_oxide_dust"
  ],
  "strontium_sulfate": [
    "chemlib:strontium_sulfate_dust"
  ],
  "sucrose": [
    "chemlib:sucrose_dust"
  ],
  "sulfur": [
    "chemlib:sulfur_dust",
    "ftbmaterials:sulfur",
    "ftbmaterials:sulfur_dust",
    "immersiveengineering:dust_sulfur",
    "mekanism:dust_sulfur",
    "nuclearcraft:sulfur_dust"
  ],
  "super_alloy": [
    "nuclearcraft:super_alloy_ingot"
  ],
  "supremium": [
    "mysticalagriculture:supremium_gemstone",
    "mysticalagriculture:supremium_ingot"
  ],
  "tantalum": [
    "chemlib:tantalum_dust",
    "chemlib:tantalum_ingot"
  ],
  "tbp": [
    "nuclearcraft:tbp_dust"
  ],
  "tellurium": [
    "chemlib:tellurium_dust"
  ],
  "terbium": [
    "chemlib:terbium_dust",
    "chemlib:terbium_ingot",
    "nuclearcraft:terbium_dust"
  ],
  "terminite": [
    "betterend:terminite_ingot"
  ],
  "terran": [
    "divinerpg:terran_stone"
  ],
  "terrasteel": [
    "botania:terrasteel_ingot"
  ],
  "tertium": [
    "mysticalagriculture:tertium_gemstone",
    "mysticalagriculture:tertium_ingot"
  ],
  "thallasium": [
    "betterend:thallasium_ingot"
  ],
  "thallium": [
    "chemlib:thallium_dust",
    "chemlib:thallium_ingot",
    "nuclearcraft:thallium_dust"
  ],
  "the_ultimate": [
    "extendedcrafting:the_ultimate_ingot"
  ],
  "thermoconducting": [
    "nuclearcraft:thermoconducting_dust",
    "nuclearcraft:thermoconducting_ingot"
  ],
  "thorium": [
    "chemlib:thorium_dust",
    "chemlib:thorium_ingot",
    "nuclearcraft:thorium_dust",
    "nuclearcraft:thorium_ingot"
  ],
  "thulium": [
    "chemlib:thulium_dust",
    "chemlib:thulium_ingot"
  ],
  "tin": [
    "chemlib:tin_dust",
    "chemlib:tin_ingot",
    "enderio:powdered_tin",
    "ftbmaterials:tin_dust",
    "ftbmaterials:tin_ingot",
    "mekanism:dust_tin",
    "mekanism:ingot_tin",
    "nuclearcraft:tin_dust",
    "nuclearcraft:tin_ingot",
    "thermal:tin_dust",
    "thermal:tin_ingot"
  ],
  "tin_oxide": [
    "chemlib:tin_oxide_dust"
  ],
  "tin_silver": [
    "nuclearcraft:tin_silver_dust",
    "nuclearcraft:tin_silver_ingot"
  ],
  "tin_sulfate": [
    "chemlib:tin_sulfate_dust"
  ],
  "titanium": [
    "chemlib:titanium_dust",
    "chemlib:titanium_ingot",
    "ftbmaterials:titanium_dust",
    "ftbmaterials:titanium_ingot",
    "nuclearcraft:titanium_dust",
    "nuclearcraft:titanium_ingot"
  ],
  "tornium": [
    "mystical_extended_tier:tornium_gemstone",
    "mystical_extended_tier:tornium_ingot"
  ],
  "torridite": [
    "divinerpg:torridite_ingot"
  ],
  "tough_alloy": [
    "nuclearcraft:tough_alloy_dust",
    "nuclearcraft:tough_alloy_ingot"
  ],
  "triglyceride": [
    "chemlib:triglyceride_dust"
  ],
  "tungsten": [
    "chemlib:tungsten_dust",
    "chemlib:tungsten_ingot",
    "ftbmaterials:tungsten_dust",
    "ftbmaterials:tungsten_ingot",
    "neoecoae:tungsten_dust",
    "neoecoae:tungsten_ingot",
    "nuclearcraft:tungsten_dust",
    "nuclearcraft:tungsten_ingot"
  ],
  "tungsten_carbide": [
    "nuclearcraft:tungsten_carbide_ingot"
  ],
  "uranium": [
    "bigreactors:yellorium_dust",
    "bigreactors:yellorium_ingot",
    "chemlib:uranium_dust",
    "chemlib:uranium_ingot",
    "ftbmaterials:uranium_dust",
    "ftbmaterials:uranium_ingot",
    "immersiveengineering:dust_uranium",
    "immersiveengineering:ingot_uranium",
    "mekanism:dust_uranium",
    "mekanism:ingot_uranium",
    "nuclearcraft:uranium_dust",
    "nuclearcraft:uranium_ingot"
  ],
  "urea": [
    "chemlib:urea_dust"
  ],
  "utherium": [
    "undergarden:utherium_crystal"
  ],
  "valkyrum": [
    "aether_treasure_reforging:valkyrum_ingot",
    "ancient_aether:valkyrum"
  ],
  "vanadium": [
    "chemlib:vanadium_dust",
    "chemlib:vanadium_ingot"
  ],
  "varsium": [
    "aoa3:varsium_ingot"
  ],
  "veridium": [
    "aether_redux:veridium_ingot"
  ],
  "vibrant_alloy": [
    "enderio:vibrant_alloy_ingot"
  ],
  "vibrant_crystal": [
    "enderio:vibrant_crystal"
  ],
  "villiaumite": [
    "nuclearcraft:villiaumite_dust",
    "nuclearcraft:villiaumite_gem"
  ],
  "void": [
    "valoria:void_ingot"
  ],
  "weather_crystal": [
    "enderio:weather_crystal"
  ],
  "wildwood": [
    "divinerpg:wildwood_dust",
    "divinerpg:wildwood_gem"
  ],
  "witherite": [
    "cataclysm:witherite_ingot"
  ],
  "wood": [
    "immersiveengineering:dust_wood",
    "mekanism:sawdust"
  ],
  "yellorium": [
    "bigreactors:yellorium_dust",
    "bigreactors:yellorium_ingot"
  ],
  "yellowcake": [
    "nuclearcraft:yellowcake_dust"
  ],
  "ytterbium": [
    "chemlib:ytterbium_dust",
    "chemlib:ytterbium_ingot",
    "nuclearcraft:ytterbium_dust"
  ],
  "yttrium": [
    "chemlib:yttrium_dust",
    "chemlib:yttrium_ingot",
    "nuclearcraft:yttrium_dust",
    "nuclearcraft:yttrium_ingot"
  ],
  "zanite": [
    "aether:zanite_gemstone"
  ],
  "zinc": [
    "chemlib:zinc_dust",
    "chemlib:zinc_ingot",
    "ftbmaterials:zinc_dust",
    "ftbmaterials:zinc_ingot",
    "nuclearcraft:zinc_dust",
    "nuclearcraft:zinc_ingot"
  ],
  "zinc_carbonate": [
    "chemlib:zinc_carbonate_dust"
  ],
  "zinc_hydroxide": [
    "chemlib:zinc_hydroxide_dust"
  ],
  "zinc_nitrate": [
    "chemlib:zinc_nitrate_dust"
  ],
  "zinc_oxide": [
    "chemlib:zinc_oxide_dust"
  ],
  "zinc_sulfate": [
    "chemlib:zinc_sulfate_dust"
  ],
  "zinc_sulfide": [
    "chemlib:zinc_sulfide_dust"
  ],
  "zircaloy": [
    "nuclearcraft:zircaloy_dust",
    "nuclearcraft:zircaloy_ingot"
  ],
  "zirconium": [
    "chemlib:zirconium_dust",
    "chemlib:zirconium_ingot",
    "nuclearcraft:zirconium_dust",
    "nuclearcraft:zirconium_ingot"
  ],
  "zirconium_molybdenum": [
    "nuclearcraft:zirconium_molybdenum_dust",
    "nuclearcraft:zirconium_molybdenum_ingot"
  ]
};
  var hazardous = {advancement: 'modpack:void_contain', items: {}, block_states: {}};
  var blacklist = {advancement: 'modpack:blacklist', items: {}, block_states: {}};
  var blockedMaterials = {};
  var audit = {blockedMaterials: {}, hazardousItems: [], blacklistedItems: []};
  function shared(material) {
    var ids = external[String(material.getName())] || [];
    for (var n = 0; n < ids.length; n++) { if (Item.exists(ids[n])) return true; }
    return false;
  }
  function unique(material) {
    return material && !material.isNull() &&
      (material.hasProperty(Keys.DUST) || material.hasProperty(Keys.INGOT)) && !shared(material);
  }
  var materials = API.materialManager.getRegisteredMaterials().iterator();
  while (materials.hasNext()) {
    var material = materials.next();
    if (!material.hasProperty(Keys.ORE)) continue;
    var ore = material.getProperty(Keys.ORE);
    var candidates = [material, ore.getDirectSmeltResult()];
    var byproducts = ore.getOreByProducts().iterator();
    while (byproducts.hasNext()) candidates.push(byproducts.next());
    var separated = ore.getSeparatedInto().iterator();
    while (separated.hasNext()) candidates.push(separated.next());
    var reasons = [];
    candidates.forEach(function (candidate) {
      if (unique(candidate) && reasons.indexOf(String(candidate.getName())) < 0) reasons.push(String(candidate.getName()));
    });
    if (reasons.length) {
      blockedMaterials[String(material.getName())] = true;
      audit.blockedMaterials[String(material.getName())] = reasons;
    }
  }
  var items = Registries.ITEM.iterator();
  while (items.hasNext()) {
    var item = items.next();
    var id = String(Registries.ITEM.getKey(item));
    if (id.indexOf('gtceu:') !== 0) continue;
    var stack = Item.of(id);
    var entry = Chemical.getMaterialEntry(item);
    var oreBlocked = false;
    if (!entry.isEmpty()) {
      oreBlocked = !!blockedMaterials[String(entry.material().getName())] &&
        (Prefixes.ORES.containsKey(entry.tagPrefix()) || entry.tagPrefix().equals(Prefixes.rawOre) || entry.tagPrefix().equals(Prefixes.rawOreBlock));
    }
    var hazardMaterial = Hazard.getValidHazardMaterial(stack);
    var isHazard = Config.INSTANCE.gameplay.hazardsEnabled && !hazardMaterial.isNull();
    if (!oreBlocked && !isHazard) continue;
    var rule = oreBlocked ? blacklist : hazardous;
    var disguise = 'minecraft:stone';
    if (!entry.isEmpty()) {
      // Match the ore variant: the same material can occur in several dimensions.
      if (entry.tagPrefix().equals(Prefixes.oreNetherrack)) disguise = 'minecraft:netherrack';
      else if (entry.tagPrefix().equals(Prefixes.oreEndstone)) disguise = 'minecraft:end_stone';
    }
    rule.items[id] = item instanceof BlockItem ? disguise : 'minecraft:paper';
    if (item instanceof BlockItem) {
      // Expand every state: mappings cannot leave rotated/waterlogged variants revealed.
      var states = item.getBlock().getStateDefinition().getPossibleStates().iterator();
      while (states.hasNext()) {
        var state = states.next();
        var stateText = String(state);
        var suffix = stateText.indexOf('[') >= 0 ? stateText.substring(stateText.indexOf('[')) : '';
        rule.block_states[id + suffix] = disguise;
      }
    }
    (oreBlocked ? audit.blacklistedItems : audit.hazardousItems).push(id);
  }
  event.addJson('reality_reversal:revelations/gt_hazards', hazardous);
  event.addJson('reality_reversal:revelations/gt_ore_blacklist', blacklist);
});
