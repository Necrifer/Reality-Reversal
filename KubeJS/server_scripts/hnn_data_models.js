// Custom Hostile Neural Networks 6.5.1 data models, generated as datapack JSON (data/<ns>/data_models/<id>.json).
// HNN reads data models through Placebo's dynamic registry; a broken or misplaced file is skipped without an error,
// so check the "Registered N data_models." line in the log after a reload.
// Add a model by adding one entry to MODELS. Fields:
//   id         model id; also the file name. Use 'namespace:path' or a bare path (defaults to hostilenetworks:)
//   entity     the entity type the model learns from (required)
//   color      name colour, '#RRGGBB' (required)
//   sim_cost   FE/t used by the Simulation Chamber (required)
//   base_drop  prediction item, e.g. 'hostilenetworks:overworld_prediction' | nether_ | end_ | twilight_prediction,
//              or a custom one from kubejs/startup_scripts/hnn_predictions.js, e.g. 'kubejs:eden_prediction'
//   drops      Loot Fabricator outputs: [itemId, count] or [itemId, count, true] for an optional (mod may be absent) item
//   trivia     lang key shown in the Deep Learner (optional; defaults to hostilenetworks.trivia.<path>)
//   name       lang key for the display name (optional; defaults to the entity's own name)
//   display    {scale, x_offset, y_offset, z_offset} for the rendered entity (optional)
//   input      item consumed per simulation (optional; defaults to hostilenetworks:prediction_matrix)
//   variants   extra entity types that also train this model (optional)
ServerEvents.generateData('after_mods', function (event) {
  var MODELS = [
    {id: 'sunstorm', entity: 'divinerpg:sunstorm', color: '#F5E727', sim_cost: 12500,
      base_drop: 'kubejs:eden_prediction', display: {scale: 0.8}, name: 'entity.divinerpg.sunstorm',
      drops: [['divinerpg:eden_heart', 1], ['kubejs:chaos_infused', 1], ['minecraft:sugar', 32]]}
  ];

  var stack = function (drop) {
    var out = {id: drop[0], count: drop[1]};
    if (drop[2]) out.optional = true;
    return out;
  };

  MODELS.forEach(function (m) {
    var id = m.id.indexOf(':') >= 0 ? m.id : 'hostilenetworks:' + m.id;
    var ns = id.split(':')[0];
    var path = id.split(':')[1];
    var json = {
      entity: m.entity,
      variants: m.variants || [],
      name_color: m.color,
      display: m.display || {},
      sim_cost: m.sim_cost,
      input: {item: m.input || 'hostilenetworks:prediction_matrix'},
      base_drop: {id: m.base_drop},
      trivia: m.trivia || 'hostilenetworks.trivia.' + path,
      fabricator_drops: m.drops.map(stack)
    };
    if (m.name) json.name = {translate: m.name};
    event.json(ns + ':data_models/' + path + '.json', json);
  });
  console.info('[hnn_data_models] Generated ' + MODELS.length + ' data models');
});
