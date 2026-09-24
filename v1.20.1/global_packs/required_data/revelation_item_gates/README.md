# Revelationary item-gate conversion

This converts the active rules formerly declared in `item_gating.js` into
Revelationary advancement-based item mappings.

The datapack belongs at:

`global_packs/required_data/revelation_item_gates`

The bridge script belongs at:

`kubejs/server_scripts/revelation_stage_bridge.js`

The original 1.21 `modpack:main_story` and `modpack:philosophers_stone`
advancements were ported to Minecraft 1.20 syntax. They reveal the complete
Dimensional Doors and Draconium groups respectively. Their original
`minecraft:recipe_crafted` criteria were replaced with `inventory_changed`
checks for the Tesselating Loom and Philosopher's Stone outputs. This is needed
because the 1.20 KubeJS replacement recipe and CraftTweaker Extended Crafting
table do not reliably invoke the vanilla recipe-crafted advancement trigger.
The missing Oritech disguise blocks in `reveal1.json` were replaced with vanilla
stone slab/stair disguises.
The stale 1.21-only `dimdoors:pale_sand` entry was omitted because that block is
not registered by Dimensional Doors 5.4.4 on Minecraft 1.20.1.

`witherstormmod:crossbow_ender_pearl` is an internal crossbow model variant,
not a registered item. It is deliberately excluded from the Wither Storm item
map so Revelationary does not attempt to cloak `minecraft:air`.

The existing `witherStorm` GameStage is preserved for the Wither Storm group.
The bridge grants or revokes `modpack:wither_storm` and periodically reconciles
state because some FTB Quests reward paths on Minecraft 1.20.1 do not emit
KubeJS GameStage events. Existing `Limbo` and `FlawedStone` stages also grant
their matching original advancements as one-way save migrations; removing those
stages does not revoke a discovery. `modpack:blacklist` is intentionally
impossible and keeps the Soulium Seed Base concealed unless an administrator
grants it manually.

Revelationary provides visual and recipe-viewer concealment, not AStages-style
server-side prevention of item use. The separate ore and block-drop gating
scripts remain active for that reason.
