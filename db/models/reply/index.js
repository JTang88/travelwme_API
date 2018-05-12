import mongoose from 'mongoose';

const replySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tripId: Number,
  commentId: String,
  username: String,
  text: String,
});

export default mongoose.model('Reply', replySchema);

