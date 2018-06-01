const Mutation = `
  type Mutation {
    newMsg(username: String!, text: String!, convoId: String!): Msg
    newConvo(convoListId: String!, username: String!, userId: Int!, receiverUserId: Int!, text: String!): String
    newComment(tripCommentId: String!, username: String!, text: String!): CommentDetails!
    newReply(tripCommentId: String!, commentId: String!, username: String!, text: String!): ReplyDetails!
    updateUser(id: Int!, username: String, gender: String, age: Int, relationship: String, description: String): User!
    updateUserRelationshipToTrip(userId: Int!, tripId: Int!, senderName: String!, tripTitle: String, user_type: String!): TripMembers

    updateUserEmail(id: Int!, email: String!): User!
    updateUserPassword(id: Int!, oldPassword: String!, newPassword: String!): String!
    deleteAUserFromTrip(memberId: Int!): Int!
    forSureGoing(memberId: Int!, tripId: Int!): TripMembers
    updateTripStat(tripId: Int!, field: String!, type: String!): Trip
    updateTripDescription(id: Int!, description: String!): Trip
    interestedInATrip(userId: Int!, tripId: Int!, senderName: String!, creatorId: Int!, tripTitle: String!): TripMembers
    deleteUser(id: Int!): Int!  
    forgotPassword(email: String!): String!
    addKey(word: String) : TripKeyword
    addPhotoToUser(id: Int!, publicId: String!): [Int!]!
    addPhotoToTrip(id: Int!, publicId: String!): [Int!]!
    createTrip(title: String!, description: String!, cost: Int, date_start: String, date_end: String, gender: String!, age_start: Int!, age_end: Int!, relationship: String!, trip_status: String!, keys: String, trip_keywords: String, interesters: Int, joiners: Int, forSureGoing: Int, creatorId: Int, countries: String, continents: String): Trip 
    updateTrip(id: Int!, title: String!, description: String!, cost: Int!, date_start: String!, date_end: String!, gender: String!, age: Int!, relationship: String!, trip_state: String!, key1: String!, key2: String!, key3: String!, key4: String!, key5: String!, key6: String!): [Int!]!
    updateTripStatus(id: Int! trip_status: String!): Trip
    deleteTrip(id: Int!): Int!
    register(username: String!, email: String!, password: String!, gender: String!, age: Int!, relationship: String!): User!
    login(email: String, password: String): String!
  }
  `;

export default Mutation;

