
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
   
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    content: DataTypes.STRING,
    code: DataTypes.STRING,
    process: DataTypes.TEXT,
    design: DataTypes.TEXT,
    AuthorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  })

  return Article;
};