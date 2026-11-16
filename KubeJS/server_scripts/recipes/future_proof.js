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
    result('theoreticalsciences:extreme_assembly_table', 'crafting_table', 'avaritia:infinity_ingot')
    result('projecte:tome', 'book', ban)
    result('molecularmanipulator:matter_fabrication_controller', 'ae2:energy_cell', ban)
    result('advanced_ae:reaction_chamber', 'bucket', ban)
    result('extendedae:entro_seed', 'redstone', ban)
    result('excessive_utilities:rainbow_generator_bottom_slab', 'excessive_utilities:resonating_redstone_crystal', ban)
    result('excessive_utilities:rainbow_generator_top_slab', 'excessive_utilities:resonating_redstone_crystal', ban)
    result('excessive_utilities:furnace_generator', 'furnace', ban)
    idRemove('productivebees:centrifuge/undergarden/honeycomb_froststeel')
    idRemove('productivebees:froststeel_honeycomb')
    idRemove('excessive_utilities:rainbow_generator')
    idRemove('thaumaturge:dust_trigger/cauldron_to_crucible')
})
