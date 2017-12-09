import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import router from './routes';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from '../../db';


models.sequelize.sync();

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphiql', graphiqlExpress({ endpointURL: '/grapihql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

// app.use('/api', router);
// models.sequelize.sync();
// app.get('/', (req, res) => res.send('Hello World!'));

export default app;
