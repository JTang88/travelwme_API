export default (sequelize, Sequelize) => {
  const Trip = sequelize.define('trip', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    date_start: Sequelize.DATE,
    date_end: Sequelize.DATE,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    fitness: Sequelize.STRING,
    relationship_status: Sequelize.STRING,
    trip_status: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return Trip;
};

