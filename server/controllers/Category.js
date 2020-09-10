
const  {Post, Category} = require("../models");

module.exports = {

async getCategories(req, res) {
  try {
    let categories = await Category.findAll({})
    res.send({
      code: 200,
      msg: "fetched",
      categories
    })
  } catch (error) {
    throw(error)
  }

},

   async getCategory(req, res) {
    try {
      var query = {
        where: { categoryId: req.params.id }
    };
      const category = Post.find(query);
      if (category === null || category === undefined) {
        return res.status(404).send({
          message: "no category found",
        });
      }

      res.status(200).send(category);
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  }
 
}
