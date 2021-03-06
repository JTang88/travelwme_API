const Query = `
  type Query {
    getConvo(convoId: String!): Convo
    getTripComments(tripCommentId: String!): [CommentDetails]
    getConvoList(convoListId: String!): ConvoList
    getNotifications(notificationId: String!): [Note]
    getReply(tripCommentId: String!): [ReplyDetails]
    allUsers: [User]
    getCurrentUser(id: Int!): User
    getUser(id: Int!): User
    allTripMembers: [TripMembers]
    allTrips: [Trip!]!
  
    searchTrips(userId: Int!, cost_start: Int!, cost_end: Int!, date_start: String!, date_end: String!, keys: String!, countries: String, continents: String): [Trip]
    
    showTrendTrips(id: Int!): [Trip]
    getCreatedTrips(id: Int!): [Trip]
    getWaitingTrips(id: Int!): [Trip]
    getJoinedTrips(id: Int!): [Trip]
    getForSureGoingTrips(id: Int!): [Trip]
    getTrip(id: Int!): Trip
  }
`;

export default Query;

