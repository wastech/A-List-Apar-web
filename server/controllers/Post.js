const { Post, Author } = require("../models");
//const Author = require("../models/Author");

module.exports = {
  async addPost(req, res, next) {
    try {
     
      const newPost = await Post.create({
        author_id: req.body.userName });
      res.status(201).send({
          message:'post Recorded',
          newPost
      })
  }catch (e) {
      console.log(e.message);
      res.status(500).send({
          message:'Internal Server Error',
          error:e.message
      });
  }
  },
  // )
  //},

  // Get all posts
  async getPosts(req, res) {
    try {
      const posts = await Post.findAll();
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

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);

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
      const post = await Post.findAll({
        where: {
          id: id,
        },
      });
      if (post === null || post === undefined) {
        return res.status(404).send({
          message: "Resource Not Found, Item Does Not Exist",
        });
      }

      res.status(200).send(post);
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
      const post = await Post.update(req.body, {
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
