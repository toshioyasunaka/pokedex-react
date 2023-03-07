import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import {getChipColor, transformName} from '../modules/home/home.utils'

const TypeChip = (props) => {

    const {types} = props

    return (
        <Stack direction="row" spacing={1}>
            {types?.map((item, index) => {
                const type = item.type.name

                return (
                    <Chip
                        avatar={<Avatar sx={{ bgcolor: getChipColor(type) }} alt={`${type}`} src={`https://pokedex-react-mui.netlify.app/${type}.png`} />}
                        label={`${transformName(type)}`}
                        variant="Filled"
                        sx={{backgroundColor: `${getChipColor(type)}`}}
                        key={index}
                    />
                )
            })}
        </Stack>
    )
}

export default TypeChip