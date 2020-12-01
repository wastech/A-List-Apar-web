const express = require("express");
const router = express.Router();
const passport = require("passport");

const Author = require("../controllers/Author");

//router.post("/addauthor", Author.addAuthor);
router.post(
  "/addauthor",
  passport.authenticate("local-signup", {
    successRedirect: "/article/getposts", // change this to your preferred route
    failureRedirect: "/authors/addauthor", // change this to your preferred route
  })
);

router.get(
  "/api/users/me",
 
  function (req, res) {
    res.json({ user: req.user });
    console.log({ user: req.user });
    
  },
  
);

router.post("/authors/signin", passport.authenticate("local-signin"), function (req, res) {
  console.log("hello! this is req.user", req.user)
  res.send(req.user)
});
//router.get('/authors/:username', Author.getAuthor);
router.get("/authors", Author.allAuthorDetails);
router.get("/getauthor/:userName", Author.getAuthor);
router.get("/:category", Author.categories);

module.exports = router;