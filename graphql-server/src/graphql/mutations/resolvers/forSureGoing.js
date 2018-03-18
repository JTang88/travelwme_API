export default {
  forSureGoing: async (parent, { memberId, tripId }, { models }) => {
    await models.TripMembers.update({ forSureGoing: true }, { where: { id: memberId, tripId }});
    const TripMember = await models.TripMembers.findOne({ where: { id: memberId }});
    return TripMember;
  },
};
