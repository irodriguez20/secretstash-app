

export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id === folderId)

export const findRecipe = (recipes = [], recipeId) => {
    let result = recipes

    if (recipeId) {
        result = []
        for (var i = 0; i < recipes.length; ++i) {
            let recipe = recipes[i]
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
        for (var i = 0; i < recipes.length; ++i) {
            let recipe = recipes[i]
            if (recipe.folderid == folderId)
                result.push(recipe)
        }
    }
    return result
}

export const countRecipesForFolder = (recipes = [], folderId) =>
    recipes.filter(recipe => recipe.folderid === folderId).length
