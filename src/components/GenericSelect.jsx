import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {capitalizeFirstLetter} from '../modules/home/home.utils'

const GenericSelect = ({selectItems, value, title, onChange, minWidth}) => {
    const items = selectItems || []

    return (
        <Box sx={{ minWidth }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={title}
            onChange={onChange}
          >
            {items?.map((item) => {
              return (<MenuItem value={item} key={item}>{capitalizeFirstLetter(item)}</MenuItem>)
            })}
          </Select>
        </FormControl>
      </Box>
    )
}

export default GenericSelect