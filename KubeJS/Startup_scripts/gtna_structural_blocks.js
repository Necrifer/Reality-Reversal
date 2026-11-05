// GTNA structural identities registered by KubeJS itself.
// Names and visual assets only; native KubeJS defaults supply every block property.
// Required machine-shaped ingredients are ordinary blocks without machine behavior.
// Native generated block models inherit the preserved artwork through private aliases.
(function () {
  var blocks = {
  "gtna:boundless_gravitationally_severed_structure_casing": "Boundless Gravitationally Severed Structure Casing",
  "gtna:breel_plated_casing": "Breel-Plated Casing",
  "gtna:celestial_matter_guidance_casing": "Celestial Matter Guidance Casing",
  "gtna:central_graviton_flow_modulator": "Central Graviton Flow Modulator",
  "gtna:cosmic_fabric_manipulator": "Cosmic Fabric Manipulator",
  "gtna:dimension_injection_casing": "Dimension Injection Casing",
  "gtna:dimensionally_transcendent_casing": "Dimensionally Transcendent Casing",
  "gtna:eternal_coil": "Eternal Coil Block",
  "gtna:field_restriction_coil_t3": "Field Restriction Coil T3",
  "gtna:force_field_glass": "Force Field Glass",
  "gtna:harmonic_phonon_transmission_conduit": "Harmonic Phonon Transmission Conduit",
  "gtna:hypogen_coil": "Hypogen Coil Block",
  "gtna:infinite_spacetime_energy_boundary_casing": "Infinite Spacetime Energy Boundary Casing",
  "gtna:medial_graviton_flow_modulator": "Medial Graviton Flow Modulator",
  "gtna:plasma_forge_bridge_casing": "Dimensional Bridge Casing",
  "gtna:radiant_naquadah_alloy_casing": "Radiant Naquadah Alloy Casing",
  "gtna:reinforced_spatial_structure_casing": "Reinforced Spatial Structure Casing",
  "gtna:reinforced_temporal_structure_casing": "Reinforced Temporal Structure Casing",
  "gtna:remote_graviton_flow_modulator": "Remote Graviton Flow Modulator",
  "gtna:singularity_reinforced_stellar_shielding_casing": "Singularity Reinforced Stellar Shielding Casing",
  "gtna:spacetime_compression_field_generator_tier_0": "Crude Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_1": "Primitive Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_2": "Stable Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_3": "Advanced Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_4": "Superb Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_5": "Exotic Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_6": "Perfect Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_7": "Tipler Spacetime Compression Field Generator",
  "gtna:spacetime_compression_field_generator_tier_8": "Gallifreyan Spacetime Compression Field Generator",
  "gtna:spatially_transcendent_gravitational_lens": "Spatially Transcendent Gravitational Lens",
  "gtna:stabilisation_field_generator_tier_0": "Crude Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_1": "Primitive Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_2": "Stable Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_3": "Advanced Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_4": "Superb Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_5": "Exotic Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_6": "Perfect Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_7": "Tipler Stabilisation Field Generator",
  "gtna:stabilisation_field_generator_tier_8": "Gallifreyan Stabilisation Field Generator",
  "gtna:stainless_evaporation_casing": "Stainless Evaporation Casing",
  "gtna:stellar_energy_siphon_casing": "Stellar Energy Siphon Casing",
  "gtna:stronze_wrapped_casing": "Stronze-Wrapped Casing",
  "gtna:time_acceleration_field_generator_tier_0": "Crude Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_1": "Primitive Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_2": "Stable Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_3": "Advanced Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_4": "Superb Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_5": "Exotic Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_6": "Perfect Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_7": "Tipler Time Acceleration Field Generator",
  "gtna:time_acceleration_field_generator_tier_8": "Gallifreyan Time Acceleration Field Generator",
  "gtna:transcendentally_amplified_magnetic_confinement_casing": "Transcendentally Amplified Magnetic Confinement Casing",
  "gtna:vibration_safe_casing": "Vibration Safe Casing"
};
  StartupEvents.registry('block', function (event) {
    Object.keys(blocks).forEach(function (id) {
      event.create(id).displayName(blocks[id])
        .parentModel('gtna:block/rr_structures/' + id.split(':')[1]);
    });
  });
})();
