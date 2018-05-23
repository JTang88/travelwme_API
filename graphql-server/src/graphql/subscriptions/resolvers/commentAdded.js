import { withFilter } from 'graphql-subscriptions';
import pubSub from '../../pubSub';

export default {
  commentAdded: {
    subscribe: withFilter(
      () => pubSub.asyncIterator('commentAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is commentAdded.payload================', commentAdded.payload)
        console.log('this is variables================', variables)
        return payload.tripCommentId === variables.tripCommentId;
      },
    )
  }
}
