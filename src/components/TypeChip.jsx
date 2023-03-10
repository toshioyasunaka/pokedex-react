import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import {getChipColor, capitalizeFirstLetter} from '../modules/home/home.utils'

const TypeChip = (props) => {

    const {types} = props

    return (
        <Stack direction="row" spacing={1}>
            {types?.map((item, index) => {
                const type = item.type.name

                return (
                    <Chip
                        avatar={<Avatar sx={{ bgcolor: getChipColor(type) }} alt={`${type}`} src={process.env.PUBLIC_URL + `types/${type}.png`} />}
                        label={`${capitalizeFirstLetter(type)}`}
                        variant="Filled"
                        sx={{bgcolor: `${getChipColor(type)}`, color: 'white', boxShadow: 5}}
                        key={index}
                        title={capitalizeFirstLetter(type)}
                    />
                )
            })}
        </Stack>
    )
}

export default TypeChip