const express = require("express");
const router = express.Router();

const category = require("../controllers/Category");

router.get("/categories", category.getCategories);
router.get("/category/:id", category.getCategory );


module.exports = router;