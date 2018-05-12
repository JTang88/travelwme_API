import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';

export default {
  getComments: async (parent, { username, tripId, text }, { models }) => {
    const comments = Comment.find({ tripId }).exec();
    return comments
  }
};

