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

// function connectModels(db) {
//   if (db.Article && db.Author && db.Event) {
//     console.log(db);
//     console.log("connecting models.....")
//     db.Article.belongsTo(db.Author,{foreignKey: 'author_id'});
//     db.Event.belongsTo(db.Author);
//     db.Author.hasMany(db.Article,{foreignKey: 'author_id'});
//     db.Author.hasMany(db.Event);
//   }
// }

function connectModels(db) {
  if (db.Article && db.Author && db.Event) {
    console.log("connecting models.....");
    db.Author.hasMany(db.Article);
    db.Article.belongsTo(db.Author);

    db.Event.belongsTo(db.Author);
    db.Author.hasMany(db.Event);
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