import mongoose from 'mongoose';
import Comment from '../../../../../db/models/comment';
import { pubsub } from '../../index';

export default {
  getComments: async (parent, { username, tripId, text }, { models }) => {
    const comments = Comment.find({ tripId }).exec();
    return comments
  }
};

// query getComments($tripId: Int!) {
//   getComments(tripId: $tripId) {
//     _id
//     username
//     text
//   }
// } `;