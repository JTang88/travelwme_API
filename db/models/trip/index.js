export default (sequelize, Sequelize) => {
  const Trip = sequelize.define('trip', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    date_start: Sequelize.DATE,
    date_end: Sequelize.DATE,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    body_type: Sequelize.INTEGER,
    relationship: Sequelize.STRING,
    trip_status: Sequelize.STRING,
  }, {
    timestamps: false,
  });
  return Trip;
};

