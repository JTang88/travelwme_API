export default {
  addPhotoToUser: (parent, { publicId, id }, { models }) => {
    return models.User.update({ publicId }, { where: { id } });
  },
};