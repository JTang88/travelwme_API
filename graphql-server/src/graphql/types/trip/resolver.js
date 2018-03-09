export default {
  members: ({ id }, args, { models }) =>
    models.TripMembers.findAll({
      where: { tripId: id } }),
  creator: async ({ id }, args, { models }) => {
    const { creatorId } = await models.Trip.findOne({ where: { id } });
    return models.User.findOne({ where: { id: creatorId } });
  },
};