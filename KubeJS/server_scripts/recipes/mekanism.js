// Converted from mekanism.js for Minecraft 1.21.1 NeoForge.
(function () {
// Mekanism Combiner. Inputs accept an item ID or '#tag'; JSON format matches Mekanism's own combining recipes.
function combinerInput(id, count) {
  return id.startsWith('#') ? { count: count, tag: id.slice(1) } : { count: count, item: id };
}
function combiner(event, extrainput, extracount, maininput, maincount, outcount, output) {
  return event.custom({ type: 'mekanism:combining', extra_input: combinerInput(extrainput, extracount),
    main_input: combinerInput(maininput, maincount), output: { count: outcount, id: output } });
}

// The below is old code during porting. I haven't bother factoring it properly. One day...
function materialize(v) {
  if (Array.isArray(v)) return v.map(materialize);
  if (!v || typeof v !== 'object') return v;
  if (v._stack) return Item.of(v.id, v.count || 1, v.components || {});
  if (v._ingredient) return Ingredient.of(v.json).withCount(v.count || 1);
  if (v._fluid) return Fluid.of(v.id, v.amount);
  var o = {}; Object.keys(v).forEach(function (k) { o[k] = materialize(v[k]); }); return o;
}
const records = [
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:metallurgic_infusing",
        "output": {
          "id": "mekanism:basic_control_circuit",
          "count": 1
        },
        "item_input": {
          "tag": "c:ingots/osmium"
        },
        "chemical_input": {
          "amount": 10,
          "tag": "mekanism:redstone"
        },
        "per_tick_usage": false
      }
    ],
    "steps": [
      [
        "id",
        [
          "kubejs:mekanism/basic_control_circuit"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:injecting",
        "output": {
          "id": "immersiveengineering:coal_coke",
          "count": 1
        },
        "item_input": {
          "item": "minecraft:coal"
        },
        "chemical_input": {
          "amount": 1,
          "chemical": "mekanism:oxygen"
        },
        "per_tick_usage": true
      }
    ],
    "steps": [
      [
        "id",
        [
          "kubejs_modified_coal_coke"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "immersiveengineering:coal_coke"
        },
        "output": {
          "id": "immersiveengineering:dust_coke",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "kubejs_coke_dust"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "minecraft:amethyst_block"
        },
        "output": {
          "id": "spectrum:amethyst_powder",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "spectrum_amethyst_powder"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "spectrum:topaz_block"
        },
        "output": {
          "id": "spectrum:topaz_powder",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "spectrum_topaz_powder"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "spectrum:citrine_block"
        },
        "output": {
          "id": "spectrum:citrine_powder",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "spectrum_citrine_powder"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "spectrum:onyx_block"
        },
        "output": {
          "id": "spectrum:onyx_powder",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "spectrum_onyx_powder"
        ]
      ]
    ],
    "source": "mekanism.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "mekanism:crushing",
        "input": {
          "item": "spectrum:moonstone_block"
        },
        "output": {
          "id": "spectrum:moonstone_powder",
          "count": 1
        }
      }
    ],
    "steps": [
      [
        "id",
        [
          "spectrum_moonstone_powder"
        ]
      ]
    ],
    "source": "mekanism.js"
  }
];

ServerEvents.recipes(function (event) {
  // extra input, extra count, main input, main count, output count, output
  combiner(event, 'gtceu:chaos_infused_dust', 1, 'gaiadimension:white_opal', 1, 1, 'gaiadimension:green_opal');

  records.forEach(function (r) {
    try {
      var a = r.kind === 'custom' ? r.args : materialize(r.args);
      var b;
      if (r.kind === 'custom') b = event.custom(a[0]);
      else if (r.kind === 'remove') { event.remove(a[0]); return; }
      else if (r.kind === 'replaceInput') { event.replaceInput(a[0], a[1], a[2]); return; }
      else if (r.kind === 'replaceOutput') { event.replaceOutput(a[0], a[1], a[2]); return; }
      else {
        var p = r.kind.split(':');
        var fn = p[0] === 'minecraft' ? event[p[1]] : event.recipes[p[0]][p[1]];
        if (typeof fn !== 'function') throw new Error('Missing target builder ' + r.kind);
        b = Function.prototype.apply.call(fn, p[0] === 'minecraft' ? event : event.recipes[p[0]], a);
      }
      (r.steps || []).forEach(function (step) {
        if (step[0] === 'id' || step[0] !== 'perTick') b = Function.prototype.apply.call(b[step[0]], b, materialize(step[1]));
        else b = Function.prototype.apply.call(b.perTick, b, step[1]);
      });
    } catch (error) { console.error('[1.21.1 port] ' + r.source + ' / ' + r.kind + ': ' + error); }
  });
});
})();
