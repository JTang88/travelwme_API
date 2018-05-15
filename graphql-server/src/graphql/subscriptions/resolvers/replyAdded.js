import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '../../mutations/resolvers/newReply';
// import { pubsub } from '../../mutations/resolvers/newComment';

export default {
  replyAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator('replyAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is replyAdded.payload================', replyAdded.payload)
        console.log('this is variables================', variables)
        return payload.tripId === variables.tripId;
      },
    )
  }
}
