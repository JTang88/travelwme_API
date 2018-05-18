const ConvoId = `
type ConvoId {
  convoId: String
}`;

const ConvoList = `
  type ConvoList {
    _id: String!
    convoIds: [ConvoId]
  }`;

export default [ConvoList, ConvoId];

