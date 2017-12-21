export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    body_type: Sequelize.STRING,
    relationship: Sequelize.STRING,  
    description: Sequelize.STRING,
    publicId: Sequelize.STRING,
  }, {
    timestamps: false, 
  });
  return User;
}

