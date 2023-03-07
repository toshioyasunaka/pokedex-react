export const getChipColor = (type) => {
    switch (type) {
        case 'grass':
            return '#3E9709'
        case 'fire':
            return '#F67F0B'
        case 'water':
            return '#36AFF6'
        case 'flying':
            return '#5EB9B2'
        case 'bug':
            return '#91BA2E'
        case 'poison':
            return '#CA72EC'
        case 'electric':
            return '#fff311'
        case 'ground':
            return '#E1D158'
        case 'fighting':
            return '#D36063'
        case 'psychic':
            return '#F55792'
        case 'rock':
            return '#94834F'
        case 'ice':
            return '#66D1E5'
        case 'ghost':
            return '#BD98CB'
        case 'dragon':
            return '#D6B1FE'
        case 'dark':
            return '#916852'
        case 'steel':
            return '#BBC5C4'
        case 'fairy':
            return '#F87EA7'
        default:
            return '#ACA974'
    }
}

export const transformName = (type) => {
    return type[0].toUpperCase() + type.slice(1)
}

export const cardBackgroundColor = (types) => {
    const colors = []
    switch (types[0].type.name) {
        case 'grass':
            colors.push('#3E9709')
            break
        case 'fire':
            colors.push('#F67F0B') 
            break
        case 'water':
            colors.push('#36AFF6') 
            break
        case 'flying':
            colors.push('#5EB9B2') 
            break
        case 'bug':
            colors.push('#91BA2E') 
            break
        case 'poison':
            colors.push('#CA72EC') 
            break
        case 'electric':
            colors.push('#fff311') 
            break
        case 'ground':
            colors.push('#E1D158') 
            break
        case 'fighting':
            colors.push('#D36063') 
            break
        case 'psychic':
            colors.push('#F55792') 
            break
        case 'rock':
            colors.push('#94834F') 
            break
        case 'ice':
            colors.push('#66D1E5') 
            break
        case 'ghost':
            colors.push('#BD98CB') 
            break
        case 'dragon':
            colors.push('#D6B1FE') 
            break
        case 'dark':
            colors.push('#916852') 
            break
        case 'steel':
            colors.push('#BBC5C4') 
            break
        case 'fairy':
            colors.push('#F87EA7') 
            break
        default:
            colors.push('#ACA974') 
            break
    }

    if(types.length === 2) {
        switch (types[1].type.name) {
            case 'grass':
                colors.push('#3E9709')
                break
            case 'fire':
                colors.push('#F67F0B') 
                break
            case 'water':
                colors.push('#36AFF6') 
                break
            case 'flying':
                colors.push('#5EB9B2') 
                break
            case 'bug':
                colors.push('#91BA2E') 
                break
            case 'poison':
                colors.push('#CA72EC') 
                break
            case 'electric':
                colors.push('#fff311') 
                break
            case 'ground':
                colors.push('#E1D158') 
                break
            case 'fighting':
                colors.push('#D36063') 
                break
            case 'psychic':
                colors.push('#F55792') 
                break
            case 'rock':
                colors.push('#94834F') 
                break
            case 'ice':
                colors.push('#66D1E5') 
                break
            case 'ghost':
                colors.push('#BD98CB') 
                break
            case 'dragon':
                colors.push('#D6B1FE') 
                break
            case 'dark':
                colors.push('#916852') 
                break
            case 'steel':
                colors.push('#BBC5C4') 
                break
            case 'fairy':
                colors.push('#F87EA7') 
                break
            default:
                colors.push('#ACA974') 
                break
        }
    }

    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors.length === 2 ? colors[1] : colors[0]} 100%);`
}