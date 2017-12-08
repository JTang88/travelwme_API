import express from 'express';
import router from './routes';

const app = express();

app.use('/api', router);
app.get('/', (req, res) => res.send('Hello World!'));

export default app;
