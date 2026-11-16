// All pack text lives in ONE file per language: kubejs/assets/realityreversal/lang/<language>.json
// Minecraft reads that file directly. But when a key there renames something another mod already
// names (e.g. item.twilightforest.wrought_iron_bar), which of the two wins depends on load order.
// This block re-adds those keys under the owning mod's namespace so the pack's text always wins.
// For a new translation: add e.g. zh_cn.json beside en_us.json and add 'zh_cn' to LANGUAGES.
;(function () {
    const LANGUAGES = ['en_us']
    LANGUAGES.forEach(code => {
        ClientEvents.lang(code, event => {
            let entries = null
            try { entries = JsonIO.read('kubejs/assets/realityreversal/lang/' + code + '.json') }
            catch (error) { console.warn('[lang] Could not read ' + code + '.json: ' + error) }
            if (entries == null) return
            entries.forEach((key, value) => {
                // Keys look like item.<mod>.<name> or <mod>.<something>: find the owning mod.
                const parts = String(key).split('.')
                const owner = [parts[1], parts[0]].find(part => part && Platform.isLoaded(part))
                if (owner) event.add(owner, String(key), String(value))
            })
        })
    })
})();
