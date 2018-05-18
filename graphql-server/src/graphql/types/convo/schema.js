import Msg from '../msg/schema';

const Convo = `
  type Convo {
    _id: String!
    msgs: [Msg]
  }`;

export default [Convo, Msg];