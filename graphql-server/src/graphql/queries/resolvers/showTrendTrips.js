export default {
  showTrendTrips: async (parent, { id }, { models }) => {
    const User = await models.User.findOne({
      where: {
        id,
      }
    });
    const Trips = await models.Trip.findAll({
      order: [
        ['interesters', 'DESC']
      ],
      limit: 25,
      where: {
        relationship: User.relationship,
        gender: {
          $or: [User.gender, 'All']
        },
        age_start: { 
          $lte: User.age,
        },
        age_end: { 
          $gte: User.age,
        },
        trip_status: 'open',
      },
      include: [
        {
          model: models.BodyType,
          where: {
            fitness: User.body_type,
          }
        },
      ]
    })
    return Trips;
  },
}