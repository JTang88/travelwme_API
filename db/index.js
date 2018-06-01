import Sequelize from 'sequelize';
import mongoose from 'mongoose';

const sequelize = new Sequelize('travelwme', 'root', '', {
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
db.TripDetails = sequelize.import('./models/tripDetails');
db.CountriesContinents = sequelize.import('./models/countriesContinents')
db.TripLocations = sequelize.import('./models/tripLocations')

db.Vote = sequelize.import('./models/vote');

db.User.belongsToMany(db.Trip, { through: db.TripMembers });
db.Trip.belongsToMany(db.User, { through: db.TripMembers });

db.CountriesContinents.belongsToMany(db.Trip, { through: db.TripLocations });
db.Trip.belongsToMany(db.CountriesContinents, { through: db.TripLocations });

db.Trip.belongsToMany(db.TripKeyword, { through: db.TripDetails });
db.TripKeyword.belongsToMany(db.Trip, { through: db.TripDetails });

db.Vote.belongsTo(db.User);
db.User.hasMany(db.Vote);

sequelize.sync();

const mongoDb = mongoose.connection;

mongoose.connect('mongodb://localhost/travelwme')

// mongoose.set('debug', true);

mongoDb.on('error', console.error.bind(console, 'connection error:'));
mongoDb.once('open', () => {
  console.log('Now connected to MongoDB')
});

// mongoDb.models.TripComment.remove({})
// mongoDb.models.ConvoList.remove({}).exec()
// mongoDb.models.Convo.remove({}).exec()
// mongoDb.models.Notification.remove({}).exec()

export { db, mongoDb };