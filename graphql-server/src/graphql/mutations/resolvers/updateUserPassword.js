import bcrypt from 'bcrypt';

export default {
  updateUserPassword: async (parent, { id, oldPassword, newPassword  }, { models }) => {
    const user = await models.User.findOne({ where: { id }}); 
    const valid = await bcrypt.compare(oldPassword, user.password); 
    if(!valid) {
      return 'invalid old password!!';
    }
    const password = await bcrypt.hash(newPassword, 12);
    await models.User.update( { password }, { where: { id } });
    return 'Password changed succussfully!'
  },
}
