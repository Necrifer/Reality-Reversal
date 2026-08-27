ServerEvents.recipes(event => {
  event.custom({
    type: 'dimdoors:shapeless_tesselating',
    ingredients: [
      { item: 'dimdoors:world_thread' },
      { item: 'minecraft:string' }
    ],
    result: {
      count: 1,
      item: 'dimdoors:stable_fabric'
    },
    weavingtime: 200
  }).id('kubejs:dimdoors/stable_fabric')
})
