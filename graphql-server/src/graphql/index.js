import { merge } from 'lodash';
// import { PubSub } from 'graphql-subscriptions'
import { makeExecutableSchema } from 'graphql-tools';
// import all types
import Query from './queries/schema';
import Mutation from './mutations/schema';
import Subscription from './subscriptions/schema';
import Trip from './types/trip/schema';
import TripKeyword from './types/tripKeyword/schema';
import TripMembers from './types/tripMembers/schema';
import Vote from './types/vote/schema';
import User from './types/user/schema';
import ReplyDetails from './types/replyDetails/schema';
import CommentDetails from './types/commentDetails/schema';
import TripComment from './types/tripComment/schema';
import Notification from './types/notification/schema';
import Note from './types/note/schema';
import ConvoList from './types/convoList/schema';
import Convo from './types/convo/schema';
// import all type resolvers
import TripResolver from './types/trip/resolver';
import UserResolver from './types/user/resolver';
import TripMembersResolver from './types/tripMembers/resolver';
import TripCommentReoslvers from './types/tripComment/resolver';
import NotificationResolver from './types/notification/resolver';
import ConvoResolver from './types/convo/resolver';
// import all query resolvers
import allTripMembers from './queries/resolvers/allTripMembers';
import allTrips from './queries/resolvers/allTrips';
import allUsers from './queries/resolvers/allUsers';
import getTrip from './queries/resolvers/getTrip';
import getUser from './queries/resolvers/getUser';
import searchTrips from './queries/resolvers/searchTrips';
import showTrendTrips from './queries/resolvers/showTrendTrips';
import getCreatedTrips from './queries/resolvers/getCreatedTrips';
import getJoinedTrips from './queries/resolvers/getJoinedTrips';
import getWaitingTrips from './queries/resolvers/getWaitingTrips';
import getForSureGoingTrips from './queries/resolvers/getForSureGoingTrips';
import getTripComments from './queries/resolvers/getTripComments';
import getReply from './queries/resolvers/getReply';
import getNotifications from './queries/resolvers/getNotifications';
import getConvoList from './queries/resolvers/getConvoList';
import getConvo from './queries/resolvers/getConvo';
// import all mutation resolvers
import addPhotoToTrip from './mutations/resolvers/addPhotoToTrip';
import addPhotoToUser from './mutations/resolvers/addPhotoToUser';
import createTrip from './mutations/resolvers/createTrip';
import deleteUser from './mutations/resolvers/deleteUser';
import interestedInATrip from './mutations/resolvers/interestedInATrip';
import login from './mutations/resolvers/login';
import register from './mutations/resolvers/register';
import updateTrip from './mutations/resolvers/updateTrip';
import updateTripStatus from './mutations/resolvers/updateTripStatus';
import updateUser from './mutations/resolvers/updateUser';
import updateUserRelationshipToTrip from './mutations/resolvers/updateUserRelationshipToTrip';
import deleteAUserFromTrip from './mutations/resolvers/deleteAUserFromTrip';
import forSureGoing from './mutations/resolvers/forSureGoing';
import updateTripStat from './mutations/resolvers/updateTripStat';
import updateTripDescription from './mutations/resolvers/updateTripDescription';
import forgotPassword from './mutations/resolvers/forgotPassword';
import updateUserEmail from './mutations/resolvers/updateUserEmail';
import updateUserPassword from './mutations/resolvers/updateUserPassword';
import newComment from './mutations/resolvers/newComment';
import newReply from './mutations/resolvers/newReply';
import newConvo from './mutations/resolvers/newConvo';
import newMsg from './mutations/resolvers/newMsg';
// import all subscription resolvers
import commentAdded from './subscriptions/resolvers/commentAdded';
import replyAdded from './subscriptions/resolvers/replyAdded';
import noteAdded from './subscriptions/resolvers/noteAdded';
import convoAdded from './subscriptions/resolvers/convoAdded';
import msgAdded from './subscriptions/resolvers/msgAdded';


// export const pubsub = new PubSub(); 

// Notification from './types/notification/schema';
// import Notes f

const resolvers = {
  Query: merge(
    allTripMembers, 
    allTrips, 
    allUsers, 
    getTrip, 
    getUser, 
    showTrendTrips, 
    getCreatedTrips, 
    getJoinedTrips, 
    getWaitingTrips, 
    getForSureGoingTrips, 
    searchTrips,
    getTripComments,
    getReply,
    getNotifications,
    getConvoList,
    getConvo,
  ),
  Mutation: merge(
    addPhotoToTrip, 
    addPhotoToUser, 
    createTrip, 
    deleteUser, 
    interestedInATrip, 
    login, 
    register, 
    updateTrip, 
    updateTripStatus, 
    updateUser, 
    updateUserRelationshipToTrip,
    deleteAUserFromTrip,
    forSureGoing,
    updateTripStat,
    updateTripDescription,
    forgotPassword,
    updateUserEmail,
    updateUserPassword,
    newComment,
    newReply,
    newConvo,
    newMsg,
  ),
  Subscription: merge(
    commentAdded,
    replyAdded,
    noteAdded,
    convoAdded,
    msgAdded,
  ),
  User: UserResolver,
  Trip: TripResolver,
  TripMembers: TripMembersResolver,
  TripComment: TripCommentReoslvers,
  Notification: NotificationResolver,
  Convo: ConvoResolver,
};


const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, Query, Note, Mutation, Subscription, Vote, User, TripKeyword, ...TripComment, TripMembers, Trip, ...Notification, ...Convo, ConvoList
  ],
  resolvers,
});

