import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';

export default {
  getReply: async (parent, { tripCommentId }, { models }) => {
    console.log('insdie of getRply')
    const tripComment = await TripComment.findById(tripCommentId);
    if (tripComment) {
      return tripComment.replyDetails;
    }
    return [];
  }
};
