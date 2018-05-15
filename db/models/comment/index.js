import mongoose from 'mongoose';

const commentDetailsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  username: String,
  text: String,
});

const replyDetailsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  commentId: String,
  username: String,
  text: String,
});

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  commentDetails: [commentDetailsSchema],
  replyDetails: [replyDetailsSchema],
});

export default mongoose.model('Comment', commentSchema);

