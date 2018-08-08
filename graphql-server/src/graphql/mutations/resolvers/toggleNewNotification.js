export default {
  toggleNewNotification: async (parent, { userId }, { models }) => {
    console.log('in toggleNewNotification')

    await models.User.update({ newNotification: false }, { where: { id: userId } });
    return models.User.findOne({ where: { id: userId } });
  },
}