ServerEvents.recipes(event => {
    const melter = [
        {
        input: [{
            item: 'thermal:blitz_rod'
        }],
        outputFluids: [{
            amount: 144,
            fluid: 'enderio:cloud_seed',
        }]
        },
        {
            input: [{
                item: 'tconstruct:blaze_head'
            }],
            outputFluids: [{
                amount: 144,
                fluid: 'tconstruct:blazing_blood'
            }]
        },
        {
            intput: [{
                item: 'minecraft:blaze_rod'
            }],
            outputFluids: [{
                amount:144,
                fluid: 'tconstruct:blazing_blood'
            }]
        }
    ]
    melter.forEach(recipe => {
    event.custom({
        type: 'nuclearcraft:melter',
        input: recipe.input,
        outputFluids: recipe.outputFluids,
        powerModifier: 1.0,
        radiation: 0.0,
        timeModifier: 1.0
    })
  })
})
