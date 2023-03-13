import React from 'react'
import axios from 'axios'

import GenerationSelect from './GenerationSelect'

const Form = () => {
    const [generation, setGeneration] = React.useState('')
    const generations = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea']
    
    const getTypes = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`)
        const typesAndUrl = response.data.results

        // let types = []
        // typesAndUrl.map(type => {
        //     types.push(type.name)
        // })
        // return types
    }

    const types = getTypes()

    const onChange = (event) => {
        setGeneration(event.target.value);
    }

    return (
        <div className='form'>
            <GenerationSelect 
                onChange={onChange}
                generation={generation}
                title='Generation'          
                selectItems={generations}
            />

            <GenerationSelect 
                onChange={onChange}
                generation={generation}
                title='Generation'      
                // selectItems={types}
            />
        </div>
    )
}

export default Form