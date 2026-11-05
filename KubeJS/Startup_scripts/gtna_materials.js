// Native GT material forms for the captured multiblock dependency closure.
// Names/colors/icons and form selection only; no source recipes or physical properties.
// Registered by the installed KubeJS/GT event route in 00_rr_native_materials.js.
(function () {
  var materials = [
  {
    "source_id": "gtna:stronze",
    "id": "gtceu:gtna_stronze",
    "name": "Stronze",
    "base_form": "ingot",
    "color": 9863216,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_GEAR",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "pipeTinyFluid",
      "plate"
    ],
    "forms": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "pipeTinyFluid",
      "plate"
    ],
    "required_forms": [
      "gear",
      "pipeTinyFluid",
      "plate"
    ],
    "native_pipe_defaults": true,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:breel",
    "id": "gtceu:gtna_breel",
    "name": "Breel",
    "base_form": "ingot",
    "color": 5267520,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "pipeNormalFluid",
      "pipeTinyFluid",
      "plate",
      "doublePlate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "pipeNormalFluid",
      "pipeTinyFluid",
      "plate",
      "plateDouble"
    ],
    "required_forms": [
      "pipeNormalFluid",
      "pipeTinyFluid",
      "plate",
      "plateDouble"
    ],
    "native_pipe_defaults": true,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:hastelloy_n",
    "id": "gtceu:gtna_hastelloy_n",
    "name": "Hastelloy N",
    "base_form": "ingot",
    "color": 11184810,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_PLATE",
      "GENERATE_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "plate",
      "rod"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plate",
      "rod"
    ],
    "required_forms": [
      "frameGt",
      "ingot",
      "plate",
      "rod"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:aluminium_bronze",
    "id": "gtceu:gtna_aluminium_bronze",
    "name": "Aluminium Bronze",
    "base_form": "ingot",
    "color": 16768685,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "plate"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plate"
    ],
    "required_forms": [
      "frameGt",
      "plate"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:dark_steel",
    "id": "gtceu:gtna_dark_steel",
    "name": "Dark Steel",
    "base_form": "ingot",
    "color": 4278097,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "frameGt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:end_steel",
    "id": "gtceu:gtna_end_steel",
    "name": "End Steel",
    "base_form": "ingot",
    "color": 14080384,
    "icon_set": "METALLIC",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "wireGtQuadruple"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "wireGtQuadruple"
    ],
    "required_forms": [
      "wireGtQuadruple"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": true
  },
  {
    "source_id": "gtna:trinaquadalloy",
    "id": "gtceu:gtna_trinaquadalloy",
    "name": "Trinaquadalloy",
    "base_form": "ingot",
    "color": 2627634,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "plate"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plate"
    ],
    "required_forms": [
      "frameGt",
      "plate"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:mar_m_200_steel",
    "id": "gtceu:gtna_mar_m_200_steel",
    "name": "Mar M 200 Steel",
    "base_form": "ingot",
    "color": 5329233,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_GEAR",
      "GENERATE_PLATE",
      "GENERATE_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "doublePlate",
      "rod"
    ],
    "forms": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "plateDouble",
      "rod"
    ],
    "required_forms": [
      "gear",
      "plate",
      "plateDouble",
      "rod"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:inconel_625",
    "id": "gtceu:gtna_inconel_625",
    "name": "Inconel 625",
    "base_form": "ingot",
    "color": 52582,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "GENERATE_GEAR",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "bolt",
      "dust",
      "gear",
      "ingot",
      "nugget",
      "doublePlate"
    ],
    "forms": [
      "bolt",
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plateDouble"
    ],
    "required_forms": [
      "bolt",
      "gear",
      "plateDouble"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:tantalloy_61",
    "id": "gtceu:gtna_tantalloy_61",
    "name": "Tantalloy 61",
    "base_form": "ingot",
    "color": 3552822,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "bolt",
      "dust",
      "ingot",
      "nugget"
    ],
    "forms": [
      "bolt",
      "dust",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "bolt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:abs",
    "id": "gtceu:gtna_abs",
    "name": "Abs",
    "base_form": "polymer",
    "color": 15263717,
    "icon_set": "DULL",
    "flags": [
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "plate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plate"
    ],
    "required_forms": [
      "plate"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:polystyrene",
    "id": "gtceu:gtna_polystyrene",
    "name": "Polystyrene",
    "base_form": "polymer",
    "color": 13027014,
    "icon_set": "DULL",
    "flags": [
      "GENERATE_FOIL",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "foil",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "foil",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "foil"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:cobalt_oxide",
    "id": "gtceu:gtna_cobalt_oxide",
    "name": "Cobalt Oxide",
    "base_form": "dust",
    "color": 3497351,
    "icon_set": "DULL",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust"
    ],
    "forms": [
      "dust"
    ],
    "required_forms": [
      "dust"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:lithium_oxide",
    "id": "gtceu:gtna_lithium_oxide",
    "name": "Lithium Oxide",
    "base_form": "dust",
    "color": 15199989,
    "icon_set": "BRIGHT",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust"
    ],
    "forms": [
      "dust"
    ],
    "required_forms": [
      "dust"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:zirconia_ceramic",
    "id": "gtceu:gtna_zirconia_ceramic",
    "name": "Zirconia Ceramic",
    "base_form": "dust",
    "color": 15395562,
    "icon_set": "BRIGHT",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust"
    ],
    "forms": [
      "dust"
    ],
    "required_forms": [
      "dust"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:clay_compound",
    "id": "gtceu:gtna_clay_compound",
    "name": "Clay Compound",
    "base_form": "ingot",
    "color": 11176038,
    "icon_set": "DULL",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "plate"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plate"
    ],
    "required_forms": [
      "frameGt",
      "plate"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:compressed_steam",
    "id": "gtceu:gtna_compressed_steam",
    "name": "Compressed Steam",
    "base_form": "ingot",
    "color": 13421772,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "pipeTinyFluid",
      "plate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "pipeTinyFluid",
      "plate"
    ],
    "required_forms": [
      "pipeTinyFluid",
      "plate"
    ],
    "native_pipe_defaults": true,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:hastelloy_n_75",
    "id": "gtceu:gtna_hastelloy_n_75",
    "name": "Hastelloy N 75",
    "base_form": "ingot",
    "color": 9136404,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "GENERATE_GEAR",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "bolt",
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "doublePlate"
    ],
    "forms": [
      "bolt",
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "plateDouble"
    ],
    "required_forms": [
      "bolt",
      "gear",
      "plate",
      "plateDouble"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:carbon_fiber_polyphenylene_sulfide_composite",
    "id": "gtceu:gtna_carbon_fiber_polyphenylene_sulfide_composite",
    "name": "Carbon Fiber Polyphenylene Sulfide Composite",
    "base_form": "ingot",
    "color": 2368029,
    "icon_set": "BRIGHT",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "doublePlate"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plateDouble"
    ],
    "required_forms": [
      "frameGt",
      "plateDouble"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false,
    "secondary_color": 1512980
  },
  {
    "source_id": "gtna:titanium_nitride_ceramic",
    "id": "gtceu:gtna_titanium_nitride_ceramic",
    "name": "Titanium Nitride Ceramic",
    "base_form": "dust",
    "color": 13937739,
    "icon_set": "BRIGHT",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust"
    ],
    "forms": [
      "dust"
    ],
    "required_forms": [],
    "native_pipe_defaults": false,
    "native_wire_defaults": false,
    "secondary_color": 10254900
  },
  {
    "source_id": "gtna:boron_carbide_ceramics",
    "id": "gtceu:gtna_boron_carbide_ceramics",
    "name": "Boron Carbide Ceramics",
    "base_form": "dust",
    "color": 2829105,
    "icon_set": "BRIGHT",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust"
    ],
    "forms": [
      "dust"
    ],
    "required_forms": [
      "dust"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:tanmolyium",
    "id": "gtceu:gtna_tanmolyium",
    "name": "Tanmolyium",
    "base_form": "ingot",
    "color": 9905306,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "plate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plate"
    ],
    "required_forms": [
      "plate"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:space_time",
    "id": "gtceu:gtna_space_time",
    "name": "Space Time",
    "base_form": "ingot",
    "color": 16777215,
    "icon_set": "spacetime",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "GENERATE_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "rod",
      "screw"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "rod",
      "screw"
    ],
    "required_forms": [
      "rod",
      "screw"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:creon",
    "id": "gtceu:gtna_creon",
    "name": "Creon",
    "base_form": "ingot",
    "color": 4587590,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_DENSE",
      "GENERATE_GEAR",
      "GENERATE_LONG_ROD",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "densePlate",
      "longRod"
    ],
    "forms": [
      "dust",
      "gear",
      "ingot",
      "nugget",
      "plate",
      "plateDense",
      "rodLong"
    ],
    "required_forms": [
      "gear",
      "plate",
      "plateDense",
      "rodLong"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:mellion",
    "id": "gtceu:gtna_mellion",
    "name": "Mellion",
    "base_form": "ingot",
    "color": 3933445,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_GEAR",
      "GENERATE_LONG_ROD",
      "GENERATE_PLATE",
      "GENERATE_SMALL_GEAR",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "gear",
      "smallGear",
      "ingot",
      "nugget",
      "plate",
      "longRod"
    ],
    "forms": [
      "dust",
      "frameGt",
      "gear",
      "gearSmall",
      "ingot",
      "nugget",
      "plate",
      "rodLong"
    ],
    "required_forms": [
      "frameGt",
      "gear",
      "gearSmall",
      "plate",
      "rodLong"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:transcendent_metal",
    "id": "gtceu:gtna_transcendent_metal",
    "name": "Transcendent Metal",
    "base_form": "ingot",
    "color": 3289650,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_DENSE",
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "densePlate"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plateDense"
    ],
    "required_forms": [
      "frameGt",
      "plateDense"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:six_phased_copper",
    "id": "gtceu:gtna_six_phased_copper",
    "name": "Six Phased Copper",
    "base_form": "ingot",
    "color": 16742420,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "GENERATE_FRAME",
      "GENERATE_LONG_ROD",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "bolt",
      "dust",
      "frame",
      "ingot",
      "nugget",
      "plate",
      "longRod",
      "screw"
    ],
    "forms": [
      "bolt",
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "plate",
      "rodLong",
      "screw"
    ],
    "required_forms": [
      "bolt",
      "frameGt",
      "plate",
      "rodLong",
      "screw"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:tengam_attuned",
    "id": "gtceu:gtna_tengam_attuned",
    "name": "Tengam Attuned",
    "base_form": "ingot",
    "color": 14024576,
    "icon_set": "MAGNETIC",
    "flags": [
      "GENERATE_DENSE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "densePlate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plateDense"
    ],
    "required_forms": [
      "plateDense"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:infinity",
    "id": "gtceu:gtna_infinity",
    "name": "Infinity",
    "base_form": "ingot",
    "color": 16777215,
    "icon_set": "infinity",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_LONG_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "longRod"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "rodLong"
    ],
    "required_forms": [
      "frameGt",
      "rodLong"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:superconductor_uiv_base",
    "id": "gtceu:gtna_superconductor_uiv_base",
    "name": "Superconductor Uiv Base",
    "base_form": "ingot",
    "color": 15030449,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_LONG_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget",
      "longRod"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget",
      "rodLong"
    ],
    "required_forms": [
      "frameGt",
      "rodLong"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:hypogen",
    "id": "gtceu:gtna_hypogen",
    "name": "Hypogen",
    "base_form": "ingot",
    "color": 16777215,
    "icon_set": "hypogen",
    "flags": [
      "GENERATE_BOLT_SCREW",
      "GENERATE_FINE_WIRE",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "screw",
      "fineWire"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "screw",
      "wireFine"
    ],
    "required_forms": [
      "plate",
      "screw",
      "wireFine"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:celestial_tungsten",
    "id": "gtceu:gtna_celestial_tungsten",
    "name": "Celestial Tungsten",
    "base_form": "ingot",
    "color": 3289650,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_LONG_ROD",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "longRod"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "rodLong"
    ],
    "required_forms": [
      "rodLong"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:astral_titanium",
    "id": "gtceu:gtna_astral_titanium",
    "name": "Astral Titanium",
    "base_form": "ingot",
    "color": 14459120,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "frameGt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:chronomatic_glass",
    "id": "gtceu:gtna_chronomatic_glass",
    "name": "Chronomatic Glass",
    "base_form": "ingot",
    "color": 16777215,
    "icon_set": "chromatic_glass",
    "flags": [
      "GENERATE_DENSE",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "densePlate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "plateDense"
    ],
    "required_forms": [
      "plate",
      "plateDense"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:quantum",
    "id": "gtceu:gtna_quantum",
    "name": "Quantum",
    "base_form": "ingot",
    "color": 7260360,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_DENSE",
      "GENERATE_PLATE",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "densePlate"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "plate",
      "plateDense"
    ],
    "required_forms": [
      "plate",
      "plateDense"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:orundum",
    "id": "gtceu:gtna_orundum",
    "name": "Orundum",
    "base_form": "gem",
    "color": 13444646,
    "icon_set": "DIAMOND",
    "flags": [
      "GENERATE_LENS",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "gem",
      "lens"
    ],
    "forms": [
      "dust",
      "gem",
      "lens"
    ],
    "required_forms": [
      "lens"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:magneto_resonatic",
    "id": "gtceu:gtna_magneto_resonatic",
    "name": "Magneto Resonatic",
    "base_form": "gem",
    "color": 14514175,
    "icon_set": "MAGNETIC",
    "flags": [
      "FORCE_GENERATE_BLOCK",
      "GENERATE_LENS",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "block",
      "dust",
      "gem",
      "lens"
    ],
    "forms": [
      "block",
      "dust",
      "gem",
      "lens"
    ],
    "required_forms": [
      "block",
      "lens"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:superconductor_uiv",
    "id": "gtceu:gtna_superconductor_uiv",
    "name": "Superconductor Uiv",
    "base_form": "ingot",
    "color": 15030449,
    "icon_set": "SHINY",
    "flags": [
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "ingot",
      "nugget",
      "wireGtHex",
      "wireGtOctal"
    ],
    "forms": [
      "dust",
      "ingot",
      "nugget",
      "wireGtHex",
      "wireGtOctal"
    ],
    "required_forms": [
      "wireGtHex",
      "wireGtOctal"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": true
  },
  {
    "source_id": "gtna:platinum_manganese_antimony_heusler_alloy",
    "id": "gtceu:gtna_platinum_manganese_antimony_heusler_alloy",
    "name": "Platinum Manganese Antimony Heusler Alloy",
    "base_form": "ingot",
    "color": 15132390,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "frameGt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:odyssey_nano_superalloy",
    "id": "gtceu:gtna_odyssey_nano_superalloy",
    "name": "Odyssey Nano Superalloy",
    "base_form": "ingot",
    "color": 5012074,
    "icon_set": "METALLIC",
    "flags": [
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "frameGt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  },
  {
    "source_id": "gtna:stellar_alloy",
    "id": "gtceu:gtna_stellar_alloy",
    "name": "Stellar Alloy",
    "base_form": "ingot",
    "color": 12963544,
    "icon_set": "SHINY",
    "flags": [
      "GENERATE_FRAME",
      "DISABLE_MATERIAL_RECIPES"
    ],
    "prefix_names": [
      "dust",
      "frame",
      "ingot",
      "nugget"
    ],
    "forms": [
      "dust",
      "frameGt",
      "ingot",
      "nugget"
    ],
    "required_forms": [
      "frameGt"
    ],
    "native_pipe_defaults": false,
    "native_wire_defaults": false
  }
];
  var customIcons = [
  {
    "name": "chromatic_glass",
    "native_parent": "SHINY"
  },
  {
    "name": "hypogen",
    "native_parent": "SHINY"
  },
  {
    "name": "infinity",
    "native_parent": "SHINY"
  },
  {
    "name": "spacetime",
    "native_parent": "SHINY"
  }
];
  var baseFormAdditions = [
  {
    "id": "gtceu:beryllium",
    "forms": [
      "frameGt",
      "rod"
    ],
    "flags": [
      "GENERATE_FRAME",
      "GENERATE_ROD"
    ]
  },
  {
    "id": "gtceu:trinium",
    "forms": [
      "frameGt"
    ],
    "flags": [
      "GENERATE_FRAME"
    ]
  },
  {
    "id": "gtceu:naquadria",
    "forms": [
      "frameGt"
    ],
    "flags": [
      "GENERATE_FRAME"
    ]
  },
  {
    "id": "gtceu:naquadah",
    "forms": [
      "frameGt"
    ],
    "flags": [
      "GENERATE_FRAME"
    ]
  }
];
  global.gregMaterials.onRegistry(function (createMaterial) {
    var TagPrefix = Java.loadClass('com.gregtechceu.gtceu.api.tag.TagPrefix');
    var GTRegistries = Java.loadClass('com.gregtechceu.gtceu.api.registry.GTRegistries');
    var GTMaterials = Java.loadClass('com.gregtechceu.gtceu.data.material.GTMaterials');
    var MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.material.material.info.MaterialFlags');
    var MaterialIconSet = Java.loadClass('com.gregtechceu.gtceu.api.material.material.info.MaterialIconSet');
    var PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.PropertyKey');
    var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var icons = {};
    customIcons.forEach(function (icon) {
      icons[icon.name] = MaterialIconSet.getByName(icon.name) || new MaterialIconSet(icon.name, MaterialIconSet[icon.native_parent]);
    });
    baseFormAdditions.forEach(function (change) {
      var material = GTRegistries.MATERIALS.get(ResourceLocation.parse(change.id));
      material.addFlags(change.flags.map(function (name) { return MaterialFlags[name]; }));
    });
    materials.forEach(function (material) {
      var builder = createMaterial(material.id);
      builder[material.base_form]();
      builder.color(material.color).iconSet(icons[material.icon_set] || MaterialIconSet[material.icon_set]);
      if (material.secondary_color !== undefined) builder.secondaryColor(material.secondary_color);
      builder.flags(material.flags.map(function (name) { return MaterialFlags[name]; }));
      var ignored = [];
      GTRegistries.TAG_PREFIXES.forEach(function (prefix) {
        if (material.prefix_names.indexOf(String(prefix.name)) === -1) ignored.push(prefix);
      });
      builder.ignoredTagPrefixes(ignored);
      // Native GT requires ratings to generate its pipe/wire block types. Existing
      // Copper/Steel defaults supply them; no GTNA source ratings are copied.
      if (material.native_wire_defaults) {
        var wire = GTMaterials.Copper.getProperty(PropertyKey.WIRE);
        builder.cableProperties(wire.getVoltage(), wire.getAmperage(), wire.getLossPerBlock(), wire.isSuperconductor(), wire.getSuperconductorCriticalTemperature());
      }
      if (material.native_pipe_defaults) {
        var pipe = GTMaterials.Steel.getProperty(PropertyKey.FLUID_PIPE);
        builder.fluidPipeProperties(pipe.getMaxFluidTemperature(), pipe.getThroughput(), pipe.isGasProof(), pipe.isAcidProof(), pipe.isCryoProof(), pipe.isPlasmaProof());
      }
    });
  });
})();
