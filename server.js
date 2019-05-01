const express = require('express')
const mongoose = require('./config/mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const recipeRoutes = express.Router()

let Recipe = require('./models/recipeModel')

const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect().catch(error => {
    console.error(error)
    process.exit(1)
})


recipeRoutes.route('/')
.get(function(req, res) {
    Recipe.find(function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.json(docs)
        }
    })
})

recipeRoutes.route('/frukost')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Frukost' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})
recipeRoutes.route('/lunch')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Lunch' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})

recipeRoutes.route('/middag')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Middag' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})
recipeRoutes.route('/dessert')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Dessert' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})
recipeRoutes.route('/barnfavoriter')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Barnfavoriter' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})
recipeRoutes.route('/special')
.get(function(req, res) {
    Recipe.find({ recipe_cat: 'Special' }, function(err, recipe) {
        if (err) {
            console.error(err)
        } else {
        res.json(recipe)
        }
    })
})


recipeRoutes.route('/:id')
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

// recipeRoutes.route('/uppdatera/:id')
// .post((req, res) => {
//     if (!recipe)
//     res.status(404).send('receptet kan ej hittas')
//     else
//     recipe.recipe_title = req.body.recipe_title
//     recipe.recipe_image = req.body.recipe_image
//     recipe.recipe_howTo = req.body.recipe_howTo
//     recipe.recipe_ingredients = req.body.recipe_ingredients
//     recipe.recipe_nutrValue = req.body.recipe_nutrValue
//     recipe.recipe_cat = req.body.recipe_cat

//     recipe.save().then(recipe => {
//         res.json('Receptet uppdaterades')
//     })
//     .catch(err => {
//         res.status(400).send('Receptet kan ej uppdateras')
//     })
// })

app.post('/skapa', (req, res) => {
    let recipe = new Recipe(req.body)
    recipe.save((err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

app.use('/recept', recipeRoutes)

app.listen(port, () => console.log(`Server started on ${port}`))