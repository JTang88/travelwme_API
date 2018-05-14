import mongoose from 'mongoose';

const replySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  commentId: String,
  username: String,
  text: String,
});

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  username: String,
  text: String,
  reply: [replySchema],
});

export default mongoose.model('Comment', commentSchema);

