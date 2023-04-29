import React, {useState, useContext, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios'

import GenericSelect from './GenericSelect'
import {FiltersContext} from '../data/Context'
import TextField from '@mui/material/TextField';

const Inputs = () => {

    const {selectedGeneration, onChangeGeneration, selectedType, onChangeType, selectedSortBy, onChangeSortBy, searchFieldValue, setSearchFieldValue} = useContext(FiltersContext)

    const sortBy = ['id', 'name(A-Z)', 'name(Z-A)']
    const [types, setTypes] = useState([])
    const [generations, setGenerations] = useState([])

    const getTypes = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`)
        const typesAndUrl = response.data.results

        setTypes(typesAndUrl.map(type => type.name))
    }

    const getGenerations = async () => {
        const response = (await axios.get('https://pokeapi.co/api/v2/generation')).data.results
        const generations = await Promise.all(response.map(async(generation) => {
            const response = await axios.get(generation.url)
            return response.data.main_region.name
        }))

        setGenerations(generations)
    }

    const clearFilters = () => {
        onChangeType('')
        onChangeSortBy('id')
        setSearchFieldValue('')
    }

    useEffect(() => {
        getTypes()
        getGenerations()
    }, [])

    return (
        <Stack className='inputs' direction='row' spacing={2} >
            <GenericSelect 
                onChange={(event) => onChangeGeneration(event.target.value)}
                value={selectedGeneration}
                title='Generation'
                selectItems={generations}
                minWidth={150}
            />

            <GenericSelect
                onChange={event => onChangeType(event.target.value)}
                value={selectedType}
                title='Type'      
                selectItems={types}
                minWidth={150}
            />

            <GenericSelect
                onChange={event => onChangeSortBy(event.target.value)}
                value={selectedSortBy}
                title='Sort By'
                selectItems={sortBy}
                minWidth={150}
            />

            <TextField 
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={searchFieldValue}
                onChange={e => setSearchFieldValue(e.target.value)} 
            />

            <Button variant="contained" color='error' onClick={clearFilters}>
                <HighlightOffIcon />
            </Button>
        </Stack>
    )
}

export default Inputs