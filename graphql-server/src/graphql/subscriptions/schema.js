const Subscription = `
  type Subscription {
    commentAdded(tripCommentId: String!): CommentDetails
    replyAdded(tripCommentId: String!): ReplyDetails
    noteAdded(notificationId: String!): Note
    convoAdded(convoListId: String!): ConvoId
    msgAdded(convoId: String!) : Msg
  }
`;

export default Subscription;
