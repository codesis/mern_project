const router = require("express").Router();
const auth = require("../../validation/auth");
let Recipe = require("../../models/recipeModel");

/**
 * Router for finding all recipes,
 * one by id and for creating a recipe
 */
router.route("/").get(function (req, res) {
  Recipe.find(function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Recipe.findById(id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  });
});

router.post("/skapa", (req, res) => {
  let recipe = new Recipe(req.body);
  recipe.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/dashboard", auth, (req, res) => {
  const id = req.params.recipe_creator;
  const query = { recipe_creator: id };

  Recipe.find(query)
    .then((recipes) => res.json(recipes))
    .catch(() => res.status(404).json({ msg: "No recipes could be found" }));
});

module.exports = router;
