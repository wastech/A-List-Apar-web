
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      id: {
        type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
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
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        unique: true,
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
