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

app.use((req, res, next) => {
    if (req.session.flash) {
        res.locals.flash = req.session.flash
        delete req.session.flash
    }
    if (req.session.signedin) {
        res.locals.signedin = req.session.signedin
    }
    next()
})

//routes
app.use('/recept', require('./routes/recipe'))
app.use('/register', require('./routes/register'))
app.use('/om', require('./routes/about'))
app.use('/kontakt', require('./routes/contact'))


app.listen(port, () => console.log(`Server started on ${port}`))