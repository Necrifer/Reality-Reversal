ServerEvents.recipes(event => {
  const recipe = (id, body) => event.custom(body).id(id);
  const item = id => ({ item: id });
  const tag = id => ({ tag: id });
  const block = id => ({ blocks: id });
  const entity = id => ({ type: id });
  const stack = (id, count) => ({ id: id, count: count == null ? 1 : count });
  const setBlock = id => ({ type: 'set_block', block: block(id) });
  const placeBlock = id => ({ type: 'place', block: block(id) });
  const dropItem = (id, count) => ({ type: 'drop_item', item: stack(id, count) });
  const dropXp = amount => ({ type: 'drop_xp', xp: amount });
  const preventDefault = () => ({ type: 'prevent_default' });
  const damageItem = amount => ({ type: 'damage_item', damage: amount });

  recipe('lychee:emc_coal_conversion', {
    type: 'lychee:item_inside',
    item_in: [item('dimdoors:driftwood_log')],
    block_in: block('dimdoors:eternal_fluid'),
    post: [
      {type: 'set_item', id: 'minecraft:coal', count: 8}
    ],
  });
  recipe('lychee:stellarium_ingot_explode', {
    type: 'lychee:item_exploding',
    item_in: [item('minecraft:nether_star'), item('enderio:end_steel_ingot')],
    post:{
      type: 'drop_item',
      id: 'kubejs:stellarium_ingot',
      count: 32
    }
  });
});
