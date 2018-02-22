export default {
  allTripMembers: (parent, args, { models }) => models.TripMembers.findAll(),
};