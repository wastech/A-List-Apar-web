const express = require("express");
const router = express.Router();

const Article = require("../controllers/Article");

router.post("/addpost", Article.addPost);
router.get("/getposts", Article.getPosts);
router.get("/", Article.index);
router.delete("/deletepost/:id", Article.deletePost);
router.get("/getpost/:id", Article.getPost);
router.post("/updatepost/:id", Article.updatePost);
router.post("/getpost/:tags", Article.tags);

module.exports = router;