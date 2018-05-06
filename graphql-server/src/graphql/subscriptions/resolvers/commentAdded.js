import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '../../index';

export default {
  commentAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator('commentAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is commentAdded.payload================', commentAdded.payload)
        console.log('this is variables================', variables)
        return payload.tripId === variables.tripId;
      },
    )
  }
}
