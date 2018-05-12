import mongoose from 'mongoose';
import Reply from '../../../../../db/models/reply';

export default {
  getReply: async (parent, { tripId }, { models }) => {
    console.log('is it even in here?')
    const reply = await Reply.find({ tripId }).exec();
    console.log('here is reply', reply)
    return reply
  }
};
