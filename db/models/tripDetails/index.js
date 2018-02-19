export default (sequelize, Sequelize) => {
  const TripDetails = sequelize.define('TripDetails', {
  }, {
    timestamps: true,
  });
  return TripDetails;
};