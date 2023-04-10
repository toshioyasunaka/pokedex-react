import React, {useState, createContext} from "react";

export function FiltersProvider(props) {
    const [selectedGeneration, setSelectedGeneration] = useState('kanto')
    const [selectedType, setSelectedType] = useState('')
    const [selectedSortBy, setSelectedSortBy] = useState('id')
    const [searchFieldValue, setSearchFieldValue] = useState('')

    return (
        <FiltersContext.Provider
            value={{selectedGeneration, setSelectedGeneration, selectedType, setSelectedType, selectedSortBy, setSelectedSortBy, searchFieldValue, setSearchFieldValue}}>
            {props.children}
        </FiltersContext.Provider>
    )
}

export const FiltersContext = createContext()