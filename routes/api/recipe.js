const express = require('express')
const router = express.Router()

const Recipe = require('../../models/recipeModel')

router.get('/', (req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
})

router.post('/', (req, res) => {
    const newRecipe = new Recipe({
        title: req.body.title
    })
    newRecipe.save().then(recipes => res.json(recipes))
})

module.exports = router