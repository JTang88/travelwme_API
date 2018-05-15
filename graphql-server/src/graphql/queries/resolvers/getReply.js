import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';

export default {
  getReply: async (parent, { tripId }, { models }) => {
    const comment = await Comment.findOne({ tripId });
    console.log('here is comment', comment.replyDetails)
    return comment.replyDetails;
  }
};
