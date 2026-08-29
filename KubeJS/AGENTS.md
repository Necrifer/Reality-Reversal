# KubeJS maintenance requirements

These instructions apply to all files below this `kubejs` directory.

Before changing or debugging any KubeJS script, read
`KUBEJS_RHINO_QUIRKS.md`. Do not retry an approach recorded there as broken
unless the relevant mod versions have changed and the behavior is being
deliberately re-tested.

After discovering a Rhino, KubeJS, MMR, JEI, or Java-interop quirk, update the
quirk ledger in the same change. Record:

- affected versions and scripts;
- the exact symptom or error;
- approaches known not to work;
- the implemented workaround;
- whether the workaround has been runtime-verified after a reload/restart.

Keep pre-edit backups under `config/codex_backups` as required by the project
workflow. Do not edit files outside `kubejs`, `config`, or `scripts` unless the
user explicitly expands the scope.
