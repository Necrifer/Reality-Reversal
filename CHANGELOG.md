# Reality Reversal 2.0: 1.21.1 NeoForge update

Report generated 2026-11-16 by comparing the 1.20.1 instance (`Reality Reversal`) with the dev instance (`Reality Reversal(dev)`).

## Mod changes

The pack moves from **Minecraft 1.20.1 Forge (47.4.22)** to **Minecraft 1.21.1 NeoForge (21.1.265)**.
Mod count: 383 → 317. 244 mods carried over (updated to their 1.21.1 versions), 73 added, 139 removed.
(Compared by CurseForge project ID from both `minecraftinstance.json` files; no hand-added jars in either pack.)

### Replaced by a 1.21.1 port or successor
- Botania → **Botania Revived** (Botania Ponder dropped)
- Extended Crafting → **Extended Crafting: Expanded Reforked** (adds 11x11 and 13x13 tables)
- GregTech CEu Modern → **GregTech Modern Reborn** (GTMThings and GregTech Molecule Drawings dropped)
- Ice and Fire: Dragons → **IceAndFire Community Edition** (Citadel no longer needed)
- Voidminer Reforked → **Void Miners Remastered**
- Actually Subtractions → **Actually Additions** (verify)
- Polymorph → **Polymorph+**; Polymorphic Energistics → **Polymorphic AE2**
- EMC Interface → **AppliedE** (EMC in AE2) (verify)
- TerraBlender (Forge) → **TerraBlender (NeoForge)**
- Embeddium + Sodium/Embeddium Options API → **Sodium** + **Reese's Sodium Options**
- EMI → JEI only, with **JEI++**, **JEI / REI / EMI WorldGen** (JEI Drops, JEI Biome, JEI Structures, Just Enough Breeding and the Productive Bees EMI fix were removed)
- CraftTweaker + Game Stages, Item Stages, Recipe Stages, Re-Dimension Stages, SDM GameStages Helper, SDM Mob Stages, PackMode → progression is now handled with **KubeJS** scripts and advancement-revealed recipes

### New mods
**Tech / AE2**
- Oritech
- Excessive Utilities (remake of Extra Utilities 1 & 2)
- Modular Machinery: Community Refoxed
- Mob Grinding Utils
- Flux Networks Ultimate Addon
- Applied Mekanistics, Applied AstralSorcery, Applied Thaumaturgy, AppliedE
- Neo ECO Prototype, OmniSequence: Transfinite, UFO FUTURE (AE2 endgame expansions)
- TorcherinoAE (Acceleration Torch for AE2 machines)
- Theoretical Sciences: the pack author's own endgame tech mod

**Magic**
- Astral Sorcery (+ True Skies, JEI Fix)
- Ars Nouveau (+ Performance Optimization)
- Thaumaturge (+ JAOPCA: Thaumaturge)
- Auroral (winter / celestial-energy expansion)

**World / adventure**
- Gaia Dimension
- Ad Astra: Asteroid Belt
- Deeper Additional Structures
- FTB Mighty Ender Chicken Rehatched
- Nuclear Radiation (radiation system)
- Physics Mod

**Integration / QoL**
- Botany Pots - Mystical Agriculture Compat
- Re:JAOPCA Singularities
- SpectrumJEI
- FTB Filter System
- Oracle Index (in-game wiki)
- Durability Tooltip, ItemZoom, Inventory Particles, Better Advanced Tooltips
- SuperChunk (chunk generation performance)

**KubeJS addons:** KubeJS Actually Additions, Ars Nouveau, AstralSorcery, Draconic Evolution, JEI, Oritech, ProjectE, KubeThaum, LycheeJS NeoForge

**Libraries:** Aaron, AE2AddonLib, bad packets, Common Storage Lib, Configurable, Fragmentum, MezzConfig, MossyLib, ObserverLib, owo-lib, Prickle, RaishxCore, YAML Config

### Removed mods
**Content mods removed**
- Thermal series: Foundation, Expansion, Dynamics, Innovation, Integration (and CoFH Core)
- Tinkers' Construct, Tinkers' Advanced (Core, Materials, Utilities), Tinkers' Compatibility
- Forestry: CE, Gendustry: CE
- Hex Casting, HexAutomata
- Extrabotany: Reburn
- Mana and Artifice, MagiChem, Arcane Tablet
- Cracker's Wither Storm Mod (+ WitherBean's Wither Storm Tweaks)
- Chisels & Bits
- Compact Machines
- Simply Jetpacks 2
- Solar Flux Reborn
- RFTools Control
- Supplementaries
- Valkyrien Skies
- Ad Astra Extra
- Advanced Mining Dimension
- Call from the Depths (Sculk Dimension)
- The Abyss: The First Light
- Valoria, Luminastra
- Angel Block: Restored, Angel Ring
- Apothic Attributes
- Click Machine, Cursed Earth Returns, Torcherino, Soul's Black Holes
- AE2 addons: Crazy AE2 Addons, InsaneAE, MEGA Cells, OMNI Cells, AppliedE TPS Fix
- FTB Materials

**QoL / client removed:** AmbientSounds 6, Melody, More Sound, Particle Rain, ItemPhysic Lite, Get It Together Drops!, Inventory Essentials, Inventory Tweaks - ReFoxed, Not Enough Recipe Book, Jade VS, Quests Additions, Inline (verify), Not Enough Crashes

**Performance / technical removed:** Async Locator, Better Chunk Loading, Chunk Sending, Chunk-Pregenerator, Fast Async World Save, FastBoot, Server Performance - Smooth Chunk Save, Limited Chunkloading, Data Anchor, Featurify, Leaky (it breaks Astral Sorcery starlight crafting), Sinytra Connector, Connector Extras, Forgified Fabric API, Trinkets (Fabric), GroovyModLoader, Event Wrapper, Crafting Recipe Exporter

**KubeJS addons removed:** Applied KubeJS, Kube Utils, KubeJS aisle tool, KubeJS Alchemistry/Chemlib, KubeJS Botania, KubeJS Curios, Kubejs Extended Crafting, KubeJS GUI Overhauled, KubeJS Industrial Foregoing, KubeJS Mystical Agriculture, KubeJS Thermal, TConstructJS, MoreEventsJS, KubeJS ProjectE Fork, LycheeJS (Forge)

**Libraries removed:** Botarium, Carbon Config, CERBON's API, CreativeCore, EtST Lib, Fzzy Config, HammerLib, Konkrete, Mango's MultiBlock Library, Mantle, Obscure API, PAUCAL, PonderLib, Tridot, TxniLib, Citadel


## Custom content and mechanics

Scope: custom KubeJS content, multiblocks, gameplay scripts, datapacks and quest structure. Recipes and the mod list are covered elsewhere.
Sources: old instance `Reality Reversal`, new instance `Reality Reversal(dev)`, and `Reality Reversal(dev)/migration/*`. "(verify)" means the files alone don't confirm it.

---

### 1. Custom items, blocks, fluids and materials

#### Kept (same IDs and names)
- **Items:** `kubejs:eyes1` Eyes of The Fool, `kubejs:eyes2` Eyes of The Magician, `kubejs:seeneyes2` Shattered Eyes, `kubejs:eyes3` Eyes of The High Priestess, `kubejs:law_ingot` Ingots of Law, `kubejs:containment_failure` Containment Failure, `kubejs:stellarium_ingot` Stellarium Ingot, `kubejs:modular_ingot` Modular Ingot, `kubejs:star_remains` Remains of a Star, `kubejs:void_sculk` Void Containment Sculk mixture.
- **Blocks:** `kubejs:taint_ore` Taint Ore, `kubejs:breach` Containment Breach, `kubejs:chaos_infused` Chaos Infused Metal (unbreakable, no collision; a Sulfur Cube can swallow it), `kubejs:dimensional_rift_portal` Dimensional Rift (portal block, no item).
- **Fluids:** `kubejs:fluid_charged_fluix` Fluid Charged Fluix, `kubejs:molten_chaos` Molten Chaos.
- **NuclearCraft custom fission fuel:** `nuclearcraft:fuel_reality_rfe_1` and its OX/NI/ZA/TR and depleted variants. Values are unchanged: 150 FE/t, 160 H/t, 691200 s.
- **Tags:** `c:arcana` replaces `forge:arcana`. The four custom ingots now have their own tags (`c:ingots/law`, `c:ingots/stellarium`, `c:ingots/sol_astral`, `c:ingots/modular`).

#### Added
- `kubejs:eyes4` **Eyes of The Empress** (purple; tooltip "In abundance, one starts to yearn for structure and reliability"). Used in Chapter 4.
- `kubejs:sol_astral_ingot` **Solar Astral Ingot**. It is a Dimensional Rift key to Eden, made in the Eclipse Viewer. Dropping it into Dragonrot gives a Demon Ingot (lang hint).
- `kubejs:eden_prediction` **Generalized Eden Prediction**, a Hostile Neural Networks prediction item. A new data model `hostilenetworks:sunstorm` (DivineRPG Sunstorm, 12,500 FE/t) drops Eden Heart, `kubejs:chaos_infused` and sugar.
- **New fluids:**
  - `kubejs:eden_fluid` Light of Dawn;
  - `kubejs:liquid_rich` Dissolved riches;
  - `kubejs:aurorial_call` Aurorial Call;
  - `kubejs:faint_arcane` Faint Arcane Essence;
  - `kubejs:instability` Instability fluid.
- **GregTech material changes:**
  - `gtceu:chaos_infused` Chaos Infused Metal now also has a liquid ("Fluid Infused Chaos"), gas, block and ore form, with `NO_SMELTING` in place of disabled material recipes. The ore form would mean worldgen or ore items (verify).
  - `gtceu:taint` Taint gains a plasma form, and its material recipes are no longer disabled (verify in JEI).
- **New GregTech "cosmic" materials** (`cosmic_materials.js`, animated icon sets): Eternal, Primordial Matter, Raw Star Matter Plasma, Transcending Matter, Temporal Fluid, Spatial Fluid, Singularity Sequence Matter, Miniature White Hole, Miniature Black Hole, God Destroyer (`material.gtceu.*`). Each wraps an existing GTNA or UFO fluid, and processing recipes are disabled.
- **GTNA (GregTech Nexus) port content.** These have names and textures only, with no original recipes or behaviour:
  - **41 GT materials** `gtceu:gtna_*`: Stronze, Breel, Hastelloy N/N 75, Trinaquadalloy, Mar M 200 Steel, Inconel 625, Tantalloy 61, ceramics, Space Time, Creon, Mellion, Transcendent Metal, Six Phased Copper, Tengam Attuned, Infinity, Hypogen, Celestial Tungsten, Astral Titanium, Chronomatic Glass, Quantum, Orundum, Magneto Resonatic, Superconductor UIV, Odyssey Nano Superalloy, Stellar Alloy, and others.
  - **28 fluids** (`gtna_fluids.js`): Lead, Plutonium 241, Sulfur and Thorium plasma; White and Black Dwarf Matter; Raw Star Matter; Eternity; Excited DTEC/DTRC; Phonon Medium; Rhugnor; and others.
  - **20 special items** `gtna:*`: nanites (carbon, gold, silver, six-phased copper, universium), Graviton Anomaly, Hydraulic Arm, Special Laser Lens, heat capacitors, 1080k Sp Coolant Cell, Stable Boson Containment Unit, superdense plates, ceramic flakes, and others.
  - **53 structural blocks** `gtna:*`: casings, Eternal and Hypogen coils, Force Field Glass, graviton flow modulators, and the Spacetime Compression, Stabilisation and Time Acceleration field generators, tiers 0 to 8 (Crude to Gallifreyan).
- **Singularities** (migration `singularity-coverage-20261116`):
  - 228 new Extended Crafting singularities (configs). New pack total: 544 configs, against 519 in the old pack (verify the old count's meaning).
  - 228 new Avaritia singularities `kubejs:<id>` (lang `singularity.realityreversal.*`). Every ingot or gem tag now has both an EC and an Avaritia singularity.
  - Avaritia's 27 built-in singularities now cost **1,000,000 items** (`avaritia_singularity_count.js`). Aluminum accepts both spellings.
  - Black Steel, Bismuth and Quicksilver singularities accept more mods' items.
  - Cyclic amber joins `c:gems/amber`, and two moonstones join `c:gems/moonstone`.

#### Removed
- `kubejs:compressed_singularity_alpha` … `_eta` (7 **Compressed Singularity** items, each holding 81 or 34 singularities). The startup script and textures are gone, and nothing references them. Ultimate Singularity rework is left to the author (migration note).
- `kubejs:event_horizon_anchor` **Event Horizon Anchor**: a rescue item for Soul's Black Holes. That mod is not in the new pack.
- `kubejs:portal_disruptor` **Portal Disruptor**, which reset Ancient City / Otherside portals. Its server script is also gone.

#### Renamed / text changes
- Item display names are now real text components instead of `§` codes; the visible names are unchanged.
- Name overrides are kept and moved into one lang file (`kubejs/assets/realityreversal/lang/en_us.json`, loaded by `client_scripts/lang.js`):
  - Twilight Forest Wrought Iron Bar and AoA3 Ghastly Ingot become "Twilight dipped Ingot";
  - Ghastly block and nugget become "Condensed Twilight" and "Twilight Droplet";
  - IF Pink Slime Ingot becomes "Slime reinforced Steel";
  - "Laputa Core Orb";
  - all Taint and Chaos Infused part names.
- **New name:** Gaia "Mineral Water" fluid block.

---

### 2. Multiblocks

#### Old custom GregTech multiblocks moved to Modular Machinery CE Reborn (MMCR)
The 7 machines that used to be GTCEu multiblocks (`gtceu:<id>`, EU, GT hatches) are now **MMCR machines `realityreversal:<id>`** (controller block `mmcr:<id>_controller`). They use **FE** and generic MMCR item, fluid and energy ports. Structures are read from `config/reality_reversal/mmcr_port_machines.json` and 26 recipes from `mmcr_port_recipes.json`.

| Machine | Casing look | What it does (new recipes) |
|---|---|---|
| Anomalous Condenser | DimDoors Black Fabric | Turns basic blocks into DimDoors materials: lava to Eternal Fluid, string to World Thread, sand to Solid Static, coal/gold blocks to Clod/Amalgam blocks, stone to Black Fabric, water to Leak bucket (7 recipes) |
| Foundational Breaker | MA Machine Frame | Primal Magick cloths (Spellcloth, Hexweave, Saintswool), the **Eyes of The Magician** craft, Terrasteel/Life Essence/Gold Leaf from boss drops, and Null-block duplication (6 recipes) |
| Corruption Containment Unit | Void Mycelium | Makes Void Containment Sculk mixture (15k FE/t) |
| Soul Capturer | Runewood planks | Makes 8 Malum spirit types from runes and ingots |
| Dimensional Rift Constructor (`dim_tear`) | Heatproof casing | Containment Breach + deuterium gives Containment Failure, and the machine **keeps the Dimensional Rift portal open** (see section 3) |
| Taint Replicant | Stable casing | **Generator:** Void Sculk gives 3,000,000 FE/t for 36,000 ticks. Also crafts DE Basic Crafting Injectors |
| Radiation Cleanser Prototype | Reinforced turbine casing | Runs on 130,000 FE/t alone; each run cleans radiation in nearby chunks (section 3) |

- The old test recipe type `mm_test_machine_recipes` is gone.
- The GT multiblock UI lang (`gt_multiblock_ui.js`) is replaced by MMCR lang keys.

#### New MMCR multiblocks
- **Biomic Terraformer** (`mmcr:biomic_terraformer`, ExU Terraformer look). It has two recipes:
  - **terraform:** a recorded ExU Biome Marker turns the **3x3 chunks** around the controller into that biome, full height;
  - **aurora:** a Shimmersteel Ingot **forces an Auroral aurora**, at night in aurora dimensions only.
  A run is refused, and keeps its items, if its conditions fail.
- **Eclipse Viewer** (`mmcr:eclipse_viewer`, DivineRPG Twilight Stone look; parallel up to 3). It makes:
  - Printed Astral Processors;
  - **Light of Dawn** (Eden fluid);
  - Astral Fluix crystals;
  - the **Solar Astral Ingot**;
  - Starmetal seeds.

#### New GTNA "Nexus" structure-only multiblocks (GTCEu, `gtna_native_multiblocks.js`)
- There are 21 controllers. All use **dummy recipes**: "Multiblock structures and block palettes only. No recipes or machine systems."
- They are:
  - Forge of the Gods, with ring, active and air layouts;
  - the four Godforge modules: Heliofusion Exoticizer, Helioflux Melting Core, Helioflare Power Forge, Heliothermal Plasma Fabricator;
  - Transcendent Plasma Mixer;
  - Dimensionally Transcendent Plasma Forge;
  - Nano Forge (+2 auxiliary);
  - Eye of Harmony.
- Previews are off in JEI/EMI for structures above 50,000 blocks.
- Whether any are craftable or used in progression is unclear (verify).

---

### 3. Gameplay mechanics

#### Boss, dimension and mod gating (old `scripts/*.zs`, CraftTweaker + GameStages)
- **Removed:** the new pack has no GameStages, ReDimStages, ItemStages, RecipeStages or MobStages, `scripts/` is empty, and quests grant no stages. I found no replacement gating mechanism in `kubejs/`, `config/` or `mods/` (verify).
  - **Dimension locks** (`dimgating.zs`) are gone. They covered the Nether, End, Ad Astra planets (Moon, Mars, Venus, Mercury, Glacio), Ad Astra Extra moons and planets, Aether, Twilight Forest, Undergarden, Otherside, Depth, Astral Dimension/Setback, Valoria, Voidscape, The Abyss (4 dims), NuclearCraft Wasteland, AoA3 (6 dims) and DivineRPG (8 dims), each with flavour messages. The old quests granted the matching stages (nether, vanilla_end, twilight, floating_sky, moon, iceika, arcana, astral, depth, otherside).
  - **Boss gating** (`bossgating.zs`) is gone. The Wither Storm needed stage `witherstorm`, and the **Creaking** needed `de_fusion`.
  - **Mod gating** (`mod_gating.zs` / `recipe_gating.zs`) is gone. Resource Trees items and recipes were locked behind `containment_breakage` ("Concealed by Void").
- **Still in place (Revelationary item gates):**
  - Advancement-based block disguises are kept (reveal1 to 4, and the blacklist).
  - **New reveal5** shows Astral Sorcery Rock Crystal Ore and Aquamarine Shale after obtaining Eyes of The High Priestess (`modpack:intuition`).
  - **New advancements** `modpack:mech_eye` and `modpack:void_mining`.
  - The `wither_storm` revelation was removed.
- **GT progression revelations** (`gt_progression_revelations.js`) are kept. GT-exclusive ores and hazardous GT items stay disguised until `modpack:blacklist` / `modpack:void_contain`. The lists of other mods' equivalents were updated (Thermal changed to FTB Materials / Oritech).
- **GT below HV** is kept: ULV/LV/MV machine and casing recipes are removed and hidden.

#### Boss guard (new, `startup_scripts/rr_boss_guard.js`)
- Applies to every entity in the new tag `#c:bosses`. The tag covers 21 bosses: Devourer, Feral Ghoul Boss, Voidscape bosses, Captain Cornelia, the Astral Dimension bosses, Extreme Wither, Blaze Vindicator, Malachite Guard, Dread Queen, Ender Chicken, the Eldritch Hierophant and Warden, Chesed, Malkuth and Geburah.
- **One hit removes at most 10% of max HP.**
- Kill and set-health damage types are blocked: `/kill`, void (except below the world), ExU Doom, Avaritia infinity, Spectrum set_health, Malum void, and others.
- Doom, Life Drain and Endest effects can't be applied.
- Forced deaths are vetoed.
- Admins bypass it with tag `rr_allow_kill`.

#### Mob duplication blacklist (new)
- `#modpack:duplication_blacklist` (currently Theoretical Sciences **Black Swan**) is added to the blacklist tags of EnderIO, IF Mob Duplicator, Oritech, Spectrum, Mob Grinding Utils and Ars Nouveau Drygmy.
- Tiny Mob Farm Lassos refuse these mobs.
- Woot also blacklists the Black Swan; the Draconic Guardian blacklist and the Ender Dragon factory drops are kept.

#### Radiation
- **Moved from NuclearCraft radiation to the Nuclear Radiation mod (Bq).**
- **Sulfur Cube processing:** a cube holding `kubejs:chaos_infused` in a chunk at or above **5x10^9 Bq** for 60 s drops `gtceu:chaos_infused_block`. The old trigger was 75 mRAD of NC chunk radiation.
- Sulfur Cubes are now ignored by radiation through the mod's ignored-entity config; before, NC radiation damage was cancelled.
- **Radiation Cleanser** (and the `void_recontainment` recipe): each run removes 10% of the deposited isotope activity in a 17x17-chunk area. It also cleans residual sources from dropped fuel (removing them below the mod's floor); intact fuel sources are left alone. The old version reduced NC chunk radiation, and GT pollution, by 10% per second over 8 chunks.

#### GT pollution and Aura (removed)
- `gt_environment.js` is gone. Running GT machines used to create per-chunk pollution that **drained Nature's Aura**.

#### Aura consequences (changed)
- `natures_aura_anchor_monitor.js` is **removed**. It made Nature's Aura altars, offering tables, animal spawners and wood stands summon mobs at low Aura (Void creepers, then 2 Withers, then an Elite Nethengeic Wither), along with debuffs and Spectrum Dragonrot, corium or Forfeiture blocks.
- The shared Spectrum block-placement helper (`aura_consequences.js`) still exists, but nothing in the new pack calls it (verify whether this is intended).

#### Dimensional Rift (portal)
- It is now driven by the MMCR `dim_tear` controller.
- **New: one rift now goes to several places**, depending on the item you right-click with:
  - Containment Failure goes to **Sunken City**, as before;
  - **Solar Astral Ingot** goes to **Eden**, with Slow Falling;
  - **Glint and Gold** goes to **Gaia Dimension**, with Slow Falling.
- Arrival is at Y=200 at the same X/Z, and the trip is refused if that space is blocked. The item is consumed only after a successful transfer.
- **New refusals:** "already in that dimension" and "while mounted".

#### Puzzles and other new interactions
- **Mech Eye puzzle** (new):
  1. Right-click a Withering Eden Cadillion with a Shimmersteel Ingot. It is executed and drops a stable Midnight Aberration (the ingot is not consumed).
  2. A Lychee recipe turns it into Light of Dawn.
  3. A Spectrum pedestal recipe for `cataclysm:mech_eye`, gated by `modpack:mech_eye`.
- **ExU Rainbow Stone** (new): a Resonator only finishes Rainbow Stone while its owner's Rainbow Generator is running (Extra Utilities 2 rule).
- **DimDoors gateways** (new): generated dimensional portals are swapped for closed Iron Dimensional Doors, so mobs and items no longer turn them into rifts.
- **Thaumaturge Cult Map:** search radius is cut to 16 chunks, repeat maps reuse the nearest obelisk, and a kill from far away gives a blank map.
- **Kept unchanged:**
  - Mob Crusher can't be placed in Cataclysm dimensions;
  - Creaking crusher handling;
  - IF crusher Chaos Guardian rule;
  - Flame Eye discovery (Astral Eye use);
  - Voidscape null blocks drop themselves.
- **Removed:**
  - Sunken City underwater spawning of Wither Storm "sickened" mobs (that mod is not in the new pack);
  - Event Horizon Anchor black-hole rescue;
  - Portal Disruptor portal reset.

#### Worldgen
- **New: The Depths ores** (`rr_depths_all_ores.js`). Every Overworld ore type (132) spawns on the cavern floor and ceiling of ExU's `the_depths` biome. This is a biome modifier plus 264 generated placed features under `data/modpack/worldgen`, in new chunks only.
- **GT planet ores** are kept: Mars Bauxite and Moon Sphalerite veins on custom layers, plus the End bauxite, mica and sulfur vein tweaks. They are now generated as GT 8.x vein JSON.
- **New dimension type** `javd:void` override (the Void Miner dimension; overworld-like, 384 tall).
- **Sunken City template dimension** datapack is kept.
- **Removed:** the `dimdoors_progression_decay` datapack (55 decay patterns that turned vanilla ores, logs and planks into DimDoors variants) and the JEI pages that documented decay and Tesselating Loom recipes (verify whether DimDoors 6.2.2 covers this itself).

#### Loot
- **Ancient Temple chests** still add Remains of a Star.
- **Corrupted Lunarian** still drops Raw Desh.
- **Nether fortress chests** still have the "Tales of Fallen" book.
- **Ad Astra rare chests** still have the lore papers and the Astral Eye.
- **Bedrock chunk** is still removed from End city, bastion and stronghold chests.
- **Woodland mansion chests** still lose the Creaking Heart and Resin.
- **Changed:** the Moon chests now swap **Ad Astra Cheese** for a Lunar singularity (before, it was books) and add the Moon village blacksmith chest.
- **Block drops** moved from a script to datapack JSON with the same behaviour: Taint Ore drops Taint Dust (Fortune; Silk Touch gives the ore), and DimDoors fabrics and dark sand drop thread or filament.
- **Aether Present:** TNT and XP spawns now need a real breaker (fixes JEI export spam; normal play is the same).

#### EMC (new, `projecte/emc_mod_removal.js`)
- Every item from **Excessive Utilities, Pam's Food Extended, Productive Bees and RFTools Utility** now has **0 EMC**, and that carries through to crafted outputs.
- Glass, wood and stone blocks and their shape variants are exempt.
- ExU Moon Stone and the Magical Wood/Planks always lose EMC.

#### JEI info and tooltips
- Tooltip text has moved into the lang file.
- **New tooltips:**
  - Oritech Foundry ("Requires 3 Machine Cores");
  - ExU Rainbow Stone;
  - the rift keys (Solar Astral Ingot, Glint and Gold, Containment Failure);
  - Chromatic Glass ingot lore;
  - Midnight Aberration lore;
  - Mech Eye (boss dimension);
  - Biomic Terraformer;
  - GT tin alloy dust and rubber plate hints;
  - Gold singularity is reusable.
- Void Miner tooltips now use the `voidminersremastered` IDs.
- **Removed tooltips:** AoA3 Troll Idol, ExtraBotany Spirit Fuel, Infinite Abyss deepstone, Foundational Breaker controller.
- Tooltips for `gtceu:dim_tear` and `gtceu:rr_anomalous_condenser` are still listed, but those items no longer exist after the move to MMCR (stale, verify).
- **Removed JEI info:**
  - Boss-drop pages (DE Dragon Heart from the Ender Dragon, Withered Nether Star from the Wither Storm);
  - Forestry bee-effect tooltips;
  - DimDoors decay and Tesselating categories.
- **New JEI fixes:**
  - Gaia Restructurer/Purifier catalysts and fuel notes;
  - a rebuilt GT Ore Processing diagram;
  - GT recipe-slot tooltips restored;
  - recipe-ID line for Astral Sorcery and NuclearCraft recipes.
- `gtceu:text_module` is hidden from creative tabs because hovering it crashes the game.

---

### 4. Theoretical Sciences (the author's own mod, new)
`theoreticalsciences-1.2.0.jar` (mod ID `theoreticalsciences`, author Innight).

- **What it is:** an endgame tech mod "at the edge of theoretical physics, and now of biology". It has **191 machines (76 animated multiblocks)**, a research tree of derivation puzzles, its own singularities, and the **Omnipotence Core** as its final item.
- **Content size (lang file):** about 943 items, 681 blocks, 716 research entries, 30 status effects and 8 boss lines.
- **15 dimensions:**
  - Accretion Frontier, Black Hole Interior, White Hole Interior;
  - Hyperdimensional Reality, Inner Space, Living Proof, Planetary Interior;
  - Platonic Realm, Quantum Foam, the Bulk;
  - Titan, Titan's Hidden Ocean;
  - the Transcendental, Transfinite Hierarchy, the Antiverse.
- **35 biomes**, for example Bloodstream, Tumour, Kraken Mare, Graviton Reef and Pulsar Field.
- **57 entities**, including the bosses and mobs **Alpha Omega**, Black Swan, The Ouroboros, The Binary, Hyperobject, Boltzmann Brain, Fractal Wyrm and Tumour Hydra.
- **Status effects** include Spaghettification, Time Dilation, Vacuum Decay, Grey Goo and Radiation Sickness.
- **Pack integration:**
  - Chapter 4 asks for the Forged Omnipotence Core (marked intentional) and Cherenkov Quartz;
  - Processing asks for the **Extreme Assembly Table**, which is BLOCKED by the intentionally uncraftable Infinity Ingot per the reachability report;
  - Resource Generation asks for the Black Swan Feather;
  - the Black Swan is blacklisted from every mob duplicator.

---

### 5. Quests (FTB Quests): quick comparison
- **Chapters:** 12 to **14**.
- **Added chapters:**
  - `chapter_4__expansion_and_control` (**"Chapter 4 - Expansion and Control"**, 31 quests);
  - `black_list` (a hidden 1-quest chapter, skipped by the reachability check).
- **Removed chapters:** none.
- **Quest totals:** about 650 to about 775 (counted as `tasks: [` blocks).

| Chapter | Old | New |
|---|---|---|
| Casting of magic | 127 | 140 |
| Chapter 1 | 46 | 46 |
| Chapter 2 | 56 | 56 |
| Chapter 3 | 52 | 50 |
| Dimensions | 20 | 25 |
| Energy / Generic / Personal | 11 / 11 / 18 | 13 / 12 / 18 |
| Processing and refinement | 156 | 168 |
| Resource Generation / Transfer / Resources | 50 / 66 / 37 | 35 / 78 / 52 |

- Chapter titles now live in `config/ftbquests/quests/lang/en_us.snbt`.
- Game-stage quest rewards are gone (see gating above).
- **Reachability** (migration report, 957 item tasks): 954 OK, 2 intentionally unobtainable (Rainbow Generator, Omnipotence Core), 1 blocked (Extreme Assembly Table).

## Recipe changes

This changelog comes from comparing the old pack's scripts (`kubejs/server_scripts/*.js`, `scripts/*.zs`) with the new pack's (`kubejs/server_scripts/**`, `config/reality_reversal/mmcr_port_recipes.json`, and the global datapacks for gated recipes).
- "EC" means Extended Crafting.
- "(verify)" marks something that should be checked in game.
- Recipe IDs from the old CraftTweaker scripts are kept as `crafttweaker:<name>`.

---

### 0. Pack-wide changes
- **Tags:** every `#forge:*` tag is now `#c:*` (for example `#forge:ingots/steel` becomes `#c:ingots/steel`). Ingredients that used NBT (singularities, combs, soul vials, aura bottles, fluid tanks) now match on data components.
- **CraftTweaker removed:** `extendcrafting.zs` and `craftingtable.zs` were converted to KubeJS (`recipes/extended_crafting.js`, `recipes/crafting_table.js`). The other `.zs` files were stage scripts and were not converted (see section 2).
- **Custom multiblocks:** the custom machines moved from GregTech multiblocks to Modular Machinery (MMCR). Their controllers are now `mmcr:*_controller`, they draw FE instead of EU, and their recipes live in `config/reality_reversal/mmcr_port_recipes.json` (26 recipes).
- **Thermal replaced by Oritech:** Thermal is gone, so its items were swapped for Oritech equivalents throughout. For example, the Stirling Dynamo became the Basic Generator, the Induction Smelter became the Foundry, the Thermal Machine Frame became Oritech Machine Core 1 or the Oritech Machine Frame, and the Thermal upgrade augments became Oritech machine cores.
- **Input swaps now target recipe IDs (verify):** in `recipe_changes.js`, `replace(x, …)` used to filter by output `{output: x}`. It now passes the ID straight to `replaceInput`, which KubeJS treats as a recipe-ID filter. Swaps whose recipe ID differs from the item ID (for example GT `gtceu:shaped/...`) may no longer apply.

---

### 1. Changes by mod

#### GregTech (GTCEu)
**New**
- Chaos Infused Ingot (`gtceu:chaos_infused_ingot`), Electric Blast Furnace: Chaos Infused Dust + 1200 mB Molten Chaos, 1200 K.
- Gallium Arsenide Dust ×5 + Berkelium-247 ×3, Chemical Reactor: 3 Taint Dust + Resin Brick + 500 mB Instability. Also outputs Faint Arcane.
- White Opal ×2 (`gaiadimension:white_opal`), Cutter: Exquisite Opal + Mineral Water.
- Chaos Infused Dust, Hot Dust and Cherenkov Quartz Dust, Electrolyzer: Block of Demon Metal + Molten Chaos Infused. Also outputs Voidic Source, plus a 0.01% chance of Fallout Dust.
- Shimmering Ice (`auroral:shimmering_ice`), Chemical Reactor: 5 Ice Crystal + Cryotheum + Aurorial Call.
- Micro Processor Computer (`gtceu:micro_processor_computer`), Circuit Assembler: needs an Aurora Shard, an Ignitium Ingot and Aurorial Call.
- Molten Starmetal (`jaopca:molten.starmetal`), Extractor: from a Starmetal Ingot.
- Distillation Tower: 5000 mB Instability gives Redstone Acid, Molten Cloggrum, Charcoal Byproducts, Molten Emberstone and Chloroform. Chanced Unstable Ingots ×5 and Faint Arcane.
- Large Chemical Reactor, two recipes:
  - Chaos Infused Dust + Eyes 3 + Leak gives a Semi-Unstable Nugget, 5 Downstone Fragments and Molten Chaos Infused;
  - Witherite Ingot + 3 Moon Stone + Mineral Water gives Eyes 1, a Chronomatic Glass Ingot and Distilled Water.
- Pyrite ×6 (`gaiadimension:pyrite`), Implosion Compressor: Industrial TNT + 6 Pyrite Dust + 2 Sweet Muckball.

**Changed**
- Ignitium Ingot ×8, Chemical Reactor:
  - the fluid is now GT Blaze instead of Tinkers' Pyrotheum;
  - the soul vial must hold an Ignited Revenant (matched by data component).
- Annealed Copper (Arc Furnace), Helium from Ender Air, Dimension Breach, Taint Dust (Chemical Reactor and Centrifuge), Taint Rod (Lathe) and Taint Ingot (EBF): same recipes, rewritten for 1.21 (fluid amount syntax, tag names).

**Dropped**
- Pyrotheum (`tinkers_advanced:pyrotheum`), Chemical Reactor: Tinkers' and Thermal were removed.
- Six Dimensional Doors fabric recipes in the GT Assembler: Stable Fabric, Liminal Lint, Enduring Fibers, Fabric of Finality, Fuzzy Fireball and Rift Pearl. The Tesselating Loom recipe for Stable Fabric is also gone (verify that these items are still obtainable).
- The old radiation cleanser recipe type (`gtceu:corruption_prototype_recipes`) is now the MMCR Radiation Cleanser (130,000 FE/t, energy only).

**Removed default recipes:** EV Workstation circuit assembly (×2), and compressing Chaos Infused ingots into a block (`gtceu:shaped/block_compress_chaos_infused`).

**Below-HV lock:** unchanged at 214 ULV/LV/MV machine and casing outputs. Their recipes are removed and the items are hidden in JEI.

**HV machine recipes:** unchanged. The HV machines still use LV circuits or wires, and the HV Hull, Assembler, Mixer and Alloy Smelter keep their custom shaped recipes.

#### Custom machines (old GT multiblocks, now MMCR)
- **Controllers:**
  - Dimensional Tear, Radiation Cleanser, Taint Replicant, Foundational Breaker, Soul Capturer and Anomalous Condenser keep the same shaped recipes (HV Hull + Modularium) but now output `mmcr:*_controller`.
  - New controller recipes: Corruption Containment, Biomic Terraformer (Shimmersteel Ingot + EV Hull) and Eclipse Viewer (HV Hull + Modularium + Stardust + Eden Heart).
- **Kept, now in FE:**
  - all 7 Anomalous Condenser recipes (Dimensional Doors materials);
  - all 8 Soul Capturer spirit recipes;
  - Containment Failure;
  - Spellcloth, Hexweave and Saintswool;
  - the "easier Botania" Terrasteel recipe;
  - Eyes 2;
  - the Null-block "error" recipe;
  - the Void Sculk power recipe (now 3,000,000 FE/t generated);
  - Basic Crafting Injectors ×12.
- **Changed:** Void Sculk.
  - The old inputs were a Void Essence Cluster, 3 Mana Runes, a Call from the Depth Sculk Hearth and 500 mB of Leak.
  - The new inputs are the cluster, the 3 runes and 2 Froststeel Ingots.
  - The output dropped from 2 to 1 (verify).
- **Dropped:**
  - Ice/Fire/Lightning Dragonsteel Ingots, Foundational Breaker: it used a Valoria crystal;
  - 16× each of Ambrosium, Gravitite, Zanite and Vinteum Ore, Foundational Breaker: from a Gold singularity and Tokens of Joy;
  - Void Gem and Void Shards, Corruption Containment: from Call from the Depth ingots.
- **New MMCR recipes:**
  - Eclipse Viewer:
    - Printed Astral Processor ×5;
    - Eden Fluid;
    - Astral Fluix Crystal ×16;
    - Sol Astral Ingot (from a Constellation Core, Eden Fluid and Chaos Fragments);
    - Starmetal Seeds.
  - Dimensional Tear: Keystone Block (Unstable Ingot, Illumination Powder, Red Coal and Cryotheum).
  - Biomic Terraformer: Terraform (from a Biome Marker) and Aurora (from a Shimmersteel Ingot).

#### Extended Crafting (59 recipes converted from CraftTweaker)
**New**
- Bio Generator (`oritech:bio_generator_block`), tier 2: Oritech Machine Core 2, Constantan, Ghastly Ingot, Legendary Ender Eye, Ender Star.
- Draconium Core ×3 (`crafttweaker:cheap_draconium_core`), tier 3: Bedrockium blocks, Draconium Ingots, Stellarium, Sol Astral Ingot. The original Draconium Core recipe is kept.
- Eyes of the Empress (`kubejs:eyes4`), tier 4: Eyes 1–3, 11 singularities, Chaotic Injectors and Energy Cores, Shimmersteel, Void Sculk, and fluid tanks of Faint Arcane, Aurorial Call and Instability.
- Imbuement Chamber (`ars_nouveau:imbuement_chamber`), tier 2: Hallowed Marble, Runewood Planks, Sacred Spirit, Dark Steel.
- Constellation Core ×8 (`appliedas:constellation_core`), tier 2: 4 attuned crystals, 4 seasonal runes, Liquid Starlight, Desh and Ostrum.
- Printed Lumen Processor (`appliedas:printed_lumen_processor`), tier 1: Prismatic Lumen Crystals, Good Circuit, Warlock Gem.
- Machine Block (`excessive_utilities:machine_block`), combination: Fission Reactor Casing core, Oritech Machine Core 7, Sol Astral ×3, Froststeel ×2.
- Oritech Machine Core 4, combination: Core 3 + Law Ingot, Clear Glass, Ender Stone, End Steel.
- Glint and Gold (`gaiadimension:glint_and_gold`), combination: Keystone Block + Gaia Ingots, Life Essence, Gaia Spirit Crux.
- Hallowed Marble (`primalmagick:marble_hallowed`), combination: Raw Marble + Hallowsteel, Hallowood Sapling, Hallowed Rune and Hallowed Essence Cluster.
- Labradorite (`gaiadimension:labradorite`), Quantum Compressor: 100,000 `#c:ingots/enchanted` + Insanium Apple catalyst.
- Glacial Basin (`auroral:glacial_basin`), tier 1: Ghastly Ingots, Chronomatic Glass Ingot, Shimmersteel.
- NuclearCraft fusion parts, all tier 4:
  - Fusion Reactor Casing ×3;
  - Fusion Reactor Core: 27 casings plus 12 attuned crystals and IF fluid buckets;
  - Fusion Reactor Connector: Wyvern Cores, Essentia Crystals, Taint Rods.
- NuclearCraft Basic RF Amplifier and Basic Electromagnet, tier 2.

**Changed**
- Ghastly Ingot ×2: the Lich Tower Miniatures are now Exanimate Essence.
- Rubetine (Harsh): output is now `voidminersremastered:rubetine`. Enderium, Lumium and Signalum are now Enderic Compound, Lithium Ingot and Stainless Steel.
- Prudentium Crystal: uses the Void Miners Remastered Rubetine.
- Tertium Crystal: the Thermal Heavy Oil tank is now an Oritech Heavy Oil tank.
- Imperium Crystal: Valoria Pearlium Ingots are now Botania Elementium Ingots.
- Modularium (`kubejs:modular_ingot` ×8): Extra Botany Elementium Quartz is now a Hellstone Ingot.
- Modular Casing: outputs 2 `mmcr:basic_casing` instead of the HammerLib test machine.
- Creative Grimoire: Mana & Artifice Resonating Dust is now an Ars Source Gem; the JAOPCA Ouranium block is now the Mystical Extended Tier Ouranium block.
- ME Controller: MEGA Cells Sky Steel is now Ghastly Ingot.
- Old Thermal augments, now Oritech cores:
  - "hardened_component" now makes Oritech Machine Core 3 and uses steel instead of invar.
  - "reinforced_component" now makes Machine Core 5. It uses Oritech Electrum and Core 4, plus an NC or Cyclic redstone bucket.
  - "resonant_component" now makes Machine Core 7. It uses Enderic Compound, 4 Heisenberg Compensators and Core 5.
- Void Sculk (combination): the Call from the Depth souls and ingots are now Cloggrum, Froststeel, Utherium and Regalium.
- Fission Reactor Casing ×6: uses the remastered Citrinetine block and a Molten Uranium bucket.
- NASA Workbench:
  - Immemorial, Soul Ingots and Valoria crystals are now 7 Forgotten Ingots;
  - Enderium Gears are now Heisenberg Compensators;
  - Tinkers' repair kits are now Ultimate Tier Installers;
  - FTB Invar Rods are now GT Invar Rods.
- Maintenance Hatch: the Thermal frame and steel block are now the Oritech Machine Frame and Steel Block.
- Taint Block (Ender Crafter): the Wither Storm parts are now 3 more Taint Ingots.
- Awakened Draconium Block ("entry_draconium"):
  - Activated Chromatic Steel is now Runes of Pride and Greed;
  - Refined Azurite is now Pure Azurite;
  - Das Rheingold is now Oritech Gold Gem.
- Chaotic Core ×3: Thermal Lightning, Earth and Ice Charges are now Overcharged Crystal, Adamant Dust and Blue Ice.
- Eyes 3 (High Priestess): the Nether Brick singularity is now Coal, and Signalum is now Redstone Ingot.

**Dropped:**
- Titanium Gear (FTB Materials removed);
- Prosperity Seed Base combination (now an Oritech Atomic Forge recipe);
- NC Copper Coil table recipe (now the Oritech Assembler);
- Great Soul Essence (Call from the Depth removed);
- Quantum Compressor Ultimate Block, which used Tinkers' Neutronite.

#### Crafting table (Lamp of Cinders and similar)
- The 9 Lamp of Cinders recipes, Reinforced Reactor Casing and Gold Powder are unchanged; each still keeps its reusable item.
- **New:** Pink Essence ×3 (`gaiadimension:pink_essence`): Pink Slime + Active Rock (the Active Rock is kept).

#### Avaritia
- **New:** 228 extra singularities (`kubejs:<material>`, 1,000,000 items each), covering every ingot and gem.
  - The 27 built-in singularities now cost 1,000,000.
  - Aluminum also accepts GT Aluminium.
- **Dropped:**
  - Eternal Singularity table recipe (Ultimate Block, Crystal TNT, Ultimate Singularity). The default recipe is still removed, so the Eternal Singularity has no recipe now (verify).
  - Custom Ultimate Singularity chain (7 "compressed singularity" groups). EC's default Ultimate Singularity recipe is back, now covering 544 EC singularities (the migration notes say the author will rework it).
- **Unchanged:**
  - Infinity Catalyst recipe still removed (intentionally uncraftable);
  - Neutron Compressor via Draconic fusion.

#### Draconic Evolution (fusion crafting)
- **Kept:**
  - Wyvern Crafting Injector (the default is now removed explicitly);
  - Neutron Compressor;
  - Fire Dragonsteel Block ×5;
  - Awakened Crafting Injector (the default is now removed);
  - Chaos Bee spawn egg;
  - Draconic Crafting Core (shaped).
- **New:** Witherite Block ×6 (`cataclysm:witherite_block`): Witherite Block catalyst + Wither Roses, Wither Runes, Chaos Infused Ingots, Vivid Powder, Nether Star Lenses, Seen Eyes.
- **Changed:**
  - Chaos Infused (`kubejs:chaos_infused`), Large Chaos Fragment catalyst: Extra Botany's The Chaos is now ProjectE's Black Hole Band.
  - The duplicate recipe with a Resin Bricks catalyst was dropped.
- **Dropped:**
  - Ice and Lightning Dragonsteel Block fusions (they used Simply Jetpacks and Tinkers' items);
  - Draconic Soul Fragment ×8 fusion (now a Malum recipe).
- **Removed defaults (both packs):** Draconium Core, Wyvern, Awakened and Chaotic Cores, Basic Crafting Injector. These come from EC, MMCR and fusion recipes instead.

#### Mekanism
- All 8 custom recipes are unchanged:
  - Basic Control Circuit (infusing);
  - Coal Coke (injecting);
  - Coke Dust;
  - Spectrum gem powders (crushing).
- Shaped overrides are unchanged: Steel Casing, Crusher, Enrichment Chamber, Metallurgic Infuser, Energy Tablet, Heat Generator and Bio Generator.
  - Changed: the Heat Generator now uses the Oritech Basic Generator instead of the Thermal Stirling Dynamo.

#### AE2 and addons
- **New:**
  - Printed Astral Processor (Eclipse Viewer);
  - Astral Processor (Botania Runic Altar);
  - Lumen Processor (Astral infusion);
  - Constellation Core and Printed Lumen Processor (EC).
- **Changed:**
  - the Advanced Card accepts an NC or Cyclic redstone bucket (it was Thermal);
  - Item Cell Housing: copper is now Ghastly Ingot and redstone is now an Eye of Redstone. The replacement ID is misspelled `excessive_utilties:` (verify).
  - Lumen Cell Housing: iron is now Sol Astral Ingot.
  - Extended Molecular Assembler is now under the `extendedae:` ID (Eden singularity).
  - Essentia Cell Housing (Applied Thaumaturgy): iron is now Void Ingot, and copper was removed.
- **Removed:**
  - all 17 AE2 storage cell recipes: item and fluid 1k–256k, and spatial 2³/16³/128³;
  - AppliedAS ExtendedAE astral processor compat (×2);
  - ExtendedAE Crystal Assembler and Entro Seed, and AdvancedAE Reaction Chamber, are blocked by a Barrier ingredient.
- **Moved:** the Quartz Fiber part removal moved from output-removal to ID-removal; the custom Quartz Fiber recipe is unchanged.

#### NuclearCraft
**New**
- Fusion Reactor, two recipes:
  - Tritium + Molten Europium-155 gives Instability, Irradiated Boron, Molten Polonium and Helium-3;
  - Eden Fluid + Hydrogen gives Faint Arcane, Irradiated Lithium and Molten Curium.
- Chemical Reactor: Sulfuric Acid + Oxygen gives Sulfur Dioxide.
- Melter:
  - 9 Aurora Shards give Aurorial Call;
  - Frosted Allure gives 2000 mB Cryotheum.
- Fluid Enricher:
  - Aurorial Call + 32 Aurora Blocks gives more Aurorial Call;
  - Resonating Gem + Water gives Technical Water.
- Fluid Infuser, using Aurorial Call:
  - Shimmersteel Ingot from 5 Dark Steel;
  - Aurora Shard from 5 Black Lotus;
  - Shimmerweave Fabric.
- Fluid Infuser, using Instability: Mana Singularity from 8 Hallowed Marble.
- Fluid Infuser, using Cryotheum:
  - Mars Ice Shard Ore;
  - Froststeel Ingot from Bifrost Dirt.
- Pressurizer:
  - Plutonium Pellet from 9 Oritech Plutonium Dust;
  - Hematite (Gaia) from 9 Hematite Dust.
- Restored JAOPCA NuclearCraft processing (`nuclearcraft_jaopca.js`): manufactory, pressurizer, melter and ingot former recipes for JAOPCA materials.

**Changed**
- HV hatch assembler:
  - the HV Input Bus now uses an AE2 Chest instead of an IF Black Hole Unit;
  - the HV Output Bus now uses a Mekanism Personal Chest instead of an AE2 Chest.
- Fluid Infuser, Ingot Former and similar machines: same inputs, new 1.21 JSON format (process time 200, 50 RF/t).
- Alloy Smelter (crafting): the Thermal Smelter is now the Oritech Foundry.
- Plate DU: the FTB Iridium Plate is now a GT Iridium Plate (the default is also removed now).

**Dropped**
- HV Input Hatch, assembler recipe (IF Black Hole Tank).
- Melter: Blitz Rod to Cloud Seed, and Blaze Head or Blaze Rod to Blazing Blood (Thermal and Tinkers' removed).
- The old Glowing Mushroom to `#forge:mushrooms` swap (both fluid enricher recipes).
- The removals of the Supercooler Condensate Water and Coal-Water recipes.

**Removed defaults (new):**
- Fusion Reactor Casing, Core and Connector (now EC recipes);
- Basic RF Amplifier and Electromagnet (now EC recipes);
- Platinum to Neutronium (irradiator);
- Technical Water (fluid enricher);
- Salt (crystallizer).
- The Manufactory Ender Pearl recipe was already removed in the old pack.

**Disabled:** the Heat Exchanger Controller (a Barrier is now in its recipe).

**Unchanged:** Reality Fission Energy Core, Crystaltine (Alloy Smelter), Moon Stone and Moon Sand to Deuterium, Annealed Copper, Chaos Infused Ingot and Plate, and Seen Eyes.

#### Primal Magick
- **Unchanged (converted):**
  - the 9 Essence Crystal and 9 Essence Cluster arcane recipes (Mana Quartz or Ethetic Green Block centre);
  - Magnifying Glass;
  - Primalite Ingot;
  - Prudentium Farmland.
- The rune substitutions from Botania and other mods are unchanged, with two exceptions:
  - Infernal Rune: Valoria Infernal Ingot is now Blazing Quartz Fragment;
  - Self Rune: Tinkers' Clear Glass is now Spectrum Semi-Permeable Glass.
- **New:** Mana Singularity (NC Fluid Infuser) and Hallowed Marble (EC combination).
- **Possibly lost (verify):** the 36 Heavenly Calcinator affinity overrides. The new `primal_magick_calcinator_affinities.js` says they were merged into `rr_generated_affinities.js`, which does not exist in the instance. The `primal_magick_generated_affinities.zip` global pack exists in both versions.

#### Botania
**New**
- Rune of Autumn (Runic Altar): Air and Fire Runes, 3 Soulwood, Bottle of Decay Away. The default recipe is removed.
- Rune of Deception (Runic Altar): the 7 sin runes. The default recipe is removed.
- Astral Processor (Runic Altar).
- Utherium Crystal (Mana Infusion): from a Topaz Shard.
- Raw Azurite (Elven Trade): from Pure Azurite.

**Changed**
- Rune of Earth: Tinkers' Earth Slime Crystal is now Earth Agglomeratio.
- Rune of Fire: Blazewood is now Red Archwood Log, and the Blazing Blood bucket is now a GT Blaze bucket.
- Orechid Ignem: Abyss Powder is now Onyx Powder.
- Token of Joy elven trade: Ambrosia is now Ambrosium Shard.
- Air, Water and Winter runes and the Orechid: same recipes.

**Dropped**
- Nightmare Fuel elven trade (Extra Botany);
- Energy Powder mana infusion (Call from the Depth).

#### Astral Sorcery (new mod; all new)
- Altar of Illumination (focal combine): 3 Marble, Crafting Table, Eyes 3. The default recipe is removed.
- Sol Astral Ingot (`kubejs:sol_astral_ingot`), resonance altar at night: Small Chaos Fragment, Starmetal, Containment Failure, plus a 20-item relay ring and 2 Draconic Soul Fragments.
- Sky, Day and Night Dynamism Gems (resonance altar): Rock Crystal, a powder (Illumination, Vivid or Nocturnal) and Solar Verdium.
- Lumen Processor (infusion).
- Astrolabe: its default altar recipe is removed; Gold is replaced by a Malum Gold Node.
- Starmetal Seeds come from the Eclipse Viewer (the MA infusion and the Productive Bees Starmetal bee recipes are removed).

#### Oritech (new mod; replaces Thermal)
- **New machine recipes:**
  - Salt Dust (Pulverizer);
  - Dark Steel Ingot (Foundry): Steel + Enriched Refined Obsidian;
  - Graphite Electrode (Foundry);
  - Eye of Ender ×2 (Assembler);
  - NC Copper Coil (Assembler);
  - Metal Beam ×6 (Assembler);
  - Star Remains ×3 (Assembler);
  - Prosperity Seed Base (Atomic Forge).
- **Progression cores:**
  - Core 2: shaped, Core 1 + 8 Steel;
  - Core 3, 5 and 7: EC table;
  - Core 4: EC combination.
- **Changed crafting:**
  - Foundry: the old Thermal Induction Smelter recipe, built around Machine Core 1;
  - Basic Generator: Nickel, Steel Gear, Copper Block and Steel Block;
  - Fuel Generator: plating is now an Ender Eye;
  - Assembler: copper is now Ghastly Ingot;
  - Small Tank and Refinery Module: copper is now Conductive Alloy;
  - Refinery: cauldron is now an Ender Eye;
  - Machine Frame: iron is now steel;
  - Machine Core 1: Crafting Table is now Diamond Dust.
- **Removed defaults:**
  - Cores 2 to 7, including the alternative recipes;
  - Foundry, Assembler, Bio Generator, Fluid Pipe, Metal Beams;
  - alternative Refinery Module;
  - Electrum and Adamant alloys;
  - Carbon centrifuge;
  - Dark Steel compat foundry.
- **Gap (verify):** Machine Core 6 (`oritech:crafting/core6`) is removed and nothing replaces it. Core 7 is made from Core 5.

#### Excessive Utilities (new mod; all new)
- **Mills and generators:** Fire, Lava, Water, Wind and Dragon Egg Mill, Resonator and Magmatic Generator.
  - Each is a shaped recipe around the Machine Block, Sol Astral Ingots and Burnt Stone, plus a themed item (for example Rune of Fire, Sheol Fire, Dragonbone, Technical Water or Wind Nucleus).
  - The Magmatic Generator needs a Magma Cube Prediction.
- **Enchanter:**
  - Enchanted Ingot or Block from Vanadium Steel + XP Shards;
  - Evil Infused Iron Ingot or Block from Taint + Nether Star.
- **Resonator:** Chaos Infused Dust from Chaos Infused.
- **Bedrockium Ingot:** Compressed Cobblestone III is now Bedrock Dust Block, and the Diamond Block is now a Chaos Infused Block.
- **Other new sources:**
  - Demon Ingot (Lychee): Sol Astral Ingot dropped in Dragonrot;
  - Unstable Ingot (GT Distillation Tower);
  - Semi-Unstable Nugget (GT Large Chemical Reactor).
- **Removed:**
  - the Crusher recipe, with no replacement (verify);
  - Division Sigil recipes for the unstable ingot and nugget, and the sigil loot;
  - the Nether lava-dunk conversion;
  - the inversion ritual sacrifice tag;
  - Rainbow Generator, its slabs and the Furnace Generator, all blocked (future-proof).

#### Mystical Agriculture
- **Removed:** 77 seed infusion recipes.
  - 56 resource and mob seeds, for example Steel, Dark Steel, Terrasteel, Enderium, Awakened Draconium, Infinity, Iridium, Platinum, Fluix, Blaze and Wither Skeleton.
  - 21 augments, for example Flight, Haste, Strength and Health Boost.
  - Also removed: the Starmetal and Gaia Spirit seeds, and the Infusion Pedestal and Altar defaults (both packs; Spectrum-gated replacements).
- **Farmlands:** unchanged. Inferium comes from the IF Dissolution Chamber, Prudentium from Primal Magick or Spectrum, Tertium from Malum, Imperium from the Empowerer and Supremium from the Nature's Aura tree ritual.
- **Prosperity Seed Base:** the EC combination is replaced by the Oritech Atomic Forge (Wheat Seeds, Stratine Fragments, Prosperity Ingot).

#### Malum
- **New:**
  - Cracked Dragonbone (`spectrum:cracked_dragonbone`) from 4 Ice and Fire Dragonbone;
  - Draconic Soul Fragment (`dog:draconic_soul_fragment`) from Refined Soulstone + 3 Taint Ingots + 2 Heart of the Deep (it was a DE fusion).
- **Changed:** Soul Stained Steel ×4: the extra Processed Soulstone is now Refined Soulstone.
- **Unchanged:** Tertium Farmland and Advanced Plating.
- **Dropped:** Lost Souls Sand ×32 (Call from the Depth removed).

#### Void Miner (now Void Miners Remastered)
- 55 custom outputs remain, all moved to the `voidminersremastered:` IDs.
- Nickel Ore now gives Oritech nickel ore instead of Thermal's.
- **Dropped (21):** they came from removed or replaced mods:
  - Peridot, Platinum, Iridium, Sapphire, Silver and Zinc ores (AllTheOres);
  - Cinnabar, Ruby, Apatite, Niter and Sulfur ores (Thermal);
  - Amber and Cobalt ores (Valoria);
  - Antimony, Salt, Titanium, Tungsten, Bauxite, Monazite and Resonating ores (FTB Materials);
  - Immemorial Debris (Call from the Depth).
- **Easy Rubetine:**
  - the shaped recipe (Red, Dark and Magenta Matter + End Steel) is now a Spectrum gated recipe;
  - it outputs 2 instead of 1 and unlocks after crafting a Rubetine Miner (`modpack:void_mining`).
  - The harsh EC tier-0 Rubetine recipe remains.

#### Thaumaturge (new mod)
- Salis Mundus: Redstone is now Eyes 4 (`kubejs:eyes4`).
- The Cauldron-to-Crucible dust trigger is removed.

#### Industrial Foregoing
- Unchanged: Fluix with Charged Fluix fluid, the custom Pink Slime Ingot ×8 and Inferium Farmland (Dissolution Chamber), and the removal of the default pink slime ingot.
  - These recipes were briefly broken by a nested handler during the port. That is fixed (migration `recipe-reachability`).

#### Ender IO
- **Changed:**
  - Stygian Ingot ×5 (alloy smelter): 50,000 RF and 1 XP is now 10,000 RF and 3 XP;
  - recipe IDs were dropped.
- **Changed (verify):** End Steel ×8 (alloy smelter). The default End Steel recipe is no longer removed, so both recipes probably exist.
- **Dropped:** Eye of Ender slicing recipe. Eyes of Ender now come from the Oritech Assembler; the vanilla recipe is still removed.
- **New:** the default Dark Steel alloy recipes (with coal or anthracite) are removed; Dark Steel now comes from the Oritech Foundry.

#### Actually Additions
- Empowerer: Imperium Farmland and NC Chassis are unchanged.

#### Nature's Aura
- Tree rituals (Supremium Farmland, MA Machine Frame, Creaking Heart) and the Sulfur Cube spawner are unchanged.
  - They were briefly broken by a nested handler during the port; that is fixed.

#### Productive Bees
- **Changed:** Chaos honeycomb centrifuge now gives a Small Chaos Fragment, Wax and 50 mB Molten Chaos (it gave a Medium Chaos Fragment and wax).
- **Removed (new):**
  - Froststeel and Aquamarine honeycomb crafting and centrifuge recipes;
  - Starmetal bee.
- **Removed in both packs:** the Chaos bee default, and the default beehive and nest recipes (the Beehive is custom-crafted).
- **Unchanged:** the input swaps on machine recipes (Bottler, Catcher, Incubator, Gene Indexer, Nest Locator).

#### Other mods
- **Gaia Dimension (new):**
  - Moonstone Block from 9 ExU Moon Stone;
  - Keystone Block (Dimensional Tear);
  - Pyrite, Hematite, White Opal, Labradorite, Glint and Gold, Pink Essence (see above);
  - the default Keystone Block and Glint and Gold recipes are removed.
- **Auroral (new):**
  - Shimmersteel Ingot, shaped from 9 Gaia gems (Aura Cluster, Goldstone, Tektite, Goshenite, Bismuth, Euclase, Labradorite, Proustite, Stibnite) or NC-infused;
  - Glacial Basin (EC);
  - the default Unrefined Shimmersteel and Glacial Basin recipes are removed.
- **Undergarden:**
  - Catalyst, shaped: Stygian Ingot, Arcanite Stone, Seen Eyes. The default is removed.
  - Froststeel (NC infuser) and Utherium (mana infusion).
- **Spectrum:**
  - Bedrock Dust Block from 9 Bedrock Dust;
  - Pure Azurite (smelting);
  - Laputa Core Orb (pedestal, see section 2);
  - the two Resin Clump liquid-crystal conversions are removed.
- **Immersive Engineering:** HOP Graphite Ingot (smelting HOP Graphite Dust) is new.
- **DivineRPG:**
  - Divine Rock is now shapeless (Arcanite Stone, Eden Chunk, Starmetal). The default is removed, and it replaces Polished Stone in the ExU Manual Mill.
  - Snow Globe (EC combination) is unchanged.
- **Ars Nouveau (new):**
  - Novice Spell Book: Soulwood Log, Rune of Fire, Hallowed Essence Cluster;
  - Imbuement Chamber (EC).
- **Cataclysm:**
  - Flame Eye: crafting removed (Spectrum pedestal gated by `modpack:flames`, both packs).
  - Mech Eye: crafting removed. It is now a hidden puzzle (Midnight Aberration → Lychee in Eden Fluid → Observing Eye), then a Spectrum pedestal gated by `modpack:mech_eye`.
  - Witherite Block ×6 (DE fusion).
- **Hostile Neural Networks:** new Sunstorm data model (Eden prediction; drops Eden Heart, Chaos Infused and Sugar).
- **Woot Revived:** Stygian Dust (EC) and the Stygian Ingot alloy are unchanged.
- **Ad Astra:**
  - Steel Tank: Tinkers' Slimesteel is now Terrasteel;
  - Fuel Refinery and NASA Workbench: see above.
- **Lychee in-world recipes:**
  - unchanged: Coal from Driftwood, Enhanced Ender Block, Technical Water (block ID fixed) and Stellarium explosion;
  - new: Demon Ingot and the Observing Eye puzzle step.
- **Pam's Food Extended:** cooked Tofabbit smelting, campfire and smoker recipes repaired (they were broken in the mod's own data).

#### Dropped because their mod was removed
- **Tinkers' Construct:**
  - Smeltery Controller recipe;
  - Pyrotheum;
  - Blazing Blood melting;
  - Ultimate Block compressor;
  - Tinkers' ingredients in several recipes (swapped, see above).
- **Thermal:**
  - Induction Smelter (now the Oritech Foundry);
  - augments (now Oritech cores);
  - Stirling Dynamo, Refinery and Machine Frame swaps;
  - Thermal ores in the Void Miner;
  - the Thermal ID removals (lumium and enderium dust or ingots, augments).
- **Forestry:** Sturdy Casing recipe.
- **Call from the Depth:** Great Soul Essence, Lost Souls Sand, Energy Powder, Void Gem processing, Immemorial Debris (void miner), and several ingredients.
- **Extra Botany, Valoria, Mana & Artifice, Wither Storm Mod, Simply Jetpacks, FTB Materials, MEGA Cells, AllTheOres:** only their uses as ingredients (swapped) or as Void Miner outputs.
- **Not in any old custom recipe script:** Hex Casting, Chisels & Bits, Compact Machines and Solar Flux. They were removed from the pack, but no recipe script referenced them, so no recipe changed.
- **Also dropped:**
  - Portal Disruptor (`kubejs:portal_disruptor`, with `portal_reset_tool.js`);
  - Stable Fabric (Tesselating Loom);
  - Eternal Singularity;
  - the custom Ultimate Singularity grouping.

---

### 2. Progression and gating changes

| Old (1.20.1) | New (1.21.1) |
|---|---|
| **Game Stages, Item Stages and Recipe Stages** (CraftTweaker): Resource Trees items and recipes locked to the stage `containment_breakage`. | Resource Trees is not in the new pack, so this gate is gone. |
| **Recipe Stages:** the Laputa Core Orb was a shaped recipe locked to stage "Rediscovery". Inputs: Ambrosium Shard, Zanite, Laputa Miniature, Frozen Stone, Oxdrite Ingot. | A **Spectrum Pedestal** recipe (basic tier) with `required_advancement: castle_in_the_sky:conquer_castle`. Inputs: Laputa Miniature, Enchanted Gravitite, Ambrosium Shard, Zanite, Holystone. |
| **Mob Stages:** the Wither Storm was locked to stage `witherstorm`, and the Creaking to `de_fusion`. | The Wither Storm Mod is removed. No mob-stage equivalent was found (verify how the Creaking is gated). |
| **ReDimension Stages** (`dimgating.zs`): about 50 dimensions locked by stage with lore messages: Nether, End, Ad Astra planets, Aether, Twilight, DivineRPG, AoA, The Abyss, Undergarden, Valoria, and others. | No dimension-stage scripts in the new pack. Dimension access depends on the portal recipes and items above (verify). |
| **Revelationary** (old datapack): reveal 1–4, the `blacklist` revelation, and a `wither_storm` revelation (117 items). | Reveal 1–4 and the blacklist are kept. The Wither Storm revelation is removed. **New:** reveal5 (advancement `modpack:intuition`, given by Eyes 3) hides Astral Sorcery Rock Crystal and Aquamarine. New advancements: `modpack:intuition`, `modpack:mech_eye` (hidden), `modpack:void_mining`. |
| GT hazard and ore-blacklist revelations (`gt_progression_revelations.js`), shown after `modpack:void_contain`. | Same logic, now generated as datapack JSON. Material lists were updated (Thermal → Oritech, FTB Materials, Ender IO). |
| Spectrum-gated recipes: Flame Eye, MA Infusion Altar and Pedestal, Prudentium Farmland, Taint Ore. | All kept, plus **Mech Eye** (`modpack:mech_eye`) and **Rubetine ×2** (`modpack:void_mining`). |
| GT below-HV lock (214 machine and casing outputs). | Unchanged. |
| ProjectE EMC on all items. | **New:** no EMC for Excessive Utilities, Pam's Food Extended, Productive Bees and RFTools Utility items. Glass, wood and stone blocks are exempt (`projecte/emc_mod_removal.js`). |
| — | **Intentionally uncraftable:** Infinity Catalyst, which makes the Infinity Ingot and Block uncraftable. The Theoretical Sciences Extreme Assembly Table now needs an Infinity Ingot, so it is locked. Also the Rainbow Generator and the Forged Omnipotence Core. |

---

### 3. Removed or disabled items (summary)

| Area | Old | New | Notes |
|---|---|---|---|
| `recipe_changes.js` ID removals | 127 | 148 | 21 old-only entries (mostly Thermal, Forestry, Tinkers' and old Mystical Agradditions crystal IDs). 42 new-only: Oritech cores 3–7, Foundry and Assembler; NC Plate DU and Fusion Core; AppliedAS astral processor; Glint and Gold; Keystone; Mech Eye; Undergarden Catalyst; Dark Steel alloys; Ars Imbuement Chamber; MA Starmetal seed. |
| Output removals (`removalout`) | 8 | 9 | Added Ars Novice Spell Book (recrafted) and GT Text Module (crashes on hover; also removed from the creative tab). |
| GT below-HV outputs | 214 | 214 | Unchanged. |
| Mystical Agriculture seed infusions | 0 | 77 | 56 seeds and 21 augments. |
| AE2 storage cells | 0 | 17 | All item, fluid and spatial cells. |
| Excessive Utilities defaults | — | 10 + 4 enchanter overrides | Mills, Resonator, Crusher, Magmatic Generator, Division items. |
| NuclearCraft defaults | 2 | 9 | Fusion parts, amplifier, electromagnet, neutronium, technical water, salt. |
| **Barrier bans** (an uncraftable ingredient) | 1 (Basic Reactor Casing) | 11 | Basic Reactor Casing, ProjectE Tome, ExtendedAE Crystal Assembler and Entro Seed, AdvancedAE Reaction Chamber, Molecular Manipulator Matter Fabrication Controller, ExU Rainbow Generator slabs (×2) and Furnace Generator, NC Heat Exchanger, plus `extendedcraft:epic_component`. The epic component ID looks like a typo, so verify that it applies. |
| Whole-mod recipe removal | — | 1 | Every `neoecoprototype` recipe, plus `neoecoae:integrated_working_station`. |
| Other ID removals | — | — | GT EV Machine Hull (both packs), 3 GT recipes, 2 Productive Bees aquamarine, 2 froststeel, 2 Astral, 2 Oritech, 1 Malum, 1 Botania (deception), 1 IF, 1 Avaritia (Infinity Catalyst). |
| Revelationary hidden items (datapack) | about 128 items + 25 block states | about 13 items + 28 block states | The Wither Storm revelation (117 items) was dropped. Reveal5 is new. GT hazards and the ore blacklist are still generated by script in both packs. |

---

### 4. Things to verify in game
- Machine Core 6 (Oritech), Eternal Singularity and the ExU Crusher have their default recipes removed and no replacement.
- Ender IO: whether the default End Steel alloy recipe is still present alongside the custom one.
- `recipe_changes.js` input swaps now filter by recipe ID, not by output.
- Item IDs that look misspelled:
  - `excessive_utilties:eye_of_redstone`;
  - `extendedcraft:epic_component`;
  - leftover `mna:*`, `mining_dimension:*` and `thermal:dynamo_magmatic` in `replace()` calls, all from removed mods.
- The Primal Magick calcinator affinity overrides: the file they were said to be merged into is missing.
- Void Sculk output count (MMCR: now 1, it was 2).
- Dimensional Doors fabrics (Stable Fabric and others) after the GT Assembler and Loom recipes were dropped.
