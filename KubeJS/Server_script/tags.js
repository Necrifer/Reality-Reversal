//Do not touch priority value.
priority: 5
ServerEvents.tags('item', event => {
    event.remove('twilightforest:portal/activator', '#c:gems/diamond')
})
