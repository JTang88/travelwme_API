import Msg from '../msg/schema';

const Convo = `
  type Convo {
    userIds: [Int]
    users: [User]
    _id: String!
    msgs: [Msg]
  }`;

export default [Convo, Msg];