import Notification from '../../../../../db/models/notification';

export default {
  notes: async ({ _id }, args, { models }) => {
    const notification = await Notification.findById(_id);
    return notification.notes;
  },
};