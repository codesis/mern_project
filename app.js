'use strict'

const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const session = require('express-session')
const logger = require('morgan')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 3000

// ---------CONFIGURATIONS------------
app.use(helmet())
// engine setup
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
// additional middleware
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '/public/')))
// setup session
app.use(session({
  name: 'change this',
  secret: 'change this',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 3600000 // 1h
  }
}))
// routes
app.use('/', require('./routes/home.js'))
// listen
app.listen(port, () => console.log('Up and running at localhost:3000 \nCtrl+c to terminate'))
