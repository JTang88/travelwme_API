export default (sequelize, Sequelize) => {
  const TripMembers = sequelize.define('TripMembers', {  
    user_type: Sequelize.STRING,
  });
  return TripMembers;
};
