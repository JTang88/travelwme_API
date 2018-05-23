import mongoose from 'mongoose';

export default {
  getConvoList: async (parent, { convoListid }, { models, mongo }) => {
    const convoList = await mongo.convoList.findById(convoListId);
    return convList;
  }
};
