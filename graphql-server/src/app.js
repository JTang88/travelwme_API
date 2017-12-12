import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import router from './routes';
import typeDefs from './schema/';
import resolvers from './schema/resolvers';
import models from '../../db';


models.sequelize.sync();

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

export default app;
