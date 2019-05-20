const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema for recipe
let Recipe = new Schema({
    recipe_title: { type: String, required: true },
    recipe_ingredients: { type: [], required: true },
    recipe_howTo: { type: String, required: true },
    recipe_nutrValue: { type: [], required: true },
    recipe_cat: { type: String, required: true }
})

const Recipes = mongoose.model('Recipes', Recipe)

module.exports = Recipes