export default {
  interestedInATrip: async (parent, { userId, tripId }, { models }) => {
    const tripMember = await models.TripMembers.create({ userId, tripId, user_type: 'I' })
    console.log('this is tripMember you get from interestedInATrip: ', tripMember);
    return tripMember;
  }
};

