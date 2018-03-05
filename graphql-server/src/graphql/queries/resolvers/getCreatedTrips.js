// export default {
//   getCreatedTrips: async (parent, { id }, { models }) => {
//     console.log('inside of getCreatedTips!!============')
//     const Trips = await models.Trip.findAll({
//       include: [{
//         model: models.TripMembers,
//         where: {
//           userId: id,
//           user_type: 'C',
//         },
//       }],
//     })
//     console.log('this is Trip from getCreatedTips', Trips);
//     return Trips;
//   },
// };

export default {
  getCreatedTrips: async (parent, { id }, { models }) => {
    const targetedTripIds = [];
    const targetedTrips = await models.TripMembers.findAll({
      where: {
        userId: id,
        user_type: 'C',
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
