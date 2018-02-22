export default {
  trips: async ({ id }, args, { models }) => {
    const trips = await models.Trip.findAll({
      include: [{
        model: models.User,
        where: { id },
        through: {
          attributes: ['user_type']
        }
      }],
    })
    trips.forEach((trip, idx) => {
      trip.user_type = trip.dataValues.users[0].dataValues.TripMembers.user_type;
    });
    return trips
  }
}