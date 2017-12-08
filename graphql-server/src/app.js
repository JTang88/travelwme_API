import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import router from './routes';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/api', router);


// app.get('/', (req, res) => res.send('Hello World!'));


export default app;
