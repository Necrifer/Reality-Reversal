// Converted from industrial_foregoing.js for Minecraft 1.21.1 NeoForge.
ServerEvents.recipes(event => {
(function () {

function materialize(v) {
  if (Array.isArray(v)) return v.map(materialize);
  if (!v || typeof v !== 'object') return v;
  if (v._stack) return Item.of(v.id, v.count || 1, v.components || {});
  if (v._ingredient) return Ingredient.of(v.json).withCount(v.count || 1);
  if (v._fluid) return Fluid.of(v.id, v.amount);
  var o = {}; Object.keys(v).forEach(function (k) { o[k] = materialize(v[k]); }); return o;
}
function fluidin (id, vol) {return id.startsWith('#') ? {tag: id.slice(1), amount: vol} : {fluid: id, amount: vol}}
function fluidout (id, vol) {return id.startsWith('#') ? {tag: id.slice(1), amount: vol} : {fluid: id, amount: vol}}
function itemout (id, amt) {return id.startsWith('#') ? {tag: id.slice(1), amount: amt} : {item: id, amount: amt}}
function dischamber(input, liqin, volin, output, amountout, liqout, volout){
  return event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: input,
    inputFluid: fluidin[(liqin, volin)],
    output: itemout[(output, amountout)],
    outputFluid: fluidout[(liqout, volout)]
  })
}
const records = [
  {
    "file": "industrial_foregoing.js",
    "kind": "remove",
    "args": [
      {
        "id": "industrialforegoing:dissolution_chamber/pink_slime_ingot"
      }
    ],
    "steps": [],
    "source": "industrial_foregoing.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "ae2:charged_certus_quartz_crystal"
          }
        ],
        "inputFluid": {
          "fluid": "minecraft:water",
          "amount": 1000
        },
        "output": {
          "id": "ae2:fluix_crystal",
          "count": 1
        },
        "outputFluid": {
          "amount": 1000,
          "id": "kubejs:fluid_charged_fluix"
        },
        "processingTime": 400
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:industrialforegoing/custom_fluix"
        ]
      ]
    ],
    "source": "industrial_foregoing.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "kubejs:stellarium_ingot"
          },
          {
            "item": "industrialforegoing:pink_slime"
          },
          {
            "item": "aoa3:ghastly_ingot"
          }
        ],
        "inputFluid": {
          "fluid": "industrialforegoing:pink_slime",
          "amount": 1000
        },
        "output": {
          "id": "industrialforegoing:pink_slime_ingot",
          "count": 8
        },
        "processingTime": 200
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:industrialforegoing/custom_pink_slime_ingot"
        ]
      ]
    ],
    "source": "industrial_foregoing.js"
  },
  {
    "kind": "custom",
    "args": [
      {
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": "mysticalagriculture:inferium_essence"
          },
          {
            "item": "minecraft:dirt"
          },
          {
            "item": "aoa3:ghastly_ingot"
          },
          {
            "item": "botania:manasteel_ingot"
          }
        ],
        "inputFluid": {
          "fluid": "kubejs:fluid_charged_fluix",
          "amount": 1000
        },
        "output": {
          "id": "mysticalagriculture:inferium_farmland",
          "count": 1
        },
        "processingTime": 200
      }
    ],
    "steps": [
      [
        "id",
        [
          "modpack:industrialforegoing/inferium_farmland"
        ]
      ]
    ],
    "source": "industrial_foregoing.js"
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
})});
