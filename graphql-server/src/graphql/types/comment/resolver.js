import Comment from '../../../../../db/models/comment';

export default {
  reply: async ({ _id }, args, { models }) => {
    const comment = await Comment.findById(_id);
    return comment.reply;
  }
};