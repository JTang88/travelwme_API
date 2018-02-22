import bcrypt from 'bcrypt';

export default {
  register: async (parent, args, { models }) => {
    args.password = await bcrypt.hash(args.password, 12);
    return models.User.create(args);
  },
}