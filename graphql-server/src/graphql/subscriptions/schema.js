const Subscription = `
  type Subscription {
    commentAdded(tripCommentId: String!): CommentDetails
    replyAdded(tripCommentId: String!): ReplyDetails
    noteAdded(notificationId: String!): Note
  }
`;

export default Subscription;
