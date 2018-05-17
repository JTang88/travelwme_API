import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
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
    let tripComment = await TripComment.findOne({ tripId });

    console.log('commnet in now commnet resolver')
    if (tripComment) {
      tripComment.commentDetails.push(newComment);
    } else {
      tripComment = new TripComment({
        _id: new mongoose.Types.ObjectId,
        tripId,
        commentDetails: [newComment],
      })
    }

    try {
      await tripComment.save();
      console.log('this is tripComment==================', tripComment)

    } catch (err) {
      console.log(err)
    }
    // add new comment to mongoDb
    pubsub.publish('commentAdded', { commentAdded: newComment, tripId });
    return newComment;
  }
};

