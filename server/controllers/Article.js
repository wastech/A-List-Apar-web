const { Article, Author } = require("../models");
//const Author = require("../models/Author");

module.exports = {
  async addPost(req, res) {
    try {
        const post = await Article.create(req.body);
        res
          .json({post,
            msg: "successfully sent data to the database"
          })
         console.log(post)
      
    } catch (err) {
      res.send({
        error: err + "an error has occured while trying to post to database",
      });
    }
  },
  // )
  //},

  // Get all posts
  async getPosts(req, res) {
    try {
     
      const posts = await Article.findAll({
        include: [{
          model: Author,
          attributes: ['userName', 'profileImg', 'bio']  
        }],
      })
      res.json({posts,
        msg: "successfully get data to the database",
      });
    } catch (err) {
      res.status(500).send({
        error: err + "an error has occured while trying to fetch  posts",
      });
    }
  },

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Article.findByPk(id);

      if (post === null || post === undefined) {
        return res.status(404).send({
          message: "post Does Not Exist",
        });
      }
      await post.destroy();
      res.status(201).send({
        msg: " message deleted succesfully",
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).send({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  },

  async getPost(req, res) {
    try {
      const id = req.params.id;
      const post = await Article.findOne({
        
        where: {
          id: id,
        },
        include: [Author]
      });
      if (post === null || post === undefined) {
        return res.status(404).send({
          message: "Resource Not Found, Item Does Not Exist",
        });
      }
       console.log(post)
      res.send(post);
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  async updatePost(req, res) {
    try {
      const postId = req.params.id;
      const post = await Article.update(req.body, {
        where: {
          id: postId,
        },
      });
      res.status(201).send(post);
      console.log(post);
    } catch (e) {
      res.status(500).send({
        message: "Error Creating Edit Request",
        error: e.message,
      });
      console.log(e.message);
    }
  },
};
