export default {
  toggleNewMessage: async (parent, { userId }, { models }) => {
    console.log('in toggleNewMessage')
    await models.User.update({ newMessage: false }, { where: { id: userId } });
    return models.User.findOne({ where: { id: userId } });
  },
}
