const Mutation = `
  type Mutation {
    updateUser(id: Int!, username: String!, gender: String!, age: Int!, body_type: String!, relationship: String!, description: String!): [Int!]!
    updateUserRelationshipToTrip(userId: Int!, tripId: Int!, user_type: String!): TripMembers
    deleteAUserFromTrip(memberId: Int!): Int!
    forSureGoing(memberId: Int!, tripId: Int!): TripMembers
    updateTripStat(tripId: Int!, field: String!, type: String!): Trip
    interestedInATrip(userId: Int!, tripId: Int!): TripMembers
    deleteUser(id: Int!): Int!  
    addKey(word: String) : TripKeyword
    addPhotoToUser(id: Int!, publicId: String!): [Int!]!
    addPhotoToTrip(id: Int!, publicId: String!): [Int!]!
    createTrip(title: String!, description: String!, cost: Int, date_start: String, date_end: String, gender: String!, age_start: Int!, age_end: Int!, relationship: String!, trip_status: String!, keys: String, body_types: String, trip_keywords: String, interesters: Int, joiners: Int, forSureGoing: Int, creatorId: Int, countries: String, continents: String): Trip 
    updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, body_type: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
    updateTripState(id: Int! new_state: String!): Trip
    deleteTrip(id: Int!): Int!
    register(username: String!, email: String!, password: String!, gender: String!, age: Int!, relationship: String!, body_type: String!): User!
    login(email: String, password: String): String!
  }
  `;

export default Mutation;