import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import OverviewCard from "./OverviewCard"
import { FiltersContext } from '../data/Context';

const CardGrid = () => {
    const {selectedGeneration, selectedType, selectedSortBy, searchFieldValue} = useContext(FiltersContext)
    
    const [pokemons, setPokemons] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            const region = await (await axios.get(`https://pokeapi.co/api/v2/region/${selectedGeneration}`)).data
            const generation = await axios.get(region.main_generation.url)
            const pokemons = generation.data.pokemon_species

            setPokemons(pokemons)
        }

        getPokemons()
    }, [selectedGeneration, selectedType])

    useEffect(() => {
        const getPokemonData = async () => {
            const pokemonsData = await Promise.all(pokemons.map(async(pokemon) => {
                const pokemonIdNumber = pokemon.url.slice(42)
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdNumber}`)
                return response.data
            }))
    
            if(selectedType) {
                const filteredPokemons = pokemonsData.filter((pokemonData) => {
                    return pokemonData.types.map(type => type.type.name).includes(selectedType)
                })
                setPokemonsData(filteredPokemons)

                if(searchFieldValue) {
                    filterPokemonBySearchedName()
                }
            } else {
                setPokemonsData(pokemonsData)
            }

            if(searchFieldValue) {
                filterPokemonBySearchedName()
            }
        }
        
        getPokemonData()
    }, [pokemons, selectedGeneration, selectedType, searchFieldValue])

    const sortPokemonsBy = (a, b) => {
        if(selectedSortBy === 'id') return a.id - b.id
        if(selectedSortBy === 'name(A-Z)') return a.name.localeCompare(b.name)
        if(selectedSortBy === 'name(Z-A)') return b.name.localeCompare(a.name)
    }

    const filterPokemonBySearchedName = () => {
        const filteredPokemons = pokemonsData.filter(pokemonData => {
            return pokemonData.name.includes(searchFieldValue)
        })
        
        setPokemonsData(filteredPokemons)
    }

    return (
        <Grid container spacing={2} width='100%' justifyContent="center">
            {pokemonsData?.sort(sortPokemonsBy).map((pokemonData, index) => (
                <Grid xs={12} md={3} padding={3} key={index} >
                    <OverviewCard pokemonData={pokemonData} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGrid