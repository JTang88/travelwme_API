import { withFilter } from 'graphql-subscriptions';
import pubSub from '../../pubSub';

export default {
  replyAdded: {
    subscribe: withFilter(
      () => pubSub.asyncIterator('replyAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is replyAdded.payload================', replyAdded.payload)
        console.log('this is variables================', variables)
        return payload.tripCommentId === variables.tripCommentId;
      },
    )
  }
}
