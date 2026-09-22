// Script for Forestry bees tooltips.
// No I do not understand what the lower half of this entire script is doing.

ItemEvents.tooltip(event => {
  const indi = Java.loadClass('forestry.api.genetics.capability.IIndividualHandlerItem')
  const Chromosomes = Java.loadClass('forestry.api.genetics.alleles.BeeChromosomes')
  const effects = {
    none: ['None', 'No special bee effect.'],
    aggressive: ['Aggressive', 'Damages nearby living entities, including players'],
    heroic: ['Heroic', 'Damages nearby monsters.'],
    beatific: ['Beatific', 'Grants Regeneration to nearby living entities.'],
    miasmic: ['Poison', 'Has a chance to poison nearby entities.'],
    misanthrope: ['Ends', 'Damages nearby players.'],
    glacial: ['Freezing', 'Freezes nearby exposed water into ice.'],
    radioactive: ['Radioactive', 'Damages nearby living entities and destroys nearby breakable blocks.'],
    creeper: ['Creeper', 'Create explosions nearby.'],
    ignition: ['Flammable', 'Set nearby living entities on fire.'],
    exploration: ['Explorer', 'Periodically grants experience points to nearby players.'],
    easter: ['Easter', 'Easter Egg, does nothing.'],
    snowing: ['Snow', 'Places snow layers nearby.'],
    drunkard: ['Drunkard', 'Applies Nausea to nearby entities.'],
    reanimation: ['Reanimation', 'Revives undead mobs through drops nearby.'],
    resurrection: ['Resurrection', 'Revives all mobs through drops nearby.'],
    repulsion: ['Repulsion', 'Nearby monsters flee from players.'],
    fertile: ['Fertile', 'Allows faster crop grow.'],
    mycophilic: ['Mycophilic', 'Turns nearby area suitable for mushrooms.'],
    sifter: ['Sifter', 'Converts nearby dirt into coarse dirt.'],
    hakuna_matata: ['Hakuna Matata', 'Grants protection that cancels incoming attacks. Has a cooldown.'],
    glow_berry_grow: ['Luminiferous', 'Makes nearby vines bear glow berries.'],
    rejuvenation: ['Rejuvenation', 'Restores remaining lifespan to working queens in other nearby hives.'],
    chronophage: ['Chronophage', 'Reduces remaining lifespan of working queens in other nearby hives.'],
    guardian: ['Guardian', 'Acts as if Elder Guardian is nearby.'],
    phasing: ['Phasing', 'Randomly teleports nearby entities.'],
    ascension: ['Ascension', 'Applies Levitation to nearby entities. '],
    sculk: ['Sculk Spread', 'Spreads sculk nearby. May grow Shriekers!'],
    darkness: ['Darkness', 'Applies Darkness to nearby entities.']
  }
  let warned = false
  // Every added line carries this visible prefix, so client reloads cannot
  // duplicate the section or accidentally remove another mod's information.
  function addLine(tooltip, message, heading) {
    const line = Text.of(message)
    tooltip.add(heading ? line.gold() : line.gray())
  }
  function describe(tooltip, allele, label) {
    const id = String(allele.alleleId())
    const key = id.indexOf('forestry:bee_effect_') === 0 ? id.substring(20) : ''
    const entry = effects[key]
    addLine(tooltip, label + ': ' + (entry ? entry[0] : id), true)
    const description = entry ? entry[1] : 'No pack explanation is registered for this effect.'
    // Short lines remain readable at ordinary GUI scales.
    const words = description.split(' ')
    let line = ''
    for (let i = 0; i < words.length; i++) {
      if (line.length && line.length + words[i].length + 1 > 62) {
        addLine(tooltip, line, false)
        line = ''
      }
      line += (line.length ? ' ' : '') + words[i]
    }
    if (line.length) addLine(tooltip, line, false)
  }
  const items = ['forestry:bee_drone_ge', 'forestry:bee_princess_ge',
    'forestry:bee_queen_ge', 'forestry:bee_larvae_ge']
  items.forEach(id => event.addAdvanced(id, (item, advanced, tooltip) => {
    for (let i = tooltip.size() - 1; i >= 0; i--) {
      if (String(tooltip.get(i).getString()).indexOf(prefix) === 0) tooltip.remove(i)
    }
    try {
      // Use the unambiguous public API, not legacy NBT fields or overloaded
      // ifPresent/getActiveValue calls (important for KubeJS/Rhino).
      var individual = indi.getIndividual(item)
      if (!individual) return
      var genome = individual.getGenome()
      var active = genome.getActiveAllele(Chromosomes.EFFECT)
      var inactive = genome.getInactiveAllele(Chromosomes.EFFECT)
      describe(tooltip, active, 'Active gene')
      if (String(active.alleleId()) !== String(inactive.alleleId())) {
        var combined = active.value().isCombinable() && inactive.value().isCombinable()
        describe(tooltip, inactive, combined ? 'Secondary gene (also runs)' : 'Inactive gene (not running)')
      }
    } catch (error) {
      addLine(tooltip, 'Could not read this genome; see KubeJS client log.', false)
      if (!warned) {
        warned = true
        console.warn('Forestry effect tooltip could not read a genome: ' + error)
      }
    }
  }))
})
