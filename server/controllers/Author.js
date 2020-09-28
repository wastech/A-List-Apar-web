module.exports = {
  //!get author's posts by author ID
  async getAuthor(req, res) {
    try {
      const userName = req.params.userName;
      const author = await Author.findOne({
        where: {
          userName: userName,
        },
        include: [
          {
            model: Article,
            as: "articles",
          },
        ],
      });
      if (author === null || author === undefined) {
        return res.send({
          message: "no author found ",
        });
      }

      res.send(author);
    } catch (err) {
      res.json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  /*
  //*Get all posts of an author
  async getAuthorPost(req,res){
    try {
      const authorID = req.params.authorID;
      const author = await Author.findByPk({
        where: {
          authorID: authorID,
        },
      });
      if (author === null || author === undefined) {
        return res.status(404).send({
          message: "no author found",
        });
      }
      res.status(200).send(post);
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },*/

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
