ServerEvents.recipes(event => {
    const result = (out, oldIn, newIn) => {
        event.replaceInput({output: out}, oldIn, Ingredient.of(newIn))
    };
    const idRemove = (id)=> {
        event.remove({id:id})
    }
    const modRemove = (modid) => {event.remove({mod:modid})}
    const ban = 'barrier'
    modRemove('neoecoprototype')
    idRemove('neoecoae:integrated_working_station')
    result('extendedae:crystal_assembler', 'extendedae:machine_frame', 'barrier')
    result('theoreticalsciences:extreme_assembly_table', 'crafting_table', ban)
    idRemove('productivebees:centrifuge/undergarden/honeycomb_froststeel')
    idRemove('productivebees:froststeel_honeycomb')
})