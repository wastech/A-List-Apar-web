const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Author",
        key: "id",
      },
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
