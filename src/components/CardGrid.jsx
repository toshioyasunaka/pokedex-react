import axios from 'axios'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"

const CardGrid = () => {
    useEffect(() => {
        getPokemons()
    }, [])

    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
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