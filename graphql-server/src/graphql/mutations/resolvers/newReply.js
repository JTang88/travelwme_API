import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub(); 

export default {
  newReply: async (parent, args, { models }) => {
    args._id = new mongoose.Types.ObjectId
    const tripComment = await TripComment.findOne({ tripId: args.tripId });
    await tripComment.replyDetails.push(args);

    try {
      await tripComment.save();
    } catch (err) {
      console.log(err)
    }

    const newReply = tripComment.replyDetails[tripComment.replyDetails.length -1];
    console.log('here is tripComment.replyDetails in newReply', tripComment.replyDetails)
    pubsub.publish('replyAdded', { replyAdded: newReply, tripId: args.tripId });
    return newReply;
  }
};

