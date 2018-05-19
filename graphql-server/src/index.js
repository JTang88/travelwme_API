import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import cors from 'cors';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { schema } from './graphql';
import { db as models, mongoDb } from '../../db';
import { read } from 'fs';

models.sequelize.sync();

const app = express();
const port = 3001 || process.env.PORT;
const addUser = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log('this is token', token)
  console.log('this is token type', typeof token)

  try {
    const { user } = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
  } catch(err) {
    console.log(err);
  }
  req.next(); 
} 

app.use(cors('/*'));

// comment out the follwoing line to bypass authentication, also go to resolver.js, find the comments and do the same
app.use(addUser);

app.use('/graphiql', 
  graphiqlExpress({ 
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
  }),
);

const mongo = mongoDb.models;

app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ 
  schema,
  context: { models, user: req.user, mongo },
  })),
);


const ws = createServer(app);
ws.listen(port, () => {
  console.log(`Apollo Server is now running on http://localhost:${port}`);
  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
});


// export default app;
