import axios from 'axios'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"

const CardGrid = () => {
    const [pokemons, setPokemons] = useState([])

    const getPokemon = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        setPokemons(response.data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <OverviewCard pokemons={pokemons} />
            </Grid>
            <Grid item xs={6} md={3}>
                <OverviewCard />
            </Grid>
            <Grid item xs={6} md={3}>
                <OverviewCard />
            </Grid>
            <Grid item xs={6} md={3}>
                <OverviewCard />
            </Grid>
        </Grid>
    )
}

export default CardGrid