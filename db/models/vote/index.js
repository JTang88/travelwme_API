export default (sequelize, Sequelize) => {
  const Vote = sequelize.define('vote', {
    voteId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    polarity: Sequelize.INTEGER,
  }, {
    timestamps: false, 
  });
  return Vote;
}
