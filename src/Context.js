import React from 'react'

export default React.createContext({
    folders: [],
    recipes: [],
    addFolder: () => { },
    addRecipe: () => { },
    deleteRecipe: () => { },
    updateRecipe: () => { },
})