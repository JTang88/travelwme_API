import Convo from '../../../../../db/models/convo';

export default {
  msgs: async ({ _id }, args, { models }) => {
    const convo = await Convo.findById(_id);
    return convo.msgs;
  },
  users: async ({ userIds }, args, { models }) => {
    const users = await models.User.findAll({
      where: {
        id: userIds,
      }
    });
    return users;
  },
};
