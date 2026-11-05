// Restores JAOPCA's NuclearCraft: Neoteric recipes for JAOPCA materials (melter, manufactory, pressurizer, ingot former).
// JAOPCA 5.0.14.23 bug: its Neohaul "nuclearcraft_molten"/"nuclearcraft_compat" modules also depend on mod id
// "nuclearcraft" and reuse the same module names, so they replace the Neoteric modules and every recipe they build
// fails (NoClassDefFoundError com/nred/nuclearcraft/...). This script repeats the Neoteric modules' own rules, using
// JAOPCA's runtime materials and tag lists and the Neoteric modules' own default blacklists, so the output matches.
(function () {
  // Materials to skip in addition to the JAOPCA defaults (replaces the module .toml blacklists, which now belong
  // to the Neohaul modules). Example: ['tin_alloy', 'zinc'].
  const EXTRA_BLACKLIST = [];
  const ID_PREFIX = 'kubejs:nuclearcraft/jaopca/';
  const TIME = 200;
  const POWER = 50;

  ServerEvents.recipes(event => {
    let api, misc, blacklists;
    try {
      api = Java.loadClass('thelm.jaopca.utils.ApiImpl').INSTANCE;
      misc = Java.loadClass('thelm.jaopca.utils.MiscHelper').INSTANCE;
      const Reflection = Java.loadClass('net.yxiao233.appliedjs.utils.ReflectionUtil');
      const JSet = Java.loadClass('java.util.Set');
      const CompatModule = Java.loadClass('thelm.jaopca.compat.nuclearcraft.NuclearCraftCompatModule');
      const MoltenModule = Java.loadClass('thelm.jaopca.compat.nuclearcraft.NuclearCraftMoltenModule');
      const compat = new CompatModule();
      const field = name => Reflection.getPrivateField(name, JSet, compat, CompatModule);
      blacklists = {
        toDust: field('TO_DUST_BLACKLIST'),
        toPlate: field('TO_PLATE_BLACKLIST'),
        toCrystal: field('TO_CRYSTAL_BLACKLIST'),
        molten: field('MOLTEN_BLACKLIST'),
        oreMolten: new MoltenModule().getDefaultMaterialBlacklist()
      };
    } catch (err) {
      console.warn('[nuclearcraft_jaopca] Disabled, JAOPCA/NuclearCraft classes not readable: ' + err);
      return;
    }

    const itemTags = api.getItemTags();
    const fluidTags = api.getFluidTags();
    const listed = (set, name) => set.contains(name) || EXTRA_BLACKLIST.indexOf(name) >= 0;
    const tag = (form, name) => misc.getTagLocation(form, name);

    const add = (machine, key, name, body) => {
      body.type = 'nuclearcraft:' + machine;
      body.process_time = TIME;
      body.energy_per_tick = POWER;
      event.custom(body).id(ID_PREFIX + key + '/' + name);
    };
    const itemIn = (rl, count) => [{tag: String(rl), count: count}];
    const itemOut = rl => [{tag: String(rl)}];
    const fluid = (rl, amount) => [{tag: String(rl), amount: amount}];

    // Each rule mirrors one recipe group of NuclearCraftCompatModule / NuclearCraftMoltenModule.
    const rules = [
      {key: 'material_to_dust', when: m => !m.type.isDust() && !listed(blacklists.toDust, m.name) && itemTags.contains(m.dust),
        make: m => add('manufactory', 'material_to_dust', m.name, {item_inputs: itemIn(m.material, 1), item_outputs: itemOut(m.dust)})},
      {key: 'material_to_plate', when: m => m.type.isIngot() && !listed(blacklists.toPlate, m.name) && itemTags.contains(m.plate),
        make: m => add('pressurizer', 'material_to_plate', m.name, {item_inputs: itemIn(m.material, 1), item_outputs: itemOut(m.plate)})},
      {key: 'dust_to_material', when: m => m.type.isCrystalline() && !listed(blacklists.toCrystal, m.name) && itemTags.contains(m.dust),
        make: m => add('pressurizer', 'dust_to_material', m.name, {item_inputs: itemIn(m.dust, 1), item_outputs: itemOut(m.material)})},
      {key: 'material_to_molten', when: m => m.hasMolten && !listed(blacklists.molten, m.name),
        make: m => add('melter', 'material_to_molten', m.name, {item_inputs: itemIn(m.material, 1), fluid_outputs: fluid(m.molten, m.amount)})},
      {key: 'dust_to_molten', when: m => m.hasMolten && !listed(blacklists.molten, m.name) && itemTags.contains(m.dust),
        make: m => add('melter', 'dust_to_molten', m.name, {item_inputs: itemIn(m.dust, 1), fluid_outputs: fluid(m.molten, m.amount)})},
      {key: 'molten_to_material', when: m => m.hasMolten && !listed(blacklists.molten, m.name),
        make: m => add('ingot_former', 'molten_to_material', m.name, {fluid_inputs: fluid(m.molten, m.amount), item_outputs: itemOut(m.material)})},
      {key: 'ore_to_molten', when: m => m.moltenModule && itemTags.contains(m.ore),
        make: m => add('melter', 'ore_to_molten', m.name, {item_inputs: itemIn(m.ore, 1), fluid_outputs: fluid(m.molten, 240)})},
      {key: 'raw_material_to_molten', when: m => m.moltenModule && m.typeName === 'INGOT' && itemTags.contains(m.raw),
        make: m => add('melter', 'raw_material_to_molten', m.name, {item_inputs: itemIn(m.raw, 1), fluid_outputs: fluid(m.molten, 120)})}
    ];

    const counts = {};
    rules.forEach(r => { counts[r.key] = 0; });
    let failed = 0;
    api.getMaterials().forEach(material => {
      const type = material.getType();
      const name = String(material.getName());
      const typeName = String(type.name());
      const molten = misc.getTagLocation('molten', name, '_');
      const hasMolten = !type.isDust() && fluidTags.contains(molten);
      const m = {
        name: name, type: type, typeName: typeName, molten: molten, hasMolten: hasMolten,
        material: tag(type.getFormName(), name), dust: tag('dusts', name), plate: tag('plates', name),
        ore: tag('ores', name), raw: tag('raw_materials', name),
        amount: type.isIngot() ? 90 : 100,
        moltenModule: hasMolten && (typeName === 'INGOT' || typeName === 'INGOT_LEGACY') &&
          !listed(blacklists.oreMolten, name)
      };
      rules.forEach(r => {
        try {
          if (!r.when(m)) return;
          r.make(m);
          counts[r.key]++;
        } catch (err) {
          failed++;
          console.warn('[nuclearcraft_jaopca] ' + r.key + ' failed for ' + name + ': ' + err);
        }
      });
    });
    console.info('[nuclearcraft_jaopca] Added recipes ' + JSON.stringify(counts) + (failed ? ', ' + failed + ' failed' : ''));
  });
})();
