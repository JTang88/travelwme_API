import db from './db';
import seedData from './newdata.json';
// const db = require ('./db');
// const seedData = require('./newdata.json');

// db.TripKeyword.bulkCreate(seedData.TripKeyword)
// .then(() => {
//  console.log('created trip keyword');
// })
// .catch((err) => {
//  console.log('error', err);
// });

db.BodyType.bulkCreate(seedData.BodyType)
.then(() => {
 console.log('created bodytype');
})
.catch((err) => {
 console.log('error', err);
});

// db.TripKeyword.update({ word: 'Backpacker'}, { where: { id: 2 } });

// db.TripKeyword.destroy({ where: { id: 8 } });

db.TripKeyword.bulkCreate(seedData.TripKeyword)
.then(() => {
  console.log('created trip keyword');
})
// .catch((err) => {
//   console.log('error', err);
// });

// db.BodyType.bulkCreate(seedData.BodyType)
// .then(() => {
//   console.log('created bodytype');
// })
// .catch((err) => {
//   console.log('error', err);
// });

// db.User.bulkCreate(seedData.User)
//   .then(() => {
//     console.log('created user');
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });

// db.Trip.bulkCreate(seedData.Trip)
//   .then((trips) => {
//     trips.forEach((trip, idx) => {
//       trip.addTripKeywords(seedData.Trip[idx].keys);
//       trip.addBodyType(seedData.Trip[idx].body_types);
      
//     });
//     // console.log('my test array', test[0].addTripKeywords);
//   })
//   .then(() => {
//     console.log('created trip');
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });


// db.TripMembers.bulkCreate(seedData.TripMembers)
//   .then(() => {
//     console.log('created tripmembers');
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });





