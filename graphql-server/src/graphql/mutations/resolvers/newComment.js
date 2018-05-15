import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';
import { PubSub } from 'graphql-subscriptions'

export const pubsub = new PubSub(); 

export default {
  newComment: async (parent, { username, tripId, text }, { models }) => {
    const newComment = {
      _id: new mongoose.Types.ObjectId,
      username,
      tripId,
      text,
    }
    let comment = await Comment.findOne({ tripId });

    console.log('commnet in now commnet resolver')
    if (comment) {
      comment.commentDetails.push(newComment);
    } else {
      comment = new Comment({
        _id: new mongoose.Types.ObjectId,
        tripId,
        commentDetails: [newComment],
      })
    }

    try {
      await comment.save();
      console.log('this is comment==================', comment)

    } catch (err) {
      console.log(err)
    }
    // add new comment to mongoDb
    pubsub.publish('commentAdded', { commentAdded: newComment, tripId });
    return newComment;
  }
};

