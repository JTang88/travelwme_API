const ConvoId = `
type ConvoId {
  _id: String
  convoId: String
}`;

const ConvoList = `
  type ConvoList {
    _id: String!
    convoIds: [ConvoId]
  }`;

export default [ConvoList, ConvoId];

