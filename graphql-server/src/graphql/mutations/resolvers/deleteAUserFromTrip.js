export default {
  deleteAUserFromTrip: async (parent, { memberId }, { models }) => {
    const result = await models.TripMembers.destroy({ where: { id: memberId }});
    return result;
  },
}
