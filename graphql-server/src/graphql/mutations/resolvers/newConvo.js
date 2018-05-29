import mongoose from 'mongoose';
import pubSub from '../../pubSub';

export default {
  newConvo: async (parent, { convoListId, userId, username, receiverUserId, text }, { models, mongo }) => {
    // Use this new convo to get access to sql database and return those fields
    const receiver = await models.User.findById(receiverUserId);
    const receiverConvoListId = receiver.convoListId;
    console.log('=========================here is receiverConvoListId===================', receiverConvoListId)


    const convo = await new mongo.Convo({});
    const msg = {
      _id: await new mongoose.Types.ObjectId,
      username,
      text,
    }
    await convo.userIds.push(userId);
    await convo.userIds.push(receiverUserId);
    await convo.msgs.push(msg);
    convo.save();

    const convoList = await mongo.ConvoList.findById(convoListId);
    await convoList.convoIds.push(convo._id);

    const receiverConvoList = await mongo.ConvoList.findById(receiverConvoListId);
    await receiverConvoList.convoIds.push(convo._id);

    convoList.save();
    receiverConvoList.save();

    pubSub.publish('convoAdded', { convoAdded: convo._id, convoListId });
    pubSub.publish('convoAdded', { convoAdded: convo._id, convoListId: receiverConvoListId });

    return convo._id;
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