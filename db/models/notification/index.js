import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  type: String,
  senderName: String,
  tripName: String,
  tripId: Number,
});

const noticationSchema = mongoose.Schema({
  notes: [noteSchema],
});

export default mongoose.model('Notification', noticationSchema);