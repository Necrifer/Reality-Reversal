# KubeJS and Rhino quirk ledger

Read this file before debugging or editing scripts in this instance. Update it
whenever a new scripting-runtime quirk is discovered.

## Runtime baseline

- Minecraft 1.21.1, NeoForge
- KubeJS `2101.7.2-build.368`
- Rhino `2101.2.7-build.85`
- Modular Machinery Reborn `3.0.22`
- Applied Energistics 2 `19.2.17`
- Nuclear Radiation `1.0.9`

## Level dimension is a KubeJS property

Affected script: `server_scripts/nuclear_radiation_decontaminator.js`

Observed failures:

- `level.dimension.location()` produced `Cannot find function location in
  object javd:void`.
- `level.dimension().location()` produced `Cannot call property dimension ...
  It is not a function, it is "object"`.

Rule: in this KubeJS version, treat `level.dimension` as a property. When a
Java API requires a `ResourceLocation`, use:

```js
const ResourceLocation = Java.loadClass(
  'net.minecraft.resources.ResourceLocation'
)
const dimensionLocation = ResourceLocation.parse(String(level.dimension))
```

Do not infer vanilla Java call syntax from Mojang mappings when KubeJS exposes
the same member as a property. Status: runtime-verified 2026-08-18. After the
00:09:51 reload, the dimension error disappeared and execution advanced to the
later game-time calculation.

## Read world game time through `levelData`

Affected script: `server_scripts/nuclear_radiation_decontaminator.js`

Observed failure:

- `level.getGameTime()` produced `Cannot find function getGameTime in object
  ServerLevel[New World]` every time the radiation cleanup recipe completed.

Rule: use the KubeJS property bridge and coerce the Java long before arithmetic:

```js
const timeSeconds = Number(level.levelData.gameTime) * 0.05
```

Do not use `level.getGameTime()` in scripts for this instance. The official
KubeJS block-entity documentation also notes that
`level.levelData.gameTime` is the form that works:
`https://kubejs.com/wiki/addons/bejs`.

Status: implemented 2026-08-18; pending runtime verification after reload.

## Explicitly select ambiguous Java overloads

Affected script: `server_scripts/gravital_singularity.js`

`AEItemKey.of(item)` and `AEItemKey.of(itemStack)` are both ambiguous because
AE2 provides `of(ItemLike)` and `of(ItemStack)`, while Minecraft's `ItemStack`
also satisfies `ItemLike` in this runtime.

Use Rhino's explicit Java signature selector:

```js
$GravitalAEItemKey[
  'of(net.minecraft.world.level.ItemLike)'
](item)
```

Changing only the argument type does not resolve this ambiguity. Status:
implemented 2026-08-17; awaiting/retain runtime test evidence in the log.

## Keep declarations out of MMR callback `try` blocks

Affected script: `server_scripts/gravital_singularity.js`

Declaring callback-local `const` variables directly inside a `try` block caused
repeated MMR evaluations to fail with `TypeError: redeclaration of var
ingredientSpec` after script reload.

Put the working variables in a named helper function. Keep the registered MMR
callback limited to calling that helper inside `try/catch`.

## `event.error()` does not stop JavaScript execution

Affected scripts: MMR recipe-function callbacks.

After `event.error(...)`, explicitly `return`. Otherwise the callback can
continue into ME simulation, extraction, success logging, or other mutations.
Error paths should fail closed and never permit an unintended output.

## Do not rely on KubeJS `Ingredient.items` for server tag iteration

Affected script: `server_scripts/gravital_singularity.js`

Server-side bulk ME checks could not reliably enumerate tag members through
`Ingredient.of(...).items`. Resolve `TagKey<Item>` through
`BuiltInRegistries.ITEM.getTag(...)` and iterate its holders instead.

## JEI `GuiGraphics.drawString` overload ambiguity

Affected script: `client_scripts/gravital_singularity_jei.js`

Both plain strings and `Text.of(...)` caused Rhino to ambiguously choose between
`drawString` overloads. The stable current design uses JEI slots and rich slot
tooltips without a custom draw handler. Do not restore direct drawing unless an
explicit Java signature is selected and runtime-tested.

## Verification discipline

Node syntax checks do not detect Rhino property bridging, overload resolution,
or repeated-callback scoping failures. For Java interop changes:

1. run syntax and static consistency checks;
2. reload or restart the instance;
3. exercise the affected machine;
4. inspect only new timestamps in `logs/latest.log`;
5. update each ledger entry from `pending` to `runtime-verified` only after the
   expected success log or behavior is observed.
