export default (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trips', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    cost_range: DataTypes.INGETER,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    trip_state: DataTypes.STRING,
    trip_region: DataTypes.STRING,
  });
  return Trip;
};