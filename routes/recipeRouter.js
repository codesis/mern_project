const router = express.Router()

const controller = require('../controllers/recipeController')

router.route('/recept')
.get(controller.index)

router.route('/recept/skapa')
.get(controller.create)
.post(controller.createRecipe)

module.exports = router