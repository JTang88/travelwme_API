import mongoose from 'mongoose';
import pubSub from '../../pubSub';

export default {
  newMsg: async (parent, { username, text, convoId }, { models, mongo }) => {
    const newMsg = {
      _id: await new mongoose.Types.ObjectId,
      username,
      text,
    }
    const convo = await mongo.Convo.findById(convoId);
    convo.msgs.push(newMsg);
    await convo.save();

    pubSub.publish('msgAdded', { msgAdded: newMsg, convoId });
    return newMsg;
  }
};