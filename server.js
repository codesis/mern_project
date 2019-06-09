const express = require('express')
const mongoose = require('./config/mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const nodemailer = require('nodemailer')
const recipes = require('./routes/api/recipes')
const users = require('./routes/api/users')
const path = require('path')

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
app.use('/', users)
app.use('/recept', recipes)

app.post('/kontakt', (req,res) => {
    let data = req.body
  
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.ADMINEMAIL,
      pass: process.env.ADMINPASS
    }
  })
  
  let mailOptions = {
    from: data.email,
    to: process.env.ADMINEMAIL,
    subject: 'Mail från Snällmat',
    html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
  }
  
  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close()
  })
  
  })

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Server started on ${port}`))