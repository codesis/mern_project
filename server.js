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

mongoose.connect().catch(error => {
    console.error(error)
    process.exit(1)
})


recipeRoutes.route('/recept')
.get(function(req, res) {
    Recipe.find(function(err, recipes) {
        if (err) {
            console.log(err)
        } else {
            res.json(recipes)
        }
    })
})

recipeRoutes.route('/recept/:cat')
.get(function(req, res) {
    let cat = req.params.cat
    Recipe.findByCat(cat, function(err, recipes) {
        res.json(recipes)
    })
})

recipeRoutes.route('/recept/:id')
.get(function(req, res) {
    let id = req.params.id
    Recipe.findById(id, function(err, recipes) {
        res.json(recipes)
    })
})


app.post('/skapa', (req, res) => {
    let recipe = new Recipe(req.body)
    recipe.save((err, doc) => {
        if (err) {
            res.send(err)
        } else {
            res.send(doc)
        }
    })
})

app.use('/recept', recipeRoutes)

app.listen(port, () => console.log(`Server started on ${port}`))