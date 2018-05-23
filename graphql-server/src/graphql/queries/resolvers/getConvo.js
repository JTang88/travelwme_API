import mongoose from 'mongoose';

export default {
  getConvo: async (parent, { convoId }, { models, mongo }) => {
    const convo = await mongo.Convo.findById(convoId);
    return convo;
  }
};