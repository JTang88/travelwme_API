import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';

export default {
  getTripComments: async (parent, { tripCommentId }, { models }) => {
    const tripComment = await TripComment.findById(tripCommentId);
    return tripComment.commentDetails
  }
};

