import { withFilter } from 'graphql-subscriptions';
import pubSub from '../../pubSub';

export default {
  msgAdded: {
    subscribe: withFilter(
      () => pubSub.asyncIterator('msgAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is msgAdded.payload================', msgAdded.payload)
        console.log('this is variables================', variables)
        return payload.convoId === variables.convoId;
      },
    )
  }
}