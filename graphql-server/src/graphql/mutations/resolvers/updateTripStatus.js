export default {
  updateTripStatus: async (parent, { id, trip_status }, { models }) => {
    const tm = await models.Trip.update({ trip_status },  { where: { id } });
    const trip = await models.Trip.findOne({
      where: {
        id,
      }
    })
    return trip;
  },
}