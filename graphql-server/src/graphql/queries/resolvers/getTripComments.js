import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';

export default {
  getTripComments: async (parent, { username, tripId, text }, { models }) => {
    const tripComment = await TripComment.findOne({ tripId })
    if (!tripComment) {
      return [];
    }
    console.log('this is comment.details', tripComment)
    return tripComment.commentDetails
  }
};

