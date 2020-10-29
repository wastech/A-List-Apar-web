const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("created_at")).format(
          "MMM D YYYY"
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