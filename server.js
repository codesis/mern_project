const express = require('express')
const mongoose = require('./config/mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const recipeRoutes = express.Router()
const users = require('./routes/api/users')
const path = require('path')

let Recipe = require('./models/recipeModel')

const app = express()
const port = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.json({limit: '10mb', extended: true}))

mongoose.connect().catch(error => {
    console.error(error)
    process.exit(1)
})
// passport middleware
app.use(passport.initialize())
// passport config
require('./config/passport')(passport)
// routes
app.use('/api/users', users)

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Server started on ${port}`))