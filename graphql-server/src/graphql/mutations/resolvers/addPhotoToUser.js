export default {
  addPhotoToUser: async (parent, { publicId, id }, { models }) => {
    await models.User.update({ publicId }, { where: { id } });
    return models.User.findById(id);
  },
};