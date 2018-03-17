import User from '../user/schema';
// import Trip from '../trip/schema';

const TripMembers = `
  type TripMembers {
    id: Int
    user_type: String
    forSureGoing: Boolean
    user: User
    updatedAt: String
    tripId: Int
  }`;

export default () => [TripMembers, User];