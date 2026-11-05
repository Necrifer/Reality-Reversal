// Mobs that no machine or tool may duplicate. Add entity IDs to DUPLICATION_BLACKLIST; every
// mod tag below then picks them up through #modpack:duplication_blacklist.
// Not covered by tags (handled elsewhere):
//   Woot                  -> startup_scripts/woot.js (blacklistMob)
//   Tiny Mob Farm lasso   -> startup_scripts/rr_tinymobfarm_lasso_blacklist.js (reads this tag)
//   Draconic Evolution    -> config/brandon3055/DraconicEvolution.cfg, "spawnerList"
// See migration/mob-duplication-blacklist-20261103/.
const DUPLICATION_BLACKLIST = [
  'theoreticalsciences:black_swan'
];

// Each mod's own entity-type blacklist tag, checked when that mod copies or spawns a mob.
const DUPLICATION_TAGS = [
  'enderio:spawner_blacklist',                        // Powered Spawner (soul vials and spawn eggs)
  'industrialforegoing:mob_duplicator_blacklist',     // Mob Duplicator, checked at spawn time
  'oritech:spawner_blacklist',                        // Spawner Controller
  'spectrum:spawner_manipulation_blacklisted',        // Spirit Instiller spawner creature change
  'mob_grinding_utils:no_swab',                       // Mob Swab -> spawner and GM Chicken spawn eggs
  'ars_nouveau:drygmy_blacklist'                      // Drygmy Henge drops without killing
];

ServerEvents.tags('entity_type', event => {
  DUPLICATION_BLACKLIST.forEach(mob => event.add('modpack:duplication_blacklist', mob));
  DUPLICATION_TAGS.forEach(tag => event.add(tag, '#modpack:duplication_blacklist'));
});
