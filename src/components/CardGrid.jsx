import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"
import { FiltersContext } from '../data/Context';
import { getLimitAndOffset } from '../modules/home/home.utils'

const CardGrid = () => {
    const {selectedGeneration} = useContext(FiltersContext)

    useEffect(() => {
        getPokemons()
    }, [selectedGeneration])

    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        const generation = getLimitAndOffset(selectedGeneration)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)
        setPokemons(response.data.results)
    }

    return (
        <Grid container spacing={2}>
            {pokemons.map((pokemon, index) => (
                <Grid item xs={12} md={3} padding={3} key={index} >
                    <OverviewCard pokemon={pokemon} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid