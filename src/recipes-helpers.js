

export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id === folderId)

export const findRecipe = (recipes = [], recipeId) => {
    let result = recipes

    if (recipeId) {
        result = []
        for (var i = 0; i < recipes.length; ++i) {
            let recipe = recipes[i]
            // var recipesId = recipe.id
            // var parsedrecipeId = parseInt(recipeId)
            if (recipe.id == recipeId)
                result.push(recipe)
        }
        //  result = notes.filter(note => note.folderid === folderId)}
    }

    return result[0]
}

export const getRecipesForFolder = (recipes = [], folderId) => {

    let result = recipes

    if (folderId) {
        result = []
        for (var i = 0; i < recipes.length; ++i) {
            let recipe = recipes[i]
            // var recipeFolderId = recipe.folderid
            // var folderid = parseInt(folderId)
            if (recipe.folderid == folderId)
                result.push(recipe)
        }
        //  result = notes.filter(note => note.folderid === folderId)}
    }
    return result
}

export const countRecipesForFolder = (recipes = [], folderId) =>
    recipes.filter(recipe => recipe.folderid === folderId).length
