const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')
// Load User model
const User = require('../../models/userModel')
// @route POST /registrera
// @desc Register user
// @access Public
router.post('/registrera', (req, res) => {
    // Form validation
  
    const { errors, isValid } = validateRegisterInput(req.body)
  
    // Check validation, if not return error 400
    if (!isValid) {
      return res.status(400).json(errors)
    }
  
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: 'Emailen är redan registrerad' })
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
  
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        })
      }
    })
  })
  
  // @route POST /loggain
  // @desc Login user and return JWT token
  // @access Public
  router.post('/loggain', (req, res) => {
    // Form validation
  
    const { errors, isValid } = validateLoginInput(req.body)
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors)
    }
  
    const email = req.body.email
    const password = req.body.password
  
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: 'Angiven mailadress och lösenord matchar inte. Försök igen.' })
      }
  
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          }
  
          // Sign token
          jwt.sign(
            payload,
            process.env.SECRETORKEY,
            {
              expiresIn: 3600 // 1 hour in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              })
            }
          )
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: 'Angiven mailadress och lösenord matchar inte. Försök igen.' })
        }
      })
    })
  })

  module.exports = router