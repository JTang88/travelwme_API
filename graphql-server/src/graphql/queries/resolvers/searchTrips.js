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
          model: models.BodyType,
          where: {
            fitness: User.body_type,
          }
        }, {
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
    console.log('this is the trips I found for you: ', Trips)
    console.log('this is User_body_type: ', User.body_type)

    return Trips;
  }
};


// export default {
//   showTrendTrips: async (parent, { id }, { models }) => {
//     const User = await models.User.findOne({
//       where: {
//         id,
//       }
//     });
//     const Trips = await models.Trip.findAll({
//       order: [
//         ['createdAt', 'DESC']
//       ],
//       limit: 25,
//       where: {
//         relationship: User.relationship,
//         gender: {
//           $or: [User.gender, 'All']
//         },
//         age_start: { 
//           $lte: User.age,
//         },
//         age_end: { 
//           $gte: User.age,
//         },
//         trip_status: 'open',
//       },
//       include: [
//         {
//           model: models.BodyType,
//           where: {
//             fitness: User.body_type,
//           }
//         },
//       ]
//     })
//     return Trips;
//   },
// }