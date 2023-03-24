import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"
import { FiltersContext } from '../data/Context';
import { getLimitAndOffset } from '../modules/home/home.utils'

const CardGrid = () => {
    const {selectedGeneration, selectedType, activeFilters} = useContext(FiltersContext)
    
    const [pokemons, setPokemons] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])

    useEffect(() => {
        filtersCheck()
        getPokemons()
        // eslint-disable-next-line
    }, [selectedGeneration, selectedType])

    useEffect(() => {
        getPokemonData()
        // eslint-disable-next-line
    }, [pokemons, selectedGeneration, selectedType])

    const filtersCheck = () => {
        if(selectedType) {
            return activeFilters.type = true
        }
    }

    const getPokemons = async () => {
        const generation = getLimitAndOffset(selectedGeneration)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)
        const pokemons = response.data.results

        setPokemons(pokemons)
    }

    const getPokemonData = async () => {
        const pokemonsData = await Promise.all(pokemons.map(async(pokemon) => {
            const response = await axios.get(pokemon.url)
            return response.data
        }))

        if(activeFilters.type) {
            const filteredPokemons = pokemonsData.filter((pokemonData) => {
                return pokemonData.types.map(type => type.type.name).includes(selectedType)
            })
            setPokemonsData(filteredPokemons)
        } else {
            setPokemonsData(pokemonsData)
        }
    }

    return (
        <Grid container spacing={2} width='100%' justifyContent="center">
            {pokemonsData?.map((pokemonData, index) => (
                <Grid item xs={12} md={3} padding={3} key={index} >
                    <OverviewCard pokemonData={pokemonData} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid