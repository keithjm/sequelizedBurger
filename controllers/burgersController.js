var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({}).then(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  db.Burger.create(req.body).then(function(result) {
    console.log(result);
    res.redirect("/");
  });
  // takes the request object using it as input for burger.addBurger
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  console.log(req.body.id);
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(function(dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;
