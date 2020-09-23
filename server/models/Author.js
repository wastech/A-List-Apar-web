
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
        
      },
      category: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        
      },
      userName: {
        type: DataTypes.STRING,
        unique: false,
      },
      bio: DataTypes.TEXT,

      url: DataTypes.STRING,
      profileImg: DataTypes.STRING,
     
    },
   
  );


  // Author.associate = function(models) {
  //   Author.hasOne(models.Post);
  // };

  return Author;
};
