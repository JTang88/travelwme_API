export default {
  updateTrip: async (parent, args, { models }) => {
    const updateTrip = await models.Trip.update({
      title: args.title, 
      descriptions: args.descriptions, 
      cost: args.cost, 
      date_start: args.date_start, 
      date_end: args.date_end, 
      gender: args.gender, 
      age: args.age, 
      fitness: args.fitness, 
      relationship_status: args.relationship_status, 
      trip_state: args.trip_state,
    }, { where: { id: args.id } });
    return updateTrip;
  },
}