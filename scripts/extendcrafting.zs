// Reality Reversal: Extended Crafting recipes for Minecraft 1.21.1.
// Native CraftTweaker managers; compatible with Extended Crafting recipe exports.
// Edit the calls below directly. Missing entries use named kubejs:missing_* items.
// Those items are registered separately by the KubeJS startup placeholder scripts.
// 1.21 uses <tag:item:...> and data components instead of legacy item NBT.
// Combination API: name, output, core item, pedestal items, power cost[, power/tick].

import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;

// crafttweaker:transmutation_table
<recipetype:extendedcrafting:table>.addShaped("transmutation_table", 3, <item:projecte:transmutation_table>, [
    [<item:mekanism:ingot_refined_obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:mekanism:ingot_refined_obsidian>],
    [<item:minecraft:obsidian>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:mekanism:ingot_refined_glowstone>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:minecraft:obsidian>],
    [<item:minecraft:obsidian>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:mekanism:ingot_refined_glowstone>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:minecraft:obsidian>],
    [<item:minecraft:obsidian>, <item:mekanism:alloy_reinforced>, <item:mekanism:alloy_reinforced>, <item:projecte:philosophers_stone>, <item:mekanism:alloy_reinforced>, <item:mekanism:alloy_reinforced>, <item:minecraft:obsidian>],
    [<item:minecraft:obsidian>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:mekanism:ingot_refined_glowstone>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:minecraft:obsidian>],
    [<item:minecraft:obsidian>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:mekanism:ingot_refined_glowstone>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:minecraft:obsidian>],
    [<item:mekanism:ingot_refined_obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:mekanism:ingot_refined_obsidian>]
]);

// crafttweaker:philosophers_stone
<recipetype:extendedcrafting:table>.addShaped("philosophers_stone", 2, <item:projecte:philosophers_stone>, [
    [<item:minecraft:glowstone_dust>, <item:minecraft:air>, <item:mekanism:alloy_infused>, <item:minecraft:air>, <item:minecraft:glowstone_dust>],
    [<item:minecraft:air>, <item:mekanism:alloy_infused>, <item:minecraft:quartz>, <item:mekanism:alloy_infused>, <item:minecraft:air>],
    [<item:mekanism:alloy_infused>, <item:minecraft:quartz>, <item:mekanism:enriched_diamond>, <item:minecraft:quartz>, <item:mekanism:alloy_infused>],
    [<item:minecraft:air>, <item:mekanism:alloy_infused>, <item:minecraft:quartz>, <item:mekanism:alloy_infused>, <item:minecraft:air>],
    [<item:minecraft:glowstone_dust>, <item:minecraft:air>, <item:mekanism:alloy_infused>, <item:minecraft:air>, <item:minecraft:glowstone_dust>]
]);

// crafttweaker:eyes1
<recipetype:extendedcrafting:table>.addShaped("eyes1", 0, <item:kubejs:eyes1>, [
    [<item:projecte:dark_matter>, <item:dimdoors:frayed_filament>, <item:minecraft:air>, <item:minecraft:air>, <item:dimdoors:amalgam_lump>, <item:minecraft:air>, <item:minecraft:air>, <item:dimdoors:driftwood_log>, <item:mekanism:ingot_refined_glowstone>],
    [<item:minecraft:air>, <item:projecte:dark_matter>, <item:dimdoors:frayed_filament>, <item:minecraft:air>, <item:dimdoors:amalgam_lump>, <item:minecraft:air>, <item:dimdoors:driftwood_log>, <item:mekanism:ingot_refined_glowstone>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:projecte:dark_matter>, <item:dimdoors:frayed_filament>, <item:dimdoors:amalgam_lump>, <item:dimdoors:driftwood_log>, <item:mekanism:ingot_refined_glowstone>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:black_iron_ingot>, <item:minecraft:nether_bricks>, <item:mekanism:advanced_control_circuit>, <item:minecraft:nether_wart_block>, <item:extendedcrafting:black_iron_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:dimdoors:clod>, <item:dimdoors:clod>, <item:dimdoors:clod>, <item:divinerpg:torridite_ingot>, <item:dimdoors:leak_bucket>, <item:divinerpg:bloodgem>, <item:dimdoors:clod>, <item:dimdoors:clod>, <item:dimdoors:clod>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:black_iron_ingot>, <item:minecraft:nether_wart_block>, <item:mekanism:advanced_control_circuit>, <item:minecraft:nether_bricks>, <item:extendedcrafting:black_iron_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:mekanism:alloy_atomic>, <item:mekanism:ingot_refined_obsidian>, <item:dimdoors:amalgam_lump>, <item:dimdoors:solid_static>, <item:projecte:red_matter>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:mekanism:alloy_atomic>, <item:mekanism:ingot_refined_obsidian>, <item:minecraft:air>, <item:dimdoors:amalgam_lump>, <item:minecraft:air>, <item:dimdoors:solid_static>, <item:projecte:red_matter>, <item:minecraft:air>],
    [<item:mekanism:alloy_atomic>, <item:mekanism:ingot_refined_obsidian>, <item:minecraft:air>, <item:minecraft:air>, <item:dimdoors:amalgam_lump>, <item:minecraft:air>, <item:minecraft:air>, <item:dimdoors:solid_static>, <item:projecte:red_matter>]
]);

// crafttweaker:ghastly_ingot
<recipetype:extendedcrafting:table>.addShaped("ghastly_ingot", 2, <item:aoa3:ghastly_ingot> * 2, [
    [<item:twilightforest:naga_scale>, <item:twilightforest:naga_scale>, <item:twilightforest:carminite>, <item:twilightforest:exanimate_essence>, <item:twilightforest:exanimate_essence>],
    [<item:twilightforest:fiery_ingot>, <item:twilightforest:fiery_blood>, <item:enderio:dark_steel_ingot>, <item:twilightforest:fiery_blood>, <item:twilightforest:fiery_ingot>],
    [<item:twilightforest:steeleaf_ingot>, <item:twilightforest:steeleaf_ingot>, <item:twilightforest:carminite>, <item:twilightforest:knightmetal_ingot>, <item:twilightforest:knightmetal_ingot>]
]);

// crafttweaker:snow_globe
<recipetype:extendedcrafting:combination>.addRecipe("snow_globe", <item:divinerpg:snow_globe>,
    <item:divinerpg:ice_stone>, [
        <item:divinerpg:shadow_stone>,
        <item:enderio:clear_glass>,
        <item:enderio:clear_glass>,
        <item:enderio:clear_glass>,
        <item:ae2:quartz_glass>,
        <item:ae2:quartz_glass>,
        <item:enderio:end_steel_ingot>,
        <item:enderio:end_steel_ingot>
    ], 100000);

// crafttweaker:aether_portal_frame
<recipetype:extendedcrafting:table>.addShaped("aether_portal_frame", 3, <item:aether:aether_portal_frame>, [
    [<item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:minecraft:purpur_block>, <item:minecraft:chorus_fruit>, <item:minecraft:chorus_fruit>, <item:minecraft:chorus_fruit>, <item:minecraft:purpur_block>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:minecraft:purpur_block>, <item:minecraft:chorus_fruit>, <item:minecraft:water_bucket>, <item:minecraft:chorus_fruit>, <item:minecraft:purpur_block>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:minecraft:purpur_block>, <item:minecraft:chorus_fruit>, <item:minecraft:chorus_fruit>, <item:minecraft:chorus_fruit>, <item:minecraft:purpur_block>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:minecraft:purpur_block>, <item:mekanism:ingot_refined_glowstone>],
    [<item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>]
]);

// crafttweaker:laputan_orb
<recipetype:extendedcrafting:table>.addShaped("laputan_orb", 4, <item:castle_in_the_sky:laputa_miniature>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:enhanced_ender_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:extendedcrafting:enhanced_ender_ingot>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:enderio:energetic_alloy_ingot>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:aoa3:ghastly_ingot>, <item:minecraft:air>, <item:aoa3:ghastly_ingot>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>],
    [<item:extendedcrafting:enhanced_ender_ingot>, <item:extendedcrafting:enhanced_ender_ingot>, <item:enderio:energetic_alloy_ingot>, <item:minecraft:air>, <item:extendedcrafting:ender_star>, <item:minecraft:air>, <item:enderio:energetic_alloy_ingot>, <item:extendedcrafting:enhanced_ender_ingot>, <item:extendedcrafting:enhanced_ender_ingot>],
    [<item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:aoa3:ghastly_ingot>, <item:minecraft:air>, <item:aoa3:ghastly_ingot>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:enderio:energetic_alloy_ingot>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:mekanism:basic_control_circuit>, <item:extendedcrafting:enhanced_ender_ingot>, <item:mekanism:basic_control_circuit>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:enhanced_ender_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// crafttweaker:nuclearcraft_basic_plating_easy
<recipetype:extendedcrafting:table>.addShaped("nuclearcraft_basic_plating_easy", 1, <item:nuclearcraft:plate_basic>, [
    [<item:aoa3:ghastly_ingot>, <item:divinerpg:arcanium>, <item:aoa3:ghastly_ingot>],
    [<item:divinerpg:arcanium>, <item:spectrum:citrine_shard>, <item:divinerpg:arcanium>],
    [<item:aoa3:ghastly_ingot>, <item:divinerpg:arcanium>, <item:aoa3:ghastly_ingot>]
]);

// crafttweaker:ae2_charger
<recipetype:extendedcrafting:table>.addShaped("ae2_charger", 1, <item:ae2:charger>, [
    [<item:mekanism:alloy_atomic>, <tag:item:c:ingots/iridium>, <tag:item:c:ingots/iridium>],
    [<item:divinerpg:legendary_ender_eye>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:mekanism:alloy_atomic>, <tag:item:c:ingots/iridium>, <tag:item:c:ingots/iridium>]
]);

// crafttweaker:harsh_voidminers_rubetine
<recipetype:extendedcrafting:table>.addShaped("harsh_voidminers_rubetine", 0, <item:voidminersremastered:rubetine>, [
    [<item:twilightforest:fiery_ingot>, <tag:item:c:ingots/gold>, <item:enderio:energetic_alloy_ingot>, <item:draconicevolution:draconium_ingot>, <tag:item:c:ingots/copper>, <item:draconicevolution:draconium_ingot>, <item:enderio:energetic_alloy_ingot>, <tag:item:c:ingots/gold>, <item:twilightforest:fiery_ingot>],
    [<item:extendedcrafting:ender_ingot>, <item:enderio:end_steel_ingot>, <item:twilightforest:knightmetal_ingot>, <tag:item:c:ingots/tin>, <item:extendedcrafting:enhanced_ender_ingot>, <tag:item:c:ingots/tin>, <item:twilightforest:knightmetal_ingot>, <item:enderio:end_steel_ingot>, <item:extendedcrafting:ender_ingot>],
    [<item:extendedcrafting:enhanced_redstone_ingot>, <item:oritech:enderic_compound>, <item:enderio:pulsating_alloy_ingot>, <tag:item:c:ingots/constantan>, <tag:item:c:ingots/nickel>, <tag:item:c:ingots/constantan>, <item:enderio:redstone_alloy_ingot>, <item:nuclearcraft:lithium_ingot>, <item:extendedcrafting:enhanced_redstone_ingot>],
    [<item:divinerpg:realmite_ingot>, <tag:item:c:ingots/platinum>, <item:mekanism:ingot_refined_obsidian>, <item:divinerpg:hellstone_ingot>, <item:divinerpg:rupee_ingot>, <item:divinerpg:torridite_ingot>, <item:mekanism:ingot_refined_obsidian>, <tag:item:c:ingots/uranium>, <item:divinerpg:aquatic_ingot>],
    [<tag:item:c:ingots/iron>, <tag:item:c:ingots/steel>, <item:enderio:dark_steel_ingot>, <item:divinerpg:arlemite_ingot>, <item:aoa3:ghastly_ingot>, <item:divinerpg:arlemite_ingot>, <item:enderio:dark_steel_ingot>, <tag:item:c:ingots/steel>, <tag:item:c:ingots/iron>],
    [<item:divinerpg:realmite_ingot>, <tag:item:c:ingots/uranium>, <item:mekanism:ingot_refined_glowstone>, <item:divinerpg:torridite_ingot>, <item:divinerpg:rupee_ingot>, <item:divinerpg:hellstone_ingot>, <item:mekanism:ingot_refined_glowstone>, <tag:item:c:ingots/platinum>, <item:divinerpg:aquatic_ingot>],
    [<item:extendedcrafting:redstone_ingot>, <item:oritech:enderic_compound>, <item:enderio:pulsating_alloy_ingot>, <tag:item:c:ingots/lead>, <tag:item:c:ingots/nickel>, <tag:item:c:ingots/lead>, <item:enderio:redstone_alloy_ingot>, <item:nuclearcraft:lithium_ingot>, <item:extendedcrafting:redstone_ingot>],
    [<item:extendedcrafting:black_iron_ingot>, <item:enderio:soularium_ingot>, <item:mekanism:ingot_osmium>, <item:twilightforest:ironwood_ingot>, <item:extendedcrafting:enhanced_ender_ingot>, <item:twilightforest:ironwood_ingot>, <item:mekanism:ingot_osmium>, <item:enderio:soularium_ingot>, <item:extendedcrafting:black_iron_ingot>],
    [<tag:item:c:ingots/stainless_steel>, <item:minecraft:netherite_ingot>, <item:enderio:vibrant_alloy_ingot>, <item:enderio:conductive_alloy_ingot>, <tag:item:c:ingots/copper>, <item:enderio:conductive_alloy_ingot>, <item:enderio:vibrant_alloy_ingot>, <item:minecraft:netherite_ingot>, <tag:item:c:ingots/stainless_steel>]
]);

// crafttweaker:law_ingot
<recipetype:extendedcrafting:table>.addShaped("law_ingot", 3, <item:kubejs:law_ingot> * 12, [
    [<item:minecraft:spider_eye>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:rotten_flesh>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:spider_eye>],
    [<item:minecraft:air>, <item:minecraft:ender_pearl>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:ender_pearl>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:bone_block>, <item:minecraft:string>, <item:minecraft:rotten_flesh>, <item:minecraft:string>, <item:minecraft:bone_block>, <item:minecraft:air>],
    [<item:minecraft:blaze_rod>, <item:minecraft:air>, <item:minecraft:dragon_egg>, <item:minecraft:magma_cream>, <item:minecraft:dragon_egg>, <item:minecraft:air>, <item:minecraft:blaze_rod>],
    [<item:minecraft:air>, <item:minecraft:bone_block>, <item:minecraft:string>, <item:minecraft:rotten_flesh>, <item:minecraft:string>, <item:minecraft:bone_block>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:ender_pearl>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:ender_pearl>, <item:minecraft:air>],
    [<item:minecraft:spider_eye>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:rotten_flesh>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:spider_eye>]
]);

// crafttweaker:loot_fabricator
<recipetype:extendedcrafting:table>.addShaped("loot_fabricator", 1, <item:hostilenetworks:loot_fabricator>, [
    [<item:divinerpg:oxdrite_ingot>, <item:bigreactors:anglesite_crystal>, <item:divinerpg:oxdrite_ingot>],
    [<item:bigreactors:anglesite_crystal>, <item:woot_revived:stygian_ingot>, <item:bigreactors:anglesite_crystal>],
    [<item:divinerpg:oxdrite_ingot>, <item:bigreactors:anglesite_crystal>, <item:divinerpg:oxdrite_ingot>]
]);

// crafttweaker:stygian_dust
<recipetype:extendedcrafting:table>.addShaped("stygian_dust", 2, <item:woot_revived:stygian_dust> * 64, [
    [<item:aether:enchanted_gravitite>, <item:malum:aqueous_spirit>, <item:actuallyadditions:black_quartz>, <item:malum:earthen_spirit>, <item:aether:enchanted_gravitite>],
    [<item:malum:sacred_spirit>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:malum:wicked_spirit>],
    [<item:actuallyadditions:black_quartz>, <item:mysticalagriculture:inferium_essence>, <item:kubejs:modular_ingot>, <item:mysticalagriculture:inferium_essence>, <item:actuallyadditions:black_quartz>],
    [<item:malum:eldritch_spirit>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:malum:infernal_spirit>],
    [<item:aether:enchanted_gravitite>, <item:malum:arcane_spirit>, <item:actuallyadditions:black_quartz>, <item:malum:aerial_spirit>, <item:aether:enchanted_gravitite>]
]);

// crafttweaker:infernium_crystal
<recipetype:extendedcrafting:table>.addShaped("infernium_crystal", 1, <item:matc:inferium_crystal>, [
    [<item:malum:soul_stained_steel_ingot>, <item:mysticalagriculture:prosperity_shard>, <item:malum:soul_stained_steel_ingot>],
    [<item:mysticalagriculture:prosperity_shard>, <item:mysticalagriculture:inferium_gemstone>, <item:mysticalagriculture:prosperity_shard>],
    [<item:malum:soul_stained_steel_ingot>, <item:mysticalagriculture:prosperity_shard>, <item:malum:soul_stained_steel_ingot>]
]);

// crafttweaker:prudentium_crystal
<recipetype:extendedcrafting:table>.addShaped("prudentium_crystal", 2, <item:matc:prudentium_crystal>, [
    [<item:spectrum:lime_sapling>, <item:spectrum:yellow_sapling>, <item:voidminersremastered:rubetine>, <item:spectrum:orange_sapling>, <item:spectrum:light_blue_sapling>],
    [<item:divinerpg:arcanite_stone>, <item:spectrum:vegetal>, <item:voidminersremastered:rubetine>, <item:spectrum:vegetal>, <item:divinerpg:arcanite_sand>],
    [<item:divinerpg:arcanite_stone>, <item:spectrum:vegetal>, <item:matc:inferium_crystal>, <item:spectrum:vegetal>, <item:divinerpg:arcanite_sand>],
    [<item:divinerpg:arcanite_stone>, <item:spectrum:vegetal>, <item:voidminersremastered:rubetine>, <item:spectrum:vegetal>, <item:divinerpg:arcanite_sand>],
    [<item:spectrum:pink_sapling>, <item:spectrum:purple_sapling>, <item:voidminersremastered:rubetine>, <item:spectrum:cyan_sapling>, <item:spectrum:blue_sapling>]
]);

// crafttweaker:onyx_ore
<recipetype:extendedcrafting:ender_crafter>.addShaped("onyx_ore", <item:spectrum:onyx_ore> * 2, [
    [<item:spectrum:amethyst_powder>, <item:minecraft:air>, <item:spectrum:topaz_powder>],
    [<item:minecraft:air>, <item:primalmagick:primalite_ingot>, <item:minecraft:air>],
    [<item:dimdoors:amalgam_block>, <item:spectrum:citrine_powder>, <item:dimdoors:clod_block>]
]);

// crafttweaker:tertium_crystal
<recipetype:extendedcrafting:table>.addShaped("tertium_crystal", 3, <item:matc:tertium_crystal>, [
    [<item:actuallyadditions:empowered_diamatine_crystal_block>, <item:actuallyadditions:empowered_diamatine_crystal_block>, <item:actuallyadditions:empowered_palis_crystal_block>, <item:actuallyadditions:empowered_palis_crystal_block>, <item:actuallyadditions:empowered_palis_crystal_block>, <item:actuallyadditions:empowered_emeradic_crystal_block>, <item:actuallyadditions:empowered_emeradic_crystal_block>],
    [<item:actuallyadditions:empowered_diamatine_crystal_block>, <item:mekanism:advanced_fluid_tank>.withJsonComponents({"mekanism:fluids": {"fluid_tanks": [{"id": "mekanism:sulfuric_acid", "amount": 64000}]}}), <item:industrialforegoing:plastic>, <item:industrialforegoing:plastic>, <item:industrialforegoing:plastic>, <item:mekanism:advanced_fluid_tank>.withJsonComponents({"mekanism:fluids": {"fluid_tanks": [{"id": "immersivepetroleum:naphtha", "amount": 64000}]}}), <item:actuallyadditions:empowered_emeradic_crystal_block>],
    [<item:divinerpg:oxdrite_ingot>, <item:projecte:red_matter>, <item:ae2:calculation_processor>, <item:ae2:fluix_crystal>, <item:ae2:logic_processor>, <item:projecte:dark_matter>, <item:primalmagick:primalite_ingot>],
    [<item:divinerpg:oxdrite_ingot>, <item:projecte:dark_matter>, <item:ae2:engineering_processor>, <item:matc:prudentium_crystal>, <item:ae2:engineering_processor>, <item:projecte:red_matter>, <item:primalmagick:primalite_ingot>],
    [<item:divinerpg:oxdrite_ingot>, <item:projecte:red_matter>, <item:ae2:calculation_processor>, <item:ae2:fluix_crystal>, <item:ae2:logic_processor>, <item:projecte:dark_matter>, <item:primalmagick:primalite_ingot>],
    [<item:actuallyadditions:empowered_enori_crystal_block>, <item:mekanism:advanced_fluid_tank>.withJsonComponents({"mekanism:fluids": {"fluid_tanks": [{"id": "oritech:still_heavy_oil", "amount": 64000}]}}), <item:spectrum:onyx_shard>, <item:spectrum:onyx_shard>, <item:spectrum:onyx_shard>, <item:mekanism:advanced_fluid_tank>.withJsonComponents({"mekanism:fluids": {"fluid_tanks": [{"id": "immersivepetroleum:diesel", "amount": 64000}]}}), <item:actuallyadditions:empowered_restonia_crystal_block>],
    [<item:actuallyadditions:empowered_enori_crystal_block>, <item:actuallyadditions:empowered_enori_crystal_block>, <item:actuallyadditions:empowered_void_crystal_block>, <item:actuallyadditions:empowered_void_crystal_block>, <item:actuallyadditions:empowered_void_crystal_block>, <item:actuallyadditions:empowered_restonia_crystal_block>, <item:actuallyadditions:empowered_restonia_crystal_block>]
]);

// crafttweaker:imperium_crystal
<recipetype:extendedcrafting:table>.addShaped("imperium_crystal", 4, <item:matc:imperium_crystal>, [
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:mekanism:ultimate_control_circuit>, <item:fluxnetworks:flux_block>, <item:fluxnetworks:flux_block>, <item:fluxnetworks:flux_block>, <item:mekanism:ingot_refined_obsidian>],
    [<item:dimdoors:frayed_filament>, <item:twilightforest:castle_brick>, <item:twilightforest:castle_brick>, <item:twilightforest:castle_brick>, <item:mekanism:ultimate_control_circuit>, <item:enderio:pulsating_crystal>, <item:enderio:pulsating_crystal>, <item:enderio:pulsating_crystal>, <item:mekanism:ingot_refined_obsidian>],
    [<item:dimdoors:frayed_filament>, <item:twilightforest:castle_brick>, <item:mekanism:alloy_infused>, <item:mekanism:alloy_infused>, <item:mekanism:ultimate_control_circuit>, <item:mekanism:ultimate_control_circuit>, <item:mekanism:ultimate_control_circuit>, <item:enderio:pulsating_crystal>, <item:mekanism:ingot_refined_obsidian>],
    [<item:dimdoors:frayed_filament>, <item:twilightforest:castle_brick>, <item:mekanism:alloy_infused>, <item:mekanism:alloy_infused>, <item:mekanism:ultimate_control_circuit>, <item:mekanism:ultimate_control_circuit>, <item:mekanism:ultimate_control_circuit>, <item:enderio:pulsating_crystal>, <item:mekanism:ingot_refined_obsidian>],
    [<item:nuclearcraft:shibuichi_ingot>, <item:nuclearcraft:shibuichi_ingot>, <item:nuclearcraft:shibuichi_ingot>, <item:nuclearcraft:shibuichi_ingot>, <item:matc:tertium_crystal>, <item:nuclearcraft:stainless_steel_ingot>, <item:nuclearcraft:stainless_steel_ingot>, <item:nuclearcraft:stainless_steel_ingot>, <item:nuclearcraft:stainless_steel_ingot>],
    [<item:kubejs:law_ingot>, <item:projectexpansion:magenta_emc_link>, <item:mekanism:alloy_atomic>, <item:mekanism:alloy_atomic>, <item:dimdoors:world_thread>, <item:mekanism:advanced_control_circuit>, <item:mekanism:advanced_control_circuit>, <item:mekanism:hdpe_stick>, <item:fluxnetworks:flux_block>],
    [<item:kubejs:law_ingot>, <item:projectexpansion:magenta_emc_link>, <item:mekanism:alloy_atomic>, <item:mekanism:alloy_atomic>, <item:dimdoors:world_thread>, <item:mekanism:advanced_control_circuit>, <item:mekanism:advanced_control_circuit>, <item:mekanism:hdpe_stick>, <item:fluxnetworks:flux_block>],
    [<item:kubejs:law_ingot>, <item:projectexpansion:magenta_emc_link>, <item:projectexpansion:magenta_emc_link>, <item:projectexpansion:magenta_emc_link>, <item:dimdoors:world_thread>, <item:mekanism:hdpe_stick>, <item:mekanism:hdpe_stick>, <item:mekanism:hdpe_stick>, <item:fluxnetworks:flux_block>],
    [<item:kubejs:law_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:dimdoors:world_thread>, <item:bigreactors:cyanite_ingot>, <item:bigreactors:cyanite_ingot>, <item:bigreactors:cyanite_ingot>, <item:bigreactors:cyanite_ingot>]
]);

// crafttweaker:supremium_crystal
<recipetype:extendedcrafting:table>.addShaped("supremium_crystal", 4, <item:matc:supremium_crystal>, [
    [<item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:divinerpg:arcanium_block>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:divinerpg:arcanium_block>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:divinerpg:arcanium_block>, <item:minecraft:dragon_egg>, <item:matc:imperium_crystal>, <item:minecraft:dragon_egg>, <item:divinerpg:arcanium_block>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:divinerpg:arcanium_block>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:divinerpg:arcanium_block>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:divinerpg:arcanium_block>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:aether:icestone>, <item:minecraft:end_stone>],
    [<item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>]
]);

// crafttweaker:botania_petal_apothecary
<recipetype:extendedcrafting:table>.addShaped("botania_petal_apothecary", 2, <item:botania:apothecary_default>, [
    [<item:enderio:dark_steel_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:enderio:dark_steel_ingot>],
    [<item:enderio:dark_steel_ingot>, <item:enderio:dark_steel_ingot>, <item:minecraft:end_stone>, <item:enderio:dark_steel_ingot>, <item:enderio:dark_steel_ingot>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:end_stone>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:air>],
    [<item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>]
]);

// crafttweaker:modularium_simple
<recipetype:extendedcrafting:combination>.addRecipe("modularium_simple", <item:kubejs:modular_ingot> * 8,
    <item:malum:soul_stained_steel_ingot>, [
        <item:nuclearcraft:tough_alloy_ingot>,
        <item:extendedcrafting:crystaltine_block>,
        <item:spectrum:liquid_crystal_bucket>,
        <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:overworld"}}),
        <item:botania:dragonstone>,
        <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:overworld"}}),
        <item:projectexpansion:magenta_matter>,
        <item:botania:dreamwood>,
        <item:kubejs:law_ingot>,
        <item:malum:warp_flux>,
        <item:botania:elementium_ingot>,
        <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:end"}}),
        <item:bigreactors:redfrigium_bucket>,
        <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:nether"}}),
        <item:divinerpg:hellstone_ingot>,
        <item:nuclearcraft:chassis>
    ], 100000);

// crafttweaker:modular_casing
<recipetype:extendedcrafting:ender_crafter>.addShaped("modular_casing", <item:hammerlib:test_machine> * 2, [
    [<item:kubejs:modular_ingot>, <item:spectrum:midnight_chip>, <item:hostilenetworks:prediction>.withJsonComponents({"hostilenetworks:data_model": "hostilenetworks:spider"})],
    [<item:enderio:pulsating_crystal>, <item:actuallyadditions:ender_casing>, <item:enderio:vibrant_crystal>],
    [<item:hostilenetworks:prediction>.withJsonComponents({"hostilenetworks:data_model": "hostilenetworks:enderman"}), <item:spectrum:midnight_chip>, <item:kubejs:modular_ingot>]
]);

// crafttweaker:creative_grimoire
<recipetype:extendedcrafting:table>.addShaped("creative_grimoire", 0, <item:primalmagick:grimoire_creative>, [
    [<item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>],
    [<item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:projectexpansion:fading_matter>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_ingot>],
    [<item:ars_nouveau:source_gem>, <item:aether:zanite_gemstone>, <item:actuallyadditions:empowered_restonia_crystal_block>, <item:projecte:dark_matter>, <item:divinerpg:parasecta_statue>, <item:projectexpansion:violet_matter>, <item:dimdoors:enduring_fibers>, <item:actuallyadditions:empowered_enori_crystal_block>, <item:divinerpg:arcanium_rich_sand>],
    [<item:ars_nouveau:source_gem>, <item:mysticalagriculture:awakened_supremium_ingot_block>, <item:spectrum:bedrock_dust>, <item:projecte:red_matter>, <item:nuclearcraft:plate_basic>, <item:projectexpansion:blue_matter>, <item:dimdoors:enduring_fibers>, <item:dimdoors:black_fabric>, <item:divinerpg:arcanium_rich_sand>],
    [<item:naturesaura:token_euphoria>, <item:aether:enchanted_gravitite>, <item:spectrum:bedrock_dust>, <item:projectexpansion:magenta_matter>, <item:dimdoors:black_fabric>, <item:projectexpansion:cyan_matter>, <item:dimdoors:enduring_fibers>, <item:actuallyadditions:empowered_emeradic_crystal_block>, <item:malum:blighted_gunk>],
    [<item:naturesaura:token_grief>, <item:aether:ambrosium_shard>, <item:actuallyadditions:empowered_void_crystal_block>, <item:projectexpansion:pink_matter>, <item:dimdoors:black_fabric>, <item:projectexpansion:green_matter>, <item:dimdoors:enduring_fibers>, <item:spectrum:bedrock_dust>, <item:malum:blighted_gunk>],
    [<item:divinerpg:icy_stone>, <item:mysticalagriculture:awakened_supremium_ingot_block>, <item:divinerpg:oxdrite_ingot>, <item:projectexpansion:purple_matter>, <item:nuclearcraft:plate_basic>, <item:projectexpansion:lime_matter>, <item:dimdoors:enduring_fibers>, <item:spectrum:bedrock_dust>, <item:mysticalextendedtier:ouranium_ingot_block>],
    [<item:divinerpg:icy_stone>, <item:dimdoors:black_fabric>, <item:actuallyadditions:empowered_palis_crystal_block>, <item:projectexpansion:white_matter>, <item:divinerpg:dramix_statue>, <item:projectexpansion:orange_matter>, <item:dimdoors:enduring_fibers>, <item:actuallyadditions:empowered_diamatine_crystal_block>, <item:mysticalextendedtier:ouranium_ingot_block>],
    [<item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:modular_ingot>]
]);

// crafttweaker:quantum_compressor
<recipetype:extendedcrafting:table>.addShaped("quantum_compressor", 2, <item:extendedcrafting:compressor>, [
    [<item:kubejs:modular_ingot>, <item:extendedcrafting:black_iron_ingot>, <item:extendedcrafting:elite_catalyst>, <item:extendedcrafting:black_iron_ingot>, <item:kubejs:modular_ingot>],
    [<item:extendedcrafting:black_iron_ingot>, <item:bigreactors:reinforced_reactorglass>, <item:bigreactors:reinforced_reactorglass>, <item:bigreactors:reinforced_reactorglass>, <item:extendedcrafting:black_iron_ingot>],
    [<item:extendedcrafting:elite_catalyst>, <item:extendedcrafting:elite_component>, <item:extendedcrafting:frame>, <item:extendedcrafting:elite_component>, <item:extendedcrafting:elite_catalyst>],
    [<item:extendedcrafting:black_iron_ingot>, <item:ae2:quartz_vibrant_glass>, <item:ae2:quartz_vibrant_glass>, <item:ae2:quartz_vibrant_glass>, <item:extendedcrafting:black_iron_ingot>],
    [<item:kubejs:modular_ingot>, <item:extendedcrafting:black_iron_ingot>, <item:extendedcrafting:elite_catalyst>, <item:extendedcrafting:black_iron_ingot>, <item:kubejs:modular_ingot>]
]);

// crafttweaker:me_controller
<recipetype:extendedcrafting:table>.addShaped("me_controller", 2, <item:ae2:controller>, [
    [<item:ae2:calculation_processor>, <item:ae2:calculation_processor>, <item:minecraft:air>, <item:ae2:logic_processor>, <item:ae2:logic_processor>],
    [<item:ae2:calculation_processor>, <item:ae2:fluix_crystal>, <item:ae2:fluix_crystal>, <item:ae2:fluix_crystal>, <item:ae2:logic_processor>],
    [<item:minecraft:air>, <item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>, <item:aoa3:ghastly_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ae2:fluix_crystal>, <item:ae2:fluix_crystal>, <item:ae2:fluix_crystal>, <item:minecraft:air>],
    [<item:ae2:engineering_processor>, <item:minecraft:air>, <item:ae2:engineering_processor>, <item:minecraft:air>, <item:ae2:engineering_processor>]
]);

// crafttweaker:hardened_component
<recipetype:extendedcrafting:table>.addShaped("hardened_component", 1, <item:oritech:machine_core_3>, [
    [<item:oritech:steel_ingot>, <item:minecraft:blaze_rod>, <item:minecraft:air>],
    [<item:oritech:steel_ingot>, <item:mekanism:enriched_redstone>, <item:mekanism:enriched_redstone>],
    [<item:oritech:steel_ingot>, <item:minecraft:blaze_rod>, <item:minecraft:air>]
]);

// crafttweaker:reinforced_component
<recipetype:extendedcrafting:table>.addShaped("reinforced_component", 2, <item:oritech:machine_core_5>, [
    [<item:oritech:electrum_ingot>, <item:oritech:electrum_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:malum:sacred_spirit>, <item:ae2:printed_calculation_processor>, <item:oritech:electrum_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:mekanism:ultimate_control_circuit>, <item:oritech:machine_core_3>, <item:malum:hallowed_gold_ingot>, <item:nuclearcraft:redstone_bucket>, <item:nuclearcraft:redstone_bucket>],
    [<item:malum:wicked_spirit>, <item:ae2:printed_engineering_processor>, <item:oritech:electrum_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:oritech:electrum_ingot>, <item:oritech:electrum_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// crafttweaker:resonant_component
<recipetype:extendedcrafting:table>.addShaped("resonant_component", 3, <item:oritech:machine_core_7>, [
    [<item:oritech:enderic_compound>, <item:oritech:heisenberg_compensator>, <item:oritech:enderic_compound>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:botania:rune_water>, <item:botania:rune_water>, <item:botania:rune_water>, <item:oritech:heisenberg_compensator>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:actuallyadditions:empowered_restonia_crystal>, <item:actuallyadditions:empowered_palis_crystal>, <item:actuallyadditions:empowered_diamatine_crystal>, <item:botania:rune_earth>, <item:oritech:enderic_compound>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:botania:rune_air>, <item:botania:rune_air>, <item:botania:rune_air>, <item:botania:rune_earth>, <item:oritech:machine_core_5>, <item:mysticalagriculture:redstone_seeds>, <item:immersiveengineering:wirecoil_redstone>],
    [<item:actuallyadditions:empowered_void_crystal>, <item:actuallyadditions:empowered_emeradic_crystal>, <item:actuallyadditions:empowered_enori_crystal>, <item:botania:rune_earth>, <item:oritech:enderic_compound>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:botania:rune_fire>, <item:botania:rune_fire>, <item:botania:rune_fire>, <item:oritech:heisenberg_compensator>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:oritech:enderic_compound>, <item:oritech:heisenberg_compensator>, <item:oritech:enderic_compound>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// crafttweaker:glowing_obsidian
<recipetype:extendedcrafting:table>.addShaped("glowing_obsidian", 1, <item:astral_dimension:glowing_obsidian> * 10, [
    [<item:minecraft:air>, <item:kubejs:seeneyes2>, <item:minecraft:air>],
    [<item:kubejs:seeneyes2>, <item:draconicevolution:infused_obsidian>, <item:kubejs:seeneyes2>],
    [<item:minecraft:air>, <item:kubejs:seeneyes2>, <item:minecraft:air>]
]);

// crafttweaker:draconium_core
<recipetype:extendedcrafting:table>.addShaped("draconium_core", 3, <item:draconicevolution:draconium_core>, [
    [<item:spectrum:bedrock_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:spectrum:bedrock_dust>],
    [<item:spectrum:bedrock_dust>, <item:spectrum:bedrock_dust>, <item:draconicevolution:draconium_ingot>, <item:aoa3:jade>, <item:draconicevolution:draconium_ingot>, <item:spectrum:bedrock_dust>, <item:spectrum:bedrock_dust>],
    [<item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:kubejs:stellarium_ingot>, <item:divinerpg:hellstone_ingot>, <item:kubejs:stellarium_ingot>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>],
    [<item:draconicevolution:draconium_ingot>, <item:divinerpg:torridite_ingot>, <item:divinerpg:shadow_bar>, <item:minecraft:netherite_ingot>, <item:divinerpg:shadow_bar>, <item:divinerpg:torridite_ingot>, <item:draconicevolution:draconium_ingot>],
    [<item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:kubejs:stellarium_ingot>, <item:divinerpg:hellstone_ingot>, <item:kubejs:stellarium_ingot>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>],
    [<item:spectrum:bedrock_dust>, <item:spectrum:bedrock_dust>, <item:draconicevolution:draconium_ingot>, <item:aoa3:jade>, <item:draconicevolution:draconium_ingot>, <item:spectrum:bedrock_dust>, <item:spectrum:bedrock_dust>],
    [<item:spectrum:bedrock_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:draconium_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:spectrum:bedrock_dust>]
]);

// crafttweaker:void_sculk_containment
<recipetype:extendedcrafting:combination>.addRecipe("void_sculk_containment", <item:kubejs:void_sculk>,
    <item:astral_dimension:amethyst_eye>, [
        <item:deeperdarker:heart_of_the_deep>,
        <item:minecraft:sculk_catalyst>,
        <item:undergarden:cloggrum_ingot>,
        <item:undergarden:froststeel_ingot>,
        <item:minecraft:sculk>,
        <item:undergarden:utherium_crystal>,
        <item:undergarden:regalium_crystal>,
        <item:kubejs:star_remains>
    ], 10000000);

// crafttweaker:fission_reactor_casing
<recipetype:extendedcrafting:table>.addShaped("fission_reactor_casing", 4, <item:nuclearcraft:fission_reactor_casing> * 6, [
    [<item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>],
    [<item:naturesaura:gold_powder>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:mekanism:ingot_refined_glowstone>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:voidminersremastered:citrinetine_block>],
    [<item:naturesaura:gold_powder>, <item:enderio:void_chassis>, <item:extendedcrafting:crystaltine_ingot>, <item:immersiveengineering:component_steel>, <item:immersiveengineering:component_steel>, <item:immersiveengineering:component_steel>, <item:extendedcrafting:crystaltine_ingot>, <item:industrialforegoing:machine_frame_supreme>, <item:voidminersremastered:citrinetine_block>],
    [<item:mysticalagradditions:insanium_essence>, <item:immersiveengineering:graphite_electrode>.withJsonComponents({"minecraft:damage": 0}), <item:woot_revived:stygian_plate>, <item:hostilenetworks:twilight_prediction>, <item:hostilenetworks:twilight_prediction>, <item:hostilenetworks:twilight_prediction>, <item:woot_revived:stygian_plate>, <item:immersiveengineering:graphite_electrode>.withJsonComponents({"minecraft:damage": 0}), <item:mysticalagradditions:insanium_essence>],
    [<item:aether:zanite_gemstone>, <item:woot_revived:stygian_plate>, <item:nuclearcraft:molten_uranium_bucket>, <item:hostilenetworks:twilight_prediction>, <item:kubejs:void_sculk>, <item:hostilenetworks:twilight_prediction>, <item:nuclearcraft:molten_uranium_bucket>, <item:woot_revived:stygian_plate>, <item:aether:zanite_gemstone>],
    [<item:mysticalagradditions:insanium_essence>, <item:immersiveengineering:graphite_electrode>.withJsonComponents({"minecraft:damage": 0}), <item:woot_revived:stygian_plate>, <item:hostilenetworks:twilight_prediction>, <item:hostilenetworks:twilight_prediction>, <item:hostilenetworks:twilight_prediction>, <item:woot_revived:stygian_plate>, <item:immersiveengineering:graphite_electrode>.withJsonComponents({"minecraft:damage": 0}), <item:mysticalagradditions:insanium_essence>],
    [<item:bigreactors:reinforced_reactorcasing>, <item:industrialforegoing:machine_frame_supreme>, <item:extendedcrafting:crystaltine_ingot>, <item:immersiveengineering:component_iron>, <item:immersiveengineering:component_iron>, <item:immersiveengineering:component_iron>, <item:extendedcrafting:crystaltine_ingot>, <item:enderio:void_chassis>, <item:aether:enchanted_gravitite>],
    [<item:bigreactors:reinforced_reactorcasing>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:mekanism:ingot_refined_obsidian>, <item:mekanism:ingot_refined_obsidian>, <item:mekanism:ingot_refined_obsidian>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:aether:enchanted_gravitite>],
    [<item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>, <item:nuclearcraft:plate_advanced>]
]);

// crafttweaker:nasa_workbench
<recipetype:extendedcrafting:table>.addShaped("nasa_workbench", 4, <item:ad_astra:nasa_workbench>, [
    [<item:gtceu:tin_alloy_dust>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:nuclearcraft:plate_du>, <item:gtceu:tin_alloy_dust>],
    [<item:gtceu:tin_alloy_dust>, <item:gtceu:tin_alloy_dust>, <item:undergarden:forgotten_ingot>, <item:draconicevolution:draconium_core>, <item:projectexpansion:magenta_matter>, <item:draconicevolution:draconium_core>, <item:undergarden:forgotten_ingot>, <item:gtceu:tin_alloy_dust>, <item:gtceu:tin_alloy_dust>],
    [<item:oritech:heisenberg_compensator>, <item:gtceu:tin_alloy_dust>, <item:undergarden:forgotten_ingot>, <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:overworld"}}), <item:kubejs:seeneyes2>, <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:nether"}}), <item:undergarden:forgotten_ingot>, <item:gtceu:tin_alloy_dust>, <item:oritech:heisenberg_compensator>],
    [<item:oritech:heisenberg_compensator>, <item:kubejs:void_sculk>, <item:nuclearcraft:plutonium_239>, <item:kubejs:seeneyes2>, <item:naturesaura:aura_bottle>.withJsonComponents({"naturesaura:aura_bottle_data": {"aura_type": "naturesaura:end"}}), <item:kubejs:seeneyes2>, <item:nuclearcraft:plutonium_242>, <item:kubejs:void_sculk>, <item:oritech:heisenberg_compensator>],
    [<item:oritech:heisenberg_compensator>, <item:oritech:heisenberg_compensator>, <item:mekanism:ultimate_tier_installer>, <item:nuclearcraft:americium_243>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:diamond"}), <item:nuclearcraft:strontium_90_dust>, <item:mekanism:ultimate_tier_installer>, <item:oritech:heisenberg_compensator>, <item:oritech:heisenberg_compensator>],
    [<item:gtceu:invar_rod>, <item:projectexpansion:dark_emc_link>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:undergarden:forgotten_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:projectexpansion:dark_emc_link>, <item:gtceu:invar_rod>],
    [<item:gtceu:invar_rod>, <item:gtceu:invar_rod>, <item:malum:ether>, <item:malum:ether>, <item:undergarden:forgotten_ingot>, <item:malum:ether>, <item:malum:ether>, <item:gtceu:invar_rod>, <item:gtceu:invar_rod>],
    [<item:woot_revived:stygian_ingot>, <item:gtceu:invar_rod>, <item:nuclearcraft:uranium_233>, <item:nuclearcraft:neptunium_236>, <item:undergarden:forgotten_ingot>, <item:nuclearcraft:neptunium_237>, <item:nuclearcraft:caesium_137_dust>, <item:gtceu:invar_rod>, <item:woot_revived:stygian_ingot>],
    [<item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>, <item:woot_revived:stygian_ingot>]
]);

// crafttweaker:maintenance_hatch
<recipetype:extendedcrafting:combination>.addRecipe("maintenance_hatch", <item:gtceu:maintenance_hatch>,
    <item:gtceu:hv_machine_hull>, [
        <item:oritech:machine_frame_block>,
        <item:kubejs:modular_ingot>,
        <item:oritech:steel_block>,
        <item:rftoolsbase:machine_frame>,
        <item:botania:rune_mana>
    ], 100000);

// crafttweaker:taint_block
<recipetype:extendedcrafting:ender_crafter>.addShapeless("taint_block", <item:gtceu:taint_block>, [
    <item:gtceu:taint_ingot>,
    <item:gtceu:taint_ingot>,
    <item:voidscape:ethereal_spider_fang>,
    <item:gtceu:taint_ingot>,
    <item:gtceu:taint_ingot>,
    <item:gtceu:taint_ingot>,
    <item:voidscape:ethereal_spider_eggs>,
    <item:gtceu:taint_ingot>,
    <item:gtceu:taint_ingot>
]);

// crafttweaker:entry_draconium
<recipetype:extendedcrafting:table>.addShaped("entry_draconium", 4, <item:draconicevolution:awakened_draconium_block>, [
    [<item:kubejs:void_sculk>, <item:primalmagick:essence_cluster_void>, <item:astral_dimension:astranite_ingot>, <item:astral_dimension:void_shards>, <item:kubejs:void_sculk>, <item:astral_dimension:void_shards>, <item:astral_dimension:astranite_ingot>, <item:primalmagick:essence_cluster_void>, <item:kubejs:void_sculk>],
    [<item:botania:rune_pride>, <item:gtceu:blue_steel_ingot>, <item:gtceu:taint_block>, <item:spectrum:pure_azurite>, <item:gtceu:blue_steel_ingot>, <item:spectrum:pure_azurite>, <item:gtceu:taint_block>, <item:gtceu:blue_steel_ingot>, <item:botania:rune_greed>],
    [<item:enderio:sentient_ender>, <item:gtceu:taint_block>, <item:kubejs:eyes1>, <item:gtceu:silicon_boule>, <item:gtceu:silicon_boule>, <item:gtceu:silicon_boule>, <item:kubejs:eyes1>, <item:gtceu:taint_block>, <item:immersiveengineering:component_steel>],
    [<item:nuclearcraft:curium_243>, <item:gtceu:blue_steel_ingot>, <item:gtceu:polyethylene_bucket>, <item:oritech:gold_gem>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:gaia"}), <item:oritech:gold_gem>, <item:gtceu:polyethylene_bucket>, <item:gtceu:blue_steel_ingot>, <item:aether:ambrosium_shard>],
    [<item:astral_dimension:void_block>, <item:gtceu:taint_block>, <item:kubejs:eyes2>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:crystaltine"}), <item:kubejs:containment_failure>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:law"}), <item:kubejs:eyes2>, <item:gtceu:taint_block>, <item:astral_dimension:void_block>],
    [<item:ad_astra:desh_block>, <item:gtceu:blue_steel_ingot>, <item:gtceu:polyethylene_bucket>, <item:oritech:gold_gem>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:refined_glowstone"}), <item:oritech:gold_gem>, <item:gtceu:polyethylene_bucket>, <item:gtceu:blue_steel_ingot>, <item:ad_astra:desh_block>],
    [<item:nuclearcraft:curium_243>, <item:gtceu:taint_block>, <item:kubejs:eyes1>, <item:gtceu:silicon_boule>, <item:gtceu:silicon_boule>, <item:gtceu:silicon_boule>, <item:kubejs:eyes1>, <item:gtceu:taint_block>, <item:aether:ambrosium_shard>],
    [<item:enderio:sentient_ender>, <item:gtceu:blue_steel_ingot>, <item:gtceu:taint_block>, <item:spectrum:pure_azurite>, <item:gtceu:blue_steel_ingot>, <item:spectrum:pure_azurite>, <item:gtceu:taint_block>, <item:gtceu:blue_steel_ingot>, <item:immersiveengineering:component_iron>],
    [<item:kubejs:void_sculk>, <item:nuclearcraft:curium_245>, <item:divinerpg:oxdrite_ingot>, <item:astral_dimension:void_shards>, <item:kubejs:void_sculk>, <item:astral_dimension:void_shards>, <item:divinerpg:oxdrite_ingot>, <item:nuclearcraft:curium_245>, <item:kubejs:void_sculk>]
]);

// crafttweaker:wyvern_core
<recipetype:extendedcrafting:table>.addShaped("wyvern_core", 3, <item:draconicevolution:wyvern_core> * 2, [
    [<item:gtceu:taint_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:draconium_core>, <item:minecraft:air>, <item:minecraft:air>, <item:gtceu:taint_ingot>],
    [<item:minecraft:air>, <item:gtceu:taint_ingot>, <item:draconicevolution:draconium_core>, <item:minecraft:end_crystal>, <item:draconicevolution:draconium_core>, <item:gtceu:taint_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:draconicevolution:draconium_core>, <item:draconicevolution:draconium_block>, <item:dog:draconic_soul_fragment>, <item:draconicevolution:draconium_block>, <item:draconicevolution:draconium_core>, <item:minecraft:air>],
    [<item:draconicevolution:draconium_core>, <item:minecraft:end_crystal>, <item:dog:draconic_soul_fragment>, <item:draconicevolution:dragon_heart>, <item:dog:draconic_soul_fragment>, <item:minecraft:end_crystal>, <item:draconicevolution:draconium_core>],
    [<item:minecraft:air>, <item:draconicevolution:draconium_core>, <item:draconicevolution:draconium_block>, <item:dog:draconic_soul_fragment>, <item:draconicevolution:draconium_block>, <item:draconicevolution:draconium_core>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:gtceu:taint_ingot>, <item:draconicevolution:draconium_core>, <item:minecraft:end_crystal>, <item:draconicevolution:draconium_core>, <item:gtceu:taint_ingot>, <item:minecraft:air>],
    [<item:gtceu:taint_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:draconium_core>, <item:minecraft:air>, <item:minecraft:air>, <item:gtceu:taint_ingot>]
]);

// crafttweaker:ultimate_farm
<recipetype:extendedcrafting:table>.addShaped("ultimate_farm", 1, <item:tinymobfarm:ultimate_farm>, [
    [<item:productivebees:configurable_honeycomb>.withJsonComponents({"productivebees:bee_type": "productivebees:magentite"}), <item:draconicevolution:draconium_core>, <item:projectexpansion:white_fuel>],
    [<item:kubejs:law_ingot>, <item:kubejs:modular_ingot>, <item:kubejs:law_ingot>],
    [<item:productivebees:configurable_honeycomb>.withJsonComponents({"productivebees:bee_type": "productivebees:magentite"}), <item:draconicevolution:draconium_core>, <item:projectexpansion:white_fuel>]
]);

// crafttweaker:fire_dragonheart
<recipetype:extendedcrafting:table>.addShaped("fire_dragonheart", 1, <item:iceandfire:fire_dragon_heart>, [
    [<item:iceandfire:dragonsteel_fire_ingot>, <item:iceandfire:dragonsteel_fire_ingot>, <item:iceandfire:dragonsteel_fire_ingot>],
    [<item:iceandfire:dragonsteel_fire_ingot>, <item:draconicevolution:dragon_heart>, <item:iceandfire:dragonsteel_fire_ingot>],
    [<item:iceandfire:dragonsteel_fire_ingot>, <item:iceandfire:dragonsteel_fire_ingot>, <item:iceandfire:dragonsteel_fire_ingot>]
]);

// crafttweaker:ice_dragonheart
<recipetype:extendedcrafting:table>.addShaped("ice_dragonheart", 1, <item:iceandfire:ice_dragon_heart>, [
    [<item:iceandfire:dragonsteel_ice_ingot>, <item:iceandfire:dragonsteel_ice_ingot>, <item:iceandfire:dragonsteel_ice_ingot>],
    [<item:iceandfire:dragonsteel_ice_ingot>, <item:draconicevolution:dragon_heart>, <item:iceandfire:dragonsteel_ice_ingot>],
    [<item:iceandfire:dragonsteel_ice_ingot>, <item:iceandfire:dragonsteel_ice_ingot>, <item:iceandfire:dragonsteel_ice_ingot>]
]);

// crafttweaker:lightning_dragonheart
<recipetype:extendedcrafting:table>.addShaped("lightning_dragonheart", 1, <item:iceandfire:lightning_dragon_heart>, [
    [<item:iceandfire:dragonsteel_lightning_ingot>, <item:iceandfire:dragonsteel_lightning_ingot>, <item:iceandfire:dragonsteel_lightning_ingot>],
    [<item:iceandfire:dragonsteel_lightning_ingot>, <item:draconicevolution:dragon_heart>, <item:iceandfire:dragonsteel_lightning_ingot>],
    [<item:iceandfire:dragonsteel_lightning_ingot>, <item:iceandfire:dragonsteel_lightning_ingot>, <item:iceandfire:dragonsteel_lightning_ingot>]
]);

// crafttweaker:awakened_core
<recipetype:extendedcrafting:table>.addShaped("awakened_core", 4, <item:draconicevolution:awakened_core>, [
    [<item:draconicevolution:awakened_draconium_block>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:ad_astra:desh_block>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:awakened_draconium_block>],
    [<item:minecraft:air>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:wyvern_core>, <item:kubejs:breach>, <item:draconicevolution:wyvern_core>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ad_astra:desh_block>, <item:draconicevolution:draconium_core>, <item:ad_astra:ostrum_block>, <item:iceandfire:ice_dragon_heart>, <item:ad_astra:ostrum_block>, <item:draconicevolution:draconium_core>, <item:ad_astra:desh_block>, <item:minecraft:air>],
    [<item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>, <item:woot_revived:vitality_fuel_fluid_bucket>, <item:iceandfire:fire_dragon_heart>, <item:kubejs:void_sculk>, <item:draconicevolution:dragon_heart>, <item:woot_revived:vitality_fuel_fluid_bucket>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>],
    [<item:minecraft:air>, <item:ad_astra:desh_block>, <item:draconicevolution:draconium_core>, <item:ad_astra:ostrum_block>, <item:iceandfire:lightning_dragon_heart>, <item:ad_astra:ostrum_block>, <item:draconicevolution:draconium_core>, <item:ad_astra:desh_block>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:wyvern_core>, <item:kubejs:breach>, <item:draconicevolution:wyvern_core>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:gtceu:taint_block>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:awakened_draconium_block>, <item:minecraft:air>],
    [<item:draconicevolution:awakened_draconium_block>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:ad_astra:desh_block>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:awakened_draconium_block>]
]);

// crafttweaker:chaotic_core
<recipetype:extendedcrafting:table>.addShaped("chaotic_core", 4, <item:draconicevolution:chaotic_core> * 3, [
    [<item:draconicevolution:large_chaos_frag>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:small_chaos_frag>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:large_chaos_frag>],
    [<item:minecraft:air>, <item:draconicevolution:large_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:small_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:large_chaos_frag>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:medium_chaos_frag>, <item:projectexpansion:yellow_matter>, <item:draconicevolution:medium_chaos_frag>, <item:draconicevolution:small_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:awakened_core>, <item:oritech:overcharged_crystal>, <item:draconicevolution:medium_chaos_frag>, <item:enderio:prescient_crystal>, <item:draconicevolution:awakened_core>, <item:draconicevolution:small_chaos_frag>, <item:minecraft:air>],
    [<item:draconicevolution:small_chaos_frag>, <item:draconicevolution:awakened_core>, <item:ae2:singularity>, <item:oritech:adamant_dust>, <item:draconicevolution:medium_chaos_frag>, <item:mekanism:ultimate_control_circuit>, <item:bigreactors:energycore>, <item:draconicevolution:awakened_core>, <item:draconicevolution:small_chaos_frag>],
    [<item:minecraft:air>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:awakened_core>, <item:minecraft:blue_ice>, <item:draconicevolution:medium_chaos_frag>, <item:nuclearcraft:fuel_curium_lecm_245>, <item:draconicevolution:awakened_core>, <item:draconicevolution:small_chaos_frag>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:medium_chaos_frag>, <item:draconicevolution:medium_chaos_frag>, <item:draconicevolution:medium_chaos_frag>, <item:draconicevolution:small_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:draconicevolution:large_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:small_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:small_chaos_frag>, <item:gtceu:blue_steel_ingot>, <item:draconicevolution:large_chaos_frag>, <item:minecraft:air>],
    [<item:draconicevolution:large_chaos_frag>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:small_chaos_frag>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:large_chaos_frag>]
]);

// crafttweaker:eyes_of_high_priestess
<recipetype:extendedcrafting:table>.addShaped("eyes_of_high_priestess", 4, <item:kubejs:eyes3>, [
    [<item:biomesoplenty:null_block>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:emerald"}), <item:gtceu:chaos_infused_ingot>, <item:productivebees:honey_treat>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:iron"}), <item:kubejs:modular_ingot>, <item:gtceu:chaos_infused_ingot>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:lapis"}), <item:biomesoplenty:anomaly>],
    [<item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:coal"}), <item:minecraft:air>, <item:minecraft:air>, <item:spectrum:polished_bone_ash>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:ghastly"}), <item:actuallyadditions:empowered_restonia_crystal_block>, <item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:brick"})],
    [<item:gtceu:chaos_infused_ingot>, <item:projectexpansion:green_matter>, <item:draconicevolution:awakened_core>, <item:gtceu:taint_rod>, <item:malum:twisted_iridescent_ether_brazier>.withJsonComponents({"malum:secondary_dye_color": {"rgb": 7238307}}), <item:gtceu:taint_rod>, <item:draconicevolution:awakened_core>, <item:bigreactors:energycore>, <item:gtceu:chaos_infused_ingot>],
    [<item:gtceu:chaos_infused_ingot>, <item:actuallyadditions:empowered_void_crystal_block>, <item:draconicevolution:draconium_core>, <item:kubejs:eyes2>, <item:nuclearcraft:thermoconducting_ingot>, <item:kubejs:eyes1>, <item:draconicevolution:wyvern_core>, <item:botania:gaia_pylon>, <item:gtceu:chaos_infused_ingot>],
    [<item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:netherite"}), <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:fluix"}), <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:end_steel"}), <item:gtceu:polyethylene_ingot>, <item:kubejs:void_sculk>, <item:gtceu:polyethylene_ingot>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:redstone_ingot"}), <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:awakened_supremium"}), <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:gold"})],
    [<item:gtceu:chaos_infused_ingot>, <item:actuallyadditions:empowered_enori_crystal_block>, <item:draconicevolution:draconium_core>, <item:kubejs:eyes2>, <item:nuclearcraft:thermoconducting_ingot>, <item:kubejs:eyes1>, <item:draconicevolution:wyvern_core>, <item:primalmagick:mana_singularity>, <item:gtceu:chaos_infused_ingot>],
    [<item:gtceu:chaos_infused_ingot>, <item:minecraft:air>, <item:draconicevolution:chaotic_core>, <item:minecraft:resin_bricks>, <item:naturesaura:infused_iron>, <item:minecraft:resin_bricks>, <item:draconicevolution:chaotic_core>, <item:actuallyadditions:empowered_palis_crystal_block>, <item:gtceu:chaos_infused_ingot>],
    [<item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:prismarine"}), <item:aether:zanite_block>, <item:minecraft:air>, <item:aether:enchanted_gravitite>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:stygian"}), <item:mekanism:reprocessed_fissile_fragment>, <item:minecraft:air>, <item:minecraft:air>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:amethyst"})],
    [<item:biomesoplenty:null_end_stone>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:copper"}), <item:gtceu:chaos_infused_ingot>, <item:actuallyadditions:empowered_diamatine_crystal_block>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:diamond"}), <item:divinerpg:arcanium_block>, <item:gtceu:chaos_infused_ingot>, <item:extendedcrafting:singularity>.withJsonComponents({"extendedcrafting:singularity_id": "extendedcrafting:quartz"}), <item:biomesoplenty:null_leaves>]
]);

<recipetype:extendedcrafting:table>.addShaped("imbuement_chamber", 2, <item:ars_nouveau:imbuement_chamber>, [
	[<item:enderio:dark_steel_ingot>, <item:divinerpg:anthracite>, <item:minecraft:air>, <item:divinerpg:anthracite>, <item:enderio:dark_steel_ingot>], [<item:primalmagick:marble_hallowed>, <item:malum:runewood_planks>, <item:malum:sacred_spirit>, <item:malum:runewood_planks>, <item:primalmagick:marble_hallowed>], [<item:primalmagick:marble_hallowed>, <item:malum:runewood_planks>, <item:malum:sacred_spirit>, <item:malum:runewood_planks>, <item:primalmagick:marble_hallowed>], [<item:enderio:dark_steel_ingot>, <item:minecraft:air>, <item:malum:sacred_spirit>, <item:minecraft:air>, <item:enderio:dark_steel_ingot>], [<item:primalmagick:marble_hallowed>, <item:primalmagick:marble_hallowed>, <item:primalmagick:marble_hallowed>, <item:primalmagick:marble_hallowed>, <item:primalmagick:marble_hallowed>]
]);
