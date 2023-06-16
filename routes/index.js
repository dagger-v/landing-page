var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Jiro",
    tagline: "Build Your Vision. Share Your Story.",
  });
});

module.exports = router;
