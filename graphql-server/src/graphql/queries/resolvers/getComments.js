import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';

export default {
  getComments: async (parent, { username, tripId, text }, { models }) => {
    const comments = await Comment.findOne({ tripId });
    if (!comments) {
      return [];
    }
    console.log('this is comment.details', comments)
    return comments.commentDetails
  }
};

