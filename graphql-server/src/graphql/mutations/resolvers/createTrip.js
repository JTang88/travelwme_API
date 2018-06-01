const convertKeywordToId = (comp) => {
  if (comp === 'Adventurer') {
    return 1
  }
  if (comp === 'Backpacker') {
    return 2
  }
  if (comp === 'Explorer') {
    return 3
  }
  if(comp === 'Gourmet ') {
    return 4
  }
  if (comp === 'Historian') {
    return 5
  } 
  if (comp === 'Luxury') {
    return 6
  }
}

export default {
  createTrip: async (parent, args, { models, mongo }) => {
    const tripComment = await new mongo.TripComment({}).save();
    args.tripCommentId = tripComment._id.toString();
    const cc = await models.CountriesContinents.findAll({
      where: {
        country: {
          $or: JSON.parse(args.countries),
        },
      }
    })
    console.log('here is args in createTrip', args)
    const Trip = await models.Trip.create(args);
    Trip.addCountriesContinents(cc);

    const Keys = JSON.parse(args.keys);

    for(let i = 0; i < Keys.length; i++) {
      Trip.addTripKeywords(await convertKeywordToId(Keys[i]));
    }
    return Trip;
  }, 
}