const router = require('express').Router()
let Recipe = require('../../models/recipeModel')

/**
 * Router for finding all recipes,
 * one by id and for creating a recipe
 */
router.route('/')
.get(function(req, res) {
    Recipe.find(function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.json(docs)
        }
    })
})

router.route('/:id')
.get(function(req, res) {
    let id = req.params.id
    Recipe.findById(id, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
        res.json(docs)
        }
    })
})

router.post('/skapa', (req, res) => {
    let recipe = new Recipe(req.body)
    recipe.save((err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

// router.route('/:recipe_creator')
// .get(function(req, res) {
//     let creator = req.params.recipe_creator
//     Recipe.find(creator, function(err, docs) {
//         if (err) {
//             console.log(err)
//         } else {
//         res.json(docs)
//         }
//     })
// })


module.exports = router