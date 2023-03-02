import axios from 'axios'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"

const CardGrid = () => {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        setPokemons(response.data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <Grid container spacing={2}>
            {pokemons.map((_, index) => (
                <Grid item xs={6} md={2} key={index}>
                    <OverviewCard pokemonName={pokemons[index].name} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid