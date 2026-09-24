ServerEvents.recipes(event => {
    const idRemoval = [
        'gtceu:shaped/ev_machine_hull',
        'gtceu:assembler/ev_machine_hull'
    ]
    idRemoval.forEach(idRemoval => {
    event.remove({id: idRemoval})
  })
})