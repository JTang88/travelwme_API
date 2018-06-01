export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    relationship: Sequelize.STRING,  
    description: Sequelize.STRING,
    publicId: Sequelize.STRING,
    convoListId: Sequelize.STRING,
    notificationId: Sequelize.STRING,
  }, {
    timestamps: true, 
  });
  return User;
};