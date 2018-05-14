import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub(); 
// it's a question whether another subs needs a new instance on the same query... for this case

export default {
  newReply: async (parent, args, { models }) => {
    try {
      args._id = await new mongoose.Types.ObjectId
      const comment = await Comment.findById(args.commentId);
      comment.reply.push(args);
      comment.save();
     
    } catch (err) {
      console.log(err)
    }
    pubsub.publish('replyAdded', { replyAdded: args, tripId: args.tripId });
    return args
  }
};

