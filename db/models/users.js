export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    fitness: DataTypes.STRING,
    Gender: DataTypes.STRING,
    relationship_status: DataTypes.STRING,
  });
  return Users;
};

// for test graphQL purpose
// export default (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     username: DataTypes.STRING,
//   });
//   return User;
// };