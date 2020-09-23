

const express = require("express");
const router = express.Router();
const passport = require('passport')


const Author = require("../controllers/Author");

//router.post("/addauthor", Author.addAuthor);
router.post("/addauthor", passport.authenticate('local-signup'));
router.post('/authors/signin',  passport.authenticate('local-signin'))
//router.get('/authors/:username', Author.getAuthor);
router.get('/authors/', Author.allAuthorDetails);
router.get('/getauthor/:userName', Author.getAuthor);







module.exports = router;