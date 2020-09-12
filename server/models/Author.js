/*const mongoose=require('mongoose');
const authorSchema= mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String, unique:true,required:true},
    password:{type:String, required:true},
    bio:String,
    website:String,
    posts: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Post'
        }
     ],
     profileImg:{type:String,default:"www.google.com"},
      email:{type:String, required:true}
})
module.exports=mongoose.model('Author',authorSchema);*/
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

function hashPassword(author, options) {
  const SALT_FACTOR = 8;

  if (!author.changed("password")) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(author.password, salt, null))
    .then((hash) => {
      author.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      bio: DataTypes.TEXT,
      
      url:DataTypes.STRING,
      profileImg: DataTypes.STRING,
      category: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    }
  );

  Author.prototype.comparePassword = function(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  // Author.associate = function(models) {
  //   Author.hasOne(models.Post);
  // };

  return Author;
};