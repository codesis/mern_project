const recipes = require('../models/recipeModel')

const recipeController = {}

recipeController.index = async (req, res, next) => {
    try {
        const locals = {
            recipes: (await recipes.find({}))
            .map(recipe => ({
                title: recipe.title,
                ingredients: recipe.ingredients,
                howTo: recipe.howTo,
                image: recipe.image,
                nutrValue: recipe.nutrValue,
                kat: recipe.kat
            }))
        }
        res.render('', locals)
    } catch (error) {
        next(error)
    }
}
module.exports = recipeController