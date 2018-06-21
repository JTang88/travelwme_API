import mongoose from 'mongoose';
import TripComment from '../../../../../db/models/tripComment';
import pubSub from '../../pubSub';

export default {
  newComment: async (parent, { username, publicId, text, tripCommentId }, { models }) => {
    const newComment = {
      _id: await new mongoose.Types.ObjectId,
      username,
      text,
      publicId,
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
    pubSub.publish('commentAdded', { commentAdded: payload, tripCommentId });
    return newComment;
  }
};

