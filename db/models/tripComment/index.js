import mongoose from 'mongoose';

const commentDetailsSchema = mongoose.Schema({
  tripId: Number,
  username: String,
  text: String,
});

const replyDetailsSchema = mongoose.Schema({
  tripId: Number,
  commentId: String,
  username: String,
  text: String,
});

const tripCommentSchema = mongoose.Schema({
  tripId: Number,
  commentDetails: [commentDetailsSchema],
  replyDetails: [replyDetailsSchema],
});

export default mongoose.model('TripComment', tripCommentSchema);

