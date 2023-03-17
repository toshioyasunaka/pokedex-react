import * as React from 'react';
import {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import axios from 'axios'

import TypeChip from './TypeChip';
import {capitalizeFirstLetter, getPokemonBackground, filterByType} from '../modules/home/home.utils'
import { FiltersContext } from '../data/Context';
import If from './If';

const OverviewCard = (props)=>  {
  const {selectedType} = useContext(FiltersContext)

  const pokemonName = props.pokemon.name
  const pokemonUrl = props.pokemon.url
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    getPokemonData()
    // eslint-disable-next-line
  }, [props.pokemon, selectedType])

  const getPokemonData = async () => {
    const response = await axios.get(`${pokemonUrl}`)
    console.log(response.data)
    setPokemonData(response.data)
  }

  const getPokemonSprite = () => {
    if(pokemonData?.id === undefined) return
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`
  }

  return (
    <Card sx={{background: getPokemonBackground(pokemonData?.types), boxShadow: 5}}>
      <CardActionArea>
        {pokemonData ? 
          <Box sx={{position:'absolute', top:100, textAlign: 'center', width:'100%', fontSize:120, fontWeight: 'bold', opacity:0.2, letterSpacing:-5}}>
            #{pokemonData.id > 99 ? pokemonData.id : pokemonData.id > 9 ? '0' + pokemonData.id : '00' + pokemonData.id}
          </Box> :
          null
        }

        <CardMedia
          sx={{objectFit: 'contain', position:'relative'}}
          component="img"
          height="200"
          image={getPokemonSprite()}
          alt={`${pokemonName} image`}
          title={`${capitalizeFirstLetter(pokemonName)}`}
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