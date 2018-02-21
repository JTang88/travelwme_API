import Trip from '../trip/schema';

const User = `
  type User {
    id: Int
    username: String!
    email: String!
    gender: String
    age: Int,
    body_type: String
    description: String
    relationship: String  
    trips: [Trip!]!
    user_type: String
    publicId: String
  }`;

export default () => [User, Trip];