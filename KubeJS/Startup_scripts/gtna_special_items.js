// Required GTNA special ingredients, registered as plain KubeJS items.
// Names, texture layers and colors are preserved; source item behavior is omitted.
(function () {
  var items = [
  {
    "id": "gtna:boron_carbide_ceramics_flake",
    "name": "Boron Carbide Ceramics Flake",
    "textures": {
      "layer0": "gtceu:item/material_sets/bright/foil",
      "layer1": "gtceu:item/material_sets/bright/foil_overlay",
      "layer2": "gtceu:item/material_sets/bright/foil_secondary"
    },
    "color": 2829105,
    "secondary_color": 2829105
  },
  {
    "id": "gtna:carbon_nanites",
    "name": "Carbon Nanites",
    "textures": {
      "layer0": "gtna:item/nanites/generic",
      "layer1": "gtna:item/nanites/generic_overlay"
    },
    "color": 1315860
  },
  {
    "id": "gtna:electromagnet_tengam",
    "name": "Tengam Electromagnet",
    "textures": {
      "layer0": "gtna:item/electromagnet_tengam"
    }
  },
  {
    "id": "gtna:gold_nanites",
    "name": "Gold Nanites",
    "textures": {
      "layer0": "gtna:item/nanites/generic",
      "layer1": "gtna:item/nanites/generic_overlay"
    },
    "color": 16770640
  },
  {
    "id": "gtna:graviton_anomaly",
    "name": "Graviton Anomaly",
    "textures": {
      "layer0": "gtna:item/graviton_anomaly"
    }
  },
  {
    "id": "gtna:hydraulic_arm",
    "name": "Hydraulic Arm",
    "textures": {
      "layer0": "gtna:item/hydraulic_arm"
    }
  },
  {
    "id": "gtna:laser_lens_special",
    "name": "Special Laser Lens",
    "textures": {
      "layer0": "gtna:item/laser_lens_special"
    }
  },
  {
    "id": "gtna:neutronium_heat_capacitor",
    "name": "1G Neutronium Heat Capacitor",
    "textures": {
      "layer0": "gtna:item/neutronium_heat_capacitor"
    }
  },
  {
    "id": "gtna:relativistic_heat_capacitor",
    "name": "Relativistic Heat Capacitor",
    "textures": {
      "layer0": "gtna:item/relativistic_heat_capacitor"
    }
  },
  {
    "id": "gtna:silver_nanites",
    "name": "Silver Nanites",
    "textures": {
      "layer0": "gtna:item/nanites/generic",
      "layer1": "gtna:item/nanites/generic_overlay"
    },
    "color": 14474495
  },
  {
    "id": "gtna:six_phased_copper_nanites",
    "name": "Six-Phased Copper Nanites",
    "textures": {
      "layer0": "gtna:item/nanites/generic",
      "layer1": "gtna:item/nanites/generic_overlay"
    },
    "color": 16742420
  },
  {
    "id": "gtna:space_coolant_cell",
    "name": "1080k Sp Coolant Cell",
    "textures": {
      "layer0": "gtna:item/space_coolant_cell"
    }
  },
  {
    "id": "gtna:stable_boson_containment_unit",
    "name": "Stable Boson Containment Unit",
    "textures": {
      "layer0": "gtna:item/stable_boson_containment_unit"
    }
  },
  {
    "id": "gtna:superconductor_composite",
    "name": "Superconductor Composite",
    "textures": {
      "layer0": "gtna:item/superconductor_composite"
    }
  },
  {
    "id": "gtna:superdense_creon_plate",
    "name": "Superdense Creon Plate",
    "textures": {
      "layer0": "gtna:item/special/creon_plate_superdense",
      "layer1": "gtna:item/special/creon_plate_superdense_overlay",
      "layer2": "gtna:item/special/creon_plate_superdense_secondary"
    },
    "color": 4587590,
    "secondary_color": 4587590
  },
  {
    "id": "gtna:superdense_transcendent_metal_plate",
    "name": "Superdense Transcendent Metal Plate",
    "textures": {
      "layer0": "gtna:item/special/transcendent_metal_plate_superdense",
      "layer1": "gtna:item/special/transcendent_metal_plate_superdense_overlay",
      "layer2": "gtna:item/special/transcendent_metal_plate_superdense_secondary"
    },
    "color": 3289650,
    "secondary_color": 3289650
  },
  {
    "id": "gtna:thermal_superconductor",
    "name": "Thermal Superconductor",
    "textures": {
      "layer0": "gtna:item/thermal_superconductor"
    }
  },
  {
    "id": "gtna:titanium_nitride_ceramic_flake",
    "name": "Titanium Nitride Ceramic Flake",
    "textures": {
      "layer0": "gtceu:item/material_sets/bright/foil",
      "layer1": "gtceu:item/material_sets/bright/foil_overlay",
      "layer2": "gtceu:item/material_sets/bright/foil_secondary"
    },
    "color": 13937739,
    "secondary_color": 10254900
  },
  {
    "id": "gtna:universium_nanites",
    "name": "Universium Nanites",
    "textures": {
      "layer0": "gtna:item/nanites/universium"
    }
  },
  {
    "id": "gtna:zirconia_ceramic_flake",
    "name": "Zirconia Ceramic Flake",
    "textures": {
      "layer0": "gtceu:item/material_sets/bright/foil",
      "layer1": "gtceu:item/material_sets/bright/foil_overlay",
      "layer2": "gtceu:item/material_sets/bright/foil_secondary"
    },
    "color": 15395562,
    "secondary_color": 15395562
  }
];
  StartupEvents.registry('item', function (event) {
    items.forEach(function (item) {
      var builder = event.create(item.id).displayName(item.name).textures(item.textures);
      if (item.color !== undefined) {
        builder.color(function (stack, layer) {
          if (layer === 0) return item.color;
          if (layer === 2 && item.secondary_color !== undefined) return item.secondary_color;
          return -1;
        });
      }
    });
  });
})();
