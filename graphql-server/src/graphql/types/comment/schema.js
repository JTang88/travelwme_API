import CommentDetails from '../commentDetails/schema';
import ReplyDetails from '../replyDetails/schema';

const Comment = `
  type Comment {
    _id: String!
    tripId: Int!
    username: String!
    text: String!
    commentDetails: [CommentDetails]
    replyDetails: [ReplyDetails]
  }`;

export default [Comment, CommentDetails, ReplyDetails];

