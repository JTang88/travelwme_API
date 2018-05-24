import mongoose from 'mongoose';
import pubSub from '../../pubSub';

export default {
  newConvo: async (parent, { convoListId, username, userId, text }, { models, mongo }) => {
    // Use this new convo to get access to sql database and return those fields
    const convo = await new mongo.Convo({});
    const msg = {
      _id: await new mongoose.Types.ObjectId,
      username,
      text,
    }
    await convo.userIds.push(userId);
    await convo.msgs.push(msg);
    convo.save();
    const convoList = await mongo.ConvoList.findById(convoListId);
    const convoId = {
      _id: await new mongoose.Types.ObjectId,
      convoId: convo._id,
    }
    convoList.convoIds.push(convoId);
    pubSub.publish('convoAdded', { convoAdded: convoId, convoListId });
    return convoId;
  }
};



// import mongoose from 'mongoose';

// const convoIdSchema = mongoose.Schema({
//   convoId: String,
// });

// const convoListSchema = mongoose.Schema({
//   convoIds: [convoIdSchema],
// });

// export default mongoose.model('ConvoList', convoListSchema);

// ========================================

// import mongoose from 'mongoose';

// const msgSchema = mongoose.Schema({
//   username: String,
//   text: String,
// });

// const convoSchema = mongoose.Schema({
//   msgs: [msgSchema],
// });

// export default mongoose.model('Convo', convoSchema);