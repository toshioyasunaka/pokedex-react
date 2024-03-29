import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

import TypeChip from './TypeChip';
import {capitalizeFirstLetter, getPokemonBackground} from '../modules/home/home.utils'

const sxBox = {
  position: 'absolute',
  top: 80,
  textAlign: 'center',
  width: '100%',
  fontSize: 140,
  fontWeight: 'bold',
  opacity: 0.2,
  letterSpacing: -5
}

const OverviewCard = (props)=>  {
  const {name, id, types} = props.pokemonData

  const getPokemonSprite = () => {
    if(!id) return
    // console.log(pokemonData).sprites.other.official-artwork.front_default
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  return (
    <Card sx={{background: getPokemonBackground(types), boxShadow: 5}}>
      <CardActionArea>
        <Box sx={sxBox}>
          #{id > 99 ? id : id > 9 ? '0' + id : '00' + id}
        </Box>

        <CardMedia
          sx={{objectFit: 'contain', position:'relative'}}
          component="img"
          height="200"
          image={getPokemonSprite()}
          alt={`${name} image`}
          title={`${capitalizeFirstLetter(name)}`}
        />

        <CardContent>
          <Stack alignItems={'center'}>
            <Typography gutterBottom variant="h5" component="div">
              {capitalizeFirstLetter(name)}
            </Typography>
            <TypeChip types={types} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OverviewCard