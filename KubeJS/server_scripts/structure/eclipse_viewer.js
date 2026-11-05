MMCREvents.server(event => {
    const api = event.getAPI()
    // Layers are written bottom to top; each string is one row, front to back.
    // MMCR's pattern() takes front/back slices ([Z][Y][X], first string = lowest Y), so transpose.
    const layers = [
        ["AA  B  AA", "ADXZEZXDA", " XFFFFFX ", " ZFGGGFZ ", "BEFGGGFEB", " ZFGGGFZ ", " XFFFFFX ", "ADXZEZXDA", "AA  B  AA"],
        ["H   I   H", "         ", "  J   J  ", "    K    ", "I  KLK  I", "    K    ", "  J   J  ", "         ", "H   I   H"],
        ["M       M", "         ", "         ", "         ", "    C    ", "         ", "         ", "         ", "M       M"],
        ["N       N", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "N       N"],
        ["O       O", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "O       O"]
    ]
    const slices = layers[0].map((_, z) => layers.map(layer => layer[z]))
    const structure = event.createStructure("mmcr:eclipse_viewer")
        .patternAll(slices)
        .set('X', api.block('divinerpg:eden_planks'))
        .set('Z', api.anyOf(api.anyOfItemInput(),api.anyOfItemOutput(),api.anyOfFluidInput(), api.anyOfFluidOutput()))
        .set('A', api.block('astralsorcery:marble_engraved'))
        .set('B', api.block('divinerpg:divine_moss_stone'))
        .set('D', api.block('divinerpg:eden_bricks'))
        .set('E', api.block('jaopca:storage_blocks.starmetal'))
        .set('F', api.block('astralsorcery:sooty_marble_bricks'))
        .set('G', api.block('divinerpg:twilight_stone'))
        .set('H', api.state('astralsorcery:marble_pillar[pillartype=bottom,waterlogged=false]'))
        .set('I', api.block('divinerpg:divine_rock'))
        .set('J', api.block('astralsorcery:lightwell'))
        .set('K', api.block('appliedas:lumen_crystal_block'))
        .set('L', api.state('astralsorcery:liquid_starlight[level=0]'))
        .set('M', api.state('astralsorcery:marble_pillar[pillartype=middle,waterlogged=false]'))
        .set('N', api.state('astralsorcery:marble_pillar[pillartype=top,waterlogged=false]'))
        .set('O', api.block('divinerpg:eden_block'))
        .controller('C')
        .build()
})
