const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

function connectModels(db) {
  if (db.Post && db.Author && db.Category) {
    console.log(db);
    console.log("connecting models.....")
    db.Post.belongsTo(db.Author);
    db.Post.belongsTo(db.Category, {
      foreignKey: {
          allowNull: false
      }}),
    db.Category.hasMany(db.Post);
  }
}

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
    connectModels(db);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
