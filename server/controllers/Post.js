const Post = require("../models/Post");
const Author = require("../models/Author");

module.exports = {
  addPost(req, res) {
    Author.find({userName:req.body.userName},(err,result)=>{
      if(err)
           res.json("No author with the given username found");
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      imageUrl: req.body.imageUrl,
      topics: req.body.topic,
      code: req.body.code,
      content: req.body.content,
      design: req.body.design,
      process: req.body.process,
      category: req.body.category,
    });
    result[0].posts.push(newPost._id);
    result[0].save();
    newPost.save(function(err, newPost) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      res.status(201).json(newPost);
    });
  })},

  // Get all posts
  getPosts(req, res) {
    Post.find({})
      .populate("author")
      .exec((err, result) => {
        if (err) res.status(202).send(err);
        res.json(result);
      });
  },

  deletePost(req, res) {
    Post.findByIdAndRemove({ _id: req.params.id }).then(function() {
      res.status(200).end();
    });
  },

  getPost(req, res) {
    Post.findById(req.params.id)
      .populate("author")
      .exec((err, result) => {
        if (err) res.status(202).send(err);
        res.json(result);
      });
  },

  updatePost(req, res) {
    let requestBody = req.body;
    Post.findByIdAndUpdate(req.params.id, requestBody).then(function() {
      Post.findOne({ _id: req.params.id }).then(function(post) {
        res.status(200).json(post);
      });
    });
  },
};
