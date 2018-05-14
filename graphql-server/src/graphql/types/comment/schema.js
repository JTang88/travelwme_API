const Comment = `
  type Comment {
    _id: String!
    tripId: Int!
    username: String!
    text: String!
    reply: [Reply]
  }`;

export default Comment;

