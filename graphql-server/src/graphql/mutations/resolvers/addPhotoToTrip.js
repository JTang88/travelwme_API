export default {
  addPhotoToTrip: (parent, { publicId, id }, { models }) => {
    return models.Trip.update( { publicId: publicId }, { where: { id: id } });
  },
};