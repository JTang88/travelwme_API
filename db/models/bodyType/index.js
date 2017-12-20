export default (sequelize, Sequelize) => {
  const BodyType = sequelize.define('BodyType', {
    fitness: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return BodyType;
};
