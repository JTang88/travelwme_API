export default (sequelize, DataTypes) => {
  const Trips = sequelize.define('Trips', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    cost_range: DataTypes.INTEGER,
    date_start: DataTypes.DATEONLY,
    date_end: DataTypes.DATEONLY,
    trip_state: DataTypes.STRING,
    trip_region: DataTypes.STRING,
  });
  return Trips;
};