export default (sequelize, Sequelize) => {
  const TripKeyword = sequelize.define('TripKeyword', {
    word: Sequelize.STRING,
    // key2: Sequelize.STRING,
    // key3: Sequelize.STRING,
    // key4: Sequelize.STRING,
    // key5: Sequelize.STRING,
    // key6: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return TripKeyword;
};
