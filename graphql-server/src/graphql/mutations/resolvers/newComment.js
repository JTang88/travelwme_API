import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
import { PubSub } from 'graphql-subscriptions'

export const pubsub = new PubSub(); 

export default {
  newComment: async (parent, { username, text, tripCommentId }, { models }) => {
    const newComment = {
      _id: await new mongoose.Types.ObjectId,
      username,
      text,
    }
    const payload = Object.assign({}, newComment, { tripCommentId })
    try {
      const tripComment = await TripComment.findById(tripCommentId);
      tripComment.commentDetails.push(newComment);
      await tripComment.save();
      console.log('this is tripComment==================', tripComment)
      console.log('Here is tripCommentId in newCommnet resolver', typeof tripCommentId)
    } catch (err) {
      console.log(err)
    }
    // add new comment to mongoDb
    pubsub.publish('commentAdded', { commentAdded: payload, tripCommentId });
    return newComment;
  }
};

