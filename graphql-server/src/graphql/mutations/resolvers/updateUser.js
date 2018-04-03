export default {
  updateUser: async (parent, { id, ...args }, { models }) => {
    const targetFields = {};
    for (let x in args) {
      if (args[x] !== null) {
        targetFields[x] = args[x];
      }
    }
    await models.User.update(targetFields, { where: { id } });
    return models.User.findOne({ where: { id } });
  },
}