const Subscription = `
  type Subscription {
    commentAdded(tripCommentId: String!): CommentDetails
    replyAdded(tripCommentId: String!): ReplyDetails
  }
`;

export default Subscription;
