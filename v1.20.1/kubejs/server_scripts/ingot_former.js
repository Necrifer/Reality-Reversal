ServerEvents.recipes(event => {
  event.custom({
    type: 'nuclearcraft:ingot_former',
    inputFluids: [{
      amount: 144,
      fluid: 'bigreactors:magentite'
    }],
    output: [{
      item: 'bigreactors:magentite_ingot'
    }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('kubejs:nuclearcraft/ingot_former/magentite')
  event.custom({
    type: 'nuclearcraft:ingot_former',
    inputFluids: [{
      amount: 144,
      fluid: 'bigreactors:cyanite'
    }],
    output: [{
      item: 'bigreactors:cyanite_ingot'
    }],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('kubejs:nuclearcraft/ingot_former/cyanite')
})
