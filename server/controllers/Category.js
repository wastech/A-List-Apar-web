
const {Post , Category} = require("../models");

module.exports = {
  
  // Get all posts
 /* getCategories(req, res) {
    Category.find(function (err, categories) {
      if (err) return console.log(err);
      res.status(200).json(categories);
    });
  },*/
  
  // Get all posts
   getCategories(req, res, next) {
    Category.findAll({})
    .then(result=>{
      res.json(result)
    })
    .catch(error =>{
      throw(error)
    }) 
  
},

  getCategory(req, res) {
    Category.findOne({title: req.params.category}, function (err, category) {
      if (err) return console.log(err);
      Post.findById({category: category.title}, function(err, post) {
        if (err) return console.log(err);
        res.status(200).json(post);
      });
    });
  }
 

}