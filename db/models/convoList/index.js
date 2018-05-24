import mongoose from 'mongoose';

const convoListSchema = mongoose.Schema({
  convoIds: [],
});

export default mongoose.model('ConvoList', convoListSchema);