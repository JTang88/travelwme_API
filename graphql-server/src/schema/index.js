export default `
type Trip {
  id: Int!
  title: String!
  descriptions: String!
  cost: Int!
  date_start: String!
  date_end: String!
  gender: String!
  age: Int!
  fitness: String!
  relationship_status: String!
  trip_state: String!
  users: [User!]!
}

type TripKeyword {
  id: Int!
  word: String!
}

type TripMembers {
  id: Int!
  user_type: String!
  tripId: Int!
}
  
type User {
  id: Int!
  username: String!
  email: String!
  gender: String!
  age: Int!,
  fitness: String!
  relationship_status: String!  
  trips: [Trip!]!
}

type Vote {
  id: Int!
  polarity: Int!
}


type Query {
  allUsers: [User!]!
  getUser(id: Int!): User
  allTrips: [Trip!]!
  getTrip(title: String!): Trip
}

type Mutation {
  createUser(username: String!, email: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String! ): User
  updateUser(id: Int!, username: String!, email: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!): [Int!]!
  updateUserRelationshipToTrip(userId: Int!, tripId: Int!, user_type: String!): Int!
  deleteUser(id: Int!): Int! 
  createTrip(title: String!, descriptions: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!, trip_state: String!, userId: Int!): Trip
  updateTrip(id: Int!, title: String!, descriptions: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, fitness: String!, relationship_status: String!, trip_state: String!): [Int!]!
  updateTripStatus(id: Int! newStatus: String!): Int!
  deleteTrip(id: Int!): Int!
}
`;

