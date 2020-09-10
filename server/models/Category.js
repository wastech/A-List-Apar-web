/*const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    title: String
})

module.exports = mongoose.model('Category', CategorySchema)*/

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: { type: DataTypes.STRING, allowNull: true}
        
      
    });

    return Category
  };