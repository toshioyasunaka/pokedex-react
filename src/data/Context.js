import React, {useState, createContext} from "react";

export function FiltersProvider(props) {
    const [selectedGeneration, setSelectedGeneration] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedSortBy, setSelectedSortBy] = useState('id')
    const [searchFieldValue, setSearchFieldValue] = useState('')

    const onChangeGeneration = (newGeneration) => {
        setSelectedGeneration(newGeneration)
    }

    const onChangeType = (newType) => {
        setSelectedType(newType)
    }

    const onChangeSortBy = (newSortBy) => {
        setSelectedSortBy(newSortBy)
    }

    return (
        <FiltersContext.Provider
            value={{selectedGeneration, onChangeGeneration, selectedType, onChangeType, selectedSortBy, onChangeSortBy, searchFieldValue, setSearchFieldValue}}>
            {props.children}
        </FiltersContext.Provider>
    )
}

export const FiltersContext = createContext()