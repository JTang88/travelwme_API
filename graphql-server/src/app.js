import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import router from './routes';
import typeDefs from './schema/';
import resolvers from './schema/resolvers';
import models from '../../db';
import { read } from 'fs';


models.sequelize.sync();

const app = express();

const addUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { user } = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
  } catch(err) {
    console.log(err);
  }
  req.next(); 
} 

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());

// comment out the follwoing line to bypass authentication, also go to resolver.js, find the comments and do the same
// app.use(addUser);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ 
  schema,
  context: { models, user: req.user },
  })),
);

// app.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema,
//   context: { models },
// }),
// );

export default app;
