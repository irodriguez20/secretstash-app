

export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id === folderId)

export const findRecipe = (recipes = [], recipeId) => {
    let result = recipes

    if (recipeId) {
        result = []
        // eslint-disable-next-line
        for (var i = 0; i < recipes.length; ++i) {
            // eslint-disable-next-line
            let recipe = recipes[i]
            // eslint-disable-next-line
            if (recipe.id == recipeId)
                result.push(recipe)
        }
    }

    return result[0]
}

export const getRecipesForFolder = (recipes = [], folderId) => {

    let result = recipes

    if (folderId) {
        result = []
        // eslint-disable-next-line
        for (var i = 0; i < recipes.length; ++i) {
            // eslint-disable-next-line
            let recipe = recipes[i]
            // eslint-disable-next-line
            if (recipe.folderid == folderId)
                result.push(recipe)
        }
    }
    return result
}

export const countRecipesForFolder = (recipes = [], folderId) =>
    recipes.filter(recipe => recipe.folderid === folderId).length
