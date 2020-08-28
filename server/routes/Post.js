const express = require("express");
const router = express.Router();

const Post = require("../controllers/Post");

router.post("/addpost", Post.addPost);
router.get("/getposts", Post.getPosts);
router.delete("/deletepost/:id", Post.deletePost);
router.get("/getpost/:id", Post.getPost);
router.put("/updatepost/:id", Post.updatePost);




module.exports = router;