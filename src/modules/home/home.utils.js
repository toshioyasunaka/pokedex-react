export const getChipColor = (type) => {
    switch (type) {
        case 'grass':
            return '#3E9709'
        case 'fire':
            return '#F67F0B'
        case 'water':
            return '#2496d8'
        case 'flying':
            return '#5EB9B2'
        case 'bug':
            return '#91BA2E'
        case 'poison':
            return '#A33EA1'
        case 'electric':
            return '#e8bf2c'
        case 'ground':
            return '#d3a528'
        case 'fighting':
            return '#C33027'
        case 'psychic':
            return '#f95281'
        case 'rock':
            return '#94834F'
        case 'ice':
            return '#66D1E5'
        case 'ghost':
            return '#735699'
        case 'dragon':
            return '#8D62F9'
        case 'dark':
            return '#916852'
        case 'steel':
            return '#BBC5C4'
        case 'fairy':
            return '#F55792'
        default:
            return '#ACA974'
    }
}

export const capitalizeFirstLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1)
}

export const getPokemonBackground = (types) => {
    if(types === undefined) return

    const colors = []
    switch (types[0].type.name) {
        case 'grass':
            colors.push('#93D071')
            break
        case 'fire':
            colors.push('#EE9B5C') 
            break
        case 'water':
            colors.push('#87A8F1') 
            break
        case 'flying':
            colors.push('#8FA9DE') 
            break
        case 'bug':
            colors.push('#B8C652') 
            break
        case 'poison':
            colors.push('#B36AB1') 
            break
        case 'electric':
            colors.push('#e3e570') 
            break
        case 'ground':
            colors.push('#b29d63')
            break
        case 'fighting':
            colors.push('#D36063') 
            break
        case 'psychic':
            colors.push('#f799b3') 
            break
        case 'rock':
            colors.push('#B9A338') 
            break
        case 'ice':
            colors.push('#B2E4E1') 
            break
        case 'ghost':
            colors.push('#BD98CB') 
            break
        case 'dragon':
            colors.push('#5962AA') 
            break
        case 'dark':
            colors.push('#937A6C') 
            break
        case 'steel':
            colors.push('#C7C6D7') 
            break
        case 'fairy':
            colors.push('#D985AF') 
            break
        default:
            colors.push('#BAB999') 
            break
    }

    if(types.length === 2) {
        switch (types[1].type.name) {
            case 'grass':
                colors.push('#93D071')
                break
            case 'fire':
                colors.push('#EE9B5C') 
                break
            case 'water':
                colors.push('#87A8F1') 
                break
            case 'flying':
                colors.push('#8FA9DE') 
                break
            case 'bug':
                colors.push('#B8C652') 
                break
            case 'poison':
                colors.push('#B36AB1') 
                break
            case 'electric':
                colors.push('#e3e570') 
                break
            case 'ground':
                colors.push('#b29d63') 
                break
            case 'fighting':
                colors.push('#D36063') 
                break
            case 'psychic':
                colors.push('#f799b3') 
                break
            case 'rock':
                colors.push('#B9A338') 
                break
            case 'ice':
                colors.push('#B2E4E1') 
                break
            case 'ghost':
                colors.push('#BD98CB') 
                break
            case 'dragon':
                colors.push('#5962AA') 
                break
            case 'dark':
                colors.push('#937A6C') 
                break
            case 'steel':
                colors.push('#C7C6D7') 
                break
            case 'fairy':
                colors.push('#D985AF') 
                break
            default:
                colors.push('#BAB999') 
                break
        }
    }

    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors.length === 2 ? colors[1] : colors[0]} 100%);`
}

export const filterByType = (selectedType, pokemonData) => {
    if(!selectedType) return
    return pokemonData.types.map(type => type.type.name.includes(selectedType))
}