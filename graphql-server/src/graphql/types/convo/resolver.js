import Convo from '../../../../../db/models/convo';

export default {
  msgs: async ({ _id }, args, { models }) => {
    const convo = await Convo.findById(_id);
    return convo.msgs;
  },
};
