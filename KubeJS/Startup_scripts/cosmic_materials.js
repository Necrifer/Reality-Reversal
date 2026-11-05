// Native GTCEu cosmic materials. Full restart required after editing.
// Colours, names and standard forms only; processing recipes are intentionally
// disabled for later pack authoring. Source fluids/items retain their IDs.
// Native animated source sprites are referenced by the custom icon-set models.
// God Destroyer uses an original periodic colour/shiver texture; no per-tick script.
;(function () {
  var materials = [
  {
    "name": "eternal",
    "display_name": "Eternal",
    "color": 16777215,
    "secondary_color": 12569576,
    "icon_set": "rr_cosmic_eternal",
    "source": "GregTech Nexus",
    "fluid": "gtna:eternity",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "primordial_matter",
    "display_name": "Primordial Matter",
    "color": 14075629,
    "secondary_color": 7110850,
    "icon_set": "rr_cosmic_primordial_matter",
    "source": "UFO",
    "fluid": "ufo:source_primordial_matter_fluid",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "raw_star_matter_plasma",
    "display_name": "Raw Star Matter Plasma",
    "color": 16765774,
    "secondary_color": 16013843,
    "icon_set": "rr_cosmic_raw_star_matter_plasma",
    "source": "UFO",
    "fluid": "ufo:raw_star_matter_plasma",
    "storage": "PLASMA",
    "base_icon_set": "BRIGHT"
  },
  {
    "name": "transcending_matter",
    "display_name": "Transcending Matter",
    "color": 16024209,
    "secondary_color": 15880296,
    "icon_set": "rr_cosmic_transcending_matter",
    "source": "UFO",
    "fluid": "ufo:transcending_matter",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "temporal_fluid",
    "display_name": "Temporal Fluid",
    "color": 11540807,
    "secondary_color": 6230603,
    "icon_set": "rr_cosmic_temporal_fluid",
    "source": "UFO",
    "fluid": "ufo:source_temporal_fluid",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "spatial_fluid",
    "display_name": "Spatial Fluid",
    "color": 9128637,
    "secondary_color": 2429749,
    "icon_set": "rr_cosmic_spatial_fluid",
    "source": "UFO",
    "fluid": "ufo:source_spatial_fluid",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "singularity_sequence_matter",
    "display_name": "Singularity Sequence Matter",
    "color": 7682749,
    "secondary_color": 2364992,
    "icon_set": "rr_cosmic_singularity_sequence_matter",
    "source": "Omnisequence: Transfinite",
    "fluid": "molecularmanipulator:singularity_sequence_matter",
    "storage": "LIQUID",
    "base_icon_set": "SHINY"
  },
  {
    "name": "miniature_white_hole",
    "display_name": "Miniature White Hole",
    "color": 14479103,
    "secondary_color": 8826851,
    "icon_set": "rr_cosmic_miniature_white_hole",
    "source": "Omnisequence: Transfinite",
    "source_item": "molecularmanipulator:white_hole",
    "base_icon_set": "BRIGHT"
  },
  {
    "name": "miniature_black_hole",
    "display_name": "Miniature Black Hole",
    "color": 15039011,
    "secondary_color": 2429207,
    "icon_set": "rr_cosmic_miniature_black_hole",
    "source": "Omnisequence: Transfinite",
    "source_item": "molecularmanipulator:black_hole",
    "base_icon_set": "SHINY"
  },
  {
    "name": "god_destroyer",
    "display_name": "God Destroyer",
    "color": 10317027,
    "secondary_color": 6474220,
    "icon_set": "rr_cosmic_god_destroyer",
    "source": "Original material; palette inspired by Devourer of Gods",
    "base_icon_set": "SHINY"
  }
];
  global.gregMaterials.onRegistry(function (createMaterial) {
    var Flags = Java.loadClass('com.gregtechceu.gtceu.api.material.material.info.MaterialFlags');
    var Icons = Java.loadClass('com.gregtechceu.gtceu.api.material.material.info.MaterialIconSet');
    materials.forEach(function (entry) {
      var icons = Icons.getByName(entry.icon_set) || new Icons(entry.icon_set, Icons[entry.base_icon_set]);
      var material = createMaterial('gtceu:' + entry.name)
        .ingot()
        .color(entry.color)
        .secondaryColor(entry.secondary_color)
        .iconSet(icons)
        .flags(Flags.GENERATE_PLATE, Flags.GENERATE_ROD, Flags.GENERATE_GEAR,
          Flags.GENERATE_FRAME, Flags.FORCE_GENERATE_BLOCK, Flags.DISABLE_MATERIAL_RECIPES);
      if (entry.fluid) material.existingFluid(entry.storage, entry.fluid);
    });
  });
})();
