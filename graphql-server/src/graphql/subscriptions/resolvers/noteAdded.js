import { withFilter } from 'graphql-subscriptions';
import pubSub from '../../pubSub';

export default {
  noteAdded: {
    subscribe: withFilter(
      () => pubSub.asyncIterator('noteAdded'),
      (payload, variables) => {
        console.log('this is payload================', payload)
        // console.log('this is noteAdded.payload================', noteAdded.payload)
        console.log('this is variables================', variables)
        return payload.notificationId === variables.notificationId;
      },
    )
  }
}