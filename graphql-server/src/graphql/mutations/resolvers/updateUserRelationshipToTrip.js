import pubSub from '../../pubSub';
import mongoose from 'mongoose';

export default {
  updateUserRelationshipToTrip: async (parent, args, { models, mongo }) => {
    try {
      const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId } });
      const result = await models.TripMembers.findOne({ where: { userId: args.userId, tripId: args.tripId } });
      // find the user's notificationId
      const { notificationId } = await models.User.findById(args.userId);
      console.log('here is notificationId', notificationId);
      // store the new notification to such id location
      const notication = await mongo.Notification.findById(notificationId);
      const note = {
        _id: await new mongoose.Types.ObjectId,
        type: 'accepted',
        senderName: args.senderName,
        tripTitle: args.tripTitle,
        tripId: args.tripId,
      }
      await notication.notes.push(note);
      notication.save();
      pubSub.publish('noteAdded', { noteAdded: note, notificationId });
      return result;
    } catch(err) {
      console.log(err);
    }
  },
};


// import mongoose from 'mongoose';

// const noteSchema = mongoose.Schema({
//   type: String,
//   senderName: String,
//   tripName: String,
//   tripId: Number,
// });

// const noticationSchema = mongoose.Schema({
//   notes: [noteSchema],
// });

// export default mongoose.model('Notification', noticationSchema);