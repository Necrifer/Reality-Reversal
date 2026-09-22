// GTCEu 7.5.3 default categories use ResourceLocation.toLanguageKey().
ClientEvents.lang('en_us', function (event) {
    event.add('gtceu.anomalous_condenser_recipes', 'Anomalous Condenser');
    event.add('gtceu.dim_tear_recipes', 'Dimensional Rift Constructor');
    event.add('gtceu.taint_replicant_recipes', 'Taint Replicant');
    event.add('gtceu.foundational_breaker_recipes', 'Foundational Breaker');
    event.add('gtceu.corruption_containment_recipes', 'Corruption Containment Unit');
    event.add('gtceu.soul_capturer_recipes', 'Soul Capturer');
    event.add('gtceu.corruption_prototype_recipes', 'Corruption Structure Prototype');
    event.add('gtceu.mm_test_machine_recipes', 'Test Machine');
});

ItemEvents.tooltip(function (event) {
    event.add('gtceu:anomalous_condenser', [
        'Preview: sneak-right-click the unformed controller with an empty hand.',
        'Autobuild: sneak-right-click the unformed controller with a GT Terminal.',
        'Survival autobuild uses blocks from your inventory; creative supplies them.'
    ]);
    event.add('gtceu:foundational_breaker', [
        'Preview: sneak-right-click the unformed controller with an empty hand.',
        'Autobuild: sneak-right-click the unformed controller with a GT Terminal.',
        'Survival autobuild uses blocks from your inventory; creative supplies them.'
    ]);
    event.add('gtceu:corruption_containment', [
        'Preview: sneak-right-click the unformed controller with an empty hand.',
        'Autobuild: sneak-right-click the unformed controller with a GT Terminal.',
        'Survival autobuild uses blocks from your inventory; creative supplies them.'
    ]);
    event.add('gtceu:soul_capturer', [
        'Preview: sneak-right-click the unformed controller with an empty hand.',
        'Autobuild: sneak-right-click the unformed controller with a GT Terminal.',
        'Survival autobuild uses blocks from your inventory; creative supplies them.'
    ]);
    event.add('gtceu:corruption_prototype', [
        'Preview: sneak-right-click the unformed controller with an empty hand.',
        'Autobuild: sneak-right-click the unformed controller with a GT Terminal.',
        'Survival autobuild uses blocks from your inventory; creative supplies them.'
    ]);
});
