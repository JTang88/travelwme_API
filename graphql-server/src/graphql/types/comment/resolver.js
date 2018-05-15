import Comment from '../../../../../db/models/comment';

export default {
  commentDetails: async ({ tripId }, args, { models }) => {
    const comment = await comment.find({ tripid });
    return comment.commentDetails;
  },
  replyDetails: async ({ id }, args, { models }) => {
    const comment = await comment.find({ tripid });
    return comment.replyDetails;
  },
};