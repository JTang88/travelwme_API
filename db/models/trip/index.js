export default (sequelize, Sequelize) => {
  const Trip = sequelize.define('trip', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    creatorId: Sequelize.INTEGER,
    date_start: Sequelize.DATEONLY,
    date_end: Sequelize.DATEONLY,
    gender: Sequelize.STRING,
    body_types: Sequelize.STRING,
    trip_keywords: Sequelize.STRING,
    countries: Sequelize.STRING,
    continents: Sequelize.STRING,
    age_start: Sequelize.INTEGER,
    age_end: Sequelize.INTEGER,
    interesters: Sequelize.INTEGER,
    joiners: Sequelize.INTEGER,
    forSureGoing: Sequelize.INTEGER,
    relationship: Sequelize.STRING,
    publicId: Sequelize.STRING,
    trip_status: Sequelize.STRING,
    tripCommentId: Sequelize.STRING,
  }, {
    timestamps: true,
  });
  return Trip;
};

