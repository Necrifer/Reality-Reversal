// Boss anti-cheese guard for every entity in #c:bosses (see kubejs/data/c/tags/entity_type/bosses.json).
// Blocks bypass-invulnerability sources, caps each hit, refuses cheese effects and vetoes forced deaths.
// Cannot stop direct setHealth() or discard(); see migration/boss-cheese-audit-20261021/REPORT.md.
// Admin kill: /tag <boss> add rr_allow_kill, then /kill. Full restart required after edits.
(function () {
  var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority');
  var InvulnerabilityCheck = Java.loadClass('net.neoforged.neoforge.event.entity.EntityInvulnerabilityCheckEvent');
  var IncomingDamage = Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent');
  var DamagePost = Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post');
  var EffectApplicable = Java.loadClass('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable');
  var EffectResult = Java.loadClass('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable$Result');
  var LivingDeath = Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingDeathEvent');
  var LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');
  var TagKey = Java.loadClass('net.minecraft.tags.TagKey');
  var Registries = Java.loadClass('net.minecraft.core.registries.Registries');
  var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

  var BOSSES = TagKey.create(Registries.ENTITY_TYPE, ResourceLocation.parse('c:bosses'));
  var MAX_HIT_FRACTION = 0.10;            // one hit removes at most 10% of max HP
  var ALLOW_KILL_TAG = 'rr_allow_kill';   // scoreboard tag for admin kills
  var LEGIT_KEY = 'rr_boss_legit_kill';
  var HP_KEY = 'rr_boss_last_hp';
  // Sources that ignore invulnerability, kill outright or set health.
  var FORBIDDEN_SOURCES = [
    'minecraft:generic_kill', 'minecraft:out_of_world', 'minecraft:outside_border',
    'excessive_utilities:doom', 'avaritia:infinity', 'spectrum:set_health',
    'malum:void', 'gaiadimension:energy_magic', 'twilightforest:expired', 'draconicevolution:crystal_move'
  ];
  var VOID_SOURCES = ['minecraft:out_of_world', 'minecraft:outside_border'];
  // Effects that kill or drain by percentage.
  var BLOCKED_EFFECTS = ['excessive_utilities:doom', 'spectrum:life_drain', 'avaritia_delight:endest'];

  var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  var typeCache = {};
  // KubeJS exposes Entity#level as a property; calling it as a method throws 'Cannot call property level'.
  function levelOf(entity) {
    var level = entity.level;
    return typeof level === 'function' ? entity.level() : level;
  }
  // Server side only. KubeJS replaces Entity.getType() with the ID string, so resolve the EntityType from the registry.
  function isBoss(entity) {
    if (!(entity instanceof LivingEntity) || levelOf(entity).isClientSide()) return false;
    var id = String(entity.getType());
    if (typeCache[id] === undefined) typeCache[id] = BuiltInRegistries.ENTITY_TYPE.get(ResourceLocation.parse(id));
    // EntityType.is(HolderSet)/is(TagKey) is ambiguous to Rhino; read the holder's current tags instead.
    return typeCache[id].builtInRegistryHolder().tags().toList().contains(BOSSES);
  }
  // A thrown error inside a NeoForge event can disconnect the client; log instead.
  function guarded(name, handler) {
    return function (event) {
      try { handler(event); } catch (error) { console.error('[RR Boss Guard] ' + name + ' handler failed: ' + error); }
    };
  }
  function allowKill(boss) {
    return boss.getTags().contains(ALLOW_KILL_TAG);
  }
  function keyId(holder) {
    var key = holder.unwrapKey();
    return key.isPresent() ? String(key.get().location()) : '';
  }

  // Beats minecraft:bypasses_invulnerability. Void damage still applies below the world floor.
  NativeEvents.onEvent(EventPriority.HIGHEST, InvulnerabilityCheck, guarded('invulnerability', function (event) {
    var boss = event.getEntity();
    if (!isBoss(boss) || allowKill(boss)) return;
    var id = keyId(event.getSource().typeHolder());
    if (FORBIDDEN_SOURCES.indexOf(id) < 0) return;
    if (VOID_SOURCES.indexOf(id) >= 0 && boss.getY() < levelOf(boss).getMinBuildHeight()) return;
    event.setInvulnerable(true);
  }));

  // Cap every hit; neutralises Float.MAX_VALUE damage.
  NativeEvents.onEvent(EventPriority.LOWEST, IncomingDamage, guarded('damage cap', function (event) {
    var boss = event.getEntity();
    if (!isBoss(boss) || allowKill(boss)) return;
    var cap = boss.getMaxHealth() * MAX_HIT_FRACTION;
    if (event.getAmount() > cap) event.setAmount(cap);
  }));

  // Runs after health is applied and before die(): remember HP and mark real kills.
  NativeEvents.onEvent(EventPriority.LOWEST, DamagePost, guarded('damage record', function (event) {
    var boss = event.getEntity();
    if (!isBoss(boss)) return;
    var data = boss.getPersistentData();
    if (boss.getHealth() <= 0) data.putBoolean(LEGIT_KEY, true);
    else data.putFloat(HP_KEY, boss.getHealth());
  }));

  NativeEvents.onEvent(EventPriority.HIGHEST, EffectApplicable, guarded('effect filter', function (event) {
    if (!isBoss(event.getEntity())) return;
    if (BLOCKED_EFFECTS.indexOf(keyId(event.getEffectInstance().getEffect())) >= 0) event.setResult(EffectResult.DO_NOT_APPLY);
  }));

  // Veto die() calls that did not come through the capped damage path.
  NativeEvents.onEvent(EventPriority.HIGHEST, LivingDeath, guarded('death veto', function (event) {
    var boss = event.getEntity();
    if (!isBoss(boss) || allowKill(boss)) return;
    var data = boss.getPersistentData();
    if (data.getBoolean(LEGIT_KEY)) return;
    event.setCanceled(true);
    var restore = data.contains(HP_KEY) ? data.getFloat(HP_KEY) : boss.getMaxHealth() * 0.05;
    boss.setHealth(Math.max(1, restore));
    console.warn('[RR Boss Guard] Blocked forced death of ' + String(boss.getType()) + ' from ' + keyId(event.getSource().typeHolder()));
  }));

  console.info('[RR Boss Guard] Active for #c:bosses (hit cap ' + (MAX_HIT_FRACTION * 100) + '% max HP).');
})();
