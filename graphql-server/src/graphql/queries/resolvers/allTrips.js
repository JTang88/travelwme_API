export default {
  allTrips: (parent, args, { models }) => models.Trip.findAll(),
};