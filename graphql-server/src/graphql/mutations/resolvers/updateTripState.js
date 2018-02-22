export default {
  updateTripState: async (parent, args, { models }) => {
    const tm = await models.Trip.update({ trip_status: args.new_state },  { where: { id: args.id } });
    const trip = await models.Trip.findOne({
      where: {
        id: args.id,
      }
    })
    return trip;
  },
}