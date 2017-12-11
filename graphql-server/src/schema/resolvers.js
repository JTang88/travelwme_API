export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({
        where: {
          id,
        },
      }),
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: async (parent, args, { models }) => {
      const id = args.id;
      await delete args.id;
      return models.User.update( args, { where: { id } })
    },
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    createTrip: async (parent, args, { models }) => {
      const userId = args.userId;
      delete args.userId;
      const Trip = await models.Trip.create(args);
      const TripMembers = await models.TripMembers.create({ tripId: Trip.id, userId, user_type: "creator" });
      return Trip;
    }, 
    updateTrip: async (parent, args, { models }) => {
      const id = args.id;
      await delete args.id;
      return models.Trip.update( args, { where: { id } })
    },
    updateTripState: (parent, args, { models }) => 
      models.Trip.update({ trip_state: args.new_state },  { where: { id: args.id } }),
    updateUserRelationshipToTrip: (parent, args, { models }) => 
      models.TripMembers.update({ user_type: args.user_type }, { where: { userId: args.userId, tripId: args.tripId }})
  },
};

// updateUserRelationshipToTrip(id: Int!, tripId: Int!, currentRelationship: String!, newRelationship: String!): Int! 
