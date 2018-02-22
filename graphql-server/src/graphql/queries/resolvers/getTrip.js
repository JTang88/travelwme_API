export default {
  getTrip: (parent, { id }, { models }) =>
    models.Trip.findOne({
      where: {
        id,
      },
    }),
};