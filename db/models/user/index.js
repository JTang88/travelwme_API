export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    gender: Sequelize.STRING,
    birthday: Sequelize.DATEONLY,
    relationship: Sequelize.STRING,
    description: Sequelize.STRING,
    publicId: Sequelize.STRING,
    convoListId: Sequelize.STRING,
    notificationId: Sequelize.STRING,
    newNotification: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    newMessage: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true, 
  });
  return User;
};