import TripComment from '../../../../../db/models/tripComment';

export default {
  commentDetails: async ({ tripId }, args, { models }) => {
    const tripComment = await TripComment.find({ tripid });
    return tripComment.commentDetails;
  },
  replyDetails: async ({ id }, args, { models }) => {
    const tripComment = await TripComment.find({ tripid });
    return tripComment.replyDetails;
  },
};