import db from './db';
import seedData from './newdata.json';
// const db = require ('./db');
// const seedData = require('./newdata.json');

db.TripKeyword.bulkCreate(seedData.TripKeyword)
.then(() => {
  console.log('created trip keyword');
})
.catch((err) => {
  console.log('error', err);
});

db.User.bulkCreate(seedData.User)
  .then(() => {
    console.log('created user');
  })
  .catch((err) => {
    console.log('error', err);
  });

db.Trip.bulkCreate(seedData.Trip)
  .then((trip) => {
    // console.log('my trip herre =======', trip)
    const test = trip;
    console.log('my test array', test[0].addTripKeywords);
    return trip[0].addTripKeywords([5, 6]);
    
  })
  .then(() => {
    console.log('created trip');
  })
  .catch((err) => {
    console.log('error', err);
  });




db.TripMembers.bulkCreate(seedData.TripMembers)
  .then(() => {
    console.log('created tripmembers');
  })
  .catch((err) => {
    console.log('error', err);
  });

// db.Users.sync({ force: true }).then(() => {
//   data.Users.forEach((us) => {
//     db.Users.create({
//       username: us.username,
//       email: us.email,
//       password: us.password,
//       age: us.age,
//       fitness: us.fitness,
//       gender: us.gender,
//       relationship_status: us.relationship_status,
//     });
//   });
// })
