import { withFilter } from 'graphql-subscriptions';
import pubSub from '../../pubSub';

export default {
  convoAdded: {
    subscribe: withFilter(
      () => pubSub.asyncIterator('convoAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is convoAdded.payload================', convoAdded.payload)
        console.log('this is variables================', variables)
        return payload.convoListId === variables.convoListId;
      },
    )
  }
}