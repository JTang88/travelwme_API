import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  username: String,
  text: String,
  reply: [mongoose.Schema.Types.Mixed],
});

export default mongoose.model('Comment', commentSchema);