import mongoose from 'mongoose';

const msgSchema = mongoose.Schema({
  username: String,
  text: String,
});

const convoSchema = mongoose.Schema({
  userIds: [],
  msgs: [msgSchema],
});

export default mongoose.model('Convo', convoSchema);