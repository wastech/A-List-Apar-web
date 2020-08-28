const express = require("express");
const router = express.Router();

const Category = require("../controllers/Post");

router.get("/", Category.getPosts);
router.get("/category/:category", Category.getPost);

module.exports = router;