import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegionSelect = () => {
    const [generation, setGeneration] = React.useState('')

    const handleChange = (event) => {
        setGeneration(event.target.value);
    }

    return (
        <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Generation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={generation}
            label="Generation"
            onChange={handleChange}
          >
            <MenuItem value={1}>Kanto</MenuItem>
            <MenuItem value={2}>Johto</MenuItem>
            <MenuItem value={3}>Hoenn</MenuItem>
            <MenuItem value={4}>Sinnoh</MenuItem>
            <MenuItem value={5}>Unova</MenuItem>
            <MenuItem value={6}>Kalos</MenuItem>
            <MenuItem value={7}>Alola</MenuItem>
            <MenuItem value={8}>Galar</MenuItem>
            <MenuItem value={9}>Paldea</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
}

export default RegionSelect