import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub(); 

export default {
  newReply: async (parent, args, { models }) => {
    args._id = new mongoose.Types.ObjectId
    const comment = await Comment.findOne({ tripId: args.tripId });
    await comment.replyDetails.push(args);

    try {
      await comment.save();
    } catch (err) {
      console.log(err)
    }

    const newReply = comment.replyDetails[comment.replyDetails.length -1];
    console.log('here is comment.replyDetails in newReply', comment.replyDetails)
    pubsub.publish('replyAdded', { replyAdded: newReply, tripId: args.tripId });
    return newReply;
  }
};

