import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';

export default {
  getReply: async (parent, { tripId }, { models }) => {
    const comment = await Comment.findOne({ tripId });
    if (comment) {
      return comment.replyDetails;
    }
    return [];
  }
};
