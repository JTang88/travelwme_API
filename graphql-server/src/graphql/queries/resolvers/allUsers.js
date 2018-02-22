export default {
  allUsers: (parent, args, { models }) => models.User.findAll(),
};
