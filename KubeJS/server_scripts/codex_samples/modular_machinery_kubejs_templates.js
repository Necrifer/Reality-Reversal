// Codex sample: Modular Machinery Reborn KubeJS templates.
// Keep disabled until the machine ids, structures, and recipes are reviewed.
const CODEX_ENABLE_MMR_KUBEJS_TEMPLATES = false;

if (CODEX_ENABLE_MMR_KUBEJS_TEMPLATES) {
  MMREvents.machines(event => {
    event.create('modpack:kubejs_item_fluid_energy_machine')
      .name('Codex KubeJS Sample: Item Fluid Energy Machine')
      .color(0xffaa00)
      .structure(
        MMRStructureBuilder.create()
          .pattern([
            ['III', 'ECF', 'OOO'],
            ['PPP', 'R@S', 'PPP']
          ])
          .keys({
            '@': 'modular_machinery_reborn:controller',
            C: 'modular_machinery_reborn:casing_plain',
            P: '#modular_machinery_reborn:plain_connectable',
            I: 'modular_machinery_reborn:inputbus_normal',
            O: 'modular_machinery_reborn:outputbus_normal',
            F: 'modular_machinery_reborn:fluidinputhatch_normal',
            S: 'modular_machinery_reborn:fluidoutputhatch_normal',
            E: 'modular_machinery_reborn:energyinputhatch_normal',
            R: 'modular_machinery_reborn:energyoutputhatch_normal'
          })
          .addMinBlock('modular_machinery_reborn:casing_plain', 2)
      );

    event.create('modpack:kubejs_mekanism_chemical_heat_machine')
      .name('Codex KubeJS Sample: Mekanism Chemical Heat Machine')
      .color(0x5555ff)
      .structure(
        MMRStructureBuilder.create()
          .pattern([
            ['CCC', 'IHG', 'OOO'],
            ['RRR', 'T@U', 'RRR']
          ])
          .keys({
            '@': 'modular_machinery_reborn:controller',
            C: 'modular_machinery_reborn:casing_circuitry',
            R: '#modular_machinery_reborn:reinforced_connectable',
            I: 'modular_machinery_reborn_mekanism:chemicalinputhatch_normal',
            O: 'modular_machinery_reborn_mekanism:chemicaloutputhatch_normal',
            H: 'modular_machinery_reborn_mekanism:heat_input_vent',
            G: 'modular_machinery_reborn_mekanism:geiger_meter',
            T: 'modular_machinery_reborn_mekanism:heat_output_vent',
            U: 'modular_machinery_reborn:energyinputhatch_normal'
          })
      );

    event.create('modpack:kubejs_energistics_me_machine')
      .name('Codex KubeJS Sample: Energistics ME Machine')
      .color(0x4444ff)
      .structure(
        MMRStructureBuilder.create()
          .pattern([
            ['ABC', 'DCE', 'FGH'],
            ['JKL', 'M@N', 'OPQ']
          ])
          .keys({
            '@': 'modular_machinery_reborn:controller',
            C: 'modular_machinery_reborn:casing_circuitry',
            A: 'modular_machinery_reborn_energistics:me_input_bus',
            B: 'modular_machinery_reborn_energistics:me_output_bus',
            D: 'modular_machinery_reborn_energistics:me_input_hatch',
            E: 'modular_machinery_reborn_energistics:me_output_hatch',
            F: 'modular_machinery_reborn_energistics:me_input_chemical_hatch',
            G: 'modular_machinery_reborn_energistics:me_output_chemical_hatch',
            H: 'modular_machinery_reborn_energistics:me_input_source_hatch',
            J: 'modular_machinery_reborn_energistics:me_output_source_hatch',
            K: 'modular_machinery_reborn_energistics:me_advanced_input_bus',
            L: 'modular_machinery_reborn_energistics:me_advanced_output_bus',
            M: 'modular_machinery_reborn_energistics:me_advanced_input_hatch',
            N: 'modular_machinery_reborn_energistics:me_advanced_output_hatch',
            O: 'modular_machinery_reborn_energistics:me_advanced_input_chemical_hatch',
            P: 'modular_machinery_reborn_energistics:me_advanced_output_chemical_hatch',
            Q: 'modular_machinery_reborn_energistics:me_advanced_input_source_hatch'
          })
      );
  });
}

ServerEvents.recipes(event => {
  if (!CODEX_ENABLE_MMR_KUBEJS_TEMPLATES) return;

  const recipe = (id, body) => event.custom(body).id(id);
  const itemInput = (id, count) => ({ count: count, item: id });
  const itemOutput = (id, count) => ({ count: count, item: id });
  const fluidInput = (id, amount) => ({ amount: amount, fluid: id });
  const chemicalStack = (id, amount) => ({ amount: amount, chemical: id });

  recipe('codex_mmr_kubejs:item_fluid_energy_recipe', {
    type: 'modular_machinery_reborn:machine_recipe',
    machine: 'modpack:kubejs_item_fluid_energy_machine',
    ticks: 200,
    requirements: [
      {
        requirement: {
          type: 'modular_machinery_reborn:item',
          mode: 'input',
          ingredient: itemInput('minecraft:iron_ingot', 1)
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn:fluid',
          mode: 'input',
          ingredient: fluidInput('minecraft:water', 1000)
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn:energy',
          mode: 'input',
          amount: 10000
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn:item',
          mode: 'output',
          ingredient: itemOutput('minecraft:gold_ingot', 1)
        }
      }
    ]
  });

  recipe('codex_mmr_kubejs:mekanism_chemical_heat_recipe', {
    type: 'modular_machinery_reborn:machine_recipe',
    machine: 'modpack:kubejs_mekanism_chemical_heat_machine',
    ticks: 300,
    requirements: [
      {
        requirement: {
          type: 'modular_machinery_reborn_mekanism:chemical',
          mode: 'input',
          chemical: chemicalStack('mekanism:oxygen', 100)
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn_mekanism:chemical_per_tick',
          mode: 'input',
          chemical: chemicalStack('mekanism:hydrogen', 1)
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn_mekanism:chemical',
          mode: 'output',
          chemical: chemicalStack('mekanism:water_vapor', 50)
        }
      },
      {
        requirement: {
          type: 'modular_machinery_reborn_mekanism:heat',
          mode: 'input',
          amount: 25.0
        }
      }
    ]
  });
});
