export default (sequelize, Sequelize) => {
  const TripMembers = sequelize.define('TripMembers', {  
    user_type: Sequelize.STRING,
    forSureGoing: Sequelize.BOOLEAN,
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    timestamps: true,
  });
  return TripMembers;
};
