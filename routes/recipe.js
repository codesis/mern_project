const express = require('express')
const router = express.Router()

const controller = require('../controllers/recipeController')

router.route('/recept')
.get(controller.index)

module.exports = router