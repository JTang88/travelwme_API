export default (sequelize, Sequelize) => {
  const TripMembers = sequelize.define('TripMembers', {  
    user_type: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return TripMembers;
};
