import Sequelize from 'sequelize';

const sequelize = new Sequelize('travelwme', 'root', 'F1reang3l', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch(err => {
    console.log('Unable to connect to the database');
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = sequelize.import('./models/user');
db.Trip = sequelize.import('./models/trip');
db.TripKeyword = sequelize.import('./models/tripKeyword');
db.TripMembers = sequelize.import('./models/tripMembers');
db.Comment = sequelize.import('./models/comment');
db.Vote = sequelize.import('./models/vote');

db.User.belongsToMany(db.Trip, { through: db.TripMembers });
db.Trip.belongsToMany(db.User, { through: db.TripMembers });

db.Trip.belongsToMany(db.TripKeyword, { through: 'Trip_details' });
db.TripKeyword.belongsToMany(db.Trip, { through: 'Trip_details' });

db.Comment.belongsTo(db.Trip);
db.Trip.hasMany(db.Comment);
db.Vote.belongsTo(db.Comment);
db.Comment.hasMany(db.Vote);
db.Vote.belongsTo(db.User);
db.User.hasMany(db.Vote);

sequelize.sync();

export default db;


// import Sequelize from 'sequelize';

// const sequelize = new Sequelize('travelwme', 'root', '', {
//   host: 'localhost',
//   dialect: 'sqlite',
//   storage: './db/sql.storage',
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established');
//   })
//   .catch(err => {
//     console.log('Unable to connect to the database');
//   });

// const db = {};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.User = sequelize.import('./models/user');
// db.Trip = sequelize.import('./models/trip');
// db.TripKeyword = sequelize.import('./models/tripKeyword');
// db.TripMembers = sequelize.import('./models/tripMembers');
// db.Comment = sequelize.import('./models/comment');
// db.Vote = sequelize.import('./models/vote');

// db.User.belongsToMany(db.Trip, { through: db.TripMembers });
// db.Trip.belongsToMany(db.User, { through: db.TripMembers });

// db.Trip.belongsToMany(db.TripKeyword, { through: 'Trip_details' });
// db.TripKeyword.belongsToMany(db.Trip, { through: 'Trip_details' });

// db.Comment.belongsTo(db.Trip);
// db.Trip.hasMany(db.Comment);
// db.Vote.belongsTo(db.Comment);
// db.Comment.hasMany(db.Vote);
// db.Vote.belongsTo(db.User);
// db.User.hasMany(db.Vote);

// sequelize.sync();

// export default db;

