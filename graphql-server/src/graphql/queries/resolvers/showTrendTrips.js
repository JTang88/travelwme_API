import getAge from '../../../../services/getAge';

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
        relationship: {
          $or: [User.relationship, 'all']
        },
        gender: {
          $or: [User.gender, 'all']
        },
        age_start: { 
          $lte: getAge(User.birthday),
        },
        age_end: { 
          $gte: getAge(User.birthday),
        },
        trip_status: 'open',
      },
    })
    return Trips;
  },
}
