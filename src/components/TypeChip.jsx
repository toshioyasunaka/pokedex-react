import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TypeChip = (props) => {

    const {pokemonData} = props

    const transformPokemonName = (type) => {
        return type[0].toUpperCase() + type.slice(1)
    }

    const getChipColor = (type) => {
        switch (type) {
            case 'grass':
                return '#3E9709'
            case 'fire':
                return '#F67F0B'
            case 'water':
                return '#0A7ABC'
            case 'flying':
                return '#5EB9B2'
            case 'bug':
                return '#D9FE9E'
            case 'poison':
                return '#A819D7'
            case 'electric':
                return '#F7FF85'
            case 'ground':
                return '#E1D158'
            case 'fighting':
                return '#E81319'
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
                return '#FDD1E0'
            default:
                return '#EAEADE'
        } 
    }

    return (
        <Stack direction="row" spacing={1}>
            {pokemonData.types?.map((item, index) => {
                const type = item.type.name

                return (
                    <Chip
                        avatar={<Avatar alt={`${type} type`} src="/static/images/avatar/1.jpg" />}
                        label={`${transformPokemonName(type)}`}
                        variant="Filled"
                        sx={{backgroundColor: `${getChipColor(type)}`}}
                        key={index}
                    />
                )
            })}
        </Stack>
    )
}

export default TypeChip