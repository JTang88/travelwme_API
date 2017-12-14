export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    fitness: Sequelize.STRING,
    relationship_status: Sequelize.STRING,  
  }, {
    timestamps: false, 
  });
  return User;
}

