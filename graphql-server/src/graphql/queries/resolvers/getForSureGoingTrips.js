export default {
  getForSureGoingTrips: async (parent, { id }, { models }) => {
    const targetedTripIds = [];
    const targetedTrips = await models.TripMembers.findAll({
      where: {
        userId: id,
        user_type: 'J',
        forSureGoing: true,
      }
    });

    for(let i = 0; i < targetedTrips.length; i++) {
      targetedTripIds.push(targetedTrips[i].dataValues.tripId);
    }

    return models.Trip.findAll({
       where: {
         id: targetedTripIds,
       }
    })
  },
};