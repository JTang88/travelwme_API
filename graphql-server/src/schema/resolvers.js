import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import util from 'util'

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
      return trips
    }
    
  },
  Trip: {
    users: async ({ id }, args, { models }) => {
      const users = await models.User.findAll({
        include: [{
          model: models.Trip,
          where: { id },
          through: {
            attributes: ['user_type']
          }
        }],
      })
      users.forEach((user, idx) => {
        user.user_type = user.dataValues.trips[0].dataValues.TripMembers.user_type;
      });
      return users
    },
    members: ({ id }, args, { models }) => 
    models.TripMembers.findAll({ 
        where: { tripId: id }
    })
  },
  TripMembers: {
    users: ({ userId }, args, { models }) => 
    models.User.findAll({ 
        where: { id: userId }
    }),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll()
    // .then((user)=>{console.log('users', user)} ),
    ,
    getUser: (parent, { id }, { models, user }) => {
      // comment out the following to bybass authentication
 
      // console.log('this is user in getUser resolver', user)

      // if(!user) {
      //   throw new Error("You are not logged in")
      // }
      return models.User.findOne({
        where: {
          id,
        },
      })
    },
    searchTrip: (parent, args, { models }) => {
      return models.Trip.findAll({
        where: {
          gender: {
            [Op.or]: [args.gender, All]
          },
          age: { 
            [Op.between]: [args.ageStart, args.ageEnd]
          },
          cost: args.cost,
          relationship: args.relationship,
          trip_status: 'open',
          date_start: { 
            [Op.between]: [args.date_start, args.date_end]
          }
        },
        include: [{
          model: models.BodyType,
          where: {
            fitness: args.body_type,
          },
          // include: [{
          //   model: models.TripKeyword,
          //   where:{
          //     id: {
          //       [Op.or]: args.keys
          //     }
          //   }
          // }]
        }]
      })
    },
    allTripMembers: (parent, args, { models }) => models.TripMembers.findAll(),
    allTrips: (parent, args, { models }) => models.Trip.findAll(),
    getTrip: (parent, { id }, { models }) =>
      models.Trip.findOne({
        where: {
          id,
        },
      }),

  },

  Mutation: {
    addPhotoToUser: (parent, { publicId, id }, { models }) => {
      console.log(publicId);
      console.log(id)
      return models.User.update( { publicId: publicId }, { where: { id: id } });
    },
    updateUser: async (parent, args, { models }) => {
      const id = args.id;
      await delete args.id;
      return models.User.update( args, { where: { id } })
    },
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),

    createTrip: async (parent, args, { models }) => {
      const Trip = await models.Trip.create({
        title: args.title, 
        descriptions: args.descriptions, 
        cost: args.cost, 
        date_start: args.date_start, 
        date_end: args.date_end, 
        gender: args.gender, 
        age: args.age,  
        relationship: args.relationship, 
        trip_status: 'open',
      })
      .then ((createdTrip)=>{
        createdTrip.addTripKeywords(args.keys);
        createdTrip.addBodyType(args.body_types);
      });
      const TripMembers = await models.TripMembers.create({ 
        tripId: Trip.id, 
        userId: args.userId, 
        user_type: "C" 
      });
      // const Trip_Details = await models.Trip.addTripKeyword([1,2])
      // // const Fitness = await models.Trip_Details.create({
      // //   tripId: Trip.id,
      // //   keys: [1,2]

      // // })
      return Trip;
    }, 
    // addKeyWords: async (parent, { id }, {models}) =>{
    //   await models.Trip.findOne({
    //     where: {
    //       id,
    //     },
    //   })
    //   .then ((trip)=> {
    //     trip.addTripKeywords([1])
    //   })
    //   return Trip;
    // },
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

      // const updateTripKeyword = await models.TripKeyword.update({
      //   tripId: Trip.id,
      //   key1: args.key1,
      //   key2: args.key2,
      //   key3: args.key3,
      //   key4: args.key4,
      //   key5: args.key5,
      //   key6: args.key6,
      // }, { where: { tripId: args.id } } );
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

      const valid = bcrypt.compare(password, user.password); 

      if(!valid) {
        throw new Error('invalid password motherfuckers!!');
      }

      const token = await jwt.sign({
        user: _.pick(user, 'id', 'username')
      }, process.env.TOKEN_SECRET , { expiresIn: '1h' })

      return token;
    }  
  },
};

// user.addProject(project, { through: { status: 'started' }})


// updateUserRelationshipToTrip(id: Int!, tripId: Int!, currentRelationship: String!, newRelationship: String!): Int! 
