import React, {useState, createContext} from "react";

export const FiltersContext = createContext()

export function FiltersProvider(props) {
    const [selectedGeneration, setSelectedGeneration] = useState('kanto')
    const [selectedType, setType] = useState('')

    return (
        <FiltersContext.Provider value={{selectedGeneration, setSelectedGeneration, selectedType, setType}}>
            {props.children}
        </FiltersContext.Provider>
    )
}