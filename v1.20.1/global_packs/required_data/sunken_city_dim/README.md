# Sunken City dimension — Reality Reversal / Minecraft 1.20.1

The active editable datapack is `global_packs/required_data/sunken_city_dim/`.
Fully restart Minecraft/server after worldgen edits. Test natural generation in
a fresh test world with Generate Structures enabled; existing chunks retain
their previously generated structure starts.

## Current registry IDs

| Purpose | Registry ID | File under `data/sunken_city/` |
|---|---|---|
| Dimension | `sunken_city:template` | `dimension/template.json` |
| Fixed biome | `sunken_city:template_plains` | `worldgen/biome/template_plains.json` |
| Research Ruins structure | `sunken_city:research_ruins` | `worldgen/structure/research_ruins.json` |
| Placement set | `sunken_city:research_ruins` | `worldgen/structure_set/research_ruins.json` |
| Eligible biomes tag | `#sunken_city:has_template_ruin` | `tags/worldgen/biome/has_template_ruin.json` |
| Starting pool | `sunken_city:template_ruin/start` | `worldgen/template_pool/template_ruin/start.json` |
| Building template | `sunken_city:research_ruins` | `structures/research_ruins.nbt` |

The tag and pool intentionally retain their existing `template` filenames.
Their IDs must match these paths; renaming just the reference breaks the link.
The old `rr_dimensions:*` IDs from the original template do not apply here.

## Current structure settings

Research Ruins is a single 24 x 7 x 24 saved building with 4,032 block entries,
including air, and modded blocks/block entities. Jigsaw `size: 1` allows the starting piece to be added. This template has no
jigsaw connectors, so it remains a single piece. In the installed Minecraft
1.20.1 code, `size: 0` returns before adding any pieces and prevents natural
placement. This corrects the original template and the earlier repair notes.
The structure set uses 24-chunk regions, 8-chunk separation and salt 948271603.
These are placement rules, not a guarantee of an exact distance between ruins.

The start projects onto `OCEAN_FLOOR_WG`, which ignores water and anchors the
rigid building at the terrain beneath it. Sea level remains 100; start-height
offset remains zero. This affects newly generated structures only. The full
24 x 24 footprint is not individually flattened or checked for submersion; a
rigid building can overhang slopes, and this heightmap also returns dry terrain
height if an island is encountered. Terrain and spacing are unchanged. The building template now includes the
sealed Sickened spawner chambers described below.

## Sickened spawner chambers (2026-09-16)

The building NBT contains four sealed glass chambers, each with a 3 x 3 x 3
dry interior and one vanilla spawner embedded in its front wall. Only existing
air/water cells were changed; all original solid blocks, machinery, inventories
and other block-entity data are preserved. The complete structure remains
24 x 7 x 24. Chamber floors are at local Y=1, roofs at Y=5.

| Mob | Spawner local X, Y, Z | Chamber outer X / Z bounds |
|---|---|---|
| Sickened Creeper | 9, 2, 8 | 7-11 / 4-8 |
| Sickened Zombie | 14, 2, 8 | 12-16 / 4-8 |
| Sickened Skeleton | 9, 2, 15 | 7-11 / 15-19 |
| Sickened Spider | 14, 2, 15 | 12-16 / 15-19 |

Spawner data uses the Minecraft 1.20.1 `SpawnData.entity.id` format. Empty
`custom_spawn_rules` explicitly selects default light ranges 0-15, allowing
the existing Firelight and other illuminated blocks. It also bypasses the
natural placement predicate. Block/entity collision and dry-space requirements
remain, which is why the chambers are sealed. A spawner block is part of the
sealed wall; removing it or the glass can flood the chamber.

Other settings are vanilla defaults: player activation within 16 blocks,
4 attempts per cycle, 200-799 tick random delay, 6 nearby mobs of its class,
and spawn range 4. Initial delay is 20 ticks. Hostiles require difficulty above
Peaceful; test with a nearby Survival player. Normal mob AI, equipment
initialization and despawning remain enabled. No new KubeJS listener is used.
The older natural-spawn script and biome entries were left unchanged, but these
spawners do not depend on that script's underwater exception.

Restart, then inspect a newly generated ruin or place the updated template in
a disposable clear area. Existing ruins do not acquire spawners retroactively.
NBT integrity, exact block changes, chamber sealing and preservation of original
block entities were checked; spawning in the complete running pack is pending.

## Verification commands

First run this after a full restart, preferably in a fresh disposable world:

```mcfunction
/execute in sunken_city:template positioned 0 100 0 run locate structure sunken_city:research_ruins
```

This explicitly searches the custom dimension from its origin. A plain `/locate`
searches the command's current dimension. Follow the returned coordinates to
inspect the natural structure in spectator mode.

These optional commands PLACE blocks, so use them only in a disposable area:

```mcfunction
/execute in sunken_city:template run place structure sunken_city:research_ruins 64 100 64
/execute in sunken_city:template run place template sunken_city:research_ruins 128 100 128
```

`place structure` checks the structure assembly. `place template` loads the raw
NBT directly and bypasses structure placement/biome rules. Neither by itself
proves natural generation. Check the log for `sunken_city:has_research_ruins`
warnings from before this fix and for any new `sunken_city` loading errors.

## Editing the dimension and building

The dimension uses the fixed biome in `worldgen/biome/template_plains.json`.
Terrain settings are in `worldgen/noise_settings/template.json`,
`worldgen/density_function/template_terrain.json` and
`worldgen/noise/template_hills.json`. Dimension bounds and environment are in
`dimension_type/template.json`. The local biome includes Spectrum features and
`sunken_city:template_ore`; the configured feature produces `kubejs:taint_ore`.

Save building edits with a structure block as `sunken_city:research_ruins`, then
copy the world's `generated/sunken_city/structures/research_ruins.nbt` into this
datapack's `data/sunken_city/structures/` directory. The saved-world template can
override the datapack copy, so use a fresh world when checking the distributed
version. Keep these dimension and template IDs stable for existing saves.

The 2026-09-16 log confirms that /locate successfully found Research Ruins after
the size-one repair. Seabed placement added afterward still needs a full restart
and inspection in newly generated chunks.

## Underwater Sickened mobs

`kubejs/startup_scripts/sunken_city_sickened_spawns.js` applies a one-time
placement update after mod loading, then uses scoped Forge spawn events to
allow the four listed Sickened species to spawn fully submerged here. The early
EntityJS placement replacement was removed: EntityJS's mod bus ran before
Wither Storm, causing its later initial registration to crash. Listener priority
does not order handlers across different mod buses.

The late update is pinned to the Minecraft 1.20.1 placement map field
`f_21750_`. It checks all four existing entries first, retains their heightmaps,
and rolls back on an update failure. No mod JAR or KubeJS class filter is changed.
Reassess this small internal-map bridge when upgrading Minecraft/Forge.
Startup success is logged as `[Sunken City] Installed 4 underwater Sickened
spawn placements after mod loading.` An error disables the underwater exception
and retains the originals. Their monster category, population caps, darkness
requirements and normal ground rules elsewhere remain in use.
Natural underwater spawns receive hidden infinite Water Breathing so they can
survive; the effect is saved on those individuals. Their original land AI is
retained. This does not turn them into swimming mobs or affect spawn eggs.
The water check uses vanilla still/flowing water identity, avoiding Rhino's
ambiguous FluidState.is overloads. A runtime callback error now restores all
four original spawn entries, disables the underwater exception for that launch,
and logs once. Restart after correcting any reported error. The 17:01 launch log
confirmed successful late registration; the subsequent ticking crash came from
the old overloaded water check, corrected afterward.
A full game/server restart is required; /reload cannot apply these listeners.
Guardians share the monster cap, so an existing population can temporarily
leave no room for new Sickened mobs. Test natural spawning outside Peaceful,
in dark water 24-128 blocks from a nonspectator player.
