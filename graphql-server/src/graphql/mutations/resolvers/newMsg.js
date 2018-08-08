import mongoose from 'mongoose';
import pubSub from '../../pubSub';

export default {
  newMsg: async (parent, { userId, text, convoId, receiverUserId }, { models, mongo }) => {
    models.User.update({ newMessage: true }, { where: { id: receiverUserId } });
    const newMsg = {
      _id: await new mongoose.Types.ObjectId,
      userId,
      text,
    }
    const convo = await mongo.Convo.findById(convoId);
    convo.msgs.push(newMsg);
    await convo.save();

    pubSub.publish('msgAdded', { msgAdded: newMsg, convoId });
    return newMsg;
  }
};