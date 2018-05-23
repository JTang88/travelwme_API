import mongoose from 'mongoose';
import Notification from '../../../../../db/models/notification';

export default {
  getNotifications: async (parent, { notificationId }, { models }) => {
    const notification = await Notification.findById(notificationId);
    return notification.notes;
  }
};


// getNotifications(notificationId: String!): [Note]
