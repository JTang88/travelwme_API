export default {
  deleteUser: (parent, args, { models }) =>
    models.User.destroy({ where: args }),
};