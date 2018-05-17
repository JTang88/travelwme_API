import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';

export default {
  getReply: async (parent, { tripId }, { models }) => {
    const tripComment = await TripComment.findOne({ tripId });
    if (tripComment) {
      return tripComment.replyDetails;
    }
    return [];
  }
};
