import getAge from '../../../../services/getAge';

export default {
  searchTrips: async (parent, args, { models }) => { 
    console.log('this is args =========================================== ', args)
    const locationKey = args.countries === null ? 'continents' : 'countries';
    const CountriesContinentsKey = locationKey === 'continents' ? 'continent' : 'country'
    const User = await models.User.findOne({
      where: {
        id: args.userId,
      }
    });

    const Trips = await models.Trip.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      where: {
        relationship: {
          $or: [User.relationship, 'all'],
        },
        gender: {
          $or: [User.gender, 'all'],
        },
        age_start: { 
          $lte: getAge(User.birthday),
        },
        age_end: { 
          $gte: getAge(User.birthday),
        },
        cost:  { 
          $between: [args.cost_start, args.cost_end]
        },
        date_start: { 
          $between: [new Date(args.date_start), new Date(args.date_end)]
        },
        trip_status: 'open',
      },
      include: [
        {
          model: models.TripKeyword,
          where:{
            word: {
              $or: JSON.parse(args.keys)
            }
          }
        },
        {
          model: models.CountriesContinents,
          where: {
            [CountriesContinentsKey]: {
              $or: JSON.parse(args[locationKey]),
            },
          }
        }
      ]
    })
    return Trips;
  }
};
