import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools';
// import all types
import Query from './queries/schema';
import Mutation from './mutations/schema';
import Trip from './types/trip/schema';
import TripKeyword from './types/tripKeyword/schema';
import TripMembers from './types/tripMembers/schema';
import Vote from './types/vote/schema';
import User from './types/user/schema';
// import all type resolvers
import TripResolver from './types/trip/resolver';
import UserResolver from './types/user/resolver';
import TripMembersResolver from './types/tripMembers/resolver';

// import all query resolvers
import allTripMembers from './queries/resolvers/allTripMembers';
import allTrips from './queries/resolvers/allTrips';
import allUsers from './queries/resolvers/allUsers';
import fitTrips from './queries/resolvers/fitTrips';
import getTrip from './queries/resolvers/getTrip';
import getUser from './queries/resolvers/getUser';
import searchTrip from './queries/resolvers/searchTrip';
import showTrendTrips from './queries/resolvers/showTrendTrips';
import getCreatedTrips from './queries/resolvers/getCreatedTrips';
import getJoinedTrips from './queries/resolvers/getJoinedTrips';
import getWaitingTrips from './queries/resolvers/getWaitingTrips';
// import all mutation resolvers
import addPhotoToTrip from './mutations/resolvers/addPhotoToTrip';
import addPhotoToUser from './mutations/resolvers/addPhotoToUser';
import createTrip from './mutations/resolvers/createTrip';
import deleteUser from './mutations/resolvers/deleteUser';
import interestedInATrip from './mutations/resolvers/interestedInATrip';
import login from './mutations/resolvers/login';
import register from './mutations/resolvers/register';
import updateTrip from './mutations/resolvers/updateTrip';
import updateTripState from './mutations/resolvers/updateTripState';
import updateUser from './mutations/resolvers/updateUser';
import updateUserRelationshipToTrip from './mutations/resolvers/updateUserRelationshipToTrip';
import deleteAUserFromTrip from './mutations/resolvers/deleteAUserFromTrip';
import forSureGoing from './mutations/resolvers/forSureGoing';
import updateTripStat from './mutations/resolvers/updateTripStat';

const resolvers = {
  Query: merge(allTripMembers, allTrips, allUsers, fitTrips, getTrip, getUser, searchTrip, showTrendTrips, getCreatedTrips, getJoinedTrips, getWaitingTrips),
  Mutation: merge(
    addPhotoToTrip, 
    addPhotoToUser, 
    createTrip, 
    deleteUser, 
    interestedInATrip, 
    login, register, 
    updateTrip, 
    updateTripState, 
    updateUser, 
    updateUserRelationshipToTrip,
    deleteAUserFromTrip,
    forSureGoing,
    updateTripStat
  ),
  User: UserResolver,
  Trip: TripResolver,
  TripMembers: TripMembersResolver,
};


const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, Query, Mutation, Vote, User, TripKeyword, TripMembers, Trip,
  ],
  resolvers,
});

