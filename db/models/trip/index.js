export default (sequelize, Sequelize) => {
  const Trip = sequelize.define('trip', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    date_start: Sequelize.DATEONLY,
    date_end: Sequelize.DATEONLY,
    gender: Sequelize.STRING,
    body_types: Sequelize.STRING,
    trip_keywords: Sequelize.STRING,
    age_start: Sequelize.INTEGER,
    age_end: Sequelize.INTEGER,
    relationship: Sequelize.STRING,
    publicId: Sequelize.STRING,
    trip_status: Sequelize.STRING,
  }, {
    timestamps: true,
  });
  return Trip;
};

