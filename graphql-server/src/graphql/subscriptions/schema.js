import { PubSub } from 'graphql-subscriptions';

export const pubSub = new PubSub();

export const Subscription = `
  type Subscription {
    commentAdded(tripId: Int!): Comment
  }
`;
