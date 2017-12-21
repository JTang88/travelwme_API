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
  relationship: String
  trip_status: String
  body_type: [Int]
  keys: [Int]
  users:[User]
  user_type: String
  members: [TripMembers]
  publicId: String
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
  publicId: String
  
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
  
  searchTrip(cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship: String!, trip_status: String!, keys: [String]): [Trip]
  
  getTrip(id: Int!): Trip
}

type Mutation {
  updateUser(id: Int!, username: String!, gender: String!, age: Int!, body_type: String!, relationship: String!, description: String!): [Int!]!
  updateUserRelationshipToTrip(userId: Int!, tripId: Int!, user_type: String!): Trip
  interestedInATrip(userId: Int!, tripId: Int!, user_type: String!): TripMembers
  deleteUser(id: Int!): Int! 
  addKey(word: String) : TripKeyword
  addPhotoToUser(id: Int!, publicId: String!): [Int!]!
  addPhotoToTrip(id: Int!, publicId: String!): [Int!]!
  createTrip(title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age_start: Int!, age_end: Int!, relationship: String!, keys: [Int], body_types: [Int], userId: Int!): Trip
 
  updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
  updateTripState(id: Int! new_state: String!): Trip
  deleteTrip(id: Int!): Int!
  register(username: String!, email: String!, password: String!): User!
  login(email: String, password: String): String!
}
`;

