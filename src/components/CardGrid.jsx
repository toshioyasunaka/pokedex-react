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
    const [pokemonsData, setPokemonsData] = useState([])

    const getPokemons = async () => {
        const generation = getLimitAndOffset(selectedGeneration)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)

        setPokemons(response.data.results)
        getPokemonData()
    }

    const getPokemonData = async () => {
        const responses = await Promise.all(pokemons.map(async(pokemon) => {
            const response = await axios.get(pokemon.url)
            return response.data
        }))
 
        console.log(responses)
        setPokemonsData(responses)
    }

    return (
        <Grid container spacing={2}>
            {pokemonsData?.map((pokemonData, index) => (
                <Grid item xs={12} md={3} padding={3} key={index} >
                    <OverviewCard pokemonData={pokemonData} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid