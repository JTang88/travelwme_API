export default {
  updateUser: async (parent, args, { models }) => {
    const id = args.id;
    await delete args.id;
    return models.User.update( args, { where: { id } })
  },
}