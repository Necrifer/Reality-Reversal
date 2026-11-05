// priority: 1000000

// Registers declarations on GT's native registry bus. Full restart required.
// Supports the installed GTCEu 7.0.2 API on Minecraft 1.21.1 NeoForge.
// Documentation and examples: migration/material-adapter-20261015/adapter-reference.json
(function () {
  var EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority')
  var NewRegistryEvent = Java.loadClass('net.neoforged.neoforge.registries.NewRegistryEvent')
  var pending = [], pendingElements = []
  var reserved = Object.create(null), reservedElements = Object.create(null)
  var installed = false, started = false, elementsStarted = false, finished = false

  function idString(id) {
    var text = String(id)
    return text.indexOf(':') < 0 ? 'gtceu:' + text : text
  }
  function values(args) {
    var list = Array.prototype.slice.call(args)
    if (list.length === 1 && Array.isArray(list[0])) return list[0].slice()
    return list
  }
  function declare(id, configure, element) {
    id = idString(id)
    if (element ? elementsStarted : started) throw new Error('Native registration requires a full restart: ' + id)
    var ids = element ? reservedElements : reserved
    if (ids[id]) throw new Error('Duplicate native declaration: ' + id)
    if (typeof configure !== 'function') throw new Error('Missing native configuration callback: ' + id)
    ids[id] = true
    ;(element ? pendingElements : pending).push(function (create) { configure(create(id)) })
  }
  global.gregMaterials = {
    register: function (id, configure) { declare(id, configure, false) },
    registerElement: function (id, configure) { declare(id, configure, true) },
    onRegistry: function (callback) {
      if (started) throw new Error('Native material registration requires a full restart')
      if (typeof callback !== 'function') throw new Error('Missing native material phase callback')
      pending.push(callback)
    }
  }

  NativeEvents.onEvent(EventPriority.NORMAL, NewRegistryEvent, function () {
    if (installed) return
    installed = true
    var GTCEu = Java.loadClass('com.gregtechceu.gtceu.GTCEu')
    var GTRegistries = Java.loadClass('com.gregtechceu.gtceu.api.registry.GTRegistries')
    var RegisterEvent = Java.loadClass('net.neoforged.neoforge.registries.RegisterEvent')
    var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var Material = Java.loadClass('com.gregtechceu.gtceu.api.material.material.Material')
    var Element = Java.loadClass('com.gregtechceu.gtceu.api.material.Element')
    var GTElements = Java.loadClass('com.gregtechceu.gtceu.data.material.GTElements')
    var MaterialStack = Java.loadClass('com.gregtechceu.gtceu.api.material.material.stack.MaterialStack')
    var MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.material.material.info.MaterialFlags')
    var PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.PropertyKey')
    var DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.DustProperty')
    var OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.OreProperty')
    var BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.BlastProperty')
    var WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.WireProperties')
    var FluidPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.FluidPipeProperties')
    var ItemPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.ItemPipeProperties')
    var RotorProperty = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.RotorProperty')
    var FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.material.material.properties.FluidProperty')
    var FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluid.FluidBuilder')
    var FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluid.FluidState')
    var FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluid.store.FluidStorageKeys')
    var Supplier = Java.loadClass('java.util.function.Supplier')
    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    var ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
    var Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    if (GTCEu.gtModBus == null) throw new Error('GTCEu mod bus is unavailable after construction')

    GTCEu.gtModBus.addListener(EventPriority.HIGHEST, false, RegisterEvent, function (event) {
      if (event.getRegistryKey() == GTRegistries.ELEMENT_REGISTRY) {
        if (elementsStarted) throw new Error('Native element phase was invoked recursively')
        elementsStarted = true
        pendingElements.forEach(function (configure) {
          configure(function (id) {
            var key = ResourceLocation.parse(id)
            if (GTRegistries.ELEMENTS.containsKey(key)) throw new Error('Duplicate native element ID: ' + id)
            var data = {protons: 0, neutrons: 0, halfLifeSeconds: -1, decayTo: null, symbol: null, isIsotope: false}
            var facade = {}
            Object.keys(data).forEach(function (name) {
              facade[name] = function (value) {
                // This GT version stores whole seconds, despite the newer docs' double signature.
                if (name === 'halfLifeSeconds' && (typeof value !== 'number' || !isFinite(value) || Math.floor(value) !== value || value < -1)) {
                  throw new Error(id + ': halfLifeSeconds must be -1 or a nonnegative whole number in GT 7.0.2')
                }
                data[name] = value
                return facade
              }
            })
            // Configuration is synchronous, but registration must follow the callback.
            elementEntries.push(function () {
              var element = new Element(data.protons, data.neutrons, data.halfLifeSeconds,
                data.decayTo, key.getPath(), data.symbol, data.isIsotope)
              GTRegistries.register(GTRegistries.ELEMENTS, key, element)
            })
            return facade
          })
        })
        elementEntries.forEach(function (register) { register() })
        pendingElements = []
        return
      }
      if (finished || event.getRegistryKey() != GTRegistries.MATERIAL_REGISTRY) return
      if (started) throw new Error('Native material phase was invoked recursively')
      started = true
      var entries = [], created = Object.create(null)
      function resolveMaterial(value) {
        if (value instanceof Material) return value
        if (value != null && typeof value.getMaterial === 'function') return value.getMaterial()
        var id = idString(value), key = ResourceLocation.parse(id)
        if (created[id]) return created[id].material
        if (!GTRegistries.MATERIALS.containsKey(key)) throw new Error('Unknown native material reference: ' + id)
        return GTRegistries.MATERIALS.get(key)
      }
      function resolveElement(value) {
        if (value instanceof Element) return value
        try {
          var symbol = GTElements[String(value)]
          if (symbol instanceof Element) return symbol
        } catch (ignored) { /* A custom registry ID is not a static element symbol. */ }
        var key = ResourceLocation.parse(idString(value))
        if (!GTRegistries.ELEMENTS.containsKey(key)) throw new Error('Unknown native element reference: ' + value)
        return GTRegistries.ELEMENTS.get(key)
      }
      function createMaterial(id) {
        id = idString(id)
        var key = ResourceLocation.parse(id)
        if (created[id] || GTRegistries.MATERIALS.containsKey(key)) throw new Error('Duplicate native material ID: ' + id)
        // Preserve the existing protected-constructor/Rhino adapter route.
        var material = new JavaAdapter(Material, {}, key)
        material.setComponents()
        var properties = material.getProperties()
        properties.setMaterial(material)
        var entry = {id: id, material: material, components: null, element: null, formula: null,
          relations: [], ignored: [], fluidBurnTime: null, enchants: [], resolved: false, resolving: false}
        created[id] = entry
        entries.push(entry)
        function property(key) {
          properties.ensureSet(key)
          return properties.getProperty(key)
        }
        function solid(kind, args) {
          properties.ensureSet(kind)
          if (args.length) {
            var dust = properties.getProperty(PropertyKey.DUST)
            if (dust == null) {
              properties.setProperty(PropertyKey.DUST, new DustProperty(args[0], args.length > 1 ? args[1] : 0))
            } else if (kind === PropertyKey.DUST) {
              dust.setHarvestLevel(args[0])
              dust.setBurnTime(args.length > 1 ? args[1] : 0)
            } else {
              if (dust.getHarvestLevel() === 2) dust.setHarvestLevel(args[0])
              if (args.length > 1 && dust.getBurnTime() === 0) dust.setBurnTime(args[1])
            }
          }
          return facade
        }
        function storage(name) {
          if (typeof name !== 'string') return name
          var storageKey = FluidStorageKeys[name.toUpperCase()]
          if (storageKey == null) throw new Error(id + ': unknown fluid storage ' + name)
          return storageKey
        }
        function fluid(name, input) {
          var builder
          if (input == null) builder = new FluidBuilder()
          else if (typeof input === 'number') builder = new FluidBuilder().temperature(input)
          else if (input instanceof FluidBuilder) builder = input
          else throw new Error(id + ': expected a fluid temperature or native FluidBuilder')
          builder.state(FluidState[name])
          property(PropertyKey.FLUID).enqueueRegistration(FluidStorageKeys[name], builder)
          return facade
        }
        function relation(key, method, args) {
          property(key)
          entry.relations.push(function () {
            var targets = values(args).map(resolveMaterial)
            properties.getProperty(key)[method].apply(properties.getProperty(key), targets)
          })
          return facade
        }
        var facade = {
          getMaterial: function () { return material },
          dust: function () { return solid(PropertyKey.DUST, arguments) },
          ingot: function () { return solid(PropertyKey.INGOT, arguments) },
          gem: function () { return solid(PropertyKey.GEM, arguments) },
          polymer: function () { return solid(PropertyKey.POLYMER, arguments) },
          liquid: function (input) { return fluid('LIQUID', input) },
          fluid: function (input) { return fluid('LIQUID', input) },
          gas: function (input) { return fluid('GAS', input) },
          plasma: function (input) { return fluid('PLASMA', input) },
          block: function () {
            var liquid = property(PropertyKey.FLUID).getQueuedBuilder(FluidStorageKeys.LIQUID)
            if (liquid == null) throw new Error(id + ': block() requires liquid() or fluid() first; existing fluids cannot be altered here')
            liquid.block()
            return facade
          },
          ore: function (a, b, emissive) {
            if (arguments.length === 0) properties.ensureSet(PropertyKey.ORE)
            else if (arguments.length === 1 && typeof a === 'boolean') properties.setProperty(PropertyKey.ORE, new OreProperty(1, 1, a))
            else if (arguments.length === 2) properties.setProperty(PropertyKey.ORE, new OreProperty(a, b))
            else if (arguments.length === 3) properties.setProperty(PropertyKey.ORE, new OreProperty(a, b, emissive))
            else throw new Error(id + ': ore accepts (), (emissive), (oreMultiplier, byproductMultiplier[, emissive])')
            return facade
          },
          burnTime: function (ticks) { property(PropertyKey.DUST).setBurnTime(ticks); return facade },
          fluidBurnTime: function (ticks) { entry.fluidBurnTime = ticks; return facade },
          color: function (color) { material.setMaterialARGB(color); return facade },
          secondaryColor: function (color) { material.setMaterialSecondaryARGB(color); return facade },
          iconSet: function (icon) { material.setMaterialIconSet(icon); return facade },
          components: function () { entry.components = values(arguments); return facade },
          componentStacks: function () { entry.components = values(arguments); return facade },
          element: function (element) { entry.element = element; return facade },
          formula: function (formula) { entry.formula = String(formula); return facade },
          flags: function () {
            var flags = values(arguments).map(function (flag) {
              if (typeof flag !== 'string') return flag
              var value = MaterialFlags[flag]
              if (value == null) throw new Error(id + ': unknown material flag ' + flag)
              return value
            })
            material.getFlags().addFlags(flags)
            return facade
          },
          ignoredTagPrefixes: function () { entry.ignored = values(arguments); return facade },
          existingFluid: function (storageName, fluidId) {
            var storageKey = storage(storageName), fluidKey = ResourceLocation.parse(fluidId)
            var fluidProperty = properties.getProperty(PropertyKey.FLUID)
            if (fluidProperty == null) {
              fluidProperty = new FluidProperty()
              properties.setProperty(PropertyKey.FLUID, fluidProperty)
            }
            fluidProperty.store(storageKey, new JavaAdapter(Supplier, {
              get: function () {
                if (!BuiltInRegistries.FLUID.containsKey(fluidKey)) throw new Error('Native material fluid is not registered: ' + fluidId)
                return BuiltInRegistries.FLUID.get(fluidKey)
              }
            }), null)
            return facade
          },
          blastTemp: function (temperature, gasTier, eut, duration) {
            var gas = gasTier == null ? null : (typeof gasTier === 'string' ? BlastProperty.validateGasTier(gasTier.toLowerCase()) : gasTier)
            if (gasTier != null && gas == null) throw new Error(id + ': unknown blast gas tier ' + gasTier)
            var blast = new BlastProperty(temperature, gas)
            if (eut !== undefined) blast.setEUtOverride(eut)
            if (duration !== undefined) blast.setDurationOverride(duration)
            properties.setProperty(PropertyKey.BLAST, blast)
            return facade
          },
          durationOverride: function (duration) {
            var blast = properties.getProperty(PropertyKey.BLAST)
            if (blast == null) throw new Error(id + ': durationOverride requires blastTemp first')
            blast.setDurationOverride(duration)
            return facade
          },
          eutOverride: function (eut) {
            var blast = properties.getProperty(PropertyKey.BLAST)
            if (blast == null) throw new Error(id + ': eutOverride requires blastTemp first')
            blast.setEUtOverride(eut)
            return facade
          },
          cableProperties: function (voltage, amperage, loss, superconducting, criticalTemperature) {
            properties.ensureSet(PropertyKey.DUST)
            var wire = arguments.length < 4 ? new WireProperties(voltage, amperage, loss)
              : arguments.length < 5 ? new WireProperties(voltage, amperage, loss, superconducting)
              : new WireProperties(voltage, amperage, loss, superconducting, criticalTemperature)
            properties.setProperty(PropertyKey.WIRE, wire)
            return facade
          },
          fluidPipeProperties: function (temperature, throughput, gasProof, acidProof, cryoProof, plasmaProof) {
            var pipe = arguments.length === 3 ? new FluidPipeProperties(temperature, throughput, gasProof, false, false, false)
              : new FluidPipeProperties(temperature, throughput, gasProof, acidProof, cryoProof, plasmaProof)
            properties.setProperty(PropertyKey.FLUID_PIPE, pipe)
            return facade
          },
          itemPipeProperties: function (priority, stacksPerSecond) {
            properties.setProperty(PropertyKey.ITEM_PIPE, new ItemPipeProperties(priority, stacksPerSecond))
            return facade
          },
          rotorStats: function (power, efficiency, damage, durability) {
            properties.setProperty(PropertyKey.ROTOR, new RotorProperty(power, efficiency, damage, durability))
            return facade
          },
          toolStats: function (toolProperty) { properties.setProperty(PropertyKey.TOOL, toolProperty); return facade },
          addDefaultEnchant: function (name, level) { entry.enchants.push([name, level]); return facade },
          polarizesInto: function (target) { return relation(PropertyKey.INGOT, 'setMagneticMaterial', arguments) },
          arcSmeltInto: function (target) { return relation(PropertyKey.INGOT, 'setArcSmeltingInto', arguments) },
          macerateInto: function (target) { return relation(PropertyKey.INGOT, 'setMacerateInto', arguments) },
          ingotSmeltInto: function (target) { return relation(PropertyKey.INGOT, 'setSmeltingInto', arguments) },
          oreSmeltInto: function (target) { return relation(PropertyKey.ORE, 'setDirectSmeltResult', arguments) },
          addOreByproducts: function () { return relation(PropertyKey.ORE, 'addOreByProducts', arguments) },
          separatedInto: function () {
            if (values(arguments).length > 2) throw new Error(id + ': separatedInto supports at most two materials')
            return relation(PropertyKey.ORE, 'setSeparatedInto', arguments)
          },
          washedIn: function (target, amount) {
            property(PropertyKey.ORE)
            entry.relations.push(function () {
              var ore = properties.getProperty(PropertyKey.ORE)
              if (amount === undefined) ore.setWashedIn(resolveMaterial(target))
              else ore.setWashedIn(resolveMaterial(target), amount)
            })
            return facade
          }
        }
        return facade
      }
      function resolveComponents(entry) {
        if (entry.resolved) return
        if (entry.resolving) throw new Error('Cyclic native material composition: ' + entry.id)
        entry.resolving = true
        var stacks = []
        function appendComponent(target, amount) {
          if (typeof amount !== 'number' || !isFinite(amount) || amount <= 0 || Math.floor(amount) !== amount) {
            throw new Error(entry.id + ': component amount must be a positive whole number')
          }
          var component = resolveMaterial(target)
          var child = created[String(component.getResourceLocation())]
          if (child) resolveComponents(child)
          stacks.push(new MaterialStack(component, amount))
        }
        if (entry.components != null) {
          var input = entry.components, i
          for (i = 0; i < input.length; i++) {
            var value = input[i]
            if (value instanceof MaterialStack) {
              appendComponent(value.material(), Number(value.amount()))
            } else if (typeof value === 'string' && /^([1-9][0-9]*)x\s+(.+)$/.test(value)) {
              var match = /^([1-9][0-9]*)x\s+(.+)$/.exec(value)
              appendComponent(match[2], Number(match[1]))
            } else {
              if (i + 1 >= input.length) throw new Error(entry.id + ': use components("2x iron", "1x copper") or material/count pairs')
              appendComponent(value, input[++i])
            }
          }
          entry.material.setComponents(stacks)
        }
        if (entry.formula != null) entry.material.setFormula(entry.formula)
        entry.resolved = true
        entry.resolving = false
      }
      pending.forEach(function (callback) { callback(createMaterial) })
      entries.forEach(function (entry) {
        if (entry.element != null) {
          entry.material.getMaterialInfo().setElement(resolveElement(entry.element))
          // Recalculate the chemical formula now that the element is attached.
          entry.material.setComponents()
        }
      })
      entries.forEach(resolveComponents)
      entries.forEach(function (entry) {
        entry.relations.forEach(function (configure) { configure() })
        var props = entry.material.getProperties()
        if (entry.fluidBurnTime != null) {
          var fp = props.getProperty(PropertyKey.FLUID), applied = false
          if (fp != null) ['LIQUID', 'GAS', 'PLASMA'].forEach(function (name) {
            var builder = fp.getQueuedBuilder(FluidStorageKeys[name])
            if (builder != null) { builder.burnTime(entry.fluidBurnTime); applied = true }
          })
          if (!applied) throw new Error(entry.id + ': fluidBurnTime requires a generated fluid; an external fluid cannot be modified here')
        }
        entry.enchants.forEach(function (enchant) {
          var tools = props.getProperty(PropertyKey.TOOL)
          if (tools == null) throw new Error(entry.id + ': GT 7.0.2 default enchantments require toolStats(ToolProperty)')
          tools.addEnchantmentForTools(ResourceKey.create(Registries.ENCHANTMENT, ResourceLocation.parse(enchant[0])), enchant[1])
        })
      })
      entries.forEach(function (entry) {
        var material = entry.material
        if (material.getMaterialRGB() === -1) material.setMaterialARGB(0xFFFFFF)
        material.verifyMaterial()
        GTRegistries.register(GTRegistries.MATERIALS, ResourceLocation.parse(entry.id), material)
        entry.ignored.forEach(function (prefix) { prefix.setIgnored(material) })
      })
      pending = []
      finished = true
    })
    var elementEntries = []
  })
})()

