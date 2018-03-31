export default (sequelize, Sequelize) => {
  const CountriesContinents = sequelize.define('countriesContinents', {
    country: Sequelize.STRING,
    continent: Sequelize.STRING,
  }, {
    timestamps: true,
  });
  return CountriesContinents;
};