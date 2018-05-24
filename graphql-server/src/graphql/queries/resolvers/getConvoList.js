import mongoose from 'mongoose';

export default {
  getConvoList: async (parent, { convoListId }, { models, mongo }) => {
    const convoList = await mongo.ConvoList.findById(convoListId);
    return convoList;
  }
};
