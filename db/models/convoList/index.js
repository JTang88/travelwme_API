import mongoose from 'mongoose';

const convoIdSchema = mongoose.Schema({
  convoId: String,
});

const convoListSchema = mongoose.Schema({
  convoIds: [convoIdSchema],
});

export default mongoose.model('ConvoList', convoListSchema);