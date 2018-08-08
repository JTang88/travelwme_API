import mongoose from 'mongoose';
import pubSub from '../../pubSub';

export default {
  interestedInATrip: async (parent, { userId, tripId, senderName, creatorId, tripTitle }, { models, mongo }) => {
    try {
      const tripMember = await models.TripMembers.create({ userId, tripId, user_type: 'I' })
      const user = await models.User.findById(creatorId);
      user.newNotification = true;
      user.save();
      const { notificationId } = user;
      const notication = await mongo.Notification.findById(notificationId);
      const note = {
        _id: await new mongoose.Types.ObjectId,
        type: 'request',
        senderName,
        tripTitle,
        tripId,
      }
      await notication.notes.push(note);
      notication.save();
      pubSub.publish('noteAdded', { noteAdded: note, notificationId });
      return tripMember;
    } catch(err) {
      console.log(err);
    }
  }
};
