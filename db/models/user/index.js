export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    fitness: Sequelize.STRING,
    relationship_status: Sequelize.STRING,  
  }, {
    timestamps: false, 
  });
  return User;
}

// for test graphQL purpose
// export default (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     username: DataTypes.STRING,
//   });
//   return User;
// };
