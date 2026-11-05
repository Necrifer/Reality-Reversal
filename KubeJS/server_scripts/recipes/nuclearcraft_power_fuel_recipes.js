// Converted from nuclearcraft_power_fuel_recipes.js for Minecraft 1.21.1 NeoForge.
(function () {

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
    "file": "nuclearcraft_power_fuel_recipes.js",
    "kind": "remove",
    "args": [
      {
        "id": "nuclearcraft:fission_reactor_controller/reality_rfe_1_ox"
      }
    ],
    "steps": [],
    "source": "nuclearcraft_power_fuel_recipes.js"
  },
  {
    "file": "nuclearcraft_power_fuel_recipes.js",
    "kind": "remove",
    "args": [
      {
        "id": "nuclearcraft:fission_reactor_controller/reality_rfe_1_ni"
      }
    ],
    "steps": [],
    "source": "nuclearcraft_power_fuel_recipes.js"
  },
  {
    "file": "nuclearcraft_power_fuel_recipes.js",
    "kind": "remove",
    "args": [
      {
        "id": "nuclearcraft:fission_reactor_controller/reality_rfe_1_za"
      }
    ],
    "steps": [],
    "source": "nuclearcraft_power_fuel_recipes.js"
  },
  {
    "file": "nuclearcraft_power_fuel_recipes.js",
    "kind": "minecraft:shaped",
    "args": [
      "nuclearcraft:fuel_reality_rfe_1",
      [
        "XXX",
        "XMX",
        "XXX"
      ],
      {
        "X": "nuclearcraft:fuel_xenorium_xen_298",
        "M": "kubejs:modular_ingot"
      }
    ],
    "steps": [
      [
        "id",
        [
          "kubejs:reality_fission_energy_core"
        ]
      ]
    ],
    "source": "nuclearcraft_power_fuel_recipes.js"
  }
];

ServerEvents.recipes(function (event) {
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
