export default {
  fitTrips: (parent, args, { models }) => {
    return models.Trip.findAll({
      include: [{
        model: models.BodyType,
        where: { fitness: args.fitness },
      }],
    });
  },
};