import React, {useState, createContext} from "react";

const filtersInitialState = {
    type: false,
    id: true,
    aToZ: false,
    zToA: false
}

export function FiltersProvider(props) {
    const [selectedGeneration, setSelectedGeneration] = useState('kanto')
    const [selectedType, setType] = useState('')
    const [activeFilters, setActiveFilters] = useState(filtersInitialState)

    return (
        <FiltersContext.Provider value={{selectedGeneration, setSelectedGeneration, selectedType, setType, activeFilters, setActiveFilters}}>
            {props.children}
        </FiltersContext.Provider>
    )
}

export const FiltersContext = createContext()