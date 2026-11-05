// Extra "Generalized <Dimension> Prediction" items for Hostile Neural Networks 6.5.1.
// HNN's own overworld/nether/end/twilight predictions are plain items with no special behaviour; a data model's
// base_drop accepts any item, so these work the same way. Use them in kubejs/server_scripts/hnn_data_models.js
// as base_drop: 'kubejs:<id>'.
// The texture is a greyscale copy of HNN's prediction globe, tinted per item with `color`.
StartupEvents.registry('item', event => {
  // id, display name, tint (0xRRGGBB)
  const PREDICTIONS = [
    ['eden_prediction', 'Generalized Eden Prediction', 0xF5E727]
  ];

  PREDICTIONS.forEach(p => {
    event.create(p[0])
      .texture('kubejs:item/dimension_prediction')
      .color(0, p[2])
      .displayName(Text.of(p[1]))
      .tag('kubejs:hnn_predictions')
  });
});
