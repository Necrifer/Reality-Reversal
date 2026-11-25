ServerEvents.recipes(event => {
    function removeIn(removein){return event.remove({input: removein})}
    function removeOut(removeout){return event.remove({output:removeout})}
    function replaceIn(result, oldInput, newInput){return event.replaceInput(result, oldInput, newInput)}

    const idRemoval= [
        'ae2:network/cells/item_storage_cell_1k',
        'ae2:network/cells/item_storage_cell_4k',
        'ae2:network/cells/item_storage_cell_16k',
        'ae2:network/cells/item_storage_cell_32k',
        'ae2:network/cells/item_storage_cell_64k',
        'ae2:network/cells/item_storage_cell_128k',
        'ae2:network/cells/item_storage_cell_256k',
        'ae2:network/cells/fluid_storage_cell_1k',
        'ae2:network/cells/fluid_storage_cell_4k',
        'ae2:network/cells/fluid_storage_cell_16k',
        'ae2:network/cells/fluid_storage_cell_32k',
        'ae2:network/cells/fluid_storage_cell_64k',
        'ae2:network/cells/fluid_storage_cell_128k',
        'ae2:network/cells/fluid_storage_cell_256k',
        'ae2:network/cells/spatial_storage_cell_2_cubed',
        'ae2:network/cells/spatial_storage_cell_16_cubed',
        'ae2:network/cells/spatial_storage_cell_128_cubed',

    ]
    idRemoval.forEach (removeId => {
        event.remove({id:removeId})
    })
    replaceIn('applied_thaumaturgy:essentia_cell_housing', 'iron_ingot', 'thaumaturge:ingot_void')
    replaceIn('applied_thaumaturgy:essentia_cell_housing', 'copper_ingot', '')
})
