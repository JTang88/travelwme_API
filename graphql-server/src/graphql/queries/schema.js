const Query = `
  type Query {
    allUsers: [User]
    getUser(id: Int!): User
    allTripMembers: [TripMembers]
    allTrips: [Trip!]!
  
    searchTrip(
      cost_start: Int,
      cost_end: Int ,
      date_start: String, 
      date_end: String,
      gender: String, 
      age: Int, 
      relationship: String,
      keys: String,
      body_type: String,
    ): [Trip]
    
    showTrendTrips(id: Int!): [Trip]
    getCreatedTrips(id: Int!): [Trip]
    getTrip(id: Int!): Trip
    fitTrips(fitness: String): Trip
  }
`;

export default Query;