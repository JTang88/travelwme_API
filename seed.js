import bcrypt from 'bcrypt';
import gender from 'gender';
import lodash from 'lodash';
import axios from 'axios';
import express from 'express';
import casual from 'casual';
import db from './db';
import seedData from './newdata.json';
// console.log('this is tripDetails before buikCreate: ', db.TripDetails);

const app = express();
const port = 3250;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`seed.js is listening on port ${port}!`))

// helper fucntions below 

const randomAge = () => {
  return Math.floor( Math.random() * (40 - 18) + 18 + 1);
}

const randomArr = (arr) => {
  const arr1 = arr.slice(0);
  const result = [];
  const randomTimes = Math.floor( Math.random() * (arr1.length - 1) + 1 );

  for (let i = 0; i < randomTimes; i++) {
    const randomIndex = Math.floor( Math.random() * arr1.length );
    result.push(arr1.splice(randomIndex, 1).join());
  }

  return result; 
}

const randomTripAdj = () => {
  const adj = [ 'passion', 'love', 'surf', 'party' ]
  const randomNum = Math.floor( Math.random() * 4 );
  return adj[randomNum];
}

const random = (arr) => {
  const randomIndex = Math.floor( Math.random() * arr.length );
  return arr[randomIndex];
}

const datesMaker = () => {
  const bMonth = Math.floor(Math.random() * 12 + 1);
  const date = Math.floor(Math.random() * 30 + 1);
  const rMonth = Math.floor(Math.random() * 4 + 1);
  let eMonth = 0
  let year = 2018;

  if(bMonth + rMonth > 12) {
    eMonth = bMonth + rMonth - 12;
    year = 2019;
  } else {
    eMonth = bMonth + rMonth;
  }
  
  return {
    date_start: `${year}-${bMonth}-${date}`,
    date_end: `${year}-${eMonth}-${date}`
  }
}

const keywordToId = (word) => {
  return word === 'Adventurer' ? 1 : word === 'Backpacker' ? 2 : word === 'Explorer' ? 3 : 
         word === 'Gourmet' ? 4 : word === 'Historian' ? 5 : word === 'Luxury' ? 6 : ''
}

const typeToId = (type) => {
  return type === 'athletic' ? 1 : type === 'average' ? 2 : type === 'sexy' ? 3 : type === 'well-rounded' ? 4 : ''
}



const print = async (func) => {
  console.log(await func());
}


// data makers below

const makeUsers = async () => {
  const users = [];
  const memo = {};

  for(let i = 0; i < 100; i++) {
    const user = {};
    let name = await casual.first_name;
    const mof = await gender.guess(name);
    user.gender = mof.gender === 'unknown' ? 'male' : mof.gender;
    memo[name] = !memo[name] ? 0 : memo[name] + 1;
    name = memo[name] > 0 ? name + memo[name] : name;
    user.username = name;
    user.email = `${name}@test.com`;
    user.password = await bcrypt.hash(`${name}test`, 12);
    user.age = await randomAge();
    user.body_type = await random([ 'athletic', 'average', 'sexy', 'well-rounded' ])
    user.description = casual.sentence;
    user.relationship = random(['single', 'commited', 'it\'s complicated', 'married', 'single', 'single', 'single']);
    users.push(user);
  }
  return users;
}


// print(makeUsers);


const makeTrips = async () => {
  const trips = [];
  const memo = {};
  for (let i = 0; i < 20; i++) {
    const dates = datesMaker();
    const trip = {};
    let title = casual.country
    memo[title] = !memo[title] ? 0 : memo[title] + 1; 
    trip.title = memo[title] > 0 ? title+memo[title]+randomTripAdj() : `${title} ${randomTripAdj()}`
    trip.description = casual.sentence;
    trip.cost = await random([5000, 7000, 10000, 20000, 30000]);
    trip.gender = await random(['male', 'female', 'all', 'all', 'all', 'all']);
    trip.date_start = dates.date_start;
    trip.date_end = dates.date_end;
    trip.age_start = random([18, 25, 30, 35])
    trip.age_end = trip.age_start === 18 ? 30 : trip.age_start + 10;
    trip.relationship = await random(['single', 'commited', 'it\'s complicated', 'married', 'single', 'single', 'single']);
    trip.trip_keywords = JSON.stringify( await randomArr([ "Backpacker", "Explorer", "Gourmet", "Historian", "Luxury" ] ))
    trip.body_types = JSON.stringify( await randomArr([ 'athletic', 'average', 'sexy', 'well-rounded' ]));
    trip.trip_status = 'open';
    trips.push(trip);
  }
  return trips;
}

// print(makeUsers);


const makeTripDetails = async (trips) => {
  const tripDetails = [];
  trips.forEach((trip, i) => {
    JSON.parse(trip.trip_keywords).forEach(key => {
      const tripDetail = {};
      tripDetail.tripId = i + 1;
      tripDetail.TripKeywordId = keywordToId(key);
      tripDetails.push(tripDetail);
    })
  })
  return tripDetails;
}

const makeFitness = async (trips) => {
  const fitness = [];
  trips.forEach((trip, i) => {
    JSON.parse(trip.body_types).forEach(type => {
      const fit = {};
      fit.tripId = i + 1;
      fit.BodyTypeId = typeToId(type);
      fitness.push(fit);
    })
  })
  return fitness;
}


// 1. age
// 2. bodyTypes
// 3. gender
// 4. relationship 



const makeTripMembers = async (users, trips) => {
  const tripsCopy = trips.slice(0);
  const tripMembers = [];
  // forEach user
  users.forEach((user, u) => {

    // iterate through trip data entry once
    tripsCopy.forEach((trip, t) => {

      // if the criteras match

      if (user.age >= trip.age_start && user.age <= trip.age_end && JSON.parse(trip.body_types).includes(user.body_type) && trip.relationship === user.relationship) {
        if (trip.gender === user.gender || trip.gender === 'all') {
          // create a tripMember Obj and add userId and tripId to it
          const tripMember = {};
          // and randomly add userType as well
          tripMember.tripId = t+1
          tripMember.userId = u+1;

          if (trip.hasACreator === true) {
            tripMember.user_type = random(['J', 'I']); 
          } else {
            tripMember.user_type = 'C'
            trip.hasACreator = true; 
          }
          // or 
          
          // if (trip.hasACreator === true) {
          //   tripMember.user_type = random(['J', 'I']); 
          // } else {
          //   tripMember.user_type = random(['C', 'J', 'I']);  
          // }

          // if (tripMember.user_type === 'C') {
          //   trip.hasACreator = true; 
          // } 
          // push tripMember to TripMembers
          tripMembers.push(tripMember);
        }
      }   
    }) 
  })
  // retrun tripMembers; 
  return tripMembers;
}



// const temp = async () => {
//   const users = await makeUsers();
//   const trips = await makeTrips();
//   const tripDetails = await makeTripDetails(trips);
//   const tripMembers = await makeTripMembers(users, trips);
//   console.log(tripMembers); 
// }  

// temp();


const makeData = async () => {
  await db.BodyType.bulkCreate(seedData.BodyType)  
  await db.TripKeyword.bulkCreate(seedData.TripKeyword)
  const users = await makeUsers();
  const trips = await makeTrips();
  const tripDetails = await makeTripDetails(trips);
  const fitness = await makeFitness(trips);
  const tripMembers = await makeTripMembers(users, trips);
  await db.User.bulkCreate(users);
  await db.Trip.bulkCreate(trips);
  await db.TripDetails.bulkCreate(tripDetails);
  await db.Fitness.bulkCreate(fitness);
  await db.TripMembers.bulkCreate(tripMembers);
}

// console.log('this is tripDetails after buikCreate: ', db.TripDetails);


makeData();







// The current problems to solves
  // 1. tripKeywards Arr & tripKeyword table matching 
    // solution: 
    // Assuming that you will have tripkeyword arr filled while creating the trips data
    // Store the trip data created in a variable
      // get all the tripKeyord array values, and make tripDetails table accordingly






// Step 1 : uncomment out the follow block and run babel-node seed.js

// Need to keep the following block for creating content in the bodyType and tripKeywords tables!! 
// db.BodyType.bulkCreate(seedData.BodyType)
// .then(() => {
//  console.log('created bodytype');
// })
// .catch((err) => {
//  console.log('error', err);
// });

// db.TripKeyword.bulkCreate(seedData.TripKeyword)
// .then(() => {
//   console.log('created trip keyword');
// })


// step 2 : comment out the above and uncomment out the following block and run seed.js




// create a data maker for each table as helper functions

























// const makeAUser = async () => {

//   const password = await bcrypt.hash('jt122384', 12);

//   db.User.create({
//     "username": "Jen Tang",
//     "email": "jen@gmail.com",
//     "password": password,
//     "gender": "female",
//     "age": "33",
//     "relationship": "single",
//     "description": "I'm a nice sister",
//   });

// } 

// makeAUser();















// const db = require ('./db');
// const seedData = require('./newdata.json');

// db.TripKeyword.bulkCreate(seedData.TripKeyword)
// .then(() => {
//  console.log('created trip keyword');
// })
// .catch((err) => {
//  console.log('error', err);
// });




// db.TripKeyword.update({ word: 'Backpacker'}, { where: { id: 2 } });

// db.TripKeyword.destroy({ where: { id: 8 } });


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





