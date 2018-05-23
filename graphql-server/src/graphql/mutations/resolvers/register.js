import bcrypt from 'bcrypt';
import Notification from '../../../../../db/models/notification';
import ConvoList from '../../../../../db/models/convoList';

export default {
  register: async (parent, args, { models , mongo }) => {
    try {
      args.password = await bcrypt.hash(args.password, 12);
      console.log('in here ==================================================')
      const notification = await new Notification({}).save();
      console.log('here is notification', notification);
      args.notificationId = notification._id.toString();
      const convoList = await new ConvoList({}).save();
      args.convoListId = convoList._id.toString();

      console.log('now it saves into convoList', convoList._id);
      const user = await models.User.create(args);
      return user;
    } catch(err) {
      console.log(err)
    }
  },
}


// convoListId