export default {
  interestedInATrip: (parent, args, { models }) => 
    models.TripMembers.create(args),
};

