import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import axios from 'axios'

import TypeChip from './TypeChip';

const OverviewCard = (props)=>  {
  const pokemonName = props.pokemon.name
  const pokemonUrl = props.pokemon.url
  const [pokemonData, setPokemonData] = useState({})

  const getPokemonInfo = useCallback(async () => {
    const response = await axios.get(`${pokemonUrl}`)
    setPokemonData(response.data)
  }, [pokemonUrl])

  const transformPokemonName = () => {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1)
  }

  const getPokemonSprite = () => {
    // return pokemon.sprites.other.official-artwork.front_default
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
  }

  const getPokemonText = () => {
    // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`)
    const text = pokemonData.flavor_text_entries?.findLast((item) => {
      return item.language.name === 'en'
    })
    return text?.flavor_text
  }

  useEffect(() => {
    getPokemonInfo()
  }, [getPokemonInfo])

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          sx={{objectFit: 'contain'}}
          component="img"
          height="200"
          image={getPokemonSprite()}
          alt={`${pokemonName} image`}
        />
        <CardContent>
          <Stack alignItems={'center'}>
            <Typography gutterBottom variant="h5" component="div">
              {transformPokemonName()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {getPokemonText()}
            </Typography>
            <TypeChip pokemonData={pokemonData} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OverviewCard