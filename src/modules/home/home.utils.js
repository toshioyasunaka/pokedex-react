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