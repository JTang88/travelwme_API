export default {
  searchTrips: async (parent, args, { models }) => { 
    console.log('this is args =========================================== ', args)
    const locationKey = args.country === null ? 'continent' : 'country';
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
          $lte: User.age,
        },
        age_end: { 
          $gte: User.age,
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
            [locationKey]: args[locationKey],
          }
        }
      ]
    })
    return Trips;
  }
};
