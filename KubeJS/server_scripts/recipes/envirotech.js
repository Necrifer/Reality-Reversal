// Environmental Tech Void Miner drop pool.
// Drops are datapack recipes of type 'envirotech:void_miner_drops' (bundled in the envirotech jar under
// data/envirotech/recipe/envirotech/void_miner_drops/). Built-in ids look like
//   envirotech:envirotech/void_miner_drops/<category>/<name>
// Full list: migration/envirotech-voidminer-20261124/void_miner_drops.csv
// Remove by id (removing by output does not work for this type), add with voidDrop().
ServerEvents.recipes(event => {
  const DROPS = 'envirotech:envirotech/void_miner_drops/'

  // programs: ['envirotech:botanic', ...]
  // item:     {'raw:item': 'mod:id'} or {'raw:item_tag': 'c:tag', selector: {type, values}}; count defaults to 1
  // config:   [{weight, focus?, tiers?, dimensions?, blacklist_dimensions?, biomes?, blacklist_biomes?}, ...]
  function voidDrop(id, programs, item, config) {
    if (item.count === undefined) item.count = 1
    return event.custom({type: 'envirotech:void_miner_drops', programs: programs, item: item, config: config})
      .id('kubejs:void_miner_drops/' + id)
  }

  // No Mystical Agriculture seeds from the Void Miner.
  // MA puts #mysticalagriculture:seeds (including addon seeds) into #c:seeds, which the built-in
  // 'botanic/seeds' drop rolls in full. Replace it with the same drop, blacklisting the Mystical
  // mod namespaces (the selector blacklist matches item namespaces). Weights are the original 30/240.
  event.remove({id: DROPS + 'botanic/seeds'})
  voidDrop('botanic/seeds', ['envirotech:botanic', 'envirotech:garden_botanic'],
    {'raw:item_tag': 'c:seeds', selector: {type: 'all_with_blacklist',
      values: ['mysticalagriculture', 'mysticalagradditions', 'mysticalcustomization']}},
    [{weight: 30}, {focus: 'envirotech:seeds', weight: 240}])
})
