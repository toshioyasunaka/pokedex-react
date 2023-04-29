export const getChipColor = (type) => {
    if(type === 'grass') return '#3E9709'
    if(type === 'fire') return '#F67F0B'
    if(type === 'water') return '#2496d8'
    if(type === 'flying') return '#5EB9B2'
    if(type === 'bug') return '#91BA2E'
    if(type === 'poison') return '#A33EA1'
    if(type === 'electric') return '#e8bf2c'
    if(type === 'ground') return '#d3a528'
    if(type === 'fighting') return '#C33027'
    if(type === 'psychic') return '#f95281'
    if(type === 'rock') return '#94834F'
    if(type === 'ice') return '#66D1E5'
    if(type === 'ghost') return '#735699'
    if(type === 'dragon') return '#8D62F9'
    if(type === 'dark') return '#916852'
    if(type === 'steel') return '#BBC5C4'
    if(type === 'fairy') return '#F55792'
    if(type === 'normal') return '#ACA974'
}

export const getPokemonBackground = (types) => {
    if(types === undefined) return

    const getBgColor = (type) => {
        if(type === 'grass') return '#93D071'
        if(type === 'fire') return '#EE9B5C'
        if(type === 'water') return '#87A8F1'
        if(type === 'flying') return '#8FA9DE'
        if(type === 'bug') return '#B8C652'
        if(type === 'poison') return '#B36AB1'
        if(type === 'electric') return '#e3e570'
        if(type === 'ground') return '#b29d63'
        if(type === 'fighting') return '#D36063'
        if(type === 'psychic') return '#f799b3'
        if(type === 'rock') return '#B9A338'
        if(type === 'ice') return '#B2E4E1'
        if(type === 'ghost') return '#BD98CB'
        if(type === 'dragon') return '#5962AA'
        if(type === 'dark') return '#937A6C'
        if(type === 'steel') return '#C7C6D7'
        if(type === 'fairy') return '#D985AF'
        if(type === 'normal') return '#BAB999'
    }

    const colors = types.map((type) => {
        return getBgColor(type.type.name)
    })

    return `linear-gradient(135deg, ${colors[0]} 20%, ${colors.length === 2 ? colors[1] : colors[0]} 80%);`
}

export const capitalizeFirstLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1)
}

export const filterByType = (selectedType, pokemonData) => {
    if(!selectedType) return
    return pokemonData.types.map(type => type.type.name.includes(selectedType))
}