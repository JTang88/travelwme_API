updateUserRelationshipToTrip: async (parent, args, { models }) => {
  const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }});
  const trip = await models.Trip.findOne({ 
    where: {
      id: args.tripId,
    }
  })
  return trip;
};