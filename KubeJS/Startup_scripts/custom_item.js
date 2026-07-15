// Listen to item registry event
//StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
 // event.create('test_item')

  // If you want to specify a different texture location you can do that too, like this:
  //event.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png

  // You can chain builder methods as much as you like
  //event.create('test_item_2').maxStackSize(16).glow(true)

  // You can specify item type as 2nd argument in create(), some types have different available methods
  //event.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10)
//})

StartupEvents.registry('item', event => {
    event.create('eyes1')
    .tooltip("§4To know one knows nothing, is your lesson.").color(0, 0xFA2800)
    .displayName("§4Eyes of The Fool").color(0, 0xFA2800)
    .glow(true)
    .fireResistant(true)
    .tag('twilightforest:portal/activator')
    .tag('neoforge:arcana')
    event.create('eyes2')
    .tooltip("§eAnd now you understand the Rules.").color(0, 0xFCFF00)
    .displayName("§eEyes of The Magician").color(0, 0xFCFF00)
    .glow(true)
    .fireResistant(true)
    .tag('neoforge:arcana')
})