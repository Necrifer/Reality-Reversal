ClientEvents.lang('en_us', (event) => {
    const normID = [
        'aoa3:ghastly_ingot',
        'aoa3:ghastly_ingot_block',
        'aoa3:ghastly_nugget',
        'castle_in_the_sky:laputa_core_orb',
        'gtceu:foundational_breaker',
        'gtceu:anomalous_condenser',
        'gtceu:soul_capturer',
        'gtceu:corruption_containment',
        'gtceu:radiation_cleanser'
    ];
    const name = [
        'Twilight dipped Ingot',
        'Condensed Twilight',
        'Twilight Droplet',
        'Laputa Core Orb',
        'Foundational Breaker',
        'Anomalous Condenser',
        'Soul Capturer',
        'Corruption Containment Unit',
        'Radiation Cleanser'
    ];
    // Pair each item ID with the name at the same array index.
    normID.forEach((itemId, index) => {
        event.renameItem(itemId, name[index]);
    });
    // ToDo: Figure out a better way to do this nonsense. 
    // Typing this for all parts is not fun.
    // GT material forms share tagprefix names; use item-specific keys, not renameItem.
    event.add('item.gtceu.taint_dust', "Taint Dust")
    event.add('item.gtceu.tiny_taint_dust', "Tiny Pile of Taint Dust")
    event.add('item.gtceu.long_taint_rod', 'Long Taint Rod')
    event.add('item.gtceu.small_taint_dust', 'Small Pile of Taint Dust')
    event.add('item.gtceu.taint_ingot', 'Taint Ingot')
    event.add('item.gtceu.taint_rod', 'Taint Rod')
    event.add('item.gtceu.taint_nugget', "Taint nugget")
    event.add('item.gtceu.taint_block', 'Block of Taint')
    event.add('item.gtceu.chaos_infused_dust', "Chaos Infused Dust")
    event.add('item.gtceu.chaos_infused_ingot', 'Chaos Infused Ingot')
    event.add('item.gtceu.chaos_infused_nugget', 'Chaos Infused Nugget')
    event.add('item.gtceu.chaos_infused_gear', 'Chaos Infused Gear')
    event.add('item.gtceu.small_chaos_infused_gear', 'Small Chaos Infused Gear')
    event.add('item.gtceu.chaos_infused_plate', 'Chaos Infused Plate')
    event.add('item.gtceu.dense_chaos_infused_plate', 'Chaos Infused Plate')
    event.add('item.gtceu.chaos_infused_block', 'Block of Infused Chaos')
    event.add('item.gtceu.chaos_infused_rotor', 'Chaos Infused Motor')
    event.add('item.gtceu.chaos_infused_ring', 'Chaos Infused Ring')
    event.add('item.gtceu.chaos_infused_gear', 'Chaos Infused Gear')
    event.add('item.gtceu.chaos_infused_spring', 'Chaos Infused Spring')
    event.add('item.gtceu.chaos_infused_foil', "Chaos Infused Foil")
    event.add('item.gtceu.tiny_chaos_infused_dust', "Tiny Chaos Infused Dust")
    event.add('item.gtceu.chaos_infused_bolt', "Chaos Infused Bolt")
    event.add('item.gtceu.chaos_infused_rod', 'Chaos Infused Rod')
    event.add('item.gtceu.fine_chaos_infused_wire', 'Chaos Infused Fine Wire')
    event.add('item.gtceu.chaos_infused_screw', 'Chaos Infused Screw')
    event.add('item.gtceu.small_chaos_infused_dust', 'Small Chaos Infused Dust')
    event.add('item.gtceu.long_chaos_infused_rod', 'Chaos Infused Long Rod')
    event.add('item.gtceu.small_chaos_infused_spring', 'Chaos Infused Small Spring')
    event.add('item.gtceu.double_chaos_infused_plate', 'Chaos Infused Double Plate')
    event.add('item.gtceu.chaos_infused_round', 'Chaos Infused Round')
    event.add('item.gtceu.chaos_infused_frame', 'Chaos Infused Frame')
})