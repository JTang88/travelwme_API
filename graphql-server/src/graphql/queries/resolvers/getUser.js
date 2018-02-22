export default {
  getUser: (parent, { id }, { models, user }) => {
    if (!user) {
      throw new Error('You are not logged in');
    }
    return models.User.findOne({
      where: {
        id,
      },
    });
  },
};