export default (sequelize, Sequelize) => {
  const TripKeyword = sequelize.define('TripKeyword', {
    KeyId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    word: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return TripKeyword;
};
