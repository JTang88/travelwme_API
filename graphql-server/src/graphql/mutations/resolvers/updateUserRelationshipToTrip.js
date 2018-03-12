export default {
  updateUserRelationshipToTrip: async (parent, args, { models }) => {
    const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }});
    const result = await models.TripMembers.findOne({ where: { userId: args.userId, tripId: args.tripId }});
    return result;
  },
};
