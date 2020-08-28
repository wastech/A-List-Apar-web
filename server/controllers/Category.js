const Category = require("../models/Category");
const Post = require("../models/Post");

module.exports = {
  
  // Get all posts
  getCategories(req, res) {
    Category.find(function (err, categories) {
      if (err) return console.log(err);
      res.status(200).json(categories);
    });
  },

  getCategory(req, res) {
    Category.findOne({title: req.params.category}, function (err, category) {
      if (err) return console.log(err);
      Post.find({category: category.title}, function(err, post) {
        if (err) return console.log(err);
        res.status(200).json(post);
      });
    });
  }
}


