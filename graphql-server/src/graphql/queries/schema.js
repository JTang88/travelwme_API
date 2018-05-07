const Query = `
  type Query {
    getComments(tripId: Int!): [Comment]
    allUsers: [User]
    getUser(id: Int!): User
    allTripMembers: [TripMembers]
    allTrips: [Trip!]!
  
    searchTrips(userId: Int!, cost_start: Int!, cost_end: Int!, date_start: String!, date_end: String!, keys: String!, country: String, continent: String): [Trip]
    
    showTrendTrips(id: Int!): [Trip]
    getCreatedTrips(id: Int!): [Trip]
    getWaitingTrips(id: Int!): [Trip]
    getJoinedTrips(id: Int!): [Trip]
    getForSureGoingTrips(id: Int!): [Trip]
    getTrip(id: Int!): Trip
    fitTrips(fitness: String): Trip
  }
`;

export default Query;


