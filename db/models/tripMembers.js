export default (sequelize, DataTypes) => {
  const TripMembers = sequelize.define('TripMembers', {
    trip_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    user_type: DataTypes.STRING,
  });
  return TripMembers;
};