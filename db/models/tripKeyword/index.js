export default (sequelize, Sequelize) => {
  const TripKeyword = sequelize.define('TripKeyword', {
    word: Sequelize.STRING,
  }, {
    timestamps: true,
  });
  return TripKeyword;
};
