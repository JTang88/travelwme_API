export default (sequelize, Sequelize) => {
  const Fitness = sequelize.define('Fitness', {
  }, {
    timestamps: true,
  });
  return Fitness;
};