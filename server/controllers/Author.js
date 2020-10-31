const {Article, Author} = require("../models")
module.exports = {

  //get author by unique username
  async getAuthor(req, res) {
    try {
      const userName = req.params.userName;
      const author = await Author.findAll({
        where: {
          userName: userName,
        },
        include: [
          {
            model: Article,
           
          },
        ],
      });

      if (author === null || author === undefined) {
        return res.send({
          message: "no author found ",
        });
      }

      res.json(author);
      console.log("hello" + author)
    } catch (err) {
      res.json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  
  //*Get author categories
  async categories(req,res){
    try {
      const category = req.query.category;
      const categories = await Author.find({
        where: {
          category: category,
        },
      });
      if (category === null || category === undefined) {
        return res.status(404).send({
          message: "no category found",
        });
      }
      res.status(200).send(categories);
      console.log(" ========>" + categories)
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  //*get all author details
  async allAuthorDetails(req, res) {
    try {
      const posts = await Author.findAll();
      res
        .status(200)
        .json(posts)
        .send({
          msg: "successfully get data to the database",
        });
    } catch (err) {
      res.status(500).send({
        error: err + "an error has occured while trying to fetch  posts",
      });
    }
  },

  //*Signin
};