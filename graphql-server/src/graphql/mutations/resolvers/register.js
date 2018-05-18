import bcrypt from 'bcrypt';
import { mongoDb } from '../../../../../db/index';

export default {
  register: async (parent, args, { models }) => {
    args.password = await bcrypt.hash(args.password, 12);
    const notification = await new mongoDb.models.Notification({}).save();
    args.notificationId = notification._id.toString();
    return models.User.create(args);
  },
}