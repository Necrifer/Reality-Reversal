ServerEvents.recipes(event => {
    const fluidinfuser = [
        {
            input: [{tag: "forge:stone"}],
            inputFluids: [{
                amount: 144,
                fluid: 'nuclearcraft:cryotheum'
            }],
            output: [{
                item: 'divinerpg:frozen_stone'
            }]
        }
    ]
    fluidinfuser.forEach(recipe => {
        event.custom({
            type: "nuclearcraft:fluid_infuser",
            input: recipe.input,
            inputFluids: recipe.inputFluids,
            output: recipe.output,
              "powerModifier": 1.0,
              "radiation": 0.0,
              "timeModifier": 1.0

        })
    })
})
