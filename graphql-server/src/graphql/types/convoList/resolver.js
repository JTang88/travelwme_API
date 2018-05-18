import ConvoList from '../../../../../db/models/convoList';

export default {
  convoIds: async ({ _id }, args, { models }) => {
    const convoList = await ConvoList.findById(_id);
    return convoList.convoIds;
  },
};

