
// Salis Mundus: Thaumaturge's own recipe (thaumaturge:salis_mundus) is a special recipe type
// with its ingredients hardcoded in Java (bowl + flint + #c:dusts/redstone + 3 essentia crystals
// of different aspects; bowl and flint are returned), so replaceInput cannot change it.
// It is replaced with a shapeless recipe that uses kubejs:eyes4 instead of redstone. The
// "3 different aspects" rule is kept by the modifyRecipeResult check below.
var SALIS_RESULT_KEY = 'rr_salis_mundus'

ServerEvents.recipes(event => {
    function idRemoval (idremove){
        return event.remove({id:idremove})
    }
    idRemoval('thaumaturge:salis_mundus')
    event.shapeless('thaumaturge:salis_mundus', [
        'minecraft:bowl', 'minecraft:flint', 'kubejs:eyes4',
        'thaumaturge:essentia_crystal', 'thaumaturge:essentia_crystal', 'thaumaturge:essentia_crystal'
    ])
        .keepIngredient('minecraft:bowl')
        .keepIngredient('minecraft:flint')
        .modifyResult(SALIS_RESULT_KEY)
        .id('kubejs:thaumaturge/salis_mundus')
})

// No result unless the 3 crystals hold 3 different aspects (same rule as the original recipe).
ServerEvents.modifyRecipeResult(SALIS_RESULT_KEY, event => {
    const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    const CRYSTAL_ASPECT = Java.loadClass('com.leclowndu93150.thaumaturge.registry.TTDataComponents').CRYSTAL_ASPECT.get()
    const seen = {}
    var count = 0
    for (var i = 0; i < event.grid.size(); i++) {
        var stack = event.grid.getItem(i)
        if (stack.isEmpty() || stack.getId() != 'thaumaturge:essentia_crystal') continue
        var aspect = stack.get(CRYSTAL_ASPECT)
        if (aspect == null) return event.success(ItemStack.EMPTY)
        var key = String(aspect.aspect().getKey().location())
        if (seen[key]) return event.success(ItemStack.EMPTY)
        seen[key] = true
        count++
    }
    return event.success(count === 3 ? event.item : ItemStack.EMPTY)
})
