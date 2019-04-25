const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema for recipe
let Recipe = new Schema({
    recipe_title: { type: String, required: true },
    recipe_ingredients: { type: String },
    recipe_howTo: { type: String, required: true },
    recipe_image: { data: Buffer, type: String },
    recipe_nutrValue: { type: String, required: true },
    recipe_cat: { type: String, required: true }
})

const Recipes = mongoose.model('Recipes', Recipe)

module.exports = Recipes