import mongoose from 'mongoose';

const commentDetailsSchema = mongoose.Schema({
  username: String,
  publicId: String,
  text: String,
});

const replyDetailsSchema = mongoose.Schema({
  commentId: String,
  username: String,
  publicId: String,
  text: String,
});

const tripCommentSchema = mongoose.Schema({
  commentDetails: [commentDetailsSchema],
  replyDetails: [replyDetailsSchema],
});

export default mongoose.model('TripComment', tripCommentSchema);

