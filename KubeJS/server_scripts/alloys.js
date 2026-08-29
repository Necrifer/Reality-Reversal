ServerEvents.recipes(event =>{
    const alloySmelt = [{
        energy_per_tick: 150,
        item_inputs: [{
          count: 4,
          item: 'ae2:charged_certus_quartz_crystal'
        },
        {
          count: 2,
          item: 'oritech:adamant_ingot'
        }],
        item_outputs: [{
          count: 4,
          item: 'extendedcrafting:crystaltine_ingot'
        }],
        process_time: 200
    }]
    alloySmelt.forEach(recipe=> {
        event.custom({
            type: 'nuclearcraft:alloy_smelter',
            energy_per_tick: recipe.energy_per_tick,
            item_inputs: recipe.item_inputs,
            item_outputs: recipe.item_outputs,
            process_time: recipe.process_time
        })
    })

})