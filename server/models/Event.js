
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
   
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
   
  })

  return Event;
};