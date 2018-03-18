export default {
  updateTripStat: async (parent, { tripId, field, type }, { models }) => {
    const Trip = await models.Trip.findOne({
      where: {
        id: tripId,
      }
    });
    const num = type === 'inc' ? Trip.dataValues[field] + 1 : Trip.dataValues[field] - 1
    await models.Trip.update({
      [field]: num
    }, {
      where: {
        id: tripId,
      }
    })
    const updatedTrip = models.Trip.findOne({
      where: {
        id: tripId,
      }
    });
    return updatedTrip;
  },
}