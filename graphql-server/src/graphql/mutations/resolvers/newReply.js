import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub(); 

export default {
  newReply: async (parent, { tripCommentId, ...args }, { models }) => {
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


    pubsub.publish('replyAdded', { replyAdded: payload, tripCommentId });
    return newReply;
  }
};

