const express = require('express')
const mongoose = require('./config/mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT
app.use(helmet())

mongoose.connect().catch(error => {
    console.error(error)
    process.exit(1)
})

app.use('/recept', require('./routes/recipeRouter'))


app.listen(port, () => console.log(`Server started on ${port}`))