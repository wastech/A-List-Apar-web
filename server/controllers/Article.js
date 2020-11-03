const { Article, Author } = require("../models");
//const Author = require("../models/Author");

module.exports = {
  
  async index (req, res) {
    try {
      let articles  = null
      const {search} = req.query
      if (search) {
        articles = await Article.findAll({
          where: {
            $or: [
              'title', 'body'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          },
          include: [{
            model:Author}]
        })
      } else {
        articles = await Article.findAll({
          limit: 10
        })
      }
      res.send(articles)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured, trying to fetch the articles'
      })
    }
  },

  async addPost(req, res, next) {
    const {id} = req.user || {};
    if (!id) { // TODO: Move to auth middleware
      return next("No user found");
    }
    try {
      console.log("req.user", req.user);
      const post = await Article.create({ AuthorId: req.user.id, ...req.body });
      res.json({ post, msg: "successfully sent data to the database" });
    } catch (err) {
      return next({
        error: err + " an error has occured while trying to post to database",
      });
    }
  },
  // )
  //},

  //*Get a post by tag
  async tags(req,res){
    try {
      const tags = req.query.tags;
      const article = await Article.find({
        where: {
          tags: tags,
        },
        include: [{
          model:Author}]
      });
      if (category === null || category === undefined) {
        return res.status(404).send({
          message: "no category found",
        });
      }
      res.status(200).send(article);
      console.log(" ========>" + article)
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  // Get all posts
   getPosts(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    Article.findAll({
      where: query,
      include: [{
        model:Author}]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
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
        include: [{
          model: Author
         }]
      });
      if (post === null || post === undefined) {
        return res.status(404).send({
          message: "Resource Not Found, Item Does Not Exist",
        });
      }
      res.send(post);
    } catch (err) {
      res.json({
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