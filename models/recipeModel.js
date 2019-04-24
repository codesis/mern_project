const mongoose = require('mongoose')

// schema for recipe
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    howTo: { type: String, required: true },
    image: { data: Buffer, type: String, required: true },
    nutrValue: {type: String, required: true},
    cat: { type: String, required: true }
})

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = Recipes