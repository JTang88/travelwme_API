import CommentDetails from '../commentDetails/schema';
import ReplyDetails from '../replyDetails/schema';

const TripComment = `
  type TripComment {
    _id: String!
    tripId: Int!
    username: String!
    text: String!
    commentDetails: [CommentDetails]
    replyDetails: [ReplyDetails]
  }`;

export default [TripComment, CommentDetails, ReplyDetails];

