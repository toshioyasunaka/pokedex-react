import React, {useState} from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';

import GenericSelect from './GenericSelect'

const Inputs = () => {
    const [value, setValue] = useState('')
    const generations = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea']
    const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
    
    // const getTypes = async () => {
    //     const response = await axios.get(`https://pokeapi.co/api/v2/type`)
    //     const typesAndUrl = response.data.results

    //     let types = []
    //     typesAndUrl.map(type => {
    //         types.push(type.name)
    //     })
    //     return types
    // }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Stack className='inputs' direction='row' spacing={2} >
            <GenericSelect 
                onChange={onChange}
                value={value}
                title='Generation'          
                selectItems={generations}
            />

            <GenericSelect 
                onChange={onChange}
                value={value}
                title='Types'      
                selectItems={types}
                // selectItems={getTypes()}
            />
        </Stack>
    )
}

export default Inputs