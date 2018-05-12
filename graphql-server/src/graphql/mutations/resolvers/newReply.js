import mongoose from 'mongoose';
import Reply from '../../../../../db/models/reply';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub(); 

export default {
  newReply: async (parent, args, { models }) => {
    args._id = await new mongoose.Types.ObjectId
    const reply = await new Reply(args);
    try {
      await reply.save();
      console.log('this is Reply', reply);
    } catch (err) {
      console.log(err)
    }
    console.log('this is args', args)
    pubsub.publish('replyAdded', { replyAdded: reply, tripId: args.tripId });
    return args
  }
};


// export default {
//   newComment: async (parent, { username, tripId, text }, { models }) => {
//     const comment = new Comment({
//       _id: new mongoose.Types.ObjectId,
//       username,
//       tripId,
//       text,
//     })
//     try {
//       await comment.save();
//       console.log('this is comment==================', comment)

//     } catch (err) {
//       console.log(err)
//     }
//     // add new comment to mongoDb
//     pubsub.publish('commentAdded', { commentAdded: comment, tripId });
//     return comment
//   }
// };
