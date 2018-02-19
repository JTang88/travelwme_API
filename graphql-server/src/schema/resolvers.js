import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import util from 'util'

const convertKeywordToId = (comp) => {
  if (comp === 'Adventurer') {
    return 1
  }
  if (comp === 'Backpacker') {
    return 2
  }
  if (comp === 'Explorer') {
    return 3
  }
  if(comp === 'Gourmet ') {
    return 4
  }
  if (comp === 'Historian') {
    return 5
  } 
  if (comp === 'Luxury') {
    return 6
  }
}

const convertBodyTypeToId = (comp) => {
  if (comp === 'athletic') {
    return 1
  }
  if (comp === 'average') {
    return 2
  }
  if (comp === 'sexy') {
    return 3
  }
  if(comp === 'well-rounded') {
    return 4
  }
}


export default {
  User: {
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
      // console.log('this is users in trip resolver', util.inspect(trips, { showHidden: true, depth: 7 }))
      return trips
    }
  },
  Trip: {
    members: ({ id }, args, { models }) => 
    models.TripMembers.findAll({ 
        where: { tripId: id } })
  },
  TripMembers: {
    user: ({ userId }, args, { models }) => 
    models.User.findOne({ 
        where: { id: userId }
    }),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models, user }) => {
      // comment out the following to bybass authentication
 
      // console.log('this is user in getUser resolver', user)

      if(!user) {
        throw new Error("You are not logged in")
      }
      return models.User.findOne({
        where: {
          id,
        },
      })
    },
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
    },
    showTrendTrips: async (parent, { id }, { models }) => {
      const User = await models.User.findOne({
        where: {
          id,
        }
      });
      const Trips = await models.Trip.findAll({
        order: [
          ['createdAt', 'DESC']
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
      console.log('this is the trip that mathces the current user: ', Trips)
      return Trips;
    },
    allTripMembers: (parent, args, { models }) => models.TripMembers.findAll(),
    allTrips: (parent, args, { models }) => models.Trip.findAll(),
    getTrip: (parent, { id }, { models }) =>
      models.Trip.findOne({
        where: {
          id,
        },
      }),
    fitTrips: (parent, args, { models }) => {
      return models.Trip.findAll({
      include: [{
        model: models.BodyType,
        where: { fitness: args.fitness },
      }],
    })
    console.log('here is args', args)
  },

  },

  Mutation: {
    addPhotoToUser: (parent, { publicId, id }, { models }) => {
      return models.User.update( { publicId: publicId }, { where: { id: id } });
    },
    addPhotoToTrip: (parent, { publicId, id }, { models }) => {
      return models.Trip.update( { publicId: publicId }, { where: { id: id } });
    },
    updateUser: async (parent, args, { models }) => {
      const id = args.id;
      await delete args.id;
      return models.User.update( args, { where: { id } })
    },
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),

    createTrip: async (parent, args, { models }) => {
      const Trip = await models.Trip.create(args)
      Trip.addUsers(args.userId, {through: {user_type: "C"}});
     
      const Keys = JSON.parse(args.keys);
      const Body_types = JSON.parse(args.body_types)

      for(let i = 0; i < Keys.length; i++) {
        Trip.addTripKeywords(await convertKeywordToId(Keys[i]));
      }
      for(let i = 0; i < Body_types.length; i++) {
        Trip.addBodyType(await convertBodyTypeToId(Body_types[i]));
      }
      return Trip;
    }, 
    updateTrip: async (parent, args, { models }) => {
      const updateTrip = await models.Trip.update({
        title: args.title, 
        descriptions: args.descriptions, 
        cost: args.cost, 
        date_start: args.date_start, 
        date_end: args.date_end, 
        gender: args.gender, 
        age: args.age, 
        fitness: args.fitness, 
        relationship_status: args.relationship_status, 
        trip_state: args.trip_state,
      }, { where: { id: args.id } });
      return updateTrip;
    },
    updateTripState: async (parent, args, { models }) => {
      const tm = await models.Trip.update({ trip_status: args.new_state },  { where: { id: args.id } });
      const trip = await models.Trip.findOne({
        where: {
          id: args.id,
        }
      })
      return trip;
    },
    updateUserRelationshipToTrip: async (parent, args, { models }) => {
      const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }});
      const trip = await models.Trip.findOne({ 
        where: {
          id: args.tripId,
        }
      })
      return trip;
    },
    updateUserRelationshipToTrip: async (parent, args, { models }) => {
        const tm = await models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }});
        const trip = await models.Trip.findOne({
          where: {
            id: args.tripId,
          }
        })
        return trip;
      },
    interestedInATrip: (parent, args, { models }) => 
      models.TripMembers.create(args),
    register: async (parent, args, { models }) => {
      args.password = await bcrypt.hash(args.password, 12);
      return models.User.create(args);
    },
    login: async (parent, { email, password }, { models }) => {
      const user = await models.User.findOne({ where: { email }}); 
      if(!user) {
        throw new Error('No such user or email exist');
      }

      const valid = await bcrypt.compare(password, user.password); 

      if(!valid) {
        throw new Error('invalid password!!');
      }

      const token = await jwt.sign({
        user: _.pick(user, 'id', 'username')
      }, process.env.TOKEN_SECRET , { expiresIn: '1h' })

      return token;
    }  
  },
};

