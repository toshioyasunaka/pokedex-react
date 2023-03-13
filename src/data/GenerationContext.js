import React from "react";

export const generations = [
    {generation: 1, limit: 151, offset: 0},
    {generation: 2, limit: 100, offset: 151},
    {generation: 3, limit: 135, offset: 251},
    {generation: 4, limit: 108, offset: 386},
    {generation: 5, limit: 155, offset: 494},
    {generation: 6, limit: 72, offset: 649},
    {generation: 7, limit: 88, offset: 721},
    {generation: 8, limit: 96, offset: 809},
    {generation: 9, limit: 105, offset: 905},
]

export default GenerationContext = React.createContext(generations)