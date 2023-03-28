import React, {useState, useContext, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import axios from 'axios'

import GenericSelect from './GenericSelect'
import {FiltersContext} from '../data/Context'

const Inputs = () => {

    const {selectedGeneration, setSelectedGeneration, selectedType, setSelectedType, selectedSortBy, setSelectedSortBy} = useContext(FiltersContext)

    const generations = ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'paldea']
    const sortBy = ['id', 'name(A-Z)', 'name(Z-A)']
    const [types, setTypes] = useState([])

    const getTypes = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`)
        const typesAndUrl = response.data.results

        setTypes(typesAndUrl.map(type => type.name))
    }

    useEffect(() => {
        getTypes()
    }, [])

    return (
        <Stack className='inputs' direction='row' spacing={2} >
            <GenericSelect 
                onChange={(event) => setSelectedGeneration(event.target.value)}
                value={selectedGeneration}
                title='Generation'
                selectItems={generations}
            />

            <GenericSelect
                onChange={event => setSelectedType(event.target.value)}
                value={selectedType}
                title='Types'      
                selectItems={types}
            />

            <GenericSelect
                onChange={event => setSelectedSortBy(event.target.value)}
                value={selectedSortBy}
                title='Sort By'
                selectItems={sortBy}
            />
        </Stack>
    )
}

export default Inputs