// Preserve the native JEI sorting cache repair after moving Nexus geometry to GT.
RecipeViewerEvents.addInformation('item', function (event) {
  // This shared event also runs for EMI, which has no JEI sorting holder.
  var InformationEvent = Java.loadClass('dev.latvian.mods.kubejs.integration.jei.JEIAddInformationKubeEvent');
  if (!(event instanceof InformationEvent)) return;
  var receipt = {complete: false, passed: false, phase: 'RecipeViewerEvents.addInformation/item',
    source_script: 'client_scripts:rr_gtna_jei_preview_guard.js'};
  try {
  var Reflection = Java.loadClass('net.yxiao233.appliedjs.utils.ReflectionUtil');
  var Map = Java.loadClass('java.util.Map');
  var List = Java.loadClass('java.util.List');
  var ArrayList = Java.loadClass('java.util.ArrayList');
  var HashMap = Java.loadClass('java.util.HashMap');
  var Collections = Java.loadClass('java.util.Collections');
  var Supplier = Java.loadClass('java.util.function.Supplier');
  var SortingConfig = Java.loadClass('net.mezzdev.config.api.sorting.ISortingConfig');
  var RecipeRegistrationApi = Java.loadClass('mezz.jei.api.registration.IRecipeRegistration');
  var RecipeRegistration = Java.loadClass('mezz.jei.library.load.registration.RecipeRegistration');
  var RecipeManager = Java.loadClass('mezz.jei.library.recipes.RecipeManagerInternal');
  var CategorySorting = Java.loadClass('mezz.jei.library.config.RecipeCategorySortingConfig');
  var registration = Reflection.getPrivateField('registration', RecipeRegistrationApi, event, InformationEvent);
  var manager = Reflection.getPrivateField('recipeManager', RecipeManager, registration, RecipeRegistration);
  var sortingHolder = Reflection.getPrivateField('recipeCategorySortingConfig', CategorySorting, manager, RecipeManager);
  var delegate = Reflection.getPrivateField('sortingConfig', SortingConfig, sortingHolder, CategorySorting);
  if (registration == null || manager == null || sortingHolder == null || delegate == null) {
    throw new Error('Active JEI sorting holder is unavailable.');
  }
  var kind = 'rr_jei_sorting_input_cache_v1';
  var adapter;
  if (delegate instanceof Supplier && JSON.parse(String(delegate.get())).kind === kind) {
    adapter = delegate;
  } else {
    var pool = new HashMap();
    var normalized = null;
    var stats = {kind: kind, complete: true, passed: true, visibility_calls: 0, comparator_calls: 0,
      stable_input_hits: 0, input_rebuilds: 0, canonical_value_count: 0, last_input_size: 0};
    var canonical = function (value) {
      var known = pool.get(value);
      return known == null ? value : known;
    };
    var normalize = function (values) {
      // Native List.equals compares values without crossing Rhino once per category.
      var input = values instanceof List ? values : new ArrayList(values);
      if (normalized != null && normalized.equals(input)) {
        stats.stable_input_hits++;
        return normalized;
      }
      var nextPool = new HashMap();
      var next = new ArrayList();
      input.forEach(function (value) {
        var stable = canonical(value);
        next.add(stable);
        nextPool.put(stable, stable);
      });
      pool = nextPool;
      normalized = Collections.unmodifiableList(next);
      stats.input_rebuilds++;
      stats.canonical_value_count = pool.size();
      stats.last_input_size = normalized.size();
      return normalized;
    };
    var canonicalOrder = function (values) {
      var result = new ArrayList();
      new ArrayList(values).forEach(function (value) { result.add(canonical(value)); });
      return result;
    };
    adapter = new JavaAdapter(SortingConfig, Supplier, {
      getSortedValues: function (values) { return delegate.getSortedValues(normalize(values)); },
      getDefaultSortedValues: function (values) { return delegate.getDefaultSortedValues(normalize(values)); },
      setSortedValues: function (values, sorted) { return delegate.setSortedValues(normalize(values), canonicalOrder(sorted)); },
      getComparator: function (values) { stats.comparator_calls++; return delegate.getComparator(normalize(values)); },
      isVisible: function (values, value) { stats.visibility_calls++; return delegate.isVisible(normalize(values), canonical(value)); },
      allowsRemovingValues: function () { return delegate.allowsRemovingValues(); },
      addChangeListener: function (listener) { return delegate.addChangeListener(listener); },
      setLegacyMigration: function (paths, migrator) { delegate.setLegacyMigration(paths, migrator); return adapter; },
      get: function () { return JSON.stringify(stats); }
    });
    Reflection.setPrivateField('sortingConfig', SortingConfig, sortingHolder, CategorySorting, adapter);
  }
  var rebound = Reflection.getPrivateField('sortingConfig', SortingConfig, sortingHolder, CategorySorting);
  if (rebound !== adapter || !(rebound instanceof Supplier)) throw new Error('JEI sorting adapter binding failed.');
  receipt.sorting_identity_guard = {kind: kind, complete: true, passed: true, holder_bound: true};
  receipt.complete = true;
  receipt.passed = true;
  console.info('[RR_JEI_SORTING_GUARD] ' + JSON.stringify(receipt));
  } catch (error) {
    receipt.complete = true;
    receipt.failure = String(error);
    console.info('[RR_JEI_SORTING_GUARD] ' + JSON.stringify(receipt));
    throw error;
  }
});
