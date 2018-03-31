export default (sequelize, Sequelize) => {
  const TripLocations = sequelize.define('tripLocations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    timestamps: true,
  });
  return TripLocations;
};