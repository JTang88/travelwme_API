export default {
  members: ({ id }, args, { models }) =>
    models.TripMembers.findAll({
      where: { tripId: id } }),
};