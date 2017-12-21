export default `
type Trip {
  id: Int
  title: String
  description: String
  cost: Int
  date_start: String
  date_end: String
  gender: String
  age_start: Int
  age_end: Int
  relationship: String
  trip_status: String
  users:[User]
  user_type: String
  members: [TripMembers]
}

type TripKeyword {
  id: Int
  word: String
}

type TripMembers {

  user_type: String
  users: [User]
  tripId: Int
}
  
type User {
  id: Int
  username: String!
  email: String!
  gender: String
  age: Int,
  body_type: String
  description: String
  relationship: String  
  trips: [Trip!]!
  user_type: String
  
}

type Vote {
  id: Int!
  polarity: Int!
}


type Query {
  allUsers: [User]
  getUser(id: Int!): User
  allTripMembers: [TripMembers]
  allTrips: [Trip!]!
  
  searchTrip(
    cost_start: Int,
    cost_end: Int 
    date_start: String, 
    date_end: String, 
    gender: String, 
    age: Int, 
    body_type: String, 
    relationship: String,  
    keys: String): [Trip]
  
  getTrip(id: Int!): Trip
  fitTrips(fitness: String): Trip
}

type Mutation {
  updateUser(id: Int!, username: String!, gender: String!, age: Int!, body_type: String!, relationship: String!, description: String!): [Int!]!
  updateUserRelationshipToTrip(userId: Int!, tripId: Int!, user_type: String!): Trip
  interestedInATrip(userId: Int!, tripId: Int!, user_type: String!): TripMembers
  deleteUser(id: Int!): Int! 
  addKey(word: [Int]) : TripKeyword

  
  createTrip(title: String!, description: String!, cost: Int, date_start: String, date_end: String, gender: String!, age_start: Int!, age_end: Int!, relationship: String!, trip_status: String!, keys: String, body_types: String, userId: Int): Trip 

  updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
  updateTripState(id: Int! new_state: String!): Trip
  deleteTrip(id: Int!): Int!
  register(username: String!, email: String!, password: String!): User!
  login(email: String, password: String): String!
}
`;

