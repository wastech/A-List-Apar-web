const moment = require('moment')
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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format(
        'DD-MM-YYYY'
      )
    }
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format(
        'YYYY-MM-DD HH:mm:ss'
      )
    }
  }
  })

  return Article;
};