import Note from '../note/schema'; 

const Notification = `
  type Notification {
    _id: String!
    notes: [Note]
  }`;

export default [Notification, Note];

