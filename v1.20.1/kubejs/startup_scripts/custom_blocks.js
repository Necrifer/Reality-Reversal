StartupEvents.registry('block', event => {
  event.create('taint_ore') // Create a new block
    .displayName('Taint Ore') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(3) // Set hardness (affects mining time)
    .resistance(3) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('forge:ores') // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock('c:ores') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron

  event.create('breach') 
    .displayName('Containment Breach') 
    .soundType('wool') 
    .hardness(3) 
    .resistance(3) 
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool') 
  
  event.create('chaos_infused') 
    .displayName('Chaos Infused Metal') 
    .glassSoundType()
    .hardness(3) 
    .resistance(3) 
    .requiresTool(true)
    .tagBlock('minecraft:sulfur_cube_swallowable')
    .unbreakable()
    .noCollision()
    .waterlogged()
    .noDrops()
})