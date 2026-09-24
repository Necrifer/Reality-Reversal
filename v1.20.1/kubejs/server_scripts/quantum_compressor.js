ServerEvents.recipes(event => {
// event.recipes.extendedcrafting.compressor(output, catalyst, input, amount, power).powerRate(2000);
    event.recipes.extendedcrafting.compressor("extendedcrafting:the_ultimate_block", "tinkers_advanced:neutronite_ingot", "extendedcrafting:ultimate_singularity", 1000000, 300000000).powerRate(2000);
})
