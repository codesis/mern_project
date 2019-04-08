'use strict'

const router = require('express').Router()

// Render index page
router.route('/')
  .get(function (req, res) {
    res.render('home/index')
  })

module.exports = router
