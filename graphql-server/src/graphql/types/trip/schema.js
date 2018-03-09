import TripMembers from '../tripMembers/schema';
import User from '../user/schema';

const Trip = `
  type Trip {
    id: Int
    createdAt: String!
    updatedAt: String!
    title: String
    description: String
    cost: Int
    date_start: String
    date_end: String
    gender: String
    creator: User
    age_start: Int
    age_end: Int
    body_types: String
    trip_keywords: String
    relationship: String
    trip_status: String
    user_type: String
    members: [TripMembers]
    publicId: String
  }`;

export default () => [Trip, TripMembers];