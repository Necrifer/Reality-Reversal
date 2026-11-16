
ServerEvents.recipes(event => {
    function idRemoval (idremove){
        return event.remove({id:idremove})
    }
    function replace(output, oriin, newin){
        event.replaceInput(output, oriin, newin)
    }
    replace('thaumaturge:salis_mundus', 'redstone', 'kubejs:eyes4')
})