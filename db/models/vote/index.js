export default (sequelize, Sequelize) => {
  const Vote = sequelize.define('vote', {
    polarity: Sequelize.INTEGER,
  }, {
    timestamps: true,
  });
  return Vote;
};
