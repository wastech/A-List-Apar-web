const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    

    title: DataTypes.STRING,
    body: DataTypes.STRING,
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },

    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("created_at")).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get() {
        return moment(this.getDataValue("updated_at")).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
      },
    },
  });

  return Article;
};
