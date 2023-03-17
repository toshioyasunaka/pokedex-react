import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {capitalizeFirstLetter} from '../modules/home/home.utils'

const RegionSelect = (props) => {
    const selectItems = props.selectItems || []

    return (
        <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.title}
            onChange={props.onChange}
          >
            {selectItems?.map((item) => {
              return (<MenuItem value={item} key={item}>{capitalizeFirstLetter(item)}</MenuItem>)
            })}
          </Select>
        </FormControl>
      </Box>
    )
}

export default RegionSelect