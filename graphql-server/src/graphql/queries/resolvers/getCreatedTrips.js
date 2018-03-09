export default {
  getCreatedTrips: async (parent, { id }, { models }) => {
    return models.Trip.findAll({
      where: {
        creatorId: id,
      },
    });
  }
}
