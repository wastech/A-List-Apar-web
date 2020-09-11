const express = require("express");
const router = express.Router();

const Article = require("../controllers/Article");

router.post("/addpost", Article.addPost);
router.get("/getposts", Article.getPosts);
router.delete("/deletepost/:id", Article.deletePost);
router.get("/getpost/:id", Article.getPost);
router.post("/updatepost/:id", Article.updatePost);




module.exports = router;