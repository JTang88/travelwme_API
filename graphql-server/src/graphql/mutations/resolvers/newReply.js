// import mongoose from 'mongoose';
// import Comment from '../../../../../db/models/comment';

// export default {
//   newComment: async (parent, { username, tripId, text }, { models }) => {
//     const comment = new Comment({
//       _id: new mongoose.Types.ObjectId,
//       username,
//       tripId,
//       text,
//     })
//     try {
//       await comment.save();
//       console.log('this is comment==================', comment)

//     } catch (err) {
//       console.log(err)
//     }
//   }
// };

// var query = { name: 'borne' };
// Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)
