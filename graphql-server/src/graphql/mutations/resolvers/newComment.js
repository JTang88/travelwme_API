import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';
import { pubsub } from '../../index'; 

export default {
  newComment: async (parent, { username, tripId, text }, { models }) => {
    const comment = new Comment({
      _id: new mongoose.Types.ObjectId,
      username,
      tripId,
      text,
    })


    try {
      await comment.save();
      console.log('this is comment==================', comment)

    } catch (err) {
      console.log(err)
    }
    // add new comment to mongoDb
    pubsub.publish('commentAdded', { commentAdded: comment, tripId });
    return comment
  }
};

// addMessage: (root, { message }) => {
//   const channel = channels.find(channel => channel.id ===
// message.channelId);
//   if(!channel)
//     throw new Error(“Channel does not exist”);
//   const newMessage = { id: String(nextMessageId++), text: message.text };
//   channel.messages.push(newMessage);
//   pubsub.publish(‘messageAdded’, { messageAdded: newMessage, channelId: message.channelId });
//   return newMessage;
// }