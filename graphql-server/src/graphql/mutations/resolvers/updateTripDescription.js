export default {
  updateTripDescription: async (parent, { id, description }, { models }) => {
    const tm = await models.Trip.update({ description },  { where: { id } });
    const trip = await models.Trip.findOne({
      where: {
        id,
      }
    })
    return trip;
  },
}