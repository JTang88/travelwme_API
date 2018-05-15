const Subscription = `
  type Subscription {
    commentAdded(tripId: Int!): CommentDetails
    replyAdded(tripId: Int): ReplyDetails
  }
`;

export default Subscription;
