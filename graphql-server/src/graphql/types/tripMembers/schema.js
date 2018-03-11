import User from '../user/schema';
// import Trip from '../trip/schema';

const TripMembers = `
  type TripMembers {
    id: Int
    user_type: String
    user: User
    tripId: Int
  }`;

export default () => [TripMembers, User];