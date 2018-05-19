export default {
  updateUserRelationshipToTrip: async (parent, args, { models, mongo }) => {
    const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }});
    const result = await models.TripMembers.findOne({ where: { userId: args.userId, tripId: args.tripId }});
  
    // find the user's notificationId
    const { notificationId } = await models.User.findById(args.userId);
    console.log('here is notificationId', notificationId);
    // store the new notification to such id location
    const notication = await mongo.Notification.findById(notificationId);
    const note = { 
       type: 'accepted',
       senderName: args.username,
       tripTitle: args.tripName,
       tripId: args.tripId,
     }
    await notication.notes.push(note);
    notication.save();
    return result;
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