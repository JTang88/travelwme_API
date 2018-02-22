export default {
  searchTrip: async (parent, args, { models }) => {
    const Trips = await models.Trip.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      where: {
        relationship: args.relationship,
        gender: {
          $or: [args.gender, 'All']
        },
        age_start: { 
          $lte: args.age,
        },
        age_end: { 
          $gte: args.age,
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
            fitness: args.body_type,
          }
        }, {
          model: models.TripKeyword,
          where:{
            word: {
              $or: JSON.parse(args.keys)
            }
          }
        }
      ]
    })
    return Trips;
  }
};