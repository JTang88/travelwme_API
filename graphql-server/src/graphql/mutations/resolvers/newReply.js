import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
import pubSub from '../../pubSub';

export default {
  newReply: async (parent, { tripCommentId, ...args }, { models }) => {
    console.log('inside of new Reply')
    args._id = new mongoose.Types.ObjectId
    const tripComment = await TripComment.findById(tripCommentId);
    try {
      await tripComment.replyDetails.push({ ...args });
      await tripComment.save();
    } catch (err) {
      console.log(err)
    }
    const newReply = await tripComment.replyDetails[tripComment.replyDetails.length -1];
    // console.log('Here is newReply in newReply resolver', newReply);

    const payload = { tripCommentId, ...args }

    console.log('Here is payload in newReply resolver', payload);


    pubSub.publish('replyAdded', { replyAdded: payload, tripCommentId });
    return newReply;
  }
};

