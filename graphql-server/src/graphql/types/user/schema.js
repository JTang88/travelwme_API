import Trip from '../trip/schema';

const User = `
  type User {
    id: Int
    username: String!
    email: String!
    gender: String
    birthday: String,
    description: String
    relationship: String  
    trips: [Trip!]!
    user_type: String
    publicId: String
    convoListId: String!
    notificationId: String!
    createdAt: String!
  }`;

export default () => [User, Trip];