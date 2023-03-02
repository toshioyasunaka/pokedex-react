import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios'

const OverviewCard = (props)=>  {
  const {pokemonName} = props
  const [pokemon, setPokemon] = useState({})

  const getPokemon = useCallback(async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`)
    setPokemon(response.data)
  }, [pokemonName])

  const getPokemonName = () => {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1)
  }

  const getPokemonSprite = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }

  const getPokemonText = () => {
    const text = pokemon.flavor_text_entries?.find((item) => {
      return item.language.name === 'en' && item.version.name === 'shield'
    })
    return text?.flavor_text
  }

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{objectFit: 'contain'}}
          component="img"
          height="200"
          image={getPokemonSprite()}
          alt={`${pokemonName} image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {getPokemonName()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {getPokemonText()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OverviewCard