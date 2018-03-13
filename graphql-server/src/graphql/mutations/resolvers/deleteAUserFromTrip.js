export default {
  deleteAUserFromTrip: async (parent, { userId, tripId }, { models }) => {
    const test =  await models.TripMembers.destroy({ where: { userId, tripId }});
    console.log('this is test', test);
    return test;
  },
}