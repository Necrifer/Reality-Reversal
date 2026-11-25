ServerEvents.recipes(event => {
function empower(catalyst, output, input, rft, hexa, seconds){
  return event.recipes.actuallyadditions.empowering(catalyst, output, input)
  .energy(rft)
  .color(hexa)
  .time(seconds)
}
empower('nuclearcraft:plate_basic', 'nuclearcraft:chassis', ['actuallyadditions:empowered_restonia_crystal', 'actuallyadditions:empowered_palis_crystal', 'actuallyadditions:empowered_enori_crystal', 'actuallyadditions:empowered_void_crystal'], 2000, 0x711680, 200)
empower('dirt', 'mysticalagriculture:imperium_farmland', ['enderio:cloud_seed_bucket','mysticalagriculture:imperium_essence', 'ae2:fluix_pearl', 'divinerpg:shadow_bar'], 2000, 0x711680, 200)
//    event.recipes.actuallyadditions
     //   .empowering("emerald", "diamond", [
      //      "emerald_block",
      //      "lapis_block",
      //      "#c:ingots/gold",
      //      "#c:ingots/gold",
      //  ])
      //  .energy(50000)
      //  .color(0x00ff00)
      //  .time(200)
})