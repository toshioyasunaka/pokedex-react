import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import axios from 'axios'

import TypeChip from './TypeChip';
import {capitalizeFirstLetter, getPokemonBackground} from '../modules/home/home.utils'

const OverviewCard = (props)=>  {
  useEffect(() => {
    getPokemonInfo()
    // eslint-disable-next-line
  }, [])

  const pokemonName = props.pokemon.name
  const pokemonUrl = props.pokemon.url
  const [pokemonData, setPokemonData] = useState(null)

  const getPokemonInfo = async () => {
    const response = await axios.get(`${pokemonUrl}`)
    setPokemonData(response.data)
  }

  const getPokemonSprite = () => {
    if(pokemonData?.id === undefined) return
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`
  }

  return (
    <Card sx={{background: getPokemonBackground(pokemonData?.types)}}>
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
              {capitalizeFirstLetter(pokemonName)}
            </Typography>
            <TypeChip types={pokemonData?.types} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OverviewCard