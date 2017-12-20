export default `
type Trip {
  id: Int
  title: String
  description: String
  cost: Int
  date_start: String
  date_end: String
  gender: String
  age: Int
  body_type: String
  relationship_status: String
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
<<<<<<< HEAD
<<<<<<< Updated upstream
  user_type: String
  users: [User]
  tripId: Int
=======
=======
>>>>>>> searchtrip
  user_type: String!
  users: Int!
  tripId: Int!
>>>>>>> Stashed changes
}
  
type User {
  id: Int
  username: String!
<<<<<<< HEAD
  email: String!
  gender: String
  age: Int,
  body_type: Int
  description: String
  relationship: String  
  trips: [Trip!]!
=======
  email: String
  gender: String
  age: Int,
  fitness: String
  relationship_status: String  
  trips: [Trip]
>>>>>>> searchtrip
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
  searchTrip(cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!, trip_state: String!, keys: [String]): [Trip]
  getTrip(id: Int!): Trip
}

type Mutation {
  updateUser(id: Int!, username: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, description: String!): [Int!]!
  updateUserRelationshipToTrip(userId: Int!, tripId: Int!, user_type: String!): Trip
  interestedInATrip(userId: Int!, tripId: Int!, user_type: String!): TripMembers
  deleteUser(id: Int!): Int! 
<<<<<<< HEAD
  addKey(word: String) : TripKeyword
  createTrip(title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!, userId: Int!): Trip
  updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
  updateTripState(id: Int! new_state: String!): Trip
=======
  addKeyWord(word: String) : TripKeyword
  createTrip(title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!, userId: Int!): Trip
 
  updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
  updateTripState(id: Int! new_state: String!): [Int!]!
>>>>>>> searchtrip
  deleteTrip(id: Int!): Int!
  register(username: String!, email: String!, password: String!): User!
  login(email: String, password: String): String!
}
`;

