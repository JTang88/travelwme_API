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
    interesters: Int!,
    joiners: Int!,
    forSureGoing: Int!,
    age_start: Int
    age_end: Int
    trip_keywords: String
    relationship: String
    trip_status: String
    user_type: String
    countries: String
    continents: String
    members: [TripMembers]
    publicId: String
    tripCommentId: String!
  }`;

export default () => [Trip, TripMembers];