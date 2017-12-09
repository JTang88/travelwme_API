export default (sequelize, DataTypes) => {
  const TripKeywords = sequelize.define('TripKeywords', {
    word: DataTypes.STRING,
  });
  return TripKeywords;
};