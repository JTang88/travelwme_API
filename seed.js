import db from './db';
import data from './data.json';


db.TripKeywords.sync({ force: true }).then(() => {
  data.TripKeywords.forEach((tk) => {
    db.TripKeywords.create({
      word: tk.word,
    });
  });
});

db.TripMembers.sync({ force: true }).then(() => {
  data.TripMembers.forEach((tm) => {
    db.TripMembers.create({
      trip_id: tm.trip_id,
      user_id: tm.user_id,
      user_type: tm.user_type,
    });
  });
});

db.Trips.sync({ force: true }).then(() => {
  data.Trips.forEach((tp) => {
    db.Trips.create({
      title: tp.title,
      description: tp.description,
      cost_range: tp.cost_range,
      date_start: tp.date_start,
      date_end: tp.date_end,
      trip_state: tp.trip_state,
      trip_region: tp.trip_region,
    });
  });
});

db.Users.sync({ force: true }).then(() => {
  data.Users.forEach((us) => {
    db.Users.create({
      username: us.username,
      email: us.email,
      password: us.password,
      age: us.age,
      fitness: us.fitness,
      gender: us.gender,
      relationship_status: us.relationship_status,
    });
  });
});