

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

const convertBodyTypeToId = (comp) => {
  if (comp === 'athletic') {
    return 1
  }
  if (comp === 'average') {
    return 2
  }
  if (comp === 'sexy') {
    return 3
  }
  if(comp === 'well-rounded') {
    return 4
  }
}

export default {
  createTrip: async (parent, args, { models }) => {
    const Trip = await models.Trip.create(args)
    // Trip.addUsers(args.userId, {through: {user_type: "C"}});
   
    const Keys = JSON.parse(args.keys);
    const Body_types = JSON.parse(args.body_types)

    for(let i = 0; i < Keys.length; i++) {
      Trip.addTripKeywords(await convertKeywordToId(Keys[i]));
    }
    for(let i = 0; i < Body_types.length; i++) {
      Trip.addBodyType(await convertBodyTypeToId(Body_types[i]));
    }
    return Trip;
  }, 
}