const Subscription = `
  type Subscription {
    commentAdded(tripId: Int!): Comment
    replyAdded(tripId: Int): Reply
  }
`;

export default Subscription;
