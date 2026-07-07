// Registers grouped singularity items used to keep the Ultimate Singularity recipe under 81 inputs.
StartupEvents.registry('item', event => {
  event.create('compressed_singularity_alpha')
    .displayName('Compressed Singularity Alpha')
    .tooltip('A folded lattice of early-material singularities.');
  event.create('compressed_singularity_beta')
    .displayName('Compressed Singularity Beta')
    .tooltip('A folded lattice of middle-material singularities.');
  event.create('compressed_singularity_gamma')
    .displayName('Compressed Singularity Gamma')
    .tooltip('A folded lattice of late-material singularities.');
});
