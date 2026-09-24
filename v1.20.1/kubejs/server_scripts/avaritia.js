ServerEvents.recipes(event => {
  // Remove the original recipe by its recipe ID.
  event.remove({ id: 'avaritia:infinity_catalyst' })

  // Example replacement: change ingredients/pattern as needed.
//  event.recipes.avaritia.shaped_table(
//    4,                            // Extreme Crafting Table
//    'avaritia:infinity_ingot',     // Output
//    [
//      'NNNNNNNNN',
//      'NCXXCXXCN',
//      'NXCCXCCXN',
//      'NCXXCXXCN',
//      'NNNNNNNNN'
//    ],
//    {
//      N: 'avaritia:neutron_ingot',
//      C: 'avaritia:crystal_matrix_ingot',
//      X: 'avaritia:infinity_catalyst'
//    }
//  ).id('modpack:avaritia/infinity_ingot')

event.recipes.avaritia.shaped_table(
    4,                            
    'avaritia:eternal_singularity',    
    [
      '    N    ',
      '     N   ',
      '  N   N  ',
      ' N XXX   ',
      'N  XCX  N',
      '   XXX N ',
      '  N   N  ',
      '   N     ',
      '    N    '
    ],
    {
      N: 'extendedcrafting:the_ultimate_block',
      C: 'avaritia_expand:crystal_tnt',
      X: 'extendedcrafting:ultimate_singularity'
    }
  ).id('modpack:avaritia/eternal_singularity')
})