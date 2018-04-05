export default {
  updateUserEmail: async (parent, { id, email }, { models }) => {
    await models.User.update( { email }, { where: { id } });
    return models.User.findOne({ where: { id } });
  },
}